import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className='routes'>
                <Link className='linkrouter' to="/">Home</Link>
                <Link className='linkrouter' to="/about">About</Link>
                <Link className='linkrouter' to="/contact">Contact</Link>
                <Link className='linkrouter' to="/services">Services</Link>
            </div>
        </>
    )
}

export default Home