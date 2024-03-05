import { useRef } from 'react';

const Navbar = () => {
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

  return (
    <nav className="h-[80px] sticky top-0 flex items-center justify-between pl-40 pr-40 z-10 bg-zinc-900">
      <div className="container mx-auto flex items-center justify-between py-4 ">
        <h1 className=" text-zinc-50 text-xl">Logo</h1>
      </div>
      <ul className=" flex items-center justify-between gap-10 text-xl p-4 text-zinc-50 ">
        <li
          className=" rounded-md p-1 hover:cursor-pointer hover:scale-110 hover:border hover:border-zinc-50 transition-transform translate-x-2 duration-300 font-medium "
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
