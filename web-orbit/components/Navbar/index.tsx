"use client"
import { NAV_LOGO_PNG } from '@/assets/images';
import { mirror_bg } from '@/strings';
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import { useState } from 'react';
// import ThemeButton from '../Reuse/ThemeButton';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Navarr = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/service" },
    { title: "Contact Us", link: "/contact-us" },
    { title: "Blog", link: "/blog" }
  ];

  return (
    <header className={`text-gray-300  body-font fixed z-50 w-full ${mirror_bg} `}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex justify-between items-center md:w-auto w-full">
          <a className="flex title-font font-medium items-center mb-4 md:mb-0">
            <Image src={NAV_LOGO_PNG} alt='' height={60} />
          </a>
          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button
              className="text-gray-300 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon fontSize="large" />
            </button>
          </div>
        </div>


        <nav
          className={`md:ml-auto md:flex flex-wrap items-center text-base justify-center space-x-4 
          ${isOpen ? 'block' : 'hidden'} md:block`}
        >
          {Navarr.map((arr, index) => (
            <a
              key={index}
              href={arr.link}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {arr.title}
            </a>
          ))}
        </nav>


      </div>

      {/* <div className="hidden md:block">
        <ThemeButton title='Login' icon={<ArrowRightAltIcon />} />
      </div> */}

    </header>
  );
}

export default NavBar;
