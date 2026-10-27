import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck, FileDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/Magnetic";

export const Hero: React.FC = () => {
  const reduce = useReducedMotion();
  const rise = (i: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(24px)" },
    animate: { opacity: 1, transform: "translateY(0px)" },
    transition: { duration: 0.7, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16">
      
      {/* Ambient amber radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_60%_at_75%_0%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 space-y-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          
          {/* Left Column: Clean, Human, Less-Text-Heavy Headline & Intro */}
          <div className="space-y-6">
            <motion.div
              {...rise(0)}
              className="inline-flex items-center gap-2.5 rounded-full border border-primary/40 bg-primary/10 py-1.5 pl-3.5 pr-4 text-primary"
            >
              <span className="size-2 rounded-full bg-primary" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em]">
                AI automation · Operations · Analytics
              </span>
            </motion.div>

            <motion.h1
              {...rise(1)}
              className="font-display text-[clamp(2.6rem,5.5vw,4.8rem)] leading-[1.02] tracking-tight text-balance text-foreground"
            >
              I make everyday work <em className="text-primary italic font-normal">work better.</em>
            </motion.h1>

            <motion.p {...rise(2)} className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              I build practical AI workflows that help teams handle routine tasks faster, keep better records and bring people into important decisions. My experience comes from telecom operations, data analysis and cloud systems.
            </motion.p>

            <motion.div {...rise(3)} className="flex flex-wrap items-center gap-3 pt-2">
              <Magnetic>
                <Button asChild size="lg" className="bg-primary text-primary-foreground font-mono text-xs font-semibold shadow-lg">
                  <a href="#work" className="inline-flex items-center gap-2">
                    See featured work <ArrowDown className="size-4" />
                  </a>
                </Button>
              </Magnetic>

              <Magnetic>
                <Button asChild size="lg" variant="outline" className="glass border-white/10 bg-transparent text-foreground hover:border-primary/40 font-mono text-xs">
                  <a href="/Toluwanimi_Akinyemi_CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <FileDown className="size-4 text-primary" />
                    <span>View résumé</span>
                    <ArrowUpRight className="size-3.5 text-muted-foreground" />
                  </a>
                </Button>
              </Magnetic>

              <Magnetic>
                <Button asChild size="lg" variant="outline" className="glass border-white/10 bg-transparent text-foreground hover:text-primary font-mono text-xs">
                  <a href="#contact">Get in touch</a>
                </Button>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right Column: Visual Interactive Workflow Card (A Simpler Expense Review) */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Subtle glow behind card */}
            <div className="absolute -inset-2 bg-primary/10 rounded-3xl blur-xl" />

            <div className="relative glass rounded-3xl p-6 sm:p-7 border border-border/80 shadow-2xl space-y-4">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-border/60">
                <div className="flex items-center gap-2.5">
                  <div className="size-8 rounded-full bg-primary/20 text-primary font-serif font-bold text-sm grid place-items-center border border-primary/30">
                    TA
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">A simpler expense review</h3>
                    <p className="text-[11px] font-mono text-muted-foreground">Example workflow</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono bg-signal-ok/10 text-signal-ok border border-signal-ok/30">
                  <span className="size-1.5 rounded-full bg-signal-ok animate-pulse" />
                  Live System
                </span>
              </div>

              <p className="text-xs text-muted-foreground">
                A receipt comes in. The system does the first checks.
              </p>

              {/* 3 Clear Steps */}
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-background/80 border border-border flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="size-7 rounded-lg bg-primary/10 text-primary font-mono text-xs font-bold grid place-items-center shrink-0">
                      01
                    </span>
                    <div>
                      <strong className="block text-xs text-foreground font-semibold">Read the receipt</strong>
                      <span className="block text-[11px] text-muted-foreground">Capture amount, date and details</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    Done
                  </span>
                </div>

                <div className="h-2 w-px border-l border-dashed border-primary/40 ml-6" />

                <div className="p-3 rounded-xl bg-background/80 border border-border flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="size-7 rounded-lg bg-primary/10 text-primary font-mono text-xs font-bold grid place-items-center shrink-0">
                      02
                    </span>
                    <div>
                      <strong className="block text-xs text-foreground font-semibold">Check the claim</strong>
                      <span className="block text-[11px] text-muted-foreground">Flag missing or unusual information</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-signal-ok/10 text-signal-ok border border-signal-ok/30">
                    Checked
                  </span>
                </div>

                <div className="h-2 w-px border-l border-dashed border-primary/40 ml-6" />

                <div className="p-3 rounded-xl bg-background/80 border border-primary/40 bg-primary/[0.03] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="size-7 rounded-lg bg-primary text-primary-foreground font-mono text-xs font-bold grid place-items-center shrink-0">
                      03
                    </span>
                    <div>
                      <strong className="block text-xs text-foreground font-semibold">Ask a manager</strong>
                      <span className="block text-[11px] text-primary/90 font-mono">A person approves higher-risk claims</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/40 font-semibold">
                    Review
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-signal-ok" />
                  People stay in control of approvals
                </span>
                <span className="text-primary font-semibold">ExpenseIQ</span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Clean Proof Bar (4 Concise Highlights) */}
        <motion.div
          {...rise(4)}
          className="glass rounded-2xl p-5 sm:p-6 border border-border/80"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-1">
              <strong className="font-display text-3xl sm:text-4xl text-primary font-bold block">6 years</strong>
              <span className="text-xs text-muted-foreground font-mono block">Across operations and analysis</span>
            </div>

            <div className="space-y-1 lg:border-l lg:border-border/60 lg:pl-6">
              <strong className="font-display text-3xl sm:text-4xl text-signal-ok font-bold block">789+</strong>
              <span className="text-xs text-muted-foreground font-mono block">Tower sites monitored</span>
            </div>

            <div className="space-y-1 lg:border-l lg:border-border/60 lg:pl-6">
              <strong className="font-display text-3xl sm:text-4xl text-foreground font-bold block">99.8%</strong>
              <span className="text-xs text-muted-foreground font-mono block">Reported service level achievement</span>
            </div>

            <div className="space-y-1 lg:border-l lg:border-border/60 lg:pl-6">
              <strong className="font-display text-3xl sm:text-4xl text-amber-400 font-bold block">100k+</strong>
              <span className="text-xs text-muted-foreground font-mono block">Civic records analyzed</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
