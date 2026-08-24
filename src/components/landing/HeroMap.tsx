const NODES: { x: number; y: number; r: number; tone: "green" | "gold" | "blue" }[] = [
  { x: 118, y: 150, r: 7, tone: "green" },
  { x: 175, y: 112, r: 5, tone: "green" },
  { x: 240, y: 96, r: 8, tone: "green" },
  { x: 305, y: 108, r: 5, tone: "green" },
  { x: 362, y: 126, r: 7, tone: "blue" },
  { x: 400, y: 190, r: 6, tone: "blue" },
  { x: 392, y: 258, r: 8, tone: "blue" },
  { x: 352, y: 320, r: 5, tone: "blue" },
  { x: 320, y: 392, r: 7, tone: "blue" },
  { x: 268, y: 442, r: 6, tone: "gold" },
  { x: 212, y: 418, r: 8, tone: "gold" },
  { x: 168, y: 356, r: 5, tone: "gold" },
  { x: 122, y: 300, r: 7, tone: "gold" },
  { x: 96, y: 224, r: 6, tone: "gold" },
  { x: 196, y: 208, r: 5, tone: "green" },
  { x: 300, y: 264, r: 5, tone: "blue" },
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 12],
  [12, 13],
  [13, 0],
  [1, 14],
  [14, 2],
  [14, 15],
  [15, 6],
  [15, 10],
  [12, 14],
];

const TONE: Record<string, string> = {
  green: "var(--brand-green)",
  gold: "var(--brand-gold)",
  blue: "var(--brand-blue)",
};

const BRAZIL =
  "M 95 140 L 140 95 L 190 105 L 225 78 L 262 95 L 300 78 L 330 100 L 372 96 L 400 120 L 420 165 L 405 205 L 430 250 L 420 300 L 385 340 L 360 400 L 330 445 L 300 470 L 258 470 L 225 440 L 195 430 L 165 395 L 130 360 L 105 300 L 78 250 L 70 195 Z";

export function HeroMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 540"
      className={className}
      role="img"
      aria-label="Mapa do Brasil com rede de municípios conectados à plataforma I.D."
    >
      <path
        d={BRAZIL}
        fill="var(--color-secondary)"
        stroke="var(--color-border)"
        strokeWidth="2"
        opacity="0.9"
      />

      {EDGES.map(([a, b], i) => {
        const from = NODES[a];
        const to = NODES[b];
        return (
          <line
            key={`e-${i}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke={TONE[from.tone]}
            strokeWidth="1.6"
            strokeOpacity="0.55"
            style={{
              animation: `id-node-in 500ms ease-out ${200 + i * 90}ms both`,
            }}
          />
        );
      })}

      {NODES.map((n, i) => (
        <g key={`n-${i}`} style={{ animation: `id-node-in 450ms ease-out ${i * 110}ms both` }}>
          <circle cx={n.x} cy={n.y} r={n.r + 6} fill={TONE[n.tone]} opacity="0.14" />
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={TONE[n.tone]}
            style={{
              animation: `id-pulse-soft 3.2s ease-in-out ${i * 180}ms infinite`,
              transformOrigin: `${n.x}px ${n.y}px`,
            }}
          />
        </g>
      ))}
    </svg>
  );
}
