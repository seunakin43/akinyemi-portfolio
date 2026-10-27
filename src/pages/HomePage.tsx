import React from "react";
import { Ambient } from "@/components/Ambient";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HubsGateway } from "@/components/HubsGateway";
import { Numbers } from "@/components/Numbers";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Credentials } from "@/components/Credentials";
import { Contact } from "@/components/Contact";

interface HomePageProps {
  onOpenTerminal?: () => void;
  onOpenHotkeyModal?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenTerminal, onOpenHotkeyModal }) => {
  return (
    <div className="relative isolate overflow-x-clip bg-background text-foreground">
      <Ambient />
      <main id="main" tabIndex={-1} className="outline-none">
        
        {/* 1. Hero Section (Profile Summary & Executive Headshot) */}
        <Hero />

        {/* 2. Professional Executive About (Elevated immediately after Hero) */}
        <About />

        {/* 3. Standalone Technical Hubs Gateway (3 Specialized Portfolios) */}
        <HubsGateway />

        {/* 4. Live 789+ Node Telemetry & Operational Numbers */}
        <Numbers />

        {/* 5. Comprehensive Competency Matrix */}
        <Skills />

        {/* 6. Professional Experience Timeline */}
        <Experience />

        {/* 7. Qualifications, SDC Canada Diploma & PGD NAMP Academic Research */}
        <Credentials />

        {/* 8. Direct Gmail Contact Form with Live Status */}
        <Contact />

      </main>
    </div>
  );
};