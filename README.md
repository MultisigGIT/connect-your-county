# Sinter Sync

Isso já é seu gancho emocional pro hero: em vez de "conheça nossa plataforma", algo como "Seu município não precisa virar uma equipe de TI para se integrar ao SINTER."
Estrutura da página (com o que a torna interativa, sem virar um textão)
1. Hero — animação viva, não banner estático
Reaproveita a arte que você já tem (o mapa do Brasil com a rede de pontos conectando-se ao ícone I.D.), mas anima: os pontos "acendem" e se conectam progressivamente ao carregar a página, como se o mapa estivesse "sincronizando" em tempo real. CTA único e direto: "Veja se seu município está pronto" — que leva à peça central abaixo.
2. Elemento-âncora: um Diagnóstico Interativo (o coração da página)
Em vez de parágrafos explicando o que é o CIB Urbano, um mini-quiz de 4–5 perguntas rápidas (com botões, não texto livre):
"Seu convênio com o SINTER já foi homologado?"
"Seu cadastro tributário e territorial estão no mesmo sistema ou separados?" (dor real citada por Aracaju e Floripa)
"Você sabe quantos dos 61 campos do CIB seu cadastro já preenche?"
"Quantos imóveis o município tem?"
No final, gera um "placar de prontidão" personalizado (ex: "Seu município está 40% pronto para o envio") e puxa naturalmente para o CTA de contato. Isso é interativo, gera lead qualificado e conta a história do produto sem o visitante precisar ler nada longo.
3. Linha do tempo / jornada em etapas clicáveis, não um bloco de texto
Baseada na metodologia de integração progressiva que a Receita descreveu (conhecer campos → testar conexão → pequeno volume → escalonar → produção). Mostre isso como uma trilha horizontal com 5 pontos; ao clicar/passar o mouse em cada um, revela só 1–2 frases — nunca tudo de uma vez.
4. Prova social com números que "contam" (animação de contagem)
Casos reais do próprio relatório funcionam melhor como números grandes animados ao rolar a página do que como texto de case:
425 mil imóveis · 35 mil inconsistências corrigidas · CIB atribuído a 381 mil unidades
Isso já comunica "isso é sério, empresas grandes lidam com esse volume" sem precisar contar a história inteira de Florianópolis.
5. Comparador "Sem integração x Com I.D." (toggle/slider)
Um switch simples: de um lado mostra o fluxo manual (Insomnia, tokens, erros de payload, arquivos .zip, checagem manual de status), do outro o fluxo com a plataforma (poucos cliques). Comunica valor visualmente, sem parágrafo de venda.
6. FAQ em acordeão, não lista corrida
Perguntas reais que apareceram na mentoria (ex: "preciso esperar o cadastro estar 100% pronto pra aderir ao convênio?", "o que acontece se eu errar um campo?") — cada uma fechada por padrão, abre só a que interessa.
7. CTA final com urgência real, não genérica
Em vez de "fale conosco", usar o calendário real do setor: "Prazo de integração até 31/12 — e o processo de ajuste de cadastro leva meses, não dias." Isso é verdade documentada e cria urgência legítima, sem parecer pressão vazia.
Regras para não pesar a leitura
Nunca mais de 2–3 frases visíveis por vez — o resto fica atrás de clique, hover ou scroll reveal.
Uma única ideia por seção (evitar querer explicar "o que é SINTER" + "o que é CIB" + "por que a plataforma" tudo junto).
Microanimações discretas (fade/slide ao entrar na viewport) em vez de efeitos chamativos — reforça "tecnologia séria", não "site de agência de marketing".
Cor com função, não decoração: usar o verde/dourado/azul do seu próprio ícone I.D. para indicar status (pronto / em risco / crítico) no diagnóstico — reaproveita a identidade visual que você já tem.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5fa9aad4-edc2-4b12-a88f-fb2682d8de38).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
