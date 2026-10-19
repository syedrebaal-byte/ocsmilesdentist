import React, { useState } from 'react';
import { Award, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Smile } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinicData';
import { CLINIC_IMAGES } from '../assets/images';

interface Props {
  onOpenAppointment: () => void;
  onOpenAssessment: () => void;
}

export const InvisalignFeature: React.FC<Props> = ({ onOpenAppointment, onOpenAssessment }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="invisalign" className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image & Visual Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100 group aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5]">
              {!imgError ? (
                <img
                  src={CLINIC_IMAGES.invisalignCare}
                  alt="High precision Invisalign clear aligner held by Dr. Marcia Martinez at OC Smiles"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-900 to-cyan-950 p-8 flex flex-col justify-end text-white">
                  <Smile className="w-12 h-12 text-cyan-400 mb-2" />
                  <h3 className="text-xl font-bold">Invisalign® Clear Aligners</h3>
                  <p className="text-xs text-slate-300">AACA Fellowship Orthodontic Mastery</p>
                </div>
              )}

              {/* Floating Fellowship Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-stone-200 shadow-md">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-600" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block leading-none">
                      Accreditation
                    </span>
                    <span className="text-xs font-bold text-slate-900">
                      AACA Fellow Provider
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-800">
              <Sparkles className="w-4 h-4 text-cyan-700" />
              <span>Orthodontic Distinction · Orlando Study Club Leader</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Invisalign® Clear Aligners with Fellowship-Level Clinical Precision.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Achieving a balanced, harmonious smile requires more than clear plastic trays. It demands clinical mastery of tooth biomechanics, facial aesthetics, and occlusal health. As an active{' '}
              <strong className="text-slate-900 font-semibold">Fellow of the American Academy of Clear Aligners (AACA)</strong> and founder of the Orlando AACA Study Club, Dr. Marcia Martinez mentors fellow dentists while crafting customized aligner sequences for her patients.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-800 shrink-0" />
                  <span className="text-sm font-bold text-slate-900">3D Digital Mapping</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-resolution intraoral scanning creates an accurate 3D model of your bite without uncomfortable gag-inducing impression goop.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-800 shrink-0" />
                  <span className="text-sm font-bold text-slate-900">Gentle, Predictable Movement</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Proprietary SmartTrack® material applies continuous, calibrated low-force pressure designed for maximum comfort and speed.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-800 shrink-0" />
                  <span className="text-sm font-bold text-slate-900">Zero Dietary Restrictions</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Aligners remove in seconds so you can enjoy your favorite foods and maintain unhindered brushing and flossing routines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-800 shrink-0" />
                  <span className="text-sm font-bold text-slate-900">Personalized In-Office Supervision</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every tray progression is directly monitored in our Curry Ford Rd office by Dr. Martinez herself, ensuring true clinical safety.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs"
              >
                <span>Request Invisalign Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenAssessment}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-800 bg-stone-100 hover:bg-stone-200 rounded-xl transition-all border border-stone-200"
              >
                <span>Am I an Invisalign Candidate?</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
