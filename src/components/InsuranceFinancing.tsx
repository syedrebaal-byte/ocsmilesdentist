import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';
import { ShieldCheck, CreditCard, Check, Phone } from 'lucide-react';

interface Props {
  onOpenAppointment: () => void;
}

export const InsuranceFinancing: React.FC<Props> = ({ onOpenAppointment }) => {
  return (
    <section className="py-20 bg-stone-100/50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-800 mb-2">
            <ShieldCheck className="w-4 h-4 text-cyan-700" />
            <span>Financial Transparency · Zero Hidden Fees</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Insurance & Flexible Financing
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We believe premium dental care should be accessible and straightforward. Our treatment coordinators maximize your insurance benefits and explain all fees prior to treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: PPO Insurance Networks */}
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                PPO Dental Insurance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                We accept and bill most major PPO dental plans on your behalf to minimize your out-of-pocket expenses.
              </p>

              <div className="space-y-2 pt-2 border-t border-stone-100">
                {CLINIC_DATA.insurances.slice(0, 5).map((ins, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{ins}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100">
              <a
                href={`tel:${CLINIC_DATA.phoneRaw}`}
                className="text-xs font-semibold text-cyan-900 hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Verify Your Coverage: (407) 273-6620</span>
              </a>
            </div>
          </div>

          {/* Card 2: CareCredit Financing */}
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                CareCredit® Healthcare Financing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Spread out cosmetic smile makeovers or Invisalign® treatments into manageable monthly payments.
              </p>

              <div className="space-y-2 pt-2 border-t border-stone-100 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Interest-free promotional financing options</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Instant digital approval decisions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>No annual fees or prepayment penalties</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Applicable to cosmetic & orthodontic care</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100">
              <span className="text-xs text-slate-500 block">
                Ask our front desk team during your visit.
              </span>
            </div>
          </div>

          {/* Card 3: Transparent Treatment Planning */}
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Transparent Estimates
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Before any treatment begins, you receive a detailed, printed breakdown of procedure codes, insurance co-pays, and estimated costs.
              </p>

              <div className="space-y-2 pt-2 border-t border-stone-100 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Itemized treatment breakdowns</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Zero surprise facility charges</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Phased treatment sequencing available</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100">
              <button
                onClick={onOpenAppointment}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs"
              >
                Discuss Financing Options
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
