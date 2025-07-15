import React, { useEffect, useRef, useState } from 'react';
import Logo from '../assets/images/Logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Navbar: React.FC = () => {

  const navRef = useRef<HTMLDivElement>(null);
  const lastScroll = useRef(0);
  const [isOpen , setIsOpen] = useState(false);

  useGSAP(() => {

    const tl = gsap.timeline();

    tl.fromTo('#nav-container', {
      y:-60,
    }, {
      y:0,
      duration:1,
      ease:'power1.out',
    });

    tl.fromTo('#logo', {
    x:-8,
      opacity:0,
    }, {
      x:0,
      opacity:1,
      duraion:0.1
    });

    tl.fromTo('#navlinks', {
      x:-8,
      opacity:0,
    }, {
      x:0,
      opacity:1,
      duraion:0.1
    })

  }, []);



  useEffect(()=> {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const nav = navRef.current;

      if(!nav) 
        return
      if(currentY > lastScroll.current) {
        gsap.to(nav , {
          y:-150,
          duration:0.5,
          ease:'power1.out'
        });  
      } else {
        gsap.to(nav , {
          y:0,
          duration:0.35,
          ease:'power1.out'
        });
      }
      
      lastScroll.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return() => window.removeEventListener('scroll' , handleScroll)
  }, [])


  return (
    <div
      id="nav-container"
      ref={navRef}
      className="lg:p-10 fixed z-[100] w-screen transition-opacity duration-300"
    >
      <div className="bg-black w-full h-20 2xl:h-30 border-white border-2 px-10 lg:rounded-full flex justify-between items-center">
        {/* Left Links */}
        {['About Us', 'Boucher'].map((link, i) => (
          <a
            id='navlinks'
            key={i}
            className="hidden lg:flex text-white text-lg 2xl:text-3xl hover:border-b-2 border-white cursor-pointer"
          >
            {link}
          </a>
        ))}

        {/* Logo */}
        <div
          id='logo'
           className="flex gap-2">
          <img src={Logo} className="h-8" />
          <p className="text-3xl 2xl:text-5xl text-white">Cretix</p>
        </div>

        {/* Right Links */}
        {['Projects', 'Review'].map((link, i) => (
          <a
            id='navlinks'
            key={i}
            className="hidden lg:flex text-white text-lg 2xl:text-3xl hover:border-b-2 border-white cursor-pointer"
          >
            {link}
          </a>
        ))}

        {/* Hamburger Icon - Mobile Only */}
        <button
          id='logo'
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-3 text-xl text-white cursor-pointer rounded-full duration-300 hover:text-gray-400"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        
        className={`lg:hidden bg-black text-white absolute top-20 left-0 w-full px-10 py-6 flex flex-col gap-4 transition-all duration-300 ease-in-out border-2 ${
          isOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-5 opacity-0 pointer-events-none'
        }`}
      >
        {['About Us', 'Boucher', 'Projects', 'Review'].map((link, i) => (
          <a key={i} className="text-lg border-b border-white pb-1">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
