import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TowerControl, 
  Radio, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Clock, 
  BarChart3, 
  FileText, 
  ExternalLink, 
  Maximize2, 
  X, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Share2, 
  Copy, 
  Check, 
  Mail, 
  Phone 
} from "lucide-react";
import { Link } from "react-router-dom";
import { HubBackLink } from "@/components/HubBackLink";
import { NodeGrid } from "@/components/NodeGrid";
import { CountUp } from "@/components/CountUp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { profile } from "@/data/content";

export const TelecomPage: React.FC = () => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<{
    title: string;
    image: string;
    siteId: string;
    caption?: string;
    description?: string;
    metrics: string[];
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
      title: "Pan African Towers Real-Time Telemetry Surveillance & Colocation",
      siteId: "Cluster Node #789-RIV (Rivers State - Outdoor Off-Grid)",
      subtitle: "Galooli RMS live operational surveillance across 789+ nodes: fuel autonomy, generator runtime, and multi-tenant load balance",
      image: "/analytics/pat_rms_telemetry_live.png",
      description: "Direct surveillance feed from Pan African Towers Remote Monitoring System (RMS). Tracks real-time generator engine run-hours (6,610 hrs), rectifier DC voltage stability at 53.5V, consumer load draw at 3.68 kW, and multi-tenant power distribution for Airtel and MTN colocation equipment.",
      metrics: [
        "789+ Live Monitored Nodes",
        "99.8% SLA Nationwide Target",
        "Dual Colocation Tenant Balance (Airtel + MTN)",
        "Fuel Autonomy: 234L Active Reserve"
      ],
      highlights: [
        "Real-time sensor polling from AMF25 generator controllers",
        "Immediate alert correlation for voltage drops under 52.0V",
        "Automated digital input logging for fuel level depletion rates",
        "Instant dispatch escalation to field maintenance teams"
      ]
    },
    {
      id: "pat-airtel-hub-colocation",
      title: "Multi-Tenant Colocation Load Balancing & Power Distribution",
      siteId: "Cluster Node #789-ANB (Anambra Hub - Multi-Carrier Colocation)",
      subtitle: "Managing 10,862 W total colocation power draw across three national carriers: Airtel, MTN, and 9mobile",
      image: "/analytics/airtel_hub_colocation_analytics.png",
      description: "Operational colocation telemetry at the Anambra regional carrier hub. Enforces precise power distribution: Airtel (3,273 W / 64.3 A), MTN (4,407 W / 82.6 A), and 9mobile (3,181 W / 59.6 A) under dual generator redundancy with stateful load-drop alarm management.",
      metrics: [
        "10,862 W Combined Power Managed",
        "3 Concurrent National Operators Hosted",
        "Dual Generator Redundancy (Gen 1: 53L, Gen 2: 128L)",
        "Zero Tenant Service Interruptions"
      ],
      highlights: [
        "Multi-carrier power split analytics preventing transformer overdraw",
        "Real-time alarm load drop detection isolating individual tenant anomalies",
        "Sub-minute automated telemetry ingestion into regional NOC dashboards",
        "Fuel reserve threshold alarms safeguarding transmission during grid blackout"
      ]
    },
    {
      id: "pat-borno-generator-autonomy",
      title: "Heavy Generator Fuel Autonomy & Critical Reserve Surveillance",
      siteId: "Cluster Node #789-BOR (Borno Regional Hub - Heavy Fuel Reserve)",
      subtitle: "1,999 L high-capacity fuel reserve surveillance and AMF25 automated generator health monitoring",
      image: "/analytics/borno_hub_generator_telemetry.png",
      description: "Critical telemetry monitoring for regional tower infrastructure in Borno State. Tracks high-capacity diesel fuel reserves (1,999 Liters), generator load demand (6,870 W), AMF25 automated run-hours (2,036 hrs), and three balanced rectifiers supporting continuous off-grid cellular coverage.",
      metrics: [
        "1,999 L Diesel Reserve Tracked",
        "6,870 W Sustained Generator Output",
        "2,036 Engine Run-Hours Governed",
        "3 Balanced Rectifiers at 53.5V"
      ],
      highlights: [
        "Long-duration off-grid power management in remote terrain",
        "Automated fuel theft and rapid-depletion diagnostic alerts",
        "Rectifier DC phase balancing ensuring battery bank charging stability",
        "Sustained 99.8% uptime despite complete lack of commercial grid supply"
      ]
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

        {/* Hero Section: Specific to Telecom Operations */}
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-signal-ok/40 bg-signal-ok/10 text-signal-ok text-xs font-mono uppercase tracking-[0.14em]">
              <span className="size-2 rounded-full bg-signal-ok animate-pulse" />
              <span>Mission-Critical 24/7 Network Operations</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-foreground font-normal tracking-tight leading-[1.05]">
              Zero downtime in mission-critical operations. <em className="text-primary italic">24/7 SLA Surveillance</em> across 789+ nodes.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I am Toluwanimi Akinyemi, NOC Operator at Pan African Towers (Nov 2022 – Present). With 6 years in operations and analytics, I direct 24/7 surveillance across 789+ cell sites—sustaining 99.8% SLA, cutting MTTR by 30%, and governing multi-tenant colocation for Airtel, MTN, and 9mobile.
            </p>

            {/* Headline Telemetry Bento */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-4 rounded-2xl glass border-border/80">
                <span className="font-display text-3xl sm:text-4xl text-primary font-bold">789+</span>
                <span className="block text-[11px] font-mono text-muted-foreground mt-0.5">Live Monitored Nodes</span>
              </div>
              <div className="p-4 rounded-2xl glass border-border/80">
                <span className="font-display text-3xl sm:text-4xl text-signal-ok font-bold">99.8%</span>
                <span className="block text-[11px] font-mono text-muted-foreground mt-0.5">Sustained SLA Uptime</span>
              </div>
              <div className="p-4 rounded-2xl glass border-border/80">
                <span className="font-display text-3xl sm:text-4xl text-foreground font-bold">−30%</span>
                <span className="block text-[11px] font-mono text-muted-foreground mt-0.5">MTTR via RCA Templates</span>
              </div>
              <div className="p-4 rounded-2xl glass border-border/80">
                <span className="font-display text-3xl sm:text-4xl text-foreground font-bold">+40%</span>
                <span className="block text-[11px] font-mono text-muted-foreground mt-0.5">Fault Workflow Gain</span>
              </div>
            </div>
          </div>

          {/* Right Column: Headshot in Glass Frame */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="glass overflow-hidden rounded-3xl p-2.5 shadow-2xl">
              <img
                src="/hh.jpg"
                alt="Portrait of Toluwanimi Akinyemi"
                className="aspect-[4/5] w-full rounded-2xl object-cover object-top filter brightness-95"
              />
            </div>
            
            <div className="glass absolute -bottom-3 left-4 flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs shadow-xl border border-white/10">
              <span className="size-2 rounded-full bg-signal-ok animate-pulse" />
              <span>Pan African Towers Ltd · NOC Shift</span>
            </div>
          </div>

        </div>

        {/* Specific & Precise About Telecom Operations */}
        <div className="p-8 sm:p-12 rounded-3xl glass border border-primary/20 space-y-6 relative overflow-hidden">
          <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider">
            <Activity className="size-4" />
            <span>Domain Specialization: Telecommunication Infrastructure Operations</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl text-foreground">
            Mission-Critical Reliability & Zero Downtime in High-Stakes Operations.
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              At Pan African Towers, I direct 24/7 surveillance across 789+ nodes via Galooli RMS and OWS consoles, maintaining 99.8% SLA compliance across nationwide telecommunication infrastructure.
            </p>
            <p>
              I isolate faults before outages occur—monitoring AMF25 generator controllers, 1,999L fuel reserves, and 53.5V DC rectifiers to cut MTTR by 30% with standardized Root Cause Analysis.
            </p>
          </div>

          {/* Operational Methodology Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4">
            <div className="p-4 rounded-xl bg-background/60 border border-border space-y-1">
              <span className="font-mono text-xs font-bold text-primary flex items-center gap-1.5">
                <Zap className="size-3.5" /> Power Uptime Engineering
              </span>
              <p className="text-xs text-muted-foreground">
                Diesel generator autonomy, AMF25 automatic transfer, and DC rectifier load balance across off-grid cell sites.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background/60 border border-border space-y-1">
              <span className="font-mono text-xs font-bold text-primary flex items-center gap-1.5">
                <Clock className="size-3.5" /> Rapid RCA Minimization
              </span>
              <p className="text-xs text-muted-foreground">
                Standardized incident classification cutting Mean Time to Repair (MTTR) by 30% nationwide.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background/60 border border-border space-y-1">
              <span className="font-mono text-xs font-bold text-primary flex items-center gap-1.5">
                <Radio className="size-3.5" /> Multi-Tenant Colocation
              </span>
              <p className="text-xs text-muted-foreground">
                Concurrent power allocation and individual load isolation for Airtel, MTN, and 9mobile transmission gear.
              </p>
            </div>
          </div>
        </div>

        {/* Live 789-Node Interactive Telemetry Simulator */}
        <div className="glass rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="eyebrow text-primary">Live Network Telemetry Simulation</span>
              <h3 className="font-display text-2xl sm:text-3xl text-foreground mt-1">
                789+ Node Infrastructure Matrix
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Simulating nationwide tower grid state. Faults are immediately isolated via automated RCA protocols.
              </p>
            </div>

            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-xs bg-signal-ok/15 text-signal-ok border border-signal-ok/30 shrink-0">
              <span className="size-2 rounded-full bg-signal-ok animate-pulse" />
              <span>99.8% Availability Target Active</span>
            </span>
          </div>

          <div className="my-4">
            <NodeGrid />
          </div>
        </div>

        {/* Operational Case Studies & Live Artifacts */}
        <div className="space-y-8">
          <div>
            <span className="eyebrow text-primary">Verified Telemetry & Incident Artifacts</span>
            <h2 className="section-title mt-2">
              Operational Case Studies from the NOC Floor.
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
              Inspect verified telemetry dashboards from Pan African Towers production systems. Click any artifact below to examine sensor readings, generator runtimes, and tenant colocation splits in full resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {telecomProjects.map((p) => (
              <div
                key={p.id}
                className="glass glass-lift rounded-3xl overflow-hidden flex flex-col justify-between border-border/80 hover:border-primary/50 transition-all group"
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

                  <div className="p-6 space-y-3">
                    <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.metrics.slice(0, 2).map((m, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-lg bg-secondary/80 text-secondary-foreground font-mono text-[10px] border border-border/40"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-secondary/20 border-t border-border/40 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-muted-foreground">Galooli RMS Live</span>
                  <button
                    onClick={() => setSelectedScreenshot(p)}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer"
                  >
                    <span>Inspect Telemetry →</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Standardized RCA Technical Documentation Card */}
        <div className="p-8 sm:p-10 rounded-3xl glass border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="eyebrow text-primary">Standardized Incident Triage & RCA Framework</span>
            <h3 className="font-display text-2xl sm:text-3xl text-foreground">
              Root Cause Analysis Methodology Report
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Examine the engineering framework that unified fault handling across regional NOC branches in Nigeria, eliminated disparate incident reporting, and reduced nationwide Mean Time to Repair (MTTR) by 30%.
            </p>
          </div>

          <a
            href="/capstone/AI%20Automation%20Opportunities%20for%20a%20Telecommunication%20NOC%20Engineer%20-%20Toluwanimi%20Akinyemi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shrink-0 shadow-sm"
          >
            <FileText className="size-4" />
            <span>Read NOC Technical Paper (PDF)</span>
          </a>
        </div>

        {/* Direct Link to Main Portfolio */}
        <div className="pt-8 border-t border-border/60 flex items-center justify-between">
          <HubBackLink />
          <span className="text-xs font-mono text-muted-foreground ml-auto">
            Toluwanimi Akinyemi · Telecommunications Operations Portfolio
          </span>
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
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">{selectedScreenshot.siteId}</span>
                    <span className="text-xs font-mono text-muted-foreground">Galooli RMS Live Console</span>
                  </div>
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
                    <span>Operational Sensor Context</span>
                  </div>
                  <p className="text-muted-foreground">{selectedScreenshot.description}</p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 bg-background border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>Asset: {selectedScreenshot.image.split("/").pop()}</span>
                <a
                  href={selectedScreenshot.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary hover:underline transition-colors"
                >
                  <span>Open Full Resolution</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
