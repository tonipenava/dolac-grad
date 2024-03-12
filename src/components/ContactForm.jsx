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
          alert(`Your email has been sent successfully.`);
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
      className="flex flex-col gap-y-2 text-2xl  text-bijela "
    >
      <label>Name</label>
      <input
        placeholder="Unesite Ime"
        type="text"
        name="user_name"
        value={formData.user_name}
        onChange={handleChange}
        required
        className="rounded-md p-2 outline-none placeholder:font-thin text-smedja  "
      />
      <label>Email</label>
      <input
        placeholder="Unesite Email"
        type="email"
        name="user_email"
        value={formData.user_email}
        onChange={handleChange}
        required
        className="rounded-md p-2 outline-none placeholder:font-thin text-smedja"
      />
      <label>Message</label>
      <textarea
        placeholder="Poruka..."
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        cols={40}
        required
        className="rounded-md p-2 outline-none placeholder:font-thin text-smedja"
      />
      <input
        type="submit"
        value="Send"
        className=" bg-bijela cursor-pointer rounded-md mt-3 text-smedja"
      />
    </form>
  );
};
export default ContactForm;
