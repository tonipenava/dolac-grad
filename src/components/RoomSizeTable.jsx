import React from 'react';

const RoomSizeTable = ({ rooms, apartmentName }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h3 className=" text-4xl ">Room Sizes</h3>
      <hr className="h-1 bg-smedja w-64 mb-10 " />
      <table className="lg:w-[40vw] w-4/5 shadow-md overflow-hidden text-smedja text-xl border-2  border-collapse ">
        <thead>
          <tr className="bg-svjetlosmedja font-bold text-bijela  ">
            <th>{apartmentName}</th>
            <th>m2</th>
          </tr>
        </thead>
        <tbody className=" text-center ">
          {Object.entries(rooms).map(([room, size]) => (
            <tr className="last:bg-gray-20 last:font-bold" key={room}>
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
