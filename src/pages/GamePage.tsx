import { useState, useCallback } from "react";
import CharacterPanel from "@/components/game/CharacterPanel";
import ChatPanel, { type ChatMessage } from "@/components/game/ChatPanel";
import GameOverModal from "@/components/game/GameOverModal";
import { analyzeMessage, INITIAL_MESSAGE, MAX_TURNS } from "@/lib/gameEngine";

type GameState = "playing" | "won" | "lost";

const GamePage = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 0, sender: "sofia", text: INITIAL_MESSAGE },
  ]);
  const [score, setScore] = useState(0);
  const [turnCount, setTurnCount] = useState(0);
  const [gameState, setGameState] = useState<GameState>("playing");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = useCallback(
    (text: string) => {
      if (gameState !== "playing" || isTyping) return;

      const newTurn = turnCount + 1;
      const playerMsg: ChatMessage = {
        id: messages.length,
        sender: "player",
        text,
      };

      setMessages((prev) => [...prev, playerMsg]);
      setTurnCount(newTurn);
      setIsTyping(true);

      const { response, scoreChange } = analyzeMessage(text, score, newTurn);
      const newScore = Math.max(0, Math.min(100, score + scoreChange));

      const delay = 1200 + Math.random() * 800;
      setTimeout(() => {
        const sofiaMsg: ChatMessage = {
          id: messages.length + 1,
          sender: "sofia",
          text: response,
        };
        setMessages((prev) => [...prev, sofiaMsg]);
        setScore(newScore);
        setIsTyping(false);

        if (newScore >= 100) {
          setGameState("won");
        } else if (newTurn >= MAX_TURNS) {
          setGameState("lost");
        }
      }, delay);
    },
    [gameState, isTyping, turnCount, messages, score]
  );

  const handleRestart = () => {
    setMessages([{ id: 0, sender: "sofia", text: INITIAL_MESSAGE }]);
    setScore(0);
    setTurnCount(0);
    setGameState("playing");
    setIsTyping(false);
  };

  return (
    <div className="min-h-screen bg-game-bg text-foreground flex flex-col">
      {/* Header */}
      <header className="text-center py-4 border-b border-game-gold/15">
        <h1 className="text-xl md:text-2xl font-bold text-game-gold tracking-widest uppercase">
          O Código da Conexão
        </h1>
      </header>

      {/* Main */}
      <div className="flex-1 flex flex-col md:flex-row max-w-6xl mx-auto w-full overflow-hidden">
        {/* Left: Character */}
        <aside className="md:w-80 shrink-0 border-b md:border-b-0 md:border-r border-game-gold/10">
          <CharacterPanel
            score={score}
            turnCount={turnCount}
            won={gameState === "won"}
          />
        </aside>

        {/* Right: Chat */}
        <main className="flex-1 flex flex-col min-h-0 h-[60vh] md:h-auto">
          <ChatPanel
            messages={messages}
            onSend={handleSend}
            disabled={gameState !== "playing" || isTyping}
            isTyping={isTyping}
          />
        </main>
      </div>

      <GameOverModal
        open={gameState === "won" || gameState === "lost"}
        won={gameState === "won"}
        onRestart={handleRestart}
      />
    </div>
  );
};

export default GamePage;
