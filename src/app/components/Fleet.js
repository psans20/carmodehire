import { FaPhoneSquareAlt, FaWhatsapp } from "react-icons/fa";
import cars from '../cars.json';
import { Oswald } from 'next/font/google'
import { Questrial } from "next/font/google";

const oswald = Oswald({
    weight: '400',
    subsets: ['latin']
})

const questrial = Questrial({
  weight: '400',
  subsets: ['latin']
})

export default function Fleet() {
  return (
    <div className="flex flex-col text-center items-center justify-center space-y-8 mt-14 md:mt-10 p-4" id="fleetSection">
      {/*<h2 className={`font-bold text-black text-3xl md:text-4xl ${oswald.className}`}>About GTR Hire</h2>
      <p className={`md:px-24 text-md md:text-lg text-center ${questrial.className}`}>GTR Hire stands as the epitome of premier luxury performance car rentals in Yorkshire. Our distinguished fleet boasts over 20 meticulously curated vehicles, featuring iconic models such as the Audi RS3, Audi S3, both Mercedes A35 AMG and A45 S, BMW M4, Range Rover Sport SVR, Audi R8 Spyder, BMW M135i, and a variety of other high-performance cars.

<br className="md:hidden"/> <br className="md:hidden"/>At GTR Hire, we take pride in delivering a seamless and reliable experience for our clients. Our commitment to excellence is reflected not only in the quality of our vehicles but also in our efficient delivery and collection service, which spans across the entirety of the UK.

Whether you're looking to make a statement at a special event, enhance your travel experience, or simply indulge in the thrill of driving a luxury performance car, GTR Hire is your trusted partner. Our dedication to providing unparalleled service ensures that every journey with us is nothing short of extraordinary.

Elevate your driving experience with GTR Hire – where luxury meets performance, and every road becomes an opportunity for exhilaration.
  </p>*/}
      <h2 className={`font-bold text-black text-3xl md:text-4xl mb-10 ${oswald.className}`}>Fleet Cars</h2>

      <div id="cars" className="flex flex-col md:grid md:grid-cols-3 md:space-x-8">
        {cars.map((car) => (
          <div className="flex flex-col items-center justify-center font-sans mb-8" key={car.ID}>
            <img src={car.Thumbnail} className="h-72 object-cover object-center" alt={car.Name}   style={{ width: '22rem' }} />
            <h2 className={`font-bold text-2xl mb-2 text-blue-800 ${oswald.className}`}>{car.Name}</h2>
            <h2 className="font-bold text-xl text-blue-800 mb-1">{car.Model}</h2>

            <div className={`mb-2 ${questrial.className}`}>
              <h2 className="font-semibold">£{car.Price}/Day</h2>
              <h2 className="font-semibold">£{car.Weekend}/Weekend</h2>
            </div>

            <div className={`flex flex-col items-center justify-center gap-2 text-center md:space-y-0 lg:flex-row ${questrial.className}`} id="carButton">
              <a href='tel:03300985257'><button className="flex rounded-full border-2 border-blue-800 py-3 px-32 md:px-20 hover:bg-blue-800 hover:text-white duration-300"><FaPhoneSquareAlt className="mr-2 mt-1" />Call</button></a>
              <a href="https://wa.me/+447412765891" target="_blank" rel="noopener noreferrer"><button className="flex rounded-full border-2 border-blue-800 py-3 px-[105px] md:px-14 hover:bg-blue-800 hover:text-white duration-300"><FaWhatsapp className="mr-2 mt-1" />WhatsApp</button></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
