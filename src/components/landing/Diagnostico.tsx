import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Option = { label: string; score: number };
type Question = { id: string; title: string; options: Option[]; tip: string };

const QUESTIONS: Question[] = [
  {
    id: "convenio",
    title: "Seu convênio com o SINTER já foi homologado?",
    tip: "Sem convênio homologado, nada trafega — é o primeiro passo.",
    options: [
      { label: "Sim, já homologado", score: 100 },
      { label: "Em andamento", score: 55 },
      { label: "Ainda não iniciamos", score: 0 },
    ],
  },
  {
    id: "cadastro",
    title: "Cadastro tributário e territorial estão no mesmo sistema?",
    tip: "Bases separadas são a maior fonte de divergência no envio.",
    options: [
      { label: "Mesmo sistema, integrados", score: 100 },
      { label: "Sistemas diferentes, mas conciliados", score: 50 },
      { label: "Totalmente separados", score: 10 },
    ],
  },
  {
    id: "campos",
    title: "Quantos dos 61 campos do CIB seu cadastro já preenche?",
    tip: "Mapear os campos antes evita retrabalho em massa depois.",
    options: [
      { label: "Quase todos", score: 100 },
      { label: "Mais ou menos a metade", score: 55 },
      { label: "Poucos ou não sabemos", score: 15 },
    ],
  },
  {
    id: "imoveis",
    title: "Quantos imóveis o município tem cadastrados?",
    tip: "O volume define o ritmo do escalonamento até produção.",
    options: [
      { label: "Até 20 mil", score: 100 },
      { label: "De 20 mil a 100 mil", score: 70 },
      { label: "Mais de 100 mil", score: 45 },
    ],
  },
  {
    id: "envio",
    title: "Vocês já fizeram algum envio de teste ao SINTER?",
    tip: "Um envio pequeno revela erros de payload antes da produção.",
    options: [
      { label: "Sim, com retorno bem-sucedido", score: 100 },
      { label: "Tentamos, mas travou", score: 45 },
      { label: "Nunca tentamos", score: 5 },
    ],
  },
];

type Status = { label: string; color: string; message: string };

function statusFor(score: number): Status {
  if (score >= 70)
    return {
      label: "Pronto",
      color: "var(--brand-green)",
      message: "Seu município está perto da produção. Falta orquestrar o envio.",
    };
  if (score >= 40)
    return {
      label: "Em risco",
      color: "var(--brand-gold)",
      message: "Há base, mas o ajuste de cadastro precisa começar agora.",
    };
  return {
    label: "Crítico",
    color: "var(--brand-blue)",
    message: "O caminho é longo para 31/12. Comece pelo convênio e pelo mapeamento.",
  };
}

function recommendations(answers: Record<string, number>) {
  const recs: string[] = [];
  if ((answers["convenio"] ?? 0) < 100) recs.push("Protocolar e homologar o convênio com o SINTER.");
  if ((answers["cadastro"] ?? 0) < 100)
    recs.push("Conciliar cadastro tributário e territorial em uma base única.");
  if ((answers["campos"] ?? 0) < 100) recs.push("Mapear os 61 campos do CIB e identificar as lacunas.");
  if ((answers["envio"] ?? 0) < 100) recs.push("Fazer um envio piloto de pequeno volume.");
  if (recs.length === 0) recs.push("Escalonar o volume e monitorar o retorno de cada lote.");
  return recs.slice(0, 3);
}

export function Diagnostico({ contactHref }: { contactHref: string }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const total = QUESTIONS.length;
  const done = step >= total;
  const score = done
    ? Math.round(Object.values(answers).reduce((a, b) => a + b, 0) / total)
    : 0;
  const status = statusFor(score);

  function answer(q: Question, option: Option) {
    setAnswers((prev) => ({ ...prev, [q.id]: option.score }));
    setStep((s) => s + 1);
  }

  const current = QUESTIONS[step];

  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10">
      <div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-brand-green transition-all duration-500"
          style={{ width: `${(Math.min(step, total) / total) * 100}%` }}
        />
      </div>

      {!done && current ? (
        <div key={current.id} className="animate-in fade-in duration-500">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Pergunta {step + 1} de {total}
          </p>
          <h3 className="mt-3 text-2xl font-bold text-foreground">{current.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{current.tip}</p>
          <div className="mt-6 grid gap-3">
            {current.options.map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => answer(current, option)}
                className={cn(
                  "rounded-xl border border-border bg-background px-5 py-4 text-left text-base font-medium text-foreground",
                  "transition-colors hover:border-brand-green hover:bg-accent/10",
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="animate-in fade-in text-center duration-500">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Placar de prontidão
          </p>
          <p className="mt-4 text-6xl font-bold" style={{ color: status.color }}>
            {score}%
          </p>
          <p className="mt-2 text-lg font-semibold text-foreground">
            Seu município está {score}% pronto para o envio
          </p>
          <span
            className="mt-3 inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wide text-white uppercase"
            style={{ backgroundColor: status.color }}
          >
            {status.label}
          </span>
          <p className="mt-4 text-sm text-muted-foreground">{status.message}</p>

          <ul className="mx-auto mt-6 max-w-md space-y-2 text-left">
            {recommendations(answers).map((rec) => (
              <li key={rec} className="flex gap-2 text-sm text-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                {rec}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href={contactHref} target="_blank" rel="noopener noreferrer">
                Falar com um especialista
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                setAnswers({});
                setStep(0);
              }}
            >
              Refazer diagnóstico
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
