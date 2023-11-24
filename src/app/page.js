import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Fleet from './components/Fleet'
import Reviews from './components/Reviews'
import Booking from './components/Booking'
import Footer from './components/Footer'
import { FaPhone, FaBriefcase } from 'react-icons/fa'
import { BsPersonFill, BsTelephoneFill } from 'react-icons/bs' 
import { Oswald } from 'next/font/google'
import { Questrial } from 'next/font/google'

const oswald = Oswald({
    weight: '400',
    subsets: ['latin'],
    preload: false
})

const questrial = Questrial({
    weight: '400',
    subsets: ['latin']
})

export default function Home() {
  return (
    <main className="">
      <div className='' id='hero'>
      <Navbar/>
      <Hero/>
      </div>

      <div id='boxes' className='flex flex-col md:flex-row items-center justify-center font-sans text-center md:relative md:bottom-12'>


      <div class="max-w-sm p-6 bg-[#0E3047] flex flex-col items-center justify-center space-y-10 bg-cover w-[400px] h-96" style={{ backgroundImage: 'url("https://i.ibb.co/x8tqNzS/unnamed.jpg")' }}>
    
 
</div>


<div class="max-w-sm p-6 bg-[#0E3047] flex flex-col items-center justify-center space-y-10 bg-cover  w-[400px] h-96" style={{ backgroundImage: 'url("https://i.ibb.co/Dtc1JNR/image.jpg")' }}>
    

</div>



<div class="max-w-sm p-6 bg-[#0E3047] flex flex-col items-center justify-center space-y-10  bg-cover  w-[400px] h-96" style={{ backgroundImage: 'url("https://i.ibb.co/S7YsfKF/image.jpg")' }}>
    

</div>



      </div>

      <Fleet/>
      <Reviews/>
      <Booking/>
      <Footer/>
    </main>
  )
}
