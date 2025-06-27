import React from 'react'
import women from '../assets/images/women.png';
import Logo from '../assets/images/Logo.png'
import { FaStar } from 'react-icons/fa';

const Hero:React.FC = () => {
  
  return (
    <div className='bg-black'>
      {/* container */}
      <div className='bg-white p-10 pt-40  border rounded-b-[100px] h-auto'>
         {/* heading */}
         <img src={Logo} alt="logo" className='w-32 h-32 absolute left-20 opacity-50' />
         <h1 className='text-center font-semibold text-8xl my-5'>Empowering Brands<br/> Through Creative Solutions</h1>
         

        {/* lower part */}
        <div className='flex justify-between items-center mt-50 px-5'>
          {/* left text , button */}
          <div>
            <p className='w-90 text-lg text-start my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum obcaecati illo rem tempore. Dolores sapiente repudiandae dolor minima, temporibus facilis veniam! Praesentium dolor cum similique mollitia explicabo!</p>
            <button className='border p-3 rounded-full hover:translate-x-2 duration-300'>Join our brand</button>
          </div>
          {/* right text , rating */}
          <div className='flex flex-col justify-end text-end'>
            <div className='flex'>
            {Array(5).fill(0).map((star, index)=>(
    <span key={index}>< FaStar className='text-lime-400 text-4xl'/></span>))}
            </div>
            <h1 className='text-5xl font-semibold'>10 Years</h1>
            <p>Experience</p>
          </div>
        </div>
        {/* img ,circle and buton*/}
        <div className='grid place-items-center relative'>
          <img src={women} alt="women" className='w-70 bg-cover absolute top-[-358px] z-90' />
          <div className='w-100 h-100 rounded-full bg-gradient-to-br from-gray-300 to-transparent absolute bottom-[-34px]'/>
            <div className='bg-white/30 backdrop-blur-xs  flex z-90 justify-evenly w-60 border-white border-1 py-2 rounded-full'>
              <button className='bg-lime-400   p-2 rounded-full hover:bg-lime-500 duration-300'>Lift your brands</button>
              <button className='border p-2 rounded-full text-white hover:bg-white hover:text-black hover:border-white duration-300'>Exchanges</button>
            </div>
        </div>
        
        {/* ---------------------- */}
      </div>
       
       
    </div>
  )
}

export default Hero
