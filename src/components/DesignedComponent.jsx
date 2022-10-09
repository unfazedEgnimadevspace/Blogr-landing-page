import React from 'react';
import {editorDesktop } from "../images"

const DesignedComponent = () => {
  return (
    <>
        <div className='sm:flex flex-col gap-4 items-center mt-32 hidden'>
            <h2 className='text-3xl text-[#1f3f5b] font-semibold font-Overpass '>
                Designed for the future    
            </h2>

            <div className='flex flex-row items-center gap-52 mt-5'>
                <div className='ml-24 mr-10 flex flex-col gap-14'>
                    <div>
                        <h5 className='text-xl text-[#1f3f5b] font-semibold font-Overpass'>Introducing an extensible editor</h5>
                        <p className=' font-Overpass max-w-[600px] font-light mt-6 leading-7'>
                            Blogr features an exceeningly intuitive interface which lets you focus on one thing creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos and  Markdown.
                            Extensibility with plugins and themes provide easy way to add functionality or change the look of a blog
                        </p>
                    </div>

                    <div>
                        <h5 className='text-xl text-[#1f3f5b] font-semibold font-Overpass'>Robust content management</h5>
                        <p className=' font-Overpass max-w-[600px] font-light mt-6 leading-7'>
                            Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories , sections, format, or flow . With this functionality, you're in full control
                        </p>
                    </div>
                </div>
                <div className=''>
                    <img src={editorDesktop} alt="" className='h-[700px] w-[900px] object-contain'/>
                </div>
            </div>
        </div>

        <div className='sm:hidden flex flex-col  items-center mt-32 '>
            <h2 className='text-xl text-[#1f3f5b] font-semibold font-Overpass '>
                    Designed for the future    
            </h2>
            <div className='flex flex-col items-center '>
                <img src={editorDesktop} alt="editor desktop" className='w-full mt-9' />
                <div className='text-center w-[80%] mt-14'>
                        <h5 className='text-xl text-[#1f3f5b] font-semibold font-Overpass'>Introducing an extensible editor</h5>
                        <p className=' font-Overpass max-w-[600px] font-light mt-4 leading-7'>
                        Blogr features an exceeningly intuitive interface which lets you focus on one thing creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos and  Markdown.
                            Extensibility with plugins and themes provide easy way to add functionality or change the look of a blog
                        </p>
                </div>
                <div className='text-center w-[80%] mt-14'>
                        <h5 className='text-xl text-[#1f3f5b] font-semibold font-Overpass'>Robust content management</h5>
                        <p className=' font-Overpass max-w-[600px] font-light mt-4 leading-7'>
                            Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories , sections, format, or flow . With this functionality, you're in full control
                        </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default DesignedComponent;