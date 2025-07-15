import React from 'react'
import Pic1  from "../assets/images/Pic1.png";
import Pic2  from "../assets/images/Pic2.png";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Sec1:React.FC = () => {

  
  gsap.registerPlugin(ScrollTrigger);

  const imageLeft = () => {
    gsap.fromTo('.img-left', {
      x:-20,
      opacity:0,
      
    }, {
      x:0,
      opacity:1,
       duration:0.5,
      ease:'power1.out',
      scrollTrigger : {
        trigger:'.img-left',
        start: 'top, 40%',
        toggleActions:'play none   none none'
      }
    })
  }

  const imageRight = () => {
    gsap.fromTo('.img-right', {
      y:-50,
      opacity:0
    }, {
      y:0,
      opacity:1,
       duration:0.5,
      ease:'power1.out',
      
      scrollTrigger : {
        trigger:'.img-right',
        start: 'top, 20%',
        toggleActions:'play none   none none'
      }
    })
  }

  const headingSec = () => {
    gsap.fromTo('.heading-sec', {
      x:-15,
      opacity:0,
    }, {
      x:0,
      opacity:1,
      stagger:0.2,
      duration:0.5,
      ease:'power1.out',
      scrollTrigger : {
        trigger:'.heading-sec',
        start: 'top, 45%',
        toggleActions:'play none   none none'
      }
    })
  }

  useGSAP(() => {
    headingSec();
    imageLeft();
    imageRight();
  }, [])

  return (
    <div className='bg-black   h-fit p-10 text-white'>
      <div className=' flex flex-col sm:flex-row  justify-between items-center text-center sm:text-start gap-6'>
        <h1 className='heading-sec text-3xl sm:text-4xl lg:text-6xl  sm:w-140'>Turning Ideas Into Masterpieces</h1>
        <p className='heading-sec sm:text-sm lg:text-base sm:w-100 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde cupiditate vel in commodi delectus mollitia, nisi ratione ipsam nobis ullam voluptatem sit harum veniam cum modi voluptates sequi non!</p>
      </div>
      <div className=' flex flex-col lg:flex-row justify-between  items-center gap-5 my-20'>
        <img src={Pic1} alt="" className='img-left hidden lg:block h-100 lg:h-[80vh] 2xl:h-170  rounded-4xl' />
        <img src={Pic2} alt="" className='img-right md:h-160 lg:h-[100vh] 2xl:h-200 rounded-4xl' />
      </div>

      <div className='img-left relative flex '>
        <div className='bg-lime-400 p-3 w-[55vw] sm:w-100 lg:w-120 font-medium text-xl text-center lg:text-start text-black absolute bottom-30 lg:bottom-45 left-10 sm:left-15 md:left-36 lg:left-15'>
        <p>A CREATIVE DESIGN</p>
        <p>AGENCY</p>
      </div >
      <div className='hidden lg:block'>
        <div className='w-5 h-20 bg-lime-400 absolute bottom-45 left-138 '/>
      <div className='w-4 h-20 bg-lime-400 absolute bottom-45 left-146 '/>
      <div className='w-2 h-20 bg-lime-400 absolute bottom-45 left-153 '/>
      </div>
      </div>
      {/* ----------------------- */}
    </div>
  )
}

export default Sec1
