import zgradaIzvana from '../assets/5.png';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });
  return (
    <section
      ref={ref}
      className="w-screen lg:flex lg:flex-row lg:justify-around lg:items-center flex-col justify-center items-stretch gap-8 p-10 lg:p-20 lg:pr-40 lg:pl-40 overflow-x-hidden text-start font-josefin"
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
        className=" lg:w-[30vw] w-[90%] h-full flex flex-col items-center justify-center gap-4  text-lg"
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <h1 className=" text-lg pt-5">
          Glavni ulaz u stambeni dio zgrade smješten je u prizemlju, sa sjeverne
          strane, gdje se ulazi u vertikalnu komunikaciju koja povezuje sve
          etaže, a sastoji se od dvokrakog stubišta i dizala. U nadzemnom dijelu
          osigurano je 31 parkirno mjesto , a cijeli objekt se integrira u
          definirane parterne površine.
        </h1>
        <h2 className="text-lg ">
          Stambeni dio se sastoji od 18 stanova, od kojih su dva PENTHOUSE,
          kvadrature 127m2 i 164 m2.
        </h2>
        <p className="text-lg ">
          Karakterističnu etažu čine četiri stana , dva dvosobna , jedan
          jednosobni i jedan trosobni, kvadrature od 45m2 do 96m2. Svaki stan
          karakterizira maksimalna iskoristivost prostora, sukladno potrebama
          suvremenog stanovanja.
        </p>
      </div>
    </section>
  );
};

export default Vision;
