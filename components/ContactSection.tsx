'use client';

import React, { useState } from 'react';
import { Mail, Linkedin, Download, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenResumeModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'sannayamughal9@gmail.com';
  const linkedInUrl = 'https://www.linkedin.com/in/sanaliaqatpage/';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F0F2FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-white border border-[#E1E5EE] shadow-[0_4px_24px_rgba(23,32,51,0.06)] relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6C5CE7]/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEEBFF] border border-[#D4CCFC] text-[#6C5CE7] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
              LET&apos;S CONNECT
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight">
              Building something complex?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5F687A] font-normal leading-relaxed">
              I&apos;m interested in international Product Management opportunities where customer problems, data and technology intersect.
            </p>
          </div>

          {/* Profile Card Breakdown */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#F7F8FC] border border-[#E1E5EE] max-w-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E1E5EE]">
              <div>
                <h3 className="text-2xl font-extrabold text-[#172033] tracking-tight">
                  Sana Liaqat
                </h3>
                <div className="text-sm font-semibold text-[#6C5CE7] mt-0.5">
                  Product Manager
                </div>
                <div className="text-xs font-mono text-[#5F687A] mt-1">
                  FinTech • SaaS • eCommerce • AI Products
                </div>
              </div>

              {/* Location Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#E1E5EE] text-xs text-[#172033] shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span className="font-mono text-[11px] font-semibold">
                  Pakistan • Open to Global Remote &amp; Relocation
                </span>
              </div>
            </div>

            {/* Email Bar with One-Click Copy */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 rounded-xl bg-white border border-[#E1E5EE] shadow-xs">
              <a
                href={`mailto:${emailAddress}?subject=Product%20Management%20Opportunity`}
                className="flex items-center gap-2.5 px-2 hover:text-[#6C5CE7] transition-colors group"
                title="Send email"
              >
                <Mail className="w-4 h-4 text-[#6C5CE7]" />
                <span className="text-xs sm:text-sm font-mono text-[#172033] group-hover:text-[#6C5CE7] font-medium">
                  {emailAddress}
                </span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F0F2FA] hover:bg-[#EEEBFF] text-[#172033] hover:text-[#6C5CE7] text-xs font-mono font-semibold border border-[#E1E5EE] transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#5F687A]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${emailAddress}?subject=Product%20Management%20Opportunity`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#6C5CE7] hover:bg-[#5B4BD5] text-white font-semibold text-sm shadow-md shadow-[#6C5CE7]/25 transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F0F2FA] text-[#172033] font-semibold text-sm border border-[#E1E5EE] shadow-sm transition-all hover:-translate-y-0.5"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 text-[#5F687A]" />
            </a>

            <button
              onClick={onOpenResumeModal || (() => {
                document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
              })}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#F7F8FC] hover:bg-[#F0F2FA] text-[#172033] font-semibold text-sm border border-[#E1E5EE] transition-all"
            >
              <Download className="w-4 h-4 text-[#6C5CE7]" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Global Opportunities Footer Note */}
          <div className="mt-8 pt-6 border-t border-[#E1E5EE] text-xs font-mono text-[#5F687A]">
            Available for remote roles across UK, Europe, Middle East, North America &amp; Relocation.
          </div>

        </div>
      </div>
    </section>
  );
};
