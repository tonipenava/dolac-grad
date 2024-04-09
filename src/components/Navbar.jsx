import React, { useState, useEffect } from 'react';
import logo from '../assets/logoGold.png';
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
        className={`lg:flex ${
          isMenuOpen ? 'block' : 'hidden'
        } lg:items-center lg:justify-around rounded-b-lg lg:gap-10 text-xl p-4 text-zinc-900  lg:flex bg-bijela opacity-80  lg:bg-transparent absolute lg:static top-[12vh] left-0 w-screen lg:w-1/3 `}
      >
        {navList.map((item) => (
          <li
            key={item.id}
            className={`rounded-sm p-2 hover:bg-zinc-50 hover:text-svjetzelena cursor-pointer  duration-300 font-medium text-center ${
              isSmallScreen ? 'text-sm' : ''
            }`}
            onClick={() => handleItemClick(item.id)}
            style={{ width: '100%' }} // Full width on mobile
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
