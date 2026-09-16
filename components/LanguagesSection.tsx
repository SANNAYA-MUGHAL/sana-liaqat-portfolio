'use client';

import React from 'react';
import { Globe2, Sparkles, BookOpen } from 'lucide-react';
import { LANGUAGES } from '@/data/profileAdditions';

export const LanguagesSection: React.FC = () => {
  return (
    <section id="languages" className="py-16 lg:py-20 bg-[#F7F8FC] relative border-b border-[#E1E5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            LANGUAGES
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172033] tracking-tight">
            Communication Across Cultures
          </h2>
        </div>

        {/* 3 Compact Language Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl">
          {LANGUAGES.map((lang) => (
            <div
              key={lang.language}
              className={`p-5 rounded-2xl bg-white border transition-all duration-300 shadow-[0_2px_10px_-2px_rgba(23,32,51,0.04)] flex flex-col justify-between ${
                lang.isDeveloping
                  ? 'border-[#6C5CE7]/40 hover:border-[#6C5CE7]'
                  : 'border-[#E1E5EE] hover:border-[#CBD5E1]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-[#6C5CE7]" />
                    <h3 className="text-lg font-bold text-[#172033]">
                      {lang.language}
                    </h3>
                  </div>

                  {/* CEFR / Proficiency Badge */}
                  <span
                    className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold ${
                      lang.isDeveloping
                        ? 'bg-[#EEEBFF] text-[#6C5CE7] border border-[#D4CCFC]'
                        : 'bg-[#F0F2FA] text-[#172033] border border-[#E1E5EE]'
                    }`}
                  >
                    {lang.proficiency}
                  </span>
                </div>

                {/* Supporting Credential or Active Learning Status */}
                {lang.credential && (
                  <p className="text-xs font-medium text-[#5F687A] mt-1">
                    {lang.credential}
                  </p>
                )}

                {lang.statusBadge && (
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6C5CE7] mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] animate-pulse" />
                    <span>{lang.statusBadge}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
