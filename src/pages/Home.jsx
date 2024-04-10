import video from '../assets/dolac_grad_video.mp4';
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
      <video
        autoPlay
        muted
        loop
        playsInline
        className=" w-full h-[90vh] object-cover bg-contain "
      >
        <source src={video} type="video/mp4" />
      </video>
    </section>
  );
};

export default Home;
