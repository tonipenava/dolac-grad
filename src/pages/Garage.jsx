import garage from '../assets/garage.jpeg';
const Garage = () => {
  return (
    <div className="flex justify-center items-center lg:p-0 ">
      <div className="lg:w-[77%]  object-cover p-10 pl-12">
        <img src={garage} alt="Garage" />
      </div>
    </div>
  );
};

export default Garage;
