import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cloud, 
  ShieldCheck, 
  Lock, 
  KeyRound, 
  FileText, 
  Maximize2, 
  X, 
  CheckCircle2, 
  Award, 
  Presentation, 
  Share2, 
  Check, 
  Mail,
  ArrowDown,
  ArrowRight
} from "lucide-react";
import { HubBackLink } from "@/components/HubBackLink";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/content";

export const CloudPage: React.FC = () => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<any>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const cloudProjects = [
    {
      id: "azure-bastion",
      title: "Use a managed gateway",
      kicker: "Secure connection",
      badge: "Zero-Trust",
      image: "/media/Screenshot 2024-09-25 180315.png",
      description: "Azure Bastion provides a controlled route to virtual machines, reducing the need to expose remote login ports directly to the internet."
    },
    {
      id: "entra-pim",
      title: "Grant admin access when needed",
      kicker: "Temporary permissions",
      badge: "Identity & PIM",
      image: "/media/Screenshot 2024-09-25 220246.png",
      description: "Microsoft Entra ID Privileged Identity Management supports time-limited role activation with justification and approval controls."
    },
    {
      id: "vnet-nsg",
      title: "Separate systems by role",
      kicker: "Network boundaries",
      badge: "Firewall Rules",
      image: "/media/Screenshot 2024-09-25 220336.png",
      description: "Virtual networks and firewall rules help limit which systems can communicate with one another."
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

        {/* Subhero Section: Human, Clear, Not Text Heavy */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/40 bg-sky-500/10 text-sky-400 text-xs font-mono uppercase tracking-[0.14em]">
              <span className="size-1.5 rounded-full bg-sky-400" />
              <span>Cloud · Supporting capability</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl text-foreground font-normal tracking-tight leading-[1.05]">
              Make cloud access safer and <em className="text-primary italic font-normal">easier to manage.</em>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              My cloud work focuses on reducing unnecessary exposure, controlling who can access systems and making administrative access temporary. This portfolio highlights architecture and training projects.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-mono text-xs font-semibold shadow-md">
                <a href="#projects" className="inline-flex items-center gap-2">
                  See cloud projects <ArrowDown className="size-4" />
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="glass border-white/10 bg-transparent text-foreground hover:border-primary/40 font-mono text-xs">
                <a href={`mailto:${profile.email}?subject=Inquiry:%20Cloud%20Security`} className="inline-flex items-center gap-1.5">
                  Contact me ↗
                </a>
              </Button>
            </div>
          </div>

          {/* Visual Step Box: Private Access to Cloud Systems */}
          <div className="glass rounded-3xl p-6 sm:p-7 border border-sky-500/30 bg-sky-500/[0.03] space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <span className="font-display text-base font-semibold text-foreground">Private access to cloud systems</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30">
                Architecture concept
              </span>
            </div>

            <p className="text-xs text-muted-foreground">
              A person signs in through a controlled route
            </p>

            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-background/80 border border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Confirm identity and role</span>
                <strong className="text-sky-400 font-mono font-semibold">Access check</strong>
              </div>
              <div className="p-3 rounded-xl bg-background/80 border border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Connect through a secure gateway</span>
                <strong className="text-primary font-mono font-semibold">Private route</strong>
              </div>
              <div className="p-3 rounded-xl bg-background/80 border border-sky-500/40 bg-sky-500/[0.04] flex items-center justify-between text-xs">
                <span className="text-foreground font-medium">Grant admin access only when needed</span>
                <strong className="text-sky-400 font-mono font-bold">Time-limited</strong>
              </div>
            </div>

            <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
              This is an architecture example, not a live security monitoring display.
            </div>
          </div>

        </div>

        {/* Metrics Bar */}
        <div className="glass rounded-2xl p-5 sm:p-6 border border-border/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1">
              <b className="font-display text-3xl sm:text-4xl text-primary font-bold block">540 hours</b>
              <span className="text-xs text-muted-foreground font-mono block">Cloud computing diploma</span>
            </div>
            <div className="space-y-1 lg:border-l lg:border-border/60 lg:pl-6">
              <b className="font-display text-3xl sm:text-4xl text-signal-ok font-bold block">Azure</b>
              <span className="text-xs text-muted-foreground font-mono block">Cloud architecture training and projects</span>
            </div>
            <div className="space-y-1 lg:border-l lg:border-border/60 lg:pl-6">
              <b className="font-display text-3xl sm:text-4xl text-foreground font-bold block">Private</b>
              <span className="text-xs text-muted-foreground font-mono block">Limit direct public access to servers</span>
            </div>
            <div className="space-y-1 lg:border-l lg:border-border/60 lg:pl-6">
              <b className="font-display text-3xl sm:text-4xl text-amber-400 font-bold block">As needed</b>
              <span className="text-xs text-muted-foreground font-mono block">Temporary admin permissions</span>
            </div>
          </div>
        </div>

        {/* Selected Architecture Work */}
        <section id="projects" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="size-3.5" />
                <span>Selected architecture work</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-2">
                Simple controls that reduce avoidable access risk.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Cloud security means controlling how people and systems connect, and limiting access to what each role needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cloudProjects.map((p) => (
              <div
                key={p.id}
                className="glass rounded-3xl overflow-hidden flex flex-col justify-between border-border/80 hover:border-sky-500/40 transition-all group"
              >
                <div>
                  <div
                    onClick={() => setSelectedScreenshot(p)}
                    className="relative aspect-[16/10] bg-secondary/80 overflow-hidden cursor-pointer border-b border-border/60"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                    
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono bg-background/85 backdrop-blur-md text-primary border border-border">
                      {p.badge}
                    </span>

                    <span className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-background/85 text-foreground">
                      <Maximize2 className="size-3.5 text-primary" />
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider">
                      {p.kicker}
                    </span>
                    <h3 className="font-display text-xl text-foreground group-hover:text-sky-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-secondary/20 border-t border-border/40 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted-foreground">Azure Deployment</span>
                  <button
                    onClick={() => setSelectedScreenshot(p)}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-sky-400 hover:underline cursor-pointer"
                  >
                    <span>Inspect Architecture →</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Training & Credentials Section */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
                <Award className="size-3.5" />
                <span>Training and credentials</span>
              </div>
              <h2 className="font-display text-3xl text-foreground mt-1">
                Cloud knowledge grounded in structured training.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Completed a 540-hour Cloud Computing diploma with Skill Development Council Canada and PluralCode Ltd.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/certificates/2325689_TOLUWANIMI_TAIWO_AKINYEMI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass border border-primary/30 hover:border-primary/60 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Award className="size-5" />
                </div>
                <div>
                  <strong className="block text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    SDC Canada Cloud Diploma (PDF)
                  </strong>
                  <span className="text-xs font-mono text-muted-foreground">Certificate #2325689 · 540 Hours</span>
                </div>
              </div>
              <span className="text-xs font-mono text-primary font-semibold">View ↗</span>
            </a>

            <a
              href="/presentations/Cloud_Computing_Capstone_Presentation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass border border-white/10 hover:border-primary/40 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-secondary text-primary">
                  <Presentation className="size-5" />
                </div>
                <div>
                  <strong className="block text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    Cloud Capstone Presentation (PDF)
                  </strong>
                  <span className="text-xs font-mono text-muted-foreground">Applied Cloud Architecture Deck</span>
                </div>
              </div>
              <span className="text-xs font-mono text-primary font-semibold">View ↗</span>
            </a>
          </div>
        </section>

        {/* Callout Section */}
        <div className="glass rounded-3xl p-7 sm:p-8 border border-sky-500/30 bg-sky-500/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="space-y-1">
            <h3 className="font-display text-2xl text-foreground">Cloud supports my broader work.</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">It complements automation, telecom operations and analytics as a supporting skill set.</p>
          </div>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm shrink-0"
          >
            <span>Back to main portfolio ↗</span>
          </a>
        </div>

        {/* Footer Linkage */}
        <div className="pt-8 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
          <HubBackLink />
          <span>Cloud &amp; security · Toluwanimi Akinyemi</span>
          <a href="/automation" className="hover:text-primary transition-colors">Next: Automation ↗</a>
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
                  <span className="font-mono text-xs text-primary">{selectedScreenshot.badge} Architecture</span>
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
                    className="max-h-[65vh] w-auto object-contain rounded-xl"
                  />
                </div>
                <p className="mt-3 text-xs sm:text-sm text-muted-foreground text-center max-w-2xl">
                  {selectedScreenshot.description}
                </p>
              </div>

              <div className="p-4 bg-background border-t border-border flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">
                  Microsoft Azure Zero-Trust Evidence
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
