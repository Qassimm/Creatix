import React from 'react'

const Reviews:React.FC = () => {
  return (
    <div className='bg-black   h-fit p-10 '>
      <div className='h-40 w-auto flex justify-evenly items-center bg-gray-600/30 backdrop-blur-xl my-10 rounded-3xl border-white border-2  '>
        <div className='text-center text-white '>
            <h1 className='text-4xl font-semibold '>2000<span className='text-lime-400'>+</span></h1>
            <p className='font-light'>Company</p>
        </div>
        <div className='text-center text-white'>
            <h1 className='text-4xl  font-semibold'>10<span className='text-lime-400'>+</span></h1>
            <p className='font-light'>Years ago</p>
        </div>
        <div className='text-center text-white'>
            <h1 className='text-4xl  font-semibold'>800<span className='text-lime-400'>+</span></h1>
            <p className='font-light'>Hours of digitals</p>
        </div>
        <div className='text-center text-white'>
            <h1 className='text-4xl  font-semibold'>150M<span className='text-lime-400'>+</span></h1>
            <p className='font-light'>In Tracked Previews</p>
        </div>
      </div>
      <div className='relative'>
          <div className='w-80 h-50 rounded-[50%] rotate-12 bg-lime-400 absolute left-10 bottom-0  blur-3xl opacity-15'/>
        </div>
    </div>
  )
}

export default Reviews