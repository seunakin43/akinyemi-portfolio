import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  FileText, 
  Download, 
  ExternalLink, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Maximize2, 
  X, 
  Share2, 
  Mail, 
  Database, 
  TrendingUp, 
  PieChart, 
  MapPin, 
  ShieldCheck, 
  Check, 
  Layers 
} from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioData, type DataAnalyticsProject } from "../data/portfolioData";
import { Button } from "@/components/ui/button";
import { HubBackLink } from "@/components/HubBackLink";
import { cn } from "@/lib/utils";
import { profile } from "@/data/content";

export const DataAnalyticsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<DataAnalyticsProject | null>(null);
  const [activeImageLightbox, setActiveImageLightbox] = useState<{ title: string; image: string; caption?: string } | null>(null);
  const [copiedShareLink, setCopiedShareLink] = useState(false);

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShareLink(true);
    setTimeout(() => setCopiedShareLink(false), 2000);
  };

  const categories = [
    "All",
    "Tableau",
    "Power BI",
    "Power BI & SQL",
    "IoT Telemetry",
    "SQL & Relational",
    "Financial & Risk"
  ];

  const filteredProjects = portfolioData.dataAnalyticsProjects.filter(
    (p) => selectedFilter === "All" || p.tool === selectedFilter
  );

  const getToolIcon = (tool: string) => {
    switch (tool) {
      case "Tableau":
        return PieChart;
      case "Power BI":
      case "Power BI & SQL":
        return BarChart3;
      case "IoT Telemetry":
        return TrendingUp;
      case "SQL & Relational":
        return Database;
      default:
        return FileText;
    }
  };

  return (
    <div className="py-12 sm:py-20 bg-background min-h-screen text-foreground">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-12">
        
        {/* Navigation Bar Header: Standalone Linkage */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-6">
          <HubBackLink />

          <div className="flex items-center gap-2.5">
            <button
              onClick={copyShareLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono glass border-white/10 hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all cursor-pointer"
            >
              {copiedShareLink ? <Check className="size-3.5 text-signal-ok" /> : <Share2 className="size-3.5" />}
              <span>{copiedShareLink ? "Link Copied!" : "Share Analytics Portfolio"}</span>
            </button>

            <a
              href={`mailto:${profile.email}?subject=Inquiry:%20Data%20Analytics%20%26%20BI%20Engineering`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
            >
              <Mail className="size-3.5" />
              <span>Contact Analyst</span>
            </a>
          </div>
        </div>

        {/* Hero Section: Data Analytics & Business Intelligence */}
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-mono uppercase tracking-[0.14em]">
              <BarChart3 className="size-3.5" />
              <span>Business Intelligence · Predictive Modeling · SQL</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-foreground font-normal tracking-tight leading-[1.05]">
              From noisy telemetry to decisive intelligence. <em className="text-primary italic">Executive Dashboards</em> that leaders trust.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I am Toluwanimi Akinyemi, Data & BI Specialist. Grounded in Financial Mathematics, I build executive dashboards, time-series forecasting models, and 3NF relational architectures across Power BI, Tableau, and SQL—turning large datasets into clear, decisive intelligence.
            </p>

            {/* Quick Impact Bento */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-4 rounded-2xl glass border-border/80">
                <span className="font-display text-3xl sm:text-4xl text-primary font-bold">150k+</span>
                <span className="block text-[11px] font-mono text-muted-foreground mt-0.5">EV Records in Tableau</span>
              </div>
              <div className="p-4 rounded-2xl glass border-border/80">
                <span className="font-display text-3xl sm:text-4xl text-signal-ok font-bold">100k+</span>
                <span className="block text-[11px] font-mono text-muted-foreground mt-0.5">Civic Records in Power BI</span>
              </div>
              <div className="p-4 rounded-2xl glass border-border/80">
                <span className="font-display text-3xl sm:text-4xl text-foreground font-bold">$33.6B</span>
                <span className="block text-[11px] font-mono text-muted-foreground mt-0.5">Volume OHLC Modeled</span>
              </div>
              <div className="p-4 rounded-2xl glass border-border/80">
                <span className="font-display text-3xl sm:text-4xl text-foreground font-bold">+18%</span>
                <span className="block text-[11px] font-mono text-muted-foreground mt-0.5">Data Accuracy Gain</span>
              </div>
            </div>

            {/* Credential Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="/analytics/Washington_EV_Dashboard.twb"
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold glass border-primary/40 text-primary hover:bg-primary/10 transition-all shadow-sm"
              >
                <Download className="size-4" />
                <span>Tableau Workbook (.twb)</span>
              </a>

              <a
                href="/analytics/Global_Data_Professional_Survey.pbix"
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold glass border-white/10 text-foreground hover:border-primary/40 transition-all"
              >
                <Download className="size-4 text-primary" />
                <span>Power BI Survey File (.pbix)</span>
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
            
            {/* Stacked Analytics Picture Representation (Bottom Left) */}
            <div
              onClick={() => setActiveImageLightbox({
                title: "Washington State EV Dashboard (Tableau)",
                image: "/analytics/washington_ev_tableau_dashboard.png",
                caption: "Geographic and demographic analytics on 150,000+ electric vehicle records in Tableau with CAFV and fleet eligibility."
              })}
              className="absolute -bottom-6 -left-3 sm:-bottom-8 sm:-left-6 z-20 w-44 sm:w-52 rounded-2xl p-2 glass border border-white/15 bg-background/90 shadow-2xl backdrop-blur-xl group/card cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-secondary/80">
                <img
                  src="/analytics/washington_ev_tableau_dashboard.png"
                  alt="Executive Tableau Dashboard"
                  className="h-full w-full object-cover object-left filter brightness-95 transition-transform duration-300 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-1.5 left-2 flex items-center gap-1 font-mono text-[10px] text-foreground font-medium">
                  <BarChart3 className="size-3 text-amber-400" />
                  <span>Tableau BI Dashboard</span>
                </span>
                <span className="absolute top-1.5 right-1.5 p-1 rounded-md bg-background/80 text-amber-400">
                  <Maximize2 className="size-2.5" />
                </span>
              </div>
              <div className="mt-1.5 flex items-center justify-between px-1 font-mono text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-signal-ok animate-pulse" />
                  150k+ Records
                </span>
                <span className="text-amber-400 font-semibold">Tableau · DAX</span>
              </div>
            </div>

            {/* Floating Top/Right Analytics Badge */}
            <div className="glass absolute -top-3 right-3 flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-[11px] text-amber-400 shadow-lg border border-white/10 bg-background/80">
              <BarChart3 className="size-3.5 text-amber-400" />
              <span>Tableau · Power BI · SQL</span>
            </div>
          </div>

        </div>

        {/* Specific & Precise About Data Analytics */}
        <div className="p-8 sm:p-12 rounded-3xl glass border border-primary/20 space-y-6 relative overflow-hidden">
          <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider">
            <TrendingUp className="size-4" />
            <span>Domain Specialization: Business Intelligence, Quantitative Modeling & Data Governance</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl text-foreground">
            Rigorous Quantitative Modeling & Actionable Decision Dashboards.
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              My analytical foundation in Financial Mathematics guides how I structure data: translating stochastic modeling and quantitative rigor into clear executive dashboards.
            </p>
            <p>
              From custom DAX time-series forecasting in Power BI to spatial mapping in Tableau and 3NF database design, I ensure data integrity from raw ingestion to executive presentation.
            </p>
          </div>

          {/* Architecture Methodology Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4">
            <div className="p-4 rounded-xl bg-background/60 border border-border space-y-1">
              <span className="font-mono text-xs font-bold text-primary flex items-center gap-1.5">
                <BarChart3 className="size-3.5" /> Predictive DAX & Forecasting
              </span>
              <p className="text-xs text-muted-foreground">
                Exponential smoothing models, multi-period moving averages, and dynamic volume-weighted price trends in Power BI.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background/60 border border-border space-y-1">
              <span className="font-mono text-xs font-bold text-primary flex items-center gap-1.5">
                <PieChart className="size-3.5" /> Spatial & Fleet Analytics
              </span>
              <p className="text-xs text-muted-foreground">
                Tableau geographic mapping, Clean Alternative Fuel Vehicle (CAFV) filtering, and manufacturer market share breakdown across 150k+ records.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background/60 border border-border space-y-1">
              <span className="font-mono text-xs font-bold text-primary flex items-center gap-1.5">
                <Database className="size-3.5" /> Data Governance & 3NF Schemas
              </span>
              <p className="text-xs text-muted-foreground">
                Third normal form (3NF) relational modeling, automated deduplication, and referential integrity improving reporting accuracy by 18%.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-border/60">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap cursor-pointer",
                selectedFilter === cat
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "glass text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => {
            const Icon = getToolIcon(project.tool);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass glass-lift rounded-3xl overflow-hidden flex flex-col justify-between border-border/80 hover:border-primary/50 transition-all group"
              >
                <div className="p-6 sm:p-7 space-y-4">
                  
                  {/* Category and Metric Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/30">
                      <Icon className="size-3.5" />
                      {project.tool}
                    </span>
                    <span className="glass rounded-full px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                      {project.metrics[0]}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-foreground leading-snug group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-primary/80 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Image Preview with Lightbox Trigger */}
                  {project.image && (
                    <div 
                      onClick={() => setActiveImageLightbox({
                        title: project.title,
                        image: project.image!,
                        caption: project.subtitle
                      })}
                      className="rounded-2xl overflow-hidden border border-border/80 aspect-[16/10] bg-secondary cursor-pointer relative group/img shadow-md"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover filter brightness-95 group-hover/img:scale-105 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 group-hover/img:opacity-100 transition-opacity" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                        <span className="text-[11px] opacity-90">Click to expand dashboard</span>
                        <Maximize2 className="size-3.5 text-primary" />
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Core Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-lg bg-secondary/80 text-secondary-foreground font-mono text-[11px] border border-border/40"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-lg bg-secondary/40 text-muted-foreground font-mono text-[10px]">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                </div>

                {/* Card Footer Actions */}
                <div className="p-6 sm:p-7 pt-3 border-t border-border/40 flex flex-wrap items-center justify-between gap-3 bg-secondary/20">
                  <div className="flex items-center gap-2">
                    {project.fileDownload && (
                      <a
                        href={project.fileDownload.url}
                        download
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors"
                      >
                        <Download className="size-3.5" />
                        <span>{project.fileDownload.label}</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer ml-auto"
                  >
                    <span>Inspect Case Study →</span>
                  </button>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Return to Main Portfolio Link at Footer */}
        <div className="pt-8 border-t border-border/60 flex items-center justify-between">
          <HubBackLink />
          <span className="text-xs font-mono text-muted-foreground ml-auto">
            Toluwanimi Akinyemi · Data Analytics & BI Portfolio
          </span>
        </div>

      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-background/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl bg-card border border-border rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]"
            >
              <div className="p-5 sm:p-6 bg-background border-b border-border flex items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-primary">{activeModalProject.tool} Case Study</span>
                  <h3 className="text-xl sm:text-2xl font-display text-foreground mt-0.5">
                    {activeModalProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 rounded-xl bg-secondary hover:bg-accent text-muted-foreground hover:text-foreground transition-colors cursor-pointer shrink-0"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-6">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">The Business & Operational Problem</h4>
                  <p className="text-sm text-foreground mt-1.5 leading-relaxed">{activeModalProject.details.problem}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">The Analytics Solution</h4>
                  <p className="text-sm text-foreground mt-1.5 leading-relaxed">{activeModalProject.details.solution}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Technical Implementation</h4>
                  <ul className="space-y-2 mt-2">
                    {activeModalProject.details.implementation.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl glass border border-primary/30 bg-primary/5">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-primary font-bold">Commercial & Operational Impact</h4>
                  <p className="text-xs sm:text-sm text-foreground mt-1 leading-relaxed">{activeModalProject.details.impact}</p>
                </div>
              </div>

              <div className="p-4 bg-background border-t border-border flex items-center justify-between">
                {activeModalProject.fileDownload && (
                  <a
                    href={activeModalProject.fileDownload.url}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <Download className="size-3.5" />
                    <span>{activeModalProject.fileDownload.label}</span>
                  </a>
                )}
                <Button variant="ghost" size="sm" onClick={() => setActiveModalProject(null)} className="ml-auto">
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal for Screenshots */}
      <AnimatePresence>
        {activeImageLightbox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImageLightbox(null)}
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
                  <span className="font-mono text-xs text-primary">Data Analytics & Telemetry Evidence</span>
                  <h3 className="text-lg sm:text-xl font-display text-foreground mt-0.5">
                    {activeImageLightbox.title}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveImageLightbox(null)}
                  className="p-2 rounded-xl bg-secondary hover:bg-accent text-muted-foreground hover:text-foreground transition-colors cursor-pointer shrink-0"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="p-4 sm:p-6 overflow-y-auto bg-black/60 flex flex-col items-center justify-center">
                <div className="rounded-2xl overflow-hidden border border-border shadow-2xl max-w-full">
                  <img
                    src={activeImageLightbox.image}
                    alt={activeImageLightbox.title}
                    className="max-h-[65vh] w-auto object-contain rounded-xl"
                  />
                </div>

                {activeImageLightbox.caption && (
                  <p className="mt-4 p-3 rounded-xl glass text-xs text-muted-foreground max-w-3xl text-center">
                    {activeImageLightbox.caption}
                  </p>
                )}
              </div>

              <div className="p-3.5 sm:p-4 bg-background border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>Asset: {activeImageLightbox.image.split("/").pop()}</span>
                <a
                  href={activeImageLightbox.image}
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