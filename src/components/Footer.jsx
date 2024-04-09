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
    { id: 'home', label: 'Početna' },
    { id: 'gallery', label: 'Galerija' },
    { id: 'stanovi', label: 'Stanovi' },
    { id: 'contact', label: 'Kontakt' },
  ];
  const handleItemClick = (sectionId) => {
    scrollToSection(sectionId);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - window.innerHeight * 0.12,
        behavior: 'smooth',
      });
    }
  };
  return (
    <footer className=" rounded-t-lg lg:rounded-none border-t-2 border-svjetlozelena bg-bijela text-center text-zinc-900  pt-5 pb-5 flex flex-col lg:flex-row lg:justify-center lg:gap-[30%] lg:items-start font-bebasNeue ">
      <div className="flex flex-col justify-center items-center gap-2 pb-6">
        <h1 className=" text-2xl font-bold ">Kontakt</h1>
        <hr className="w-16 h-1 rounded-lg border-0  bg-svjetlozelena " />
        <h2 className=" text-bold">DOLAC GRAD BiH d.o.o.</h2>
        <div className="flex justify-center items-center gap-4">
          <SlLocationPin />
          <h2>Ulica Mile Bošnjaka </h2>
        </div>
        <div className="flex justify-center items-center gap-4">
          <SlScreenSmartphone />
          <a href="tel:+387 63 828 541">+387 63 828 541</a>
        </div>
        <div className="flex justify-center items-center gap-4">
          <SlEnvolope />
          <a href="mailto:info@dolac-grad.ba">info@dolac-grad.com</a>
        </div>

        <div className="flex items-center justify-center gap-4">
          {/* 
<Link to="https://google.com">
  <SlSocialFacebook className="hover:text-[#316FF6] cursor-pointer" />
</Link>
*/}
          <a href="mailto:info@dolac-grad.ba">
            <SlSocialGoogle className="cursor-pointer hover:text-red-600" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-bold ">Linkovi</h1>
        <hr className="w-16 h-1 rounded-lg border-0  bg-svjetlozelena " />
        <ul className="flex items-center h-20">
          {navList.map((item) => (
            <li
              key={item.id}
              className="rounded-sm p-2 hover:bg-svjetlozelena hover:text-bijela duration-300 font-medium text-center cursor-pointer"
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
