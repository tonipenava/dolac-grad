// ApartmentModal.js
import React from 'react';
import ApartmentPlan from './ApartmentPlan';
import RoomSizeTable from './RoomSizeTable';

const ApartmentModal = ({ apartment, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className=" p-5 bg-white rounded-lg lg:h-[80%] lg:w-[90%] w-[90dvw] h-[80dvh] overflow-y-auto">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            Close
          </button>
        </div>
        <div className="lg:flex lg:flex-row lg:items-start flex flex-col justify-center items-center">
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

export default ApartmentModal;
