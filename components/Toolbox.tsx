'use client';

import React, { useState } from 'react';
import {
  Wrench,
  ChevronDown,
  ChevronUp,
  Layout,
  LineChart,
  Cpu,
  CheckCircle,
  CreditCard,
  Sparkles,
  Rocket,
  Activity,
  Palette,
  FileCode,
} from 'lucide-react';
import { EXPANDED_TOOLBOX, ToolboxCategory } from '@/data/experience';

export const Toolbox: React.FC = () => {
  // Keep track of which cards have been expanded
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'pm':
        return Layout;
      case 'analytics':
        return LineChart;
      case 'technical':
        return Cpu;
      case 'qa':
        return CheckCircle;
      case 'payments':
        return CreditCard;
      case 'ai':
        return Sparkles;
      case 'delivery':
        return Rocket;
      case 'observability':
        return Activity;
      case 'ux':
        return Palette;
      case 'documentation':
        return FileCode;
      default:
        return Wrench;
    }
  };

  const INITIAL_VISIBLE_COUNT = 8;

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#F0F2FA] relative border-b border-[#E1E5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            PRODUCT &amp; TECHNICAL TOOLBOX
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight">
            Product Toolbox
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F687A] font-normal leading-relaxed">
            The specialized tools, technical frameworks, analytics instruments, and product methodologies I leverage daily across discovery, execution, and scale.
          </p>
        </div>

        {/* 3-Column Desktop Grid, 2-Column Tablet, 1-Column Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPANDED_TOOLBOX.map((cat: ToolboxCategory) => {
            const isExpanded = !!expandedCards[cat.id];
            const visibleSkills = isExpanded
              ? cat.skills
              : cat.skills.slice(0, INITIAL_VISIBLE_COUNT);
            const remainingCount = cat.skills.length - INITIAL_VISIBLE_COUNT;
            const Icon = getCategoryIcon(cat.id);

            return (
              <div
                key={cat.id}
                className="p-6 rounded-2xl bg-white border border-[#E1E5EE] shadow-[0_2px_12px_-2px_rgba(23,32,51,0.05)] hover:shadow-[0_8px_24px_-4px_rgba(108,92,231,0.12)] hover:border-[#6C5CE7]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon, Title & Pill Count */}
                  <div className="flex items-start justify-between pb-3 mb-4 border-b border-[#E1E5EE]">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#EEEBFF] border border-[#D4CCFC] flex items-center justify-center text-[#6C5CE7] group-hover:bg-[#6C5CE7] group-hover:text-white transition-colors flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#172033] group-hover:text-[#6C5CE7] transition-colors leading-tight">
                          {cat.category}
                        </h3>
                        {cat.tagline && (
                          <span className="text-[11px] text-[#5F687A] block leading-tight mt-0.5">
                            {cat.tagline}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#5F687A] bg-[#F0F2FA] px-2 py-0.5 rounded-full border border-[#E1E5EE]">
                      {cat.skills.length}
                    </span>
                  </div>

                  {/* Skills Compact Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {visibleSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-[#F7F8FC] hover:bg-[#EEEBFF] border border-[#E1E5EE] hover:border-[#D4CCFC] text-xs font-mono text-[#172033] hover:text-[#6C5CE7] transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View More / Show Less Toggle Button */}
                {remainingCount > 0 && (
                  <div className="pt-4 mt-4 border-t border-[#E1E5EE]/70">
                    <button
                      onClick={() => toggleCard(cat.id)}
                      className="w-full inline-flex items-center justify-center gap-1 text-xs font-semibold text-[#6C5CE7] hover:text-[#5B4BD5] py-1.5 rounded-lg bg-[#EEEBFF]/60 hover:bg-[#EEEBFF] transition-colors"
                    >
                      <span>
                        {isExpanded ? 'Show less' : `+${remainingCount} more skills`}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
