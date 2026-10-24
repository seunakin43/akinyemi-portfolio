import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/content";
import { cn } from "@/lib/utils";

export const Experience: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 65%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="experience" className="border-t border-border/60 py-20 sm:py-28 relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        <Reveal>
          <p className="eyebrow">Professional trajectory</p>
          <h2 className="section-title mt-4 max-w-2xl">
            The operations experience behind <em className="text-primary italic">every build</em>.
          </h2>
        </Reveal>

        <div ref={trackRef} className="relative mt-14">
          <span aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-border" />
          <motion.span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-px origin-top bg-primary"
            style={{ scaleY: reduce ? 1 : scaleY }}
          />

          <ol className="space-y-12 pl-8 sm:pl-12">
            {experience.map((job, i) => (
              <Reveal as="li" key={job.org} delay={0.04} className="relative">
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -left-[37px] top-2 size-3 rounded-full border-2 border-background sm:-left-[53px] sm:top-2",
                    job.current
                      ? "bg-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_25%,transparent)]"
                      : "bg-muted-foreground/60"
                  )}
                />
                <div className="grid gap-4 lg:grid-cols-[14rem_1fr] lg:gap-10">
                  <div>
                    <p className="font-mono text-sm text-muted-foreground">{job.period}</p>
                    {job.current && (
                      <Badge className="mt-2 bg-primary/15 font-mono text-[11px] uppercase tracking-wider text-primary border-primary/30 hover:bg-primary/15">
                        Current role
                      </Badge>
                    )}
                  </div>

                  <div className={cn("glass glass-lift rounded-3xl p-6 sm:p-8", i === 0 && "glass-featured")}>
                    <h3 className="font-display text-2xl leading-tight sm:text-3xl text-foreground">
                      {job.role}
                    </h3>
                    <p className="mt-1 font-mono text-xs sm:text-sm text-muted-foreground">
                      {job.org} · {job.place}
                    </p>
                    <ul className="mt-5 space-y-3 text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-foreground/90">
                          <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
};
