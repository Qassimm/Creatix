import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Pic3 from '../assets/images/Pic3.jpg';
import Pic4 from '../assets/images/Pic4.jpg';
import Pic5 from '../assets/images/Pic5.jpg';
import Pic6 from '../assets/images/Pic6.jpg';
import Pic7 from '../assets/images/Pic7.png';
import Pic8 from '../assets/images/Pic8.png';

const Sec4:React.FC = () => {
  return (
    <div className='bg-black   h-fit pb-15 lg:py-10 text-white'>
      <div className='bg-gray-600/30  p-8 sm:p-10 py-10 2xl:h-auto  backdrop-blur-xl border-white border-t-2 border-b-2 rounded-[60px] sm:rounded-[100px] flex flex-col items-center justify-evenly'>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-center w-auto  sm:w-100 md:w-200 lg:w-full sm:px-30 2xl:mt-10 '>
             <h1 className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl flex justify-center md:justify-start gap-2 items-center w-75 sm:w-100 md:w-auto ">
            Meet  
            <div className=" bg-lime-400 px-6 py-2 skew-x-[-12deg] rounded-md  sm:w-fit">
              <span className="inline-block skew-x-[12deg] ">Our Team</span>
            </div>
          </h1>
          <button className='flex items-center gap-4 p-2 2xl:p-3 bg-white text-black rounded-full  lg:text-base 2xl:text-2xl w-35 sm:w-auto'>
            View More <FaArrowRight className='bg-lime-400 text-white text-3xl p-1 rounded-full'/>
          </button>
        </div>
        
        <div className="flex flex-wrap gap-5 justify-center mt-10 2xl:my-15">
      {[
  { name: "Bobby", image: Pic5 },
  { name: "Julia", image: Pic4 },
  { name: "Max", image: Pic3 },
  { name: "Alex", image: Pic6 },
  { name: "Nora", image: Pic7 },
  { name: "Marvin", image: Pic8 },
].map((member, index) => (
        <div
          key={index}
          className="bg-white  sm:h-60 lg:h-70 2xl:h-80  sm:w-80 lg:w-90 2xl:w-120 rounded-3xl p-3 text-black"
        >
          <div className="flex items-center justify-between border-b-2 pb-5">
            <div className="flex items-center gap-5">
              <div className="h-15 lg:h-20 2xl:h-25 w-15 lg:w-20 2xl:w-25  bg-lime-300 rounded-full grid place-items-center">
                <img
                  src={member.image}
                  alt="women"
                  className="h-15 lg:h-20 2xl:h-25 w-15 lg:w-20 2xl:w-25 rounded-full opacity-70 object-cover"
                />
              </div>
              <h2 className="text-lg lg:text-xl 2xl:text-2xl font-semibold">{member.name}</h2>
            </div>
            <span className="text-4xl 2xl:text-5xl text-white bg-black w-10 2xl:w-15 h-10 2xl:h-15 text-center rounded-full ">
              +
            </span>
          </div>
          <p className="p-5 text-sm 2xl:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis quisquam numquam sequi illum facere quos voluptatem
            nostrum cum natus amet, porro non,
          </p>
        </div>
      ))}
    </div>


      </div>
      {/* --------- */}
    </div>
  )
}

export default Sec4
