import React from 'react'
import {laptopDesktop} from "../images"
const DesignedComponent2 = () => {
  return (
<>
   
    <div className='sm:flex flex-row items-center gap-52 mt-20 hidden'>
            <div className=''>
                <img src={laptopDesktop} alt="" className='h-[700px] w-[1000px] object-contain'/>
            </div>
            <div className='mr-44 ml-10 flex flex-col gap-14'>
                <div>
                     <h5 className='text-2xl text-[#1f3f5b] font-semibold font-Overpass'>Free, open, simple</h5>
                    <p className=' font-Overpass max-w-[600px] font-extralight mt-6 leading-7'>
                        Blogr features an exceeningly intuitive interface which lets you focus on one thing creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos and  Markdown.
                        Extensibility with plugins and themes provide easy way to add functionality or change the look of a blog
                    </p>
                </div>

                <div>
                     <h5 className='text-2xl text-[#1f3f5b] font-semibold font-Overpass'>Powerful tooling</h5>
                    <p className=' font-Overpass max-w-[600px] font-extralight mt-6 leading-7'>
                      Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
                    </p>
                </div>
            </div>
            
        </div>
        <div className='sm:hidden flex flex-col  items-center mt-32 '>
            <h2 className='text-xl text-[#1f3f5b] font-semibold font-Overpass '>
                    Designed for the future    
            </h2>
            <div className='flex flex-col items-center '>
                <img src={laptopDesktop} alt="editor desktop" className='w-full mt-9' />
                <div className='text-center w-[80%] mt-14'>
                        <h5 className='text-xl text-[#1f3f5b] font-semibold font-Overpass'>Free, open, simple</h5>
                        <p className=' font-Overpass max-w-[600px] font-light mt-4 leading-7'>
                        Blogr features an exceeningly intuitive interface which lets you focus on one thing creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos and  Markdown.
                        Extensibility with plugins and themes provide easy way to add functionality or change the look of a blog
                        </p>
                </div>
                <div className='text-center w-[80%] mt-14'>
                        <h5 className='text-xl text-[#1f3f5b] font-semibold font-Overpass'>Powerful tooling</h5>
                        <p className=' font-Overpass max-w-[600px] font-light mt-4 leading-7'>
                           Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
                        </p>
                </div>
            </div>
        </div>
</>
  )
}

export default DesignedComponent2