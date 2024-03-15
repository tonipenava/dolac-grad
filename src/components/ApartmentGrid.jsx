// ApartmentGrid.js
import React from 'react';
import ApartmentGridItem from './ApartmentGridItem';

const ApartmentGrid = ({ apartments }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  pl-30 p-10 md:pl-20 lg:pl-40 lg:pr-40 gap-8 gap-y-16 ">
      {apartments.map((apartment) => (
        <ApartmentGridItem key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
};

export default ApartmentGrid;
