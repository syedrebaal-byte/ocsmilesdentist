import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';
import { MapPin, Phone, Clock, Mail, Navigation, AlertTriangle, ShieldCheck } from 'lucide-react';

interface Props {
  onOpenAppointment: () => void;
}

export const OfficeLocationHours: React.FC<Props> = ({ onOpenAppointment }) => {
  return (
    <section id="location" className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-800 mb-2">
            <MapPin className="w-4 h-4 text-cyan-700" />
            <span>Curry Ford Road Office · Orlando, FL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Visit Our Practice
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Conveniently situated in Orlando, Florida with ample dedicated patient parking and accessible entry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact & Hours Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address & Direct Phone Card */}
            <div className="p-7 rounded-2xl bg-stone-50 border border-stone-200/90 shadow-xs space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-cyan-700 text-white shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Clinic Address
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 mt-0.5 leading-relaxed">
                    {CLINIC_DATA.address.street}<br />
                    {CLINIC_DATA.address.city}, {CLINIC_DATA.address.state} {CLINIC_DATA.address.zip}
                  </p>
                  <a
                    href="https://maps.google.com/?q=5180+Curry+Ford+Road+Orlando+FL+32812"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-900 hover:underline mt-2.5"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Turn-by-Turn Directions</span>
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200/80 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-cyan-700 text-white shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Telephone
                  </h3>
                  <a
                    href={`tel:${CLINIC_DATA.phoneRaw}`}
                    className="text-sm font-semibold text-slate-900 hover:text-cyan-900 mt-0.5 block"
                  >
                    {CLINIC_DATA.phone}
                  </a>
                  <span className="text-xs text-slate-500">
                    Direct line to our Curry Ford Rd front desk team
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200/80 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-cyan-700 text-white shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Email Inquiries
                  </h3>
                  <a
                    href={`mailto:${CLINIC_DATA.email}`}
                    className="text-xs sm:text-sm text-slate-700 hover:text-cyan-900 mt-0.5 block"
                  >
                    {CLINIC_DATA.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Emergency Protocol Callout */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-slate-800">
              <div className="flex items-center gap-2 mb-1.5 text-amber-800 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Dental Emergencies & Tooth Pain</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                If you have experienced dental trauma, a knocked-out tooth, or severe unbearable pain, call our office immediately at <strong>(407) 273-6620</strong>. We prioritize acute cases during clinical hours.
              </p>
            </div>
          </div>

          {/* Right Column: Weekly Schedule & Interactive Map */}
          <div className="lg:col-span-7 space-y-6">
            {/* Weekly Schedule Card */}
            <div className="p-7 rounded-2xl bg-stone-50 border border-stone-200/90 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <Clock className="w-5 h-5 text-cyan-800" />
                  <span>Office Operating Hours</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Schedule</span>
                </div>
              </div>

              <div className="divide-y divide-stone-200/80">
                {CLINIC_DATA.hours.map((h, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-slate-800">{h.day}</span>
                    <span className={h.isOpen ? 'text-slate-900 font-medium' : 'text-slate-400 italic'}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Appointments are reserved exclusively for you.
                </span>
                <button
                  onClick={onOpenAppointment}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs"
                >
                  Reserve Your Visit
                </button>
              </div>
            </div>

            {/* Stylized Interactive Map Preview Card */}
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-slate-900 shadow-md h-64 flex flex-col justify-between p-6 text-white group">
              {/* Stylized Map Grid Lines Background */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-semibold text-slate-200">Curry Ford & Conway / S Semoran Area</span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">Orlando, FL 32812</span>
              </div>

              <div className="relative z-10 bg-slate-950/85 backdrop-blur-md p-4 rounded-xl border border-slate-700/80 max-w-sm">
                <h4 className="text-sm font-bold text-white mb-0.5">OC Smiles Dental</h4>
                <p className="text-xs text-slate-300">5180 Curry Ford Road, Orlando, FL</p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="https://maps.google.com/?q=5180+Curry+Ford+Road+Orlando+FL+32812"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <Navigation className="w-3 h-3" />
                  </a>
                  <a
                    href={`tel:${CLINIC_DATA.phoneRaw}`}
                    className="text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    Call: (407) 273-6620
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
