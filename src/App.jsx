import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Banner from './components/Banner'
import ChooseWhy from './components/ChooseWhy'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import Email from './components/Email'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <NavBar/>
      <Hero/>
      <Banner/>
      <ChooseWhy/>
      <AboutUs/>
      <Email/>
      <Footer/>


      

      
    </div>
  )
}

export default App
