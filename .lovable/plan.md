

# O Código da Conexão - Simulador de Chat

## Overview
A single-page React + Tailwind app featuring a conversation minigame where the player chats with "Sofia" and tries to raise a "Synergy Level" bar to 100% through smart, respectful dialogue. Pure frontend logic (keyword-based scoring), no external APIs.

## Architecture

### New Pages & Components
- **`/game`** route — the game page (new default route alongside existing `/`)
- `GamePage.tsx` — main layout with two-column responsive design
- `CharacterPanel.tsx` — left column: Sofia's avatar (placeholder illustration), synergy progress bar, interaction counter
- `ChatPanel.tsx` — right column: message history with speech bubbles, text input, send button
- `SynergyBar.tsx` — animated progress bar (0-100%)
- `GameOverModal.tsx` — modal for win ("Conexão Perfeita!") or loss ("Game Over") states

### Game Logic (`src/lib/gameEngine.ts`)
- `analyzMessage(text, currentScore, turnCount)` → `{ response: string, scoreChange: number }`
- **Penalty keywords** (-5 to -10): generic pickup lines, overly clingy phrases, disrespectful terms
- **Bonus keywords** (+10 to +15): humor, open-ended questions, authenticity markers, curiosity
- **Neutral** (+1 to +3): anything else that's not offensive
- Max 20 interactions → win at 100% or game over
- Sofia's tone adapts based on current synergy level (distant → warm → enthusiastic)
- Pre-written response pools categorized by score range and keyword match

### State Management
- React `useState` for: `score` (0-100, clamped), `messages[]`, `turnCount`, `gameState` (playing/won/lost)
- 1.5s simulated typing delay with "Sofia está digitando..." indicator

### UI Design
- Dark theme (charcoal/slate backgrounds), gold and burgundy accents
- Chat bubbles: player messages right-aligned (burgundy), Sofia left-aligned (dark card)
- Sofia avatar: a stylized placeholder SVG or emoji-based illustration
- Victory state: confetti-style animation, modal with success message
- Game Over: modal with retry button

### Flow
1. Player lands on `/game`, sees Sofia's intro message: "Dizem que você é bom em conversas. Estou cética. Me surpreenda."
2. Player types messages, Sofia responds after typing delay
3. Synergy bar updates with each exchange
4. After 20 turns or reaching 100%: end state modal
5. "Jogar Novamente" button resets all state

### Files to Create/Modify
1. `src/pages/GamePage.tsx` — main game page
2. `src/components/game/CharacterPanel.tsx`
3. `src/components/game/ChatPanel.tsx`
4. `src/components/game/SynergyBar.tsx`
5. `src/components/game/GameOverModal.tsx`
6. `src/lib/gameEngine.ts` — keyword analysis + response generation
7. `src/App.tsx` — add `/game` route
8. `src/index.css` — add game-specific CSS variables (gold, burgundy accents)

