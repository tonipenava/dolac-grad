import { SlEnvolope, SlScreenSmartphone, SlLocationPin } from 'react-icons/sl';
import logo from '../assets/logoGold-min.png';

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
    <footer className=" rounded-t-3xl lg:rounded-none border-t-2 border-svjetlozelena bg-bijela text-center text-zinc-900  pt-5 pb-5 flex flex-col lg:flex-row lg:justify-center lg:gap-[30%] lg:items-start font-josefin font-medium ">
      <div className="flex flex-col justify-center items-center gap-2 pb-6 ">
        <div>
          <h1 className=" text-bold">Dolac Grad d.o.o.</h1>
          <div className="flex justify-center items-center gap-4">
            <SlLocationPin />
            <p>Ulica Viteza Mile Bošnjaka </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <SlEnvolope />
            <a href="mailto:info@dolac-grad.ba">info@dolac-grad.com</a>
          </div>
        </div>
        <div
          className="flex lg:justify-evenly lg:flex-row flex-col items-center gap-2
         w-full "
        >
          <div className="  p-3   flex justify-center items-center flex-col gap-2 lg:justify-around w-4/5  lg:w-[200px]">
            <hr className="w-full h-[2px] bg-zinc-900" />

            <h1>Jakov Jukić</h1>
            <div className="flex justify-center items-center ">
              <SlScreenSmartphone />
              <a href="tel:+387 63 823 541">+387 63 823 541</a>
            </div>
            <div>
              <a href="mailto:jakov@dolac-grad.ba">jakov@dolac-grad.ba</a>
            </div>
          </div>
          <div className="  p-3  flex justify-center items-center flex-col gap-2 lg:justify-around w-4/5 lg:w-[200px]">
            <hr className="w-full h-[2px] bg-zinc-900" />

            <h1>Zdravko Jukić</h1>
            <div className="flex justify-center items-center ">
              <SlScreenSmartphone />
              <a href="tel:+387 63 790 839">+387 63 790 839</a>
            </div>
            <div>
              <a href="mailto:zdravko@dolac-grad.ba">zdravko@dolac-grad.ba</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center ">
        <ul className="flex justify-center items-start pt-4 h-full  text-xl">
          {navList.map((item) => (
            <li
              key={item.id}
              className="rounded-sm p-2 lg:hover:bg-svjetlozelena lg:hover:text-bijela duration-300 font-josefin  font-normal  text-center cursor-pointer text-base caret-transparent"
              onClick={() => handleItemClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <img
          src={logo}
          alt="Logo"
          className="bg-contain pl-20 pr-20  lg:w-[450px]"
        />
      </div>
    </footer>
  );
};

export default Footer;
