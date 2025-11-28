// Centralized service images - used in carousel and individual service pages
// Custom service banners
import adCreativeBanner from '@assets/ad creative_1763084489954.avif';
import webDesignBanner from '@assets/web design_1763084519615.avif';
import motionDesignBanner from '@assets/motion design_1763084597887.avif';
import designSystemsBanner from '@assets/15_1763085718435.avif';
import emailCreativeBanner from '@assets/email craetion_1763085804635.avif';
import presentationDesignBanner from '@assets/presentation design_1763086077235.avif';
import illustrationBanner from '@assets/illustration desoigns_1763086173736.avif';
import printPackagingBanner from '@assets/printy design_1763086257815.avif';
import paidAdvertisingBanner from '@assets/paid advertising_1763088406833.avif';
import mediaBuyingBanner from '@assets/media buying_1763086700057.jpg';
import influencerMarketingBanner from '@assets/influencer_1763087034115.jpg';
import aiConsultingBanner from '@assets/ai consulting_1763087215182.avif';
import videoProductionBanner from '@assets/ai-video-production-optimized.jpg';

import img1 from '@assets/1_1763083221531.avif';
import img2 from '@assets/2_1763083221532.avif';
import img3 from '@assets/3_1763083221532.avif';
import img4 from '@assets/4_1763083221532.avif';
import img5 from '@assets/5_1763083221533.avif';
import img6 from '@assets/6_1763083221533.avif';
import img7 from '@assets/7_1763083221533.avif';
import img8 from '@assets/8_1763083221534.avif';
import img9 from '@assets/9_1763083221534.avif';
import img10 from '@assets/10_1763083221535.avif';
import img11 from '@assets/11_1763083221535.avif';
import img12 from '@assets/12_1763083221535.avif';
import img13 from '@assets/13_1763083221536.avif';
import img14 from '@assets/14_1763083221536.avif';
import img15 from '@assets/15_1763083221536.avif';
import img16 from '@assets/16_1763083221537.avif';
import img17 from '@assets/17_1763083221537.avif';
import img18 from '@assets/18_1763083221537.avif';

export const serviceImages = {
  adCreative: img1,
  socialMedia: img2,
  presentation: img3,
  illustration: img4,
  branding: img5,
  ebook: img6,
  concept: img7,
  printDesign: img8,
  packaging: img9,
  video: img10,
  motion: img11,
  immersive: img12,
  email: img13,
  webDesign: img14,
  designSystems: img15,
  productDesign: img16,
  aiEnhanced: img17,
  aiConsulting: img18,
};

// Mapping by service slug for easy lookup
export const serviceImagesBySlug: Record<string, string> = {
  'ad-creative': adCreativeBanner,
  'social-media-creative': img2,
  'social-media-creative-management': img2,
  'presentation-design': presentationDesignBanner,
  'presentation-pitch': presentationDesignBanner,
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
