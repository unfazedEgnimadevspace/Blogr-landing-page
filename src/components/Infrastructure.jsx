import React from 'react'
import { bgPatternCircles,phoneIllustrations } from "../images"
const Infrastructure = () => {
  return (
 <>
   
    <div className='w-full h-[300px] bg-[#2c2d3f] mb-4 border rounded-tr-[70px] rounded-bl-[70px] relative mt-20 sm:flex flex-row justify-between items-center px-20 hidden'>
        <div>
          <img src={phoneIllustrations} alt="phone illustration" className='absolute top-[-30%] h-[500px]' />
        </div>
        <div>
          <h5 className='text-3xl text-white font-medium font-Overpass'>State of the Art Infrastructure</h5>
          <p className=' font-Overpass max-w-[600px] font-extralight mt-6 leading-7 text-white text-sm'>
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers arem keeping your site competitive.
          </p>
        </div>
    </div>
    <div className='sm:hidden flex flex-col w-full h-[500px] border rounded-tr-[70px] rounded-bl-[70px]  bg-[#2c2d3f] relative mt-60 '>
      <div>
        <img src={phoneIllustrations} alt="phone illustration" className='w-[400px] h-[400px] absolute top-[-30%] '  />
      </div>
      <div className='mt-56 text-center'>
          <h5 className='text-3xl text-white font-medium font-Overpass'>State of the Art Infrastructure</h5>
          <p className=' font-Overpass max-w-[400px] font-extralight mt-6 leading-7 text-white text-sm mx-10'>
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers arem keeping your site competitive.
          </p>
      </div>
    </div>
  </>   
  )
}

export default Infrastructure;