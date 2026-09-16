'use client';

import React from 'react';
import { Calendar, Building2, Sparkles } from 'lucide-react';
import { AWARDS } from '@/data/profileAdditions';

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="py-20 lg:py-28 bg-[#F0F2FA] relative border-b border-[#E1E5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            RECOGNITION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight">
            Recognition Along the Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F687A] font-normal leading-relaxed">
            Recognition for product thinking, execution, performance, and contribution across my work at elGrocer by Smiles.
          </p>
        </div>

        {/* 4 Recognition Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AWARDS.map((award) => (
            <div
              key={award.id}
              className="p-6 rounded-2xl bg-white border border-[#E1E5EE] shadow-[0_2px_12px_-2px_rgba(23,32,51,0.05)] hover:shadow-[0_8px_24px_-4px_rgba(108,92,231,0.1)] hover:border-[#6C5CE7]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Meta: Category Badge & Date */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#E1E5EE]/80">
                  <span className="px-2.5 py-1 rounded-md bg-[#EEEBFF] text-[11px] font-mono font-bold text-[#6C5CE7] border border-[#D4CCFC]">
                    {award.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-[#5F687A]">
                    <Calendar className="w-3 h-3 text-[#6C5CE7]" />
                    <span>{award.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#172033] group-hover:text-[#6C5CE7] transition-colors leading-snug mb-1.5">
                  {award.title}
                </h3>

                {/* Optional Subtitle */}
                {award.subtitle && (
                  <p className="text-xs font-medium text-[#5F687A] mb-3">
                    {award.subtitle}
                  </p>
                )}
              </div>

              {/* Organization */}
              <div className="pt-4 border-t border-[#E1E5EE]/70 flex items-center gap-1.5 text-xs font-mono text-[#5F687A]">
                <Building2 className="w-3.5 h-3.5 text-[#6C5CE7]" />
                <span className="font-semibold text-[#172033]">{award.organization}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
