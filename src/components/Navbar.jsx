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
    setIsMenuOpen(false); // Close the menu after clicking on an item
  };

  return (
    <nav className="bg-bijela h-[12vh] w-full  sticky top-0 flex items-center justify-center z-50 lg:flex lg:justify-around bg-opacity-90">
      <div
        onClick={() => handleItemClick('home')}
        className="lg:w-[1/2] w-screen flex items-center justify-start  lg:pb-3"
      >
        <img src={logo} alt="Logo" className=" bg-cover h-auto w-[170px] p-3" />
      </div>
      {/* Navigation Links */}

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

      <ul
        style={{
          height: isMenuOpen ? '100vh' : '0px',
          transition: 'height 0.25s ease-in-out',
          overflow: 'hidden',
        }}
        className={`lg:items-center lg:justify-around rounded-b-lg lg:gap-10 text-xl  text-zinc-900  lg:flex bg-bijela opacity-80  lg:bg-transparent absolute lg:static top-[12vh]  w-screen lg:w-1/3 z-10 grid place-items-center`}
      >
        <div>
          {navList.map((item) => (
            <li
              key={item.id}
              className={`rounded-sm p-2 hover:bg-zinc-50 hover:text-svjetlozelena cursor-pointer  font-medium text-center mt-[-12vh]${
                isSmallScreen ? 'text-sm' : ''
              }`}
              onClick={() => handleItemClick(item.id)}
              style={{ width: '100%' }} // Full width on mobile
            >
              {item.label}
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
