import React from 'react';
import { FaBriefcase, FaPhone, FaShieldAlt } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';

export default function Banner() {
  return (

    <div className="relative flex flex-wrap content-start bg-cover bg-fixed bg-center h-auto text-white py-24 px-10 object-fill gap-8" style={{ backgroundImage: "url(https://i.ibb.co/kHTBSHG/unnamed.jpg" }}>
    <div className="absolute inset-0 bg-[#1a1a1a] opacity-60"></div>
    <h2 className='md:ml-24 text-2xl md:text-4xl font-bold z-10'>Why Choose Us</h2>
    <p className='md:ml-24 text-sm md:text-lg z-10'>GTR Hire offers a unique and unforgettable experience for those who love fast cars and luxury living. Our fleet of high-end sports cars is unmatched in quality and style, ranging from the sleek and stylish Lamborghini Huracan to the powerful, aggressive Ferrari 488 GTB and more other models with different brands.</p>

    <div className='flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-2 md:space-y-4 md:justify-center md:items-center z-10'>

      <div className='flex flex-col gap-3 max-w-1/2'>
        <FaBriefcase size={26} className='' />
        <h2 className='text-lg font-semibold'>Premium Service</h2>
        <p className='text-sm font-light md:text-md'>At GTR Hire, we are committed to providing our clients with the highest level of service and a premium rental experience that exceeds expectations.</p>
      </div>

      <div className='flex flex-col gap-3 max-w-1/2'>
        <IoMdPerson size={26} className='' />
        <h2 className='text-lg font-semibold'>Customer Satisfaction</h2>
        <p className='text-sm font-light md:text-md'>At GTR Hire, customer satisfaction is our top priority. We understand that renting a sports car is a unique and exciting experience, and we strive to ensure that every client leaves satisfied with their rental experience.</p>
      </div>

      <div className='flex flex-col gap-3 max-w-1/2'>
        <FaPhone size={26} className='' />
        <h2 className='text-lg font-semibold'>24/7 Service</h2>
        <p className='text-sm font-light md:text-md'>At GTR Hire, we are available 24/7 to provide our clients with the best possible service. We understand that our clients may have unique rental needs and schedules, and we are committed to providing flexible and convenient rental options to accommodate those needs.</p>
      </div>

      <div className='flex flex-col gap-3 max-w-1/2'>
        <FaShieldAlt size={26} className='' />
        <h2 className='text-lg font-semibold'>Trusted Work</h2>
        <p className='text-sm font-light md:text-md'>Our service at Dubai Sport Car Rental is dedicated to providing trusted and reliable work to our clients. We understand that renting a sports car is not just about the car itself, but also about the trust and confidence that comes with a reliable rental service.</p>
      </div>

    </div>

  </div>

  );
}
