import React from 'react';
import Logo from '../assets/images/Logo.png'

const Navbar:React.FC = () => {
  return (
    <div className='p-10 fixed z-100 w-screen'>
        {/* container */}
      <div className='bg-black w-full h-20 border-white border-2 px-10 rounded-full flex justify-between items-center'>
        {/* first two links */}
        {['About Us' , 'Boucher'].map((link , i) => (
            <a key={i} className='text-white text-lg hover:border-b-2 border-white cursor-pointer'>{link}</a>
        ))}
        {/* logo */}
        <div className='flex gap-2'>
          <img src={Logo} className='h-8 '/>
        <p className='text-3xl text-white'>Cretix</p>
        </div>
        {/* last two links */}
        {['Projects' , 'Review'].map((link , i) => (
            <a key={i} className='text-white text-lg hover:border-b-2 border-white cursor-pointer '>{link}</a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
