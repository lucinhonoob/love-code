import { useState, useRef, useEffect } from 'react';

const VideoPlayer = () => {
  const [isStarted, setIsStarted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoId = "Ex6rnYlYdv8";
  
  // YouTube embed URL with parameters to minimize branding
  const baseUrl = `https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&playsinline=1&color=white&fs=0`;
  const videoSrc = isStarted ? `${baseUrl}&autoplay=1` : baseUrl;

  useEffect(() => {
    if (!iframeRef.current) return;

    // Block all clicks on the iframe to prevent navigation to YouTube
    const handleIframeClick = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const iframe = iframeRef.current;
    
    // Try to access iframe content and block clicks (may fail due to CORS)
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        iframeDoc.addEventListener('click', handleIframeClick, true);
      }
    } catch (e) {
      // CORS restriction - will use overlay approach instead
      console.log('CORS: Cannot access iframe content directly');
    }

    return () => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc) {
          iframeDoc.removeEventListener('click', handleIframeClick, true);
        }
      } catch (e) {
        // Ignore CORS errors on cleanup
      }
    };
  }, [isStarted]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Do nothing - prevents any navigation
    return false;
  };

  return (
    <div className="w-full max-w-[760px] rounded-2xl overflow-hidden shadow-video bg-black">
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', overflow: 'hidden' }}>
        {/* Main YouTube iframe - displayed at normal size */}
        <iframe
          ref={iframeRef}
          src={videoSrc}
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            border: 'none',
            pointerEvents: 'none' // Disable pointer events on iframe
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Video"
        />
        
        {/* 
          Security Overlay Layer 1: Full coverage overlay
          This prevents any interaction with the YouTube player
          Covers the entire video area and blocks all clicks
        */}
        <div 
          onClick={handleOverlayClick}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onTouchStart={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            zIndex: isStarted ? 5 : 20,
            cursor: isStarted ? 'default' : 'pointer',
            backgroundColor: isStarted ? 'transparent' : 'rgba(0, 0, 0, 0)',
            transition: 'z-index 0.3s ease'
          }} 
        >
          {/* Custom Play Button - Only visible before video starts */}
          {!isStarted && (
            <div 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsStarted(true);
              }}
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

        {/* 
          Security Overlay Layer 2: Top area protection
          Blocks clicks on the YouTube title and channel name area (top of player)
        */}
        <div 
          onClick={handleOverlayClick}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '15%', 
            zIndex: isStarted ? 15 : 10,
            cursor: 'default',
            backgroundColor: 'transparent',
            pointerEvents: isStarted ? 'auto' : 'none'
          }} 
        />

        {/* 
          Security Overlay Layer 3: Bottom right area protection
          Blocks clicks on the "Watch on YouTube" button and YouTube logo
        */}
        <div 
          onClick={handleOverlayClick}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          style={{ 
            position: 'absolute', 
            bottom: 0, 
            right: 0, 
            width: '35%', 
            height: '20%', 
            zIndex: isStarted ? 15 : 10,
            cursor: 'default',
            backgroundColor: 'transparent',
            pointerEvents: isStarted ? 'auto' : 'none'
          }} 
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
