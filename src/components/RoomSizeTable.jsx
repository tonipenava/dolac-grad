import React from 'react';

const RoomSizeTable = ({ rooms }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-lg font-semibold mb-2 ">Room Sizes</h3>

      <table className="lg:w-[20vw] w-4/5 rounded-md shadow-md overflow-hidden ">
        <thead>
          <tr className="bg-gray-200 ">
            <th>Room</th>
            <th>m2</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(rooms).map(([room, size]) => (
            <tr key={room}>
              <td>{room}</td>
              <td>{size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomSizeTable;
