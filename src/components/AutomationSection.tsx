import React, { useState } from "react";
import { 
  ArrowUpRight, 
  ArrowRight, 
  FileText, 
  Cpu, 
  ChevronRight,
  KeyRound,
  Copy,
  Check,
  Lock,
  Unlock,
  ShieldCheck,
  X
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface AutomationCard {
  title: string;
  tag: string;
  outcome: string;
  body: string;
  flow: { label: string; note: string }[];
  branches: string[];
  href?: string;
  pdfFile?: string;
  live?: boolean;
}

const automations: AutomationCard[] = [
  {
    title: "ExpenseIQ AI Expense Governance System",
    tag: "Live App · Lovable · Supabase · Make.com (3 Scenarios)",
    outcome: "A live, fully automated enterprise expense management app, deployed and running for Nigerian SMEs.",
    body: "Built and deployed ExpenseIQ as a working production product. Features receipt OCR extraction, OpenRouter AI categorization, duplicate risk auditing, and 3 Make.com automation scenarios with Row Level Security in Supabase PostgreSQL.",
    flow: [
      { label: "Receipt uploaded", note: "Employee submits via web" },
      { label: "OpenRouter OCR", note: "AI infers category & tax" },
      { label: "Supabase insert", note: "Stored with RLS policies" },
      { label: "Manager review", note: "1-click transactional email" },
      { label: "Weekly sync", note: "Airtable & Sheets rollup" },
    ],
    branches: ["Scenario 1: Receipt Intake", "Scenario 2: Decision Dispatch", "Scenario 3: Weekly Summary"],
    href: "https://expense-ai-pro-14.lovable.app/login",
    pdfFile: "/capstone/ExpenseIQ project.pdf",
    live: true,
  },
  {
    title: "Multi-Track Lead Routing Automation",
    tag: "Make.com · Airtable · Dynamic Routers",
    outcome: "Every incoming student inquiry is captured, categorized by tech track, and confirmed in sub-60 seconds.",
    body: "Engineered for an academy with four curriculum tracks: AI Automation, Cloud Computing, Cyber Security, and Web Development. Make.com ingests incoming form webhooks, routes them through conditional schema branches into dedicated Airtable tables, and triggers personalized curriculum emails.",
    flow: [
      { label: "Intake form", note: "Prospect webhook received" },
      { label: "Make engine", note: "Validates applicant data" },
      { label: "Category router", note: "Branches by curriculum track" },
      { label: "Airtable sync", note: "Updates track records" },
      { label: "Instant email", note: "Course syllabus delivered" },
    ],
    branches: ["AI Automation", "Cloud Computing", "Cyber Security", "Web Development"],
  },
  {
    title: "Autonomous Approval & RAG AI Agent",
    tag: "n8n · OpenRouter (Gemini 2.0 Flash) · PostgreSQL Memory",
    outcome: "An autonomous agent that evaluates policy thresholds, retains 5-turn session memory, and queries dynamic RSS feeds.",
    body: "Built an autonomous expense triage agent in n8n. Clears mundane micro-expenses under ₦12,000 autonomously, while routing complex claims to managers. Features persistent Postgres Chat Memory (`n8n_chat_histories`) and live external RSS intelligence feeds.",
    flow: [
      { label: "Chat trigger", note: "User prompt / claim in" },
      { label: "Agent reasoning", note: "OpenRouter model evaluation" },
      { label: "Postgres memory", note: "Persistent 5-turn history" },
      { label: "Tool execution", note: "RSS feeds & policy checks" },
      { label: "Autonomous action", note: "Auto-approve or escalate" },
    ],
    branches: ["Auto-Approval (<₦12k)", "Manager Escalation", "RSS Intelligence Feed"],
    pdfFile: "/capstone/Building_AI_Agent_ExpenseIQ_Week10.pdf",
  },
  {
    title: "Telecom NOC Site-Down Escalation Automation",
    tag: "OWS Monitoring · Regex Parser · OM DB · Teams & WhatsApp",
    outcome: "Cuts site-down notification lead time from 15–20 minutes to under 30 seconds across 789+ tower sites.",
    body: "Operational blueprint automating repetitive alarm processing for telecommunication NOC operators. Ingests raw OWS telemetry alarm feeds, extracts Site IDs and severity levels via regex algorithms, queries regional on-call engineering rosters, and triggers automated multi-channel escalation.",
    flow: [
      { label: "OWS alarm alert", note: "Critical site down event" },
      { label: "AI regex parser", note: "Extracts Site ID & outage" },
      { label: "OM database query", note: "Identifies on-call engineer" },
      { label: "Multi-channel ping", note: "Teams & WhatsApp dispatch" },
      { label: "Escalation loop", note: "Monitors acknowledgment" },
    ],
    branches: ["Regional Supervisor", "Field Engineer SMS", "Teams Incident Channel"],
    pdfFile: "/capstone/AI Automation Opportunities for a Telecommunication NOC Engineer - Toluwanimi Akinyemi.pdf",
  },
];

function Flow({ project }: { project: AutomationCard }) {
  return (
    <Stagger as="ol" gap={0.06} className="mt-8 flex flex-col items-stretch gap-2 lg:flex-row lg:items-center lg:gap-1.5">
      {project.flow.map((step, i) => (
        <StaggerItem as="li" key={step.label} className="flex flex-col items-stretch gap-2 lg:flex-1 lg:flex-row lg:items-center lg:gap-1.5">
          <div className="glass-lift flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
            <p className="font-mono text-xs font-medium text-foreground">{step.label}</p>
            <p className="mt-0.5 text-[11px] text-muted-foreground">{step.note}</p>
          </div>
          {i < project.flow.length - 1 && (
            <div aria-hidden="true" className="hidden lg:grid size-6 place-items-center text-muted-foreground/40 shrink-0">
              <ChevronRight className="size-4" />
            </div>
          )}
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export const AutomationSection: React.FC = () => {
  const [showDemoAccess, setShowDemoAccess] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [copiedUser, setCopiedUser] = useState(false);
  const [copiedPass, setCopiedPass] = useState(false);

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

  return (
    <section id="automation" className="border-t border-border/60 py-20 sm:py-28 relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">Enterprise Workflows & Systems</p>
            <h2 className="section-title mt-3 max-w-2xl">
              Automations I've built, <em className="text-primary italic">end to end</em>.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              Every workflow combines strict human-in-the-loop safety boundaries, persistent database state, and end-to-end telemetry.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Button asChild size="lg" className="shrink-0">
              <Link to="/automation">
                <Cpu className="size-4" />
                <span>Enter Automation Subweb</span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        {/* Project Cards List */}
        <div className="mt-12 space-y-6">
          {automations.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <article className={cn("glass glass-lift rounded-3xl p-6 sm:p-9 relative", p.live && "glass-featured")}>
                
                {p.live && (
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <p className="inline-flex items-center gap-2 rounded-full border border-signal-ok/40 bg-signal-ok/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-signal-ok">
                      <span className="size-1.5 animate-blink rounded-full bg-signal-ok" aria-hidden="true" />
                      Live Deployed App
                    </p>

                    <button
                      type="button"
                      onClick={() => setShowDemoAccess(!showDemoAccess)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium glass border-primary/30 text-primary hover:bg-primary/10 transition-colors cursor-pointer"
                    >
                      <KeyRound className="size-3.5" />
                      <span>{showDemoAccess ? "Hide Manager Demo Access" : "Show Manager Demo Access"}</span>
                    </button>
                  </div>
                )}

                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="font-display text-2xl sm:text-4xl text-foreground">{p.title}</h3>
                  <p className="font-mono text-xs text-muted-foreground">{p.tag}</p>
                </div>

                <p className="mt-4 max-w-3xl text-base sm:text-lg text-foreground text-pretty leading-relaxed">
                  {p.outcome}
                </p>

                <p className="mt-2.5 max-w-3xl text-sm sm:text-base text-muted-foreground text-pretty leading-relaxed">
                  {p.body}
                </p>

                {/* Interactive ExpenseIQ Demo Credentials Access Box */}
                {p.live && showDemoAccess && (
                  <div className="mt-6 p-5 sm:p-6 rounded-2xl glass border border-primary/30 bg-primary/[0.04] space-y-4 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="size-5 text-primary" />
                        <h4 className="font-display text-lg text-foreground font-semibold">
                          ExpenseIQ Manager Sandbox Authorization
                        </h4>
                      </div>
                      <button
                        onClick={() => setShowDemoAccess(false)}
                        className="text-muted-foreground hover:text-foreground p-1"
                      >
                        <X className="size-4" />
                      </button>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      To safeguard live data, ExpenseIQ employs role-based managerial boundaries. Request and approve access below to retrieve test sandbox credentials for manager review, AI audit recommendations, and one-click approvals.
                    </p>

                    {!isApproved ? (
                      <div className="p-4 rounded-xl bg-background/60 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                          <Lock className="size-4 text-primary" />
                          <span>Status: Manager credentials encrypted. Approval required.</span>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => setIsApproved(true)}
                          className="font-mono text-xs cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                          <Unlock className="size-3.5 mr-1" />
                          <span>Approve Access & Reveal Credentials</span>
                        </Button>
                      </div>
                    ) : (
                      <div className="p-4 rounded-xl bg-background/80 border border-primary/40 space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono text-signal-ok">
                          <span className="flex items-center gap-1.5 font-bold">
                            <Check className="size-4" /> Access Approved (Finance Director Sandbox)
                          </span>
                          <button
                            onClick={() => setIsApproved(false)}
                            className="text-muted-foreground hover:text-foreground text-[11px] underline"
                          >
                            Reset Lock
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                          {/* Username */}
                          <div className="p-3 rounded-lg bg-secondary/50 border border-border flex items-center justify-between">
                            <div>
                              <span className="block font-mono text-[10px] uppercase text-muted-foreground">Username / Email</span>
                              <span className="font-mono text-xs font-bold text-foreground">manager@test.com</span>
                            </div>
                            <button
                              onClick={() => copyToClipboard("manager@test.com", "user")}
                              className="p-1.5 rounded bg-background hover:bg-accent text-primary border border-border text-xs flex items-center gap-1 transition-colors cursor-pointer"
                              title="Copy email"
                            >
                              {copiedUser ? <Check className="size-3.5 text-signal-ok" /> : <Copy className="size-3.5" />}
                              <span className="text-[10px] font-mono">{copiedUser ? "Copied" : "Copy"}</span>
                            </button>
                          </div>

                          {/* Password */}
                          <div className="p-3 rounded-lg bg-secondary/50 border border-border flex items-center justify-between">
                            <div>
                              <span className="block font-mono text-[10px] uppercase text-muted-foreground">Password</span>
                              <span className="font-mono text-xs font-bold text-foreground">test@1234</span>
                            </div>
                            <button
                              onClick={() => copyToClipboard("test@1234", "pass")}
                              className="p-1.5 rounded bg-background hover:bg-accent text-primary border border-border text-xs flex items-center gap-1 transition-colors cursor-pointer"
                              title="Copy password"
                            >
                              {copiedPass ? <Check className="size-3.5 text-signal-ok" /> : <Copy className="size-3.5" />}
                              <span className="text-[10px] font-mono">{copiedPass ? "Copied" : "Copy"}</span>
                            </button>
                          </div>
                        </div>

                        <div className="pt-2 flex items-center justify-between text-xs">
                          <span className="text-muted-foreground font-mono text-[11px]">
                            Permissions: Full receipt review, AI dispute override, transactional audit logs.
                          </span>
                          <a
                            href="https://expense-ai-pro-14.lovable.app/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline font-mono text-xs font-semibold"
                          >
                            <span>Open ExpenseIQ Login</span>
                            <ArrowUpRight className="size-3.5" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Visual Step-by-Step Flow */}
                {p.flow.length > 0 && <Flow project={p} />}

                {/* Action Buttons */}
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  {p.href && (
                    <Button asChild size="lg">
                      <a href={p.href} target="_blank" rel="noopener noreferrer">
                        Open the live app <ArrowUpRight className="size-4" aria-hidden="true" />
                      </a>
                    </Button>
                  )}

                  {p.pdfFile && (
                    <Button asChild size="lg" variant="outline" className="glass border-white/10 bg-transparent text-foreground hover:border-primary/40">
                      <a href={p.pdfFile} target="_blank" rel="noopener noreferrer">
                        <FileText className="size-4 text-primary" />
                        <span>Read Technical PDF</span>
                      </a>
                    </Button>
                  )}

                  <Button asChild size="lg" variant="outline" className="glass border-white/10 bg-transparent text-muted-foreground hover:text-foreground">
                    <Link to="/automation">
                      <span>View All Systems & Data Projects</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>

                {/* Router Branches */}
                {p.branches.length > 0 && (
                  <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
                    <span className="eyebrow mr-1">Workflow Branches</span>
                    {p.branches.map((b) => (
                      <Badge key={b} variant="outline" className="font-mono text-xs border-border/80 bg-secondary/40 text-muted-foreground">
                        {b}
                      </Badge>
                    ))}
                  </div>
                )}

              </article>
            </Reveal>
          ))}
        </div>

        {/* Banner Card leading to the full Automation Subweb */}
        <Reveal delay={0.2} className="mt-10">
          <div className="glass glass-featured rounded-3xl p-7 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="eyebrow text-primary">Full Engineering & Data Analytics Suite</span>
              <h3 className="font-display text-2xl sm:text-3xl text-foreground">
                Automation Systems & Power BI Data Projects
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl">
                Explore the complete technical portfolio including Make.com full canvases, Supabase PostgreSQL RLS tables, Power BI 5-year predictive forecasts, and 789+ nodes telemetry surveillance.
              </p>
            </div>

            <Button asChild size="lg" className="shrink-0">
              <Link to="/automation">
                <span>Explore Automation Hub</span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
