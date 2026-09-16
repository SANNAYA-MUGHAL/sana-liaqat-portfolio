'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ImpactScorecard } from '@/components/ImpactScorecard';
import { AboutPhilosophy } from '@/components/AboutPhilosophy';
import { FlagshipCaseStudy } from '@/components/FlagshipCaseStudy';
import { SelectedWork } from '@/components/SelectedWork';
import { ProductEcosystem } from '@/components/ProductEcosystem';
import { FinTechEcosystem } from '@/components/FinTechEcosystem';
import { CapabilitiesSection } from '@/components/CapabilitiesSection';
import { CareerJourney } from '@/components/CareerJourney';
import { ExperienceSection } from '@/components/ExperienceSection';
import { Toolbox } from '@/components/Toolbox';
import { CertificationsSection } from '@/components/CertificationsSection';
import { AwardsSection } from '@/components/AwardsSection';
import { LanguagesSection } from '@/components/LanguagesSection';
import { BeyondProductSection } from '@/components/BeyondProductSection';
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
        {/* 1. Hero */}
        <Hero onOpenResumeModal={() => handleOpenResume('pm')} />

        {/* 2. Product Impact */}
        <ImpactScorecard />

        {/* 3. About / Product Philosophy */}
        <AboutPhilosophy />

        {/* 4. Flagship Case Study */}
        <FlagshipCaseStudy onOpenModal={(id) => setSelectedCaseStudyId(id)} />

        {/* 5. Selected Product Work */}
        <SelectedWork onOpenModal={(id) => setSelectedCaseStudyId(id)} />

        {/* 6. Product Ecosystem / Systems Thinking */}
        <ProductEcosystem onOpenModal={(id) => setSelectedCaseStudyId(id)} />
        <FinTechEcosystem />

        {/* 7. Product Capabilities */}
        <CapabilitiesSection />

        {/* 8. Professional Experience */}
        <CareerJourney />
        <ExperienceSection />

        {/* 9. Product Toolbox / Skills */}
        <Toolbox />

        {/* 10. Certifications & Continuous Learning */}
        <CertificationsSection />

        {/* 11. Awards & Recognition */}
        <AwardsSection />

        {/* 12. Languages */}
        <LanguagesSection />

        {/* 13. Beyond Product */}
        <BeyondProductSection />

        {/* 14. Resume */}
        <ResumeSection />

        {/* 15. Contact */}
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
