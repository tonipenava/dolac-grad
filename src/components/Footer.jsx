import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialGoogle,
  SlEnvolope,
  SlScreenSmartphone,
  SlLocationPin,
} from 'react-icons/sl';

import { Link } from 'react-router-dom';

const Footer = () => {
  const navList = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];
  const handleItemClick = (sectionId) => {
    scrollToSection(sectionId);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <footer className=" rounded-t-lg lg:rounded-none border-t-2 border-svjetlozelena bg-bijela text-center text-smedja pt-5 pb-5 flex flex-col lg:flex-row lg:justify-around lg:items-start">
      <div className="flex flex-col justify-center items-center gap-2 pb-6">
        <h1 className=" text-2xl font-bold ">Kontakt</h1>
        <hr className="w-16 h-1 rounded-lg border-0  bg-svjetlozelena " />
        <h2 className=" text-bold">DOLAC GRAD BiH d.o.o.</h2>
        <div className="flex justify-center items-center gap-4">
          <SlLocationPin />
          <h2>Križanje Zagrebačke i Mile Bošnjaka </h2>
        </div>
        <div className="flex justify-center items-center gap-4">
          <SlScreenSmartphone />
          <h2>+38763XXXXXX</h2>
        </div>
        <div className="flex justify-center items-center gap-4">
          <SlEnvolope />
          <h2>info@dolacgrad.com</h2>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Link to="https://google.com">
            <SlSocialFacebook className=" hover:text-[#316FF6] cursor-pointer" />
          </Link>
          <Link to="@gmail:toni99penava@gmail.com">
            <SlSocialGoogle className="cursor-pointer hover:text-red-600" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-bold ">Linkovi</h1>
        <hr className="w-16 h-1 rounded-lg border-0  bg-svjetlozelena " />
        <ul className="">
          {navList.map((item) => (
            <li
              key={item.id}
              className="rounded-sm p-2 hover:bg-zinc-50 hover:text-zinc-900 duration-300 font-medium text-center "
              onClick={() => handleItemClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
