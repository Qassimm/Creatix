import React, { useRef, useEffect } from 'react';
import Pic3 from '../assets/images/Pic3.jpg';
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from 'react-icons/fa';
import Pic4 from '../assets/images/Pic4.jpg';
import Pic5 from '../assets/images/Pic5.jpg';
import Pic6 from '../assets/images/Pic6.jpg';
import Pic7 from '../assets/images/Pic7.png';
import Pic8 from '../assets/images/Pic8.png';

const testimonials = [
  {
    name: 'Nolan',
    text: 'Lorem ipsum dolor sit amet consectetur',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione modi, molestiae incidunt nulla quasi accusantium culpa deleniti illum maiores corporis nisi. At, ad quia? Aliquam blanditiis non debitis dolor?',
    image: Pic3,
  },
  {
    name: 'Emma',
    text: 'Frontend Developer',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione modi, molestiae incidunt nulla quasi accusantium culpa deleniti illum maiores corporis nisi. At, ad quia? Aliquam blanditiis non debitis dolor?.',
    image: Pic4,
  },
  {
    name: 'John',
    text: 'Backend Engineer',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione modi, molestiae incidunt nulla quasi accusantium culpa deleniti illum maiores corporis nisi. At, ad quia? Aliquam blanditiis non debitis dolor?',
    image: Pic5,
  },
  {
    name: 'Sophia',
    text: 'UI/UX Designer',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione modi, molestiae incidunt nulla quasi accusantium culpa deleniti illum maiores corporis nisi. At, ad quia? Aliquam blanditiis non debitis dolor?',
    image: Pic7,
  },
  {
    name: 'Benjamen',
    text: 'Backend Engineer',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione modi, molestiae incidunt nulla quasi accusantium culpa deleniti illum maiores corporis nisi. At, ad quia? Aliquam blanditiis non debitis dolor?',
    image: Pic6,
  },
  {
    name: 'Daniel',
    text: 'UI/UX Designer',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione modi, molestiae incidunt nulla quasi accusantium culpa deleniti illum maiores corporis nisi. At, ad quia? Aliquam blanditiis non debitis dolor?.',
    image: Pic8,
  },
];

// 🧠 Cloning first card to end for smooth infinite scroll
const loopedTestimonials = [...testimonials, testimonials[0]];

const ReviewCards: React.FC = () => {

  const  scrollRef = useRef<HTMLDivElement>(null);
  const cardWidth = 600;
  
  useEffect(() =>{
    let interval: any;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        if(scrollRef.current){
          const container = scrollRef.current;
          const maxScrollLeft = container.scrollWidth - container.clientWidth;

          if(Math.ceil(container.scrollLeft + cardWidth) >= maxScrollLeft) {
            container.scrollBy({
              left: 0 ,
              behavior : 'smooth',
            });
            setTimeout(() => {
              container.scrollTo({
                left:0,
                behavior:"auto",
              });
            },600);
          } else{
            container.scrollBy({
              left:cardWidth,
              behavior: 'smooth',
            });
          }
        }
      }, 3000);
    };
    startAutoScroll();
    return () => clearInterval(interval);
  }, []);

   const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <div className="bg-black h-fit flex flex-col justify-center py-10 text-white">
      <div
        className="flex overflow-x-hidden snap-x scroll-smooth w-full px-[calc((100vw-600px)/2)] gap-x-5"
        ref={scrollRef}
      >
        {loopedTestimonials.map((item, index) => (
          <div
            key={index}
            className="p-10 bg-gray-600/30 backdrop-blur-xl rounded-3xl w-[600px] flex-shrink-0 mx-0 snap-center"
          >
            <div className="flex justify-between">
              <div className="flex items-center gap-5">
                <img
                  src={item.image}
                  alt=""
                  className="w-20 h-20 object-cover rounded-full"
                />
                <div>
                  <p className="text-xl">{item.name}</p>
                  <p className="text-sm">{item.text}</p>
                </div>
              </div>
              <FaQuoteRight className="text-2xl text-lime-400" />
            </div>
            <p className="pt-10">{item.review}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-5 py-20">
        <button
          className="bg-transparent border-2 border-white text-3xl p-3 rounded-full hover:bg-gray-700 active:bg-gray-800"
          onClick={() =>scroll('left')}
        >
          <FaArrowLeft />
        </button>
        <button
          className="bg-transparent border-2 border-white active:bg-gray-800 text-3xl p-3 rounded-full hover:bg-gray-700"
         onClick={() =>scroll('right')}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ReviewCards;
