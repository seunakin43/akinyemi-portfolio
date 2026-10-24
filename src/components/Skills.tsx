import React from "react";
import { Bot, ChartColumn, Cloud, Database, Layers, Radar, type LucideIcon } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/content";
import { cn } from "@/lib/utils";

// Bento placement per group: AI & Automation and Cloud are featured tiles
const layout: Record<string, { icon: LucideIcon; span: string; featured?: boolean }> = {
  ai: { icon: Bot, span: "sm:col-span-2 lg:row-span-2", featured: true },
  systems: { icon: Cloud, span: "sm:col-span-2 lg:row-span-2", featured: true },
  network: { icon: Radar, span: "sm:col-span-2" },
  data: { icon: ChartColumn, span: "sm:col-span-2" },
  db: { icon: Database, span: "sm:col-span-2" },
  monitoring: { icon: Layers, span: "sm:col-span-2 lg:col-span-4" },
};

const fallback = { icon: Layers, span: "sm:col-span-2" };

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="border-t border-border/60 py-20 sm:py-28 relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        <Reveal>
          <p className="eyebrow">Core skills & capabilities</p>
          <h2 className="section-title mt-4 max-w-2xl">
            The automation toolkit, and <em className="text-primary italic">everything around it</em>.
          </h2>
        </Reveal>

        <Stagger gap={0.06} className="mt-12 grid auto-rows-auto gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((g) => {
            const cfg = layout[g.id] ?? fallback;
            const Icon = cfg.icon;
            return (
              <StaggerItem key={g.id} className={cfg.span}>
                <div
                  className={cn(
                    "glass glass-lift flex h-full flex-col justify-between rounded-3xl p-6 sm:p-7",
                    cfg.featured && "glass-featured sm:p-8"
                  )}
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-xl bg-white/[0.06] text-primary border border-white/5">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <h3 className={cn("font-display leading-tight", cfg.featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl")}>
                        {g.label}
                      </h3>
                    </div>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {g.items.map((item) => (
                        <li key={item}>
                          <Badge
                            variant="outline"
                            className={cn(
                              "border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs font-normal text-foreground",
                              cfg.featured && "border-primary/20 text-foreground"
                            )}
                          >
                            {item}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

      </div>
    </section>
  );
};
