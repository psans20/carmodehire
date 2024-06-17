import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Fleet from './components/Fleet'
import Reviews from './components/Reviews'
import Booking from './components/Booking'
import Banner from './components/Banner'
import Footer from './components/Footer'
import { FaPhone, FaBriefcase, FaCalendarCheck } from 'react-icons/fa'
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


      <div class="max-w-sm p-12 bg-[#0E3047] flex flex-col items-center justify-center gap-5">
    
    <FaPhone size={20}  className='text-white md:self-start'/>
    <a href="#">
        <h5 class={`mb-2 text-2xl font-semibold tracking-tight text-white ${oswald.className}`}>Book your sports car today!</h5>
    </a>
    <p class={`mb-3 font-normal text-white ${oswald.className}`}>
						24/7 Booking Available, You are just one step away from Car Mode.					</p>
    <a href="#" class={`inline-flex items-center text-white uppercase ${oswald.className}`}>
    <FaCalendarCheck className='mx-2'/>Rent Your Sports Car Today
        <svg class="w-3 h-3 ml-2.5 hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>


<div class="max-w-sm p-12 bg-[#0E3047] flex flex-col items-center justify-center gap-5">
    
    <FaBriefcase size={20} className='text-white md:self-start'/>
    <a href="#">
        <h5 class={`mb-2 text-2xl font-semibold tracking-tight text-white ${oswald.className}`}>Working Hours</h5>
    </a>
    <p class={`mb-3 font-normal text-white ${oswald.className}`}>
						
    We are avaliable 7 days a week, ready to assist you whenever you need us.		</p>
    <a href="#" class={`inline-flex items-center text-white ${oswald.className}`}>
   Available 24/7
    </a>
</div>



<div class="max-w-sm p-12 bg-[#0E3047] flex flex-col items-center justify-center gap-5">
    
    <BsPersonFill size={20} className='text-white md:self-start'/>
    <a href="#">
        <h5 class={`mb-2 text-2xl font-semibold tracking-tight text-white ${oswald.className}`}>Call Us</h5>
    </a>
    <p class={`mb-3 font-normal text-white ${oswald.className}`}>
    Feel free to reach out to us right away by dialing our phone number: 07412 765891	</p>
    <a href='tel:07412765891' class={`inline-flex items-center text-white ${oswald.className}`}>
    <BsTelephoneFill className='mr-2'/>Call Now

    </a>
</div>



      </div>

      <Fleet/>
      <Banner/>
      <Reviews/>
      <Booking/>
  <Footer/> 
    </main>
  )
}