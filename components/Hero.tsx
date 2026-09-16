'use client';

import React from 'react';
import { ArrowRight, Download, Linkedin, CheckCircle2, TrendingUp, Layers, Workflow, Sparkles } from 'lucide-react';
import { HeroProductFlow } from './HeroProductFlow';

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-[#E1E5EE] bg-[#F7F8FC]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#6C5CE7]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-xs font-mono font-medium mb-8 shadow-sm backdrop-blur-sm">
          <span>🟢 Product Manager • Open to Global Remote &amp; Relocation Opportunities</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#172033] tracking-tight leading-[1.15] max-w-4xl">
          Building products where customer problems, data and complex systems meet.
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#5F687A] leading-relaxed max-w-3xl font-normal">
          Product Manager with 7+ years across technology, FinTech, eCommerce, SaaS and PropTech, combining product thinking with deep experience in payments, APIs, marketplace operations and cross-functional delivery.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#6C5CE7] hover:bg-[#5B4BD5] text-white font-semibold text-sm shadow-md shadow-[#6C5CE7]/25 transition-all hover:shadow-[#6C5CE7]/40 hover:-translate-y-0.5"
          >
            <span>Explore Product Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResumeModal || (() => {
              document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
            })}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-[#F0F2FA] text-[#172033] border border-[#E1E5EE] font-medium text-sm transition-all hover:-translate-y-0.5 shadow-sm"
          >
            <Download className="w-4 h-4 text-[#6C5CE7]" />
            <span>Download Resume</span>
          </button>

          <a
            href="https://www.linkedin.com/in/sanaliaqatpage/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white hover:bg-[#F0F2FA] text-[#172033] border border-[#E1E5EE] hover:border-[#CBD5E1] text-sm font-medium transition-all shadow-sm"
            aria-label="Sana Liaqat LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 text-[#0A66C2]" />
            <span>LinkedIn</span>
            <span className="text-[#5F687A] text-xs">↗</span>
          </a>
        </div>

        {/* Four Impact Cards */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="p-5 rounded-2xl bg-white border border-[#E1E5EE] shadow-[0_2px_12px_-2px_rgba(23,32,51,0.05)] hover:border-[#6C5CE7]/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight group-hover:text-[#6C5CE7] transition-colors">
                7+
              </span>
              <div className="p-2 rounded-lg bg-[#EEEBFF] text-[#6C5CE7]">
                <Workflow className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#172033] leading-snug">
              Years Across Technology &amp; Product
            </p>
            <p className="text-[11px] text-[#5F687A] mt-1">
              Quality • Systems • Delivery • PM
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-2xl bg-white border border-[#E1E5EE] shadow-[0_2px_12px_-2px_rgba(23,32,51,0.05)] hover:border-[#6C5CE7]/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight group-hover:text-[#6C5CE7] transition-colors">
                50+
              </span>
              <div className="p-2 rounded-lg bg-[#EEEBFF] text-[#6C5CE7]">
                <Layers className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#172033] leading-snug">
              Product Initiatives
            </p>
            <p className="text-[11px] text-[#5F687A] mt-1">
              Payments • SDKs • Ops • Analytics
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-2xl bg-white border border-[#E1E5EE] shadow-[0_2px_12px_-2px_rgba(23,32,51,0.05)] hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-600 tracking-tight group-hover:text-emerald-500 transition-colors">
                33%
              </span>
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#172033] leading-snug">
              Order Cancellation Reduction
            </p>
            <p className="text-[11px] text-[#5F687A] mt-1">
              Root-cause intervention &amp; Edit Order
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-5 rounded-2xl bg-white border border-[#E1E5EE] shadow-[0_2px_12px_-2px_rgba(23,32,51,0.05)] hover:border-[#6C5CE7]/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#6C5CE7] tracking-tight group-hover:text-[#5B4BD5] transition-colors font-mono">
                E2E
              </span>
              <div className="p-2 rounded-lg bg-[#EEEBFF] text-[#6C5CE7]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#172033] leading-snug">
              Discovery → Delivery → Optimization
            </p>
            <p className="text-[11px] text-[#5F687A] mt-1">
              Systems-level commercial impact
            </p>
          </div>
        </div>

        {/* Product Flow Visualization in Hero */}
        <HeroProductFlow />
      </div>
    </section>
  );
};
