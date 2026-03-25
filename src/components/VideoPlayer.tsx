const VideoPlayer = () => {
  return (
    <div className="w-full max-w-[760px] rounded-2xl overflow-hidden shadow-video">
      <video
        src="/videos/VSLATUALComp.mp4"
        controls
        playsInline
        preload="metadata"
        className="w-full aspect-video"
      />
    </div>
  );
};

export default VideoPlayer;
