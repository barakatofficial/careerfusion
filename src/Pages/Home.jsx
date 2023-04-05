import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Search from '../Components/SearchDiv/Search'
import Value from '../Components/ValueDiv/Value'
import Footer from '../Components/FooterDiv/Footer'
import Events from "../Components/EventDiv/Events";

const Home = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
        <NavBar/>
      <Search />
      <Events />
      <Value />
      <Footer />
    </div>
  )
}

export default Home;