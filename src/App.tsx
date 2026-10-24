import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { ScrollProgress } from './components/ScrollProgress';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { HotkeyModal } from './components/HotkeyModal';
import { HomePage } from './pages/HomePage';
import { CapstonePage } from './pages/CapstonePage';
import { CloudPage } from './pages/CloudPage';
import { TelecomPage } from './pages/TelecomPage';
import { DataAnalyticsPage } from './pages/DataAnalyticsPage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { CredentialsPage } from './pages/CredentialsPage';
import { HotkeysPage } from './pages/HotkeysPage';
import { useHotkeys } from './hooks/useHotkeys';
import { Terminal, Keyboard } from 'lucide-react';

function AppContent() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [hotkeyModalOpen, setHotkeyModalOpen] = useState(false);

  // Activate global hotkey listener
  useHotkeys({
    onOpenTerminal: () => setTerminalOpen(true),
    onOpenHotkeyModal: () => setHotkeyModalOpen(true)
  });

  const defaultHub = (import.meta.env.VITE_DEFAULT_HUB || '').toLowerCase().trim();

  const getRootElement = () => {
    switch (defaultHub) {
      case 'automation':
      case 'capstone':
        return <CapstonePage />;
      case 'analytics':
      case 'data':
        return <DataAnalyticsPage />;
      case 'cloud':
        return <CloudPage />;
      case 'telecom':
      case 'noc':
        return <TelecomPage />;
      default:
        return (
          <HomePage
            onOpenTerminal={() => setTerminalOpen(true)}
            onOpenHotkeyModal={() => setHotkeyModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sticky Header */}
      <Nav onOpenHotkeyModal={() => setHotkeyModalOpen(true)} />

      {/* Main Routed Content */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={getRootElement()}
          />
          {/* Automation Subweb Hub */}
          <Route path="/automation" element={<CapstonePage />} />
          <Route path="/capstone" element={<CapstonePage />} />
          <Route path="/projects" element={<CapstonePage />} />

          {/* Cloud Computing Subweb Hub */}
          <Route path="/cloud" element={<CloudPage />} />

          {/* Telecom Ops Subweb Hub */}
          <Route path="/telecom" element={<TelecomPage />} />
          <Route path="/noc" element={<TelecomPage />} />

          {/* Data Analytics & BI Subweb Hub */}
          <Route path="/analytics" element={<DataAnalyticsPage />} />
          <Route path="/data" element={<DataAnalyticsPage />} />

          {/* Deep-dive subpages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/credentials" element={<CredentialsPage />} />
          <Route
            path="/hotkeys"
            element={<HotkeysPage onOpenTerminal={() => setTerminalOpen(true)} />}
          />
        </Routes>
      </main>

      {/* Interactive CLI Terminal Modal */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Hotkeys Explanation Modal */}
      <HotkeyModal
        isOpen={hotkeyModalOpen}
        onClose={() => setHotkeyModalOpen(false)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Floating Action Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        
        {/* Hotkeys Guide Pill */}
        <button
          onClick={() => setHotkeyModalOpen(true)}
          className="p-3 rounded-full glass border border-white/10 text-primary shadow-xl shadow-black/40 hover:border-primary/60 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 group cursor-pointer backdrop-blur-md"
          title="Keyboard Hotkeys [?]"
          aria-label="Open Hotkeys Guide"
        >
          <Keyboard className="size-4" />
          <span className="hidden md:inline font-mono text-[11px] font-semibold text-muted-foreground pr-1 group-hover:text-foreground">
            Hotkeys [?]
          </span>
        </button>

        {/* CLI Terminal Launcher Pill */}
        <button
          onClick={() => setTerminalOpen(true)}
          className="p-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-xl shadow-primary/20 hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group cursor-pointer"
          title="Open Interactive Telemetry Terminal [T]"
          aria-label="Open CLI Terminal"
        >
          <Terminal className="size-4" />
          <span className="hidden md:inline font-mono text-xs pr-1">CLI [T]</span>
        </button>

      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
