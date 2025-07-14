import React, { useEffect, useRef, useState } from 'react';
import Logo from '../assets/images/Logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0); // ✅ useRef instead of useState

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // ✅ no dependency needed here

  return (
    <div
      className={`lg:p-10 fixed z-[100] w-screen transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Navbar Container */}
      <div className='bg-black w-full h-20 2xl:h-30 border-white border-2 px-10 lg:rounded-full flex justify-between items-center'>
        {/* Left Links */}
        {['About Us', 'Boucher'].map((link, i) => (
          <a
            key={i}
            className='hidden lg:flex text-white text-lg 2xl:text-3xl hover:border-b-2 border-white cursor-pointer'
          >
            {link}
          </a>
        ))}

        {/* Logo */}
        <div className='flex gap-2'>
          <img src={Logo} className='h-8' />
          <p className='text-3xl 2xl:text-5xl text-white'>Cretix</p>
        </div>

        {/* Right Links */}
        {['Projects', 'Review'].map((link, i) => (
          <a
            key={i}
            className='hidden lg:flex text-white text-lg 2xl:text-3xl hover:border-b-2 border-white cursor-pointer'
          >
            {link}
          </a>
        ))}

        {/* Hamburger Icon - Mobile Only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='lg:hidden p-3 text-xl text-white cursor-pointer rounded-full duration-300 hover:text-gray-400'
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-black text-white absolute top-20 left-0 w-full px-10 py-6 flex flex-col gap-4 transition-all duration-300 ease-in-out border-2 ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-5  opacity-0 pointer-events-none'
        }`}
      >
        {['About Us', 'Boucher', 'Projects', 'Review'].map((link, i) => (
          <a key={i} className='text-lg border-b border-white pb-1'>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
