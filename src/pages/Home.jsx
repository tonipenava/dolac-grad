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
      <div
        style={{
          transform: isInView ? 'none' : 'translate(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s',
        }}
        className="text-center w-4/5 rounded-xl max-w-screen-sm absolute flex justify-center items-center flex-col p-3 backdrop-blur-lg "
      >
        <h1 className=" text-6xl text-center uppercase border-b-4 border-zinc-50 p-5 font-bold ">
          Dolac grad
        </h1>
        <h2 className="text-center text-2xl">Pronađite savršen dom za sebe</h2>
      </div>
    </section>
  );
};

export default Home;
