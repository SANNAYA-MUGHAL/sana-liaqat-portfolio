'use client';

import React from 'react';
import { ArrowUp, Mail, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F7F8FC] border-t border-[#E1E5EE] py-12 text-[#5F687A] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left branding */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#6C5CE7] flex items-center justify-center font-bold text-white text-xs shadow-sm shadow-[#6C5CE7]/30">
            SL
          </div>
          <div>
            <div className="font-bold text-[#172033] text-sm">
              Sana Liaqat
            </div>
            <div className="text-[11px] font-mono text-[#5F687A]">
              Product Manager • FinTech, SaaS &amp; Marketplaces
            </div>
          </div>
        </div>

        {/* Center contact links */}
        <div className="flex items-center gap-4 font-mono text-xs">
          <a
            href="mailto:sannayamughal9@gmail.com?subject=Product%20Management%20Opportunity"
            className="inline-flex items-center gap-1.5 hover:text-[#6C5CE7] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#6C5CE7]" />
            <span>sannayamughal9@gmail.com</span>
          </a>
          <span className="text-[#CBD5E1]">•</span>
          <a
            href="https://www.linkedin.com/in/sanaliaqatpage/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#6C5CE7] transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white hover:bg-[#F0F2FA] border border-[#E1E5EE] hover:border-[#CBD5E1] text-[#172033] font-semibold transition-colors shadow-xs"
          aria-label="Scroll to top of page"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#6C5CE7]" />
        </button>

      </div>
    </footer>
  );
};
