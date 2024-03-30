import React from 'react';
import planZgrade from '../assets/planZgrade.png';
const RoomDimensionsModal = ({ isOpen, onClose, apartment }) => {
  if (!isOpen) return null;

  const {
    area_sqm,
    plan_image,
    livingroom_size,
    bedrooms_size,
    bathrooms_size,
    loggia_size,
    bedrooms_size2,
    bedrooms_size3,
    wc_size,
    hall_size,
    pantry_size,
    laundryroom_size,
    tip,
    sobnost,
  } = apartment;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center w-screen">
      <div
        className="absolute inset-0 bg-black opacity-50 "
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-br-xl rounded-tl-xl w-[90%] h-[90%] scroll-m-0 flex flex-col p-5 overflow-y-auto">
        <button className="absolute top-0 right-0 p-2" onClick={onClose}>
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col">
          <h3 className="text-3xl font-medium leading-6 text-zelena text-center p-5 ">
            {apartment.sobnost} stan
          </h3>
          <div className="lg:flex lg:flex-row flex-col  justify-center items-center w-100%">
            <div className="flex justify-center items-center lg:w-[65%] mx-auto">
              <img
                src={plan_image}
                alt={`Plan for Apartment ${apartment.number}`}
                className="lg:w-full lg:h-auto w-full"
              />
            </div>
            <div className="mt-4 p-5 lg:w-[30%]  h-full flex flex-col gap-4">
              <div className="text-2xl font-semibold mb-2 flex flex-col - justify-around items-center">
                <h2> Tip stana: S{apartment.tip}</h2>
                <h2>Dimenzije soba</h2>
              </div>

              <table className="w-full border-spacing-1 border-none text-center ">
                <thead className="border-2 border-zelena">
                  <tr>
                    <th className="px-4 py-2 ">Soba</th>
                    <th className="px-4 py-2">
                      m<sup>2</sup>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="odd:bg-gray-50 even:bg-gray-300 ">
                    <td className="px-4 py-2">
                      Dnevni boravak/ blagavaonica/ kuhinja
                    </td>
                    <td className="px-8 py-2">{livingroom_size}</td>
                  </tr>
                  <tr className="odd:bg-gray-50  even:bg-gray-300 ">
                    <td className="px-4 py-2">Soba 1</td>
                    <td className="px-8 py-2">{bedrooms_size}</td>
                  </tr>
                  {bedrooms_size2 && (
                    <tr className="odd:bg-gray-50  even:bg-gray-300 ">
                      <td className="px-4 py-2">Soba 2</td>
                      <td className="px-8 py-2">{bedrooms_size2}</td>
                    </tr>
                  )}
                  {bedrooms_size3 && (
                    <tr className="odd:bg-gray-50  even:bg-gray-300 ">
                      <td className="px-4 py-2">Soba 3</td>
                      <td className="px-8 py-2">{bedrooms_size3}</td>
                    </tr>
                  )}
                  {wc_size && (
                    <tr className="odd:bg-gray-50  even:bg-gray-300 ">
                      <td className="px-4 py-2">Wc</td>
                      <td className="px-8 py-2">{wc_size}</td>
                    </tr>
                  )}
                  {laundryroom_size && (
                    <tr className="odd:bg-gray-50  even:bg-gray-300 ">
                      <td className="px-4 py-2">Vešeraj</td>
                      <td className="px-8 py-2">{laundryroom_size}</td>
                    </tr>
                  )}
                  {pantry_size && (
                    <tr className="odd:bg-gray-50  even:bg-gray-300 ">
                      <td className="px-4 py-2">Ostava</td>
                      <td className="px-8 py-2">{pantry_size}</td>
                    </tr>
                  )}
                  {hall_size && (
                    <tr className="odd:bg-gray-50  even:bg-gray-300 ">
                      <td className="px-4 py-2">Hodnik</td>
                      <td className="px-8 py-2">{hall_size}</td>
                    </tr>
                  )}
                  <tr className="odd:bg-gray-50  even:bg-gray-300">
                    <td className="px-4 py-2">Kupaonica</td>
                    <td className="px-8 py-2">{bathrooms_size}</td>
                  </tr>
                  <tr className="odd:bg-gray-50  even:bg-gray-300">
                    <td className="px-4 py-2">Loggia</td>
                    <td className="px-8 py-2">{loggia_size}</td>
                  </tr>
                  <tr className="font-bold bg-svjetlozelena text-bijela">
                    <td className="px-4 py-2">Površina</td>
                    <td className="px-8 py-2">{area_sqm}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={planZgrade} className="lg:w-[60%] h-50%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDimensionsModal;
