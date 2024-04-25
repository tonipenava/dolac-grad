import zgradaIzvana from '../assets/3.png';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });
  return (
    <section
      ref={ref}
      className="w-screen lg:flex lg:flex-row lg:justify-around lg:items-center flex-col justify-center items-stretch gap-4 p-10 lg:p-10 lg:pr-40 lg:pl-40 overflow-x-hidden font-josefin"
    >
      <div
        className=" lg:w-[30vw] w-[90%] h-full flex flex-col items-center justify-center gap-4 text-lg text-start"
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <div className=" text-start">
          Stambeno poslovna zgrada „Dolac Grad“ smještena u Ulici viteza Mile
          Bošnjaka i dio je manje urbane cjeline površine 3.600 m2. Zgrada se
          nalazi u samom centru grada te u neposrednoj blizini vrtića, škole,
          crkve, doma zdravlja i supermarketa.
        </div>
        <p className="font-bold ">IDEALNO MJESTO ZA ŽIVOT!</p>
        <p>
          Lokacija novogradnje u Posušju idealna je za obitelji i parove koji
          žele biti u neposrednoj blizini Jadranskog mora, ali istovremeno
          uživati u tišini i miru manjeg mjesta koje pruža mnoge sadržaje.
        </p>
        <p>
          Sastoji se od podzemne etaže, prizemlja i 5 stambenih etaža. U
          podzemnoj etaži se nalaze ostave za sve stambene jedinice, 10
          parkirnih mjesta i 8 garaža. Kolni pristup podzemnoj etaži je preko
          rampe sa južne strane objekta, a pješački preko stubišta i dizala sa
          sjeverne strane objekta .{' '}
        </p>
      </div>
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
          className="border-t-8 border-r-8 p-4 border-svjetlozelena"
        />
      </div>
    </section>
  );
};

export default Vision;
