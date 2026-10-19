import React, { useState } from 'react';
import { X, Check, ArrowRight, Sparkles, Smile, ShieldCheck, HeartHandshake } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const SmileAssessmentModal: React.FC<Props> = ({ isOpen, onClose, onSelectServiceForBooking }) => {
  const [step, setStep] = useState<number>(1);
  const [primaryGoal, setPrimaryGoal] = useState<string>('invisalign');
  const [timeline, setTimeline] = useState<string>('month');
  const [comfortPreference, setComfortPreference] = useState<string>('gentle');

  if (!isOpen) return null;

  const handleComplete = () => {
    let serviceLabel = 'Invisalign® Clear Aligners';
    if (primaryGoal === 'cosmetic') serviceLabel = 'Cosmetic Dentistry & Veneers';
    if (primaryGoal === 'preventive') serviceLabel = 'Comprehensive Family & Preventive Care';
    if (primaryGoal === 'restorative') serviceLabel = 'Tooth-Colored Restorations & Crowns';
    if (primaryGoal === 'whitening') serviceLabel = 'Professional Teeth Whitening';

    onSelectServiceForBooking(serviceLabel);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden text-slate-900 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50/80">
          <div className="flex items-center gap-2 text-cyan-800">
            <Sparkles className="w-4 h-4 text-cyan-700" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Smile Assessment · Step {step} of 3
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-stone-200/60 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {step === 1 && (
            <div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-1">
                What is your primary smile goal?
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Select the main objective for your visit with Dr. Marcia Martinez.
              </p>

              <div className="space-y-2.5">
                {[
                  {
                    id: 'invisalign',
                    label: 'Straighten Teeth & Close Gaps',
                    desc: 'Discreet Invisalign® orthodontic alignment without metal brackets.',
                    icon: Smile
                  },
                  {
                    id: 'cosmetic',
                    label: 'Porcelain Veneers & Smile Makeover',
                    desc: 'Enhance tooth symmetry, repair chips, and perfect your aesthetic.',
                    icon: Sparkles
                  },
                  {
                    id: 'whitening',
                    label: 'Brighten Stained or Discolored Enamel',
                    desc: 'Professional in-office or take-home whitening treatments.',
                    icon: Sparkles
                  },
                  {
                    id: 'preventive',
                    label: 'Comprehensive Exam & Gentle Cleaning',
                    desc: 'Thorough preventive checkup for adult or pediatric family health.',
                    icon: ShieldCheck
                  },
                  {
                    id: 'restorative',
                    label: 'Fix Worn, Cracked or Decayed Teeth',
                    desc: 'Natural tooth-colored composite restorations and custom crowns.',
                    icon: HeartHandshake
                  }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setPrimaryGoal(item.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3.5 ${
                        primaryGoal === item.id
                          ? 'border-cyan-700 bg-cyan-50/50 text-slate-900 ring-1 ring-cyan-700'
                          : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50/60 text-slate-700'
                      }`}
                    >
                      <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                        primaryGoal === item.id ? 'bg-cyan-700 text-white' : 'bg-stone-100 text-slate-600'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold">{item.label}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-1">
                What is your target timeline?
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Helps our team prioritize scheduling and sequencing.
              </p>

              <div className="space-y-3">
                {[
                  {
                    id: 'urgent',
                    label: 'Immediate / Acute Need',
                    desc: 'Experiencing discomfort or tooth trauma that requires urgent attention.'
                  },
                  {
                    id: 'month',
                    label: 'Within the Next 2–4 Weeks',
                    desc: 'Ready to begin treatment as soon as our next convenient opening permits.'
                  },
                  {
                    id: 'event',
                    label: 'Planning for an Upcoming Milestone',
                    desc: 'Preparing ahead for a wedding, graduation, photoshoot, or career event.'
                  },
                  {
                    id: 'exploring',
                    label: 'Initial Information & Second Opinion',
                    desc: 'Exploring treatment possibilities and understanding insurance/costs.'
                  }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTimeline(item.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      timeline === item.id
                        ? 'border-cyan-700 bg-cyan-50/50 text-slate-900 ring-1 ring-cyan-700'
                        : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50/60 text-slate-700'
                    }`}
                  >
                    <div className="text-sm font-semibold">{item.label}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-1">
                Comfort & Dental Experience
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                We personalize our chairside touch to ensure complete relaxation.
              </p>

              <div className="space-y-3">
                {[
                  {
                    id: 'gentle',
                    label: 'Gentle, Reassuring Pacing (Recommended)',
                    desc: 'Clear explanations at every step, extra-gentle technique, and calming environment.'
                  },
                  {
                    id: 'standard',
                    label: 'Standard Clinical Care',
                    desc: 'Comfortable with standard dental appointments; focused on efficiency.'
                  },
                  {
                    id: 'anxious',
                    label: 'Mild to High Dental Anxiety',
                    desc: 'We offer cozy blankets, noise-cancelling headphones, and pauses whenever requested.'
                  }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setComfortPreference(item.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      comfortPreference === item.id
                        ? 'border-cyan-700 bg-cyan-50/50 text-slate-900 ring-1 ring-cyan-700'
                        : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50/60 text-slate-700'
                    }`}
                  >
                    <div className="text-sm font-semibold">{item.label}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-stone-200 bg-stone-50/80">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={handleComplete}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-cyan-800 hover:bg-cyan-900 rounded-xl transition-all shadow-xs"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Review Consultation Plan</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
