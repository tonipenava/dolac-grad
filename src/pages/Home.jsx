import video from '../assets/urbani_vrtovi.webm';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      id="home"
      className="w-screen h-screen flex justify-center items-center text-white"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className=" w-full h-full object-cover bg-contain"
      >
        <source src={video} type="video/webm" />
      </video>
      <h1
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
        className=" absolute top-[50] right-[50] text-8xl uppercase border-b-4 border-zinc-50 p-5"
      >
        Dolac Grad
      </h1>
    </section>
  );
};

export default Home;
