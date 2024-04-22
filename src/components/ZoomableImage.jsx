import React, { useState } from 'react';

const ZoomableImage = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="relative w-full h-full">
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover cursor-pointer ${
          isZoomed
            ? 'z-10 absolute top-0 left-0 w-screen h-screen object-contain'
            : ''
        }`}
        onClick={toggleZoom}
      />
    </div>
  );
};

export default ZoomableImage;
