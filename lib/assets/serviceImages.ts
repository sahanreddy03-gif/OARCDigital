// Centralized service images - used in carousel and individual service pages
// Custom service banners
const adCreativeBanner = "/attached_assets/ad creative_1763084489954.avif";
const webDesignBanner = "/attached_assets/web design_1763084519615.avif";
const motionDesignBanner = "/attached_assets/motion design_1763084597887.avif";
const designSystemsBanner = "/attached_assets/15_1763085718435.avif";
const emailCreativeBanner = "/attached_assets/email craetion_1763085804635.avif";
const presentationDesignBanner = "/attached_assets/presentation design_1763086077235.avif";
const illustrationBanner = "/attached_assets/illustration desoigns_1763086173736.avif";
const printPackagingBanner = "/attached_assets/printy design_1763086257815.avif";
const paidAdvertisingBanner = "/attached_assets/paid advertising_1763088406833.avif";
const mediaBuyingBanner = "/attached_assets/media buying_1763086700057.jpg";
const influencerMarketingBanner = "/attached_assets/influencer_1763087034115.jpg";
const aiConsultingBanner = "/attached_assets/ai consulting_1763087215182.avif";
const videoProductionBanner = "/attached_assets/ai-video-production-optimized.jpg";
const presentationOptimized = "/attached_assets/presentation-design-optimized.jpg";
const adCreativeOptimized = "/attached_assets/paid-advertising-creative-optimized.jpg";
const websiteDesignOptimized = "/attached_assets/website-design-optimized.jpg";
const emailCreationOptimized = "/attached_assets/email-creation-optimized.jpg";
const illustrationOptimized = "/attached_assets/illustration-design-optimized.jpg";
const aiConsultingOptimized = "/attached_assets/ai-consulting-optimized.jpg";
const printDesignOptimized = "/attached_assets/print-design-optimized.jpg";
const conceptCreationOptimized = "/attached_assets/concept-creation-optimized.jpg";
const designSystemsOptimized = "/attached_assets/design-systems-optimized.jpg";
const aiEnhancedOptimized = "/attached_assets/ai-enhanced-creative-optimized.jpg";
const immersiveDesignOptimized = "/attached_assets/immersive-design-optimized.jpg";
const socialMediaOptimized = "/attached_assets/social-media-creative-optimized.jpg";
const packagingMerchOptimized = "/attached_assets/packaging-merch-optimized.jpg";
const videoProductionOptimized = "/attached_assets/video-production-optimized.jpg";
const ebookReportOptimized = "/attached_assets/ebook-report-optimized.jpg";

const img1 = "/attached_assets/1_1763083221531.avif";
const img2 = "/attached_assets/2_1763083221532.avif";
const img3 = "/attached_assets/3_1763083221532.avif";
const img4 = "/attached_assets/4_1763083221532.avif";
const img5 = "/attached_assets/5_1763083221533.avif";
const img6 = "/attached_assets/6_1763083221533.avif";
const img7 = "/attached_assets/7_1763083221533.avif";
const img8 = "/attached_assets/8_1763083221534.avif";
const img9 = "/attached_assets/9_1763083221534.avif";
const img10 = "/attached_assets/10_1763083221535.avif";
const img11 = "/attached_assets/11_1763083221535.avif";
const img12 = "/attached_assets/12_1763083221535.avif";
const img13 = "/attached_assets/13_1763083221536.avif";
const img14 = "/attached_assets/14_1763083221536.avif";
const img15 = "/attached_assets/15_1763083221536.avif";
const img16 = "/attached_assets/16_1763083221537.avif";
const img17 = "/attached_assets/17_1763083221537.avif";
const img18 = "/attached_assets/18_1763083221537.avif";

export const serviceImages = {
  adCreative: adCreativeOptimized,
  socialMedia: socialMediaOptimized,
  presentation: presentationOptimized,
  illustration: illustrationOptimized,
  branding: img5,
  ebook: ebookReportOptimized,
  concept: conceptCreationOptimized,
  printDesign: printDesignOptimized,
  packaging: packagingMerchOptimized,
  video: videoProductionOptimized,
  motion: img11,
  immersive: immersiveDesignOptimized,
  email: emailCreationOptimized,
  webDesign: websiteDesignOptimized,
  designSystems: designSystemsOptimized,
  productDesign: img16,
  aiEnhanced: aiEnhancedOptimized,
  aiConsulting: aiConsultingOptimized,
};

// Mapping by service slug for easy lookup
export const serviceImagesBySlug: Record<string, string> = {
  'ad-creative': adCreativeBanner,
  'social-media-creative': img2,
  'social-media-creative-management': img2,
  'presentation-design': presentationOptimized,
  'presentation-pitch': presentationOptimized,
  'illustration': illustrationBanner,
  'branding-services': img5,
  'ebook-design': img6,
  'concept-creation': img7,
  'print-design': printPackagingBanner,
  'print-packaging': printPackagingBanner,
  'packaging-design': printPackagingBanner,
  'video-production': videoProductionBanner,
  'motion-design': motionDesignBanner,
  'immersive-design': img12,
  'immersive-3d-ar': img12,
  'email-creative': emailCreativeBanner,
  'web-design': webDesignBanner,
  'design-systems': designSystemsBanner,
  'product-design': img16,
  'ai-enhanced-creative': img17,
  'paid': paidAdvertisingBanner,
  'paid-advertising': paidAdvertisingBanner,
  'media-buying': mediaBuyingBanner,
  'influencer-marketing': influencerMarketingBanner,
  'ai-consulting': aiConsultingBanner,
};
