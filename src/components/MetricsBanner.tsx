import React from 'react';
import { motion } from 'framer-motion';
import { Radio, ShieldCheck, Zap, Activity, Database } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const MetricsBanner: React.FC = () => {
  const icons = [Radio, ShieldCheck, Zap, Activity, Database];

  return (
    <section className="relative py-12 bg-slate-950/60 border-y border-slate-800/80 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/20 via-slate-950 to-indigo-950/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {portfolioData.metrics.map((metric, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                    {metric.label}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {metric.value}
                </div>

                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  {metric.detail}
                </p>

                {/* Subtle bottom accent line */}
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/50 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
