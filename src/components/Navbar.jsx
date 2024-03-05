import { useRef, useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pageRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-[80px] sticky top-0 flex items-center justify-between z-10 bg-zinc-900 p-[3dvw]">
      <div className="container mx-auto flex items-center justify-between py-4">
        <h1 className="text-zinc-50 text-xl">Logo</h1>
        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-zinc-50 focus:outline-none"
          >
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
      </div>
      {/* Navigation Links */}
      <ul
        className={`lg:flex ${
          isMenuOpen ? 'block' : 'hidden'
        } lg:items-center lg:justify-between gap-10 text-xl p-4 text-zinc-50`}
      >
        <li
          className="rounded-md p-1 hover:cursor-pointer hover:scale-110 hover:border hover:border-zinc-50 transition-transform translate-x-2 duration-300 font-medium "
          onClick={() => scrollToSection('home')}
        >
          Home
        </li>
        <li
          className="rounded-md p-1 hover:cursor-pointer hover:scale-110 hover:border hover:border-zinc-50 transition-transform translate-x-2 duration-300 font-medium "
          onClick={() => scrollToSection('about')}
        >
          About
        </li>
        <li
          className="rounded-md p-1 hover:cursor-pointer hover:scale-110 hover:border hover:border-zinc-50 transition-transform translate-x-2 duration-300 font-medium "
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
