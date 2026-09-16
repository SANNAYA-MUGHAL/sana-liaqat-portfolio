'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutPhilosophy } from '@/components/AboutPhilosophy';
import { ImpactScorecard } from '@/components/ImpactScorecard';
import { FlagshipCaseStudy } from '@/components/FlagshipCaseStudy';
import { SelectedWork } from '@/components/SelectedWork';
import { ProductEcosystem } from '@/components/ProductEcosystem';
import { FinTechEcosystem } from '@/components/FinTechEcosystem';
import { CapabilitiesSection } from '@/components/CapabilitiesSection';
import { CareerJourney } from '@/components/CareerJourney';
import { ExperienceSection } from '@/components/ExperienceSection';
import { Toolbox } from '@/components/Toolbox';
import { ResumeSection } from '@/components/ResumeSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { CaseStudyModal } from '@/components/CaseStudyModal';
import { ResumeModal } from '@/components/ResumeModal';

export default function Home() {
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [resumeType, setResumeType] = useState<'pm' | 'tpm'>('pm');

  const handleOpenResume = (type: 'pm' | 'tpm' = 'pm') => {
    setResumeType(type);
    setResumeModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-[#172033] flex flex-col selection:bg-[#6C5CE7]/20 selection:text-[#172033]">
      {/* Sticky Navigation */}
      <Navbar onOpenResumeModal={() => handleOpenResume('pm')} />

      <main className="flex-grow">
        {/* Section 3: Hero */}
        <Hero onOpenResumeModal={() => handleOpenResume('pm')} />

        {/* Section 4: About / Product Philosophy */}
        <AboutPhilosophy />

        {/* Section 5: Impact Scorecard */}
        <ImpactScorecard />

        {/* Section 6: Flagship Case Study */}
        <FlagshipCaseStudy onOpenModal={(id) => setSelectedCaseStudyId(id)} />

        {/* Section 7: Selected Product Work */}
        <SelectedWork onOpenModal={(id) => setSelectedCaseStudyId(id)} />

        {/* Section 8: Product Ecosystem (Commerce Lifecycle) */}
        <ProductEcosystem onOpenModal={(id) => setSelectedCaseStudyId(id)} />

        {/* Section 9: FinTech / Bayuti Ecosystem */}
        <FinTechEcosystem />

        {/* Section 10: Product Capabilities */}
        <CapabilitiesSection />

        {/* Section 11: Career Journey */}
        <CareerJourney />

        {/* Section 12: Professional Experience */}
        <ExperienceSection />

        {/* Section 13: Toolbox */}
        <Toolbox />

        {/* Section 14: Resume Download & Preview */}
        <ResumeSection />

        {/* Section 15: Contact */}
        <ContactSection onOpenResumeModal={() => handleOpenResume('pm')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Modals */}
      <CaseStudyModal
        caseStudyId={selectedCaseStudyId}
        onClose={() => setSelectedCaseStudyId(null)}
        onSelectProject={(id) => setSelectedCaseStudyId(id)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        type={resumeType}
      />
    </div>
  );
}
