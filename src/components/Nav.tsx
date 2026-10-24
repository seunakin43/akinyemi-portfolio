import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Menu, 
  Keyboard, 
  Cloud, 
  Cpu, 
  TowerControl, 
  BarChart3,
  ArrowUpRight, 
  ChevronRight, 
  Layers, 
  FileDown, 
  ShieldCheck, 
  Radio, 
  Sparkles,
  X
} from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { portfolioData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

interface NavProps {
  onOpenHotkeyModal?: () => void;
}

const navItems = [
  { id: "about", label: "About", path: "/#about" },
  { id: "skills", label: "Skills", path: "/#skills" },
  { id: "experience", label: "Experience", path: "/#experience" },
  { id: "credentials", label: "Credentials", path: "/#credentials" },
  { id: "contact", label: "Contact", path: "/#contact" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

const sectionIds = ["top", "about", "skills", "experience", "credentials", "contact"];

export const Nav: React.FC<NavProps> = ({ onOpenHotkeyModal }) => {
  const active = useActiveSection(sectionIds);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hubsDrawerOpen, setHubsDrawerOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const hubs = [
    {
      title: "AI Automation Hub",
      path: "/automation",
      badge: "ACTD Accredited · n8n & Make",
      description: "Autonomous multi-agent pipelines, ExpenseIQ flagship capstone, Supabase RLS, and human-in-the-loop workflows.",
      icon: Cpu,
      color: "text-primary border-primary/30 bg-primary/10"
    },
    {
      title: "Cloud Systems Hub",
      path: "/cloud",
      badge: "SDC Canada #2325689 · Azure",
      description: "Zero-Trust perimeter architecture, Microsoft Entra ID PIM JIT elevation, Azure Bastion zero-public-IP topologies.",
      icon: Cloud,
      color: "text-sky-400 border-sky-500/30 bg-sky-500/10"
    },
    {
      title: "Telecom Ops Hub",
      path: "/telecom",
      badge: "Nov 2022 – Present · 99.8% SLA",
      description: "Pan African Towers 24/7 mission-critical surveillance, Galooli RMS, AMF25 generators, and multi-tenant colocation.",
      icon: TowerControl,
      color: "text-signal-ok border-signal-ok/30 bg-signal-ok/10"
    },
    {
      title: "Data Analytics & BI Hub",
      path: "/analytics",
      badge: "Tableau · Power BI · 100k+ Records",
      description: "Tableau Washington EV fleet dashboard (.twb), Power BI BTC-USD predictive forecasting, and 100,000+ civic records governance.",
      icon: BarChart3,
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10"
    }
  ];

  const defaultHub = (import.meta.env.VITE_DEFAULT_HUB || '').toLowerCase().trim();
  const isStandaloneHub = defaultHub !== '';

  const getHubBrand = () => {
    switch (defaultHub) {
      case 'automation':
      case 'capstone':
        return 'T. Akinyemi · AI Automation';
      case 'analytics':
      case 'data':
        return 'T. Akinyemi · Data Analytics';
      case 'cloud':
        return 'T. Akinyemi · Cloud Architecture';
      case 'telecom':
      case 'noc':
        return 'T. Akinyemi · Telecom NOC Ops';
      default:
        return 'T. Akinyemi';
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        
        {/* Left Section: Collapsible Hubs Drawer Button + Brand */}
        <div className="flex items-center gap-3">
          
          {/* Collapsible Left Drawer Trigger for Standalone Hubs (Shown on Main Site Only) */}
          {!isStandaloneHub && (
            <Sheet open={hubsDrawerOpen} onOpenChange={setHubsDrawerOpen}>
              <SheetTrigger asChild>
                <button
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 transition-all cursor-pointer group"
                  title="Open Standalone Specialized Portfolios"
                >
                  <Layers className="size-3.5 group-hover:rotate-12 transition-transform" />
                  <span className="font-semibold hidden sm:inline">Specialized Hubs</span>
                  <span className="font-semibold sm:hidden">Hubs</span>
                  <span className="text-[10px] bg-primary text-primary-foreground px-1.5 py-0.2 rounded-full font-bold">4</span>
                </button>
              </SheetTrigger>
              
              <SheetContent side="left" className="w-[88vw] sm:w-[420px] border-border bg-background/95 backdrop-blur-xl p-6 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider">
                        <Layers className="size-3.5" />
                        <span>Dedicated Portfolios</span>
                      </div>
                    </div>
                    
                    <SheetTitle className="font-display text-2xl sm:text-3xl text-foreground mt-3">
                      Specialized Standalone Hubs
                    </SheetTitle>
                    <SheetDescription className="text-xs sm:text-sm text-muted-foreground mt-1">
                      Direct, self-contained portfolios for specific technical disciplines. Share directly with recruiters without cross-domain noise.
                    </SheetDescription>
                  </div>

                  {/* The 4 Standalone Hub Links */}
                  <div className="space-y-3.5">
                    {hubs.map((hub) => {
                      const Icon = hub.icon;
                      const isActive = location.pathname === hub.path;

                      return (
                        <Link
                          key={hub.path}
                          to={hub.path}
                          onClick={() => setHubsDrawerOpen(false)}
                          className={cn(
                            "group block p-4 rounded-2xl border transition-all text-left",
                            isActive
                              ? "border-primary bg-primary/[0.08] shadow-lg shadow-primary/10"
                              : "glass border-border/80 hover:border-primary/50 hover:bg-white/[0.03]"
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono border", hub.color)}>
                              <Icon className="size-3" />
                              {hub.badge}
                            </span>
                            <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                          </div>

                          <h4 className="font-display text-lg text-foreground mt-2 group-hover:text-primary transition-colors">
                            {hub.title}
                          </h4>

                          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                            {hub.description}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Drawer Footer Link to Main Homepage */}
                <div className="pt-6 border-t border-border/60">
                  <Link
                    to="/"
                    onClick={() => setHubsDrawerOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl glass border-border/80 text-foreground font-mono text-xs hover:border-primary/40 transition-colors"
                  >
                    <span>Return to Main Executive Overview</span>
                    <ChevronRight className="size-4 text-primary" />
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          )}

          {/* Brand / Logo */}
          <Link to="/" className="flex items-center gap-2 font-mono text-sm tracking-tight group">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal-ok/60" />
              <span className="relative inline-flex size-2 rounded-full bg-signal-ok" />
            </span>
            <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {getHubBrand()}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation: Simplified, Clean, Not Clumsy */}
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isCurrent = isHomePage && active === item.id;
            return (
              <a
                key={item.id}
                href={item.path}
                className={cn(
                  "relative rounded-md px-3 py-1.5 text-sm transition-colors hover:text-foreground",
                  isCurrent ? "text-foreground font-medium" : "text-muted-foreground"
                )}
              >
                {item.label}
                {isCurrent && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-px h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTAs & Actions */}
        <div className="flex items-center gap-2">
          
          {/* Download Resume Link */}
          <a
            href="/Toluwanimi_Akinyemi_CV.pdf"
            download
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono glass border-border hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all"
            title="Download Updated CV (PDF)"
          >
            <FileDown className="size-3.5 text-primary" />
            <span>CV</span>
          </a>

          {/* Hotkey Guide Trigger */}
          {onOpenHotkeyModal && (
            <button
              onClick={onOpenHotkeyModal}
              className="hidden lg:inline-flex items-center gap-1.5 p-2 rounded-md border border-border/80 bg-secondary/60 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all text-xs font-mono cursor-pointer"
              title="Keyboard Shortcuts Guide [?]"
            >
              <Keyboard className="size-3.5 text-primary" />
              <kbd className="text-[10px] bg-background px-1 py-0.5 rounded border border-border">?</kbd>
            </button>
          )}

          {/* Primary CTA */}
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#contact">Let's talk</a>
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 border-border bg-background p-6 flex flex-col justify-between">
              <div>
                <SheetTitle className="font-display text-2xl text-foreground">Navigation</SheetTitle>
                <SheetDescription className="sr-only">Quick links across the portfolio</SheetDescription>
                
                {/* Mobile Hubs Gateway */}
                <div className="mt-5 space-y-2 pb-5 border-b border-border/60">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    Standalone Technical Portfolios
                  </span>

                  <Link
                    to="/automation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-primary/10 border border-primary/30 text-primary font-mono text-xs"
                  >
                    <span className="flex items-center gap-2">
                      <Cpu className="size-3.5" />
                      <span>AI Automation Hub</span>
                    </span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>

                  <Link
                    to="/cloud"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono text-xs"
                  >
                    <span className="flex items-center gap-2">
                      <Cloud className="size-3.5" />
                      <span>Cloud Systems Hub</span>
                    </span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>

                  <Link
                    to="/telecom"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-signal-ok/10 border border-signal-ok/30 text-signal-ok font-mono text-xs"
                  >
                    <span className="flex items-center gap-2">
                      <TowerControl className="size-3.5" />
                      <span>Telecom Ops Hub</span>
                    </span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>

                  <Link
                    to="/analytics"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs"
                  >
                    <span className="flex items-center gap-2">
                      <BarChart3 className="size-3.5" />
                      <span>Data Analytics & BI Hub</span>
                    </span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>

                <nav aria-label="Mobile" className="mt-4 flex flex-col gap-1">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-4 border-t border-border flex flex-col gap-2">
                <Button asChild className="w-full">
                  <a href={`mailto:${portfolioData.personal.email}`}>Email me directly</a>
                </Button>
                <a
                  href="/Toluwanimi_Akinyemi_CV.pdf"
                  download
                  className="text-center font-mono text-xs text-muted-foreground hover:text-foreground py-1.5 flex items-center justify-center gap-1.5"
                >
                  <FileDown className="size-3.5 text-primary" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
};