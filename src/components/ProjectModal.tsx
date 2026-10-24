import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  CheckCircle, 
  ShieldCheck, 
  Layers, 
  GitBranch, 
  Target, 
  FileText, 
  Presentation, 
  ExternalLink,
  Image as ImageIcon,
  Maximize2,
  KeyRound,
  Copy,
  Check,
  Unlock,
  Download
} from 'lucide-react';

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState<number>(0);
  const [isApproved, setIsApproved] = useState<boolean>(false);
  const [copiedUser, setCopiedUser] = useState<boolean>(false);
  const [copiedPass, setCopiedPass] = useState<boolean>(false);

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

  if (!project) return null;

  const screenshots = project.screenshots || [];
  const currentScreenshot = screenshots[selectedScreenshotIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-6 z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-slate-800 bg-slate-950/80 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-700/50">
                  {project.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {project.pageCount ? `${project.pageCount} Pages • Technical Documentation` : 'Production System'}
                </span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-cyan-400 mt-1 font-mono">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/85 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-7 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed">
            
            {/* Tech Tags & Direct PDF / App links */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies?.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-lg text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {project.pdfFile && (
                  <a
                    href={project.pdfFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-950 border border-cyan-800 text-cyan-300 hover:bg-cyan-900 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Report PDF</span>
                  </a>
                )}
                {project.presentationFile && (
                  <a
                    href={project.presentationFile}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-950 border border-indigo-800 text-indigo-300 hover:bg-indigo-900 transition-colors"
                  >
                    <Presentation className="w-3.5 h-3.5" />
                    <span>Slide Deck PPTX</span>
                  </a>
                )}
                {project.fileDownload && (
                  <a
                    href={project.fileDownload.url}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-950 border border-amber-800 text-amber-300 hover:bg-amber-900 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{project.fileDownload.label}</span>
                  </a>
                )}
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-950 border border-emerald-800 text-emerald-300 hover:bg-emerald-900 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live App</span>
                  </a>
                )}
              </div>
            </div>

            {/* Interactive Demo Credentials Box (If Available) */}
            {project.demoCredentials && (
              <div className="p-4 sm:p-5 rounded-2xl bg-cyan-950/20 border border-cyan-800/60 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                    <KeyRound className="size-4 text-cyan-400" />
                    <span>Live Portal Sandbox Access</span>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-700/50">
                    Role: {project.demoCredentials.role}
                  </span>
                </div>
                
                <p className="text-xs text-slate-300">
                  Pre-configured manager credentials for the live ExpenseIQ web app. Click to request and approve instant sandbox credentials:
                </p>

                {!isApproved ? (
                  <button
                    onClick={() => setIsApproved(true)}
                    className="w-full py-2.5 px-4 rounded-xl font-mono text-xs bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all"
                  >
                    <Unlock className="size-3.5" />
                    <span>Request & Approve Sandbox Credentials</span>
                  </button>
                ) : (
                  <div className="space-y-2 pt-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/90 border border-slate-800 font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500">Email:</span>
                          <span className="text-white font-semibold">{project.demoCredentials.username}</span>
                        </div>
                        <button
                          onClick={() => copyToClipboard(project.demoCredentials.username, 'user')}
                          className="p-1 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                          title="Copy Email"
                        >
                          {copiedUser ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/90 border border-slate-800 font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500">Password:</span>
                          <span className="text-white font-semibold">{project.demoCredentials.password}</span>
                        </div>
                        <button
                          onClick={() => copyToClipboard(project.demoCredentials.password, 'pass')}
                          className="p-1 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                          title="Copy Password"
                        >
                          {copiedPass ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-emerald-400 pt-1">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle className="size-3.5" /> Sandbox Credentials Approved
                      </span>
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                        >
                          Launch ExpenseIQ Portal <ExternalLink className="size-3" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Screenshots Gallery Section (If Available) */}
            {screenshots.length > 0 && (
              <div className="space-y-3 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    <ImageIcon className="w-4 h-4" />
                    <span>Production Screenshots & Verified Canvases ({screenshots.length})</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">Click tabs to view</span>
                </div>

                {/* Screenshot Tab Selector */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {screenshots.map((s: any, sIdx: number) => (
                    <button
                      key={sIdx}
                      onClick={() => setSelectedScreenshotIndex(sIdx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all text-left ${
                        selectedScreenshotIndex === sIdx
                          ? 'bg-cyan-950 text-cyan-300 border border-cyan-600 font-semibold'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>

                {/* Active Screenshot Display */}
                {currentScreenshot && (
                  <div className="mt-2 space-y-2">
                    <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 relative group">
                      <img
                        src={currentScreenshot.image}
                        alt={currentScreenshot.title}
                        className="w-full max-h-[380px] object-contain mx-auto"
                      />
                      <a
                        href={currentScreenshot.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-900/90 text-cyan-400 border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Open full resolution in new tab"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-400 font-mono italic">
                      {currentScreenshot.caption}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Problem & Solution */}
            {project.details && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-900/30 space-y-2">
                  <div className="flex items-center gap-2 text-rose-300 font-semibold text-xs uppercase tracking-wider font-mono">
                    <Target className="w-4 h-4 text-rose-400" />
                    <span>The Challenge</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {project.details.problem}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-900/30 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-300 font-semibold text-xs uppercase tracking-wider font-mono">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Engineered Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {project.details.solution}
                  </p>
                </div>
              </div>
            )}

            {/* Architecture Components */}
            {project.architecture && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>System Architecture & Telemetry Flow</span>
                </h4>
                <div className="space-y-2">
                  {project.architecture.map((item: string, idx: number) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3"
                    >
                      <span className="font-mono text-cyan-400 text-xs mt-0.5">0{idx + 1}.</span>
                      <p className="text-xs text-slate-300 font-mono leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Implementation Details */}
            {project.details?.implementation && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-indigo-400" />
                  <span>Key Implementation Steps</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-none">
                  {project.details.implementation.map((step: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Measurable Impact */}
            {project.details?.impact && (
              <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-800/50 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold">
                  Operational & Business Impact
                </h4>
                <p className="text-xs sm:text-sm text-cyan-100/90 leading-relaxed">
                  {project.details.impact}
                </p>
              </div>
            )}

            {/* Key Metrics Strip */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {project.metrics.map((m: string, idx: number) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <span className="text-[11px] font-mono font-semibold text-emerald-400 block">{m}</span>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Footer */}
          <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">
              Toluwanimi Akinyemi • Capstone Architecture Portfolio
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
            >
              Close Details
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
