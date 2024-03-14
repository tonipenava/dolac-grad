import icon1 from '../assets/icon-plan.png';
import icon2 from '../assets/icon-building.png';
import icon3 from '../assets/icon-poslovni.png';
import icon4 from '../assets/icon-parking.png';
import icon5 from '../assets/icon-garage.png';
import Number from '../components/Number';

const BackgroundElements = () => {
  return (
    <div className="w-dvw h-[40vh] bg-[url('/src/assets/livingRoom.jpg')] lg:bg-fixed lg:bg-cover lg:bg-center bg-no-repeat bg-cover shadow-inner ">
      <div className="w-full h-full bg-bijela bg-opacity-60 lg:flex grid grid-cols-3 gap-4 lg:justify-evenly justify-evenly text-black font-semibold lg:text-2xl text-lg">
        <div className="flex flex-col justify-center items-center gap-2  text-center">
          <img src={icon1} alt="apartments" className="lg:w-[6dvw]  w-1/2" />
          <h2>Broj stanova</h2>
          <h3 className="text-4xl font-bold text-zelena">
            <Number n={24} />
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <img src={icon2} alt="apartments" className="lg:w-[6dvw] w-1/2" />
          <h2>Broj katova</h2>
          <h3 className="text-4xl font-bold text-zelena">
            <Number n={24} />
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <img src={icon3} alt="apartments" className="lg:w-[6dvw] w-1/2" />
          <h2>Poslovnih prostora</h2>
          <h3 className="text-4xl font-bold text-zelena">
            <Number n={4} />
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <img src={icon4} alt="apartments" className="lg:w-[6dvw] w-1/2" />
          Parking mjesta
          <h3 className="text-4xl font-bold text-zelena">
            <Number n={14} />
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <img src={icon5} alt="apartments" className="lg:w-[6dvw] w-1/2" />
          <h2>Garažnih mjesta</h2>
          <h3 className="text-4xl font-bold text-zelena">
            <Number n={8} />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BackgroundElements;
