import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, 
  GraduationCap, 
  HandHeart, 
  Languages, 
  FileText, 
  ExternalLink, 
  ShieldCheck, 
  Presentation, 
  BookOpen, 
  Maximize2, 
  X,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { certifications, education, languages, volunteer } from "@/data/content";
import { cn } from "@/lib/utils";

export const Credentials: React.FC = () => {
  const [selectedAcademicModal, setSelectedAcademicModal] = useState<{
    title: string;
    certId: string;
    image: string;
    caption: string;
    signatories: string;
    theme: string;
  } | null>(null);

  return (
    <section id="credentials" className="border-t border-border/60 py-20 sm:py-28 relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Section Title */}
        <Reveal>
          <p className="eyebrow">Academic Foundations & Verified Qualifications</p>
          <h2 className="section-title mt-4 max-w-3xl">
            Trained in AI automation & cloud systems, grounded in <em className="text-primary italic">computational mathematics</em>.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          
          {/* Left Column: Education & Academic Research */}
          <div className="space-y-10">
            
            {/* Higher Education */}
            <Reveal>
              <div className="flex items-center justify-between mb-4">
                <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  <GraduationCap className="size-4 text-primary" aria-hidden="true" /> Higher Education & Academic Research
                </h3>
                <span className="font-mono text-[11px] text-primary">Academic Track</span>
              </div>

              <div className="space-y-4">
                {education.map((e) => (
                  <div key={e.degree} className="glass glass-lift rounded-2xl p-5 sm:p-6 space-y-3">
                    <div>
                      <p className="font-display text-2xl leading-snug text-foreground">{e.degree}</p>
                      <p className="mt-1 font-mono text-xs text-primary font-semibold">
                        {e.school} · {e.place}
                      </p>
                      {e.highlight && (
                        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                          {e.highlight}
                        </p>
                      )}
                    </div>

                    {/* Dedicated Academic Research Block for PGD */}
                    {e.research && (
                      <div className="mt-4 pt-4 border-t border-white/10 space-y-3 bg-primary/[0.04] p-4 rounded-xl border border-primary/20">
                        <div className="flex items-center gap-2">
                          <BookOpen className="size-4 text-primary shrink-0" />
                          <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                            Colloquium Research & Paper Presentation
                          </span>
                        </div>

                        <div>
                          <h4 className="font-display text-base sm:text-lg text-foreground font-medium italic">
                            &ldquo;{e.research.title}&rdquo;
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Presented at the {e.research.forum} ({e.research.date}).
                          </p>
                          <p className="text-[11px] font-mono text-muted-foreground mt-0.5">
                            Theme: &ldquo;{e.research.theme}&rdquo;
                          </p>
                          <p className="text-[11px] font-mono text-primary/80 mt-1">
                            Signatories: {e.research.signatories}
                          </p>
                        </div>

                        {/* Verified Academic Certificate Pills */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          <button
                            type="button"
                            onClick={() => setSelectedAcademicModal({
                              title: "Certificate of Paper Presentation",
                              certId: e.research!.presentationCertId,
                              image: e.research!.presentationCertImg,
                              caption: `Presented paper titled: "${e.research!.title}" at the 31st Annual Colloquium & Congress of NAMP & Osun State University.`,
                              signatories: e.research!.signatories,
                              theme: e.research!.theme
                            })}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium glass border-primary/40 text-primary hover:bg-primary/10 transition-colors cursor-pointer"
                          >
                            <FileText className="size-3.5" />
                            <span>View Paper Presentation Cert ({e.research.presentationCertId})</span>
                            <Maximize2 className="size-3 text-muted-foreground" />
                          </button>

                          <button
                            type="button"
                            onClick={() => setSelectedAcademicModal({
                              title: "Certificate of Participation",
                              certId: e.research!.participationCertId,
                              image: e.research!.participationCertImg,
                              caption: `Official participant certification at the 31st Annual Colloquium and Congress (Virtual) held at Osun State University, Osogbo.`,
                              signatories: e.research!.signatories,
                              theme: e.research!.theme
                            })}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium glass border-white/10 text-foreground hover:bg-white/5 transition-colors cursor-pointer"
                          >
                            <FileText className="size-3.5 text-muted-foreground" />
                            <span>View Participation Cert ({e.research.participationCertId})</span>
                            <Maximize2 className="size-3 text-muted-foreground" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Volunteer Experience */}
            <Reveal>
              <h3 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <HandHeart className="size-4 text-primary" aria-hidden="true" /> Civic & Volunteer Leadership
              </h3>
              <Stagger as="ul" gap={0.07} className="space-y-3">
                {volunteer.map((v) => (
                  <StaggerItem as="li" key={v.role}>
                    <div className="glass glass-lift flex items-start justify-between gap-4 rounded-2xl p-5">
                      <div>
                        <p className="font-medium text-foreground text-sm">{v.role}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {v.detail} · {v.org}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-primary font-semibold shrink-0">{v.year}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>

            {/* Language Proficiency */}
            <Reveal>
              <h3 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <Languages className="size-4 text-primary" aria-hidden="true" /> Language Mastery
              </h3>
              {languages.map((l) => (
                <div key={l.name} className="glass rounded-2xl p-5 flex items-center justify-between">
                  <div>
                    <span className="font-medium text-foreground text-sm">{l.name}</span>
                    <span className="text-muted-foreground text-xs"> · {l.level}</span>
                  </div>
                  <a
                    href="/certificates/Toluwanimi_Akinyemi_IELTS_result.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-primary hover:underline"
                  >
                    <span>IELTS Report (PDF)</span>
                    <ExternalLink className="size-3" />
                  </a>
                </div>
              ))}
            </Reveal>

          </div>

          {/* Right Column: Professional Qualifications & Capstone Decks */}
          <Reveal>
            <div className="flex items-center justify-between mb-4">
              <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <Award className="size-4 text-primary" aria-hidden="true" /> Professional Qualifications & Diplomas
              </h3>
              <span className="font-mono text-[11px] text-muted-foreground">Official Documents</span>
            </div>

            <Stagger as="ul" gap={0.05} className="glass divide-y divide-white/10 overflow-hidden rounded-3xl">
              {certifications.map((c) => (
                <StaggerItem
                  as="li"
                  key={c.title}
                  className={cn("grid grid-cols-[1fr_auto] gap-x-6 gap-y-2 p-5 sm:p-6", c.featured && "bg-primary/[0.08]")}
                >
                  <div>
                    <p className={cn("leading-snug text-foreground", c.featured ? "font-display text-xl sm:text-2xl" : "font-medium text-sm sm:text-base")}>
                      {c.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
                    {c.detail && (
                      <p className="mt-1.5 font-mono text-xs text-primary font-semibold flex items-center gap-1">
                        <ShieldCheck className="size-3.5 shrink-0" />
                        <span>{c.detail}</span>
                      </p>
                    )}

                    {c.pdfUrl && (
                      <a
                        href={c.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-primary hover:underline mt-2.5"
                      >
                        {c.pdfUrl.includes("presentation") || c.pdfUrl.includes("Capstone") ? (
                          <Presentation className="size-3.5" />
                        ) : (
                          <FileText className="size-3.5" />
                        )}
                        <span>
                          {c.pdfUrl.includes("presentation") ? "View Capstone Presentation (PDF)" : "View Verified Certificate (PDF)"}
                        </span>
                        <ExternalLink className="size-2.5" />
                      </a>
                    )}
                  </div>

                  <span className="font-mono text-xs text-muted-foreground shrink-0">{c.year}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

        </div>

      </div>

      {/* High-Resolution Academic Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedAcademicModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAcademicModal(null)}
              className="fixed inset-0 bg-background/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl bg-card border border-border rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]"
            >
              <div className="p-4 sm:p-5 bg-background border-b border-border flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">Osun State University & NAMP</span>
                    <span className="text-xs font-mono text-muted-foreground">ID: {selectedAcademicModal.certId}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display text-foreground mt-0.5">
                    {selectedAcademicModal.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedAcademicModal(null)}
                  className="p-2 rounded-xl bg-secondary hover:bg-accent text-muted-foreground hover:text-foreground transition-colors cursor-pointer shrink-0"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="p-4 sm:p-6 overflow-y-auto bg-black/60 flex flex-col items-center justify-center">
                <div className="rounded-2xl overflow-hidden border border-border shadow-2xl max-w-full">
                  <img
                    src={selectedAcademicModal.image}
                    alt={selectedAcademicModal.title}
                    className="max-h-[62vh] w-auto object-contain rounded-xl"
                  />
                </div>

                <div className="mt-4 p-4 rounded-xl glass text-xs sm:text-sm text-foreground max-w-2xl w-full leading-relaxed space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-primary font-semibold">
                    <CheckCircle2 className="size-4" />
                    <span>Academic Peer-Review & Congress Record</span>
                  </div>
                  <p className="text-muted-foreground">{selectedAcademicModal.caption}</p>
                  <div className="pt-2 border-t border-white/5 flex flex-wrap justify-between gap-2 text-[11px] font-mono text-muted-foreground">
                    <span>Theme: {selectedAcademicModal.theme}</span>
                    <span className="text-primary">{selectedAcademicModal.signatories}</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 bg-background border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>Asset: {selectedAcademicModal.image.split("/").pop()}</span>
                <a
                  href={selectedAcademicModal.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary hover:underline transition-colors"
                >
                  <span>Open Full Resolution Image</span>
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
