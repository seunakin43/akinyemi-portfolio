import React from "react";
import { NodeGrid } from "@/components/NodeGrid";
import { CountUp } from "@/components/CountUp";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
}

const stats: StatItem[] = [
  { id: "nodes", value: 789, suffix: "+", label: "Network nodes monitored in real time across Nigeria" },
  { id: "sla", value: 99.8, suffix: "%", decimals: 1, label: "SLA compliance sustained nationwide" },
  { id: "mttr", value: 30, suffix: "%", prefix: "−", label: "Mean time to repair, via RCA templates" },
  { id: "efficiency", value: 40, suffix: "%", prefix: "+", label: "Operational efficiency from fault workflows" },
  { id: "throughput", value: 25, suffix: "%", prefix: "+", label: "Network throughput, with engineering teams" },
  { id: "voters", value: 100000, suffix: "+", label: "Voter records modeled in Power BI & SQL" },
];

const byId = (id: string) => stats.find((s) => s.id === id);

function StatTile({
  stat,
  className,
  featured,
  children,
}: {
  stat: StatItem;
  className?: string;
  featured?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <StaggerItem className={className}>
      <div
        className={cn(
          "glass glass-lift flex h-full flex-col justify-between rounded-2xl p-6 sm:p-7",
          featured && "glass-featured"
        )}
      >
        <p
          className={cn(
            "font-display leading-none tracking-tight",
            featured ? "text-7xl text-primary sm:text-8xl" : "text-5xl sm:text-6xl"
          )}
        >
          <CountUp value={stat.value} decimals={stat.decimals} prefix={stat.prefix} suffix={stat.suffix} />
        </p>
        <div className="mt-6">
          {children}
          <p className="text-sm leading-snug text-muted-foreground">{stat.label}</p>
        </div>
      </div>
    </StaggerItem>
  );
}

/** Bento grid: 789-node live interactive map beside the headline operational telemetry. */
export const Numbers: React.FC = () => {
  const sla = byId("sla");
  const nodes = byId("nodes");
  const mttr = byId("mttr");
  const efficiency = byId("efficiency");
  const throughput = byId("throughput");
  const voters = byId("voters");

  return (
    <section id="numbers" aria-label="Key telemetry numbers" className="border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        <Reveal className="mb-10 max-w-2xl">
          <p className="eyebrow">Why my automations & cloud hold up</p>
          <h2 className="section-title mt-4">
            Built on six years of keeping <em className="text-primary italic">critical systems up</em>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Every metric below is backed by real-time operations across 789+ nodes, standardized root-cause templates, and strict zero-trust parameters.
          </p>
        </Reveal>

        <Stagger
          as="div"
          gap={0.06}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2"
        >
          {/* Main 789-node interactive simulator tile */}
          <StaggerItem className="sm:col-span-2 lg:col-span-7 lg:row-span-2">
            <div className="glass glass-lift flex h-full flex-col justify-between rounded-3xl p-6 sm:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-primary">Live Node Telemetry Simulation</span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-signal-ok">
                    <span className="size-2 rounded-full bg-signal-ok animate-pulse" aria-hidden="true" />
                    99.8% Availability Target
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-foreground mt-2">
                  789+ Monitored Nodes Across Nigeria
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-xl">
                  Simulating nationwide tower grid state. Faults are immediately detected, isolated via automated RCA templates, and restored within SLA bounds.
                </p>
              </div>

              <div className="my-6">
                <NodeGrid />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/5 font-mono text-xs text-muted-foreground">
                <span>Surveillance Platform: OWS & Galooli RMS</span>
                <span className="text-primary">Pan African Towers NOC Operations</span>
              </div>
            </div>
          </StaggerItem>

          {/* SLA tile */}
          {sla && <StatTile stat={sla} featured className="lg:col-span-5" />}

          {/* MTTR tile */}
          {mttr && <StatTile stat={mttr} className="lg:col-span-5" />}

        </Stagger>

        {/* Secondary Stat Row */}
        <Stagger as="div" gap={0.06} className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {efficiency && <StatTile stat={efficiency} />}
          {throughput && <StatTile stat={throughput} />}
          {voters && <StatTile stat={voters} />}
        </Stagger>

      </div>
    </section>
  );
};
