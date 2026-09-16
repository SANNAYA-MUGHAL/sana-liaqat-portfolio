'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CAREER_JOURNEY } from '@/data/experience';

export const CareerJourney: React.FC = () => {
  return (
    <section id="journey" className="py-20 lg:py-28 bg-[#F7F8FC] relative border-b border-[#E1E5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            JOURNEY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight">
            Built Product Perspective Layer by Layer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F687A] font-normal leading-relaxed">
            My Product Management approach wasn&apos;t formed in an abstract vacuum. It was forged layer by layer from the ground up through technical testing at Dzine Media, support reality, and cross-functional leadership.
          </p>
        </div>

        {/* Layer-by-Layer Timeline */}
        <div className="space-y-4">
          {CAREER_JOURNEY.map((step, idx) => (
            <div
              key={step.stage}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-[#E1E5EE] hover:border-[#6C5CE7]/40 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_2px_12px_-2px_rgba(23,32,51,0.05)] flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EEEBFF] border border-[#D4CCFC] flex items-center justify-center font-mono font-bold text-sm text-[#6C5CE7] flex-shrink-0 group-hover:bg-[#6C5CE7] group-hover:text-white transition-colors">
                  0{idx + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-[#172033] tracking-wide">
                      {step.stage}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-[#6C5CE7] mt-0.5">
                    {step.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#5F687A] mt-2 max-w-2xl leading-relaxed">
                    {step.insight}
                  </p>
                </div>
              </div>

              {/* Specific Learnings / Skills */}
              <div className="md:w-72 flex-shrink-0 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-[#E1E5EE] md:pl-6">
                <span className="text-[10px] font-mono text-[#5F687A] uppercase tracking-wider block mb-2 font-semibold">
                  Grounding Insight:
                </span>
                <ul className="space-y-1.5">
                  {step.details.slice(0, 2).map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-[#172033]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6C5CE7] mt-0.5 flex-shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Large Closing Statement Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#EEEBFF] border border-[#D4CCFC] text-center shadow-sm">
          <span className="text-xs font-mono text-[#6C5CE7] tracking-wider uppercase block mb-2 font-bold">
            THE ACCUMULATED PRODUCT ADVANTAGE
          </span>
          <div className="text-lg sm:text-2xl font-extrabold text-[#172033] tracking-tight">
            Quality → Systems → Customers → Operations → Delivery → Product Decisions
          </div>
        </div>
      </div>
    </section>
  );
};
