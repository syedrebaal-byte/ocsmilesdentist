import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Phone, Download, AlertCircle } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinicData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<Props> = ({
  isOpen,
  onClose,
  preselectedService = 'Invisalign® Clear Aligners'
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: preselectedService,
    preferredDay: 'Monday',
    preferredTime: 'Morning (8:30 AM – 12:00 PM)',
    notes: '',
    isNewPatient: true
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMessage('Please complete your name, phone number, and email.');
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
  };

  const handleDownloadCalendar = () => {
    // Generate clean .ics calendar event
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//OC Smiles//Appointment Request//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `SUMMARY:Dental Consultation - Dr. Marcia Martinez (OC Smiles)`,
      `DESCRIPTION:Requested consultation for ${formData.service} at OC Smiles.\\nPhone: (407) 273-6620\\nPatient: ${formData.fullName}`,
      `LOCATION:5180 Curry Ford Road, Orlando, FL 32812`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'oc-smiles-consultation.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden text-slate-900 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50/90 shrink-0">
          <div>
            <span className="text-xs font-semibold text-cyan-800 uppercase tracking-wider block">
              {CLINIC_DATA.name} · Orlando, FL
            </span>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Request Your Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-stone-200/60 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Consultation Request Received
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto mb-6">
                Thank you, <strong>{formData.fullName}</strong>. Our clinical coordinator will reach out to <strong>{formData.phone}</strong> to confirm your reserved appointment window.
              </p>

              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-left text-xs space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-semibold text-slate-900">{formData.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Preferred Day:</span>
                  <span className="font-semibold text-slate-900">{formData.preferredDay} ({formData.preferredTime})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-semibold text-slate-900">5180 Curry Ford Rd, Orlando</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleDownloadCalendar}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Add Reminder to Calendar (.ics)</span>
                </button>

                <a
                  href={`tel:${CLINIC_DATA.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-stone-300 hover:bg-stone-100 text-slate-800 text-xs font-semibold transition-all"
                >
                  <Phone className="w-4 h-4 text-cyan-800" />
                  <span>Call Office Directly</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-cyan-800 focus:border-cyan-800 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(407) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-cyan-800 focus:border-cyan-800 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-cyan-800 focus:border-cyan-800 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Treatment of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-cyan-800 focus:border-cyan-800 transition-all bg-white"
                >
                  <option value="Invisalign® Clear Aligners">Invisalign® Clear Aligners (AACA Protocol)</option>
                  <option value="Cosmetic Dentistry & Veneers">Cosmetic Dentistry & Porcelain Veneers</option>
                  <option value="Family & Preventive Dentistry">Family & Preventive Checkup</option>
                  <option value="Professional Teeth Whitening">Professional Teeth Whitening</option>
                  <option value="Tooth-Colored Composite Restorations">Tooth-Colored Composite Restorations</option>
                  <option value="Emergency Dental Care">Urgent / Emergency Dental Care</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    Preferred Day
                  </label>
                  <select
                    value={formData.preferredDay}
                    onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-cyan-800 focus:border-cyan-800 transition-all bg-white"
                  >
                    <option value="Monday">Monday (8:30 AM – 5:00 PM)</option>
                    <option value="Tuesday">Tuesday (9:00 AM – 5:00 PM)</option>
                    <option value="Wednesday">Wednesday (8:30 AM – 5:00 PM)</option>
                    <option value="Thursday">Thursday (8:30 AM – 5:00 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    Preferred Time
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-cyan-800 focus:border-cyan-800 transition-all bg-white"
                  >
                    <option value="Morning (8:30 AM – 12:00 PM)">Morning (8:30 AM – 12:00 PM)</option>
                    <option value="Early Afternoon (12:00 PM – 2:30 PM)">Early Afternoon (12:00 PM – 2:30 PM)</option>
                    <option value="Late Afternoon (2:30 PM – 5:00 PM)">Late Afternoon (2:30 PM – 5:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Special Notes or Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about any specific concerns, dental insurance, or comfort preferences..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-cyan-800 focus:border-cyan-800 transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-sm"
                >
                  Submit Consultation Request
                </button>
              </div>

              <div className="text-center pt-2">
                <span className="text-[11px] text-slate-500 block">
                  Prefer to schedule by phone? Call our Orlando office at{' '}
                  <a href={`tel:${CLINIC_DATA.phoneRaw}`} className="font-semibold text-cyan-800 hover:underline">
                    (407) 273-6620
                  </a>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
