# Landing Page — Plataforma I.D. GEOPerícias

Página única (rota `/`), em português, 100% frontend — sem banco de dados. O diagnóstico calcula e mostra o resultado na hora; o CTA leva ao contato **(67) 99836-5501** (WhatsApp + telefone).

## Identidade visual

Tokens novos em `src/styles.css` derivados da logo enviada: azul-marinho profundo (base/texto), verde (sucesso/pronto), dourado (atenção), azul vivo (crítico/destaque). A logo entra como asset via CDN e também vira o favicon. Fundo claro, tipografia sóbria, cantos suaves, microanimações discretas.

## Seções

**1. Hero animado**
Recriação em SVG/Canvas leve do mapa do Brasil com rede de pontos que "acendem" e se conectam progressivamente ao carregar, com a logo I.D. ao centro. Título: "Seu município não precisa virar uma equipe de TI para se integrar ao SINTER." Um único CTA: "Veja se seu município está pronto" (rola até o diagnóstico).

**2. Diagnóstico interativo (âncora da página)**
5 perguntas, uma por vez, só botões — convênio homologado, cadastro tributário/territorial unificado, conhecimento dos 61 campos do CIB, faixa de quantidade de imóveis, situação do envio. Barra de progresso no topo.
Resultado: placar percentual animado ("Seu município está 40% pronto"), cor de status pelo verde/dourado/azul da marca, 2–3 recomendações curtas conforme as respostas, e botão de contato. Botão para refazer.

**3. Trilha de integração**
5 etapas horizontais clicáveis (conhecer campos → testar conexão → pequeno volume → escalonar → produção). Cada etapa revela 1–2 frases; nada aberto de início. Em telas pequenas vira trilha vertical.

**4. Números que contam**
Contadores animados ao entrar na viewport: 425 mil imóveis · 35 mil inconsistências corrigidas · 381 mil unidades com CIB atribuído.

**5. Comparador "Sem integração × Com I.D."**
Toggle único alternando duas listas curtas: fluxo manual (tokens, payloads, .zip, checagem manual) × fluxo na plataforma (poucos cliques). Transição suave entre os dois estados.

**6. FAQ em acordeão**
5–6 perguntas reais, todas fechadas por padrão.

**7. CTA final com prazo**
"Prazo de integração até 31/12 — e o ajuste de cadastro leva meses, não dias." Botões de WhatsApp e ligação para (67) 99836-5501.

## Regras aplicadas

Máximo 2–3 frases visíveis por vez; uma ideia por seção; fade/slide sutis ao entrar na viewport (respeitando `prefers-reduced-motion`); cor usada como status, não decoração.

## Notas técnicas

- Reescrita de `src/routes/index.tsx` com componentes em `src/components/landing/*`; estado do quiz e do comparador local via `useState`.
- Animações com `motion` (Motion for React) e IntersectionObserver para os reveals/contadores.
- Acordeão/botões/toggle com shadcn já disponível no projeto.
- Head SEO próprio da rota (title, description, og/twitter), H1 único, imagens com alt.
- A arte enviada é referência: o mapa é recriado em vetor para poder animar; a logo é usada como arquivo real.
