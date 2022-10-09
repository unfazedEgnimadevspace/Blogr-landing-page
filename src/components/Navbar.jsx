import React, { useState } from 'react'
import { logo,iconarrowlight,iconarrowdark, closeIcon, hamburger } from '../images';
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [toggle, setToggle] = useState(false);
  
  return (
    <>
      <nav className='fixed top-0 left-0 right-0 w-full z-30 sm:flex items-center flex-1 justify-around pb-6 pt-8 hidden bg-[#FF5F5F]' >
        <div className='flex gap-20 '>
            <img src={logo} alt="logo mt-3 h-3" />
            <ul className='flex gap-8 text-white mt-3 font-Overpass text-base'>
              {/* Link 1 */}
              <div onMouseOver={() => setActive(true)}>
              <li className='flex gap-2 relative cursor-pointer'>Product <img src={active ? iconarrowdark : iconarrowlight} alt="dropdown icon" className='h-2 mt-2'/></li>
                  <div className={`${ active ? "block" : "hidden" } flex flex-col bg-white backdrop-blur-sm h-[140px] w-[150px] absolute top-[110%] left-[20rem] border rounded-md text-black`} onMouseLeave={() => setActive(false)}>
                   <ul className='mt-5 flex flex-col gap-2 ml-4 '> 
                    <li className='font-medium hover:font-semibold cursor-pointer'>Contact</li>
                    <li className='font-medium hover:font-semibold cursor-pointer'>Newsletter</li>
                    <li className='font-medium hover:font-semibold cursor-pointer'>LinkedIn</li>
                  </ul>
                  </div>

              </div>
                
                  {/* Link 2 */}
                <div onMouseOver={() => setActive2(true)}>
                  <li className='flex gap-2 relative cursor-pointer'>Company <img src={active2 ? iconarrowdark : iconarrowlight} alt="dropdown icon" className='h-2 mt-2'/></li>
                  <div className={`${ active2 ? "block" : "hidden" } flex flex-col bg-white backdrop-blur-sm h-[140px] w-[150px] absolute top-[110%] left-[28rem] border rounded-md text-black`} onMouseLeave={() => setActive2(false)}>
                    <ul className='mt-5 flex flex-col gap-2 ml-4 '> 
                      <li className='font-medium hover:font-semibold cursor-pointer'>Contact</li>
                      <li className='font-medium hover:font-semibold cursor-pointer'>Newsletter</li>
                      <li className='font-medium hover:font-semibold cursor-pointer'>LinkedIn</li>
                    </ul>
                  </div>
                </div>  
               
                
                {/* Link 3 */}
                <div onMouseOver={() => setActive3(true)} >
                  <li className='flex gap-2 relative cursor-pointer' >Connect <img src={active3 ? iconarrowdark : iconarrowlight} alt="dropdown icon" className='h-2 mt-2'/></li>
                  <div className={`${ active3 ? "block" : "hidden" } flex flex-col bg-white backdrop-blur-sm h-[140px] w-[150px] absolute top-[110%] left-[35rem] border rounded-md text-black`} onMouseLeave={() => setActive3(false)}>
                    <ul className='mt-5 flex flex-col gap-2 ml-4 '> 
                      <li className='font-medium hover:font-semibold cursor-pointer'>Contact</li>
                      <li className='font-medium hover:font-semibold cursor-pointer'>Newsletter</li>
                      <li className='font-medium hover:font-semibold cursor-pointer'>LinkedIn</li>
                    </ul>
                  </div>
                </div>  
            </ul>
        </div>
          <div className='flex gap-4'>
            <a className='font-Overpass text-base text-white mt-3'>
              Login
            </a>
            <a className='bg-white px-6 py-2 border border-white rounded-2xl text-[#ff3d54] font-medium text-base hover:opacity-40 cursor-pointer'>
              Sign Up
            </a>
          </div>
      </nav>

      <nav className='sm:hidden flex items-center justify-between fixed top-0 left-0 backdrop-blur-sm flex-1 w-full bg-[#FF5F5F] z-30'>
        <div>
          <img src={logo} alt="logo" className='mt-9 mb-5 pl-5 h-8 object-cover' />
        </div>
        <div>
           <img src={ toggle ? closeIcon  :  hamburger} alt="logo" className={`${toggle ? 'h-6' : 'h-4'} mt-7 mb-5 pr-5  object-cover relative `} onClick={() => setToggle((prev) => !prev)}/>
           <div className={` ${ toggle ? "absolute" : "hidden" } w-[90%] z-[100] top-28 left-4 bg-white backdrop-blur-lg shadow-md h-[500px]`} >
                  <ul className='flex flex-col items-center mt-14 gap-7'>
                      <li className='text-xl text-black font-medium  ml-2 flex gap-2 font-Overpass relative'>Product <img src={iconarrowdark} alt="icon dark" className='h-2 mt-[0.6rem]' /></li>
                      
                      <li className='text-xl text-black font-medium  ml-2 flex gap-2 font-Overpass relative'>Company <img src={iconarrowdark} alt="icon dark" className='h-2 mt-[0.6rem]' /></li>
                      <li className='text-xl text-black font-medium  ml-2 flex gap-2 font-Overpass relative'>Connect <img src={iconarrowdark} alt="icon dark" className='h-2 mt-[0.6rem]' /></li>
                      <hr className=' bg-black mx-5 w-72'/>
                      <li className='text-xl  font-Overpass font-medium '>Login</li>
                      <button className='bg-[#ff3d54] px-8 py-2 border border-[#ff3d54] rounded-2xl text-white font-medium text-base hover:opacity-40 cursor-pointer'>
                        Sign Up
                      </button>
                  </ul>
            
           </div>
        </div>
      </nav>
    
    </>
  )
}

export default Navbar