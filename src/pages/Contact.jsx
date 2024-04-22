import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-screen  lg:flex-row flex flex-col justify-center items-center text-zinc-900 text-5xl gap-10 pb-10"
    >
      <Map />
      <ContactForm />
    </section>
  );
};

export default Contact;
