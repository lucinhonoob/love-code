

# Substituir vídeo YouTube por vídeo local

## Alterações

### 1. Copiar o vídeo para `public/videos/`
- Copiar `user-uploads://VSLATUALComp.mp4` para `public/videos/VSLATUALComp.mp4`
- Usar pasta `public` pois vídeos são grandes demais para bundling via `src/assets`

### 2. `src/components/VideoPlayer.tsx`
- Remover o iframe do YouTube
- Substituir por tag `<video>` com `controls`, `playsinline`, e `preload="metadata"`
- Manter o mesmo container com `rounded-2xl`, `overflow-hidden`, `shadow-video` e aspect ratio 16:9
- Source: `/videos/VSLATUALComp.mp4`

