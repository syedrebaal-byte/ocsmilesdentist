export interface DentalService {
  id: string;
  category: 'cosmetic' | 'orthodontics' | 'preventive' | 'restorative' | 'emergency';
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  durationEstimate: string;
  idealFor: string;
  faqs: { question: string; answer: string }[];
  image: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  treatment: string;
  comment: string;
  year: string;
  source: string;
  rating: number;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: string;
  description: string;
  treatmentDuration: string;
  beforeLabel: string;
  afterLabel: string;
  notes: string;
}

export interface DoctorInfo {
  name: string;
  credentials: string;
  title: string;
  bio: string[];
  education: string[];
  fellowships: string[];
  heritage: string;
}

export interface ClinicDetails {
  name: string;
  subname: string;
  establishedYear: number;
  founder: string;
  currentDoctor: DoctorInfo;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  phone: string;
  phoneRaw: string;
  email: string;
  hours: {
    day: string;
    time: string;
    isOpen: boolean;
  }[];
  insurances: string[];
}
