import { useState } from "react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    n: "01",
    title: "Conhecer os campos",
    text: "Mapear os 61 campos do CIB e comparar com o que o cadastro já entrega hoje.",
  },
  {
    n: "02",
    title: "Testar a conexão",
    text: "Validar convênio, credenciais e retorno da API antes de enviar qualquer dado real.",
  },
  {
    n: "03",
    title: "Pequeno volume",
    text: "Um lote reduzido revela erros de payload sem contaminar a base inteira.",
  },
  {
    n: "04",
    title: "Escalonar",
    text: "Aumentar o volume por faixas, corrigindo inconsistências a cada rodada.",
  },
  {
    n: "05",
    title: "Produção",
    text: "Envio contínuo e monitorado, com status por imóvel em vez de checagem manual.",
  },
];

export function Trilha() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div>
      <div className="relative grid gap-3 md:grid-cols-5">
        <div className="absolute top-6 right-6 left-6 hidden h-px bg-border md:block" />
        {STEPS.map((step, i) => {
          const open = active === i;
          return (
            <button
              key={step.n}
              type="button"
              onClick={() => setActive(open ? null : i)}
              onMouseEnter={() => setActive(i)}
              className={cn(
                "relative z-10 rounded-2xl border bg-card p-5 text-left transition-all",
                open ? "border-brand-green shadow-sm" : "border-border hover:border-brand-navy-soft",
              )}
            >
              <span
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-colors",
                  open
                    ? "bg-brand-green text-primary-foreground"
                    : "bg-secondary text-brand-navy-soft",
                )}
              >
                {step.n}
              </span>
              <p className="mt-3 text-sm font-bold text-foreground">{step.title}</p>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  open ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <p className="overflow-hidden text-sm text-muted-foreground">{step.text}</p>
              </div>
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Passe o mouse ou toque em cada etapa.
      </p>
    </div>
  );
}
