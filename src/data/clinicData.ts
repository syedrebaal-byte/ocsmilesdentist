import { DentalService, Testimonial, BeforeAfterCase, ClinicDetails } from '../types/dental';
import { CLINIC_IMAGES } from '../assets/images';

export const CLINIC_DATA: ClinicDetails = {
  name: 'OC Smiles',
  subname: 'Cosmetic & Family Dentistry',
  establishedYear: 1971,
  founder: 'Dr. Julio Martinez',
  currentDoctor: {
    name: 'Dr. Marcia Martinez',
    credentials: 'DMD',
    title: 'Owner & Principal Cosmetic Dentist',
    heritage: 'Serving Central Florida smiles across two generations of dental dedication.',
    bio: [
      'Dr. Marcia Martinez has been providing compassionate, high-precision dental care to the Orlando community since 2001. She proudly continues the family legacy established by her father, Dr. Julio Martinez, who founded the practice in 1971 and where her mother served as a dedicated hygienist.',
      'A passionate advocate for advanced dental technology and gentle clinical technique, Dr. Martinez is an active Fellow of the American Academy of Clear Aligners (AACA) and spearheads the Orlando AACA Study Club, training peers in modern clear aligner therapy.',
      'Her clinical philosophy centers on conservative, patient-first dentistry: preserving natural tooth structure while engineering radiant, harmonious smiles in a calming, boutique environment.'
    ],
    education: [
      'Florida State University — Bachelor of Science',
      'University of Pittsburgh School of Dental Medicine — Doctor of Dental Medicine (DMD)',
      'Fellow, American Academy of Clear Aligners (AACA)',
      'Leader & Mentor, Orlando AACA Regional Study Club'
    ],
    fellowships: [
      'Fellow, American Academy of Clear Aligners (AACA)',
      'Member, American Dental Association (ADA)',
      'Member, Florida Dental Association (FDA)',
      'Member, Central Florida District Dental Association (CFDDA)'
    ]
  },
  address: {
    street: '5180 Curry Ford Road',
    city: 'Orlando',
    state: 'FL',
    zip: '32812',
    full: '5180 Curry Ford Road, Orlando, FL 32812'
  },
  phone: '(407) 273-6620',
  phoneRaw: '14072736620',
  email: 'care@ocsmilesdentist.com',
  hours: [
    { day: 'Monday', time: '8:30 AM – 5:00 PM', isOpen: true },
    { day: 'Tuesday', time: '9:00 AM – 5:00 PM', isOpen: true },
    { day: 'Wednesday', time: '8:30 AM – 5:00 PM', isOpen: true },
    { day: 'Thursday', time: '8:30 AM – 5:00 PM', isOpen: true },
    { day: 'Friday', time: 'Closed (Emergency By Appointment)', isOpen: false },
    { day: 'Saturday & Sunday', time: 'Closed', isOpen: false }
  ],
  insurances: [
    'Delta Dental PPO / Premier',
    'Cigna Dental PPO',
    'MetLife Dental',
    'Aetna Dental',
    'Guardian Dental',
    'Humana Dental',
    'United Healthcare',
    'CareCredit® Healthcare Financing'
  ]
};

