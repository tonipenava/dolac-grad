import video from '../assets/dolac_grad_video.mp4';
import placeholder from '../assets/1.png'; // Add a placeholder image
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      id="home"
      className="w-screen h-[90vh] flex flex-col justify-center items-center text-white"
    >
      <div className="relative w-full h-[90vh]">
        <img
          src={placeholder}
          alt="Video Placeholder"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ display: isInView ? 'none' : 'block' }}
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ display: isInView ? 'block' : 'none' }}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Home;
