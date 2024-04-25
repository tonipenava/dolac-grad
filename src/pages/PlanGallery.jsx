import EmblaCarousel from '../components/EmblaCarousel';
import slika1 from '../assets/planovi/1.jpeg';
import slika2 from '../assets/planovi/2.jpeg';
import slika3 from '../assets/planovi/3.jpeg';
import slika4 from '../assets/planovi/4.jpeg';
import slika5 from '../assets/planovi/5.jpeg';
import slika6 from '../assets/planovi/6.jpeg';
import slika7 from '../assets/planovi/7.jpeg';
const PlanGallery = () => {
  const OPTIONS = { dragFree: true, loop: true };
  const SLIDES = [slika1, slika2, slika3, slika4, slika5, slika6, slika7];
  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );
};

export default PlanGallery;
