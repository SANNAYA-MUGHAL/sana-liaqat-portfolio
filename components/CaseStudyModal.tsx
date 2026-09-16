'use client';

import React, { useEffect, useState } from 'react';
import {
  X,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '@/data/caseStudies';

interface CaseStudyModalProps {
  caseStudyId: string | null;
  onClose: () => void;
  onSelectProject: (id: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudyId,
  onClose,
  onSelectProject,
}) => {
  const projectIndex = CASE_STUDIES.findIndex((p) => p.id === caseStudyId);
  const project: CaseStudy | undefined = CASE_STUDIES[projectIndex];

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudyId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudyId, onClose]);

  if (!caseStudyId || !project) return null;

  const prevProject =
    projectIndex > 0 ? CASE_STUDIES[projectIndex - 1] : CASE_STUDIES[CASE_STUDIES.length - 1];
  const nextProject =
    projectIndex < CASE_STUDIES.length - 1 ? CASE_STUDIES[projectIndex + 1] : CASE_STUDIES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-white border border-[#E1E5EE] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E1E5EE] bg-[#F7F8FC] backdrop-blur sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#6C5CE7]">
              {project.projectNumber}
            </span>
            <span className="text-[#CBD5E1]">•</span>
            <span className="text-xs font-mono text-[#5F687A] uppercase font-semibold">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectProject(prevProject.id)}
              className="p-2 rounded-lg bg-white hover:bg-[#F0F2FA] text-[#5F687A] hover:text-[#172033] border border-[#E1E5EE] transition-colors"
              title="Previous Case Study"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectProject(nextProject.id)}
              className="p-2 rounded-lg bg-white hover:bg-[#F0F2FA] text-[#5F687A] hover:text-[#172033] border border-[#E1E5EE] transition-colors"
              title="Next Case Study"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white hover:bg-[#F0F2FA] text-[#5F687A] hover:text-[#172033] border border-[#E1E5EE] transition-colors ml-2"
              title="Close Modal (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-10 bg-white">
          {/* Hero Banner within Modal */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-md bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-xs font-mono font-semibold">
                {project.domain}
              </span>
              <span className="px-3 py-1 rounded-md bg-[#F0F2FA] border border-[#E1E5EE] text-[#5F687A] text-xs font-mono font-semibold">
                {project.company}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#172033] tracking-tight leading-tight">
              {project.title}
            </h2>
            <p className="mt-2 text-base sm:text-lg text-[#5F687A]">
              {project.subtitle}
            </p>

            {/* Quick Metadata Bar */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#F7F8FC] border border-[#E1E5EE]">
              <div>
                <span className="text-[10px] font-mono text-[#5F687A] uppercase block font-semibold">
                  My Role
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#172033]">
                  {project.role}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#5F687A] uppercase block font-semibold">
                  Primary Metric
                </span>
                <span className="text-xs sm:text-sm font-bold text-emerald-600">
                  {project.metric} {project.metricLabel}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#5F687A] uppercase block font-semibold">
                  Domain Scope
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#5F687A]">
                  {project.domain}
                </span>
              </div>
            </div>
          </div>

          {/* Flow Diagram (if available) */}
          {project.flowDiagram && (
            <div className="p-5 rounded-2xl bg-[#F7F8FC] border border-[#E1E5EE]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#6C5CE7] uppercase font-bold">
                  Product Architecture / State Transition Flow
                </span>
                <span className="text-[11px] font-mono text-[#5F687A]">
                  {project.flowDiagram.steps.length} Key Stages
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {project.flowDiagram.steps.map((step, idx) => (
                  <div
                    key={step.label}
                    className="p-3.5 rounded-xl bg-white border border-[#E1E5EE] relative flex flex-col justify-between shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono text-[#5F687A] font-semibold">
                          STAGE 0{idx + 1}
                        </span>
                        {step.badge && (
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {step.badge}
                          </span>
                        )}
                      </div>
                      <h4 className="text-xs font-bold text-[#172033] mb-1">
                        {step.label}
                      </h4>
                      {step.detail && (
                        <p className="text-[11px] text-[#5F687A] leading-snug">
                          {step.detail}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8-Part PM Breakdown Sections */}

          {/* 1. Problem */}
          <div className="space-y-3 border-t border-[#E1E5EE] pt-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 text-xs font-mono font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-[#172033]">Problem Statement</h3>
            </div>
            <p className="text-sm sm:text-base text-[#5F687A] leading-relaxed pl-8">
              {project.problem}
            </p>
          </div>

          {/* 2. My Role */}
          <div className="space-y-3 border-t border-[#E1E5EE] pt-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#EEEBFF] border border-[#D4CCFC] flex items-center justify-center text-[#6C5CE7] text-xs font-mono font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-[#172033]">My Role &amp; Cross-Functional Scope</h3>
            </div>
            <p className="text-sm sm:text-base text-[#5F687A] leading-relaxed pl-8">
              {project.myRoleDescription}
            </p>
          </div>

          {/* 3. Discovery */}
          <div className="space-y-4 border-t border-[#E1E5EE] pt-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 text-xs font-mono font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-[#172033]">Discovery &amp; Root-Cause Investigation</h3>
            </div>
            <div className="pl-8 space-y-4">
              <p className="text-sm text-[#5F687A] leading-relaxed">
                {project.discovery.overview}
              </p>
              {project.discovery.keyPoints && (
                <ul className="space-y-2">
                  {project.discovery.keyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs sm:text-sm text-[#172033]">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Product Insight Callout if available */}
              {project.productInsight && (
                <div className="p-4 rounded-xl bg-[#EEEBFF] border-l-4 border-l-[#6C5CE7] text-[#172033] text-sm font-semibold italic">
                  &ldquo;{project.productInsight}&rdquo;
                </div>
              )}
            </div>
          </div>

          {/* 4. Solution */}
          <div className="space-y-4 border-t border-[#E1E5EE] pt-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 text-xs font-mono font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-[#172033]">Product Solution</h3>
            </div>
            <div className="pl-8 space-y-4">
              <p className="text-sm text-[#5F687A] leading-relaxed">
                {project.solution.overview}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.solution.keyFeatures.map((feat) => (
                  <div
                    key={feat}
                    className="p-3 rounded-xl bg-[#F7F8FC] border border-[#E1E5EE] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-[#172033] font-semibold">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5. Product Decisions */}
          <div className="space-y-3 border-t border-[#E1E5EE] pt-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 text-xs font-mono font-bold">
                5
              </div>
              <h3 className="text-lg font-bold text-[#172033]">Key Product Decisions &amp; Trade-Offs</h3>
            </div>
            <ul className="pl-8 space-y-2.5">
              {project.productDecisions.map((decision) => (
                <li key={decision} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172033]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 flex-shrink-0" />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 6. Technical / Operational Complexity */}
          <div className="space-y-4 border-t border-[#E1E5EE] pt-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-purple-50 border border-purple-200 flex items-center justify-center text-[#6C5CE7] text-xs font-mono font-bold">
                6
              </div>
              <h3 className="text-lg font-bold text-[#172033]">Technical &amp; Operational Complexity</h3>
            </div>
            <div className="pl-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F7F8FC] border border-[#E1E5EE]">
                <span className="text-xs font-mono text-[#6C5CE7] font-bold uppercase block mb-2">
                  Technical Architecture Complexity
                </span>
                <ul className="space-y-2">
                  {project.complexity.technical.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#5F687A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-1.5 flex-shrink-0" />
                      <span className="text-[#172033]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-[#F7F8FC] border border-[#E1E5EE]">
                <span className="text-xs font-mono text-sky-700 font-bold uppercase block mb-2">
                  Operational Execution Complexity
                </span>
                <ul className="space-y-2">
                  {project.complexity.operational.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#5F687A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 flex-shrink-0" />
                      <span className="text-[#172033]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 7. Outcome */}
          <div className="space-y-3 border-t border-[#E1E5EE] pt-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 text-xs font-mono font-bold">
                7
              </div>
              <h3 className="text-lg font-bold text-[#172033]">Measured Outcome &amp; Impact</h3>
            </div>
            <div className="pl-8 space-y-3">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <div className="text-xl font-extrabold text-emerald-700 mb-1">
                  {project.outcome.primaryMetric}
                </div>
                <p className="text-xs sm:text-sm text-[#172033]">
                  {project.outcome.description}
                </p>
              </div>
              <ul className="space-y-2 pt-2">
                {project.outcome.highlights.map((hl) => (
                  <li key={hl} className="flex items-start gap-2 text-xs sm:text-sm text-[#172033]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 8. What I Learned */}
          <div className="space-y-3 border-t border-[#E1E5EE] pt-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#EEEBFF] border border-[#D4CCFC] flex items-center justify-center text-[#6C5CE7] text-xs font-mono font-bold">
                8
              </div>
              <h3 className="text-lg font-bold text-[#172033]">What I Learned / PM Retrospective</h3>
            </div>
            <ul className="pl-8 space-y-2.5">
              {project.whatILearned.map((learning) => (
                <li key={learning} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172033]">
                  <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Tags */}
          <div className="pt-6 border-t border-[#E1E5EE] flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md bg-[#F0F2FA] text-xs font-mono text-[#5F687A] font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Navigation */}
        <div className="px-6 py-4 border-t border-[#E1E5EE] bg-[#F7F8FC] flex items-center justify-between">
          <button
            onClick={() => onSelectProject(prevProject.id)}
            className="flex items-center gap-2 text-xs font-semibold text-[#5F687A] hover:text-[#172033]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous ({prevProject.projectNumber})</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white hover:bg-[#F0F2FA] text-xs font-semibold text-[#172033] border border-[#E1E5EE] shadow-xs"
          >
            Close
          </button>
          <button
            onClick={() => onSelectProject(nextProject.id)}
            className="flex items-center gap-2 text-xs font-semibold text-[#6C5CE7] hover:text-[#5B4BD5]"
          >
            <span>Next ({nextProject.projectNumber})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
