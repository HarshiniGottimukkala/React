import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.js'
import Header from '../../Components/Header/Header.js'
import Footer from '../../Components/Footer/Footer.js'
import About from '../Home/Components/About.js'
import milky from '../../assets/milky.jpg'
import Form from './Components/Form.js'

import './ContactStyles.css'

const Contact = () => {
  return (
    <>
      <Navbar />
      <Header header="Contact Page" />
      <About heading="Contact" image={milky}/>
      <Form/>
      <Footer />
    </>
  )
}

export default Contact