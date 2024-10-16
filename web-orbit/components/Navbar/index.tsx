"use client";
import { NAV_LOGO_PNG } from '@/assets/assets';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';  // Close icon for better UX on mobile
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from 'antd';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const NavItems = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Services", link: "/service" },
    { title: "Contact Us", link: "/contact-us" },
    { title: "Blogs", link: "/blog" },
    { title: "Pricing Plans", link: "/pricing" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 bg-white border-b border-gray-200 transition-all duration-300 ${hasScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={NAV_LOGO_PNG} alt="Logo" height={60} width={150} />
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-10">
          <Button
            className="focus:outline-none"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
            type="link"
            icon={isOpen ? <CloseIcon fontSize="large" className="text-gray-600" /> : <MenuIcon fontSize="large" className="text-gray-900" />}
          />
        </div>

        {/* Navigation Links for larger screens */}
        <nav className={`hidden md:flex items-center space-x-6 gap-1`}>
          {NavItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-gray-900 hover:text-black transition duration-300"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-6 transition-all duration-500 md:hidden ${isOpen ? 'block' : 'hidden'}`}
        >
          {NavItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-white text-2xl font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
