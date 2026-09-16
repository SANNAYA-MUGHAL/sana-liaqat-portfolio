'use client';

import React, { useState } from 'react';
import { Download, FileText, Eye } from 'lucide-react';
import { ResumeModal } from './ResumeModal';

export const ResumeSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [resumeType, setResumeType] = useState<'pm' | 'tpm'>('pm');

  const handleOpenResume = (type: 'pm' | 'tpm') => {
    setResumeType(type);
    setModalOpen(true);
  };

  return (
    <>
      <section id="resume" className="py-20 lg:py-28 bg-[#F7F8FC] relative border-b border-[#E1E5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
              RESUME
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight">
              Want the concise version?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5F687A] font-normal leading-relaxed">
              Download my resume for a focused overview of my Product Management experience, selected product initiatives and technical background.
            </p>
          </div>

          {/* Two Resume Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {/* Card 1: Product Manager Resume (Primary) */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#6C5CE7]/40 hover:border-[#6C5CE7] shadow-[0_4px_20px_rgba(108,92,231,0.08)] flex flex-col justify-between group transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EEEBFF] border border-[#D4CCFC] flex items-center justify-center text-[#6C5CE7] group-hover:scale-105 transition-transform">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-[10px] font-mono uppercase font-bold tracking-wider">
                    PRIMARY
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#172033] mb-2">
                  Product Manager Resume
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#6C5CE7] mb-6 font-semibold">
                  FinTech • SaaS • eCommerce • Marketplace
                </p>

                <p className="text-xs sm:text-sm text-[#5F687A] leading-relaxed mb-6">
                  Curated executive summary detailing 7+ years of product delivery, cancellation interventions, marketplace scaling, and cross-functional leadership.
                </p>
              </div>

              <div className="pt-6 border-t border-[#E1E5EE] flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleOpenResume('pm')}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#6C5CE7] hover:bg-[#5B4BD5] text-white font-semibold text-xs transition-all shadow-md shadow-[#6C5CE7]/25"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF ↓</span>
                </button>
                <button
                  onClick={() => handleOpenResume('pm')}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-[#F0F2FA] hover:bg-[#EEEBFF] text-[#172033] hover:text-[#6C5CE7] text-xs font-semibold border border-[#E1E5EE] transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-[#6C5CE7]" />
                  <span>Preview</span>
                </button>
              </div>
            </div>

            {/* Card 2: Technical Product Manager Resume (Secondary) */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E1E5EE] hover:border-[#6C5CE7]/50 shadow-[0_2px_12px_-2px_rgba(23,32,51,0.05)] flex flex-col justify-between group transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F0F2FA] border border-[#E1E5EE] flex items-center justify-center text-[#5F687A] group-hover:scale-105 transition-transform">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#F0F2FA] border border-[#E1E5EE] text-[#5F687A] text-[10px] font-mono uppercase tracking-wider font-semibold">
                    TECHNICAL FOCUS
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#172033] mb-2">
                  Technical Product Manager Resume
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#5F687A] mb-6 font-semibold">
                  APIs • SDKs • Systems • Payments Architecture
                </p>

                <p className="text-xs sm:text-sm text-[#5F687A] leading-relaxed mb-6">
                  Targeted engineering-focused resume highlighting API coordination, contract testing, UAT leadership, and payment orchestration complexity.
                </p>
              </div>

              <div className="pt-6 border-t border-[#E1E5EE] flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleOpenResume('tpm')}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#172033] hover:bg-[#2B354F] text-white font-semibold text-xs transition-all"
                >
                  <Download className="w-4 h-4 text-[#A78BFA]" />
                  <span>Download Technical PM Resume ↓</span>
                </button>
                <button
                  onClick={() => handleOpenResume('tpm')}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-[#F0F2FA] hover:bg-[#EEEBFF] text-[#172033] hover:text-[#6C5CE7] text-xs font-semibold border border-[#E1E5EE] transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-[#6C5CE7]" />
                  <span>Preview</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Modal */}
      <ResumeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={resumeType}
      />
    </>
  );
};
