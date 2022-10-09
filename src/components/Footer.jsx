import React from 'react'
import { logo } from '../images'
const Footer = () => {
  return (
    <>
        <div className='w-full bg-[#25252d] h-[350px] border border-[#2c2d3f] rounded-tr-[70px] sm:flex flex-row justify-between  px-32 hidden'>
            
            <div className='mt-20 ml-10'>
                <img src={logo} alt="logo" />
            </div>
            <div className='flex flex-row gap-20 mt-20 pr-44 text-white'>
                <div className='mr-20'>
                    <h1 className='font-Overpass text-base font-medium'>Product</h1>
                    <ul className='mt-10 gap-4 flex flex-col text-sm font-Overpass '>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                        
                    </ul>
                </div>
                <div className='mr-20'>
                    <h1 className='font-Overpass text-base font-medium'>Company</h1>
                    <ul className='mt-10 gap-4 flex flex-col text-sm font-Overpass'>
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        
                    </ul>
                </div>
                <div>       
                    <h1 className='font-Overpass text-base font-medium'>Connect</h1>
                    <ul className='mt-10 gap-4 flex flex-col text-sm font-Overpass'>
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className=" sm:hidden flex flex-col w-full border border-[#2c2d3f] bg-[#2c2d3f] h-[1000px] mt-20 rounded-tr-[70px] items-center">
            <img src={logo} alt="logo" className='w-[120px] mt-10' />

            <div className='flex flex-col gap-3 mt-24'>
                <h5 className='font-medium font-Overpass text-white text-2xl mb-4 text-center'>Product</h5>
                <ul className='text-white text-lg text-center font-Overpass font-extralight opacity-70  flex flex-col gap-2'>
                    <li>Overview</li>
                    <li>Pricing</li>
                    <li>Marketplace</li>
                    <li>Features</li>
                    <li>Integrations</li>
                </ul>
            </div>

            <div className='flex flex-col gap-3 mt-24'>
                <h5 className='font-medium font-Overpass text-white text-2xl mb-4 text-center'>Company</h5>
                <ul className='text-white text-lg text-center font-Overpass font-extralight opacity-70  flex flex-col gap-2'>
                    <li>About</li>
                    <li>Team</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    
                </ul>
            </div>

            <div className='flex flex-col gap-3 mt-24'>
                <h5 className='font-medium font-Overpass text-white text-2xl mb-4 text-center'>Connect</h5>
                <ul className='text-white text-lg text-center font-Overpass font-extralight opacity-70 flex flex-col gap-2'>
                    <li>Contact</li>
                    <li>Newsletter</li>
                    <li>LinkedIn</li>
                    
                </ul>
            </div>
            

        </div>
    </>
  )
}

export default Footer