import React from 'react'
import space from '../../../assets/space.mp4'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
        <video src={space} autoPlay loop muted></video>

        <div className="content">
            <h1>Travel. Galaxies</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, officiis!</p>
            <div className="buttons">
                <Link to="/training">Try Now!</Link>
                <Link to="/contact">Launch!</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero