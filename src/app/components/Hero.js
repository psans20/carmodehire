import { FaPhone } from 'react-icons/fa'
import { Oswald } from 'next/font/google'
import { Questrial } from 'next/font/google'

const oswald = Oswald({
    weight: '400',
    subsets: ['latin']
})

const questrial = Questrial({
    weight: '400',
    subsets: ['latin']
})

export default function Hero(){
    return(
        <div className="flex flex-col items-center justify-center text-center space-y-10 mt-8 p-4">
 <h2 className={`font-bold text-black text-3xl md:text-5xl ${oswald.className}`}>Hire for Weekend & Drive for 3 Days!</h2>
<p className={`text-md font-sans opacity-70 md:px-36 ${oswald.className}`}>Not sure which car to choose from our selection? Let us help you find the one that captures your imagination. We'll speed through the booking process so you'll be on your way in no time.</p>
<a href='tel:03335770272'><button className={`rounded-full border-2 border-blue-800 text-blue-800 font-semibold px-8 py-2 flex text-lg hover:bg-blue-800 hover:text-white duration-300 ${oswald.className}`} id='callNow'><FaPhone className='mr-4 mt-1'/>Book Sport Car Today</button></a>
<img src="https://i.ibb.co/vQhjjxz/lamborghini-pic.png" className='z-20'/>
        </div>
    )
}