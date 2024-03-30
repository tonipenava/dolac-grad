import zgradaIzvana from '../assets/5.png';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });
  return (
    <section
      ref={ref}
      className=" lg:flex lg:flex-row lg:justify-around lg:items-center flex-col justify-center items-stretch gap-4 p-10 lg:p-20 lg:pr-40 lg:pl-40 w-screen "
    >
      <div
        className="lg:w-[55vw] w-full pt-6 "
        style={{
          transform: isInView ? 'none' : 'translateX(+200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s',
        }}
      >
        <img
          src={zgradaIzvana}
          alt="Building"
          className="border-b-8 border-l-8 p-4 border-svjetlozelena  "
        />
      </div>
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
        <p className="text-sm text-justify">
          Royal One zgrada je projektovana kao viseporodični kolektivni stambeno
          poslovni objekat, sačinjen od dve lamele Lamela A i Lamela B,
          spratnosti: podrum, prizemlje i pet tipskih etaža o+P+5.
        </p>
        <p>
          Nalazi se u ulici Frane Supila u Banjoj Luci. Ovaj kompleks nudi
          različite vrste stanova koji su dizajnirani da udovolje visokim
          standardima i pruže udoban i luksuzan životni prostor.
        </p>
      </div>
    </section>
  );
};

export default Vision;
