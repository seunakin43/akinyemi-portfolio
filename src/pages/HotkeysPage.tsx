import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Keyboard, ArrowRight, CornerDownLeft, Sparkles, Terminal, CheckCircle2, Navigation, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';

interface HotkeysPageProps {
  onOpenTerminal?: () => void;
}

export const HotkeysPage: React.FC<HotkeysPageProps> = ({ onOpenTerminal }) => {
  const navigate = useNavigate();
  const [lastKeyPressed, setLastKeyPressed] = useState<string | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;
      const key = e.key.toUpperCase();
      setLastKeyPressed(key);

      const found = portfolioData.hotkeys.find((h) => h.key.toUpperCase() === key);
      if (found) {
        if (found.key === 'T' && onOpenTerminal) {
          onOpenTerminal();
        } else if (found.path) {
          if (found.path.startsWith('/#')) {
            navigate('/');
            setTimeout(() => {
              const el = document.getElementById(found.path.replace('/#', ''));
              el?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          } else {
            navigate(found.path);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [navigate, onOpenTerminal]);

  const handleAction = (item: typeof portfolioData.hotkeys[0]) => {
    if (item.key === 'T' && onOpenTerminal) {
      onOpenTerminal();
    } else if (item.path) {
      if (item.path.startsWith('/#')) {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(item.path.replace('/#', ''));
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        navigate(item.path);
      }
    }
  };

  return (
    <div className="py-24 sm:py-32 bg-background min-h-screen text-foreground relative overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 blur-[130px] rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono uppercase tracking-wider">
              <Keyboard className="w-3.5 h-3.5" />
              <span>Keyboard Navigation Telemetry</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-6xl text-foreground font-normal tracking-tight">
              Fast Navigation & <em className="text-primary italic">Hotkeys</em> Guide
            </h1>
            
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Engineered so technical recruiters, engineering directors, and power users can navigate Toluwanimi&rsquo;s entire portfolio with zero mouse friction. The homepage provides the executive briefing, while each hotkey routes directly into deep subpage technical evidence.
            </p>
          </div>
        </Reveal>

        {/* Live Key Detection Interactive Box */}
        <Reveal>
          <div className="mb-12 p-6 sm:p-8 rounded-3xl glass border border-primary/20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-signal-ok/10 blur-2xl pointer-events-none" />
            
            <span className="text-[11px] font-mono uppercase text-primary tracking-widest block mb-4">
              Real-Time Hotkey Detector
            </span>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-card border-2 border-primary flex items-center justify-center text-3xl font-mono font-bold text-primary shadow-[0_0_24px_rgba(255,178,36,0.35)]">
                {lastKeyPressed || 'KEY'}
              </div>

              <div className="text-center sm:text-left text-xs font-mono space-y-1">
                <p className="font-bold text-foreground flex items-center justify-center sm:justify-start gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-signal-ok animate-pulse" />
                  Listener active — Press any key on your keyboard right now.
                </p>
                <p className="text-muted-foreground">
                  Try pressing <kbd className="px-2 py-0.5 rounded bg-background border border-border text-primary font-bold">O</kbd> for Automation Hub, <kbd className="px-2 py-0.5 rounded bg-background border border-border text-primary font-bold">L</kbd> for Cloud Systems, or <kbd className="px-2 py-0.5 rounded bg-background border border-border text-primary font-bold">H</kbd> for Overview.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Hotkeys Directory */}
        <Reveal>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xs font-mono uppercase tracking-[0.16em] text-muted-foreground flex items-center gap-2">
              <Zap className="size-3.5 text-primary" /> Key Matrix Directory
            </h2>
            <span className="text-[11px] font-mono text-muted-foreground">
              {portfolioData.hotkeys.length} Registered Commands
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-14">
            {portfolioData.hotkeys.map((item) => {
              const isPressed = lastKeyPressed === item.key.toUpperCase();
              return (
                <div
                  key={item.key}
                  onClick={() => handleAction(item)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between group cursor-pointer ${
                    isPressed
                      ? 'bg-primary/15 border-primary shadow-[0_0_20px_rgba(255,178,36,0.25)] scale-[1.01]'
                      : 'glass glass-lift border-border hover:border-primary/40'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-background border border-border font-mono font-bold text-primary flex items-center justify-center text-base shadow-sm group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                      {item.key}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-xs text-muted-foreground font-mono">
                        {item.action}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-muted-foreground/60 hidden sm:inline">
                      {item.path || 'Modal action'}
                    </span>
                    <div className="p-1.5 rounded-lg bg-background/60 group-hover:bg-primary group-hover:text-primary-foreground text-muted-foreground transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Architectural Explainer Card */}
        <Reveal>
          <div className="p-6 sm:p-8 rounded-3xl glass border border-border space-y-4">
            <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Architectural Blueprint: Executive Frontpage vs Specialized Subwebs</span>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              Per executive client specifications, the portfolio follows an uncluttered architecture: the frontpage maintains an authoritative executive summary (high-signal telemetry, top automation flows, cloud architecture summaries, and verified credentials), while deep technical evidence (the 9 Capstone automation systems with interactive flow canvas, and the comprehensive Azure cloud computing suite with 200+ media artifacts) resides in dedicated subwebs.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/automation')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium text-xs hover:bg-primary/90 transition-colors shadow-sm"
              >
                <span>Open Automation Hub (9 Systems)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => navigate('/cloud')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-foreground font-medium text-xs hover:border-primary/50 transition-colors"
              >
                <span>Open Cloud Systems Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background/50 border border-border text-muted-foreground font-mono text-xs hover:text-foreground transition-colors"
              >
                <span>Return to Overview</span>
              </button>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
};
