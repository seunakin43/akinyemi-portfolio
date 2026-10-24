import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Workflow, ShieldAlert, CheckCircle2, FileText, Send, Calendar, Lock, ExternalLink, ArrowRight } from 'lucide-react';

export const ExpenseIQShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'scenarios' | 'schema' | 'safety' | 'specs'>('scenarios');

  return (
    <section id="expenseiq" className="py-24 bg-slate-900/40 relative border-b border-slate-800/80">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-950 to-indigo-950 border border-cyan-700/50 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Diploma Capstone Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ExpenseIQ — AI Expense Governance System
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Enterprise expense governance engineered for Nigerian SMEs. Combines a modern web UI, Supabase PostgreSQL, OpenRouter LLM OCR, and 3 automated Make.com scenarios.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <span className="text-[11px] font-mono text-cyan-400 uppercase">Primary Database</span>
            <div className="text-lg font-bold text-white flex items-center gap-2">
              <Database className="w-4 h-4 text-cyan-400" />
              <span>Supabase Postgres</span>
            </div>
            <p className="text-xs text-slate-400">Row Level Security (RLS) & centralized source of truth.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <span className="text-[11px] font-mono text-indigo-400 uppercase">Orchestration Layer</span>
            <div className="text-lg font-bold text-white flex items-center gap-2">
              <Workflow className="w-4 h-4 text-indigo-400" />
              <span>Make.com (3 Scenarios)</span>
            </div>
            <p className="text-xs text-slate-400">Automated intake, manager routing & weekly cron rollups.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <span className="text-[11px] font-mono text-purple-400 uppercase">AI OCR & Reasoning</span>
            <div className="text-lg font-bold text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>OpenRouter AI</span>
            </div>
            <p className="text-xs text-slate-400">Category inference, duplicate risk audit & OCR parsing.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <span className="text-[11px] font-mono text-emerald-400 uppercase">Governance Standard</span>
            <div className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-emerald-400" />
              <span>Human-in-the-Loop</span>
            </div>
            <p className="text-xs text-slate-400">Strict AI boundaries: zero automated financial approvals.</p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-2">
          {[
            { id: 'scenarios', label: 'Make.com Automation Scenarios', icon: Workflow },
            { id: 'safety', label: 'AI Role Boundaries & Security', icon: Lock },
            { id: 'schema', label: 'Database & Relational Model', icon: Database },
            { id: 'specs', label: 'Project Control & Documentation', icon: FileText }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
          
          {/* TAB 1: SCENARIOS */}
          {activeTab === 'scenarios' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  The Three Production Make.com Automation Scenarios
                </h3>
                <p className="text-xs text-slate-400">
                  Engineered to eliminate manual handoffs while preserving 100% auditability across the financial lifecycle.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Scenario 1 */}
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                      Scenario 1
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Intake & AI Audit
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-sm">
                    Expense Intake & AI Categorisation
                  </h4>
                  <ul className="text-xs text-slate-400 space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Employee submits invoice via Lovable frontend.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Supabase webhook triggers Make.com scenario.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Google Drive stores durable receipt image files.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>OpenRouter AI generates category, summary, & duplicate risk score.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Manager notified via Gmail if expense exceeds approval threshold.</span>
                    </li>
                  </ul>
                </div>

                {/* Scenario 2 */}
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-indigo-950/80 text-indigo-300 border border-indigo-800/50">
                      Scenario 2
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                      <Send className="w-3 h-3 text-cyan-400" />
                      Decision Dispatch
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-sm">
                    Manager Decision & Notification
                  </h4>
                  <ul className="text-xs text-slate-400 space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>Manager reviews submission on role-based dashboard.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>Action recorded: Approved, Rejected, or Clarification Needed.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>Supabase status updated with reviewer timestamp & comments.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>Personalized transactional email dispatched to employee.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>Expense record automatically mirrored to Airtable audit base.</span>
                    </li>
                  </ul>
                </div>

                {/* Scenario 3 */}
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-purple-950/80 text-purple-300 border border-purple-800/50">
                      Scenario 3
                    </span>
                    <span className="text-[10px] font-mono text-purple-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-purple-400" />
                      Scheduled Cron
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-sm">
                    Executive Weekly Summary Report
                  </h4>
                  <ul className="text-xs text-slate-400 space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>Runs weekly scheduled cron job every Monday morning.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>Queries Supabase for all processed NGN disbursements.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>Aggregates spend by department, category, and approval state.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>Populates executive spreadsheet in Google Sheets.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>Sends summary digest to finance directors and executives.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 2: AI SAFETY BOUNDARIES */}
          {activeTab === 'safety' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  AI Role Boundaries & Architectural Guardrails
                </h3>
                <p className="text-xs text-slate-400">
                  Core safety principles implemented in ExpenseIQ to prevent autonomous financial risk.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-800/40 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Permitted AI Capabilities</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                    <li>Suggesting fixed expense categories and subcategories based on receipt text.</li>
                    <li>Generating standardized plain-language expense summaries.</li>
                    <li>Flagging duplicate submission risks across existing invoice reference numbers.</li>
                    <li>Formatting draft reviewer notes for human managerial evaluation.</li>
                    <li>Normalizing merchant names and NGN invoice values.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-800/40 space-y-3">
                  <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Strict AI Prohibitions (Hard Guardrails)</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                    <li><strong>No Auto-Approvals:</strong> AI cannot approve, reject, or mark expenses as authorized.</li>
                    <li><strong>No Payment Execution:</strong> AI has zero integration with bank APIs or payout rails.</li>
                    <li><strong>No Threshold Overrides:</strong> AI cannot bypass mandatory managerial authorization tiers.</li>
                    <li><strong>No Tax / Legal Determinations:</strong> AI advice is labeled strictly as non-binding metadata.</li>
                    <li><strong>Full Human Accountability:</strong> A verified user ID is logged for every financial decision.</li>
                  </ul>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 3: SCHEMA */}
          {activeTab === 'schema' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Supabase PostgreSQL Relational Schema Architecture
                </h3>
                <p className="text-xs text-slate-400">
                  Normalized database tables engineered with Row Level Security (RLS) and foreign key referential integrity.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
                
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-cyan-400 font-bold block border-b border-slate-800 pb-1">
                    Table: expenses
                  </span>
                  <div className="space-y-1 text-slate-400">
                    <p className="text-white">id: uuid (PK)</p>
                    <p>employee_id: uuid (FK)</p>
                    <p>amount: numeric (NGN)</p>
                    <p>merchant_name: text</p>
                    <p>receipt_url: text</p>
                    <p>status: enum (pending, approved, rejected)</p>
                    <p>ai_category_suggestion: text</p>
                    <p>ai_duplicate_risk: boolean</p>
                    <p>created_at: timestamptz</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-indigo-400 font-bold block border-b border-slate-800 pb-1">
                    Table: approvals
                  </span>
                  <div className="space-y-1 text-slate-400">
                    <p className="text-white">id: uuid (PK)</p>
                    <p>expense_id: uuid (FK)</p>
                    <p>manager_id: uuid (FK)</p>
                    <p>decision: enum</p>
                    <p>reviewer_notes: text</p>
                    <p>decided_at: timestamptz</p>
                    <p>audit_hash: text</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-purple-400 font-bold block border-b border-slate-800 pb-1">
                    Table: audit_logs
                  </span>
                  <div className="space-y-1 text-slate-400">
                    <p className="text-white">id: uuid (PK)</p>
                    <p>target_record: uuid</p>
                    <p>action: text</p>
                    <p>actor_ip: inet</p>
                    <p>actor_role: text</p>
                    <p>airtable_synced: boolean</p>
                    <p>timestamp: timestamptz</p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 4: DOCUMENTATION CONTROL */}
          {activeTab === 'specs' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Project Control & Submission Reference
                </h3>
                <p className="text-xs text-slate-400">
                  Verified submission documentation for the Utiva AI Automation Diploma Capstone.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 font-mono block">Project Title</span>
                  <span className="text-white font-semibold">ExpenseIQ System</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono block">Author / Engineer</span>
                  <span className="text-cyan-300 font-semibold">Toluwanimi Akinyemi</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono block">Diploma Program</span>
                  <span className="text-white font-semibold">Utiva AI Automation</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono block">Lead Instructor</span>
                  <span className="text-white font-semibold">Ogbu Princewill</span>
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};
