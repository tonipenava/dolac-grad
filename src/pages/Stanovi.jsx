import { useRef } from 'react';
import { useInView } from 'framer-motion';

import ApartmentList from '../components/ApartmentList';
const Stanovi = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} id="stanovi">
      <div className="w-full h-[full] flex justify-center items-center flex-col text-centar">
        <h1
          style={{
            transform: isInView ? 'none' : 'translateY(+200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s',
          }}
          className="textStanovi text-4xl font-bold text-zinc-900 text-center w-[80%]"
        >
          Odaberite stan koji odgovara vašim potrebama
        </h1>
        <div>
          <ApartmentList />
        </div>
      </div>
    </section>
  );
};

export default Stanovi;
