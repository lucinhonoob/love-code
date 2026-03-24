import SynergyBar from "./SynergyBar";
import { MAX_TURNS } from "@/lib/gameEngine";

interface CharacterPanelProps {
  score: number;
  turnCount: number;
  avatarUrl?: string;
  won: boolean;
}

const CharacterPanel = ({ score, turnCount, avatarUrl, won }: CharacterPanelProps) => {
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      {/* Avatar */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-game-gold/30 shadow-lg bg-game-surface flex items-center justify-center">
        {avatarUrl ? (
          <img src={avatarUrl} alt="Sofia" className="w-full h-full object-cover" />
        ) : (
          <div className="text-7xl">👩‍💻</div>
        )}
        {won && (
          <div className="absolute inset-0 bg-game-gold/10 flex items-center justify-center">
            <span className="text-5xl">✨</span>
          </div>
        )}
      </div>

      <h2 className="text-xl font-bold text-game-gold tracking-wide">Sofia</h2>

      {/* Synergy Bar */}
      <div className="w-full max-w-xs">
        <SynergyBar value={score} />
      </div>

      {/* Turn Counter */}
      <div className="text-sm text-muted-foreground">
        Interação <span className="text-game-gold font-semibold">{turnCount}</span> / {MAX_TURNS}
      </div>
    </div>
  );
};

export default CharacterPanel;
