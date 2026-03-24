import { cn } from "@/lib/utils";

interface SynergyBarProps {
  value: number;
}

const SynergyBar = ({ value }: SynergyBarProps) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-game-gold">Nível de Sinergia</span>
        <span className="text-sm font-bold text-game-gold">{clampedValue}%</span>
      </div>
      <div className="h-3 w-full rounded-full bg-game-surface overflow-hidden border border-game-gold/20">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-700 ease-out",
            clampedValue < 35 && "bg-destructive",
            clampedValue >= 35 && clampedValue < 70 && "bg-game-gold",
            clampedValue >= 70 && "bg-cta"
          )}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
};

export default SynergyBar;
