import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.js'
import Header from '../../Components/Header/Header.js'
import Card from './Components/Card.js'
import Footer from '../../Components/Footer/Footer.js'
import './PricingStyles.css';

const Pricing = () => {
  return (
    <>
      <Navbar />
      <Header header="Pricing Page" />
      <Card/>
      <Footer />
    </>
  )
}

export default Pricing