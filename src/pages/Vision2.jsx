import zgradaIzvana from '../assets/5.png';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });
  return (
    <section
      ref={ref}
      className="w-screen lg:flex lg:flex-row lg:justify-around lg:items-center flex-col justify-center items-stretch gap-8 p-10 lg:p-20 lg:pr-40 lg:pl-40 overflow-x-hidden"
    >
      <div
        className="lg:w-[55vw] w-full  "
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
        className=" lg:w-[30vw] w-[90%] h-full flex flex-col items-center justify-center gap-4 text-justify text-lg"
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <h1 className=" text-lg pt-6">
          U podzemnoj etaži Lamele A predviđeno je 10 garažnih mjesta i ostave
          za stanare. Kolni pristup podzemnoj etaži je preko rampe sa južne
          strane objekta, a pješački preko stubišta i dizala sa sjeverne strane
          objekta .
        </h1>
        <h2 className="text-lg ">
          Poslovni prostor u prizemlju otvoren je ostakljenim plohama prema jugu
          a ulaz u poslovne prostore omogućeni su sa istoka i sjevera.
        </h2>
        <p className="text-lg text-justify">
          Glavni ulaz u stambeni dio zgrade smješten je u prizemlju, sa sjeverne
          strane, gdje se ulazi u vertikalnu komunikaciju koja povezuje sve
          etaže a sastoji se od dvokrakog stubišta i dizala.
        </p>
        <p>
          <b>Lamela B</b> je podzemna garaža sa parkiranjem na krovnoj ploči. U
          podzemnom dijelu nalazi se 8 samostalnih garaža do kojih se dolazi
          zajedničkom rampom. U nadzemnom dijelu osigurano je 11 parkirnih
          mjesta , a cijeli objekt se integrira u definirane parterne površine.
        </p>
      </div>
    </section>
  );
};

export default Vision;
