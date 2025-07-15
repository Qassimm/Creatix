import { useEffect } from 'react'
import './App.css'
import Footer from './Component/Footer'
import Hero from './Component/Hero'
import Navbar from './Component/Navbar'
import ReviewCards from './Component/ReviewCards'
import Reviews from './Component/Reviews'
import Sec1 from './Component/Sec1'
import Sec2 from './Component/Sec2'
import Sec3 from './Component/Sec3'
import Sec4 from './Component/Sec4'
import Lenis from "@studio-freight/lenis";


function App() {
  

    useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // controls smoothness
    });

    // 👇 Define raf inside useEffect so it has access to lenis
    const raf = (time:number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf); // 👈 this starts the animation loop

    return () => {
      lenis.destroy();
    };
  }, []);  

  return (
    <div className='bg-black w-full h-screen font-outfit'>
    <Navbar/>
    <Hero/>
    <Reviews/>
    <Sec1/> 
    <Sec2/>
    <Sec3/>
    <Sec4/>
    <ReviewCards/>
    <Footer/>
     </div>
  )
}

export default App
