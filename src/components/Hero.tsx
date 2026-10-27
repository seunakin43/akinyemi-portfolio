import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, Cloud, Cpu, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/Magnetic";
import { Link } from "react-router-dom";
import { portfolioData } from "@/data/portfolioData";

export const Hero: React.FC = () => {
  const reduce = useReducedMotion();
  const rise = (i: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(24px)" },
    animate: { opacity: 1, transform: "translateY(0px)" },
    transition: { duration: 0.7, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20">
      
      {/* Ambient amber radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_60%_at_75%_0%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          
          {/* Left Column: Headline & Value Proposition */}
          <div>
            <motion.div
              {...rise(0)}
              className="inline-flex items-center gap-2.5 rounded-full border border-primary/40 bg-primary/10 py-1.5 pl-3 pr-4 text-primary"
            >
              <Sparkles className="size-4 text-primary" aria-hidden="true" />
              <span className="font-mono text-xs font-medium uppercase tracking-[0.16em]">
                Operations, Cloud, Data & AI Systems Specialist
              </span>
            </motion.div>

            <motion.h1
              {...rise(1)}
              className="mt-6 font-display text-[clamp(2.5rem,6vw,5.2rem)] leading-[0.98] tracking-tight text-balance"
            >
              Production systems engineered for scale, resilience & <em className="text-primary italic">zero downtime</em>.
            </motion.h1>

            <motion.p {...rise(2)} className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
              I am <strong>Toluwanimi Akinyemi</strong>—an Operations, Cloud, and Data Engineer bridging 24/7 telecommunications (789+ nodes), enterprise data analytics, Azure zero-trust cloud, and autonomous AI systems.
            </motion.p>

            <motion.div {...rise(3)} className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic>
                <Button asChild size="lg">
                  <a href="#hubs">
                    Explore Specialized Hubs <ArrowDown className="size-4" aria-hidden="true" />
                  </a>
                </Button>
              </Magnetic>

              <Magnetic>
                <Button asChild size="lg" variant="outline" className="glass border-white/10 bg-transparent text-foreground hover:border-primary/40">
                  <a href="#about">
                    Executive Summary
                  </a>
                </Button>
              </Magnetic>

              <Magnetic>
                <Button asChild size="lg" variant="outline" className="glass border-white/10 bg-transparent text-foreground hover:text-primary">
                  <a href="#contact">Get in touch</a>
                </Button>
              </Magnetic>
            </motion.div>

            {/* Proof Pills */}
            <motion.ul {...rise(4)} className="mt-9 flex flex-wrap gap-2.5" aria-label="Credentials & Highlights">
              <li className="glass rounded-full px-3.5 py-1.5 font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-foreground" />
                6 Years Combined Professional Trajectory
              </li>
              <li className="glass rounded-full px-3.5 py-1.5 font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-signal-ok" />
                789+ Nodes at 99.8% SLA Surveillance
              </li>
              <li className="glass rounded-full px-3.5 py-1.5 font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-primary" />
                ACTD Accredited · AI Automation
              </li>
              <li className="glass rounded-full px-3.5 py-1.5 font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-sky-400" />
                SDC Canada Verified (#2325689)
              </li>
              <li className="glass rounded-full px-3.5 py-1.5 font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-amber-400" />
                Tableau & Power BI (150k+ Records)
              </li>
              <li className="glass rounded-full px-3.5 py-1.5 font-mono text-xs text-muted-foreground">
                n8n · Make · Supabase · Azure · PostgreSQL
              </li>
            </motion.ul>
          </div>

          {/* Right Column: Headshot Portrait in Glass Container */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="glass overflow-hidden rounded-3xl p-2.5 shadow-2xl">
              <img
                src="/hh.jpg"
                alt="Portrait of Toluwanimi Akinyemi"
                width={1693}
                height={1929}
                className="aspect-[4/5] w-full rounded-2xl object-cover object-top filter brightness-95"
                fetchPriority="high"
              />
            </div>

            {/* Floating Live Badge */}
            <div className="glass absolute -bottom-4 left-4 flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs shadow-xl">
              <span className="size-2 rounded-full bg-signal-ok animate-pulse" aria-hidden="true" />
              <span>NOC Operator · Pan African Towers</span>
            </div>

            {/* Floating Top Badge */}
            <div className="glass absolute -top-3 right-3 flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-[11px] text-primary shadow-lg">
              <ShieldCheck className="size-3.5" />
              <span>ACTD ID: 34RVXFBKSU73N</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
