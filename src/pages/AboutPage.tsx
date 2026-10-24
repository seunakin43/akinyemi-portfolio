import React from 'react';
import { About } from '@/components/About';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-background min-h-screen text-foreground">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          <span>Back to Overview</span>
        </Link>
      </div>
      <About />
    </div>
  );
};
