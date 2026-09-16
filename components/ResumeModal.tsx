'use client';

import React, { useEffect } from 'react';
import { X, Printer, FileText, Mail, Linkedin, MapPin, Clock } from 'lucide-react';
import { EXPERIENCE_ROLES, EXPANDED_TOOLBOX } from '@/data/experience';
import { CERTIFICATIONS, AWARDS, LANGUAGES } from '@/data/profileAdditions';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: 'pm' | 'tpm';
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  type = 'pm',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white border border-[#E1E5EE] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E1E5EE] bg-[#F7F8FC] sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#6C5CE7]" />
            <span className="text-xs font-mono font-bold text-[#172033] uppercase">
              {type === 'tpm' ? 'Technical Product Manager Resume' : 'Product Manager Resume'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#6C5CE7] hover:bg-[#5B4BD5] text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white hover:bg-[#F0F2FA] text-[#5F687A] hover:text-[#172033] border border-[#E1E5EE] transition-colors"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-[#172033] space-y-8 print:p-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-[#E1E5EE] pb-6 print:border-black">
            <h1 className="text-3xl font-extrabold text-[#172033] print:text-black">
              Sana Liaqat
            </h1>
            <p className="text-base font-semibold text-[#6C5CE7] print:text-gray-800 mt-1">
              {type === 'tpm' ? 'Technical Product Manager' : 'Product Manager'} • FinTech, SaaS &amp; Marketplaces
            </p>
            <div className="text-xs text-[#5F687A] print:text-gray-600 mt-3 flex flex-wrap gap-4 font-mono">
              <a
                href="mailto:sannayamughal9@gmail.com"
                className="inline-flex items-center gap-1 hover:text-[#6C5CE7] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#6C5CE7]" />
                <span>sannayamughal9@gmail.com</span>
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/sanaliaqatpage/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#6C5CE7] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>linkedin.com/in/sanaliaqatpage/</span>
              </a>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pakistan (Open to Global Remote &amp; Relocation)</span>
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold text-[#6C5CE7] print:text-black uppercase tracking-wider mb-2">
              Executive Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#5F687A] print:text-gray-800 leading-relaxed">
              Product Manager with 7+ years across technology, FinTech, eCommerce, SaaS and PropTech, combining product thinking with deep experience in payments, APIs, marketplace operations and cross-functional delivery. Proven track record turning behavioral insights into commercial impact, including a 33% reduction in order cancellations via Edit Order discovery and multi-source payment orchestration. Strong foundation in Quality Engineering (3+ years at Dzine Media) providing deep technical rigor for production systems.
            </p>
          </div>

          {/* Key Impact Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-[#F7F8FC] print:bg-gray-100 border border-[#E1E5EE] print:border-gray-300">
            <div>
              <div className="text-xl font-bold text-[#172033] print:text-black">7+ Years</div>
              <div className="text-[10px] text-[#5F687A] print:text-gray-600">Tech &amp; Product</div>
            </div>
            <div>
              <div className="text-xl font-bold text-[#172033] print:text-black">50+</div>
              <div className="text-[10px] text-[#5F687A] print:text-gray-600">Product Initiatives</div>
            </div>
            <div>
              <div className="text-xl font-bold text-emerald-600 print:text-black">33% ↓</div>
              <div className="text-[10px] text-[#5F687A] print:text-gray-600">Cancellations</div>
            </div>
            <div>
              <div className="text-xl font-bold text-[#6C5CE7] print:text-black">E2E</div>
              <div className="text-[10px] text-[#5F687A] print:text-gray-600">Discovery → Impact</div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono font-bold text-[#6C5CE7] print:text-black uppercase tracking-wider">
              Professional Experience
            </h2>

            {EXPERIENCE_ROLES.map((role) => (
              <div key={role.company} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="text-base font-bold text-[#172033] print:text-black">
                    {role.title} — <span className="text-[#6C5CE7] print:text-gray-800">{role.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-[#5F687A] print:text-gray-600">
                    {role.period} • {role.location}
                  </span>
                </div>
                <p className="text-xs italic text-[#5F687A] print:text-gray-700">
                  {role.highlight}
                </p>
                <ul className="space-y-1.5 pt-1">
                  {role.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-[#5F687A] print:text-gray-800">
                      <span className="w-1 h-1 rounded-full bg-[#6C5CE7] print:bg-black mt-1.5 flex-shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Core Competencies & Toolbox */}
          <div className="space-y-4 border-t border-[#E1E5EE] print:border-gray-300 pt-6">
            <h2 className="text-xs font-mono font-bold text-[#6C5CE7] print:text-black uppercase tracking-wider">
              Technical &amp; Product Toolbox
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {EXPANDED_TOOLBOX.slice(0, 8).map((toolCategory) => (
                <div key={toolCategory.category}>
                  <strong className="text-[#172033] print:text-black font-semibold">
                    {toolCategory.category}:{' '}
                  </strong>
                  <span className="text-[#5F687A] print:text-gray-700 font-mono">
                    {toolCategory.skills.slice(0, 6).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Continuous Learning */}
          <div className="space-y-3 border-t border-[#E1E5EE] print:border-gray-300 pt-6">
            <h2 className="text-xs font-mono font-bold text-[#6C5CE7] print:text-black uppercase tracking-wider">
              Certifications &amp; Continuous Learning
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="p-2.5 rounded-lg bg-[#F7F8FC] print:bg-transparent border border-[#E1E5EE] print:border-gray-300">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-semibold text-[#172033] print:text-black leading-snug">{cert.title}</span>
                    <span className="text-[10px] font-mono shrink-0 px-1.5 py-0.5 rounded bg-white print:bg-transparent border border-[#E1E5EE] text-[#5F687A]">
                      {cert.dateBadge || cert.status}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#6C5CE7] print:text-gray-700 mt-0.5">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#E1E5EE] print:border-gray-300 pt-6">
            {/* Awards */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold text-[#6C5CE7] print:text-black uppercase tracking-wider">
                Awards &amp; Recognition
              </h2>
              <div className="space-y-2 text-xs">
                {AWARDS.map((award) => (
                  <div key={award.id} className="p-2 rounded-lg bg-[#F7F8FC] print:bg-transparent border border-[#E1E5EE] print:border-gray-300">
                    <div className="font-semibold text-[#172033] print:text-black">{award.title}</div>
                    <div className="text-[11px] text-[#5F687A] flex justify-between items-center mt-0.5 font-mono">
                      <span>{award.organization}</span>
                      <span>{award.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold text-[#6C5CE7] print:text-black uppercase tracking-wider">
                Languages
              </h2>
              <div className="space-y-2 text-xs">
                {LANGUAGES.map((lang) => (
                  <div key={lang.language} className="p-2.5 rounded-lg bg-[#F7F8FC] print:bg-transparent border border-[#E1E5EE] print:border-gray-300 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-[#172033] print:text-black">{lang.language}</span>
                      {lang.credential && (
                        <div className="text-[10px] text-[#5F687A] font-mono">{lang.credential}</div>
                      )}
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white print:bg-transparent border border-[#E1E5EE] text-[#6C5CE7] font-semibold">
                      {lang.proficiency} {lang.statusBadge ? `• ${lang.statusBadge}` : ''}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
