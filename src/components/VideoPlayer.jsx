const Video = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 scale-[3.6] md:scale-100"
        src="https://dolac-grad-hosting-video.netlify.app/"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Video;
