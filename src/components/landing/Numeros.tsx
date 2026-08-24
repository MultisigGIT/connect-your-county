import { useEffect, useState } from "react";
import { useInView } from "./Reveal";

const STATS = [
  { value: 425000, label: "imóveis processados", color: "var(--brand-green)" },
  { value: 35000, label: "inconsistências corrigidas", color: "var(--brand-gold)" },
  { value: 381000, label: "unidades com CIB atribuído", color: "var(--brand-blue)" },
];

function Counter({ value, active }: { value: number; active: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1600;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setN(Math.round(value * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return <>{n.toLocaleString("pt-BR")}</>;
}

export function Numeros() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="grid gap-10 sm:grid-cols-3">
      {STATS.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-4xl font-bold sm:text-5xl" style={{ color: stat.color }}>
            <Counter value={stat.value} active={inView} />
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
