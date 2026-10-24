import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

// Strong ease-out: entering content should start fast, then settle.
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
};

const MotionTags = { div: motion.div, li: motion.li, section: motion.section };

/** Fades and lifts content in once, when it first scrolls into view. */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = MotionTags[as];
  return (
    <Tag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(18px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: reduce ? 0.2 : 0.5, delay, ease: EASE_OUT }}
    >
      {children}
    </Tag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  /** Seconds between children. Keep 0.03 to 0.08 so lists feel orchestrated, not slow. */
  gap?: number;
  delay?: number;
  as?: "div" | "ul" | "ol" | "dl";
};

const StaggerTags = { div: motion.div, ul: motion.ul, ol: motion.ol, dl: motion.dl };

/** Reveals its StaggerItem children in sequence once the group scrolls into view. */
export function Stagger({ children, className, gap = 0.06, delay = 0, as = "div" }: StaggerProps) {
  const Tag = StaggerTags[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </Tag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
};

const ItemTags = { div: motion.div, li: motion.li };

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const reduce = useReducedMotion();
  const Tag = ItemTags[as];
  const variants: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, transform: "translateY(16px)" },
        show: { opacity: 1, transform: "translateY(0px)", transition: { duration: 0.5, ease: EASE_OUT } },
      };
  return (
    <Tag className={className} variants={variants}>
      {children}
    </Tag>
  );
}
