import React, { useState } from 'react';
import { CLINIC_DATA } from '../data/clinicData';
import { InteractiveToothModel } from './InteractiveToothModel';
import { Award, GraduationCap, Heart, Clock, CheckCircle2 } from 'lucide-react';

interface Props {
  onOpenAppointment: () => void;
}

export const DoctorBioSection: React.FC<Props> = ({ onOpenAppointment }) => {
  const [imgError, setImgError] = useState(false);
  const doctor = CLINIC_DATA.currentDoctor;

  return (
    <section id="doctor" className="py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-800 mb-2">
            <Heart className="w-4 h-4 text-rose-500" />
            <span>Generations of Dental Care in Orlando</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Meet Dr. Marcia Martinez, DMD
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Leading OC Smiles with a commitment to clinical excellence, gentle bedside warmth, and conservative tooth preservation.
          </p>
        </div>

        {/* 2-Column Main Doctor Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-300 bg-stone-200 aspect-[3/4] max-w-md mx-auto">
              {!imgError ? (
                <img
                  src="/src/assets/images/dr_marcia_martinez_portrait_1792425258176.jpg"
                  alt="Dr. Marcia Martinez DMD, Cosmetic and Family Dentist at OC Smiles in Orlando FL"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold">{doctor.name}, {doctor.credentials}</h3>
                  <p className="text-xs text-slate-300 mt-1">{doctor.title}</p>
                </div>
              )}

              {/* Subdued Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
                <div className="text-sm font-bold text-white">
                  {doctor.name}, {doctor.credentials}
                </div>
                <div className="text-xs text-cyan-300 font-medium mt-0.5">
                  Owner & Principal Dentist · AACA Fellow
                </div>
                <div className="text-[11px] text-stone-300 mt-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Caring for Orlando patients since 2001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Biography & Credentials Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              {doctor.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Heritage Highlight */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-slate-800">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
                Family Dental Roots Since 1971
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                "My father, Dr. Julio Martinez, established this practice on Curry Ford Road over 50 years ago with my mother serving as our hygienist. Carrying on their values of integrity, patience, and treating every patient like family is the greatest privilege of my career."
              </p>
              <span className="block text-xs font-semibold text-slate-900 mt-2">
                — Dr. Marcia Martinez, DMD
              </span>
            </div>

            {/* Education & Fellowships Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <div className="flex items-center gap-2 text-cyan-800 mb-2">
                  <GraduationCap className="w-4 h-4 text-cyan-700" />
                  <span className="text-xs font-bold uppercase tracking-wider">Education</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-700 shrink-0 mt-0.5" />
                    <span>University of Pittsburgh (DMD)</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-700 shrink-0 mt-0.5" />
                    <span>Florida State University (B.S.)</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <div className="flex items-center gap-2 text-cyan-800 mb-2">
                  <Award className="w-4 h-4 text-cyan-700" />
                  <span className="text-xs font-bold uppercase tracking-wider">Fellowships & Honors</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-700 shrink-0 mt-0.5" />
                    <span>Fellow, American Academy of Clear Aligners</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-700 shrink-0 mt-0.5" />
                    <span>Director, Orlando AACA Study Club</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-700 shrink-0 mt-0.5" />
                    <span>American Dental Association (ADA)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAppointment}
                className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs"
              >
                Schedule an Appointment with Dr. Martinez
              </button>
            </div>
          </div>
        </div>

        {/* Biomimetic 3D Interactive Anatomy Explorer integration */}
        <div className="mt-12 pt-12 border-t border-stone-200">
          <div className="max-w-2xl mx-auto mb-6 text-center">
            <span className="text-xs font-semibold text-cyan-800 uppercase tracking-wider block mb-1">
              Biomimetic Clinical Approach
            </span>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Preserving Natural Tooth Biology
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Explore the anatomical layers of a natural tooth below. Dr. Martinez designs every restorative and cosmetic treatment to protect the vital pulp and conserve healthy natural enamel.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <InteractiveToothModel />
          </div>
        </div>
      </div>
    </section>
  );
};
