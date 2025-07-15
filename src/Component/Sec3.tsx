import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Sec3:React.FC = () => {

  gsap.registerPlugin(ScrollTrigger);

  const lines = () => {
    gsap.fromTo('.line', {
      scaleX: '0%'
    }, {
      scaleX:'100%',
      duration:1.5,
      ease:'power2.out',
      scrollTrigger: {
      trigger: ".line",
      start: "top 90%",
      toggleActions: "play none none none"
    }
    })
  }

  const lines2 = () => {
    gsap.fromTo('.linee', {
      scaleX: '0%'
    }, {
      scaleX:'100%',
      duration:1.5,
      ease:'power2.out',
      scrollTrigger: {
      trigger: ".linee",
      start: "top 90%",
      toggleActions: "play none none none"
    }
    })
  }

const text = () => {
  gsap.fromTo(
    '.text',
    {
      opacity: 0,
      scale: 0.3
    },
    {
      opacity: 1,
      scale: 1, 
      stagger: {
        from:'start'
      }, 
      duration: 0.6, 
      ease: 'back.out(1.7)', 
      scrollTrigger: {
        trigger: '.star',
        start: 'top 70%', // 👈 correct syntax (no comma)
        toggleActions: 'play none none none'
      }
    }
  );
};

  const star2 = () => {
    gsap.fromTo('.star2', {
      opacity:0,
      rotation:0
    }, {
      opacity:1,
      rotation:1080,
      scrollTrigger: {
        trigger:'.star2',
        start:'top, 70%',
        toggleActions: 'play none none none'
      },
      ease:'back.out',
      duration:1  
    })
  }

  const stars = () => {
    gsap.fromTo('.star', {
      opacity:0,
      rotation:0
    }, {
      opacity:1,
      rotation:1080,
      scrollTrigger: {
        trigger:'.star',
        start:'top, 70%',
        toggleActions: 'play none none none'
      },
      ease:'back.out',
      duration:1  
    })
  }

  useGSAP(() => {
    stars();
    text();
    lines();
    lines2();
    star2();
  })

  return (
    <div className="bg-black   h-fit p-10  text-white flex justify-center items-center">
      
     <div className=' my-15 md:my-20  text-5xl md:text-4xl lg:text-6xl 2xl:text-9xl '>
       <div className='visible md:hidden  mb-10 flex items-center justify-between gap-2'>
            <div className='linee w-30 md:w-[40vw] lg:w-[40vw] h-1 bg-white ' />
             <span className='star2 text-2xl lg:text-4xl '>✦</span>
             <div className='linee w-30 md:w-[40vw] lg:w-[40vw] h-1 bg-white ' />
        </div>
        <h1 className='text flex flex-col md:flex-row justify-evenly  items-center font-semibold lg:w-auto 2xl:w-400 gap-5 md:gap-0 text-6xl'>Innovate <span className='star text-4xl lg:text-5xl text-lime-400'>✦</span> Inspire <span className='star text-4xl lg:text-5xl text-lime-400'>✦</span> Create</h1>
        <div className='mt-10 flex items-center justify-evenly px-2 sm:px-0 sm:justify-between gap-2'>
            <div className='line w-30 md:w-[40vw] lg:w-[40vw] 2xl:w-190 h-1 bg-white ' />
             <span className='star text-2xl lg:text-4xl '>✦</span>
             <div className='line w-30 md:w-[40vw] lg:w-[40vw] 2xl:w-190 h-1 bg-white ' />
        </div>
     </div>
    </div>
  )
}

export default Sec3
