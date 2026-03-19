
Objetivo: adicionar um CTA com desconto abaixo do vídeo após 2 minutos, acelerar as notificações fake em 70% e incluir a nova seção “O QUE VOCÊ VAI RECEBER” mantendo o visual atual da landing page.

1. CTA com desconto após 2 minutos
- Atualizar `src/pages/Index.tsx` para controlar um estado como `showVideoOffer`.
- Iniciar um `setTimeout` de 120000 ms ao abrir a página, conforme sua resposta.
- Renderizar um novo bloco logo abaixo de `<VideoPlayer />` quando o tempo terminar.
- Esse bloco terá:
  - selo/label de urgência
  - preço antigo riscado: `R$ 47,00`
  - preço novo destacado: `R$ 37,00`
  - indicação de desconto de `21%`
  - botão de compra apontando para o mesmo `checkoutUrl`
- Reaproveitar o clique com confete já existente.
- Aplicar animação chamativa sem ficar poluída, usando as animações já disponíveis no projeto, por exemplo combinação de `animate-enter`, leve pulse e transição de escala/opacidade.

2. Posição e responsividade do novo CTA
- Inserir o CTA imediatamente abaixo do vídeo e antes do aviso “ATENÇÃO! Esta apresentação...”.
- Estruturar em mobile first:
  - largura total no mobile
  - centralizado no desktop
  - tipografia e espaçamentos escalando com `sm:`
- Garantir que o botão continue mostrando o link no hover por usar `<a href=...>`.

3. Reduzir o intervalo das notificações fake em 70%
- Ajustar `src/components/PurchaseNotification.tsx`.
- Hoje o intervalo está em `50000` ms; reduzindo 70%, o novo intervalo será `15000` ms.
- Aproveitar para simplificar a lógica do `useEffect` se necessário, evitando recriar o timer a cada `nextId` e mantendo geração estável das notificações.

4. Nova seção “O QUE VOCÊ VAI RECEBER”
- Adicionar a nova seção em `src/pages/Index.tsx`, idealmente após o bloco “O que você vai aprender hoje” e antes do CTA principal, para reforçar valor antes da compra.
- Estrutura sugerida:
  - título principal: `O QUE VOCÊ VAI RECEBER`
  - item principal: `O Código do Flerte`
  - subtítulo: `BÔNUS`
  - lista de bônus:
    - Entrevistas Revelação
    - Guia do Vita Instantâneo
    - O Código do Flerte (AudioBook)
    - Checklist
    - Simulações Reais
- Usar cards/lista com ícones de check para combinar com o restante da página.
- Destacar o item principal visualmente e deixar os bônus em grid responsivo de 1 coluna no mobile e 2 colunas em telas maiores.

5. Ajustes visuais para manter consistência
- Reutilizar classes atuais de borda, sombra, arredondamento e cores já usadas em cenários/CTA.
- Evitar excesso de animação: chamar atenção apenas no CTA atrasado do vídeo.
- Preservar a hierarquia da landing para não competir com o CTA principal e o CTA final.

Detalhes técnicos
- Arquivo principal: `src/pages/Index.tsx`
- Arquivo secundário: `src/components/PurchaseNotification.tsx`
- Não será necessário alterar o `VideoPlayer`, porque o gatilho confirmado será “ao abrir a página”, não “ao iniciar o vídeo”.
- O CTA atrasado pode reutilizar `Button`, `ArrowRight`, `handleCtaClick` e `checkoutUrl` já existentes.

Resultado esperado
- Após 2 minutos na página, surge abaixo do vídeo um bloco promocional animado com desconto.
- As notificações fake passam a aparecer com muito mais frequência.
- A seção de entrega do produto aumenta percepção de valor e continua responsiva no mobile e desktop.
