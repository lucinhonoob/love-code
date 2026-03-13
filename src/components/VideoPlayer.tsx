import React, { useState } from 'react';
import { Play } from 'lucide-react';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "5VzJmjF2MYw";

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full max-w-[760px] aspect-video bg-black rounded-2xl relative shadow-video overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-2xl">
      {!isPlaying ? (
        <div 
          className="absolute inset-0 cursor-pointer group" 
          onClick={handlePlay}
        >
          {/* Thumbnail Placeholder - Using YouTube's high res thumbnail */}
          <img 
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
            alt="Video Thumbnail" 
            className="w-full h-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-topbar rounded-full flex items-center justify-center shadow-[0_0_0_0_hsl(var(--topbar)/0.5)] transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-110 group-hover:shadow-[0_0_0_15px_hsl(var(--topbar)/0.2)]">
              <Play className="w-8 h-8 text-topbar-foreground ml-1 fill-current" />
            </div>
          </div>
        </div>
      ) : (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=0&fs=0`}
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            border: 'none',
            borderRadius: '1rem',
          }}
        ></iframe>
      )}
    </div>
  );
};

export default VideoPlayer;
