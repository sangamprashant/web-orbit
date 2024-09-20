"use client";
import { NAV_LOGO_PNG } from '@/assets/images';
import { mirror_bg } from '@/strings';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const NavItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/service" },
    { title: "Contact Us", link: "/contact-us" },
    { title: "Blog", link: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`text-gray-300 body-font fixed z-50 w-full transition-all duration-300 ${(hasScrolled || isOpen) ? mirror_bg : ""
        }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex justify-between items-center md:w-auto w-full">
          <Link className="flex title-font font-medium items-center md:mb-0" href="/">
            <Image src={NAV_LOGO_PNG} alt="Logo" height={60} width={150} />
          </Link>

          <div className="md:hidden">
            <button
              className="text-gray-900 focus:outline-none"
              aria-label="Toggle navigation"
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
          {NavItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-gray-900 hover:text-black transition-colors duration-300"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
