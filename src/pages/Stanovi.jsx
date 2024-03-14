import ApartmentAccordion from '../components/ApartmentAccordion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import ApartmentGrid from '../components/ApartmentGrid';
const Stanovi = () => {
  const apartments = [
    {
      id: 1,
      name: 'Obiteljski stan',
      rooms: {
        bedroom: 100,
        kitchen: 50,
        livingRoom: 80,
        bathroom: 2,
        totalArea: 340,
      },
    },
    {
      id: 2,
      name: 'Apartment 2',
      rooms: {
        bedroom: 120,
        kitchen: 60,
        livingRoom: 90,
        bathroom: 2,
        totalArea: 340,
      },
    },
    {
      id: 3,
      name: 'Apartment 2',
      rooms: {
        bedroom: 120,
        kitchen: 60,
        livingRoom: 90,
        bathroom: 2,
        totalArea: 340,
      },
    },
    {
      id: 4,
      name: 'Apartment 2',
      rooms: {
        bedroom: 120,
        kitchen: 60,
        livingRoom: 90,
        bathroom: 2,
        totalArea: 340,
      },
    },
    {
      id: 5,
      name: 'Apartment 2',
      rooms: {
        bedroom: 120,
        kitchen: 60,
        livingRoom: 90,
        bathroom: 2,
        totalArea: 340,
      },
    },
    {
      id: 6,
      name: 'Apartment 2',
      rooms: {
        bedroom: 120,
        kitchen: 60,
        livingRoom: 90,
        bathroom: 2,
        totalArea: 340,
      },
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} id="stanovi">
      <div className=" bg-svjetlozelena w-screen h-[20vh] flex justify-center items-center text-centar">
        {' '}
        <h1
          style={{
            transform: isInView ? 'none' : 'translateY(+200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s',
          }}
          className="textStanovi text-4xl font-bold text-bijela  "
        >
          Odaberite stan koji odgovara vašim potrebama
        </h1>
      </div>
      <div>
        <ApartmentGrid apartments={apartments} />
      </div>
    </section>
  );
};

export default Stanovi;
