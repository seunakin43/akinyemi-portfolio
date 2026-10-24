import React from 'react';
import { ArrowUp, Mail, Phone, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-slate-800/80">
          
          {/* Brand Info (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-white text-sm">
                TA
              </div>
              <span className="font-bold text-white tracking-tight text-base">
                {portfolioData.personal.name}
              </span>
            </div>
            
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Network Operations & Data professional with 6 years experience. Sustaining 99.8% SLA across 789+ nodes at Pan African Towers and developing production AI workflows with n8n, Make.com, Supabase, and frontier LLM APIs.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Utiva AI Automation Diploma • Credential ID: 34RVXFBKSU73N</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Navigation Subpages
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-400">
              <a href="/" className="hover:text-cyan-400 transition-colors">Overview</a>
              <a href="/capstone" className="hover:text-cyan-400 transition-colors">Capstone Suite</a>
              <a href="/about" className="hover:text-cyan-400 transition-colors">About Bio</a>
              <a href="/skills" className="hover:text-cyan-400 transition-colors">Skills Matrix</a>
              <a href="/experience" className="hover:text-cyan-400 transition-colors">Experience</a>
              <a href="/credentials" className="hover:text-cyan-400 transition-colors">Credentials</a>
              <a href="/hotkeys" className="hover:text-cyan-400 transition-colors text-cyan-300 font-semibold col-span-2">Hotkeys Guide</a>
            </div>
          </div>

          {/* Social Channels & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-3 md:text-right">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Direct Channels
            </h4>
            <div className="flex items-center md:justify-end gap-2 text-slate-400">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
              </a>
              <a
                href="https://wa.me/2348135898224"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
                title="WhatsApp Direct"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-white pt-2 cursor-pointer transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Toluwanimi Taiwo Akinyemi. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with React, Tailwind CSS, Framer Motion & shadcn standards</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
