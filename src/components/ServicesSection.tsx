import React, { useState } from 'react';
import { CLINIC_SERVICES } from '../data/clinicData';
import { DentalService } from '../types/dental';
import { Sparkles, ArrowRight, Check, Clock, HelpCircle, X, CheckCircle2 } from 'lucide-react';

interface Props {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<Props> = ({ onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<DentalService | null>(null);

  const filteredServices = CLINIC_SERVICES.filter(service => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'cosmetic') return service.category === 'cosmetic';
    if (activeCategory === 'ortho') return service.category === 'orthodontics';
    if (activeCategory === 'preventive') return service.category === 'preventive';
    if (activeCategory === 'restorative') return service.category === 'restorative' || service.category === 'emergency';
    return true;
  });

  return (
    <section id="services" className="py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-800 mb-2">
              <Sparkles className="w-4 h-4 text-cyan-700" />
              <span>Comprehensive Dental Portfolio · Orlando, FL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Clinical Excellence & Gentle Artistry
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              From subtle cosmetic refinements and Invisalign® alignment to preventive family care, every procedure is performed with conservative biological focus.
            </p>
          </div>

          {/* Category Tabs (Functional Button Controls with active state) */}
          <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-stone-300 shadow-xs self-start md:self-auto overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'cosmetic', label: 'Cosmetic' },
              { id: 'ortho', label: 'Invisalign®' },
              { id: 'preventive', label: 'Family & Preventive' },
              { id: 'restorative', label: 'Restorative' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-stone-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Service Card Top */}
              <div className="p-6 sm:p-7">
                <div className="text-[11px] font-semibold text-cyan-800 uppercase tracking-wider mb-2">
                  {service.tagline}
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2.5 group-hover:text-cyan-900 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Key Benefits List */}
                <div className="space-y-2 pt-4 border-t border-stone-100">
                  {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Card Bottom Actions */}
              <div className="px-6 pb-6 pt-4 bg-stone-50/60 border-t border-stone-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-semibold text-slate-700 hover:text-cyan-900 transition-colors flex items-center gap-1"
                >
                  <span>Procedure Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectServiceForBooking(service.title)}
                  className="px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all shadow-xs"
                >
                  Schedule
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Procedure Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden text-slate-900 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50 shrink-0">
              <div>
                <span className="text-[11px] font-semibold text-cyan-800 uppercase tracking-wider block">
                  Procedure & Clinical Guide
                </span>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {activeModalService.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-stone-200/60 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Treatment Overview
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeModalService.description}
                </p>
              </div>

              {/* Time & Candidacy Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Estimated Timeline:</span>
                    <span className="text-slate-600">{activeModalService.durationEstimate}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Candidate Profile:</span>
                    <span className="text-slate-600">{activeModalService.idealFor}</span>
                  </div>
                </div>
              </div>

              {/* Comprehensive Benefits */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Clinical Advantages at OC Smiles
                </h4>
                <div className="space-y-2">
                  {activeModalService.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {activeModalService.faqs.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-cyan-700" />
                    <span>Frequently Asked Questions</span>
                  </h4>
                  <div className="space-y-3">
                    {activeModalService.faqs.map((faq, fIdx) => (
                      <div key={fIdx} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                        <div className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">
                          {faq.question}
                        </div>
                        <div className="text-xs text-slate-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-stone-200 bg-stone-50 shrink-0">
              <button
                onClick={() => setActiveModalService(null)}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                Back to Services
              </button>

              <button
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  onSelectServiceForBooking(title);
                }}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs"
              >
                Schedule Consultation for {activeModalService.title.split(' ')[0]}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
