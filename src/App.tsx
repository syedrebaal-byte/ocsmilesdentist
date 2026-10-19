/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { InvisalignFeature } from './components/InvisalignFeature';
import { DoctorBioSection } from './components/DoctorBioSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { PatientExperience } from './components/PatientExperience';
import { InsuranceFinancing } from './components/InsuranceFinancing';
import { OfficeLocationHours } from './components/OfficeLocationHours';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { SmileAssessmentModal } from './components/SmileAssessmentModal';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_DATA } from './data/clinicData';

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Invisalign® Clear Aligners');

  const handleOpenAppointment = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setIsAppointmentOpen(true);
  };

  const handleAssessmentResult = (recommendedService: string) => {
    setSelectedService(recommendedService);
    setIsAppointmentOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-slate-800 flex flex-col selection:bg-cyan-900 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenAssessment={() => setIsAssessmentOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenAppointment={() => handleOpenAppointment()}
          onOpenAssessment={() => setIsAssessmentOpen(true)}
        />

        {/* Services & Clinical Portfolio */}
        <ServicesSection
          onSelectServiceForBooking={(serviceName) => handleOpenAppointment(serviceName)}
        />

        {/* Specialized Invisalign® & Orthodontics Showcase */}
        <InvisalignFeature
          onOpenAppointment={() => handleOpenAppointment('Invisalign® Clear Aligners')}
          onOpenAssessment={() => setIsAssessmentOpen(true)}
        />

        {/* Meet Dr. Marcia Martinez, DMD & Heritage + 3D Interactive Anatomy */}
        <DoctorBioSection
          onOpenAppointment={() => handleOpenAppointment()}
        />

        {/* Before & After Interactive Smile Transformations */}
        <BeforeAfterSlider />

        {/* Patient Experience, Comfort & Verified Testimonials */}
        <PatientExperience />

        {/* Insurance, Transparency & Flexible Financing */}
        <InsuranceFinancing
          onOpenAppointment={() => handleOpenAppointment()}
        />

        {/* Office Location, Operating Hours & Directions */}
        <OfficeLocationHours
          onOpenAppointment={() => handleOpenAppointment()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenAssessment={() => setIsAssessmentOpen(true)}
      />

      {/* Appointment Request Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        preselectedService={selectedService}
      />

      {/* Interactive 3-Step Smile Assessment Wizard */}
      <SmileAssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        onSelectServiceForBooking={handleAssessmentResult}
      />

      {/* Mobile Sticky Quick Action Bar (Respecting 15% Mobile Sticky Cap) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-4 py-2.5 shadow-lg flex items-center justify-between gap-3">
        <a
          href={`tel:${CLINIC_DATA.phoneRaw}`}
          className="flex-1 py-2 px-3 rounded-xl border border-stone-300 text-slate-800 font-semibold text-xs flex items-center justify-center gap-1.5 active:bg-stone-100"
        >
          <Phone className="w-3.5 h-3.5 text-cyan-800" />
          <span>Call Office</span>
        </a>

        <button
          onClick={() => handleOpenAppointment()}
          className="flex-1 py-2 px-3 rounded-xl bg-slate-900 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-xs active:bg-slate-800"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
}
