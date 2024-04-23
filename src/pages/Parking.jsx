import { useRef } from 'react';
import { useInView } from 'framer-motion';
const Parking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });
  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center text-lg text-start font-josefin"
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <p className="w-[80%]">
        Lamela B posjeduje 8 parkirnih mjesta u garaži, dok Lamela A posjeduje
        10 parkirnih mjesta u garaži{' '}
      </p>
      <p className="w-[80%]">
        Vanjskih parkirnih mjesta za stanare i poslovne prostore je ukupno 31.
        Na nadzemnom dijelu lamele B se nalazi 11 parking mjesta, dok sa
        sjeverne strane lamele A 12 parking mjesta , te 8 parking mjesta sa
        istočne strane lamele A.
      </p>
    </div>
  );
};

export default Parking;
