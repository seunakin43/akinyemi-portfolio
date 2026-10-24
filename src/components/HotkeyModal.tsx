import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Keyboard, X, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

interface HotkeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal?: () => void;
}

export const HotkeyModal: React.FC<HotkeyModalProps> = ({ isOpen, onClose, onOpenTerminal }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleAction = (hotkey: typeof portfolioData.hotkeys[0]) => {
    onClose();
    if (hotkey.key === 'T' && onOpenTerminal) {
      onOpenTerminal();
    } else if (hotkey.path) {
      if (hotkey.path.startsWith('/#')) {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(hotkey.path.replace('/#', ''));
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        navigate(hotkey.path);
      }
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-card border border-border rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh]"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 bg-background/60 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/10 text-primary border border-primary/25">
                <Keyboard className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground flex items-center gap-2">
                  <span>Fast Navigation & Hotkeys</span>
                  <span className="text-[10px] font-mono bg-signal-ok/15 text-signal-ok px-2 py-0.5 rounded border border-signal-ok/30">
                    Live
                  </span>
                </h3>
                <p className="text-xs text-muted-foreground font-mono">
                  Press any registered key or click below to jump directly to deep subpages.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-background/50 hover:bg-background border border-border text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
            
            <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/25 text-xs text-foreground/90 leading-relaxed flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <strong>Executive Navigation Architecture:</strong> Rather than crowding every metric and schema onto one busy page, the frontpage delivers an executive overview, while dedicated subwebs house deep technical telemetry (Automation Hub & Cloud Systems).
              </div>
            </div>

            {/* Hotkeys Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {portfolioData.hotkeys.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleAction(item)}
                  className="p-3 rounded-xl bg-background/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center justify-between group cursor-pointer text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-card border border-border font-mono font-bold text-primary flex items-center justify-center text-sm shadow group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                      {item.key}
                    </span>
                    <div>
                      <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors block">
                        {item.label}
                      </span>
                      <span className="text-[11px] text-muted-foreground font-mono">
                        {item.action}
                      </span>
                    </div>
                  </div>

                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>

          </div>

          {/* Footer */}
          <div className="p-4 bg-background/70 border-t border-border flex items-center justify-between text-xs text-muted-foreground font-mono">
            <span>Press Esc or click outside to close</span>
            <button
              onClick={() => {
                onClose();
                navigate('/hotkeys');
              }}
              className="text-primary hover:text-primary/80 flex items-center gap-1 font-semibold transition-colors"
            >
              <span>View Full Hotkey Guide</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
