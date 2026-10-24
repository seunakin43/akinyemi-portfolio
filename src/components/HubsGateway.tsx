import React from "react";
import { Cpu, Cloud, TowerControl, BarChart3, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";

export const HubsGateway: React.FC = () => {
  const hubs = [
    {
      id: "automation",
      title: "AI Workflow Automation",
      subtitle: "Autonomous Agents & ExpenseIQ Governance",
      badge: "ACTD Accredited · n8n & Make",
      description: "Full-stack AI automation architectures: n8n multi-agent reasoning, Make.com transactional pipelines, Supabase PostgreSQL with RLS, and human-in-the-loop manager approval gates.",
      metrics: ["ExpenseIQ 38-Page Capstone", "Sub-₦12,000 Auto-Approval", "0-Drop Ledger Auditing"],
      link: "/automation",
      linkText: "Launch Automation Hub",
      icon: Cpu,
      accent: "text-primary border-primary/30 bg-primary/10",
      buttonClass: "border-primary/40 text-primary hover:bg-primary/10"
    },
    {
      id: "cloud",
      title: "Cloud Infrastructure & Security",
      subtitle: "Azure Zero-Trust & Perimeter Defense",
      badge: "SDC Canada #2325689 · 540 Hours",
      description: "Zero-public-IP topologies via Azure Bastion, Zero Standing Privilege (ZSP) with Microsoft Entra ID PIM, custom least-privilege RBAC schemas, and hardened multi-subnet virtual networks.",
      metrics: ["SDC Canada Cloud Diploma (PDF)", "Azure Capstone Presentation (PDF)", "PIM Just-In-Time Elevation"],
      link: "/cloud",
      linkText: "Launch Cloud Hub",
      icon: Cloud,
      accent: "text-sky-400 border-sky-500/30 bg-sky-500/10",
      buttonClass: "border-sky-500/40 text-sky-400 hover:bg-sky-500/10"
    },
    {
      id: "telecom",
      title: "Telecommunications NOC Operations",
      subtitle: "789+ Live Tower Nodes Surveillance",
      badge: "Nov 2022 – Present · 99.8% SLA",
      description: "Mission-critical surveillance at Pan African Towers. Galooli RMS, Operations Work Station (OWS) alarm correlation, AMF25 generator autonomy, 1,999L reserve tracking, and multi-tenant colocation.",
      metrics: ["789+ Real-Time Monitored Nodes", "−30% MTTR via RCA Framework", "Airtel / MTN / 9mobile Colocation"],
      link: "/telecom",
      linkText: "Launch Telecom Hub",
      icon: TowerControl,
      accent: "text-signal-ok border-signal-ok/30 bg-signal-ok/10",
      buttonClass: "border-signal-ok/40 text-signal-ok hover:bg-signal-ok/10"
    },
    {
      id: "analytics",
      title: "Data Analytics & BI",
      subtitle: "Tableau, Power BI, SQL & Predictive Modeling",
      badge: "Tableau · Power BI · 100k+ Records",
      description: "Executive dashboards and predictive modeling: Washington State EV adoption in Tableau (.twb), Power BI BTC-USD time-series forecast, Global Data Survey (.pbix), and 100k+ civic voter governance.",
      metrics: ["Tableau Workbook (.twb)", "Power BI Files (.pbix)", "+18% Data Accuracy Gain"],
      link: "/analytics",
      linkText: "Launch Analytics Hub",
      icon: BarChart3,
      accent: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      buttonClass: "border-amber-500/40 text-amber-400 hover:bg-amber-500/10"
    }
  ];

  return (
    <section id="hubs" className="py-20 sm:py-28 border-t border-border/60 relative scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <Reveal>
            <p className="eyebrow text-primary">Standalone Technical Portfolios</p>
            <h2 className="section-title mt-2">
              Four specialized hubs. <em className="text-primary italic">Zero cross-domain noise</em>.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-3">
              Each hub operates as an independent, standalone portfolio containing specific profiles, domain-tailored technical evidence, architecture diagrams, and credential verifications. Share each hub directly with specialized recruiters.
            </p>
          </Reveal>
        </div>

        {/* 4-Card Bento Gateway */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {hubs.map((hub, idx) => {
            const Icon = hub.icon;

            return (
              <Reveal key={hub.id} delay={idx * 0.08}>
                <div className="glass glass-lift rounded-3xl p-6 flex flex-col justify-between h-full border-border/80 hover:border-primary/50 transition-all relative overflow-hidden group">
                  
                  <div className="space-y-4">
                    {/* Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${hub.accent}`}>
                        <Icon className="size-3" />
                        {hub.badge}
                      </span>
                      <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    {/* Titles */}
                    <div>
                      <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                        {hub.title}
                      </h3>
                      <p className="font-mono text-xs text-muted-foreground mt-1">
                        {hub.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {hub.description}
                    </p>

                    {/* Highlight Metrics */}
                    <div className="space-y-1 pt-1 border-t border-border/40">
                      {hub.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                          <CheckCircle2 className="size-3 text-primary shrink-0" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-5 mt-5 border-t border-border/40">
                    <Link
                      to={hub.link}
                      className={`w-full py-2 px-3 rounded-xl text-xs font-mono font-semibold glass border flex items-center justify-center gap-1.5 transition-all ${hub.buttonClass}`}
                    >
                      <span>{hub.linkText}</span>
                      <ArrowUpRight className="size-3" />
                    </Link>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};