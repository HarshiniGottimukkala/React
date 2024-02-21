import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from './Components/Hero'
import './MainStyles.css'
import Watch from './Components/Watch'
import Download from './Components/Download'
import Trailers from './Components/Trailers'
import Profile from './Components/Profile'

import FAQ from './Components/FAQ'
import Footer from '../Components/Footer/Footer'
import Stream from './Components/Stream'




const Main = () => {
  return (
    <>
        <Navbar to='/signin' pagename="Sign In"/>
        <Hero/>
        <Watch />
        <Trailers/>
        <Download />
        <Stream/>
        <Profile />
        <FAQ/>
        <Footer/>
    </>
  )
}

export default Main