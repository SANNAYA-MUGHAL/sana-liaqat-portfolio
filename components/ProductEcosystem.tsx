'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMMERCE_NODES, CommerceNode } from '@/data/ecosystemNodes';

interface ProductEcosystemProps {
  onOpenModal: (caseStudyId: string) => void;
}

export const ProductEcosystem: React.FC<ProductEcosystemProps> = ({ onOpenModal }) => {
  const [selectedNode, setSelectedNode] = useState<CommerceNode>(COMMERCE_NODES[0]);

  const externalSystems = [
    { name: 'Smiles', role: 'Telecom Super-App / Loyalty Partner' },
    { name: 'Adyen', role: 'Global Payment Gateway & 3DS' },
    { name: 'Tabby', role: 'BNPL Split Financing' },
    { name: 'Apple Pay', role: 'Native Frictionless Mobile Wallet' },
    { name: 'Careem', role: 'Third-Party Delivery Logistics Fleet' },
    { name: 'IVR', role: 'Automated Telephony Voice Escalation' },
    { name: 'Slack', role: 'Operations Incident Triage & Alerts' },
  ];

  return (
    <section id="ecosystem" className="py-20 lg:py-28 bg-[#F0F2FA] relative border-b border-[#E1E5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            SYSTEMS THINKING
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight">
            Products don&apos;t exist in isolation.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F687A] font-normal leading-relaxed">
            My experience spans the full digital commerce lifecycle, from customer discovery and checkout through payments, fulfilment, operational escalation and delivery.
          </p>
        </div>

        {/* Interactive Architecture Diagram Container */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#E1E5EE] shadow-[0_4px_24px_rgba(23,32,51,0.06)]">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E1E5EE] gap-2">
            <span className="text-xs font-mono text-[#6C5CE7] font-bold uppercase">
              End-to-End Digital Commerce Operating Chain
            </span>
            <span className="text-[11px] font-mono text-[#5F687A]">
              Click or tap any node to inspect system interfaces
            </span>
          </div>

          {/* Interactive Nodes Progression Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {COMMERCE_NODES.map((node) => {
              const isSelected = selectedNode.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`p-3 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#6C5CE7] border-[#5B4BD5] text-white shadow-md shadow-[#6C5CE7]/30 scale-[1.03]'
                      : 'bg-[#F7F8FC] border-[#E1E5EE] text-[#172033] hover:border-[#6C5CE7]/40 hover:bg-white'
                  }`}
                >
                  <span className={`text-[10px] font-mono block mb-1 ${isSelected ? 'text-[#EEEBFF]' : 'text-[#5F687A]'}`}>
                    0{node.stepNumber}
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold leading-snug tracking-tight">
                    {node.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Node Details Box */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#F7F8FC] border border-[#E1E5EE] grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] font-bold">
                  NODE 0{selectedNode.stepNumber}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#172033]">
                  {selectedNode.label}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#5F687A] leading-relaxed">
                {selectedNode.description}
              </p>

              <div>
                <span className="text-xs font-mono text-[#5F687A] uppercase tracking-wider block mb-2 font-semibold">
                  Product Responsibilities at this Layer:
                </span>
                <ul className="space-y-2">
                  {selectedNode.responsibilities.map((resp) => (
                    <li key={resp} className="flex items-start gap-2 text-xs sm:text-sm text-[#172033]">
                      <CheckCircle2 className="w-4 h-4 text-[#6C5CE7] mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Related Projects & Integrations */}
            <div className="lg:col-span-4 lg:border-l lg:border-[#E1E5EE] lg:pl-6 flex flex-col justify-between space-y-4">
              {selectedNode.externalSystems && selectedNode.externalSystems.length > 0 && (
                <div>
                  <span className="text-[11px] font-mono text-[#5F687A] uppercase tracking-wider block mb-2 font-semibold">
                    Integrated External Services:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedNode.externalSystems.map((sys) => (
                      <span
                        key={sys}
                        className="px-2.5 py-1 rounded-md bg-white border border-[#E1E5EE] text-xs font-mono text-[#6C5CE7] font-semibold shadow-xs"
                      >
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <span className="text-[11px] font-mono text-[#5F687A] uppercase tracking-wider block mb-2 font-semibold">
                  Related Case Studies:
                </span>
                <div className="space-y-2">
                  {selectedNode.relatedProjects.map((projId) => (
                    <button
                      key={projId}
                      onClick={() => onOpenModal(projId)}
                      className="w-full text-left p-2.5 rounded-lg bg-white hover:bg-[#EEEBFF] border border-[#E1E5EE] hover:border-[#6C5CE7]/60 text-xs font-semibold text-[#172033] hover:text-[#6C5CE7] flex items-center justify-between group transition-colors shadow-xs"
                    >
                      <span className="truncate">View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#6C5CE7] group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* External Systems Perimeter Tags */}
          <div className="mt-8 pt-6 border-t border-[#E1E5EE]">
            <span className="text-xs font-mono text-[#5F687A] uppercase tracking-wider block mb-3 font-semibold">
              Surrounding Ecosystem &amp; External Service Integrations:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {externalSystems.map((sys) => (
                <div
                  key={sys.name}
                  className="p-2.5 rounded-xl bg-[#F7F8FC] border border-[#E1E5EE] text-center group hover:border-[#6C5CE7]/40 hover:bg-white transition-colors"
                >
                  <span className="text-xs font-bold text-[#172033] block group-hover:text-[#6C5CE7]">
                    {sys.name}
                  </span>
                  <span className="text-[10px] text-[#5F687A] line-clamp-1 mt-0.5">
                    {sys.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
