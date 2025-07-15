import React from 'react'
import women2  from "../assets/images/women2.png";
import banner from "../assets/images/banner.png";
import { FaInstagram , FaFacebook , FaLinkedinIn , FaTwitter } from 'react-icons/fa';


const Footer:React.FC =() => {
  const headings = ["Home", "About us", "Broucher", "Reviews"];


  



  const rows = [
    ["Explore More", "Get to Know Us", "Cover Page", "What Our Clients Say"],
    ["Whats New", "Our Story", "Recent Work", "Trusted by Clients"],
    ["Call to Action", "Our Mission", "Client Testimonials", "Your Satisfaction, Our Motivation"],
    ["Services", "Our Vision", "What We Offer", "Our Reputation"],
    ["Discover Us", "Features", "Popular Website Packages", "Client Success"],
    ["Start Your Journey", "Our Values", "Lets Build Yours", "Feedback"],
  ];

  return (
    <div className='bg-black h-fit flex flex-col justify-center pt-10 text-white '>
      {/* contact */}
      <div className='h-15 md:h-24  lg:h-32  border-t-2 md:border-t-3 border-b-2 md:border-b-3 border-white w-full mb-20'>
       <img src={banner} alt="bannerr" className='banner  -rotate-2  h-14 sm:h-auto object-cover sm:w-screen py-2' />
      </div>
      <div className='flex  justify-evenly items-center m-3  mb-25 lg:mb-auto'>
        <div className='w-140 2xl:w-[35vw] flex flex-col items-center lg:items-start gap-8'>
            <h1 className='text-5xl sm:text-6xl 2xl:text-7xl text-center md:text-start'>Get In Touch Today!</h1>
            <p className='sm:text-lg 2xl:text-xl text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsa consequatur nihil ducimus omnis molestias aliquam ab reiciendis  consectadipisicing elit.</p>
            
            <form className='bg-gray-600/30 backdrop-blur-xl border-2  h-15 2xl:h-20 w-full lg:w-[75%] px-3 rounded-full flex items-center'>
            <input type="text" className='  h-15 w-full lg:w-[75%] px-3 2xl:text-xl outline-none ' placeholder='Enter your email' />
            <button className='bg-lime-400 px-8 py-2 2xl:text-xl text-black rounded-4xl font-semibold hover:bg-lime-500'>Send</button>
            </form>
        </div>
        <img src={women2} alt="" className='hidden lg:block h-[90vh] 2xl:h-[90vh] object-cover'/>
      </div>





      {/* footer */}



      <div className=' lg:mx-10  '>
        <div className='bg-lime-500 w-full h-auto rounded-b-none lg:rounded-b-[40px] rounded-[40px] p-3 lg:p-10'>
          <div className='flex items-center md:items-start justify-between pt-5 lg:pt-0'>
            <h1 className='text-3xl md:text-6xl 2xl:text-8xl font-semibold'>Creatix</h1>
            <p className='w-40 sm:w-60 md:w-100 lg:w-120 text-xs md:text-base 2xl:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laudantium autem illum eveniet placeat ipsam quia quisquam, magni maiores </p>
          </div>
           <div className="flex flex-wrap sm:flex-nowrap  md:flex-row  justify-between  py-15 md:py-20">
      <table className="w-120 md:w-220 2xl:w-300 text-left mb-10 md:mb-0">
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index} className="px-2 md:py-5 text-center md:text-start  text-xs md:text-base 2xl:text-2xl">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="px-2 py-2 text-center md:text-start hover:underline text-xs md:text-base 2xl:text-xl  font-light cursor-pointer">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='w-100 2xl:w-120 md:ml-5  flex flex-col justify-between  pt-5 text-center  gap-y-2'>
          <h1 className='text-lg 2xl:text-2xl font-semibold'>Lorem ipsum dolor sit amet</h1>
          <p className='text-center text-sm sm:text-base 2xl:text-xl font-light mb-4 md:mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ullam possimus Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ullam possim </p>
           <div className='text-center md:text-left '>
            <form className='bg-gray-600/30 backdrop-blur-xl border-2  h-12 2xl:h-16 w-[100%] px-3 rounded-full flex  items-center'>
            <input type="text" className='  h-15 w-[75%] px-3 outline-none 2xl:text-xl' placeholder='Enter your email' />
            </form>
            <button className='bg-lime-400 px-8 w-fit py-2 text-black rounded-4xl font-semibold hover:bg-lime-600 mt-5 2xl:text-xl '>Send</button>
           </div>
      </div>
    </div>
    <div className='flex flex-col-reverse md:flex-row gap-8 justify-between text-black items-center  md:text-sm lg:text-base 2xl:text-xl '>
      <p>© CopyRight Reserved by <span className='font-semibold'>CREATIX</span></p>
      <div className="flex justify-between items-center  w-60 text-3xl">
      { [
  { id: 1, icon: <FaInstagram className="hover:text-white duration-200 text-3xl md:text-2xl lg:text-4xl cursor-pointer" /> },
  { id: 2, icon: <FaFacebook className="hover:text-white  duration-200 text-3xl md:text-2xl lg:text-4xl cursor-pointer" /> },
  { id: 3, icon: <FaLinkedinIn className="hover:text-white duration-200 text-3xl md:text-2xl lg:text-4xl cursor-pointer" /> },
  { id: 4, icon: <FaTwitter className="hover:text-white duration-200 text-3xl md:text-2xl lg:text-4xl cursor-pointer" /> },
].map((item) => (
        <span key={item.id}>{item.icon}</span>
      ))}
    </div>
    </div>
        </div> 
      </div>
      {/* ------------------ */}
    </div>
  )
}

export default Footer
