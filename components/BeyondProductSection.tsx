'use client';

import React from 'react';
import { Target, Activity, Lightbulb } from 'lucide-react';
import { BEYOND_PRODUCT } from '@/data/profileAdditions';

export const BeyondProductSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'chess':
        return Target;
      case 'activity':
        return Activity;
      case 'lightbulb':
        return Lightbulb;
      default:
        return Target;
    }
  };

  return (
    <section id="beyond-product" className="py-16 lg:py-20 bg-[#F0F2FA] relative border-b border-[#E1E5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            BEYOND PRODUCT
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172033] tracking-tight">
            A Little Beyond the Roadmap
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5F687A] font-normal leading-relaxed">
            Outside product work, I enjoy activities that keep me learning, thinking strategically, and staying active.
          </p>
        </div>

        {/* 3 Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BEYOND_PRODUCT.map((item) => {
            const Icon = getIcon(item.iconName);

            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white border border-[#E1E5EE] shadow-[0_2px_10px_-2px_rgba(23,32,51,0.04)] hover:shadow-[0_8px_20px_-4px_rgba(108,92,231,0.08)] hover:border-[#6C5CE7]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#EEEBFF] border border-[#D4CCFC] flex items-center justify-center text-[#6C5CE7]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#5F687A] uppercase font-bold tracking-wider block">
                        {item.title}
                      </span>
                      <h3 className="text-base font-bold text-[#172033]">
                        {item.activity}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5F687A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
