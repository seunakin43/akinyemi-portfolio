import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cloud, 
  ShieldCheck, 
  Lock, 
  Server, 
  Network, 
  KeyRound, 
  FileText, 
  ExternalLink, 
  Maximize2, 
  X, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Presentation, 
  Share2, 
  Copy, 
  Check, 
  Mail 
} from "lucide-react";
import { Link } from "react-router-dom";
import { HubBackLink } from "@/components/HubBackLink";
import { portfolioData, type CloudProject } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/content";

export const CloudPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [selectedScreenshot, setSelectedScreenshot] = useState<CloudProject | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const cloudProjects: CloudProject[] = portfolioData.cloudProjects || [];

  const categories = [
    "All",
    "Zero-Trust",
    "Perimeter Defense",
    "Identity & PIM",
    "Access Control",
    "Firewall Rules",
    "Infrastructure"
  ];

  const filteredProjects = cloudProjects.filter(
    (p) => selectedFilter === "All" || p.badge === selectedFilter
  );

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
              <span>{copiedLink ? "Link Copied!" : "Share Cloud Portfolio"}</span>
            </button>

            <a
              href={`mailto:${profile.email}?subject=Inquiry:%20Cloud%20Infrastructure%20%26%20Security`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
            >
              <Mail className="size-3.5" />
              <span>Contact Cloud Engineer</span>
            </a>
          </div>
        </div>

        {/* Hero Section: Specific to Cloud Infrastructure */}
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-mono uppercase tracking-[0.14em]">
              <Cloud className="size-3.5" />
              <span>Enterprise Cloud Architecture & Perimeter Defense</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-foreground font-normal tracking-tight leading-[1.05]">
              Zero-Trust by architecture. <em className="text-primary italic">Cloud Perimeters & Defense</em> engineered for 99.99% uptime.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I am Toluwanimi Akinyemi, Cloud Systems & Security Specialist. With a 540-hour Diploma in Cloud Computing (SDC Canada #2325689), I engineer zero-public-IP topologies via Azure Bastion, enforce Zero Standing Privilege through Entra ID PIM, and deploy hardened multi-subnet VNets.
            </p>

            {/* Credential Proof Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="/certificates/2325689_TOLUWANIMI_TAIWO_AKINYEMI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold glass border-primary/40 text-primary hover:bg-primary/10 transition-all shadow-sm"
              >
                <Award className="size-4" />
                <span>SDC Canada Cloud Diploma [Cert #2325689] (PDF)</span>
              </a>

              <a
                href="/presentations/Cloud_Computing_Capstone_Presentation.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold glass border-white/10 text-foreground hover:border-primary/40 transition-all"
              >
                <Presentation className="size-4 text-primary" />
                <span>Cloud Capstone Presentation (PDF)</span>
              </a>
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
            
            {/* Stacked Cloud Architecture Picture Representation (Bottom Left) */}
            <div
              onClick={() => setSelectedScreenshot(cloudProjects[0])}
              className="absolute -bottom-6 -left-3 sm:-bottom-8 sm:-left-6 z-20 w-44 sm:w-52 rounded-2xl p-2 glass border border-white/15 bg-background/90 shadow-2xl backdrop-blur-xl group/card cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-secondary/80">
                <img
                  src="/cloud-media/Implementing Bastion.png"
                  alt="Azure Bastion Architecture"
                  className="h-full w-full object-cover object-left filter brightness-95 transition-transform duration-300 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-1.5 left-2 flex items-center gap-1 font-mono text-[10px] text-foreground font-medium">
                  <Cloud className="size-3 text-sky-400" />
                  <span>Azure Bastion VNet</span>
                </span>
                <span className="absolute top-1.5 right-1.5 p-1 rounded-md bg-background/80 text-sky-400">
                  <Maximize2 className="size-2.5" />
                </span>
              </div>
              <div className="mt-1.5 flex items-center justify-between px-1 font-mono text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-signal-ok animate-pulse" />
                  Zero Public IP
                </span>
                <span className="text-sky-400 font-semibold">Azure · PIM</span>
              </div>
            </div>

            {/* Floating Top/Right SDC Canada Badge */}
            <div className="glass absolute -top-3 right-3 flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-[11px] text-sky-400 shadow-lg border border-white/10 bg-background/80">
              <ShieldCheck className="size-3.5 text-sky-400" />
              <span>SDC Canada #2325689</span>
            </div>
          </div>

        </div>

        {/* Specific & Precise About Cloud Systems */}
        <div className="p-8 sm:p-12 rounded-3xl glass border border-primary/20 space-y-6 relative overflow-hidden">
          <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider">
            <ShieldCheck className="size-4" />
            <span>Domain Specialization: Cloud Security & Infrastructure Governance</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl text-foreground">
            Zero-Trust Principles Applied to Multi-Tier Cloud Deployments.
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              My cloud architectures enforce defense-in-depth: every virtual machine is provisioned without public IPs, accessible only via Azure Bastion over encrypted TLS HTML5 streams.
            </p>
            <p>
              Administrative access follows Zero Standing Privilege (ZSP): permanent roles are replaced with time-bound Just-In-Time elevations in Microsoft Entra ID PIM, bounded by stateful NSG rules.
            </p>
          </div>

          {/* Cloud Pillars Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4">
            <div className="p-4 rounded-xl bg-background/60 border border-border space-y-1">
              <span className="font-mono text-xs font-bold text-primary flex items-center gap-1.5">
                <Lock className="size-3.5" /> Zero-Trust Perimeter
              </span>
              <p className="text-xs text-muted-foreground">
                Azure Bastion dedicated /26 subnets, eliminating exposed RDP/SSH management ports from the public internet.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background/60 border border-border space-y-1">
              <span className="font-mono text-xs font-bold text-primary flex items-center gap-1.5">
                <KeyRound className="size-3.5" /> Identity & PIM Governance
              </span>
              <p className="text-xs text-muted-foreground">
                Microsoft Entra ID Privileged Identity Management with time-bound activations and custom RBAC JSON schemas.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background/60 border border-border space-y-1">
              <span className="font-mono text-xs font-bold text-primary flex items-center gap-1.5">
                <Network className="size-3.5" /> Multi-Tier VNet Isolation
              </span>
              <p className="text-xs text-muted-foreground">
                Stateful NSG firewall rules, CIDR subnetting, Layer 3/4 DDoS protection, and regional VNet peering.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-border/60">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                selectedFilter === cat
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cloud Architecture Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="glass glass-lift rounded-3xl overflow-hidden flex flex-col justify-between h-full border-border/80 hover:border-primary/50 transition-all group"
            >
              <div>
                <div 
                  className="relative aspect-[16/10] bg-secondary/80 overflow-hidden cursor-pointer border-b border-border/60"
                  onClick={() => setSelectedScreenshot(p)}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono bg-background/85 backdrop-blur-md text-primary border border-border">
                    {p.badge}
                  </span>

                  <span className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-background/85 text-foreground">
                    <Maximize2 className="size-3.5 text-primary" />
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-mono text-primary/80">
                    {p.tag}
                  </div>

                  <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {p.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.highlights.slice(0, 2).map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="px-2.5 py-0.5 rounded-lg bg-secondary/80 text-secondary-foreground font-mono text-[10px] border border-border/40"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-secondary/20 border-t border-border/40 flex items-center justify-between">
                <span className="text-[10px] font-mono text-muted-foreground">Azure Deployment Evidence</span>
                <button
                  onClick={() => setSelectedScreenshot(p)}
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer"
                >
                  <span>Inspect Architecture →</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Link to Main Portfolio */}
        <div className="pt-8 border-t border-border/60 flex items-center justify-between">
          <HubBackLink />
          <span className="text-xs font-mono text-muted-foreground ml-auto">
            Toluwanimi Akinyemi · Cloud Infrastructure & Security Portfolio
          </span>
        </div>

      </div>

      {/* High-Resolution Screenshot Lightbox Modal */}
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
                    <span className="font-mono text-xs text-primary">{selectedScreenshot.tag}</span>
                    <span className="text-xs font-mono text-muted-foreground">Azure Deployment Evidence</span>
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
                    <CheckCircle2 className="size-4" />
                    <span>Technical Architecture Context</span>
                  </div>
                  <p className="text-muted-foreground">{selectedScreenshot.caption}</p>
                  <div className="pt-2 border-t border-white/5 flex flex-wrap gap-2 text-[11px] font-mono text-primary">
                    <span>Impact: {selectedScreenshot.details.impact}</span>
                  </div>
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
