import React, { useState } from 'react';
import ApartmentPlan from './ApartmentPlan';
import RoomSizeTable from './RoomSizeTable';

const ApartmentAccordion = ({ apartment }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border mb-4">
      <button
        onClick={toggleAccordion}
        className="lg:w-[80dvw] p-4 text-left font-semibold"
      >
        {apartment.name}
      </button>
      {isOpen && (
        <div className="p-4 lg:flex lg:flex-row flex-col justify-center items-center ">
          <ApartmentPlan />
          {/* Add images here */}
          <RoomSizeTable rooms={apartment.rooms} />
        </div>
      )}
    </div>
  );
};

export default ApartmentAccordion;
