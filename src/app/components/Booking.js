import { FaWhatsapp } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { Oswald } from 'next/font/google'
import { Questrial } from "next/font/google"

const oswald = Oswald({
    weight: '400',
    subsets: ['latin']
})

const questrial = Questrial({
    weight: '400',
    subsets: ['latin']
  })
  


export default function Booking(){
    return(
        <div className="flex flex-col items-center justify-center  space-y-4 p-8 font-sans text-center bg-white py-20" id="Contact">
<h2 className={`font-semibold text-md ${questrial.className}`}>Car Mode Booking Contact</h2>
<h2 className={`font-bold text-5xl ${oswald.className}`}>03335 770272</h2>
<h2 className={`font-semibold text-md ${questrial.className}`}>Call or Send Whatsapp inquiry</h2>
<a href='tel:03335770272'><button className={`rounded-full border-2 border-blue-800 text-blue-800 font-semibold px-8 py-2 flex uppercase hover:bg-blue-800 hover:text-white duration-300 ${oswald.className}`}><FaPhone className='mr-4 mt-1'/>call for a booking</button></a>
<a href="https://wa.me/+447412765891"><button className={`rounded-full border-2 border-blue-800 text-blue-800 font-semibold px-8 py-2 flex uppercase hover:bg-blue-800 hover:text-white duration-300 ${oswald.className}`}><FaWhatsapp className='mr-4 mt-1'/>book via whatsapp</button></a>
        </div>
    )
}