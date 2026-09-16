'use client';

import React from 'react';
import { ArrowRight, AlertCircle, CheckCircle2, ChevronRight, Sparkles, Workflow } from 'lucide-react';

interface FlagshipCaseStudyProps {
  onOpenModal: (caseStudyId: string) => void;
}

export const FlagshipCaseStudy: React.FC<FlagshipCaseStudyProps> = ({ onOpenModal }) => {
  const discoveryFlow = [
    'Mixpanel',
    'Order Behaviour',
    'Cancellation Patterns',
    'Production Logs',
    'Payment Failures',
    'Root Causes',
  ];

  const beforeSteps = [
    'Place Order',
    'Need a Change',
    'Cancel Order',
    'Rebuild Cart',
    'Checkout Again',
  ];

  const afterSteps = [
    'Place Order',
    'Edit Order',
    '30-Minute Window',
    'Modify Existing Order',
  ];

  const customerCapabilities = [
    'Change Delivery Slot',
    'Apply Promo Code',
    'Add Products',
  ];

  const tags = [
    'Product Discovery',
    'Mixpanel',
    'Root Cause Analysis',
    'Customer Behaviour',
    'Payments',
    'Product Optimization',
  ];

  return (
    <section id="flagship-case-study" className="py-20 lg:py-28 bg-[#F0F2FA] relative border-b border-[#E1E5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            FLAGSHIP CASE STUDY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight">
            From Cancellation Data to Product Intervention
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F687A] font-normal leading-relaxed">
            How behavioural and production analysis turned a cancellation problem into an Edit Order experience.
          </p>
        </div>

        {/* Main Case Study Card Container */}
        <div className="rounded-3xl bg-white border border-[#E1E5EE] shadow-[0_4px_24px_rgba(23,32,51,0.06)] p-6 sm:p-10 lg:p-12 space-y-12">
          
          {/* Section 1: The Challenge */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-[#E1E5EE] pb-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono text-[#6C5CE7] tracking-wider uppercase font-bold">
                01 • THE CHALLENGE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#172033] mt-1">
                Monolithic metric vs. true customer friction
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <p className="text-[#5F687A] text-base sm:text-lg leading-relaxed">
                elGrocer was experiencing significant order cancellations.
              </p>
              <p className="text-[#5F687A] text-base sm:text-lg leading-relaxed">
                Instead of treating cancellation as a single metric, the investigation focused on understanding:
              </p>
              <div className="p-5 rounded-2xl bg-[#EEEBFF]/70 border border-[#D4CCFC] text-[#172033] font-bold text-lg sm:text-xl">
                Why are customers cancelling after already deciding to purchase?
              </div>
            </div>
          </div>

          {/* Section 2: Discovery Flow & Causes */}
          <div className="border-b border-[#E1E5EE] pb-12">
            <div className="mb-6">
              <span className="text-xs font-mono text-[#6C5CE7] tracking-wider uppercase font-bold">
                02 • DISCOVERY &amp; ROOT-CAUSE ANALYSIS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#172033] mt-1">
                Following the analytical trail
              </h3>
            </div>

            {/* Discovery Animated Pipeline Flow */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#F7F8FC] border border-[#E1E5EE] mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-[#5F687A] uppercase font-semibold">
                  Telemetry &amp; Audit Pipeline
                </span>
                <span className="text-[11px] font-mono text-[#6C5CE7] font-bold">
                  Mixpanel ↔ New Relic
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
                {discoveryFlow.map((step, idx) => (
                  <div
                    key={step}
                    className="relative p-3 rounded-xl bg-white border border-[#E1E5EE] flex flex-col justify-center items-center text-center group hover:border-[#6C5CE7]/60 transition-colors shadow-sm"
                  >
                    <span className="text-[10px] font-mono text-[#5F687A] mb-1 font-semibold">
                      Step 0{idx + 1}
                    </span>
                    <span className="text-xs font-bold text-[#172033] group-hover:text-[#6C5CE7]">
                      {step}
                    </span>
                    {idx < discoveryFlow.length - 1 && (
                      <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#CBD5E1]">
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Two Discovery Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Behavioural Causes */}
              <div className="p-6 rounded-2xl bg-[#F7F8FC] border border-[#E1E5EE]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#EEEBFF] border border-[#D4CCFC] flex items-center justify-center text-[#6C5CE7]">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-[#172033]">
                    Behavioural Causes
                  </h4>
                </div>
                <p className="text-xs text-[#5F687A] mb-4 font-medium">
                  Customers were cancelling and recreating orders to:
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Change delivery slots',
                    'Apply promotional codes',
                    'Add additional products',
                    'Recreate essentially the same basket shortly after cancellation',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172033]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Causes */}
              <div className="p-6 rounded-2xl bg-[#F7F8FC] border border-[#E1E5EE]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-[#172033]">
                    Technical Causes
                  </h4>
                </div>
                <p className="text-xs text-[#5F687A] mb-4 font-medium">
                  Payment-related cancellations also revealed:
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Payment-status synchronization issues',
                    'Tabby webhook failures',
                    'Failed transaction states',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172033]">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Product Insight (Large Highlight Statement) */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#EEEBFF] border border-[#D4CCFC] shadow-sm relative overflow-hidden">
            <div className="text-xs font-mono text-[#6C5CE7] uppercase tracking-wider mb-2 font-bold">
              03 • CORE PRODUCT INSIGHT
            </div>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172033] tracking-tight leading-snug">
              &ldquo;Some customers didn&apos;t actually want to cancel their order. They wanted to modify it.&rdquo;
            </blockquote>
          </div>

          {/* Section 4: Product Solution & Before/After */}
          <div className="border-b border-[#E1E5EE] pb-12">
            <div className="mb-6">
              <span className="text-xs font-mono text-[#6C5CE7] tracking-wider uppercase font-bold">
                04 • PRODUCT SOLUTION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172033] mt-1">
                Edit Order
              </h3>
            </div>

            {/* Visual Journey Before vs After */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* BEFORE */}
              <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-rose-700 tracking-wider">
                    BEFORE (HIGH FRICTION)
                  </span>
                  <span className="text-[11px] text-rose-600 font-mono font-semibold">Lost GMV Risk</span>
                </div>
                <div className="flex flex-col gap-2">
                  {beforeSteps.map((step, idx) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-rose-100 text-xs font-semibold text-[#172033] shadow-xs"
                    >
                      <span className="text-rose-600 font-mono font-bold text-[11px]">
                        0{idx + 1}
                      </span>
                      <span>{step}</span>
                      {idx < beforeSteps.length - 1 && (
                        <span className="ml-auto text-rose-300 text-xs">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* AFTER */}
              <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-emerald-700 tracking-wider">
                    AFTER (EDIT ORDER EXPERIENCE)
                  </span>
                  <span className="text-[11px] text-emerald-600 font-mono font-semibold">Seamless Retention</span>
                </div>
                <div className="flex flex-col gap-2">
                  {afterSteps.map((step, idx) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-emerald-100 text-xs font-semibold text-[#172033] shadow-xs"
                    >
                      <span className="text-emerald-600 font-mono font-bold text-[11px]">
                        0{idx + 1}
                      </span>
                      <span>{step}</span>
                      {idx < afterSteps.length - 1 && (
                        <span className="ml-auto text-emerald-400 text-xs">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Customers Could: 3 Capabilities */}
            <div className="p-6 rounded-2xl bg-[#F7F8FC] border border-[#E1E5EE]">
              <span className="text-xs font-mono text-[#5F687A] uppercase tracking-wider block mb-3 font-semibold">
                Key Customer Actions Enabled Within 30-Minute Grace Window:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {customerCapabilities.map((cap) => (
                  <div
                    key={cap}
                    className="p-4 rounded-xl bg-white border border-[#E1E5EE] flex items-center gap-3 group hover:border-[#6C5CE7]/60 transition-colors shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-bold text-[#172033]">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 5: Impact & Tags */}
          <div className="pt-2 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <span className="text-xs font-mono text-[#6C5CE7] tracking-wider uppercase font-bold">
                05 • MEASURED OUTCOME
              </span>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="text-5xl sm:text-6xl font-extrabold text-emerald-600 tracking-tight">
                  33%
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[#172033]">
                  Reduction in Order Cancellations
                </span>
              </div>
              <p className="mt-3 text-sm text-[#5F687A] max-w-2xl leading-relaxed">
                The broader cancellation-reduction initiative combined behavioural product interventions with fixes to technical payment failure points.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-4">
              <button
                onClick={() => onOpenModal('cancellation-reduction-edit-order')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#6C5CE7] hover:bg-[#5B4BD5] text-white font-semibold text-sm shadow-md shadow-[#6C5CE7]/25 transition-all hover:-translate-y-0.5"
              >
                <span>Explore Full 8-Part Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-[#E1E5EE] flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg bg-[#F7F8FC] border border-[#E1E5EE] text-xs font-mono text-[#6C5CE7] font-medium"
              >
                `{tag}`
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
