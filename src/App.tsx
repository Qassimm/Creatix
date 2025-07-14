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

function App() {
  

  return (
    <div className='bg-black w-full h-screen font-outfit  '>
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
