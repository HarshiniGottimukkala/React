import React from 'react'
import netflix from '../../assets/netflix.png'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = ({to, pagename}) => {
    return (
        <>
            <nav>
                <div className="logo">
                    <img src={netflix} alt="" />
                </div>
                <div className="signin">
                <Link to={to}><button>{pagename}</button></Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar