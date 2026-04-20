import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true, disableStaticImages: true },
  eslint: { ignoreDuringBuilds: true },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@assets': path.resolve(__dirname, 'attached_assets'),
      '@shared': path.resolve(__dirname, 'shared'),
      '@/assets': path.resolve(__dirname, 'lib/assets'),
      '@/config': path.resolve(__dirname, 'lib/config'),
      '@/data': path.resolve(__dirname, 'lib/data'),
      '@/hooks': path.resolve(__dirname, 'lib/hooks'),
    };
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg|heic|heif)$/i,
      type: 'asset/resource',
      generator: { filename: 'static/media/[name].[hash][ext]' },
    });
    config.module.rules.push({
      test: /\.(mp4|mov|webm|avi|m4v|ogv)$/i,
      type: 'asset/resource',
      generator: { filename: 'static/media/[name].[hash][ext]' },
    });
    return config;
  },
};

export default nextConfig;
