import React from 'react'

//Imported Icons
import {AiOutlineCloseCircle, AiOutlineSearch} from "react-icons/ai"
import {BsHouseDoor} from "react-icons/bs";
import {CiLocationOn} from "react-icons/ci";

const Search = () => {
  return (
    <div className='searchDiv grid gp-10 bg-greyIsh round-[10px] p-[3rem]'>
      <form action=''>
        <div className="firstDiv flex justify-between items-center flex-wrap rounded-[8px] gap-[10px] 
        bg-white p-5 shadow-lg shadow-greyIsh-700">

          <div className="flex gap-2 w-full items-center">
            <AiOutlineSearch className='icon text-[25px]'/>
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
             placeholder='Search Work Experiance..'/>
             <AiOutlineCloseCircle className='icon text-[30px] text-[#a5a6a6] hover:text-textColor' />
          </div>

          {/* <div className="flex gap-2 items-center">
            <BsHouseDoor className='icon text-[25px]'/>
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
             placeholder='Search by company..'/>
             <AiOutlineCloseCircle className='icon text-[30px] text-[#a5a6a6] hover:text-textColor' />
          </div>

          <div className="flex gap-2 items-center">
            <CiLocationOn className='icon text-[25px]'/>
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
             placeholder='Search by location..'/>
             <AiOutlineCloseCircle className='icon text-[30px] text-[#a5a6a6] hover:text-textColor' />
          </div> */}

          <button className='bg-blueColor mt-[12px] h-full p-5 px-10 w-full rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Search</button>

        </div>
      </form>
    </div>
  )
}

export default Search;