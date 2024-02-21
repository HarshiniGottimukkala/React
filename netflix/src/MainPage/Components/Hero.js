import React from 'react'
import hero from '../../assets/hero section.jpg'
import arrow from '../../assets/arrow.jpg'
import { Link } from 'react-router-dom'



const Hero = () => {
    return (
        <>
            <div className="background">
                <img src={hero} alt="" />

                <div className="hero" >
                    <h1>Unlimited movies, TV shows and more</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="mailbutton">
                        <input type="text" placeholder='Email address' />
                        <div className="getstarted">
                            <Link to="/signin"><button>Get Started </button></Link>
                            <Link to="/signin"><img src={arrow} alt="" /></Link>
                        </div>
                    </div>
                </div>
                <hr className='horizontal'/>
            </div>
        </>

    )
}

export default Hero