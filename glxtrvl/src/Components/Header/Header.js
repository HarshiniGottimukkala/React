import React from 'react'
import './Header.css'
import earth from '../../assets/earth.jpg'

const Header = ({ header }) => {
  return (

    <section className='header' style={{ backgroundImage: `url(${earth})`, backgroundPosition: "center", backgroundSize: "cover" }}>
      <h1>{header}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae?</p>

    </section>

  )
}

export default Header