function VideoContainer() {
  return (
    <div
      className="
      w-full
      max-w-5xl
      overflow-hidden
      rounded-3xl
      bg-slate-900
      shadow-xl
      "
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-[500px] w-full object-cover"
      >
        <source
          src="/videos/homepage-bg.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default VideoContainer;