import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ChatMessage {
  id: number;
  sender: "player" | "sofia";
  text: string;
}

interface ChatPanelProps {
  messages: ChatMessage[];
  onSend: (text: string) => void;
  disabled: boolean;
  isTyping: boolean;
}

const ChatPanel = ({ messages, onSend, disabled, isTyping }: ChatPanelProps) => {
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              "max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
              msg.sender === "player"
                ? "ml-auto bg-game-burgundy text-white rounded-br-sm"
                : "mr-auto bg-game-surface text-foreground rounded-bl-sm border border-game-gold/10"
            )}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div className="mr-auto bg-game-surface text-muted-foreground px-4 py-2.5 rounded-2xl rounded-bl-sm text-sm border border-game-gold/10 animate-pulse">
            Sofia está digitando...
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-game-gold/10">
        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={disabled ? "Conversa encerrada" : "Digite sua mensagem..."}
            disabled={disabled}
            className="bg-game-surface border-game-gold/20 text-foreground placeholder:text-muted-foreground focus-visible:ring-game-gold/40"
          />
          <Button
            type="submit"
            disabled={disabled || !input.trim()}
            size="icon"
            className="bg-game-gold text-game-bg hover:bg-game-gold/80 shrink-0"
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatPanel;
