'use client';

import React, { useState } from 'react';
import { Users, Layout, BarChart3, BrainCircuit, Rocket, Award, ChevronRight } from 'lucide-react';

interface FlowNode {
  step: string;
  title: string;
  detail: string;
  icon: React.ElementType;
}

const FLOW_STEPS: FlowNode[] = [
  {
    step: '01',
    title: 'CUSTOMER',
    detail: 'Unmet needs, behavior patterns & friction points',
    icon: Users,
  },
  {
    step: '02',
    title: 'PRODUCT',
    detail: 'Hypothesis framing, scope & journey architecture',
    icon: Layout,
  },
  {
    step: '03',
    title: 'DATA',
    detail: 'Funnel telemetry, production logs & metric baselines',
    icon: BarChart3,
  },
  {
    step: '04',
    title: 'DECISION',
    detail: 'Trade-off analysis, prioritization & business rules',
    icon: BrainCircuit,
  },
  {
    step: '05',
    title: 'DELIVERY',
    detail: 'Cross-functional execution, APIs, UAT & release gates',
    icon: Rocket,
  },
  {
    step: '06',
    title: 'IMPACT',
    detail: 'Quantified conversion, cancellation drops & scale',
    icon: Award,
  },
];

export const HeroProductFlow: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <div className="w-full mt-10 lg:mt-14 pt-8 border-t border-[#E1E5EE]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#6C5CE7] animate-ping" />
          <span className="text-[11px] font-mono tracking-wider text-[#6C5CE7] uppercase font-semibold">
            Product Delivery Pipeline Architecture
          </span>
        </div>
        <span className="text-[11px] text-[#5F687A] hidden sm:inline-block">
          Interactive End-to-End Operating Model
        </span>
      </div>

      {/* Horizontal Flow for Desktop / Vertical for Mobile */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {FLOW_STEPS.map((node, index) => {
          const Icon = node.icon;
          const isSelected = activeNode === index;
          return (
            <div
              key={node.title}
              onMouseEnter={() => setActiveNode(index)}
              onMouseLeave={() => setActiveNode(null)}
              onClick={() => setActiveNode(isSelected ? null : index)}
              className={`relative group cursor-pointer p-3.5 rounded-xl border transition-all duration-300 ${
                isSelected
                  ? 'bg-white border-[#6C5CE7] shadow-md shadow-[#6C5CE7]/15 scale-[1.02]'
                  : 'bg-white/80 border-[#E1E5EE] hover:border-[#6C5CE7]/40 hover:bg-white'
              }`}
            >
              {/* Top indicator & step */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-[#5F687A] group-hover:text-[#6C5CE7] transition-colors font-semibold">
                  {node.step}
                </span>
                <div
                  className={`p-1.5 rounded-md transition-colors ${
                    isSelected
                      ? 'bg-[#6C5CE7] text-white'
                      : 'bg-[#EEEBFF] text-[#6C5CE7] group-hover:bg-[#6C5CE7] group-hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Title */}
              <h4 className="text-xs font-bold text-[#172033] tracking-wider mb-1 flex items-center gap-1 group-hover:text-[#6C5CE7]">
                {node.title}
              </h4>

              {/* Detail snippet */}
              <p className="text-[11px] text-[#5F687A] leading-snug line-clamp-2">
                {node.detail}
              </p>

              {/* Connector line for desktop */}
              {index < FLOW_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-[#CBD5E1]">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
