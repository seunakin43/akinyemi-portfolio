import { memo, useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const COLS = 33;
const TOTAL = 789; // 789+ nodes monitored across Nigeria
const STATIC_ALERT = 523; // 788 of 789 = 99.8% SLA availability

const Dot = memo(function Dot({ alert }: { alert: boolean }) {
  return (
    <span
      className={cn(
        "block aspect-square rounded-full transition-colors duration-500",
        alert ? "animate-blink bg-primary shadow-[0_0_10px_var(--primary)]" : "bg-signal-ok/55",
      )}
    />
  );
});

/**
 * Illustrative map of 789+ network nodes. One node faults at a time, is isolated,
 * and returns to service, which is what 99.8% availability looks like at this size.
 * It is decorative and labelled as such; the figures are not live telemetry.
 */
export function NodeGrid() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "100px" });
  const [alert, setAlert] = useState(STATIC_ALERT);
  const [stage, setStage] = useState<"fault" | "ok">("fault");

  useEffect(() => {
    if (reduce || !inView) return;
    let timer: ReturnType<typeof setTimeout>;
    let next = STATIC_ALERT;
    const cycle = () => {
      setAlert(next);
      setStage("fault");
      timer = setTimeout(() => {
        setStage("ok");
        setAlert(-1);
        timer = setTimeout(() => {
          next = Math.floor(Math.random() * TOTAL);
          cycle();
        }, 2600);
      }, 3200);
    };
    cycle();
    return () => clearTimeout(timer);
  }, [reduce, inView]);

  const up = alert === -1 ? TOTAL : TOTAL - 1;

  return (
    <figure ref={ref} className="m-0">
      <div
        aria-hidden="true"
        className="grid gap-[3px] sm:gap-[4px]"
        style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: TOTAL }, (_, i) => (
          <Dot key={i} alert={i === alert} />
        ))}
      </div>
      <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 font-mono text-xs text-muted-foreground">
        <span>
          <span className="text-foreground">{up}</span> / {TOTAL} nodes up
          {alert !== -1 && stage === "fault" ? " · fault isolated, RCA in progress" : " · all clear"}
        </span>
        <span>Nationwide node matrix (789+ nodes)</span>
      </figcaption>
    </figure>
  );
}
