import React from "react";
import { Cpu, Cloud, TowerControl, BarChart3, ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";

export const HubsGateway: React.FC = () => {
  return (
    <section id="work" className="py-16 sm:py-24 border-t border-border/60 relative scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-[0.14em]">
              <span className="size-1.5 rounded-full bg-primary" />
              <span>Selected work</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-foreground tracking-tight mt-2 max-w-xl">
              Useful systems, built around <em className="text-primary italic font-normal">real work.</em>
            </h2>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed">
              Three areas shape my work. AI automation is the main focus, supported by hands-on telecom operations and data analysis.
            </p>
          </Reveal>
        </div>

        {/* 3-Column Focus Work Grid (50% / 30% / 20%) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.85fr_0.85fr] gap-5 items-stretch">
          
          {/* Card 1: 50% Main Focus - AI Automation */}
          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-7 sm:p-8 flex flex-col justify-between h-full border-primary/40 bg-primary/[0.04] relative overflow-hidden group shadow-xl">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border border-primary/40 bg-primary/10 text-primary font-semibold">
                  <span className="font-bold">50%</span> Main focus
                </span>

                <h3 className="font-display text-2xl sm:text-3xl text-foreground font-semibold group-hover:text-primary transition-colors">
                  AI automation
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                  ExpenseIQ helps a business capture receipts, check claims and route decisions to a manager. The workflow handles routine checks while people keep control of approvals.
                </p>

                {/* Workflow Diagram */}
                <div className="p-3.5 rounded-2xl bg-background/80 border border-border flex items-center gap-2 text-xs font-mono my-3">
                  <span className="px-2.5 py-1.5 rounded-lg bg-secondary text-foreground text-[11px] font-semibold">
                    Receipt
                  </span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="px-2.5 py-1.5 rounded-lg bg-secondary text-foreground text-[11px] font-semibold">
                    Checks
                  </span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="px-2.5 py-1.5 rounded-lg bg-primary/20 text-primary border border-primary/30 text-[11px] font-bold">
                    Manager
                  </span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-border/40 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">Featured project · ExpenseIQ</span>
                <Link
                  to="/automation"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <span>Explore AI automation</span>
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Card 2: 30% Operations Experience - Telecom Operations */}
          <Reveal delay={0.15}>
            <div className="glass glass-lift rounded-3xl p-6 sm:p-7 flex flex-col justify-between h-full border-border/80 hover:border-signal-ok/40 transition-all group">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border border-signal-ok/30 bg-signal-ok/10 text-signal-ok font-semibold">
                  <span className="font-bold">30%</span> Operations experience
                </span>

                <h3 className="font-display text-2xl text-foreground font-semibold group-hover:text-signal-ok transition-colors">
                  Telecom operations
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Monitoring tower sites, responding to faults and helping teams restore service across Nigeria at Pan African Towers.
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-border/40 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">789+ sites · 99.8% SLA</span>
                <Link
                  to="/telecom"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-signal-ok hover:underline"
                >
                  <span>See telecom</span>
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Card 3: 20% Data & Insight - Data Analytics */}
          <Reveal delay={0.2}>
            <div className="glass glass-lift rounded-3xl p-6 sm:p-7 flex flex-col justify-between h-full border-border/80 hover:border-amber-400/40 transition-all group">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border border-amber-500/30 bg-amber-500/10 text-amber-400 font-semibold">
                  <span className="font-bold">20%</span> Data &amp; insight
                </span>

                <h3 className="font-display text-2xl text-foreground font-semibold group-hover:text-amber-400 transition-colors">
                  Data analytics
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Turning large datasets into clear dashboards, checks and findings that support decisions in Tableau, Power BI and SQL.
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-border/40 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">150k+ EV · 100k+ voters</span>
                <Link
                  to="/analytics"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-400 hover:underline"
                >
                  <span>See analytics</span>
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Supporting Capability: Cloud & Security */}
        <Reveal delay={0.25}>
          <div className="glass rounded-2xl p-6 sm:p-7 border border-sky-500/30 bg-sky-500/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-semibold">
                <Cloud className="size-4" />
                <span>Cloud security supports the work</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Experience with Azure, secure access, Bastion gateways and PIM permissions sits alongside the three main areas.
              </p>
            </div>

            <Link
              to="/cloud"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-sky-500/10 border border-sky-500/40 text-sky-400 hover:bg-sky-500/20 transition-all shrink-0"
            >
              <span>Supporting capability · Cloud &amp; security</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
