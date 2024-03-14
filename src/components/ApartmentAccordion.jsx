import React, { useState } from 'react';
import ApartmentPlan from './ApartmentPlan';
import RoomSizeTable from './RoomSizeTable';

const ApartmentAccordion = ({ apartment }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-2 border-smedja m-2 rounded-3xl">
      <button
        onClick={toggleAccordion}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 font-semibold"
      >
        <div>{apartment.name}</div>
        <div>{`${apartment.rooms.totalArea} m2`}</div>
      </button>
      <div className={`accordion-content ${isOpen ? 'show' : ''}`}>
        <div className="p-4 lg:grid lg:grid-cols-2 gap-4">
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
