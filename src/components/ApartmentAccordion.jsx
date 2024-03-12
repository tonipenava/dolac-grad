import React, { useState } from 'react';
import ApartmentPlan from './ApartmentPlan';
import RoomSizeTable from './RoomSizeTable';

const ApartmentAccordion = ({ apartment }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-smedja m-2">
      <button
        onClick={toggleAccordion}
        className="  w-full p-4  flex justify-around gap-6 font-semibold "
      >
        <p>{apartment.name}</p>
        <p> {`${apartment.rooms.totalArea} m2`}</p>
      </button>
      <div className={`accordion-content ${isOpen ? 'show' : ''}`}>
        <div className="p-4 lg:flex lg:flex-row flex-col justify-around items-start ">
          <ApartmentPlan />

          <RoomSizeTable
            rooms={apartment.rooms}
            apartmentName={apartment.name}
          />
        </div>
      </div>
    </div>
  );
};

export default ApartmentAccordion;
