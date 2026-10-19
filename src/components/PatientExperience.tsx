import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/clinicData';
import { Heart, Sparkles, Smile, Shield, Check, Star } from 'lucide-react';
import { CLINIC_IMAGES } from '../assets/images';

export const PatientExperience: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="experience" className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-800 mb-2">
              <Sparkles className="w-4 h-4 text-cyan-700" />
              <span>Patient Comfort & Hospitality</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              The OC Smiles Experience
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              We have eliminated the cold, clinical anxiety typically associated with dental visits. Step into a calm, unhurried space where your comfort comes first.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span>Orlando Clinic</span>
            <span aria-hidden="true">·</span>
            <span>All Ages Welcome</span>
          </div>
        </div>

        {/* 2-Column Split: Amenities & Warmth Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Comfort Features */}
          <div className="lg:col-span-7 space-y-4">
            {[
              {
                title: 'Gentle Pacing & Attentive Listening',
                description: 'We never rush your appointment. Dr. Martinez explains each step beforehand and pauses whenever you need a moment.',
                icon: Heart
              },
              {
                title: 'Impression-Free 3D Intraoral Scanning',
                description: 'No uncomfortable trays of cold putty. Our ultra-compact optical scanner captures tens of thousands of data points in seconds.',
                icon: Sparkles
              },
              {
                title: 'Pediatric Care & Anxious Patient Protocols',
                description: 'Whether it is your child’s milestone first cleaning or you haven’t visited a dentist in years, our team provides gentle, zero-judgment care.',
                icon: Smile
              },
              {
                title: 'Low-Radiation Digital Radiography',
                description: 'Modern digital X-rays reduce radiation exposure by up to 80% while providing instant, high-contrast imagery on chairside monitors.',
                icon: Shield
              }
            ].map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-cyan-700 text-white shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      {amenity.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: High-Fidelity Family & Gentle Care Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100 aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5] group">
              {!imgError ? (
                <img
                  src={CLINIC_IMAGES.familyDentistry}
                  alt="Friendly, compassionate pediatric and family dental care at OC Smiles in Orlando"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-cyan-900 to-slate-900 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-xl font-bold">Gentle Family Dental Care</h3>
                  <p className="text-xs text-slate-300">Comfort and warmth for patients of every age.</p>
                </div>
              )}

              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-white">
                <span className="text-xs font-semibold text-cyan-300 block">
                  Family-First Philosophy
                </span>
                <p className="text-[11px] text-stone-300 mt-0.5 leading-snug">
                  Continuing Dr. Julio Martinez's tradition of caring for Orlando families across generations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Patient Testimonials (Adhering to Claim-to-Proof Adjacency) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Words from Our Patients
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Authentic reviews from families who trust Dr. Marcia Martinez with their oral health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map(t => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-stone-50 border border-stone-200/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold text-cyan-900">
                      {t.treatment}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {t.year}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-stone-200/70 text-xs">
                  <span className="font-semibold text-slate-900">{t.patientName}</span>
                  <span className="text-slate-500 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.source}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
