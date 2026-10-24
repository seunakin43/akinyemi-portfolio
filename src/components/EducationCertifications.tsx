import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle, ShieldCheck, Flag, Globe, ExternalLink, FileText, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="credentials" className="py-20 bg-slate-900/30 relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Verified Certifications
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Rigorous quantitative foundation in pure & applied mathematics paired with internationally accredited credentials in AI automation, cloud computing, and telecommunications operations.
          </p>
        </div>

        {/* Dual Grid: Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Higher Education (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-white font-bold text-lg pb-2 border-b border-slate-800">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>Higher University Degrees</span>
            </div>

            <div className="space-y-4">
              {portfolioData.education.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all space-y-3 group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                        Higher Degree
                      </span>
                      <span className="text-xs font-mono text-slate-400">{edu.location}</span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h4>

                    <p className="text-xs font-semibold text-slate-300 font-mono">
                      {edu.institution}
                    </p>

                    <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-2.5">
                      {edu.highlight}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Language Proficiency Card */}
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-cyan-950/50 text-cyan-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Language Proficiency</h5>
                    <p className="text-[11px] text-slate-400 font-mono">English (C2 Native Fluency / IELTS Certified)</p>
                  </div>
                </div>
                <a
                  href="/certificates/Toluwanimi_Akinyemi_IELTS_result.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/60 hover:bg-emerald-900/60 px-2.5 py-1 rounded border border-emerald-800/40 flex items-center gap-1"
                >
                  <span>IELTS PDF</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Professional Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <Award className="w-5 h-5 text-indigo-400" />
                <span>Certified Qualifications ({portfolioData.certifications.length})</span>
              </div>
              <span className="text-xs font-mono text-slate-400">Verified Documents Attached</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {portfolioData.certifications.map((cert, idx) => {
                const isUtiva = cert.credentialId !== undefined;
                return (
                  <motion.div
                    key={cert.title + idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                      isUtiva
                        ? 'bg-gradient-to-br from-indigo-950/40 via-slate-900/90 to-cyan-950/30 border-cyan-500/50 sm:col-span-2 shadow-lg shadow-cyan-950/30'
                        : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                          {cert.category}
                        </span>
                        <span className="text-[11px] font-mono font-semibold text-cyan-400">
                          {cert.year}
                        </span>
                      </div>

                      <h5 className="font-bold text-white text-xs sm:text-sm mt-2 leading-snug">
                        {cert.title}
                      </h5>

                      <p className="text-xs text-slate-400 font-mono mt-1">
                        {cert.issuer} {cert.accreditation ? `• ${cert.accreditation}` : ''}
                      </p>

                      {cert.credentialId && (
                        <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                          <span className="text-slate-400">Credential ID:</span>
                          <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                            {cert.credentialId}
                          </span>
                        </div>
                      )}
                    </div>

                    {cert.certificatePdf && (
                      <div className="mt-3 pt-2.5 border-t border-slate-800/70 flex items-center justify-end">
                        <a
                          href={cert.certificatePdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:text-white transition-colors"
                        >
                          <FileText className="w-3 h-3" />
                          <span>View Certificate (PDF)</span>
                        </a>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Volunteer & Civic Leadership Section */}
        <div className="pt-8 border-t border-slate-800/80 space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
              Civic Engagement & Public Service
            </span>
            <h3 className="text-xl font-bold text-white">
              Volunteer Leadership & Electoral Oversight
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Applying data governance, field integrity protocols, and process management to national election monitoring and civic non-profit operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioData.volunteerLeadership.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                    <Flag className="w-3 h-3 text-cyan-400" />
                    {item.event}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-bold">{item.year}</span>
                </div>

                <h4 className="font-bold text-white text-sm sm:text-base">
                  {item.role}
                </h4>

                <p className="text-xs font-semibold text-slate-300 font-mono">
                  {item.organization}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
