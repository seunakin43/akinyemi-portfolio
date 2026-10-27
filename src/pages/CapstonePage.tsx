import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  FileText, 
  Download, 
  ExternalLink, 
  ArrowLeft,
  ArrowRight, 
  Brain, 
  TowerControl, 
  BarChart3, 
  Database, 
  CheckCircle2, 
  Presentation,
  Cpu,
  KeyRound,
  Copy,
  Check,
  Lock,
  Unlock,
  ShieldCheck,
  Maximize2,
  X,
  Share2,
  Mail,
  Zap,
  Sparkles,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData, type CapstoneProject } from '../data/portfolioData';
import { ProjectModal } from '../components/ProjectModal';
import { VisualEvidenceGallery } from '../components/VisualEvidenceGallery';
import { HubBackLink } from '../components/HubBackLink';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { profile } from '@/data/content';

export const CapstonePage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<any>(null);
  const [activeImageLightbox, setActiveImageLightbox] = useState<{ title: string; image: string; caption?: string } | null>(null);
  const [copiedShareLink, setCopiedShareLink] = useState(false);

  // Demo Credentials State
  const [showDemoAccess, setShowDemoAccess] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [copiedUser, setCopiedUser] = useState(false);
  const [copiedPass, setCopiedPass] = useState(false);

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShareLink(true);
    setTimeout(() => setCopiedShareLink(false), 2000);
  };

  const copyToClipboard = (text: string, type: 'user' | 'pass') => {
    navigator.clipboard.writeText(text);
    if (type === 'user') {
      setCopiedUser(true);
      setTimeout(() => setCopiedUser(false), 2000);
    } else {
      setCopiedPass(true);
      setTimeout(() => setCopiedPass(false), 2000);
    }
  };

  const categories = [
    'All',
    'Financial & Expense AI',
    'n8n & RAG Agents',
    'Marketing Automation',
    'Telecom & NOC AI'
  ];

  const filteredProjects = portfolioData.capstoneProjects.filter(
    (p) => selectedFilter === 'All' || p.category === selectedFilter
  );

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Telecom & NOC AI':
        return TowerControl;
      case 'Financial & Expense AI':
        return Database;
      case 'n8n & RAG Agents':
        return Brain;
      case 'Marketing Automation':
        return Layers;
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
              <span>{copiedShareLink ? "Link Copied!" : "Share Automation Portfolio"}</span>
            </button>

            <a
              href={`mailto:${profile.email}?subject=Inquiry:%20AI%20Automation%20Systems`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
            >
              <Mail className="size-3.5" />
              <span>Contact Engineer</span>
            </a>
          </div>
        </div>

        {/* Hero Section: Specific to AI Automation */}
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-mono uppercase tracking-[0.14em]">
              <Cpu className="size-3.5" />
              <span>Enterprise Workflow Automation & Agent Architecture</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-foreground font-normal tracking-tight leading-[1.05]">
              Automations that don't fail silently. <em className="text-primary italic">Autonomous AI Workflows</em> engineered for zero drop.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I'm <strong>Toluwanimi Akinyemi</strong>. I build in n8n, Make and Zapier, connected to the OpenAI, Claude, Gemini and OpenRouter APIs, and architect zero-trust cloud infrastructure on Microsoft Azure. My flagship build,{" "}
              <a
                href="https://expense-ai-pro-14.lovable.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-foreground underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary"
              >
                ExpenseIQ
                <ExternalLink className="size-3.5" />
              </a>
              , is a live, fully automated AI expense governance system. Holding an ACTD-accredited Diploma in AI Automation, I engineer deterministic agentic pipelines with PostgreSQL Row-Level Security (RLS), air-gapped human-in-the-loop (HITL) approval gates, and multi-channel notification engines.
            </p>

            {/* Quick Impact Bento */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-4 rounded-2xl glass border-border/80">
                <span className="font-display text-3xl sm:text-4xl text-primary font-bold">100%</span>
                <span className="block text-[11px] font-mono text-muted-foreground mt-0.5">Receipt Compliance</span>
              </div>
              <div className="p-4 rounded-2xl glass border-border/80">
                <span className="font-display text-3xl sm:text-4xl text-signal-ok font-bold">₦12k</span>
                <span className="block text-[11px] font-mono text-muted-foreground mt-0.5">Auto-Approval Threshold</span>
              </div>
              <div className="p-4 rounded-2xl glass border-border/80">
                <span className="font-display text-3xl sm:text-4xl text-foreground font-bold">&lt; 60s</span>
                <span className="block text-[11px] font-mono text-muted-foreground mt-0.5">Lead Dispatch Lead Time</span>
              </div>
              <div className="p-4 rounded-2xl glass border-border/80">
                <span className="font-display text-3xl sm:text-4xl text-foreground font-bold">0-Drop</span>
                <span className="block text-[11px] font-mono text-muted-foreground mt-0.5">RLS Transaction Safety</span>
              </div>
            </div>

            {/* Credential Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="/capstone/ExpenseIQ project.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold glass border-primary/40 text-primary hover:bg-primary/10 transition-all shadow-sm"
              >
                <FileText className="size-4" />
                <span>ExpenseIQ Capstone [38 Pages] (PDF)</span>
              </a>

              <a
                href="/capstone/ExpenseIQ_Presentation.pptx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold glass border-white/10 text-foreground hover:border-primary/40 transition-all"
              >
                <Presentation className="size-4 text-primary" />
                <span>Executive Slide Deck (PPTX)</span>
              </a>

              <a
                href="https://expense-ai-pro-14.lovable.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-signal-ok/10 border border-signal-ok/30 text-signal-ok hover:bg-signal-ok/20 transition-all"
              >
                <ExternalLink className="size-4" />
                <span>Live ExpenseIQ Web App</span>
              </a>
            </div>

            {/* ExpenseIQ Manager Test Credentials */}
            <div className="pt-1">
              <button
                onClick={() => {
                  if (!showDemoAccess) {
                    setShowDemoAccess(true);
                    setIsApproved(true);
                  } else {
                    setShowDemoAccess(false);
                  }
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono glass border border-primary/30 text-primary hover:bg-primary/10 transition-colors cursor-pointer"
              >
                <KeyRound className="size-3.5" />
                <span>{showDemoAccess ? "Hide Manager Demo Access" : "Show Manager Demo Access (Approval Required)"}</span>
              </button>

              {showDemoAccess && (
                <div className="mt-3 p-4 rounded-2xl glass border border-primary/30 max-w-md space-y-2.5 bg-background/80">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-muted-foreground">Demo Username:</span>
                    <span className="font-bold text-foreground">manager@test.com</span>
                    <button
                      onClick={() => copyToClipboard("manager@test.com", "user")}
                      className="text-primary hover:underline ml-2"
                    >
                      {copiedUser ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-muted-foreground">Demo Password:</span>
                    <span className="font-bold text-foreground">test@1234</span>
                    <button
                      onClick={() => copyToClipboard("test@1234", "pass")}
                      className="text-primary hover:underline ml-2"
                    >
                      {copiedPass ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <p className="text-[11px] text-muted-foreground pt-1 border-t border-border/40">
                    Use these credentials at <a href="https://expense-ai-pro-14.lovable.app/login" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">expense-ai-pro-14.lovable.app/login</a> to test manager approval workflows.
                  </p>
                </div>
              )}
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
              <Sparkles className="size-3.5 text-primary" />
              <span>ACTD Accredited · n8n & Make Specialist</span>
            </div>
          </div>

        </div>

        {/* Specific & Precise About AI Automation */}
        <div className="p-8 sm:p-12 rounded-3xl glass border border-primary/20 space-y-6 relative overflow-hidden">
          <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider">
            <Zap className="size-4" />
            <span>Domain Specialization: Autonomous Process Engineering & Agent Architectures</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl text-foreground">
            Engineering Deterministic Automation with Enterprise Guardrails.
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              I pair frontier intelligence (OpenRouter, Claude, Gemini) with deterministic state machines in n8n and Make.com. Every pipeline enforces strict schema validations, transaction rollbacks, and persistent storage in PostgreSQL.
            </p>
            <p>
              I design air-gapped Human-in-the-Loop (HITL) approval frameworks: AI models handle unstructured parsing and risk evaluation, while financial disbursements require authorized human sign-off.
            </p>
          </div>

          {/* Architecture Methodology Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4">
            <div className="p-4 rounded-xl bg-background/60 border border-border space-y-1">
              <span className="font-mono text-xs font-bold text-primary flex items-center gap-1.5">
                <Brain className="size-3.5" /> Agent Reasoning & Memory
              </span>
              <p className="text-xs text-muted-foreground">
                Stateful n8n agents backed by PostgreSQL conversation embeddings, pgvector retrieval, and live RSS/API tool-calling.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background/60 border border-border space-y-1">
              <span className="font-mono text-xs font-bold text-primary flex items-center gap-1.5">
                <ShieldCheck className="size-3.5" /> Human-in-the-Loop (HITL)
              </span>
              <p className="text-xs text-muted-foreground">
                Air-gapped financial approval gates, automated manager alerts, and strict validation thresholds preventing unauthorized execution.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background/60 border border-border space-y-1">
              <span className="font-mono text-xs font-bold text-primary flex items-center gap-1.5">
                <Database className="size-3.5" /> Zero-Drop Ledgers
              </span>
              <p className="text-xs text-muted-foreground">
                Supabase PostgreSQL with Row Level Security (RLS), real-time Airtable synchronization, and automated transactional audit logs.
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
            const Icon = getCategoryIcon(project.category);

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
                      {project.category}
                    </span>
                    <span className="glass rounded-full px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                      {project.highlightMetric}
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

                  {/* Single Featured Image Preview */}
                  {(project as any).image && (
                    <div 
                      onClick={() => setActiveImageLightbox({
                        title: project.title,
                        image: (project as any).image!,
                        caption: project.subtitle
                      })}
                      className="rounded-2xl overflow-hidden border border-border/80 aspect-[16/10] bg-secondary cursor-pointer relative group/img shadow-md"
                    >
                      <img
                        src={(project as any).image}
                        alt={project.title}
                        className="w-full h-full object-cover filter brightness-95 group-hover/img:scale-105 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 group-hover/img:opacity-100 transition-opacity" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                        <span className="text-[11px] opacity-90">Click to expand preview</span>
                        <Maximize2 className="size-3.5 text-primary" />
                      </div>
                    </div>
                  )}

                  {/* Concise Value Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Core Technologies Pills */}
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
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-signal-ok/10 border border-signal-ok/30 text-signal-ok hover:bg-signal-ok/20 transition-colors"
                      >
                        <ExternalLink className="size-3.5" />
                        <span>Live App</span>
                      </a>
                    )}

                    {project.pdfFile && (
                      <a
                        href={project.pdfFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium glass border-border hover:border-primary/40 text-foreground transition-colors"
                      >
                        <FileText className="size-3.5 text-primary" />
                        <span>Documentation</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveModalProject({
                      ...project,
                      metrics: [project.highlightMetric, `${project.pageCount} Pages Technical Docs`]
                    })}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer ml-auto"
                  >
                    <span>Inspect Architecture →</span>
                  </button>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Visual Proof Section directly inside Automation Suite */}
        <VisualEvidenceGallery />

        {/* Return to Main Portfolio Link at Footer */}
        <div className="pt-8 border-t border-border/60 flex items-center justify-between">
          <HubBackLink />
          <span className="text-xs font-mono text-muted-foreground ml-auto">
            Toluwanimi Akinyemi · AI Automation Portfolio
          </span>
        </div>

      </div>

      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

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
                  <span className="font-mono text-xs text-primary">Technical Evidence</span>
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