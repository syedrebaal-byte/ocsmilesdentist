import React, { useState } from 'react';
import { Phone, Menu, X, Sparkles } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinicData';

interface Props {
  onOpenAppointment: () => void;
  onOpenAssessment: () => void;
}

export const Navbar: React.FC<Props> = ({ onOpenAppointment, onOpenAssessment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single text element, 1 line, no clutter) */}
          <a
            href="/"
            className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2 group"
          >
            <span className="font-display tracking-tight text-slate-900 group-hover:text-cyan-900 transition-colors">
              OC SMILES
            </span>
            <span className="text-xs font-normal text-stone-400 tracking-wider">
              | DENTAL
            </span>
          </a>

          {/* Zone 2: 5 Concise Single-Line Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a
              href="#services"
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Services
            </a>
            <a
              href="#invisalign"
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Invisalign®
            </a>
            <a
              href="#doctor"
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Meet Dr. Martinez
            </a>
            <a
              href="#results"
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Transformations
            </a>
            <a
              href="#location"
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Office & Hours
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action + Click-to-call link */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`tel:${CLINIC_DATA.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-cyan-900 transition-colors whitespace-nowrap shrink-0"
              title="Call Orlando Clinic"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-800" />
              <span>(407) 273-6620</span>
            </a>

            <button
              onClick={onOpenAppointment}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs whitespace-nowrap shrink-0"
            >
              Book Consultation
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-stone-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3.5 text-sm font-medium text-slate-700">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-900 transition-colors"
            >
              Services & Treatments
            </a>
            <a
              href="#invisalign"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-900 transition-colors"
            >
              Invisalign® Clear Aligners
            </a>
            <a
              href="#doctor"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-900 transition-colors"
            >
              Meet Dr. Marcia Martinez, DMD
            </a>
            <a
              href="#results"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-900 transition-colors"
            >
              Before & After Gallery
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-900 transition-colors"
            >
              Patient Comfort & Amenities
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-900 transition-colors"
            >
              Curry Ford Road Office & Hours
            </a>

            <div className="pt-4 border-t border-stone-200 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssessment();
                }}
                className="w-full py-2.5 px-4 rounded-xl border border-cyan-800 text-cyan-900 font-semibold text-xs flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
                <span>Take 60-Second Smile Assessment</span>
              </button>

              <a
                href={`tel:${CLINIC_DATA.phoneRaw}`}
                className="w-full py-2.5 px-4 rounded-xl bg-stone-100 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-cyan-800" />
                <span>Call (407) 273-6620</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
