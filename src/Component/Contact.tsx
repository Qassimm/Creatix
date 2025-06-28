import React from 'react'
import women2  from "../assets/images/women2.png";

const Contact:React.FC =() => {
  return (
    <div className='bg-black h-fit flex flex-col justify-center pt-10 text-white '>
      <div className='h-25 border-t-3 border-b-3 border-white w-full mb-20'>
        <div className='h-15 border-t-3 border-b-3 border-white w-full text-black -rotate-2 mt-5 bg-white text-5xl'>
            <p className='text-center tracking-wide'>
                App <span className='text-5xl text-lime-400 '>✦</span> Design <span className='text-5xl text-lime-400 '>✦</span> Dashboard <span className='text-5xl text-lime-400 '>✦</span> Wirframe <span className='text-5xl text-lime-400'>✦</span> User References
            </p>
        </div>
      </div>
      <div className='flex justify-evenly items-center'>
        <div className='w-140  flex flex-col gap-8'>
            <h1 className='text-6xl'>Get In Touch Today!</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsa consequatur nihil ducimus omnis molestias aliquam ab reiciendis  consectadipisicing elit.</p>
            
            <form className='bg-gray-600/30 backdrop-blur-xl border-2  h-15 w-[75%] px-3 rounded-full flex items-center'>
            <input type="text" className='  h-15 w-[75%] px-3 outline-none ' placeholder='Enter your email' />
            <button className='bg-lime-400 px-8 py-2 text-black rounded-4xl font-semibold hover:bg-lime-500'>Send</button>
            </form>
        </div>
        <img src={women2} alt="" className=' h-132 object-cover'/>
      </div>
      {/* ------------------ */}
    </div>
  )
}

export default Contact
