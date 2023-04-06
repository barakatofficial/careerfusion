import React, {useEffect, useState} from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Value from '../Components/ValueDiv/Value'
import Footer from '../Components/FooterDiv/Footer'
import { useData } from '../Contexts/DataContext'
import EventCard from '../Components/EventCard/EventCard'
import {AiOutlineCloseCircle, AiOutlineSearch} from "react-icons/ai"
import {BsHouseDoor} from "react-icons/bs";
import {CiLocationOn} from "react-icons/ci";


const Home = () => {
  const {opportunities} = useData();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState();


  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const newData = opportunities.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(newData);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setSearchQuery("");
    setFilteredData(opportunities);
  }

  // Initialize filteredData to the full set of data

  return (
    <div className='w-[85%] m-auto bg-white'>
        <NavBar/>

       <div className='searchDiv grid gp-10 bg-greyIsh round-[10px] p-[3rem]'>
      <form action=''>
        <div className="firstDiv flex justify-between items-center flex-wrap rounded-[8px] gap-[10px] 
        bg-white p-5 shadow-lg shadow-greyIsh-700">

          <div className="flex gap-2 w-full items-center">
            <AiOutlineSearch className='icon text-[25px]'/>
            <input value={searchQuery} onChange={handleSearchInputChange} type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
             placeholder='Search Work Experiance..'/>
             <button onClick={(e) => handleClear(e)}> <AiOutlineCloseCircle className='icon text-[30px] text-[#a5a6a6] hover:text-textColor' /> </button> 
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

          <button onClick={(e) => handleSearch(e)} className='bg-blueColor mt-[12px] h-full p-5 px-10 w-full rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Search</button>

        </div>
      </form>
    </div>
      
      <div className="eventContainer flex gap-10 justify-center items-center flex-wrap py-5">
      {filteredData?.length > 0 ? filteredData?.map((item) => (
        <EventCard key={item.id} title={item.title} link={item.link} company={item.company} 
          companyLogo={item.companyLogo} description={item.description} itemLocation={item.location}/>
      )) : opportunities?.map((item) => (
        <EventCard key={item.id} title={item.title} link={item.link} company={item.company} 
          companyLogo={item.companyLogo} description={item.description} itemLocation={item.location}/>
      ))}
      </div>

      <Value />
      <Footer />
    </div>
  )
}

export default Home;