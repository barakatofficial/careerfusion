import React from 'react'
import Discover from "../../Assets/Discover.png";
import Convenience from "../../Assets/Convenience.png";
import Connection from "../../Assets/Connection.png";


const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[1px] block font-bold w-full pb-[3rem]'>
      <span className='text-blueColor'>Join Our Mission:</span> Connecting Students with Opportunities for Growth!
      </h1>

      <div className="lg:grid lg:gap-[8rem] lg:grid-cols-3 items-center sm:gap-[1rem] sm:flex sm:flex-wrap md:gap-[1rem]">
        
        <div className='singleGrid group rounded-[10px]  p-[1.5rem] hover:bg-blueColor'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={Discover} alt="" className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor group-hover:text-white text-[18px]'>Discover</span>
          </div>
          <p className='text-textColor text-[13px] group-hover:text-white  py-[1rem] font-semibold'>
          Students can use CareerFusion to discover new career paths and gain exposure to different industries, providing them with more informed decisions for their future.
          </p>
        </div>

        <div className='singleGrid group rounded-[10px] p-[1.5rem] hover:bg-blueColor'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={Convenience} alt="" className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor group-hover:text-white text-[18px]'>Convenience</span>
          </div>
          <p className='text-textColor text-[13px] group-hover:text-white py-[1rem] font-semibold'>
          With CareerFusion students can access information and resources about work experiences and academic events from anywhere, making it more convenient and accessible for them to learn.
          </p>
        </div>

        <div className='singleGrid group rounded-[10px] p-[1.5rem] hover:bg-blueColor'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={Connection} alt="" className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor group-hover:text-white text-[18px]'>Connection</span>
          </div>
          <p className='text-textColor text-[13px] group-hover:text-white py-[1rem] font-semibold'>
          By connecting students with relevant work experiences and academic events, CareerFusion can help them build valuable connections in their fields of interest, potentially leading to future opportunities and success.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Value;