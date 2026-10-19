import React, { useState } from 'react';
import { ArrowRight, Sparkles, Phone, ShieldCheck, MapPin, Award } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinicData';
import { CLINIC_IMAGES } from '../assets/images';

interface Props {
  onOpenAppointment: () => void;
  onOpenAssessment: () => void;
}

export const HeroSection: React.FC<Props> = ({ onOpenAppointment, onOpenAssessment }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-20 sm:pt-14 sm:pb-28 border-b border-stone-200">
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Kicker: Unboxed text with subtle typographic separators */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 mb-6">
          <span className="text-cyan-900 font-semibold tracking-wide uppercase">
            Orlando, Florida
          </span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span>50+ Year Family Practice Legacy</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="flex items-center gap-1 text-slate-700">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>AACA Fellow Practice</span>
          </span>
        </div>

        {/* 2-Column Split: Editorial Typography & Dominant 16:9 Visual Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Proposition & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-slate-900 leading-[1.1] [text-wrap:balance]">
              Elevating the Art of Your Natural Smile.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Experience personalized, gentle dentistry where generational dedication meets modern orthodontic and cosmetic precision. Led by{' '}
              <strong className="text-slate-900 font-semibold">Dr. Marcia Martinez, DMD</strong>, Fellow of the American Academy of Clear Aligners.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-sm group"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={onOpenAssessment}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-cyan-950 bg-stone-100 hover:bg-stone-200/80 rounded-xl transition-all border border-stone-200"
              >
                <Sparkles className="w-4 h-4 text-cyan-700" />
                <span>60-Sec Smile Assessment</span>
              </button>
            </div>

            {/* Reassuring Callout */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Major PPO Insurances Accepted</span>
              </div>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <a
                href={`tel:${CLINIC_DATA.phoneRaw}`}
                className="text-slate-700 hover:text-cyan-900 font-medium flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-800" />
                <span>(407) 273-6620</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Fidelity 16:9 Image Anchor */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200 bg-stone-100 group aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3]">
              {!imgError ? (
                <img
                  src={CLINIC_IMAGES.heroSuite}
                  alt="OC Smiles modern luxury dental treatment suite overlooking serene courtyard garden in Orlando"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 p-8 flex flex-col justify-end text-white">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-1">
                    OC Smiles Dental Suite
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Tranquil, State-of-the-Art Clinical Care
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    5180 Curry Ford Road, Orlando, FL 32812
                  </p>
                </div>
              )}

              {/* Discreet Subdued Corner Trust Tag */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-slate-950/85 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">
                    OC Smiles Clinic
                  </div>
                  <div className="text-[11px] text-stone-300">
                    5180 Curry Ford Rd · Orlando, FL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Credibility Row below hero */}
        <div className="mt-14 pt-8 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <span className="block text-2xl font-bold text-slate-900 font-display">1971</span>
            <span className="text-xs text-slate-500 font-medium">Founded by Dr. Julio Martinez</span>
          </div>

          <div>
            <span className="block text-2xl font-bold text-slate-900 font-display">AACA</span>
            <span className="text-xs text-slate-500 font-medium">Fellow, Clear Aligners Academy</span>
          </div>

          <div>
            <span className="block text-2xl font-bold text-slate-900 font-display">2001</span>
            <span className="text-xs text-slate-500 font-medium">Serving Orlando for 24+ Years</span>
          </div>

          <div>
            <span className="block text-2xl font-bold text-slate-900 font-display">100%</span>
            <span className="text-xs text-slate-500 font-medium">Tooth-Colored Biocompatible Care</span>
          </div>
        </div>
      </div>
    </section>
  );
};
