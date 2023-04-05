import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';


const Footer = () => {
  return (
    <div className='footer mb-4 p-[2.5rem] bg-blueColor rounded-[10px] flex flex-wrap justify-between'>
      
      <div className='w-[300px]'>
      <div className="logoDiv">
        <h1 className='logo text-[25px] text-white pb-[1rem]'><strong>Career</strong>Fusion</h1>
      </div>
      <p className='text-white pb-[13px] opacity-70 leading-7'>Transforming the way students navigate their careers - CareerFusion</p>
      </div>

      

      <div className="grid">
        <span className='divTitle text-[18px] font-semibold pb-[1rem] text-white'>Contact Info</span>
      <small className='text-[14px] text-white'>barak.kuchai@gmail.com</small>
      <div className="icons flex gap-4 py-[1rem]">
        <AiFillInstagram className='bg-white p-[8px] rounded-full h-[35px] w-[35px] icon text-blueColor'/>
        <BsFacebook className='bg-white p-[8px] rounded-full h-[35px] w-[35px] icon text-blueColor'/>
        <AiOutlineTwitter className='bg-white p-[8px] rounded-full h-[35px] w-[35px] icon text-blueColor'/>
        </div>
        </div>
    </div>
  )
}

export default Footer;