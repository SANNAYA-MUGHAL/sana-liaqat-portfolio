'use client';

import React from 'react';
import { MapPin, CheckCircle2, Clock } from 'lucide-react';
import { EXPERIENCE_ROLES } from '@/data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#F0F2FA] relative border-b border-[#E1E5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight">
            Professional Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F687A] font-normal leading-relaxed">
            Leading product initiatives across regulated FinTech, omnichannel retail marketplaces, digital apps, and complex multi-stakeholder operational platforms.
          </p>
        </div>

        {/* Roles List */}
        <div className="space-y-8">
          {EXPERIENCE_ROLES.map((role) => (
            <div
              key={role.company}
              className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E1E5EE] shadow-[0_2px_12px_-2px_rgba(23,32,51,0.05)] hover:shadow-[0_12px_30px_-4px_rgba(108,92,231,0.1)] transition-all"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E1E5EE] gap-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
                      {role.company}
                    </h3>
                    <span className="px-3 py-1 rounded-md bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-xs font-mono font-semibold">
                      {role.domain}
                    </span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#6C5CE7] mt-1">
                    {role.title}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[#5F687A]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#6C5CE7]" />
                    <span className="font-semibold text-[#172033]">{role.period}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#5F687A]" />
                    <span>{role.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlight Callout */}
              <div className="my-6 p-4 rounded-xl bg-[#F7F8FC] border border-[#E1E5EE] border-l-4 border-l-[#6C5CE7] text-[#172033] text-sm sm:text-base leading-relaxed">
                <span className="font-bold text-[#172033]">Highlight: </span>
                {role.highlight}
              </div>

              {/* Focus / Areas Chips */}
              <div className="mb-6">
                <span className="text-xs font-mono text-[#5F687A] uppercase tracking-wider block mb-2 font-semibold">
                  {role.focusAreas ? 'Core Focus & Responsibilities' : 'Operational & Product Areas'}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {(role.focusAreas || role.areas || []).map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 rounded-lg bg-[#F0F2FA] border border-[#E1E5EE] text-xs font-mono text-[#172033] font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detailed Responsibilities */}
              <div className="pt-4 border-t border-[#E1E5EE]">
                <span className="text-xs font-mono text-[#5F687A] uppercase tracking-wider block mb-3 font-semibold">
                  Key Deliverables &amp; Systems Impact:
                </span>
                <ul className="space-y-2.5">
                  {role.details.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5F687A] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#6C5CE7] mt-1 flex-shrink-0" />
                      <span className="text-[#172033]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
