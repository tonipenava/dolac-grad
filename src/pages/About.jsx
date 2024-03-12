import React from 'react';
import EmblaCarousel from '../components/EmblaCarousel';

// Import images from assets folder
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpeg';
import image5 from '../assets/5.jpeg';

const About = () => {
  // Options for Images Carousel
  const OPTIONS = { dragFree: true, loop: true };

  // Array of imported images
  const SLIDES = [image1, image2, image3, image4, image5];

  return (
    <section
      id="about"
      className="w-screen h-screen bg-svjetlosmedja flex flex-col justify-center items-center text-zinc-50 font-naslov"
    >
      <h1 className="text-4xl uppercase pt-5">Dolac Grad</h1>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
};

export default About;
