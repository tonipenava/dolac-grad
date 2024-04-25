import { useRef } from 'react';
import { useInView } from 'framer-motion';

import ApartmentList from '../components/ApartmentList';
const Stanovi = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} id="stanovi">
      <div className="w-screen  h-[full] flex justify-center items-center flex-col text-centar overflow-x-hidden">
        <h1
          style={{
            transform: isInView ? 'none' : 'translateY(+200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s',
          }}
          className="textStanovi lg:text-6xl text-3xl pt-4  text-smedja text-start w-[80%] font-josefin font-medium"
        >
          Odaberite stan po Vašoj mjeri
        </h1>
        <div>
          <ApartmentList />
        </div>
      </div>
    </section>
  );
};

export default Stanovi;
