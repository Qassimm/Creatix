import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/Logo.png';

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`p-10 fixed z-[100] w-screen transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* container */}
      <div className='bg-black w-full h-20 border-white border-2 px-10 rounded-full flex justify-between items-center'>
        {/* first two links */}
        {['About Us', 'Boucher'].map((link, i) => (
          <a
            key={i}
            className='text-white text-lg hover:border-b-2 border-white cursor-pointer'
          >
            {link}
          </a>
        ))}

        {/* logo */}
        <div className='flex gap-2'>
          <img src={Logo} className='h-8' />
          <p className='text-3xl text-white'>Cretix</p>
        </div>

        {/* last two links */}
        {['Projects', 'Review'].map((link, i) => (
          <a
            key={i}
            className='text-white text-lg hover:border-b-2 border-white cursor-pointer'
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
