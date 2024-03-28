import React from 'react';
import EmblaCarousel from '../components/EmblaCarousel';

// Import images from assets folder
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';
import image8 from '../assets/8.png';
import image9 from '../assets/9.png';
import image10 from '../assets/10.png';
const Gallery = () => {
  // Options for Images Carousel
  const OPTIONS = { dragFree: true, loop: true };

  // Array of imported images
  const SLIDES = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  return (
    <section
      id="gallery"
      className="w-screen flex flex-col justify-center items-center text-zinc-50 font-naslov rounded-tr-3xl rounded-bl-3xl pb-16"
    >
      <EmblaCarousel slides={SLIDES} options={OPTIONS} className="" />
    </section>
  );
};

export default Gallery;
