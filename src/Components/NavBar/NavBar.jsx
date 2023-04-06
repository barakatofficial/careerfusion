import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navBar md:flex md:justify-between md:items-center py-[3rem]'>
      <div className="logoDiv flex flex-start">
        <h1 className='logo text-[25px] text-blueColor'><strong>Career</strong>Fusion</h1>
      </div>

      <div className="menu md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <Link to={"/"}><li className="menuList text-[#6f6f6f] active:text-redColor mx-6 md:my-0 hover:text-blueColor" >Home</li></Link>
        <Link to={"/events"}><li className="menuList text-[#6f6f6f] mx-6 md:my-0 hover:text-blueColor" >Events</li></Link>
        <li className="menuList text-[#6f6f6f] mx-6 md:my-0 hover:text-blueColor" >Resources</li>
        <li className="menuList text-[#6f6f6f] mx-6 md:my-0 hover:text-blueColor" >About</li>
        <li className="menuList text-[#6f6f6f] mx-6 md:my-0 hover:text-blueColor" >Contact</li>
      </div>

    </div>
  )
}

export default NavBar;