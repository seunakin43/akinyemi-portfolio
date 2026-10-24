import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'system.init',
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-cyan-400 font-bold">
            🚀 Toluwanimi Akinyemi — Telemetry & Automation Agent CLI [v2.4]
          </p>
          <p className="text-slate-400 text-xs">
            Type <span className="text-emerald-400 font-mono">help</span> or click the suggested chips below to query the live candidate profile.
          </p>
        </div>
      )
    }
  ]);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-cyan-300 font-semibold">Available Commands:</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-300">
              <p><span className="text-emerald-400 font-bold">skills</span> - Inspect full-spectrum technical toolkit</p>
              <p><span className="text-emerald-400 font-bold">metrics</span> - View 789+ node & 99.8% SLA telemetry</p>
              <p><span className="text-emerald-400 font-bold">expenseiq</span> - Print Capstone architecture specs</p>
              <p><span className="text-emerald-400 font-bold">rca</span> - Display Root Cause Analysis methodology</p>
              <p><span className="text-emerald-400 font-bold">experience</span> - Summary of 6 years career trajectory</p>
              <p><span className="text-emerald-400 font-bold">certifications</span> - Diploma in AI & cloud credentials</p>
              <p><span className="text-emerald-400 font-bold">contact</span> - Phone, email & LinkedIn coordinates</p>
              <p><span className="text-emerald-400 font-bold">clear</span> - Clear terminal session logs</p>
            </div>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-cyan-400 font-bold">Telemetry, Automation & Data Stack:</p>
            <div className="space-y-1 text-slate-300">
              <p><span className="text-slate-400">[NOC]</span> Galooli RMS, OWS Dashboards, Root Cause Analysis, Fault Management, SLA Audits</p>
              <p><span className="text-slate-400">[AI/Auto]</span> n8n Agents, Make.com, Claude CLI, OpenRouter, Gemini API, OpenAI, Prompt Architecture</p>
              <p><span className="text-slate-400">[Data/BI]</span> Power BI (DAX), SQL, Excel Analysis ToolPak, Tableau, Data Governance</p>
              <p><span className="text-slate-400">[Database]</span> PostgreSQL, Supabase, MySQL, SQLite, Airtable Relational Models</p>
              <p><span className="text-slate-400">[Cloud]</span> M365 Admin, Active Directory, Windows Server, Linux (Ubuntu), GCP, AWS</p>
            </div>
          </div>
        );
        break;

      case 'metrics':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-emerald-300">
            <p className="font-bold text-white">Live Performance Telemetry:</p>
            <p>• Network Scope: <span className="font-bold">789+ Network Nodes</span> monitored in real time across Nigeria</p>
            <p>• Sustained SLA: <span className="font-bold">99.8% Uptime Compliance</span> across nationwide cell towers</p>
            <p>• MTTR Reduction: <span className="font-bold">-30% Mean Time to Repair</span> through standardized RCA templates</p>
            <p>• Operational Efficiency: <span className="font-bold">+40% Boost</span> in fault resolution workflows</p>
            <p>• Data Reliability: <span className="font-bold">100,000+ Records Governed</span> with +18% accuracy gain</p>
          </div>
        );
        break;

      case 'expenseiq':
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono text-slate-300">
            <p className="font-bold text-cyan-400">ExpenseIQ System Architecture [Utiva Capstone]:</p>
            <p>• Frontend: Lovable (Role-based Employee & Manager Portals)</p>
            <p>• Primary Database: Supabase PostgreSQL (Row Level Security & Source of Truth)</p>
            <p>• Orchestration: Make.com (3 Scenarios: Intake OCR, Manager Approval, Weekly Cron)</p>
            <p>• AI Reasoning Core: OpenRouter LLM (Receipt parsing & duplicate risk scoring)</p>
            <p>• Guardrails: Human-in-the-Loop strict boundaries (Zero automated payout authorization)</p>
          </div>
        );
        break;

      case 'rca':
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono text-slate-300">
            <p className="font-bold text-indigo-400">Standardized Root Cause Analysis (RCA) Framework:</p>
            <p>1. Telemetry Ingestion: Real-time alarm correlation across Galooli RMS & OWS.</p>
            <p>2. Incident Categorization: Grid failure, battery discharge, generator faults, optical fiber cuts.</p>
            <p>3. Regional Template Standardization: Eliminated disparate reporting across Nigerian NOC branches.</p>
            <p>4. Outcome: 30% reduction in MTTR and 25% throughput optimization.</p>
          </div>
        );
        break;

      case 'experience':
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono text-slate-300">
            <p className="font-bold text-white">Career Highlights (6 Combined Years):</p>
            <p>• Pan African Towers Ltd (2022-Present): NOC Operator (789+ nodes, 99.8% SLA)</p>
            <p>• Kimpact Development Initiative (2020-2022): Data Analyst & IT Support (100k+ records)</p>
            <p>• IFEX Express Limited (2020-2022): Logistics / Operations Officer (Fleet turnaround +25%)</p>
            <p>• Leadway Assurance Limited (2018): Financial Risk Analyst (100+ monthly portfolios)</p>
          </div>
        );
        break;

      case 'certifications':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="font-bold text-purple-400">Credentials & Diplomas:</p>
            <p>• Diploma in AI Automation — Utiva [ACTD Credential ID: 34RVXFBKSU73N] (2026)</p>
            <p>• Diploma in Cloud Computing — PluralCode Academy (2025)</p>
            <p>• Cloud Computing — Skill Development Council Canada (2025)</p>
            <p>• Higher Education: PGD Financial Mathematics (UNIOSUN) & B.Sc Mathematics (FUNAAB)</p>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-cyan-300">
            <p className="font-bold text-white">Direct Candidate Coordinates:</p>
            <p>• Email: seun.akin43@gmail.com</p>
            <p>• Phone / WhatsApp: +234 813 589 8224</p>
            <p>• LinkedIn: linkedin.com/in/toluwanimi-akinyemi</p>
            <p>• Location: Lagos, Nigeria (Available for On-site, Hybrid & Remote)</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        outputNode = (
          <p className="text-xs font-mono text-rose-400">
            Command not recognized: &ldquo;{cmdText}&rdquo;. Type <span className="text-white font-bold">help</span> to list valid commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmdText, output: outputNode }]);
    setInputVal('');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-slate-950/95 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col h-[520px]"
        >
          {/* Terminal Title Bar */}
          <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-300 ml-2 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                akinyemi-agent@shell:~$
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyEmail}
                className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-mono flex items-center gap-1"
                title="Copy candidate email"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>
              <button
                onClick={onClose}
                className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Terminal Output Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-xs">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-cyan-400 font-bold">&gt;</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <div className="pl-4 py-1">{item.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick Command Suggestion Chips */}
          <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono">
            <span className="text-slate-500 shrink-0">Quick prompts:</span>
            {['skills', 'metrics', 'expenseiq', 'rca', 'experience', 'certifications', 'contact'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-cyan-950 hover:text-cyan-300 text-slate-300 border border-slate-700/60 transition-colors shrink-0"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Input Prompt */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-xs font-bold shrink-0">&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleCommand(inputVal);
                }
              }}
              placeholder="Type a command (e.g. skills, metrics, expenseiq, help)..."
              className="flex-1 bg-transparent border-none text-white text-xs font-mono focus:outline-none placeholder-slate-500"
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="p-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white shrink-0"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
