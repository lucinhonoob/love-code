import { useState } from 'react';

const VideoPlayer = () => {
  const [isStarted, setIsStarted] = useState(false);
  const videoId = "5VzJmjF2MYw";
  
  // YouTube embed URL with parameters to minimize branding
  // modestbranding=1 is deprecated but still used in some contexts
  // controls=0 hides the bottom control bar
  // rel=0 prevents showing related videos from other channels
  const baseUrl = `https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&playsinline=1&color=white&fs=0`;
  const videoSrc = isStarted ? `${baseUrl}&autoplay=1` : baseUrl;

  return (
    <div className="w-full max-w-[760px] rounded-2xl overflow-hidden shadow-video bg-black">
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', overflow: 'hidden' }}>
        {/* 
          Cropping technique: 
          We scale the iframe to 115% and position it at -7.5% to hide the edges 
          where the YouTube logo (bottom right) and title (top) usually appear.
        */}
        <iframe
          src={videoSrc}
          style={{ 
            position: 'absolute', 
            top: '-10%', 
            left: '-10%', 
            width: '120%', 
            height: '120%', 
            border: 'none',
            pointerEvents: isStarted ? 'none' : 'auto'
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Video"
        />
        
        {/* Transparent overlay to prevent interaction and hiding the title/logo on hover */}
        {isStarted && (
          <div 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              zIndex: 10,
              cursor: 'default'
            }} 
          />
        )}

        {/* Custom Play Button Overlay */}
        {!isStarted && (
          <div 
            onClick={() => setIsStarted(true)}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 cursor-pointer group transition-all duration-300 hover:bg-black/10"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-600 text-white shadow-2xl transform transition-transform group-hover:scale-110">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-10 h-10 ml-1"
              >
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
