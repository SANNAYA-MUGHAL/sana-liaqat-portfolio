'use client';

import React from 'react';
import { Award, Clock, CheckCircle2, BookOpen } from 'lucide-react';
import { CERTIFICATIONS } from '@/data/profileAdditions';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-[#F7F8FC] relative border-b border-[#E1E5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            CONTINUOUS LEARNING
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight">
            Certifications &amp; Professional Development
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F687A] font-normal leading-relaxed">
            Continuously strengthening my capabilities across Product Management, AI, analytics, UX, and technical product development.
          </p>
        </div>

        {/* 5 Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => {
            const isInProgress = cert.status === 'In Progress';

            return (
              <div
                key={cert.id}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E1E5EE] shadow-[0_2px_12px_-2px_rgba(23,32,51,0.05)] hover:shadow-[0_8px_24px_-4px_rgba(108,92,231,0.12)] hover:border-[#6C5CE7]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Meta: Issuer & Status Badge */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-semibold text-[#5F687A]">
                      {cert.issuer}
                    </span>

                    {isInProgress ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-[11px] font-mono font-bold tracking-wide flex-shrink-0">
                        <Clock className="w-3 h-3 text-[#6C5CE7]" />
                        <span>In Progress</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-mono font-bold tracking-wide flex-shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>{cert.dateBadge || 'Completed'}</span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#172033] mb-2.5 group-hover:text-[#6C5CE7] transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5F687A] leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* Skill Tags */}
                <div className="pt-4 border-t border-[#E1E5EE]/80">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#F0F2FA] text-[11px] font-mono text-[#172033] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
