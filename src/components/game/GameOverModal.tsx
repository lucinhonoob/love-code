import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import { useEffect } from "react";

interface GameOverModalProps {
  open: boolean;
  won: boolean;
  onRestart: () => void;
}

const GameOverModal = ({ open, won, onRestart }: GameOverModalProps) => {
  useEffect(() => {
    if (open && won) {
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    }
  }, [open, won]);

  return (
    <Dialog open={open}>
      <DialogContent className="bg-game-bg border-game-gold/30 text-foreground sm:max-w-md [&>button]:hidden">
        <DialogHeader className="items-center text-center">
          <div className="text-5xl mb-2">{won ? "🎉" : "💔"}</div>
          <DialogTitle className="text-2xl text-game-gold">
            {won ? "Conexão Perfeita!" : "Game Over"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base mt-2">
            {won
              ? "Você conquistou a sinergia total com Sofia através de uma conversa autêntica e inteligente!"
              : "A conversa não evoluiu o suficiente. Tente uma abordagem mais criativa e genuína."}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-4">
          <Button onClick={onRestart} className="bg-game-gold text-game-bg hover:bg-game-gold/80 px-8">
            Jogar Novamente
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GameOverModal;
