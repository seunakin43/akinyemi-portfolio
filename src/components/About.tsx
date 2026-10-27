import React from "react";
import { ArrowUpRight, TowerControl, Cloud, Cpu, BarChart3, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Link } from "react-router-dom";

export const About: React.FC = () => {
  const pillars = [
    {
      title: "Telecom NOC Surveillance",
      badge: "Nov 2022 – Present",
      stat: "789+ Nodes · 99.8% SLA",
      detail: "24/7 mission-critical operations at Pan African Towers. Galooli RMS, AMF25 generators, and multi-tenant colocation (Airtel, MTN, 9mobile).",
      icon: TowerControl,
      path: "/telecom",
      color: "text-signal-ok"
    },
    {
      title: "Cloud & Perimeter Defense",
      badge: "SDC Canada #2325689",
      stat: "540-Hour Diploma",
      detail: "Zero-Trust architecture on Microsoft Azure. Azure Bastion zero-public-IP topologies, Entra ID PIM JIT elevation, and custom RBAC schemas.",
      icon: Cloud,
      path: "/cloud",
      color: "text-sky-400"
    },
    {
      title: "AI Workflow Automation",
      badge: "ACTD Accredited",
      stat: "Production Agents & HITL",
      detail: "n8n and Make.com pipelines integrated with OpenRouter LLMs, Supabase PostgreSQL RLS, and human-in-the-loop financial governance (ExpenseIQ).",
      icon: Cpu,
      path: "/automation",
      color: "text-primary"
    },
    {
      title: "Enterprise Data Analytics",
      badge: "Tableau & Power BI",
      stat: "100k+ Records Modeled",
      detail: "Tableau Washington EV fleet analytics (.twb), Power BI BTC-USD time-series forecasting, and 100,000+ voter civic data governance.",
      icon: BarChart3,
      path: "/analytics",
      color: "text-amber-400"
    }
  ];

  return (
    <section id="about" className="border-t border-border/60 py-20 sm:py-28 relative bg-secondary/[0.15]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 items-start">
          <Reveal>
            <p className="eyebrow text-primary">Executive Professional Summary</p>
            <h2 className="section-title mt-3">
              Six years of mission-critical reliability, mathematical discipline, and <em className="text-primary italic">autonomous systems</em>.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p className="text-lg sm:text-xl text-foreground font-normal">
                I am an Operations, Cloud, and Data Engineer bridging mission-critical infrastructure, enterprise analytics, and autonomous systems.
              </p>
              <p>
                In 24/7 telecommunications NOC operations at Pan African Towers, sustaining 99.8% SLA across 789+ cell sites taught me that resilience must be built in from day one. That operational discipline now defines how I architect cloud environments and autonomous AI workflows.
              </p>
              <p>
                I build deterministic production pipelines in n8n and Make.com backed by PostgreSQL Row-Level Security, air-gapped human-in-the-loop (HITL) approval gates, and Microsoft Azure zero-trust topologies—engineered for auditable, zero-drop accuracy.
              </p>
            </div>
          </Reveal>
        </div>

        {/* 4 Pillars Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={0.15 + idx * 0.05}>
                <Link
                  to={p.path}
                  className="glass glass-lift p-6 rounded-3xl flex flex-col justify-between h-full border-border/80 hover:border-primary/50 group transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="p-2.5 rounded-xl bg-background border border-border group-hover:border-primary/40 transition-colors">
                        <Icon className={`size-5 ${p.color}`} />
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full glass border border-white/10 text-muted-foreground">
                        {p.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <span className="font-mono text-xs text-primary font-semibold block mt-0.5">
                        {p.stat}
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {p.detail}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-border/40 flex items-center justify-between text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                    <span>Inspect Hub</span>
                    <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};