
Objetivo: corrigir de forma definitiva para que a página use o vídeo anexado localmente (não YouTube).

1) Validar o ponto do problema no código
- `src/components/VideoPlayer.tsx` está com `<iframe>` do YouTube ativo.
- Isso explica por que continua aparecendo YouTube mesmo após trocar arquivo em `public/videos`.

2) Substituir o player no componente
- Em `src/components/VideoPlayer.tsx`, remover o `<iframe>`.
- Implementar `<video>` HTML5 apontando para arquivo local.
- Usar:
  - `src="/videos/VSLATUALComp.mp4"`
  - `controls`
  - `playsInline`
  - `preload="metadata"`
- Manter o mesmo container e proporção 16:9 já existente para preservar layout/responsividade.

3) Atualizar o arquivo de vídeo com o novo anexo
- Copiar `user-uploads://VSLATUALComp_minimo-2.mp4` para `public/videos/VSLATUALComp.mp4` (sobrescrevendo o atual).
- Não alterar caminho no código para evitar mudanças adicionais no restante da página.

4) Resultado esperado
- O vídeo carregado na VSL passa a ser o arquivo local anexado.
- O YouTube deixa de aparecer.
- Layout visual permanece igual ao anterior.
