import React from 'react'
import Navbar from '../Navbar';
import Hero from '../Hero';
import "./Navero.css";
const Navero = () => {
  return (
    <>
      <div className='Navero w-full h-[500px] object-cover bg-gradient-to-br from-[#ff8f70] to-[#ff3d54] border rounded-bl-[5rem] border-[#f73249] sm:flex flex-col hidden'>
          <Navbar />
          <Hero />
      </div>
      <div className='Navero w-full h-[600px] object-cover bg-gradient-to-br from-[#ff8f70] to-[#ff3d54] border rounded-bl-[5rem] border-[#f73249] flex flex-col sm:hidden'>
          <Navbar />
          <Hero />
      </div>
    </>
  )
}

export default Navero