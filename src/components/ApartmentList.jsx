import React, { useState } from 'react';
import RoomDimensionsModal from './RoomDimensionsModal';
import { stanoviConstants } from '../constants/stanoviConstants';
import { RxRulerSquare } from 'react-icons/rx';
import { IoBedOutline } from 'react-icons/io5';
import { PiToilet } from 'react-icons/pi';
import { useInView } from 'react-intersection-observer';

const ApartmentList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState(null);

  const handleApartmentClick = (apartment) => {
    setSelectedApartment(apartment);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="w-screen">
      {stanoviConstants.floors.map((floor) => (
        <div
          key={floor.floor_number}
          className="flex flex-col items-center justify-center   p-2 m-2"
        >
          <div className="  m-3">
            <h2 className="text-center w-screen z-20 text-3xl text-zelena font-naslov">
              Kat {floor.floor_number}
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {floor.apartments.map((apartment) => (
              <div
                style={{ transitionDuration: '0.4s' }}
                key={apartment.number}
                className="  flex flex-col w-fit justify-center items-center text-bijela  bg-svjetlozelena border-2 cursor-pointer shadow-lg hover:shadow-lg hover:shadow-black hover:transform  hover:bg-smedja hover:rounded-bl-xl hover:rounded-tr-xl border-none overflow-hidden "
              >
                <button onClick={() => handleApartmentClick(apartment)}>
                  <img
                    ref={ref}
                    src={apartment.plan_image || '/no-image.jpg'}
                    alt={`Plan for Apartment ${apartment.number}`}
                    className=" w-64 "
                  />
                  <h3 className="text-2xl mt-2 w-full text-center border-b-2">
                    Stan {apartment.number}
                  </h3>
                  <div className="flex items-center justify-evenly p-4 mt-2  ">
                    <div className="flex justify-center items-center gap-1">
                      <p
                        className="
                      text-xl"
                      >
                        <RxRulerSquare />
                      </p>
                      <p>
                        {apartment.area_sqm} m<sup>2</sup>
                      </p>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                      <p className="text-xl">
                        <IoBedOutline />
                      </p>
                      <p>{apartment.bedrooms}</p>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                      <p>
                        <PiToilet className="text-xl" />
                      </p>
                      <p>{apartment.bathrooms}</p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <RoomDimensionsModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        apartment={selectedApartment}
      />
    </div>
  );
};

export default ApartmentList;
