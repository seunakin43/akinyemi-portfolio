import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TowerControl, 
  Radio, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Clock, 
  FileText, 
  Maximize2, 
  X, 
  CheckCircle2, 
  Share2, 
  Check, 
  Mail,
  ArrowDown,
  ArrowRight
} from "lucide-react";
import { HubBackLink } from "@/components/HubBackLink";
import { NodeGrid } from "@/components/NodeGrid";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/content";

export const TelecomPage: React.FC = () => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<{
    title: string;
    image: string;
    siteId: string;
    description: string;
  } | null>(null);

  const [copiedLink, setCopiedLink] = useState(false);

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const telecomProjects = [
    {
      id: "pat-telemetry-colocation",
      title: "Generators and batteries",
      category: "Power systems",
      siteId: "Node #789-RIV (Rivers State)",
      image: "/analytics/pat_rms_telemetry_live.png",
      description: "Monitor generator status, engine run hours (6,610 hrs) and battery voltage (53.5V) to help identify issues affecting a tower site."
    },
    {
      id: "pat-borno-generator-autonomy",
      title: "Track site readiness",
      category: "Fuel reserve",
      siteId: "Node #789-BOR (Borno Regional Hub)",
      image: "/analytics/borno_hub_generator_telemetry.png",
      description: "Review fuel readings (1,999L reserve) and operating conditions to help teams plan maintenance and prevent avoidable interruptions."
    },
    {
      id: "pat-airtel-hub-colocation",
      title: "Support several mobile operators",
      category: "Shared infrastructure",
      siteId: "Node #789-ANB (Anambra Hub)",
      image: "/analytics/airtel_hub_colocation_analytics.png",
      description: "Monitor power allocation at shared tower sites hosting Airtel, MTN and 9mobile transmission equipment."
    }
  ];

  return (
    <div className="py-12 sm:py-20 bg-background min-h-screen text-foreground relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-primary/10 blur-[140px] rounded-full" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16 relative z-10">
        
        {/* Navigation Bar Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-6">
          <HubBackLink />

          <div className="flex items-center gap-2.5">
            <button
              onClick={copyShareLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono glass border-white/10 hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all cursor-pointer"
            >
              {copiedLink ? <Check className="size-3.5 text-signal-ok" /> : <Share2 className="size-3.5" />}
              <span>{copiedLink ? "Link Copied!" : "Share Telecom Portfolio"}</span>
            </button>

            <a
              href={`mailto:${profile.email}?subject=Inquiry:%20Telecommunications%20NOC%20Operations`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
            >
              <Mail className="size-3.5" />
              <span>Contact Operator</span>
            </a>
          </div>
        </div>

        {/* Subhero Section: Human, Clear, Not Text Heavy */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-signal-ok/40 bg-signal-ok/10 text-signal-ok text-xs font-mono uppercase tracking-[0.14em]">
              <span className="size-1.5 rounded-full bg-signal-ok" />
              <span>Telecommunications · Operations experience</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl text-foreground font-normal tracking-tight leading-[1.05]">
              Help catch network faults early and <em className="text-primary italic font-normal">get service restored.</em>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              As a Network Operations Centre operator, I monitor mobile tower sites, respond to alerts and coordinate with engineering teams when service is at risk. The work supports reliable mobile coverage across Nigeria.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-mono text-xs font-semibold shadow-md">
                <a href="#experience" className="inline-flex items-center gap-2">
                  See the work <ArrowDown className="size-4" />
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="glass border-white/10 bg-transparent text-foreground hover:border-primary/40 font-mono text-xs">
                <a href={`mailto:${profile.email}?subject=Inquiry:%20Telecom%20Operations`} className="inline-flex items-center gap-1.5">
                  Contact me ↗
                </a>
              </Button>
            </div>
          </div>

          {/* Visual Step Box: From Alert to Response */}
          <div className="glass rounded-3xl p-6 sm:p-7 border border-signal-ok/30 bg-signal-ok/[0.03] space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <span className="font-display text-base font-semibold text-foreground">From alert to response</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-signal-ok/10 text-signal-ok border border-signal-ok/30">
                Operations overview
              </span>
            </div>

            <p className="text-xs text-muted-foreground">
              How network monitoring supports restoration
            </p>

            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-background/80 border border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Site reports an alarm</span>
                <strong className="text-signal-ok font-mono font-semibold">Monitor</strong>
              </div>
              <div className="p-3 rounded-xl bg-background/80 border border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Operator checks impact and cause</span>
                <strong className="text-primary font-mono font-semibold">Investigate</strong>
              </div>
              <div className="p-3 rounded-xl bg-background/80 border border-signal-ok/40 bg-signal-ok/[0.04] flex items-center justify-between text-xs">
                <span className="text-foreground font-medium">Engineering team is engaged</span>
                <strong className="text-signal-ok font-mono font-bold">Restore</strong>
              </div>
            </div>

            <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
              NOC means Network Operations Centre, where teams monitor service and coordinate responses.
            </div>
          </div>

        </div>

        {/* Metrics Bar */}
        <div className="glass rounded-2xl p-5 sm:p-6 border border-border/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1">
              <b className="font-display text-3xl sm:text-4xl text-primary font-bold block">789+</b>
              <span className="text-xs text-muted-foreground font-mono block">Tower sites monitored</span>
            </div>
            <div className="space-y-1 lg:border-l lg:border-border/60 lg:pl-6">
              <b className="font-display text-3xl sm:text-4xl text-signal-ok font-bold block">99.8%</b>
              <span className="text-xs text-muted-foreground font-mono block">Reported service level achievement</span>
            </div>
            <div className="space-y-1 lg:border-l lg:border-border/60 lg:pl-6">
              <b className="font-display text-3xl sm:text-4xl text-foreground font-bold block">−30%</b>
              <span className="text-xs text-muted-foreground font-mono block">Reported repair-time reduction</span>
            </div>
            <div className="space-y-1 lg:border-l lg:border-border/60 lg:pl-6">
              <b className="font-display text-3xl sm:text-4xl text-amber-400 font-bold block">24/7</b>
              <span className="text-xs text-muted-foreground font-mono block">Monitoring and incident response</span>
            </div>
          </div>
        </div>

        {/* What the Role Involves */}
        <section id="experience" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
                <Activity className="size-3.5" />
                <span>What the role involves</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-2">
                Keep the network visible. Make the response clear.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              At Pan African Towers, I support around-the-clock monitoring and coordinate the next steps when a site reports a fault.
            </p>
          </div>

          {/* 3 Role Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="glass rounded-3xl p-6 border-border/80 flex flex-col justify-between space-y-4">
              <div>
                <span className="inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-signal-ok/10 text-signal-ok border border-signal-ok/30 uppercase tracking-wider font-semibold">
                  Monitor
                </span>
                <h3 className="font-display text-2xl text-foreground mt-3 mb-2">
                  Watch site alarms
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Use the Operations Work Station and remote monitoring dashboards to spot site alarms and changes in equipment status.
                </p>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 border-border/80 flex flex-col justify-between space-y-4">
              <div>
                <span className="inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-primary/10 text-primary border border-primary/30 uppercase tracking-wider font-semibold">
                  Investigate
                </span>
                <h3 className="font-display text-2xl text-foreground mt-3 mb-2">
                  Understand what happened
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Review the site information, identify likely causes and record incidents using a consistent root-cause format.
                </p>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 border-border/80 flex flex-col justify-between space-y-4">
              <div>
                <span className="inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/30 uppercase tracking-wider font-semibold">
                  Coordinate
                </span>
                <h3 className="font-display text-2xl text-foreground mt-3 mb-2">
                  Move the response forward
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Work with field and engineering teams to escalate faults, share useful details and support service restoration.
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground italic">
            OWS is an Operations Work Station. Galooli RMS is the remote monitoring system used to view site equipment and readings.
          </p>
        </section>

        {/* Operational Evidence Cards with Screenshots (Site IDs Blurred Out) */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="size-3.5" />
                <span>Operational evidence</span>
              </div>
              <h2 className="font-display text-3xl text-foreground mt-1">
                Examples of the infrastructure I monitor.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Verified equipment dashboards from Pan African Towers production systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {telecomProjects.map((p) => (
              <div
                key={p.id}
                className="glass rounded-3xl overflow-hidden flex flex-col justify-between border-border/80 hover:border-signal-ok/40 transition-all group"
              >
                <div>
                  <div
                    onClick={() => setSelectedScreenshot(p)}
                    className="relative aspect-[16/10] bg-secondary/80 overflow-hidden cursor-pointer border-b border-border/60"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                    
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono bg-background/85 backdrop-blur-md text-primary border border-border">
                      {p.siteId}
                    </span>

                    <span className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-background/85 text-foreground">
                      <Maximize2 className="size-3.5 text-primary" />
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <span className="text-[10px] font-mono text-signal-ok uppercase tracking-wider">
                      {p.category}
                    </span>
                    <h3 className="font-display text-xl text-foreground group-hover:text-signal-ok transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-secondary/20 border-t border-border/40 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-muted-foreground">Galooli RMS</span>
                  <button
                    onClick={() => setSelectedScreenshot(p)}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-signal-ok hover:underline cursor-pointer"
                  >
                    <span>Inspect Dashboard →</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Live 789+ Node Infrastructure Matrix */}
        <div className="glass rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-primary uppercase tracking-wider">Live Network Simulation</span>
              <h3 className="font-display text-2xl sm:text-3xl text-foreground mt-1">
                789+ Node Infrastructure Matrix
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Simulating nationwide cell site grid state with automated fault isolation.
              </p>
            </div>

            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-xs bg-signal-ok/15 text-signal-ok border border-signal-ok/30 shrink-0">
              <span className="size-2 rounded-full bg-signal-ok animate-pulse" />
              <span>99.8% Availability Target Active</span>
            </span>
          </div>

          <div className="my-2">
            <NodeGrid />
          </div>
        </div>

        {/* Callout Section */}
        <div className="glass rounded-3xl p-7 sm:p-8 border border-signal-ok/30 bg-signal-ok/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="space-y-1">
            <h3 className="font-display text-2xl text-foreground">Bring operational experience to automation.</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">My telecom work informs practical ideas for alarm triage and incident escalation.</p>
          </div>
          <a
            href="/automation"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm shrink-0"
          >
            <span>See automation work ↗</span>
          </a>
        </div>

        {/* Footer Linkage */}
        <div className="pt-8 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
          <HubBackLink />
          <span>Telecom operations · Toluwanimi Akinyemi</span>
          <a href="/analytics" className="hover:text-primary transition-colors">Next: Analytics ↗</a>
        </div>

      </div>

      {/* Screenshot Lightbox Modal */}
      <AnimatePresence>
        {selectedScreenshot && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedScreenshot(null)}
              className="fixed inset-0 bg-background/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-5xl bg-card border border-border rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]"
            >
              <div className="p-4 sm:p-5 bg-background border-b border-border flex items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-primary">{selectedScreenshot.siteId}</span>
                  <h3 className="text-lg sm:text-xl font-display text-foreground mt-0.5">
                    {selectedScreenshot.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedScreenshot(null)}
                  className="p-2 rounded-xl bg-secondary hover:bg-accent text-muted-foreground hover:text-foreground transition-colors cursor-pointer shrink-0"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="p-4 sm:p-6 overflow-y-auto bg-black/60 flex flex-col items-center justify-center">
                <div className="rounded-2xl overflow-hidden border border-border shadow-2xl max-w-full">
                  <img
                    src={selectedScreenshot.image}
                    alt={selectedScreenshot.title}
                    className="max-h-[62vh] w-auto object-contain rounded-xl"
                  />
                </div>

                <div className="mt-4 p-4 rounded-xl glass text-xs sm:text-sm text-foreground max-w-3xl w-full leading-relaxed space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-primary font-semibold">
                    <CheckCircle2 className="size-4 text-signal-ok" />
                    <span>Operational Context</span>
                  </div>
                  <p className="text-muted-foreground">{selectedScreenshot.description}</p>
                </div>
              </div>

              <div className="p-4 bg-background border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-mono">
                  Pan African Towers · Operations Dashboard Evidence
                </span>
                <Button variant="ghost" size="sm" onClick={() => setSelectedScreenshot(null)}>
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
