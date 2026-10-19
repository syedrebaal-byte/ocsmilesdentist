import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';
import { MapPin, Phone, Mail, Award, ArrowUp } from 'lucide-react';

interface Props {
  onOpenAppointment: () => void;
  onOpenAssessment: () => void;
}

export const Footer: React.FC<Props> = ({ onOpenAppointment, onOpenAssessment }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1 & 2: Clinic Brand & Legacy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white font-display">
                OC SMILES
              </span>
              <span className="text-xs font-normal text-slate-400 tracking-wider">
                | DENTAL
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing premier cosmetic smile makeovers, Invisalign® orthodontic care, and gentle family dentistry to Orlando residents. Founded in 1971 by Dr. Julio Martinez and carried forward with modern biological precision by Dr. Marcia Martinez, DMD.
            </p>

            <div className="flex items-center gap-2 text-xs text-cyan-400 pt-1">
              <Award className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Fellow, American Academy of Clear Aligners (AACA)</span>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Practice
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Dental Services
                </a>
              </li>
              <li>
                <a href="#invisalign" className="hover:text-white transition-colors">
                  Invisalign® Aligners
                </a>
              </li>
              <li>
                <a href="#doctor" className="hover:text-white transition-colors">
                  Meet Dr. Marcia Martinez
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition-colors">
                  Smile Transformations
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Patient Comfort & Amenities
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenAssessment}
                  className="hover:text-cyan-400 text-left transition-colors"
                >
                  Smile Assessment Wizard
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Treatments */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Treatments
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>Porcelain Veneers</li>
              <li>Invisalign® Clear Aligners</li>
              <li>Teeth Whitening</li>
              <li>Composite Restorations</li>
              <li>Pediatric Dentistry</li>
              <li>Emergency Dental Care</li>
            </ul>
          </div>

          {/* Column 5: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Orlando Office
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                {CLINIC_DATA.address.street}<br />
                {CLINIC_DATA.address.city}, {CLINIC_DATA.address.state} {CLINIC_DATA.address.zip}
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href={`tel:${CLINIC_DATA.phoneRaw}`} className="hover:text-white transition-colors">
                {CLINIC_DATA.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href={`mailto:${CLINIC_DATA.email}`} className="hover:text-white transition-colors">
                {CLINIC_DATA.email}
              </a>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenAppointment}
                className="w-full py-2.5 px-3 rounded-xl bg-cyan-800 hover:bg-cyan-700 text-white font-semibold text-xs transition-colors shadow-xs"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Legal, ADA Statement & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p className="leading-relaxed">
              © {new Date().getFullYear()} OC Smiles Dental. Dr. Marcia Martinez, DMD. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-600 mt-1">
              5180 Curry Ford Road, Orlando, FL 32812 · Designed with accessible WCAG standards.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-600">
              HIPAA & Patient Privacy Respected
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
