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
  ArrowRight,
  CheckCircle2,
  Award
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { portfolioData, type CloudProject } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export const CloudSection: React.FC = () => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<{
    image: string;
    title: string;
    caption: string;
    category: string;
  } | null>(null);

  const cloudProjects: CloudProject[] = portfolioData.cloudProjects || [];

  return (
    <section id="cloud" className="border-t border-border/60 py-20 sm:py-28 relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow flex items-center gap-1.5 text-primary">
              <Cloud className="size-3.5" />
              <span>Cloud Infrastructure & Security Engineering</span>
            </p>
            <h2 className="section-title mt-3 max-w-2xl">
              Zero-Trust Cloud Architecture on <em className="text-primary italic">Microsoft Azure</em>.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              Certified by PluralCode Academy and Skill Development Council Canada. Enterprise-grade identity governance, DDoS mitigation, Azure Bastion zero-public-IP perimeter security, and stateful NSG firewall engineering.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
              <a
                href="/certificates/2325689_TOLUWANIMI_TAIWO_AKINYEMI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold glass border-white/10 hover:border-primary/40 text-foreground transition-all"
              >
                <Award className="size-3.5 text-primary" />
                <span>Verify SDC Canada Diploma [#2325689] (PDF)</span>
              </a>

              <Button asChild size="lg">
                <Link to="/cloud">
                  <span>Enter Cloud Subweb</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Cloud Projects Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cloudProjects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <div className="glass glass-lift rounded-3xl overflow-hidden flex flex-col justify-between h-full border-border/80 group">
                
                {/* Visual Screenshot Header */}
                <div 
                  className="relative aspect-[16/10] bg-secondary/80 overflow-hidden cursor-pointer border-b border-border/60"
                  onClick={() => setSelectedScreenshot({
                    image: p.image,
                    title: p.title,
                    caption: p.caption,
                    category: p.tag
                  })}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="glass rounded-full px-2.5 py-0.5 font-mono text-[11px] text-primary font-medium">
                      {p.badge || "Verified Architecture"}
                    </span>
                  </div>

                  {/* Hover Zoom Hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-background/90 text-primary border border-primary/40 shadow-xl">
                      <Maximize2 className="size-3.5" />
                      <span>Inspect Canvas</span>
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-4 flex flex-col justify-between flex-1">
                  <div className="space-y-2">
                    <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
                      {p.tag}
                    </p>
                    <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-sm text-foreground/90 font-medium">
                      {p.outcome}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {p.body}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-3 border-t border-white/5">
                    {p.highlights.slice(0, 2).map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="font-mono text-[11px] leading-tight text-foreground/80">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground border border-border/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer Action */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedScreenshot({
                        image: p.image,
                        title: p.title,
                        caption: p.caption,
                        category: p.tag
                      })}
                      className="text-xs font-mono text-primary hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Maximize2 className="size-3" />
                      <span>Inspect Evidence</span>
                    </button>

                    <Link to="/cloud" className="text-xs font-mono text-muted-foreground hover:text-foreground flex items-center gap-1">
                      <span>Full Case</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>

                </div>

              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Banner to Cloud Hub Subweb */}
        <Reveal delay={0.2} className="mt-10">
          <div className="glass glass-featured rounded-3xl p-7 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="eyebrow text-primary">PluralCode Academy & SDC Canada Certified</span>
              <h3 className="font-display text-2xl sm:text-3xl text-foreground">
                Explore the Complete Cloud Computing Subweb
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl">
                Inspect 200+ production screenshots covering Azure Bastion zero-public-IP topologies, DDoS perimeter defense, Entra ID PIM elevation, custom RBAC JSON schemas, and multi-tier NSG firewall rules.
              </p>
            </div>

            <Button asChild size="lg" className="shrink-0">
              <Link to="/cloud">
                <span>Open Cloud Computing Subweb</span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

      </div>

      {/* High-Resolution Expanded Screenshot Lightbox Modal */}
      <AnimatePresence>
        {selectedScreenshot && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedScreenshot(null)}
              className="fixed inset-0 bg-background/90 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-5xl bg-card border border-border rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]"
            >
              {/* Header */}
              <div className="p-4 sm:p-5 bg-background/90 border-b border-border flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">{selectedScreenshot.category}</span>
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

              {/* Image Viewer */}
              <div className="p-4 sm:p-6 overflow-y-auto bg-black/60 flex flex-col items-center justify-center">
                <div className="rounded-2xl overflow-hidden border border-border shadow-2xl max-w-full">
                  <img
                    src={selectedScreenshot.image}
                    alt={selectedScreenshot.title}
                    className="max-h-[62vh] w-auto object-contain rounded-xl"
                  />
                </div>

                {/* Caption / Architecture context */}
                <div className="mt-4 p-4 rounded-xl glass text-xs sm:text-sm text-foreground max-w-3xl w-full leading-relaxed space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-primary font-semibold">
                    <CheckCircle2 className="size-4" />
                    <span>Cloud Architecture Context</span>
                  </div>
                  <p className="text-muted-foreground">{selectedScreenshot.caption}</p>
                </div>
              </div>

              {/* Footer */}
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
    </section>
  );
};
