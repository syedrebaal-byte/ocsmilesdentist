// Import assets directly so Vite bundles and hashes them into /dist/assets on Vercel build
import heroSuite from './images/hero_luxury_dental_suite_1792425256930.jpg';
import drPortrait from './images/dr_marcia_martinez_portrait_1792425258176.jpg';
import invisalignCare from './images/invisalign_smile_care_1792425259010.jpg';
import cosmeticSmile from './images/cosmetic_smile_makeover_1792425259984.jpg';
import familyDentistry from './images/gentle_family_dentistry_1792425260318.jpg';

export const CLINIC_IMAGES = {
  heroSuite,
  drPortrait,
  invisalignCare,
  cosmeticSmile,
  familyDentistry,
} as const;
