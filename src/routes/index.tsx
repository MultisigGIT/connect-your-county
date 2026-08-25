import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { HeroMap } from "@/components/landing/HeroMap";
import { Diagnostico } from "@/components/landing/Diagnostico";
import { Trilha } from "@/components/landing/Trilha";
import { Numeros } from "@/components/landing/Numeros";
import { Comparador } from "@/components/landing/Comparador";
import { Faq } from "@/components/landing/Faq";
import { Reveal } from "@/components/landing/Reveal";
import logoAsset from "@/assets/logo.png.asset.json";

const TITLE = "Plataforma I.D. GEOPerícias — Integração do município ao SINTER";
const DESCRIPTION =
  "Seu município não precisa virar uma equipe de TI para se integrar ao SINTER. Faça o diagnóstico e veja o quanto seu cadastro já está pronto para o envio do CIB.";

const WHATSAPP = "https://wa.me/5567998365501";
const TEL = "tel:+5567998365501";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-6 py-20 sm:py-24 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-center text-xs font-bold tracking-[0.2em] text-brand-green uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold text-foreground sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-10">
          {children}
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* 1. Hero */}
      <section className="relative overflow-hidden px-6 pt-10 pb-20 sm:pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <img
              src={logoAsset.url}
              alt="Plataforma I.D. GEOPerícias"
              className="h-24 w-auto mix-blend-multiply"
              width={240}
              height={96}
            />
            <h1 className="mt-8 text-4xl leading-tight font-bold text-foreground sm:text-5xl">
              Seu município não precisa virar uma{" "}
              <span className="text-brand-green">equipe de TI</span> para se integrar ao SINTER.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Integração que conecta informações. Decisões mais inteligentes.
            </p>
            <Button asChild size="lg" className="mt-8 h-12 px-7 text-base">
              <a href="#diagnostico">Veja se seu município está pronto</a>
            </Button>
          </div>
          <div className="relative">
            <HeroMap className="mx-auto w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* 2. Diagnóstico */}
      <Section
        id="diagnostico"
        eyebrow="Diagnóstico interativo"
        title="Em 5 perguntas, o seu placar de prontidão"
        className="bg-secondary/50"
      >
        <Diagnostico contactHref={WHATSAPP} />
      </Section>

      {/* 3. Trilha */}
      <Section eyebrow="Jornada" title="A integração acontece em etapas, não de uma vez">
        <Trilha />
      </Section>

      {/* 4. Números */}
      <section className="bg-brand-navy px-6 py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-3xl font-bold sm:text-4xl">
              Volume que já passou pela nossa operação
            </h2>
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <Numeros />
          </Reveal>
        </div>
      </section>

      {/* 5. Comparador */}
      <Section eyebrow="Comparação" title="Sem integração × Com a I.D.">
        <Comparador />
      </Section>

      {/* 6. FAQ */}
      <Section eyebrow="Dúvidas" title="Perguntas que os municípios sempre fazem" className="bg-secondary/50">
        <Faq />
      </Section>

      {/* 7. CTA final */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.2em] text-brand-gold uppercase">
              Prazo de integração: 31/12
            </p>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              O ajuste de cadastro leva meses, não dias.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fale com a equipe e descubra por onde o seu município deve começar.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="h-12 px-7 text-base">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  WhatsApp (67) 99836-5501
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-7 text-base">
                <a href={TEL}>Ligar agora</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8 text-center text-xs text-muted-foreground">
        Plataforma I.D. GEOPerícias · (67) 99836-5501
      </footer>
    </main>
  );
}
