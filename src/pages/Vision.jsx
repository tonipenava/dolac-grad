import zgradaIzvana from '../assets/3.png';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });
  return (
    <section
      ref={ref}
      className="w-screen lg:flex lg:flex-row lg:justify-around lg:items-center flex-col justify-center items-stretch gap-4 p-10 lg:p-10 lg:pr-40 lg:pl-40 overflow-x-hidden"
    >
      <div
        className=" lg:w-[30vw] w-[90%] h-full flex flex-col items-center justify-center gap-4 text-lg text-start"
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <h1 className=" text-4xl font-semibold font-textTitle text-start">
          Dom Iz Snova, Stan U Tvojim Rukama
        </h1>
        <h2 className="text-2xl font-medium text-start">
          Stambeno poslovni prostor
        </h2>
        <div className=" text-start">
          Stambena zgrada sa poslovnim prostorom u prizemlju smještena je u
          Ulici Mile Bošnjaka i dio je manje urbane cjeline . Sastoji se od
          dvije lamele, lamela A i lamela B :
          <p className=" italic font-semibold">
            -Lamala A je projektirana kao stambeno poslovni objekt.
          </p>{' '}
          <p className="italic font-semibold">
            -Lamela B je podrumski objekt u kome se nalazi garaža.
          </p>
        </div>
        <p>
          Lamela A je navedeni objekt pretežito je stambene namjene sa stanovima
          na pet etaža, dok je etaža prizemlja poslovne namjene, a predviđena je
          i jedna podzemna etaža u kojoj je smještena garaža. S južne strane
          nalazi se rampa koja je zajednička za spuštanje u garaže lamele A i
          lamele B.
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
