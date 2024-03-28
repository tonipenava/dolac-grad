import { useRef } from 'react';
import { useInView } from 'framer-motion';
import icon1 from '../assets/icon-plan.png';
import icon2 from '../assets/icon-building.png';
import icon3 from '../assets/icon-poslovni.png';
import icon4 from '../assets/icon-parking.png';
import icon5 from '../assets/icon-garage.png';
import Number from '../components/Number';

const BackgroundElements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="   h-[40vh] bg-[url('/src/assets/livingRoom.jpg')] lg:bg-fixed lg:bg-cover lg:bg-center bg-no-repeat bg-cover shadow-inner "
    >
      <div className="w-[full] h-full bg-bijela bg-opacity-60 lg:flex grid grid-cols-3 gap-4 lg:justify-center lg:gap-8 justify-evenly text-black font-semibold lg:text-2xl text-sm">
        <div className="flex flex-col justify-center items-center gap-2  text-center">
          <img src={icon1} alt="apartments" className="lg:w-[5dvw]  w-1/2" />
          <h2>Broj stanova</h2>
          <h3 className="text-4xl font-bold text-zelena">
            {isInView && <Number classname="text-3xl" n={18} />}
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <img src={icon2} alt="apartments" className="lg:w-[5dvw] w-1/2" />
          <h2>Broj katova</h2>
          <h3 className="text-4xl font-bold text-zelena">
            {isInView && <Number classname="text-3xl" n={5} />}
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <img src={icon3} alt="apartments" className="lg:w-[5dvw] w-1/2" />
          <h2>Poslovnih prostora</h2>
          <h3 className="text-4xl font-bold text-zelena">
            {isInView && <Number classname="text-3xl" n={2} />}
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <img src={icon4} alt="apartments" className="lg:w-[5dvw] w-1/2" />
          Parking mjesta
          <h3 className="text-4xl font-bold text-zelena">
            {isInView && <Number classname="text-3xl" n={24} />}
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <img src={icon5} alt="apartments" className="lg:w-[5dvw] w-1/2 " />
          <h2>Garažnih mjesta</h2>
          <h3 className="text-4xl font-bold text-zelena">
            {isInView && <Number classname="text-3xl" n={18} />}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BackgroundElements;
