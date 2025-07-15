import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const stats = [
  { value: 2000, label: 'Company' },
  { value: 10, label: 'Years ago' },
  { value: 800, label: 'Hours of digitals' },
  { value: 150, label: 'In Tracked Previews', suffix: 'M' }, // suffix for "150M"
];

const Reviews: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);

  const numberRefs = useRef<HTMLHeadingElement[]>([]);

  const animateNumbers = () => {
    numberRefs.current.forEach((el, index) => {
      const endValue = stats[index].value;
      const suffix = stats[index].suffix || "";

      const obj = { val: 0 };

      gsap.to(obj, {
        val: endValue,
        duration: 1.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          el.textContent = `${Math.floor(obj.val)}${suffix}+`;
        },
      });
    });
  };

  const blurBox = () => {
    gsap.fromTo('.blur-box', {
      opacity: 0,
      x: -10,
    }, {
      x: 0,
      opacity: 0.2,
      duration: 1,
      ease: 'power1.out',
    });
  };

  const reviewContainer = () => {
    gsap.fromTo('.review-container', {
      y: -10,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: ".review-container",
        start: "top 60%",
        toggleActions: "play none none none",
      }
    });
  };

  useGSAP(() => {
    blurBox();
    reviewContainer();
    animateNumbers();
  }, []);

  return (
    <div className='bg-black h-fit p-10'>
      <div className='review-container h-fit sm:h-30 lg:h-40 w-auto flex flex-col sm:flex-row gap-10 sm:gap-0 py-6 justify-evenly items-center bg-gray-600/30 backdrop-blur-xl my-10 rounded-3xl border-white border-2'>
        {stats.map((stat, index) => (
          <div key={index} className='text-center text-white'>
            <h1
              ref={(el) => {if (el) numberRefs.current[index] = el;}}
              className='review-num text-4xl sm:text-2xl lg:text-4xl 2xl:text-5xl font-semibold'
            >
              0+ {/* Initial value will be animated */}
            </h1>
            <p className='font-light text-xs lg:text-base 2xl:text-2xl 2xl:mt-1'>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className='relative'>
        <div className='blur-box w-50 sm:w-80 h-20 sm:h-50 rounded-[50%] rotate-12 bg-lime-400 absolute left-0 sm:left-10 bottom-0 blur-3xl opacity-15' />
      </div>
    </div>
  );
};

export default Reviews;
