/**
 * Static amber light sources placed down the page. Glass panels need something
 * to refract: as the visitor scrolls, each panel picks up a different glow.
 */
const blobs = [
  { top: "2%", left: "68%", size: 620, alpha: 0.16 },
  { top: "36%", left: "72%", size: 600, alpha: 0.1 },
  { top: "55%", left: "-10%", size: 560, alpha: 0.11 },
  { top: "92%", left: "10%", size: 640, alpha: 0.12 },
];

export function Ambient() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {blobs.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle, color-mix(in oklab, var(--primary) ${b.alpha * 100}%, transparent), transparent 70%)`,
          }}
        />
      ))}
    </div>
  );
}
