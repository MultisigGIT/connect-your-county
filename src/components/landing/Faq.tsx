import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ITEMS = [
  {
    q: "Preciso esperar o cadastro estar 100% pronto para aderir ao convênio?",
    a: "Não. O convênio é o primeiro passo e pode correr em paralelo ao ajuste do cadastro — que é justamente a parte mais demorada.",
  },
  {
    q: "O que acontece se eu errar um campo no envio?",
    a: "O lote é rejeitado e volta com um retorno técnico. A plataforma valida os 61 campos antes do envio e aponta a divergência em linguagem de cadastro.",
  },
  {
    q: "Meu cadastro tributário e o territorial são sistemas diferentes. Dá para integrar?",
    a: "Dá. A conciliação entre as duas bases é feita na plataforma, sem exigir a troca dos sistemas que o município já usa.",
  },
  {
    q: "Preciso de uma equipe de TI no município?",
    a: "Não. Toda a parte de tokens, payloads e reenvio fica com a plataforma. O município cuida do conteúdo do cadastro.",
  },
  {
    q: "Quanto tempo leva a integração?",
    a: "Depende do volume e da qualidade do cadastro. O envio técnico é rápido; o ajuste dos dados costuma levar meses.",
  },
  {
    q: "Municípios pequenos conseguem pagar?",
    a: "Sim. O custo é dimensionado pela realidade do município, sem comprometer o orçamento.",
  },
];

export function Faq() {
  return (
    <Accordion type="single" collapsible className="mx-auto max-w-2xl">
      {ITEMS.map((item) => (
        <AccordionItem key={item.q} value={item.q}>
          <AccordionTrigger className="text-left text-base font-semibold">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
