import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Maximize2, 
  X, 
  Share2, 
  Mail, 
  PieChart, 
  Check, 
  ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HubBackLink } from "@/components/HubBackLink";
import { profile } from "@/data/content";

export const DataAnalyticsPage: React.FC = () => {
  const [activeImageLightbox, setActiveImageLightbox] = useState<{ title: string; image: string; caption?: string } | null>(null);
  const [copiedShareLink, setCopiedShareLink] = useState(false);

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShareLink(true);
    setTimeout(() => setCopiedShareLink(false), 2000);
  };

  const projects = [
    {
      id: "washington-ev",
      title: "Electric vehicle adoption",
      kicker: "Tableau · 150,000+ records",
      description: "Explore vehicle registrations across Washington State by county, vehicle type and manufacturer.",
      download: {
        label: "Download Tableau Workbook (.twb)",
        url: "/analytics/Washington_EV_Dashboard.twb"
      },
      image: "/analytics/washington_ev_tableau_dashboard.png"
    },
    {
      id: "civic-powerbi",
      title: "Civic and electoral data",
      kicker: "Power BI · 100,000+ records",
      description: "Support civic oversight with voter-record analysis, data checks and reporting dashboards across Osun and Ekiti state elections.",
      image: "/analytics/kimpact_voter_dashboard_preview.png"
    },
    {
      id: "btc-forecast",
      title: "Bitcoin price trends",
      kicker: "Power BI · Market data",
      description: "Explore five years of price and trading-volume data with dynamic moving averages, high-watermark bands and forecast views.",
      image: "/analytics/btc_usd_powerbi_forecast_light.png"
    },
    {
      id: "global-survey",
      title: "Global Data Professional Survey",
      kicker: "Power BI · Compensation Benchmarks",
      description: "Analyze global salary benchmarks, favorite programming languages (Python, SQL), and career transition satisfaction.",
      download: {
        label: "Download Power BI File (.pbix)",
        url: "/analytics/Global_Data_Professional_Survey.pbix"
      }
    }
  ];

  return (
    <div className="py-12 sm:py-20 bg-background min-h-screen text-foreground">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16">
        
        {/* Navigation Bar Header */}
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

        {/* Subhero Section: Human, Clear, Not Text Heavy */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs font-mono uppercase tracking-[0.14em]">
              <span className="size-1.5 rounded-full bg-amber-400" />
              <span>Data analytics · Dashboards and insight</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl text-foreground font-normal tracking-tight leading-[1.05]">
              Turn large datasets into <em className="text-primary italic font-normal">clear decisions.</em>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I clean, organize and analyze data, then present the findings in dashboards people can use. My projects include civic records, electric vehicle registrations and operational data.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-mono text-xs font-semibold shadow-md">
                <a href="#projects" className="inline-flex items-center gap-2">
                  Explore projects <ArrowDown className="size-4" />
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="glass border-white/10 bg-transparent text-foreground hover:border-primary/40 font-mono text-xs">
                <a href={`mailto:${profile.email}?subject=Inquiry:%20Data%20Analytics`} className="inline-flex items-center gap-1.5">
                  Discuss analytics ↗
                </a>
              </Button>
            </div>

            {/* Quick Tool Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-secondary/80 text-secondary-foreground border border-border/50">
                Power BI
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-secondary/80 text-secondary-foreground border border-border/50">
                Tableau
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-secondary/80 text-secondary-foreground border border-border/50">
                SQL &amp; 3NF
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-secondary/80 text-secondary-foreground border border-border/50">
                Advanced Excel
              </span>
            </div>
          </div>

          {/* Visual Step Box: Analysis Flow */}
          <div className="glass rounded-3xl p-6 sm:p-7 border border-amber-500/30 bg-amber-500/[0.03] space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <span className="font-display text-base font-semibold text-foreground">From raw records to useful answers</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                Analysis flow
              </span>
            </div>

            <p className="text-xs text-muted-foreground">
              A clear path from data to decision
            </p>

            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-background/80 border border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Check and organize records</span>
                <strong className="text-amber-400 font-mono font-semibold">Prepare</strong>
              </div>
              <div className="p-3 rounded-xl bg-background/80 border border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Find patterns and compare groups</span>
                <strong className="text-primary font-mono font-semibold">Analyze</strong>
              </div>
              <div className="p-3 rounded-xl bg-background/80 border border-amber-500/40 bg-amber-500/[0.04] flex items-center justify-between text-xs">
                <span className="text-foreground font-medium">Show the result in a dashboard</span>
                <strong className="text-amber-400 font-mono font-bold">Explain</strong>
              </div>
            </div>

            <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
              A chart should make the evidence easier to understand, not harder.
            </div>
          </div>

        </div>

        {/* Metrics Bar */}
        <div className="glass rounded-2xl p-5 sm:p-6 border border-border/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1">
              <b className="font-display text-3xl sm:text-4xl text-primary font-bold block">150k+</b>
              <span className="text-xs text-muted-foreground font-mono block">Electric vehicle records analyzed</span>
            </div>
            <div className="space-y-1 lg:border-l lg:border-border/60 lg:pl-6">
              <b className="font-display text-3xl sm:text-4xl text-signal-ok font-bold block">100k+</b>
              <span className="text-xs text-muted-foreground font-mono block">Civic records modeled</span>
            </div>
            <div className="space-y-1 lg:border-l lg:border-border/60 lg:pl-6">
              <b className="font-display text-3xl sm:text-4xl text-foreground font-bold block">+18%</b>
              <span className="text-xs text-muted-foreground font-mono block">Reported improvement in data accuracy</span>
            </div>
            <div className="space-y-1 lg:border-l lg:border-border/60 lg:pl-6">
              <b className="font-display text-3xl sm:text-4xl text-amber-400 font-bold block">3 tools</b>
              <span className="text-xs text-muted-foreground font-mono block">Power BI, Tableau and SQL</span>
            </div>
          </div>
        </div>

        {/* Selected Projects */}
        <section id="projects" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
                <BarChart3 className="size-3.5" />
                <span>Selected projects</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-2">
                Different datasets. Clear questions.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Each project starts with a question, makes the data usable and presents a result that supports analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div
                key={p.id}
                className="glass rounded-3xl overflow-hidden flex flex-col justify-between border-border/80 hover:border-amber-400/40 transition-all group"
              >
                <div>
                  {p.image && (
                    <div
                      onClick={() => setActiveImageLightbox({
                        title: p.title,
                        image: p.image!,
                        caption: p.description
                      })}
                      className="relative aspect-[16/10] bg-secondary/80 overflow-hidden cursor-pointer border-b border-border/60"
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                        <span className="text-[11px] opacity-90">Click to expand preview</span>
                        <Maximize2 className="size-3.5 text-primary" />
                      </div>
                    </div>
                  )}

                  <div className="p-6 space-y-2">
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">
                      {p.kicker}
                    </span>
                    <h3 className="font-display text-2xl text-foreground group-hover:text-amber-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-secondary/20 border-t border-border/40 flex flex-wrap items-center justify-between gap-3">
                  {p.download && (
                    <a
                      href={p.download.url}
                      download
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 transition-colors"
                    >
                      <Download className="size-3.5" />
                      <span>{p.download.label}</span>
                    </a>
                  )}

                  <a
                    href={`mailto:${profile.email}?subject=Inquiry:%20${encodeURIComponent(p.title)}`}
                    className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors ml-auto"
                  >
                    <span>Ask about this project ↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground italic">
            The electric vehicle and civic records are separate datasets. The figures above refer to different projects.
          </p>
        </section>

        {/* How I Work Section */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
                <CheckCircle2 className="size-3.5" />
                <span>How I work</span>
              </div>
              <h2 className="font-display text-3xl text-foreground mt-1">
                Make the data dependable before making it visual.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Careful checks help readers understand what a chart shows and what conclusions the data can support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="glass rounded-3xl p-6 border-border/80 space-y-2">
              <strong className="font-display text-2xl text-foreground block">Check</strong>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Find missing values, duplicates and inconsistent labels.
              </p>
            </div>

            <div className="glass rounded-3xl p-6 border-border/80 space-y-2">
              <strong className="font-display text-2xl text-foreground block">Analyze</strong>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Compare the right groups and keep definitions clear.
              </p>
            </div>

            <div className="glass rounded-3xl p-6 border-border/80 space-y-2">
              <strong className="font-display text-2xl text-foreground block">Communicate</strong>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Build a dashboard that answers a practical question.
              </p>
            </div>
          </div>
        </section>

        {/* Callout Section */}
        <div className="glass rounded-3xl p-7 sm:p-8 border border-amber-500/30 bg-amber-500/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="space-y-1">
            <h3 className="font-display text-2xl text-foreground">Need help making a dataset easier to use?</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Let’s discuss the question, the data and the right way to present the findings.</p>
          </div>
          <a
            href={`mailto:${profile.email}?subject=Inquiry:%20Dataset%20Consultation`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm shrink-0"
          >
            <span>Get in touch ↗</span>
          </a>
        </div>

        {/* Footer Linkage */}
        <div className="pt-8 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
          <HubBackLink />
          <span>Data analytics · Toluwanimi Akinyemi</span>
          <a href="/cloud" className="hover:text-primary transition-colors">Next: Cloud ↗</a>
        </div>

      </div>

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
                  <span className="font-mono text-xs text-primary">Data Analytics Evidence</span>
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
                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground text-center max-w-2xl">
                    {activeImageLightbox.caption}
                  </p>
                )}
              </div>

              <div className="p-4 bg-background border-t border-border flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">
                  Toluwanimi Akinyemi · Data Analytics Portfolio
                </span>
                <Button variant="ghost" size="sm" onClick={() => setActiveImageLightbox(null)}>
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
