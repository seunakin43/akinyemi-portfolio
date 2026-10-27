import React from "react";
import { ArrowUpRight, TowerControl, Cloud, Cpu, BarChart3, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Link } from "react-router-dom";

export const About: React.FC = () => {
  return (
    <section id="about" className="border-t border-border/60 py-16 sm:py-20 relative bg-secondary/[0.08]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 items-start">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-[0.14em]">
              <span className="size-1.5 rounded-full bg-primary" />
              <span>Background & Philosophy</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground tracking-tight mt-2">
              Experience shaped by <em className="text-primary italic font-normal">high-stakes operations.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p className="text-foreground text-base sm:text-lg">
                In 24/7 telecommunications NOC operations at Pan African Towers (Nov 2022 – Present), I learned early that reliability cannot be an afterthought. Sustaining 99.8% SLA across 789+ cell sites taught me how to triage alarms, isolate root causes, and keep critical infrastructure online.
              </p>
              <p>
                I bring that exact operational discipline to AI workflow automation and data analysis. Rather than building fragile bots that break silently, I engineer dependable systems where software handles the repetitive checks, and humans stay firmly in control of key approvals.
              </p>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
