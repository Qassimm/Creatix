import React from 'react'
import women2  from "../assets/images/women2.png";
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
      {/* footer */}
      <div className=' mx-10 mb-2 '>
        <div className='bg-lime-500 w-full h-165 rounded-[40px] p-20'>
          <div className='flex justify-between'>
            <h1 className='text-6xl font-semibold'>Creatix</h1>
            <p className='w-120'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laudantium autem illum eveniet placeat ipsam quia quisquam, magni maiores </p>
          </div>
           <div className="flex justify-between py-20">
      <table className="w-220 text-left ">
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index} className="px-2 py-5 ">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="px-2 py-2 hover:underline font-light cursor-pointer">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='w-100 ml-5  flex flex-col justify-between pt-5 text-center items-centr gap-y-2'>
          <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet</p>
          <p className='text-center font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ullam possimus Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ullam possim </p>
           <div className='text-left '>
            <form className='bg-gray-600/30 backdrop-blur-xl border-2  h-12 w-[100%] px-3 rounded-full flex items-center'>
            <input type="text" className='  h-15 w-[75%] px-3 outline-none ' placeholder='Enter your email' />
            </form>
            <button className='bg-lime-400 px-8 w-fit py-2 text-black rounded-4xl font-semibold hover:bg-lime-600 mt-5'>Send</button>
           </div>
      </div>
    </div>
    <div className='flex justify-between text-black items-center   '>
      <p>© CopyRight Reserved by <span className='font-semibold'>CREATIX</span></p>
      <div className="flex justify-between items-center w-60 text-3xl">
      { [
  { id: 1, icon: <FaInstagram className="hover:text-white duration-200 cursor-pointer" /> },
  { id: 2, icon: <FaFacebook className="hover:text-white duration-200 cursor-pointer" /> },
  { id: 3, icon: <FaLinkedinIn className="hover:text-white duration-200 cursor-pointer" /> },
  { id: 4, icon: <FaTwitter className="hover:text-white duration-200 cursor-pointer" /> },
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
