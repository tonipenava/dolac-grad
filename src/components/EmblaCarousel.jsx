import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="embla flex justify-center items-center">
      <div className="embla__viewport w-[100%] lg:w-[60%]" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((imageUrl, index) => (
            <div className="embla__slide" key={index}>
              <img src={imageUrl} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