export const CLINIC_SERVICES: DentalService[] = [
  {
    id: 'invisalign',
    category: 'orthodontics',
    title: 'Invisalign® Clear Aligners',
    tagline: 'Discreet Orthodontic Precision by an AACA Fellow',
    description: 'Straighten crowded teeth, close gaps, and correct bite misalignment comfortably without metal brackets. Led by Dr. Marcia Martinez, a Fellow of the American Academy of Clear Aligners.',
    benefits: [
      'Virtually invisible medical-grade SmartTrack® material',
      'Removable for effortless eating, brushing, and flossing',
      'Digitally mapped with 3D intraoral scanning — no uncomfortable putty impressions',
      'Predictable clinical progress monitored by an authorized AACA Study Club leader'
    ],
    durationEstimate: 'Typically 6 to 18 months depending on clinical complexity',
    idealFor: 'Adults and teens seeking discreet smile alignment with zero lifestyle compromise.',
    image: CLINIC_IMAGES.invisalignCare,
    faqs: [
      {
        question: 'How many hours each day must I wear the aligners?',
        answer: 'For optimal results, clear aligners should be worn 20 to 22 hours per day, removing them only to eat, drink non-water beverages, brush, and floss.'
      },
      {
        question: 'Will Invisalign treatment affect my speech?',
        answer: 'Most patients adapt within 24 to 48 hours with negligible vocal difference as your tongue adjusts to the ultra-thin custom trays.'
      }
    ]
  },
  {
    id: 'cosmetic-smile-design',
    category: 'cosmetic',
    title: 'Cosmetic Dentistry & Veneers',
    tagline: 'Artisanal Porcelain Veneers & Smile Makeovers',
    description: 'Custom-sculpted porcelain veneers, cosmetic composite bonding, and enamel recontouring designed to mirror the natural translucency, symmetry, and warmth of authentic enamel.',
    benefits: [
      'Handcrafted dental porcelain custom-shaded to your facial tone',
      'Resistant to coffee, wine, and everyday dietary staining',
      'Minimally invasive preparation preserving vital tooth structure',
      'Comprehensive aesthetic smile analysis prior to fabrication'
    ],
    durationEstimate: 'Usually 2 to 3 visits over a 2–3 week period',
    idealFor: 'Patients wishing to address chips, gaps, severe discoloration, or worn uneven enamel.',
    image: CLINIC_IMAGES.cosmeticSmile,
    faqs: [
      {
        question: 'How long do custom porcelain veneers last?',
        answer: 'With proper oral hygiene and regular preventive exams, handcrafted porcelain veneers can last 15 to 20 years or longer.'
      },
      {
        question: 'Is the procedure comfortable?',
        answer: 'Yes. We utilize gentle local numbing and soothing comfort techniques so you feel relaxed and at ease throughout your appointment.'
      }
    ]
  },
  {
    id: 'family-preventive',
    category: 'preventive',
    title: 'Family & Preventive Dentistry',
    tagline: 'Gentle Lifelong Oral Wellness for Children, Teens & Adults',
    description: 'Comprehensive examinations, ultrasonic cleanings, digital low-radiation radiography, periodontal evaluations, and fluoride varnish in a serene environment.',
    benefits: [
      'Thorough, gentle dental cleanings and customized home-care coaching',
      'Digital low-dose X-rays for maximum patient safety',
      'Warm pediatric approach that fosters calm, positive lifelong habits',
      'Early detection of decay, enamel wear, and oral pathology'
    ],
    durationEstimate: '45 to 60 minutes for routine preventive visit',
    idealFor: 'Families and individuals dedicated to maintaining healthy teeth and gum foundations.',
    image: CLINIC_IMAGES.familyDentistry,
    faqs: [
      {
        question: 'At what age should children have their first dental visit?',
        answer: 'We recommend scheduling your child’s first visit around their first birthday or within six months after their first tooth emerges.'
      },
      {
        question: 'How often should I have my teeth professionally cleaned?',
        answer: 'Most patients thrive on a twice-yearly (every six months) cleaning schedule, while patients with gum health concerns may benefit from quarterly visits.'
      }
    ]
  },
  {
    id: 'teeth-whitening',
    category: 'cosmetic',
    title: 'Professional Teeth Whitening',
    tagline: 'Safe, High-Efficiency Enamel Brightening',
    description: 'Doctor-supervised teeth whitening treatments that safely lift years of deep coffee, tea, red wine, and tobacco staining without damaging sensitive tooth enamel.',
    benefits: [
      'Clinically formulated desensitizing agents for comfortable treatment',
      'Up to 8 shades lighter in a single comfortable clinical session',
      'Custom laboratory-crafted take-home trays for effortless maintenance',
      'Significantly safer and more uniform than over-the-counter whitening strips'
    ],
    durationEstimate: '60-minute in-office session or 10–14 days for custom take-home kits',
    idealFor: 'Anyone wanting a bright, vibrant boost ahead of weddings, photography, or major events.',
    image: CLINIC_IMAGES.heroSuite,
    faqs: [
      {
        question: 'Does professional whitening cause permanent sensitivity?',
        answer: 'No. Any minor sensitivity experienced is mild and typically dissipates within 24 to 48 hours, aided by our soothing remineralizing gels.'
      }
    ]
  },
  {
    id: 'restorative-fillings',
    category: 'restorative',
    title: 'Composite Fillings & Restorations',
    tagline: 'Mercury-Free, Tooth-Colored Structural Rebuilding',
    description: 'Seamless composite resin restorations and durable porcelain crowns that match your exact tooth shade, restoring chewing strength and natural tooth anatomy.',
    benefits: [
      '100% metal-free and biocompatible composite materials',
      'Directly bonded to natural tooth structure to prevent fractures',
      'Polished to mimic the natural gloss and contour of virgin enamel',
      'Long-lasting protection against recurring bacterial decay'
    ],
    durationEstimate: '45 to 75 minutes per restoration',
    idealFor: 'Patients needing cavity treatment or replacing older darkened silver amalgam fillings.',
    image: CLINIC_IMAGES.heroSuite,
    faqs: [
      {
        question: 'Can I replace my old silver fillings with tooth-colored composite?',
        answer: 'Yes. Dr. Martinez carefully evaluates older restorations and can safely replace deteriorated or discolored amalgam with durable tooth-colored resins.'
      }
    ]
  },
  {
    id: 'emergency-dentistry',
    category: 'emergency',
    title: 'Emergency Dental Care',
    tagline: 'Prompt Relief for Toothaches, Broken Teeth & Trauma',
    description: 'Same-day urgent dental evaluations to alleviate severe discomfort, stabilize cracked or knocked-out teeth, and treat acute infections.',
    benefits: [
      'Prioritized emergency scheduling during business hours',
      'Rapid digital diagnostics to pinpoint the root source of pain',
      'Immediate pain management and infection stabilization',
      'Conservative, long-term treatment planning once stabilized'
    ],
    durationEstimate: '30 to 60 minutes for initial stabilization',
    idealFor: 'Sudden severe toothaches, chipped or knocked-out teeth, lost crowns, or acute swelling.',
    image: CLINIC_IMAGES.heroSuite,
    faqs: [
      {
        question: 'What should I do if a tooth is knocked out?',
        answer: 'Handle the tooth only by the crown (never touch the root), rinse gently in milk or saline without scrubbing, and place it back into the socket if possible, or submerge in cold milk, and call our office immediately.'
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    patientName: 'Elena R.',
    treatment: 'Invisalign® & Teeth Whitening',
    comment: 'Dr. Marcia Martinez transformed my smile after years of feeling self-conscious about my overlapping front teeth. Her expertise with Invisalign is evident at every checkup, and the entire team on Curry Ford Road treats you like family.',
    year: '2025',
    source: 'Verified Patient',
    rating: 5
  },
  {
    id: 'test-2',
    patientName: 'David S.',
    treatment: 'Porcelain Restorations & Routine Care',
    comment: 'My family has been coming to this practice since Dr. Julio Martinez was treating patients in the 80s. Dr. Marcia has taken it to the next level with modern digital equipment, gentle hands, and absolute honesty in treatment plans.',
    year: '2025',
    source: 'Verified Patient',
    rating: 5
  },
  {
    id: 'test-3',
    patientName: 'Christina T.',
    treatment: 'Cosmetic Veneers',
    comment: 'The level of care and artistic precision at OC Smiles is extraordinary. My veneers look completely natural — not bulky or artificially white, just flawless and vibrant. The office is clean, serene, and so welcoming.',
    year: '2024',
    source: 'Verified Patient',
    rating: 5
  },
  {
    id: 'test-4',
    patientName: 'Marcus B.',
    treatment: 'Pediatric & Family Care',
    comment: 'Finding a dentist who can make both a 7-year-old and an anxious adult feel completely relaxed is rare. Dr. Martinez has that gentle, reassuring demeanor that melts dental anxiety away.',
    year: '2025',
    source: 'Verified Patient',
    rating: 5
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-1',
    title: 'Aesthetic Porcelain Veneer Transformation',
    category: 'Cosmetic Dentistry',
    description: 'Patient presented with chipped central incisors and deep tetracycline discoloration. Treated with 6 handcrafted porcelain veneers for balanced symmetry and vibrant natural luminescence.',
    treatmentDuration: '3 Weeks (2 Visits)',
    beforeLabel: 'Chipped & Discolored Enamel',
    afterLabel: 'Natural Porcelain Luminescence',
    notes: 'Preserved 90% of virgin tooth structure using ultra-thin minimal prep veneers.'
  },
  {
    id: 'case-2',
    title: 'Comprehensive Invisalign® Alignment',
    category: 'Clear Aligners',
    description: 'Severe crowding in the lower arch and prominent upper midline shift corrected discreetly using custom Invisalign SmartTrack aligners under Dr. Martinez’s AACA protocol.',
    treatmentDuration: '11 Months',
    beforeLabel: 'Severe Crowding & Rotation',
    afterLabel: 'Harmonious Arch & Perfect Bite',
    notes: 'No extractions needed; achieved full functional occlusion and effortless flossing.'
  },
  {
    id: 'case-3',
    title: 'Composite Enamel Recontouring & Whitening',
    category: 'Restorative & Whitening',
    description: 'In-office clinical brightening followed by direct aesthetic composite bonding along the incisal edges to restore youthfulness and structural integrity.',
    treatmentDuration: 'Single 2-Hour Appointment',
    beforeLabel: 'Worn Edges & Dark Shade A3',
    afterLabel: 'Restored Proportions & Shade B1',
    notes: 'Immediate same-day smile renewal with conservative composite resin.'
  }
];
