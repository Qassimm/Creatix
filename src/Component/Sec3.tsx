import React from 'react'

const Sec3:React.FC = () => {
  return (
    <div className="bg-black   h-fit p-10  text-white flex justify-center items-center">
      
     <div className=' my-15 md:my-20  text-5xl md:text-4xl lg:text-6xl 2xl:text-9xl '>
       <div className='visible md:hidden  mb-10 flex items-center justify-between gap-2'>
            <div className='w-30 md:w-[40vw] lg:w-[40vw] h-1 bg-white ' />
             <span className='text-2xl lg:text-4xl '>✦</span>
             <div className=' w-30 md:w-[40vw] lg:w-[40vw] h-1 bg-white ' />
        </div>
        <h1 className='flex flex-col md:flex-row justify-evenly  items-center font-semibold lg:w-auto 2xl:w-400 gap-5 md:gap-0 text-6xl'>Innovate <span className='text-4xl lg:text-5xl text-lime-400'>✦</span> Inspire <span className='text-4xl lg:text-5xl text-lime-400'>✦</span> Create</h1>
        <div className='mt-10 flex items-center justify-evenly px-2 sm:px-0 sm:justify-between gap-2'>
            <div className='w-30 md:w-[40vw] lg:w-[40vw] 2xl:w-190 h-1 bg-white ' />
             <span className='text-2xl lg:text-4xl '>✦</span>
             <div className=' w-30 md:w-[40vw] lg:w-[40vw] 2xl:w-190 h-1 bg-white ' />
        </div>
     </div>
    </div>
  )
}

export default Sec3
