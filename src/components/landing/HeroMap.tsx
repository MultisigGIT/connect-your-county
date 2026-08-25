import { useEffect, useState } from "react";
import logoAsset from "@/assets/logo.png.asset.json";

type Pt = { x: number; y: number };

/** Contorno aproximado do Brasil (viewBox 500x540). */
const BRAZIL_OUTLINE: Pt[] = [
  { x: 150, y: 118 },
  { x: 196, y: 92 },
  { x: 240, y: 108 },
  { x: 286, y: 86 },
  { x: 322, y: 110 },
  { x: 366, y: 104 },
  { x: 398, y: 138 },
  { x: 414, y: 182 },
  { x: 402, y: 224 },
  { x: 424, y: 266 },
  { x: 408, y: 312 },
  { x: 378, y: 352 },
  { x: 352, y: 402 },
  { x: 320, y: 448 },
  { x: 282, y: 474 },
  { x: 244, y: 466 },
  { x: 212, y: 436 },
  { x: 180, y: 412 },
  { x: 152, y: 372 },
  { x: 126, y: 322 },
  { x: 100, y: 268 },
  { x: 90, y: 212 },
  { x: 112, y: 162 },
];

/** Pin da logo: arco superior + "V" inferior. */
function pinShape(count: number): Pt[] {
  const cx = 250;
  const cy = 205;
  const r = 118;
  const arcCount = Math.round(count * 0.62);
  const legCount = count - arcCount;
  const pts: Pt[] = [];

  // arco: de 160° até 20° (topo do pin), sentido horário passando pelo topo
  for (let i = 0; i < arcCount; i++) {
    const t = i / (arcCount - 1);
    const angle = Math.PI * (1.05 - t * 1.85); // ~189° -> ~-144°
    pts.push({ x: cx + Math.cos(angle) * r, y: cy - Math.sin(angle) * r });
  }

  // pernas do V até a ponta
  const tip = { x: cx, y: 470 };
  const right = pts[pts.length - 1]!;
  const left = pts[0]!;
  const half = Math.ceil(legCount / 2);
  for (let i = 1; i <= half; i++) {
    const t = i / (half + 1);
    pts.push({ x: right.x + (tip.x - right.x) * t, y: right.y + (tip.y - right.y) * t });
  }
  for (let i = legCount - half; i >= 1; i--) {
    const t = i / (legCount - half + 1);
    pts.unshift({ x: left.x + (tip.x - left.x) * t, y: left.y + (tip.y - left.y) * t });
  }
  return pts;
}

const COUNT = BRAZIL_OUTLINE.length;
const PIN = pinShape(COUNT);

const TONES = ["var(--brand-green)", "var(--brand-gold)", "var(--brand-blue)"];

function toneFor(i: number) {
  const t = i / COUNT;
  if (t < 0.34) return TONES[1]!; // dourado à esquerda
  if (t < 0.7) return TONES[0]!; // verde no topo
  return TONES[2]!; // azul à direita/baixo
}

function toPath(pts: Pt[]) {
  return pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";
}

export function HeroMap({ className }: { className?: string }) {
  const [isMap, setIsMap] = useState(false);

  useEffect(() => {
    const first = window.setTimeout(() => setIsMap(true), 900);
    const loop = window.setInterval(() => setIsMap((v) => !v), 5200);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(loop);
    };
  }, []);

  const pts = isMap ? BRAZIL_OUTLINE : PIN;

  return (
    <div className={`relative ${className ?? ""}`}>
      <svg
        viewBox="0 0 500 540"
        className="w-full"
        role="img"
        aria-label="Pontos que se reorganizam entre o pin da Plataforma I.D. e o mapa do Brasil"
      >
        <path
          d={toPath(pts)}
          fill="var(--color-secondary)"
          fillOpacity="0.7"
          stroke="var(--color-border)"
          strokeWidth="1.5"
          style={{ transition: "d 2.2s cubic-bezier(0.65, 0, 0.35, 1)" }}
        />

        {pts.map((p, i) => {
          const next = pts[(i + 1) % pts.length]!;
          return (
            <line
              key={`l-${i}`}
              x1={p.x}
              y1={p.y}
              x2={next.x}
              y2={next.y}
              stroke={toneFor(i)}
              strokeWidth="1.6"
              strokeOpacity="0.5"
              style={{
                transition: `all 2.2s cubic-bezier(0.65, 0, 0.35, 1) ${i * 35}ms`,
              }}
            />
          );
        })}

        {pts.map((p, i) => (
          <g key={`n-${i}`}>
            <circle
              cx={p.x}
              cy={p.y}
              r={i % 3 === 0 ? 13 : 9}
              fill={toneFor(i)}
              opacity="0.16"
              style={{ transition: `all 2.2s cubic-bezier(0.65, 0, 0.35, 1) ${i * 35}ms` }}
            />
            <circle
              cx={p.x}
              cy={p.y}
              r={i % 3 === 0 ? 7 : 4.5}
              fill={toneFor(i)}
              style={{ transition: `all 2.2s cubic-bezier(0.65, 0, 0.35, 1) ${i * 35}ms` }}
            />
          </g>
        ))}
      </svg>

      <img
        src={logoAsset.url}
        alt="Plataforma I.D. GEOPerícias"
        className="pointer-events-none absolute top-1/2 left-1/2 w-[38%] -translate-x-1/2 -translate-y-[58%] mix-blend-multiply transition-opacity duration-1000"
        style={{ opacity: isMap ? 0.25 : 1 }}
      />
    </div>
  );
}
