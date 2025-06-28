import React from 'react'
import Pic3 from '../assets/images/Pic3.jpg';
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from 'react-icons/fa';




const ReviewCards:React.FC = () => {
    
   


  
  return (
    <div className='bg-black   h-fit p-10 text-white'>
      
     <div className='flex overflow-x-auto justify-center items-center'>
        <div className='p-10 bg-gray-600/30   backdrop-blur-xl rounded-3xl  w-150 '>
            <div className='flex  justify-between'>
                <div className='flex items-center gap-5'>
                    <img src={Pic3} alt="" className='w-20 h-20 object-cover rounded-full' />
                    <div>
                        <p className='text-xl'>Nolan</p>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                </div>
                <FaQuoteRight className='text-2xl text-lime-400'/>
            </div>
            <p className='pt-10'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione modi, molestiae incidunt nulla quasi accusantium culpa deleniti illum maiores corporis nisi. At, ad quia? Aliquam blanditiis non debitis dolor?
            </p>
            
        </div>
        
        
      </div>
      <div className='flex justify-center items-center gap-5 py-20'>
        <button className='bg-gray-800 text-3xl p-3 rounded-full hover:bg-gray-700'><FaArrowLeft/></button>
        <button className='bg-gray-800 text-3xl p-3 rounded-full hover:bg-gray-700'><FaArrowRight/></button>
      </div>
      
      
      
    
      {/* ------------- */}
    </div>
  )
}

export default ReviewCards
