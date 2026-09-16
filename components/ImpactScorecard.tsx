'use client';

import React from 'react';
import { Layers, TrendingDown, Clock, Network } from 'lucide-react';

export const ImpactScorecard: React.FC = () => {
  const metrics = [
    {
      value: '50+',
      title: 'Product Initiatives',
      description: 'Across customer experience, payments, marketplace operations, integrations and automation.',
      sublabel: 'eCommerce • FinTech • Marketplaces',
      icon: Layers,
      color: 'text-[#6C5CE7]',
    },
    {
      value: '33%',
      title: 'Cancellation Reduction',
      description: 'Product and technical interventions driven by root-cause analysis and Edit Order launch.',
      sublabel: 'Mixpanel & Log-Driven Impact',
      icon: TrendingDown,
      color: 'text-emerald-600',
    },
    {
      value: '7+',
      title: 'Years Experience',
      description: 'Across digital products, technology, systems architecture and cross-functional delivery.',
      sublabel: 'Full Lifecycle Provenance',
      icon: Clock,
      color: 'text-[#0284C7]',
    },
    {
      value: 'Multi-Sided',
      title: 'Marketplace Experience',
      description: 'Customer • Retailer • Picker • Driver — balancing operational SLAs with customer delight.',
      sublabel: 'Complex Operational Systems',
      icon: Network,
      color: 'text-[#8B7CF6]',
    },
  ];

  const domainPills = [
    'Discovery',
    'Platform',
    'Payments',
    'Marketplace',
    'Automation',
    'Analytics',
  ];

  return (
    <section id="impact" className="py-20 lg:py-28 bg-[#F7F8FC] relative border-b border-[#E1E5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow & Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            IMPACT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight">
            Product Impact at a Glance
          </h2>
          <p className="mt-4 text-[#5F687A] text-base">
            Measurable, evidence-backed outcomes delivered through data investigation, systems alignment, and cross-functional technical execution.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.title}
                className="relative group p-6 sm:p-7 rounded-2xl bg-white border border-[#E1E5EE] hover:border-[#6C5CE7]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_2px_12px_-2px_rgba(23,32,51,0.05)] hover:shadow-[0_8px_24px_-4px_rgba(108,92,231,0.12)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-[#5F687A] uppercase tracking-wider font-semibold">
                      {metric.sublabel}
                    </span>
                    <div className="p-2 rounded-lg bg-[#EEEBFF] text-[#6C5CE7] group-hover:bg-[#6C5CE7] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Oversized Number */}
                  <div className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${metric.color} mb-3 font-sans`}>
                    {metric.value}
                  </div>

                  <h3 className="text-base font-bold text-[#172033] mb-2 group-hover:text-[#6C5CE7] transition-colors">
                    {metric.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#5F687A] leading-relaxed mt-4 pt-4 border-t border-[#E1E5EE]">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Below Metrics: Domain Pills */}
        <div className="mt-14 pt-8 border-t border-[#E1E5EE] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 flex-wrap">
          <span className="text-xs font-mono text-[#5F687A] uppercase tracking-wider font-semibold">
            Core Competency Areas:
          </span>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {domainPills.map((pill, idx) => (
              <React.Fragment key={pill}>
                <span className="px-3.5 py-1.5 rounded-lg bg-white border border-[#E1E5EE] text-xs font-semibold text-[#172033] hover:border-[#6C5CE7] hover:text-[#6C5CE7] hover:bg-[#EEEBFF] transition-colors shadow-sm">
                  {pill}
                </span>
                {idx < domainPills.length - 1 && (
                  <span className="text-[#CBD5E1] text-xs hidden sm:inline">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
