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
      className="w-screen h-[90vh] flex flex-col justify-center items-center text-white"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className=" w-full h-[90vh] object-cover bg-contain "
      >
        <source src={video} type="video/webm" />
      </video>
      <div className="text-center w-[30vw] max-w-screen-sm absolute top-[20%] right-[30vw]  flex justify-center items-center flex-col">
        <h1
          style={{
            transform: isInView ? 'none' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className=" text-6xl text-center uppercase border-b-4 border-zinc-50 p-5 font-naslov font-bold leading-tight l"
        >
          Dolac Grad
        </h1>
        <h2
          style={{
            transform: isInView ? 'none' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className="text-center text-2xl"
        >
          Pronađite savršen dom za sebe
        </h2>
      </div>
    </section>
  );
};

export default Home;
