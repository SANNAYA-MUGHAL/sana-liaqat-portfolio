'use client';

import React from 'react';
import { Search, Compass, Cpu, Gauge } from 'lucide-react';

export const AboutPhilosophy: React.FC = () => {
  const capabilityCards = [
    {
      title: 'Discover',
      icon: Search,
      badge: '01',
      items: [
        'Customer behaviour',
        'Product analytics',
        'Root-cause analysis',
        'Problem validation',
      ],
      description: 'Digging beneath surface metrics to unearth what users are genuinely trying to accomplish.',
    },
    {
      title: 'Define',
      icon: Compass,
      badge: '02',
      items: [
        'Requirements',
        'User journeys',
        'Business rules',
        'Prioritization',
      ],
      description: 'Synthesizing edge cases, business constraints, and frictionless journeys into unambiguous specifications.',
    },
    {
      title: 'Deliver',
      icon: Cpu,
      badge: '03',
      items: [
        'Cross-functional execution',
        'API & SDK integrations',
        'UAT',
        'Release management',
      ],
      description: 'Orchestrating engineering, platform partners, QA, and operational teams to ship with zero downtime.',
    },
    {
      title: 'Optimize',
      icon: Gauge,
      badge: '04',
      items: [
        'Product analytics',
        'Production monitoring',
        'Experimentation',
        'Continuous improvement',
      ],
      description: 'Closing the loop with real-world telemetry, feedback loops, and data-backed iteration cycles.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F0F2FA] relative border-b border-[#E1E5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            PRODUCT THINKING
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight">
            I don&apos;t start with features. I start with the problem.
          </h2>
        </div>

        {/* Philosophy Narrative */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 text-[#5F687A] leading-relaxed text-base lg:text-lg">
          <div className="lg:col-span-6 space-y-5">
            <p>
              My product approach combines <strong className="text-[#172033] font-bold">customer behaviour</strong>,{' '}
              <strong className="text-[#172033] font-bold">business goals</strong>,{' '}
              <strong className="text-[#172033] font-bold">operational realities</strong> and{' '}
              <strong className="text-[#172033] font-bold">technical constraints</strong>.
            </p>
            <p className="text-[#5F687A] text-base">
              My career across QA leadership, technical support, project delivery and Product Management gives me a systems-level view of digital products.
            </p>
          </div>
          <div className="lg:col-span-6 space-y-5">
            <p>
              I have worked across customer applications, retailer platforms, picker and driver operations, payment infrastructure, APIs, SDK integrations and regulated investment products.
            </p>
            <div className="p-5 rounded-2xl bg-white border border-[#E1E5EE] border-l-4 border-l-[#6C5CE7] text-[#172033] text-sm sm:text-base italic shadow-sm">
              &ldquo;This allows me to understand not only what users see, but what needs to happen behind the interface for the experience to work reliably at scale.&rdquo;
            </div>
          </div>
        </div>

        {/* 4 Capability Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilityCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative p-6 rounded-2xl bg-white border border-[#E1E5EE] hover:border-[#6C5CE7]/50 transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_12px_-2px_rgba(23,32,51,0.05)] hover:shadow-[0_8px_24px_-4px_rgba(108,92,231,0.12)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EEEBFF] border border-[#D4CCFC] flex items-center justify-center text-[#6C5CE7] group-hover:scale-110 group-hover:bg-[#6C5CE7] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#5F687A] group-hover:text-[#6C5CE7] transition-colors">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#172033] mb-2 group-hover:text-[#6C5CE7] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#5F687A] leading-normal mb-5">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E1E5EE]">
                  <ul className="space-y-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-[#172033] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] group-hover:scale-125 transition-transform" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
