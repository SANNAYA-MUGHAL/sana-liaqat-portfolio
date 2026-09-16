'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Impact', href: '#impact' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#E1E5EE] shadow-[0_4px_20px_rgba(23,32,51,0.04)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#6C5CE7] to-[#8B7CF6] flex items-center justify-center font-bold text-white text-sm shadow-sm shadow-[#6C5CE7]/30 group-hover:scale-105 transition-transform">
              SL
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#172033] text-sm tracking-tight group-hover:text-[#6C5CE7] transition-colors">
                Sana Liaqat
              </span>
              <span className="text-[11px] text-[#5F687A] font-mono">
                Product Manager
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-[#5F687A] hover:text-[#6C5CE7] px-3 py-1.5 rounded-md hover:bg-[#EEEBFF] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResumeModal || (() => {
                const el = document.getElementById('resume');
                el?.scrollIntoView({ behavior: 'smooth' });
              })}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#172033] hover:text-[#6C5CE7] bg-white hover:bg-[#F0F2FA] border border-[#E1E5EE] px-3.5 py-2 rounded-lg transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#6C5CE7]" />
              <span>Download Resume</span>
            </button>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#6C5CE7] hover:bg-[#5B4BD5] shadow-sm shadow-[#6C5CE7]/30 px-4 py-2 rounded-lg transition-all hover:shadow-[#6C5CE7]/40 hover:-translate-y-0.5"
            >
              <span>View Product Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#172033] hover:bg-[#F0F2FA] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#E1E5EE] bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#172033] hover:text-[#6C5CE7] hover:bg-[#EEEBFF] px-3 py-2 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E1E5EE] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenResumeModal) onOpenResumeModal();
                else document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-[#172033] bg-white border border-[#E1E5EE] py-2.5 rounded-lg shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#6C5CE7]" />
              <span>Download Resume</span>
            </button>
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-white bg-[#6C5CE7] py-2.5 rounded-lg shadow-sm shadow-[#6C5CE7]/30"
            >
              <span>View Product Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
