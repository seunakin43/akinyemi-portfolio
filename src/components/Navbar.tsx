import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Terminal, Keyboard, Sparkles, Send } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal?: () => void;
  onOpenHotkeyModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenHotkeyModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', path: '/' },
    { name: 'Capstone Suite', path: '/capstone' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Credentials', path: '/credentials' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
          : 'bg-slate-950/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Photo Avatar */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-slate-700/80 group-hover:border-cyan-500/60 transition-colors bg-slate-900 shrink-0">
              <img
                src="/hh.jpg"
                alt="Toluwanimi Akinyemi"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white tracking-tight group-hover:text-cyan-400 transition-colors text-sm sm:text-base">
                  {portfolioData.personal.preferredName}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-600/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse" />
                  Available
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
                Network Operations & AI Automation Engineer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links (Clean, No clumsy brackets) */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-3 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-800 text-cyan-300 border border-slate-700/80 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            
            {/* Keyboard Shortcuts Trigger Button */}
            <button
              onClick={onOpenHotkeyModal}
              className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-cyan-300 transition-colors text-xs flex items-center gap-1.5 cursor-pointer"
              title="Keyboard Shortcuts & Hotkeys Guide [?]"
            >
              <Keyboard className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[11px] font-mono">Hotkeys</span>
              <kbd className="text-[10px] font-mono text-slate-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">?</kbd>
            </button>

            {/* Terminal CLI Button */}
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-cyan-300 transition-colors text-xs flex items-center gap-1.5 cursor-pointer"
                title="Launch Interactive CLI Shell [T]"
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] font-mono hidden md:inline">CLI</span>
                <kbd className="text-[10px] font-mono text-slate-400 bg-slate-950 px-1 py-0.5 rounded border border-slate-800 hidden md:inline">T</kbd>
              </button>
            )}

            {/* Resume PDF */}
            <a
              href="/Toluwanimi_Akinyemi_CV.pdf"
              download="Toluwanimi_Akinyemi_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </a>

            {/* Contact CTA */}
            <a
              href="/#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-sm shadow-cyan-500/20"
            >
              <Send className="w-3 h-3" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenHotkeyModal}
              className="p-2 rounded-lg bg-slate-900 text-cyan-400 border border-slate-800"
              title="Hotkeys"
            >
              <Keyboard className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 mt-2 space-y-3"
          >
            <div className="grid grid-cols-2 gap-2 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between ${
                    location.pathname === link.path
                      ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              ))}
              <Link
                to="/hotkeys"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-medium text-cyan-300 hover:bg-slate-900 col-span-2 border border-slate-800 flex items-center justify-between"
              >
                <span>Keyboard Shortcuts Guide</span>
                <Keyboard className="w-3.5 h-3.5 text-cyan-400" />
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/Toluwanimi_Akinyemi_CV.pdf"
                download="Toluwanimi_Akinyemi_CV.pdf"
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-200"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </a>
              {onOpenTerminal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTerminal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-cyan-300"
                >
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Launch Interactive CLI Shell [T]</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
