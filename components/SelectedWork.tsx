'use client';

import React, { useState } from 'react';
import { ArrowRight, Layers, CreditCard, ShoppingBag, Bell, LineChart, Search, Sparkles } from 'lucide-react';
import { CASE_STUDIES } from '@/data/caseStudies';

interface SelectedWorkProps {
  onOpenModal: (caseStudyId: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'PRODUCT DISCOVERY',
    'PLATFORM',
    'PAYMENTS',
    'MARKETPLACE',
    'AUTOMATION',
    'ANALYTICS',
  ];

  const filteredProjects =
    activeCategory === 'ALL'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((p) => p.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'PRODUCT DISCOVERY':
        return Search;
      case 'PLATFORM':
        return Layers;
      case 'PAYMENTS':
        return CreditCard;
      case 'MARKETPLACE':
        return ShoppingBag;
      case 'AUTOMATION':
        return Bell;
      case 'ANALYTICS':
        return LineChart;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-[#F7F8FC] relative border-b border-[#E1E5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight">
            Selected Product Initiatives
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F687A] font-normal leading-relaxed">
            Selected from 50+ product initiatives across eCommerce, FinTech and marketplace ecosystems, spanning Discovery • Platform • Payments • Marketplace • Automation • Analytics.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#6C5CE7] text-white shadow-md shadow-[#6C5CE7]/30'
                  : 'bg-white text-[#5F687A] hover:text-[#172033] hover:bg-[#F0F2FA] border border-[#E1E5EE]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 Large Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => {
            const Icon = getCategoryIcon(project.category);
            return (
              <div
                key={project.id}
                onClick={() => onOpenModal(project.id)}
                className="group relative rounded-2xl bg-white border border-[#E1E5EE] hover:border-[#6C5CE7]/60 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-[0_2px_12px_-2px_rgba(23,32,51,0.05)] hover:shadow-[0_12px_30px_-4px_rgba(108,92,231,0.12)] cursor-pointer"
              >
                <div>
                  {/* Top Bar: Project Number & Category Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#6C5CE7] tracking-wider">
                        {project.projectNumber}
                      </span>
                      <span className="text-[#CBD5E1]">•</span>
                      <span className="text-[11px] font-mono text-[#5F687A] uppercase font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#EEEBFF] text-[#6C5CE7] group-hover:bg-[#6C5CE7] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#172033] mb-2 group-hover:text-[#6C5CE7] transition-colors">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#5F687A] leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>

                  {/* Special Visual Micro-Display for Project 03 (Split Payments) */}
                  {project.id === 'split-payment-wallet-orchestration' && (
                    <div className="p-3.5 rounded-xl bg-[#F7F8FC] border border-[#E1E5EE] mb-6 text-xs font-mono">
                      <div className="flex justify-between text-[#5F687A] mb-1">
                        <span>ORDER TOTAL</span>
                        <span className="text-[#172033] font-bold">AED 50</span>
                      </div>
                      <div className="space-y-1 text-[11px] text-[#5F687A] border-t border-[#E1E5EE] pt-1.5">
                        <div className="flex justify-between">
                          <span>Smiles Points:</span>
                          <span className="font-semibold text-[#172033]">AED 20</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Wallet Balance:</span>
                          <span className="font-semibold text-[#172033]">AED 10</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Promo Discount:</span>
                          <span className="font-semibold text-[#172033]">AED 10</span>
                        </div>
                        <div className="flex justify-between text-emerald-600 font-bold border-t border-[#E1E5EE] pt-1">
                          <span>Remaining (Card / Apple Pay):</span>
                          <span>AED 10</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Special Visual Micro-Display for Project 04 (Substitution) */}
                  {project.id === 'substitution-picker-fulfilment' && (
                    <div className="p-3 rounded-xl bg-[#F7F8FC] border border-[#E1E5EE] mb-6 text-xs">
                      <div className="text-[11px] font-mono text-amber-600 font-bold mb-1">
                        KEY TRADE-OFF:
                      </div>
                      <div className="text-xs text-[#172033] font-bold mb-2">
                        Customer Control ↔ Fulfilment Speed
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#5F687A]">
                        <span className="px-1.5 py-0.5 rounded bg-white border border-[#E1E5EE] font-semibold text-[#172033]">CALL</span>
                        <span>•</span>
                        <span className="px-1.5 py-0.5 rounded bg-white border border-[#E1E5EE] font-semibold text-[#172033]">WHATSAPP</span>
                        <span>•</span>
                        <span className="px-1.5 py-0.5 rounded bg-white border border-[#E1E5EE] font-semibold text-[#172033]">REMOVE</span>
                        <span className="ml-auto text-amber-600 font-bold">6-min SLA</span>
                      </div>
                    </div>
                  )}

                  {/* Special Visual Micro-Display for Project 05 (Escalation) */}
                  {project.id === 'automated-order-lifecycle-escalation' && (
                    <div className="p-3 rounded-xl bg-[#F7F8FC] border border-[#E1E5EE] mb-6 text-[11px] font-mono text-[#172033]">
                      <div className="text-[#5F687A] text-[10px] font-semibold mb-1">LIFECYCLE WATCHER:</div>
                      <div className="text-[#6C5CE7] font-bold truncate">
                        PENDING → PICKING → EN ROUTE
                      </div>
                      <div className="mt-2 text-[#5F687A] text-[10px]">
                        IVR Call → Max 3 Retries → Slack Escalation
                      </div>
                    </div>
                  )}

                  {/* Metric Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-xs font-mono font-semibold mb-6">
                    <Sparkles className="w-3.5 h-3.5 text-[#6C5CE7]" />
                    <span>{project.metric}</span>
                  </div>
                </div>

                {/* Bottom Section: Tags & CTA */}
                <div>
                  <div className="pt-4 border-t border-[#E1E5EE] flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#F0F2FA] text-[11px] font-mono text-[#5F687A] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-[#6C5CE7] group-hover:text-[#5B4BD5] transition-colors">
                    <span>Explore Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
