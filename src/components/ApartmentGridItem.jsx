// ApartmentGridItem.js
import React, { useState } from 'react';
import ApartmentModal from './ApartmentModal';
import stan1Plan from '../assets/Stan1Plan.jpg';
import iconPlan from '../assets/icon-plan.png';
import { RxRulerSquare } from 'react-icons/rx';
import { IoBedOutline } from 'react-icons/io5';

const ApartmentGridItem = ({ apartment }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        className=" bg-transparent border-2 cursor-pointer shadow-lg shadow-black  hover:shadow-2xl hover:shadow-black hover: transform transition-transform hover:scale-110 hover:z-50 hover:rounded-t-3xl hover:rounded-br-xl border-none "
        onClick={handleOpenModal}
        style={{ transitionDuration: '0.4s' }}
      >
        <div className="p-3 relative rounded-2xl">
          <img src={stan1Plan} className="rounded-2xl" />
        </div>
        <div className="relative bg-svjetlozelena w-full p-2 text-bijela text-lg flex justify-center items-center ">
          <p>{apartment.name}</p>
        </div>
        <div className=" flex justify-around  bg-svjetlozelena border-t border-white p-2">
          <div className="flex items-center justify-evenly gap-2 text-white">
            <p className="text-lg text-bijela text-center">
              <RxRulerSquare className="text-white text-xl" />
            </p>

            <p>
              {`${apartment.rooms.totalArea}m`}
              <sup>2</sup>
            </p>
          </div>
          <div className="flex items-center justify-evenly gap-2 text-white">
            <p>
              <IoBedOutline className="text-white text-xl" />
            </p>
            <p>2</p>
          </div>
        </div>
        {/* Replace this placeholder with ApartmentPlan component */}
      </div>
      {modalOpen && (
        <ApartmentModal apartment={apartment} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default ApartmentGridItem;
