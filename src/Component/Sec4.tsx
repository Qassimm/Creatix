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
    <div className='bg-black   h-fit  py-10 text-white'>
      <div className='bg-gray-600/30 h-200  backdrop-blur-xl border-white border-t-2 border-b-2 rounded-[100px] flex flex-col items-center justify-evenly'>
        <div className='flex justify-between items-center w-full px-30'>
             <h1 className="text-6xl flex gap-2 items-center ">
            Meet
            <div className="bg-lime-400 px-6 py-2 skew-x-[-12deg] rounded-md w-fit">
              <span className="inline-block skew-x-[12deg] ">Our Team</span>
            </div>
          </h1>
          <button className='flex items-center gap-4 p-2 bg-white text-black rounded-full '>
            View More <FaArrowRight className='bg-lime-400 text-white text-3xl p-1 rounded-full'/>
          </button>
        </div>
        
        <div className="flex flex-wrap gap-5 justify-center mt-10">
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
          className="bg-white h-70 w-90 rounded-3xl p-4 text-black"
        >
          <div className="flex items-center justify-between border-b-2 pb-5">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 bg-lime-300 rounded-full grid place-items-center">
                <img
                  src={member.image}
                  alt="women"
                  className="h-20 w-20 rounded-full opacity-70 object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold">{member.name}</h2>
            </div>
            <span className="text-4xl text-white bg-black w-10 h-10 text-center rounded-full">
              +
            </span>
          </div>
          <p className="p-5">
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
