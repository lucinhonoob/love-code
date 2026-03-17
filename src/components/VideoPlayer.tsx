const VideoPlayer = () => {
  return (
    <div className="w-full max-w-[760px] rounded-2xl overflow-hidden shadow-video">
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', overflow: 'hidden' }}>
        <iframe
          src="https://www.youtube.com/embed/5VzJmjF2MYw?controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=0&playsinline=1&color=white&fs=0"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Video"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
