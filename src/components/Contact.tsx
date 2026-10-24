import React, { useState } from "react";
import { UserRound, Mail, MapPin, Phone, Send, Loader2, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/content";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/seun.akin43@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject || 'New Contact Request'}`,
          subject: formData.subject,
          message: formData.message,
          _template: "table",
          _honey: ""
        })
      });

      const data = await response.json();

      if (response.ok || data.success === "true" || data.success === true) {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.7 }
        });
        setSubmitted(true);
      } else {
        throw new Error(data.message || "Transmission failed.");
      }
    } catch (err: any) {
      console.error("Form error:", err);
      setErrorMessage("Could not send automatically. Please use direct email to seun.akin43@gmail.com below.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const rows = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
    { icon: MapPin, label: "Location", value: profile.location },
    {
      icon: UserRound,
      label: "LinkedIn",
      value: profile.linkedinLabel,
      href: profile.linkedinUrl || undefined,
    },
  ];

  return (
    <section id="contact" className="border-t border-border/60 py-20 sm:py-28 relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        <Reveal>
          <div className="glass glass-featured relative overflow-hidden rounded-3xl p-8 sm:p-14">
            
            {/* Ambient Radial Accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-primary/10 blur-3xl"
            />

            <p className="eyebrow">Contact & Inquiries</p>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] tracking-tight">
              Got a process worth <em className="text-primary italic">automating</em> or cloud to <em className="text-primary italic">secure</em>?
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl text-pretty leading-relaxed">
              Send me your inquiry below or reach out directly. Inquiries arrive straight into my personal inbox at <strong className="text-foreground">{profile.email}</strong>.
            </p>

            {/* Direct Channel Cards */}
            <Stagger as="dl" gap={0.07} className="mt-10 grid gap-4 sm:grid-cols-2">
              {rows.map(({ icon: Icon, label, value, href }) => (
                <StaggerItem key={label}>
                  <div className="glass-lift flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary border border-white/5">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <dt className="eyebrow">{label}</dt>
                      <dd className="break-words font-medium text-sm sm:text-base mt-0.5">
                        {href ? (
                          <a
                            href={href}
                            {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="underline-offset-4 hover:text-primary hover:underline"
                          >
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Inquiry Form */}
            <div className="mt-12 pt-10 border-t border-white/10">
              <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-6">
                Send an Inquiry Directly to My Gmail
              </h3>

              {submitted ? (
                <div className="p-8 rounded-2xl glass border-primary/40 bg-primary/[0.08] text-center space-y-3">
                  <CheckCircle2 className="size-12 text-primary mx-auto" />
                  <h4 className="font-display text-2xl text-foreground">Message Dispatched Successfully</h4>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Thank you! Your inquiry has been sent to <strong>{profile.email}</strong>. I will review and reply promptly.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    variant="outline"
                    className="mt-4 font-mono text-xs"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="size-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="eyebrow block mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl glass border border-white/10 bg-black/40 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="eyebrow block mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl glass border border-white/10 bg-black/40 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="eyebrow block mb-2">Subject / Project Area</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="AI Workflow Automation / Azure Cloud Infrastructure / Role Opportunity"
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 bg-black/40 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="eyebrow block mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you are looking to build, automate, or resolve..."
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 bg-black/40 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Magnetic>
                      <Button type="submit" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="size-4 animate-spin" />
                            <span>Transmitting...</span>
                          </>
                        ) : (
                          <>
                            <Send className="size-4" />
                            <span>Send Inquiry to Gmail</span>
                          </>
                        )}
                      </Button>
                    </Magnetic>

                    <Magnetic>
                      <Button asChild size="lg" variant="outline" className="glass border-white/10 bg-transparent text-foreground hover:border-primary/40">
                        <a href={`mailto:${profile.email}`}>
                          <Mail className="size-4 text-primary" /> Open Mail Client
                        </a>
                      </Button>
                    </Magnetic>
                  </div>
                </form>
              )}
            </div>

          </div>
        </Reveal>

        {/* Footer */}
        <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} {profile.name} · All rights reserved</span>
          <div className="flex items-center gap-4">
            <a href="/Toluwanimi_Akinyemi_CV.pdf" download className="hover:text-foreground">
              Resume (PDF)
            </a>
            <a href="#top" className="hover:text-foreground text-primary">
              Back to top ↑
            </a>
          </div>
        </footer>

      </div>
    </section>
  );
};
