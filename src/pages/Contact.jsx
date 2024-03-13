import slika1 from '../assets/1.jpg';
import slika2 from '../assets/2.jpg';
import slika3 from '../assets/3.jpg';
import slika4 from '../assets/4.jpeg';
import slika5 from '../assets/5.jpeg';
import slika6 from '../assets/6.jpeg';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

const Contact = () => {
  const images = [slika1, slika2, slika3, slika4, slika5, slika6];
  return (
    <section
      id="contact"
      className="w-screen  bg-svjetlosmedja lg:flex-row flex flex-col  justify-center items-center text-zinc-900 text-5xl p-5 gap-10 "
    >
      <Map />
      <ContactForm />
    </section>
  );
};

export default Contact;
