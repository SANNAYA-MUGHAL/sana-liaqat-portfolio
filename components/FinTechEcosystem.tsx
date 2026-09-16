'use client';

import React, { useState } from 'react';
import { FINTECH_NODES, FinTechNode } from '@/data/ecosystemNodes';

export const FinTechEcosystem: React.FC = () => {
  const [activeFintechNode, setActiveFintechNode] = useState<FinTechNode>(FINTECH_NODES[2]); // Default KYC

  const fintechIntegrations = [
    {
      name: 'Onfido',
      badge: 'KYC / AML',
      description: 'Biometric passport, ID fraud detection & automated sanctions/PEP screening.',
    },
    {
      name: 'MangoPay',
      badge: 'E-Money & Escrow',
      description: 'Ring-fenced client funds, multi-currency wallets & payout rail orchestration.',
    },
    {
      name: 'Plaid',
      badge: 'Open Banking',
      description: 'Instant account verification & Strong Customer Authentication (SCA) bank deposits.',
    },
  ];

  return (
    <section id="fintech-ecosystem" className="py-20 lg:py-28 bg-[#F7F8FC] relative border-b border-[#E1E5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            REGULATED FINTECH INFRASTRUCTURE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight">
            Bayuti UK FinTech &amp; PropTech Ecosystem
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F687A] font-normal leading-relaxed">
            Experience working within a regulated UK property-investment platform spanning investor onboarding, KYC, payments, wallets, compliance, investment journeys and secondary-market functionality.
          </p>
        </div>

        {/* Ecosystem Card */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#E1E5EE] shadow-[0_4px_24px_rgba(23,32,51,0.06)] space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E1E5EE] gap-2">
            <span className="text-xs font-mono text-emerald-700 font-bold uppercase">
              Regulated Fractional Investment Pipeline
            </span>
            <span className="text-[11px] font-mono text-[#5F687A]">
              Select any stage to view regulatory and platform compliance architecture
            </span>
          </div>

          {/* Flow Stages */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {FINTECH_NODES.map((node) => {
              const isSelected = activeFintechNode.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveFintechNode(node)}
                  className={`p-3 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-emerald-600 border-emerald-700 text-white shadow-md shadow-emerald-600/30 scale-[1.03]'
                      : 'bg-[#F7F8FC] border-[#E1E5EE] text-[#172033] hover:border-emerald-500/40 hover:bg-white'
                  }`}
                >
                  <span className={`text-[10px] font-mono block mb-1 ${isSelected ? 'text-emerald-100' : 'text-[#5F687A]'}`}>
                    0{node.stepNumber}
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold leading-snug tracking-tight">
                    {node.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F7F8FC] border border-[#E1E5EE] grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold">
                  STAGE 0{activeFintechNode.stepNumber}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#172033]">
                  {activeFintechNode.label}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#5F687A] leading-relaxed">
                {activeFintechNode.description}
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono text-[#5F687A] uppercase tracking-wider block mb-1.5 font-semibold">
                  Regulatory &amp; Compliance Guardrails:
                </span>
                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs sm:text-sm text-emerald-900 leading-relaxed font-medium shadow-xs">
                  {activeFintechNode.regulatoryFocus}
                </div>
              </div>
            </div>

            {/* External Integration Pill if applicable */}
            <div className="lg:col-span-4 lg:border-l lg:border-[#E1E5EE] lg:pl-6 flex flex-col justify-center space-y-3">
              <span className="text-[11px] font-mono text-[#5F687A] uppercase tracking-wider font-semibold">
                Regulated FinTech Enablers:
              </span>
              <div className="space-y-2">
                {fintechIntegrations.map((item) => (
                  <div key={item.name} className="p-2.5 rounded-lg bg-white border border-[#E1E5EE] text-xs shadow-xs">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-bold text-[#172033]">{item.name}</span>
                      <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 font-semibold">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#5F687A] leading-tight">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
