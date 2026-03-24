

# Substituir emoji por imagens da Sofia

## O que será feito
Substituir o emoji placeholder (👩‍💻) pela imagem do Imgur como avatar da Sofia, e trocar a imagem quando o nível de sinergia atingir 100%.

## Observação importante
Os dois links fornecidos são idênticos (`https://imgur.com/D6a6FCG`). Vou usar a URL direta da imagem (`https://i.imgur.com/D6a6FCG.png`) para ambos os estados. Se você tiver uma imagem diferente para o estado de vitória, me envie o link correto depois.

## Alterações

### `src/components/game/CharacterPanel.tsx`
- Remover o emoji fallback e usar a imagem `https://i.imgur.com/D6a6FCG.png` como avatar padrão
- Quando `won === true`, trocar para a imagem de vitória (mesmo link por enquanto)
- Passar a lógica de seleção de imagem baseada no prop `won`

### `src/pages/GamePage.tsx`
- Nenhuma alteração necessária — já passa `won` para o `CharacterPanel`

