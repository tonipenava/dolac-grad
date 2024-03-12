// ApartmentPlan.js
import React from 'react';
import stan1Plan from '../assets/Stan1Plan.png';
import planSvg from '../assets/svg.svg';
const ApartmentPlan = () => {
  // Render your apartment plan here
  return (
    <div className="  flex flex-col justify-center items-center  mb-4 h-fit lg:w-1/2 w-full  ">
      <h1 className="text-4xl ">Plan stana</h1>
      <hr className="h-1 bg-smedja w-64 " />
      <img src={stan1Plan} />
    </div>
  );
};

export default ApartmentPlan;
