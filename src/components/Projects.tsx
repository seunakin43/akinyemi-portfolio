import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, Brain, TowerControl, BarChart3, CheckCircle, FileText, Database } from 'lucide-react';
import { portfolioData, type CapstoneProject } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<any>(null);

  const categories = [
    'All',
    'Telecom & NOC AI',
    'Financial & Expense AI',
    'n8n & RAG Agents',
    'Marketing Automation'
  ];

  const filteredProjects: CapstoneProject[] = portfolioData.capstoneProjects.filter(
    (p) => selectedFilter === 'All' || p.category === selectedFilter
  );

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Telecom & NOC AI':
        return TowerControl;
      case 'Financial & Expense AI':
        return Database;
      case 'n8n & RAG Agents':
        return Brain;
      case 'Marketing Automation':
        return Layers;
      case 'Financial Analytics':
        return BarChart3;
      default:
        return Layers;
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-950 relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Architecture & Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Production Systems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Real-world telecom telemetry platforms, autonomous AI agent pipelines, and enterprise data models from Toluwanimi&rsquo;s Capstone portfolio.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedFilter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const Icon = getCategoryIcon(project.category);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all group flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-950/20"
              >
                <div className="p-6 sm:p-7 space-y-4">
                  
                  {/* Top bar with category & page count */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
                      <Icon className="w-3.5 h-3.5 text-cyan-400" />
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">
                      {project.pageCount} Pages • Documented
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-cyan-400/90 font-mono mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Architecture Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Architecture Core:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.architecture.slice(0, 3).map((arch, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="font-mono text-[11px] text-slate-300 leading-tight">{arch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card Footer with tech pills & CTA */}
                <div className="p-5 sm:p-6 bg-slate-950/70 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] font-mono text-cyan-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.pdfFile && (
                      <a
                        href={project.pdfFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-800"
                      >
                        <FileText className="w-3.5 h-3.5 text-cyan-400" />
                        <span>PDF</span>
                      </a>
                    )}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-white transition-colors cursor-pointer shrink-0"
                    >
                      <span>Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
