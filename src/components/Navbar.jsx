import React, { useState, useEffect } from 'react';
import logo from '../assets/logoGold-min.png';
const navList = [
  { id: 'home', label: 'Početna' },
  { id: 'gallery', label: 'Galerija' },
  { id: 'stanovi', label: 'Stanovi' },
  { id: 'contact', label: 'Kontakt' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    setIsSmallScreen(mediaQuery.matches);

    const handler = () => setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addListener(handler);

    return () => mediaQuery.removeListener(handler);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - window.innerHeight * 0.12,
        behavior: 'smooth',
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-bijela h-[12vh] w-full sticky top-0 flex items-center justify-center z-50 lg:flex lg:justify-around bg-opacity-90">
      <div
        onClick={() => handleItemClick('home')}
        className="lg:w-[1/2] w-screen flex items-center justify-start  lg:pb-3"
      >
        <img src={logo} alt="Logo" className=" bg-cover h-auto w-[170px] p-5" />
      </div>

      {!isSmallScreen && (
        <ul className="hidden lg:flex lg:items-center lg:justify-start rounded-b-lg lg:gap-10 text-lg text-zinc-900 bg-zelena opacity-80 lg:bg-transparent pr-5  ">
          {navList.map((item) => (
            <div
              key={item.id}
              className="rounded-sm p-2 hover:bg-zinc-50 hover:text-svjetlozelena cursor-pointer font-medium text-center"
              role="button"
              onClick={() => handleItemClick(item.id)}
            >
              {item.label}
            </div>
          ))}
        </ul>
      )}

      <div className="block lg:hidden pr-4">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isSmallScreen && (
        <ul
          style={{
            height: isMenuOpen ? '40vh' : '0px',
            transition: 'height 0.25s ease-in-out',
            overflow: 'hidden',
          }}
          className="lg:hidden text-xl text-zinc-900 bg-bijela opacity-80 w-screen absolute top-[12vh]  grid grid-cols-1 grid-rows-5 gap-1 "
        >
          {navList.map((item) => (
            <li
              key={item.id}
              className="rounded-sm p-2 hover:bg-zinc-50 hover:text-svjetlozelena font-medium text-center "
              onClick={() => handleItemClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
