import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Presentation,
  KeyRound,
  Copy,
  Check,
  Unlock,
  Share2,
  Mail,
  Zap,
  Sparkles,
  ArrowDown
} from 'lucide-react';
import { ProjectModal } from '../components/ProjectModal';
import { HubBackLink } from '../components/HubBackLink';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/content';

export const CapstonePage: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<any>(null);
  const [copiedShareLink, setCopiedShareLink] = useState(false);
  const [showSandboxAccess, setShowSandboxAccess] = useState(false);
  const [copiedUser, setCopiedUser] = useState(false);
  const [copiedPass, setCopiedPass] = useState(false);

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShareLink(true);
    setTimeout(() => setCopiedShareLink(false), 2000);
  };

  const copyCredentials = (text: string, type: 'user' | 'pass') => {
    navigator.clipboard.writeText(text);
    if (type === 'user') {
      setCopiedUser(true);
      setTimeout(() => setCopiedUser(false), 2000);
    } else {
      setCopiedPass(true);
      setTimeout(() => setCopiedPass(false), 2000);
    }
  };

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

        {/* Subhero Section: Human, Clear, Not Text Heavy */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-mono uppercase tracking-[0.14em]">
              <span className="size-1.5 rounded-full bg-primary" />
              <span>AI automation · Featured focus</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl text-foreground font-normal tracking-tight leading-[1.05]">
              Let software handle repeatable work. <em className="text-primary italic">Keep people in control.</em>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I connect apps and automate routine steps, such as reading expense receipts, checking details and sending exceptions to a manager. People make the decisions that need judgment.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-mono text-xs font-semibold shadow-md">
                <a href="#expenseiq" className="inline-flex items-center gap-2">
                  Explore ExpenseIQ <ArrowDown className="size-4" />
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="glass border-white/10 bg-transparent text-foreground hover:border-primary/40 font-mono text-xs">
                <a href={`mailto:${profile.email}?subject=Inquiry:%20AI%20Automation%20Project`} className="inline-flex items-center gap-1.5">
                  Discuss a project ↗
                </a>
              </Button>
            </div>

            {/* Quick Implementation Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-secondary/80 text-secondary-foreground border border-border/50">
                n8n: visual workflow builder
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-secondary/80 text-secondary-foreground border border-border/50">
                Make.com
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-secondary/80 text-secondary-foreground border border-border/50">
                Zapier
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-secondary/80 text-secondary-foreground border border-border/50">
                AI tools &amp; APIs
              </span>
            </div>
          </div>

          {/* Visual Step Box: Expense Review Overview */}
          <div className="glass rounded-3xl p-6 sm:p-7 border border-primary/30 bg-primary/[0.03] space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <span className="font-display text-sm font-semibold text-foreground">Expense review, step by step</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/30">
                Project example
              </span>
            </div>

            <p className="text-xs text-muted-foreground">
              A routine process with a human decision point
            </p>

            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-background/80 border border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Receipt submitted</span>
                <strong className="text-primary font-mono font-semibold">01 · Capture</strong>
              </div>
              <div className="p-3 rounded-xl bg-background/80 border border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Amount and details checked</span>
                <strong className="text-signal-ok font-mono font-semibold">02 · Review</strong>
              </div>
              <div className="p-3 rounded-xl bg-background/80 border border-primary/40 bg-primary/[0.04] flex items-center justify-between text-xs">
                <span className="text-foreground font-medium">Unusual claim sent to manager</span>
                <strong className="text-primary font-mono font-bold">03 · Approve</strong>
              </div>
            </div>

            <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
              The system prepares the work. A manager approves the claim.
            </div>
          </div>

        </div>

        {/* Metrics Bar */}
        <div className="glass rounded-2xl p-5 sm:p-6 border border-border/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1">
              <b className="font-display text-3xl sm:text-4xl text-primary font-bold block">₦12,000</b>
              <span className="text-xs text-muted-foreground font-mono block">Low-risk auto-approval threshold</span>
            </div>
            <div className="space-y-1 lg:border-l lg:border-border/60 lg:pl-6">
              <b className="font-display text-3xl sm:text-4xl text-signal-ok font-bold block">38 pages</b>
              <span className="text-xs text-muted-foreground font-mono block">ExpenseIQ capstone documentation</span>
            </div>
            <div className="space-y-1 lg:border-l lg:border-border/60 lg:pl-6">
              <b className="font-display text-3xl sm:text-4xl text-foreground font-bold block">3 steps</b>
              <span className="text-xs text-muted-foreground font-mono block">Capture, check and route for decision</span>
            </div>
            <div className="space-y-1 lg:border-l lg:border-border/60 lg:pl-6">
              <b className="font-display text-3xl sm:text-4xl text-amber-400 font-bold block">Human-led</b>
              <span className="text-xs text-muted-foreground font-mono block">Manager approval for important actions</span>
            </div>
          </div>
        </div>

        {/* Featured Project: ExpenseIQ */}
        <section id="expenseiq" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="size-3.5" />
                <span>Featured project</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-2">
                ExpenseIQ makes expense reviews easier to manage.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              A capstone project for Nigerian small and medium-sized businesses. It brings receipt capture, review and approval into one traceable process.
            </p>
          </div>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="glass rounded-3xl p-6 border-border/80 flex flex-col justify-between space-y-4">
              <div>
                <span className="inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-primary/10 text-primary border border-primary/30 uppercase tracking-wider font-semibold">
                  01 · Capture
                </span>
                <h3 className="font-display text-2xl text-foreground mt-3 mb-2">
                  Collect the receipt
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  An employee submits a receipt and basic expense details through a simple form.
                </p>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 border-border/80 flex flex-col justify-between space-y-4">
              <div>
                <span className="inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-signal-ok/10 text-signal-ok border border-signal-ok/30 uppercase tracking-wider font-semibold">
                  02 · Check
                </span>
                <h3 className="font-display text-2xl text-foreground mt-3 mb-2">
                  Review the information
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  The workflow reads receipt details, suggests a category and flags possible duplicates or missing information.
                </p>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 border-border/80 flex flex-col justify-between space-y-4">
              <div>
                <span className="inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase tracking-wider font-semibold">
                  03 · Decide
                </span>
                <h3 className="font-display text-2xl text-foreground mt-3 mb-2">
                  Route for approval
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Claims that need judgment go to a manager. The system records the outcome and sends a status update.
                </p>
              </div>
            </div>
          </div>

          {/* Live Action Strip: Direct Links & Sandbox Credentials */}
          <div className="glass rounded-2xl p-5 sm:p-6 border border-primary/30 bg-primary/[0.02] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://expense-ai-pro-14.lovable.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
              >
                <span>Launch ExpenseIQ Live</span>
                <ExternalLink className="size-3.5" />
              </a>

              <a
                href="/capstone/ExpenseIQ project.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium glass border-border hover:border-primary/40 text-foreground transition-colors"
              >
                <FileText className="size-3.5 text-primary" />
                <span>Capstone Documentation (38 Pages)</span>
              </a>

              <a
                href="/capstone/ExpenseIQ_Presentation.pptx"
                download
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium glass border-border hover:border-primary/40 text-foreground transition-colors"
              >
                <Presentation className="size-3.5 text-primary" />
                <span>Slide Deck (PPTX)</span>
              </a>
            </div>

            <button
              onClick={() => setShowSandboxAccess(!showSandboxAccess)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline cursor-pointer ml-auto"
            >
              <KeyRound className="size-3.5" />
              <span>{showSandboxAccess ? "Hide Demo Credentials" : "View Manager Test Credentials"}</span>
            </button>
          </div>

          {/* Collapsible Sandbox Credentials Panel */}
          {showSandboxAccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-2xl glass border border-primary/40 bg-background/90 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-primary font-bold">Manager Sandbox Login</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-signal-ok/10 text-signal-ok border border-signal-ok/30">
                  Manager Role
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-secondary/60 border border-border">
                  <span>Email: <strong className="text-foreground">manager@test.com</strong></span>
                  <button onClick={() => copyCredentials('manager@test.com', 'user')} className="p-1 hover:text-primary">
                    {copiedUser ? <Check className="size-3.5 text-signal-ok" /> : <Copy className="size-3.5" />}
                  </button>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-secondary/60 border border-border">
                  <span>Password: <strong className="text-foreground">test@1234</strong></span>
                  <button onClick={() => copyCredentials('test@1234', 'pass')} className="p-1 hover:text-primary">
                    {copiedPass ? <Check className="size-3.5 text-signal-ok" /> : <Copy className="size-3.5" />}
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          <p className="text-xs text-muted-foreground italic">
            Tools used: Make.com, n8n, Supabase/PostgreSQL and AI services. These are implementation details; the project outcome is a clearer review process.
          </p>
        </section>

        {/* Other Examples Section */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
                <Zap className="size-3.5" />
                <span>Other examples</span>
              </div>
              <h2 className="font-display text-3xl text-foreground mt-1">
                Automation for research and telecom response.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              The same approach can reduce repetitive work in different settings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="glass rounded-3xl p-6 border-border/80 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary text-muted-foreground uppercase tracking-wider">
                  Research workflow
                </span>
                <h3 className="font-display text-xl text-foreground mt-3 mb-2">
                  Find, summarize and file articles
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  A link is collected, summarized and saved to a shared knowledge folder for later use.
                </p>
              </div>
              <a href={`mailto:${profile.email}?subject=Inquiry:%20Research%20Workflow`} className="text-xs font-mono text-primary hover:underline mt-auto">
                Ask about this project ↗
              </a>
            </div>

            <div className="glass rounded-3xl p-6 border-border/80 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-signal-ok/10 text-signal-ok border border-signal-ok/30 uppercase tracking-wider">
                  Telecom operations
                </span>
                <h3 className="font-display text-xl text-foreground mt-3 mb-2">
                  Route outage alerts to the right team
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  A proposed workflow reads incoming alarms, identifies the affected site and sends an escalation to the relevant response team.
                </p>
              </div>
              <a href="/telecom" className="text-xs font-mono text-signal-ok hover:underline mt-auto">
                See telecom experience ↗
              </a>
            </div>

            <div className="glass rounded-3xl p-6 border-border/80 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/30 uppercase tracking-wider">
                  Design principle
                </span>
                <h3 className="font-display text-xl text-foreground mt-3 mb-2">
                  Use automation where it helps
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Automate the predictable steps. Make exceptions visible. Keep a person responsible for approvals and consequential decisions.
                </p>
              </div>
              <a href={`mailto:${profile.email}?subject=Inquiry:%20Automation%20Principles`} className="text-xs font-mono text-primary hover:underline mt-auto">
                Start a conversation ↗
              </a>
            </div>
          </div>
        </section>

        {/* Clean Callout at Bottom */}
        <div className="glass rounded-3xl p-7 sm:p-8 border border-primary/30 bg-primary/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="space-y-1">
            <h3 className="font-display text-2xl text-foreground">Need a repetitive process to run more smoothly?</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Let’s discuss the steps, handoffs and decisions involved.</p>
          </div>
          <a
            href={`mailto:${profile.email}?subject=Inquiry:%20Process%20Improvement`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm shrink-0"
          >
            <span>Get in touch ↗</span>
          </a>
        </div>

        {/* Footer Linkage */}
        <div className="pt-8 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
          <HubBackLink />
          <span>Automation portfolio · Toluwanimi Akinyemi</span>
          <a href="/telecom" className="hover:text-primary transition-colors">Next: Telecom ↗</a>
        </div>

      </div>

      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
};
