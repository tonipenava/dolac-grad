import garage from '../assets/garage.jpeg';
import ZoomableImage from '../components/ZoomableImage';
const Garage = () => {
  return (
    <div className="flex justify-center items-center lg:p-0 ">
      <div className="lg:w-[70%]  object-cover p-10 ">
        <img src={garage} alt="Garage" />
      </div>
    </div>
  );
};

export default Garage;
