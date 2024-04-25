import { useRef } from 'react';
import { useInView } from 'framer-motion';
const Parking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });
  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center text-lg text-start font-josefin pt-10"
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <p className="w-[80%] font-bold">Funkcionalnost u svakom detalju</p>
      <p className="w-[80%]">
        Savršen sklad visokokvalitetnih materijala i pažljivo biranih detalja
        čini našu novogradnju u Posušju jedinstvenom. Svaki kutak naših stanova
        odiše praktičnim i sofisticiranim rješenjima, stvarajući prostor gdje
        život postaje udoban i jednostavan.
      </p>
    </div>
  );
};

export default Parking;
