'use client';

import React from 'react';
import {
  Compass,
  LineChart,
  Cpu,
  CreditCard,
  ShoppingBag,
  Rocket,
} from 'lucide-react';
import { CAPABILITIES } from '@/data/experience';

export const CapabilitiesSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Compass;
      case 1:
        return LineChart;
      case 2:
        return Cpu;
      case 3:
        return CreditCard;
      case 4:
        return ShoppingBag;
      case 5:
        return Rocket;
      default:
        return Compass;
    }
  };

  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-[#F0F2FA] relative border-b border-[#E1E5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight">
            How I Build Products
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F687A] font-normal leading-relaxed">
            A battle-tested methodology honed across fast-growing marketplaces, regulated FinTech portals, and high-volume digital commerce platforms.
          </p>
        </div>

        {/* 6 Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = getIcon(idx);
            return (
              <div
                key={cap.title}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E1E5EE] hover:border-[#6C5CE7]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_2px_12px_-2px_rgba(23,32,51,0.05)] hover:shadow-[0_8px_24px_-4px_rgba(108,92,231,0.12)] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EEEBFF] border border-[#D4CCFC] flex items-center justify-center text-[#6C5CE7] group-hover:scale-105 group-hover:bg-[#6C5CE7] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#5F687A] uppercase tracking-wider font-semibold">
                      {cap.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#172033] mb-2 group-hover:text-[#6C5CE7] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F687A] leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E1E5EE]">
                  <div className="flex flex-wrap gap-1.5">
                    {cap.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-[#F7F8FC] border border-[#E1E5EE] text-xs font-mono text-[#172033] font-medium"
                      >
                        {skill}
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
