import zgradaIzvana from '../assets/zgradaIzvana.jpg';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      className=" lg:flex lg:flex-row lg:justify-around lg:items-center flex-col justify-center items-stretch gap-4 p-10 lg:p-20 lg:pr-40 lg:pl-40 w-screen"
    >
      <div
        className=" lg:w-[30vw] w-[90%] h-full flex flex-col items-center justify-center gap-4"
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <h1 className=" text-4xl font-semibold font-textTitle">
          Vaša vizija - naša izgradnja
        </h1>
        <h2 className="text-2xl font-medium">Stambeno poslovni prostor </h2>
        <p className="text-lg text-justify">
          Royal One zgrada je projektovana kao viseporodični kolektivni stambeno
          poslovni objekat, sačinjen od dve lamele Lamela A i Lamela B,
          spratnosti: podrum, prizemlje i pet tipskih etaža o+P+5. Nalazi se u
          ulici Frane Supila u Banjoj Luci. Ovaj kompleks nudi različite vrste
          stanova koji su dizajnirani da udovolje visokim standardima i pruže
          udoban i luksuzan životni prostor.
        </p>
      </div>
      <div
        className="lg:w-3/5 w-full pt-6 "
        style={{
          transform: isInView ? 'none' : 'translateX(+200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s',
        }}
      >
        <img
          src={zgradaIzvana}
          alt="Building"
          className="border-t-8 border-r-8 p-8 border-svjetlozelena "
        />
      </div>
    </section>
  );
};

export default Vision;
