import React from 'react';

const RoomDimensionsModal = ({ isOpen, onClose, apartment }) => {
  if (!isOpen) return null;

  const {
    plan_image,
    livingroom_size,
    bedrooms_size,
    bathrooms_size,
    loggia_size,
  } = apartment;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg  w-[80%] h-[90%] scroll-m-0 flex p-5">
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
        <div className="flex justify-center items-center">
          <img
            src={plan_image}
            alt={`Plan for Apartment ${apartment.number}`}
            className="max-w-full h-auto"
          />
        </div>
        <div className="mt-4 p-5">
          <h2 className="text-xl font-semibold mb-2">Room Dimensions</h2>
          <table className="w-full border-spacing-1 border-2">
            <thead>
              <tr>
                <th className="px-4 py-2">Room</th>
                <th className="px-4 py-2">Dimensions (sqm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">Living Room</td>
                <td className="px-4 py-2">{livingroom_size}</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Bedroom</td>
                <td className="px-4 py-2">{bedrooms_size}</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Bathroom</td>
                <td className="px-4 py-2">{bathrooms_size}</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Loggia</td>
                <td className="px-4 py-2">{loggia_size}</td>
              </tr>
              {/* Add more rows for other rooms if needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoomDimensionsModal;
