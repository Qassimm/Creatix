import React from "react";
import women from "../assets/images/women.png";
import { FaStar } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero: React.FC = () => {

  gsap.registerPlugin(ScrollTrigger);

const animateHeading = () => {
    gsap.to(".heading-letter", {
     opacity: 1,
     duration: 0.05,
     stagger: 0.03,
     ease: 'power1.out',
     delay: 2
   });
  };

  const animateResponsive = () => {
    ScrollTrigger.matchMedia({
      // ✅ Desktop
      "(min-width: 1024px)": () => {
        gsap.fromTo(
          ".hero-sides",
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power1.out",
            delay: 0.8,
            scrollTrigger: {
              trigger: ".hero-sides",
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          ".hero-center",
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".hero-center",
              start: "top 99%",
              toggleActions: "play none none none",
            },
          }
        );
      },

      // ✅ Mobile
      "(max-width: 1023px)": () => {
        gsap.fromTo(
          ".hero-sides",
          { x: 0, y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".hero-sides",
              start: "top 60%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          ".hero-center",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".hero-center",
              start: "top 99%",
              toggleActions: "play none none none",
            },
          }
        );
      },
    });
  };


  useGSAP(() => {
    animateHeading();
    animateResponsive();
  }, []);



  return (
    <div className="bg-black">
      {/* container */}
      <div className="bg-white  lg:px-8 pt-30 lg:pt-40 2xl:pt-50 border rounded-b-[60px] h-auto">
        {/* heading */}
        <h1
  className="text-center font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-8xl 2xl:text-9xl lg:mt-20"
>
  {"Empowering Brands Through Creative Solutions".split("").map((char, i) => (
    <span key={i} className="heading-letter inline-block opacity-0">
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</h1>

        {/* lower part */}
        <div className="hero-sides  flex flex-col sm:flex-row gap-15 sm:gap-10 md:gap-40 lg:flex-row justify-between items-center mt-15  lg:mt-50 px-5 ">
          {/* left text , button */}
          <div className="text-center sm:text-start  ">
            <p className=" sm:w-90 lg:w-60 2xl:w-120 text-lg 2xl:text-2xl text-center sm:text-start my-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
              obcaecati illo rem tempore. Dolores sapiente repudiandae dolor
              minima, temporibus facilis veniam! Praesentium dolor cum similique
              mollitia explicabo!
            </p>
            <button className="2xl:text-2xl border-2 p-3 2xl:p-3 rounded-full hover:translate-x-2 duration-300">
              Join our brand
            </button>
          </div>
          {/* right text , rating */}
          <div className=" flex flex-col justify-end items-center sm:items-end text-end ">
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <span key={index}>
                    <FaStar className="text-lime-400 text-4xl 2xl:text-6xl" />
                  </span>
                ))}
            </div>
            <h1 className="text-5xl 2xl:text-7xl font-semibold">10 Years</h1>
            <p className="2xl:text-3xl">Experience</p>
          </div>
        </div>
        {/* img ,circle and buton*/}
        <div className="hero-center  grid place-items-center relative mt-100 sm:mt-80 lg:mt-auto">
          <img
            src={women}
            alt="women"
            className="w-70 sm:w-70 2xl:w-90 bg-cover absolute top-[-366px]   sm:left-auto  2xl:top-[-470px] z-90"
          />
          <div className="w-80 sm:w-100 2xl:w-120 h-80 sm:h-100 2xl:h-120 rounded-full bg-gradient-to-br from-gray-300 to-transparent absolute bottom-[4px] " />

          <div className="bg-white/30 backdrop-blur-xs  flex z-90 justify-evenly w-60 2xl:w-70  border-white border-1 py-2 2xl:py-4  rounded-full mb-8 ">
            <button className="bg-lime-400   p-2 2xl:p-3 2xl:text-lg rounded-full hover:bg-lime-500 duration-300">
              Lift your brands
            </button>
            <button className="2xl:text-lg border p-2 rounded-full text-white hover:bg-white hover:text-black hover:border-white duration-300">
              Exchanges
            </button>
          </div>
        </div>

        {/* ---------------------- */}
      </div>
    </div>
  );
};

export default Hero;
