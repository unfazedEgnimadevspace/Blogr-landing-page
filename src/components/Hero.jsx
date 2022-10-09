import React from 'react'

const Hero = () => {
  return (
    <> 
    <div className='sm:flex items-center justify-center mt-52 flex-col hidden'>
      <h1 className='text-5xl text-white font-Overpass font-semibold '>A mordern publishing platform</h1>
      <h5 className='text-white mt-8 text-lg font-Overpass font-light'>Grow your audience and build your online brand</h5>

      <div className='mt-10 flex gap-5 '>
        <a className='bg-white px-6 py-2 border border-white rounded-2xl text-[#ff3d54] font-medium text-base hover:opacity-40 cursor-pointer'>
                Sign Up
        </a>
        <a className=' px-6 py-2 border border-white rounded-2xl text-[#ffffff] font-medium text-base hover:opacity-40 cursor-pointer'>
            Learn More
        </a>
      </div>
    </div>

    <div className='mt-52 sm:hidden flex items-center justify-center flex-col'>
      <h1 className='text-3xl text-white font-Overpass font-medium text-center'>A mordern <br /> publishing platform</h1>
      <h5 className='text-white mt-8 text-lg font-Overpass font-light text-center'>Grow your audience and build your <br /> online brand</h5>
      <div className='mt-10 flex gap-5 '>
        <a className='bg-white px-6 py-2 border border-white rounded-2xl text-[#ff3d54] font-medium text-base hover:opacity-40 cursor-pointer'>
                Sign Up
        </a>
        <a className=' px-6 py-2 border border-white rounded-2xl text-[#ffffff] font-medium text-base hover:opacity-40 cursor-pointer'>
            Learn More
        </a>
      </div>
    </div>
    </>
  )
}

export default Hero;