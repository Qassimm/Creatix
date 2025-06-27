import React from "react";
import Pic2 from '../assets/images/Pic2.png'
import { FaArrowRight } from "react-icons/fa";

const Sec2: React.FC = () => {
  return (
    <div className="bg-black   h-fit   text-white ">
      <div className="bg-gray-600/30 h-200 w-full backdrop-blur-xl border-white border-t-2 border-b-2 rounded-[100px] flex items-center justify-evenly z-20">
        <div >
          <h1 className="text-6xl flex gap-2 items-center ">
            Our
            <div className="bg-lime-400 px-6 py-2 skew-x-[-12deg] rounded-md w-fit">
              <span className="inline-block skew-x-[12deg] ">Services</span>
            </div>
          </h1>
          <p className="my-8 w-110 text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            aliquam blanditiis necessitatibus
          </p>

           <div className="flex flex-col gap-4">
      {[
    'UI/UX Design',
    'Web Development',
    'App Development',
    'Branding & Identity',
  ].map((title, index) => (
        <div
          key={index}
          className="group p-8 bg-transparent hover:bg-black border-white border-2 w-full h-20 rounded-full text-2xl flex items-center justify-between cursor-pointer transition-all duration-300 "
        >
          <div className="flex gap-4">
            <p className="text-white group-hover:text-lime-400 transition-colors duration-300">
              {String(index + 1).padStart(2, '0')}
            </p>
            <p>{title}</p>
          </div>
          <FaArrowRight />
        </div>
      ))}
    </div>
        </div>
        <img src={Pic2} alt="" className="h-150 rounded-4xl"/>
        <div className="flex flex-col gap-8">
          <div className="w-55 h-72 rounded-4xl bg-gray-800  flex flex-col justify-between items-center p-3 ">
            <p >
              Lorem ipsum, dolor sit amet consectetur .
            </p>
            <div className="flex items-center justify-between w-full px-2">
              <h1 className="text-3xl w-32 font-semibold">See how we work</h1>
              <FaArrowRight className="bg-gray-700 text-5xl p-3 rounded-full"/>
            </div>
          </div>

          <div className="w-55 h-72 rounded-4xl bg-lime-400 flex flex-col justify-between items-center p-3 text-black">
             <p >
              Lorem ipsum, dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur .
            </p>
            <div className="flex items-center justify-between w-full px-2">
              <h1 className="text-3xl w-32 font-semibold">Meet our experts</h1>
              <FaArrowRight className="bg-white text-5xl p-3 rounded-full "/>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="w-110 h-20 bg-lime-400 rounded-[50%] absolute left-100 bottom-[-20px] blur-2xl opacity-25"/>
        <div className="w-110 h-20 bg-lime-400 rounded-[50%] absolute right-0 bottom-190 blur-2xl opacity-25 -rotate-10"/>
      </div>
      {/* ---------- */}
    </div>
  );
};

export default Sec2;
