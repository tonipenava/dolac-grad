import React, { useState } from 'react';
import RoomDimensionsModal from './RoomDimensionsModal';
import { stanoviConstants } from '../constants/stanoviConstants';
import ruller from '../assets/ruller-w.png';
import arrow from '../assets/arrow-w.png';
import bed from '../assets/bed-w.png';
import toilet from '../assets/toilet-w.png';
import { useInView } from 'react-intersection-observer';

const ApartmentList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [floor, setFloor] = useState('');

  const handleApartmentClick = (apartment) => {
    setSelectedApartment(apartment);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="w-screen overflow-x-hidden">
      {stanoviConstants.floors.map((floor) => (
        <div
          key={floor.floor_number}
          className="flex flex-col items-center justify-center  p-2 m-2"
        >
          <div className=" pt-4 pb-4 mb-4 flex items-start  border-b-2 border-smedja w-[80%] ">
            <h2 className="z-20 text-3xl text-smedja relative text-start font-naslov">
              {floor.floor_number}. Kat
            </h2>
          </div>
          <div className="lg:grid lg:grid-cols-4 gap-8 flex flex-col items-center justify-centar  ">
            {floor.apartments.map((apartment) => (
              <div
                style={{ transitionDuration: '0.4s' }}
                key={apartment.number}
                className="  flex flex-col w-fit justify-center items-center  text-bijela bg-svjetlozelena border-2 cursor-pointer shadow-lg hover:shadow-lg hover:shadow-black hover:transform  hover:bg-smedja hover:rounded-bl-3xl hover:rounded-tr-3xl hover:rounded-tl-none hover:rounded-br-none  rounded-br-3xl rounded-tl-3xl border-none overflow-hidden "
              >
                <button onClick={() => handleApartmentClick(apartment)}>
                  <img
                    ref={ref}
                    src={apartment.plan_image || '/no-image.jpg'}
                    alt={`Plan for Apartment ${apartment.number}`}
                    className=" w-64 "
                  />
                  <div className="flex justify-around items-center">
                    <h3 className="text-xl mt-2  p-2">
                      {apartment.sobnost} Stan
                    </h3>
                    <p>
                      <img src={arrow} className="w-6 h-6 " />
                    </p>
                  </div>
                  <div className="flex items-center justify-evenly p-2 pt-10  ">
                    <div className="flex justify-center items-center gap-1 text-xl ">
                      <p
                        className="
                      text-2xl"
                      >
                        <img src={ruller} alt="Size" className="w-6 h-6 " />{' '}
                      </p>
                      <p className="text-xl">
                        {apartment.area_sqm} m<sup>2</sup>
                      </p>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                      <p className="text-2xl">
                        <img src={bed} alt="Bed" className="w-6 h-6 " />
                      </p>
                      <p className="text-xl">{apartment.bedrooms}</p>
                    </div>
                    <div className="flex justify-center items-center gap-1 ">
                      <p className="text-xl">
                        <img src={toilet} alt="toilet" className="w-6 h-6 " />
                      </p>
                      <p className="text-xl">{apartment.bathrooms}</p>
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
