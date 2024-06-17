"use client";
import { useState } from 'react';
import localFont from 'next/font/local'
import { Oswald } from 'next/font/google'

const oswald = Oswald({
    weight: '400',
    subsets: ['latin']
})

const neonFont = localFont({ src: '../fonts/NightLight.ttf' })

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex space-x-4 p-8 justify-between md:justify-around md:bg-transparent  md:shadow-none" id='nav'>
      <div id="logo" className={neonFont.className}>
        <h1 className='relative text-3xl md:text-5xl font-black text-gray-900 text-center h-[25px] md:h-auto md:text-left tracking-tight f-f-i leading-tight text-heading-color uppercase'>car mode</h1>
      {/*  <img src="https://dubaisportcar.ae/wp-content/uploads/2023/03/DSC-Logo.png" className="" alt="Logo" />*/}
      </div>

      <div className={`hidden md:flex space-x-8 ${oswald.className}`}>
        <a href="#nav"><h2 className="text-lg hover:cursor-pointer">Home</h2></a>
        <a href="#fleetSection"><h2 className="text-lg hover:cursor-pointer">Cars</h2></a>
        <a href="#Contact"><h2 className="text-lg hover:cursor-pointer">Contact Us</h2></a>
       <a href="#reviews"> <h2 className="text-lg hover:cursor-pointer">Testimonials</h2></a>
       <a href="#Contact"><button className="py-3 px-4 uppercase bg-blue-800 text-white font-md relative bottom-3 text-md hover:bg-black hover:text-white transition-all duration-300">rent a sports car today!</button></a>
      </div>

      <div id="mobileNavbar" className="md:hidden text-gray-900 mt-1" onClick={toggleDropdown}>
        <svg
          className="ast-mobile-svg ast-menu-svg"
          fill="currentColor"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
        </svg>
        {isDropdownOpen && (
          <div className="bg-white absolute top-14 right-0 py-2 px-4 border border-gray-300 rounded shadow-md">
            {/* Add your dropdown menu items here */}
            <a href="#nav"><h2 className="text-gray-800 hover:text-blue-800 cursor-pointer">Home</h2></a>
            <a href="#fleetSection"><h2 className="text-gray-800 hover:text-blue-800 cursor-pointer">Cars</h2></a>
            <a href="#Contact"><h2 className="text-gray-800 hover:text-blue-800 cursor-pointer">Contact Us</h2></a>
            <a href="#reviews"><h2 className="text-gray-800 hover:text-blue-800 cursor-pointer">Testimonials</h2></a>
          </div>
        )}
      </div>
    </nav>
  );
}
