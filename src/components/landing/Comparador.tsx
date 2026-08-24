import { useState } from "react";
import { cn } from "@/lib/utils";

const MANUAL = [
  "Token gerado à mão e colado no Insomnia",
  "Payload rejeitado sem dizer qual campo falhou",
  "Arquivos .zip montados e reenviados um a um",
  "Status conferido manualmente, imóvel por imóvel",
];

const PLATAFORMA = [
  "Conexão configurada uma vez e renovada sozinha",
  "Validação dos 61 campos antes do envio",
  "Lotes montados e escalonados automaticamente",
  "Painel com o status de cada imóvel em tempo real",
];

export function Comparador() {
  const [withPlatform, setWithPlatform] = useState(false);
  const items = withPlatform ? PLATAFORMA : MANUAL;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mx-auto inline-flex w-full rounded-full border border-border bg-secondary p-1">
        <button
          type="button"
          onClick={() => setWithPlatform(false)}
          className={cn(
            "flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
            !withPlatform ? "bg-brand-navy text-primary-foreground" : "text-muted-foreground",
          )}
        >
          Sem integração
        </button>
        <button
          type="button"
          onClick={() => setWithPlatform(true)}
          className={cn(
            "flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
            withPlatform ? "bg-brand-green text-primary-foreground" : "text-muted-foreground",
          )}
        >
          Com a I.D.
        </button>
      </div>

      <ul className="mt-6 space-y-3">
        {items.map((item, i) => (
          <li
            key={item}
            style={{ animationDelay: `${i * 70}ms` }}
            className="animate-in fade-in slide-in-from-bottom-2 flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm text-foreground duration-500"
          >
            <span
              className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
              style={{
                backgroundColor: withPlatform ? "var(--brand-green)" : "var(--brand-gold)",
              }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
