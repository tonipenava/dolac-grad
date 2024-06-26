import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hqkb2r8', 'template_vzg0pcu', form.current, {
        publicKey: '3WDq1YuyLvj49FTw9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert(`Your email has been sent successfully.👍`);
          setFormData({
            user_name: '',
            user_email: '',
            message: '',
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-4 items-center text-xl lg:w-1/3 w-[80vw] h-fit lg:h-[69dvh] bg-bijela border-4 border-svjetlozelena p-4 font-medium rounded-tr-3xl rounded-bl-3xl font-josefin "
    >
      <h2 className="text-2xl text-black font-semibold font-josefin">
        Pošalji upit
      </h2>
      <p className="text-sm text-black">
        Za više informacija o raspoloživim nekretninama, ispunite obrazac i mi
        ćemo Vas kontaktirati u najkraćem mogućem roku.
      </p>

      <input
        placeholder="Unesite Ime"
        type="text"
        name="user_name"
        value={formData.user_name}
        onChange={handleChange}
        required
        className="w-full  outline-none     p-2 placeholder:font-light placeholder:text-black text-black border-b-2 border-crna bg-transparent "
      />

      <input
        placeholder="Unesite Email"
        type="email"
        name="user_email"
        value={formData.user_email}
        onChange={handleChange}
        required
        className="w-full p-2 outline-none placeholder:font-light placeholder:text-black text-black  border-b-2 bg-transparent"
      />
      <textarea
        placeholder="Poruka..."
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        required
        className="w-full p-2 outline-none placeholder:font-light  border-b-2 border-crna bg-transparent placeholder:text-black text-black"
      />
      <input
        type="submit"
        value="pošalji"
        className=" bg-svjetlozelena w-1/2 cursor-pointer text-sm p-2 rounded-md mt-3 placeholder:text-black text-white hover:bg-zelena uppercase"
      />
    </form>
  );
};
export default ContactForm;
