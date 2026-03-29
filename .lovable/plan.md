

# Corrigir data no TopBar para mostrar a data de hoje

## Alteração em `src/components/TopBar.tsx`

O código atual usa `tomorrow.setDate(tomorrow.getDate() + 1)` para calcular a data de amanhã. Remover essa linha para que exiba a data de **hoje** (29 de março de 2026).

- Linha ~13: remover `tomorrow.setDate(tomorrow.getDate() + 1);`
- Renomear a variável de `tomorrow` para `today` para clareza

