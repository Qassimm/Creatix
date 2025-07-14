import React from 'react'

const stats = [
  { value: '2000', label: 'Company' },
  { value: '10', label: 'Years ago' },
  { value: '800', label: 'Hours of digitals' },
  { value: '150M', label: 'In Tracked Previews' },
];

const Reviews: React.FC = () => {
  return (
    <div className='bg-black h-fit p-10'>
      <div className='  h-fit sm:h-30 lg:h-40 w-auto flex flex-col sm:flex-row gap-10 sm:gap-0 py-6 sm:py-auto   justify-evenly items-center bg-gray-600/30 backdrop-blur-xl my-10 rounded-3xl border-white border-2'>
        {stats.map((stat, index) => (
          <div key={index} className='text-center text-white'>
            <h1 className='text-4xl sm:text-2xl lg:text-4xl 2xl:text-5xl font-semibold'>
              {stat.value}<span className='text-lime-400'> +</span>
            </h1>
            <p className='font-light text-xs lg:text-base 2xl:text-2xl 2xl:mt-1'>{stat.label}</p>
          </div>
        ))}
      </div>
      <div className='relative'>
        <div className='w-50 sm:w-80 h-20 sm:h-50 rounded-[50%] rotate-12 bg-lime-400 absolute left-0 sm:left-10 bottom-0 blur-3xl opacity-15' />
      </div>
    </div>
  );
};

export default Reviews;
