import { Play } from 'lucide-react';

const VideoPlayer = () => {
  return (
    <div className="w-full max-w-[760px] aspect-video bg-foreground rounded-2xl relative cursor-pointer group shadow-video overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-1">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 opacity-90" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-topbar rounded-full flex items-center justify-center shadow-[0_0_0_0_hsl(var(--topbar)/0.5)] transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-110 group-hover:shadow-[0_0_0_15px_hsl(var(--topbar)/0.2)]">
          <Play className="w-8 h-8 text-topbar-foreground ml-1 fill-current" />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-zinc-800">
        <div className="h-full bg-topbar w-1/3" />
      </div>
    </div>
  );
};

export default VideoPlayer;
