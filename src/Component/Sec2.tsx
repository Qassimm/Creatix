import React from "react";
import Pic2 from '../assets/images/Pic2.png'
import { FaArrowRight } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Sec2: React.FC = () => {


  gsap.registerPlugin(ScrollTrigger);

  const background = () => {
    gsap.fromTo('.bg', {
      y:-20,
      opacity:0
    } , {
      y:0,
      opacity:1,
      scrollTrigger: {
        trigger:'.section',
        start:'top, 50%',
        toggleActions: 'play none none none'
      }
    })
  };

  const blurContainer = () => {
    gsap.fromTo('.bl', {
      y:-20,
      opacity:0
    } , {
      y:0,
      opacity:0.2,
      scrollTrigger: {
        trigger:'.section',
        start:'top, 40%',
        toggleActions: 'play none none none'
      }
    })
  }

  const section = () => {
    gsap.fromTo('.section', {

      opacity:0,
      x:-20,
      delay:0.2
    }, {
      opacity:1,
      x:0,
      scrollTrigger: {
        trigger:'.section',
        start:'top, 30%',
        toggleActions: 'play none none none'
      },
      stagger:0.5
    })
  }

  useGSAP(() => {

    background();
    blurContainer();
    section();
  })

  return (
    <div className="bg-black   h-fit   text-white ">
      <div className="bg bg-gray-600/30 h-fit lg:h-auto w-full backdrop-blur-xl border-white border-t-2 border-b-2 rounded-[60px] sm:rounded-[100px] flex flex-wrap lg:flex-row items-center justify-evenly z-20 py-10 gap-10 sm:gap-15 lg:gap-0">
      
        <div className="section flex flex-col items-center lg:items-start md:flex-none">
          <h1 className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl text-center md:text-start flex gap-2 items-center justify-center md:justify-start ">
            Our
            <div className="bg-lime-400 px-6 py-2 skew-x-[-12deg] rounded-md w-fit">
              <span className="inline-block skew-x-[12deg] ">Services</span>
            </div>
          </h1>
          <p className="my-8 md:w-110 text-base md:text-lg 2xl:text-xl text-center lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            aliquam blanditiis necessitatibus
          </p>

           <div className="flex flex-col gap-4 mx-2">
      {[
    'UI/UX Design',
    'Web Development',
    'App Development',
    'Branding & Identity',
  ].map((title, index) => (
        <div
          key={index}
          className="group p-3 sm:p-6 md:p-8 bg-transparent hover:bg-black border-white border-2 sm:w-90 lg:w-110 2xl:w-100 h-20 rounded-full text-xl sm:text-2xl  flex items-center justify-between cursor-pointer transition-all duration-300 gap-20 md:gap-0"
        >
          <div className="flex items-center gap-4">
            <p className="text-white group-hover:text-lime-400 transition-colors duration-300">
              {String(index + 1).padStart(2, '0')}
            </p>
            <p className="text-base sm:text-lg md:text-xl">{title}</p>
          </div>
          <FaArrowRight />
        </div>
      ))}
    </div>
        </div>
        <img src={Pic2} alt="" className="section hidden lg:block h-100 sm:h-150 2xl:h-160 rounded-4xl"/>
       <div className="section flex flex-col md:flex-row lg:flex-col gap-8 my-10">
      {[
        {
          text: 'Lorem ipsum, dolor sit amet consectetur.',
          heading: 'See how we work',
          bg: 'bg-gray-800',
          hover:'bg-gray-900',
          textColor: 'text-white',
          iconBg: 'bg-gray-700',
        },
        {
          text: 'Lorem ipsum, dolor sit amet consectetur Lorem ipsum, dolor .',
          heading: 'Meet our experts',
          bg: 'bg-lime-400',
          hover:'bg-lime-500',
          textColor: 'text-black',
          iconBg: 'bg-white',
        },
      ].map((card, index) => (
        <div
          key={index}
          className={`w-65 sm:w-75 2xl:w-80 lg:w-55 lg:h-72 rounded-4xl ${card.bg} flex flex-col justify-evenly lg:justify-between items-center   p-4 ${card.textColor}
           hover:opacity-80 duration-300`}
        >
          <p>{card.text}</p>
          <div className="flex items-center justify-between w-full lg:px-2">
            <h1 className="text-2xl sm:text-3xl w-32 font-semibold">{card.heading}</h1>
            <FaArrowRight className={`${card.iconBg} text-5xl p-3 rounded-full`} />
          </div>
        </div>
      ))}
    </div>
      </div>
      <div className="relative">
        <div className="bl w-80 sm:w-110 h-10 sm:h-20 bg-lime-400 rounded-[50%] absolute left-0 bottom-[1480px] sm:bottom-[-20px] blur-2xl opacity-25 -rotate-5"/>
        <div className="bl  w-80 sm:w-110 h-10 sm:h-20 bg-lime-400 rounded-[50%] absolute sm:right-5 bottom-[-15px] sm:bottom-[790px] md:bottom-[730px] blur-2xl opacity-25 "/>
      </div>
      {/* ---------- */}
    </div>
  );
};

export default Sec2;
