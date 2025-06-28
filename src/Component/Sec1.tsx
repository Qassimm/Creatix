import React from 'react'
import Pic1  from "../assets/images/Pic1.png";
import Pic2  from "../assets/images/Pic2.png";

const Sec1:React.FC = () => {
  return (
    <div className='bg-black   h-fit p-10 text-white'>
      <div className='flex justify-between items-center'>
        <h1 className='text-6xl w-140'>Turning Ideas Into Masterpieces</h1>
        <p className='w-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde cupiditate vel in commodi delectus mollitia, nisi ratione ipsam nobis ullam voluptatem sit harum veniam cum modi voluptates sequi non!</p>
      </div>
      <div className='flex justify-between items-center gap-5 my-20'>
        <img src={Pic1} alt="" className='h-130  rounded-4xl' />
        <img src={Pic2} alt="" className='h-160 rounded-4xl' />
      </div>
      <div className='relative flex '>
        <div className='bg-lime-400 p-3 w-120 font-medium text-xl text-black absolute bottom-45 left-15'>
        <p>A CREATIVE DESIGN</p>
        <p>AGENCY</p>
      </div>
      <div className='w-5 h-20 bg-lime-400 absolute bottom-45 left-138 '/>
      <div className='w-4 h-20 bg-lime-400 absolute bottom-45 left-146 '/>
      <div className='w-2 h-20 bg-lime-400 absolute bottom-45 left-153 '/>
      </div>
      {/* ----------------------- */}
    </div>
  )
}

export default Sec1
