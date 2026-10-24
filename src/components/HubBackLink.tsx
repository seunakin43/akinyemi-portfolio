import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HubBackLinkProps {
  className?: string;
}

export const HubBackLink: React.FC<HubBackLinkProps> = ({ className }) => {
  const defaultHub = (import.meta.env.VITE_DEFAULT_HUB || '').toLowerCase().trim();
  const mainUrl = import.meta.env.VITE_MAIN_PORTFOLIO_URL || '';

  // If this is a standalone deployment and NO main portfolio URL was provided, hide the backlink
  if (defaultHub && !mainUrl) {
    return null;
  }

  // If this is a standalone deployment and main portfolio URL is provided, link externally
  if (defaultHub && mainUrl) {
    return (
      <a
        href={mainUrl}
        className={className || "inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group"}
      >
        <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
        <span>Executive Main Portfolio</span>
        <ExternalLink className="size-3 text-primary" />
      </a>
    );
  }

  // Otherwise on the main multi-hub deployment, link internally to "/"
  return (
    <Link
      to="/"
      className={className || "inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group"}
    >
      <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
      <span>Return to Main Portfolio Hub</span>
    </Link>
  );
};
