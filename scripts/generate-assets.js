#!/usr/bin/env node
/**
 * OARC Digital Asset Generation Pipeline
 * 
 * Processes 8K master images/videos into responsive web-optimized variants.
 * Generates WebP, AVIF, MP4, WebM + poster frames + LQIP placeholders.
 * 
 * Usage:
 *   npm run generate-assets
 *   npm run generate-assets -- --page=hire-ai-employees
 *   npm run generate-video -- --page=revenue-automation
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Configuration
const CONFIG = {
  inputDir: path.join(__dirname, '../design-assets/masters'),
  outputDir: path.join(__dirname, '../design-assets/web'),
  manifestPath: path.join(__dirname, '../design-assets/manifest.json'),
  
  // Image sizes to generate
  imageSizes: [
    { width: 3840, suffix: '3840', formats: ['avif', 'webp'] },
    { width: 2048, suffix: '2048', formats: ['avif', 'webp'] },
    { width: 1600, suffix: '1600', formats: ['webp'] },
    { width: 1200, suffix: '1200', formats: ['webp'] },
    { width: 800, suffix: '800', formats: ['webp'] },
    { width: 480, suffix: '480', formats: ['webp'] },
  ],
  
  // Quality settings
  quality: {
    avif: 70,
    webp: 70,
    lqip: 20
  },
  
  // LQIP settings
  lqipWidth: 20,
  lqipBlur: 10
};

/**
 * Generate web-optimized image variants from a master image
 */
async function generateImageVariants(masterPath, pageslug) {
  const filename = path.basename(masterPath, path.extname(masterPath));
  const outputPageDir = path.join(CONFIG.outputDir, pageslug);
  
  // Ensure output directory exists
  await fs.mkdir(outputPageDir, { recursive: true });
  
  const variants = [];
  
  try {
    // Load master image
    const image = sharp(masterPath);
    const metadata = await image.metadata();
    
    console.log(`Processing ${filename} (${metadata.width}x${metadata.height})`);
    
    // Generate each size variant
    for (const size of CONFIG.imageSizes) {
      for (const format of size.formats) {
        const outputFilename = `${filename}-${size.suffix}.${format}`;
        const outputPath = path.join(outputPageDir, outputFilename);
        
        await image
          .clone()
          .resize(size.width, null, { withoutEnlargement: true })
          [format]({ quality: CONFIG.quality[format] })
          .toFile(outputPath);
        
        const stats = await fs.stat(outputPath);
        variants.push({
          path: outputPath.replace(process.cwd(), ''),
          width: size.width,
          format,
          size: `${(stats.size / 1024).toFixed(1)}KB`
        });
        
        console.log(`  ✓ Generated ${outputFilename} (${(stats.size / 1024).toFixed(1)}KB)`);
      }
    }
    
    // Generate LQIP (Low Quality Image Placeholder)
    const lqipFilename = `${filename}-lqip.jpg`;
    const lqipPath = path.join(outputPageDir, lqipFilename);
    
    await image
      .clone()
      .resize(CONFIG.lqipWidth, null, { withoutEnlargement: true })
      .blur(CONFIG.lqipBlur)
      .jpeg({ quality: CONFIG.quality.lqip })
      .toFile(lqipPath);
    
    console.log(`  ✓ Generated LQIP ${lqipFilename}`);
    
    // Generate srcset string
    const srcset = variants
      .filter(v => v.format === 'webp')
      .map(v => `${v.path} ${v.width}w`)
      .join(', ');
    
    return {
      variants,
      lqip: lqipPath.replace(process.cwd(), ''),
      srcset,
      originalWidth: metadata.width,
      originalHeight: metadata.height
    };
    
  } catch (error) {
    console.error(`Error processing ${masterPath}:`, error.message);
    return null;
  }
}

/**
 * Generate video variants (requires ffmpeg)
 * Placeholder for now - will implement when ffmpeg is available
 */
async function generateVideoVariants(masterPath, pageslug) {
  console.log(`Video generation placeholder for ${masterPath}`);
  console.log('Note: Video processing requires ffmpeg. Install with: apt-get install ffmpeg');
  
  // TODO: Implement video processing with ffmpeg
  // - Generate MP4 (H.264) variant
  // - Generate WebM (VP9) variant
  // - Extract poster frame
  // - Add to manifest
  
  return {
    placeholder: true,
    note: 'Video processing not yet implemented. Requires ffmpeg installation.'
  };
}

/**
 * Update manifest.json with generated asset information
 */
async function updateManifest(pageslug, assetType, assetData) {
  try {
    const manifestContent = await fs.readFile(CONFIG.manifestPath, 'utf-8');
    const manifest = JSON.parse(manifestContent);
    
    if (!manifest.pages[pageslug]) {
      manifest.pages[pageslug] = {};
    }
    
    manifest.pages[pageslug][assetType] = {
      ...manifest.pages[pageslug][assetType],
      ...assetData,
      generated: new Date().toISOString(),
      placeholder: false
    };
    
    await fs.writeFile(CONFIG.manifestPath, JSON.stringify(manifest, null, 2));
    console.log(`✓ Updated manifest for ${pageslug}/${assetType}`);
    
  } catch (error) {
    console.error('Error updating manifest:', error.message);
  }
}

/**
 * Process all masters in a page directory
 */
async function processPage(pageslug) {
  const pageDir = path.join(CONFIG.inputDir, pageslug);
  
  try {
    const files = await fs.readdir(pageDir);
    
    for (const file of files) {
      const filePath = path.join(pageDir, file);
      const ext = path.extname(file).toLowerCase();
      
      // Image files
      if (['.tiff', '.tif', '.png', '.jpg', '.jpeg'].includes(ext)) {
        const result = await generateImageVariants(filePath, pageslug);
        if (result) {
          await updateManifest(pageslug, 'hero', result);
        }
      }
      
      // Video files
      if (['.mov', '.mp4', '.avi'].includes(ext)) {
        const result = await generateVideoVariants(filePath, pageslug);
        if (result) {
          await updateManifest(pageslug, 'hero-video', result);
        }
      }
    }
    
  } catch (error) {
    console.error(`Error processing page ${pageslug}:`, error.message);
  }
}

/**
 * Main execution
 */
async function main() {
  const args = process.argv.slice(2);
  const pageArg = args.find(arg => arg.startsWith('--page='));
  
  console.log('🎨 OARC Digital Asset Generation Pipeline\n');
  
  try {
    // Ensure output directory exists
    await fs.mkdir(CONFIG.outputDir, { recursive: true });
    
    if (pageArg) {
      // Process specific page
      const pageslug = pageArg.split('=')[1];
      console.log(`Processing page: ${pageslug}\n`);
      await processPage(pageslug);
    } else {
      // Process all pages
      console.log('Processing all pages...\n');
      const pages = await fs.readdir(CONFIG.inputDir);
      
      for (const page of pages) {
        const pagePath = path.join(CONFIG.inputDir, page);
        const stat = await fs.stat(pagePath);
        
        if (stat.isDirectory()) {
          console.log(`\n📁 ${page}`);
          await processPage(page);
        }
      }
    }
    
    console.log('\n✅ Asset generation complete!');
    console.log(`📄 Check ${CONFIG.manifestPath} for details\n`);
    
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  generateImageVariants,
  generateVideoVariants,
  updateManifest
};
