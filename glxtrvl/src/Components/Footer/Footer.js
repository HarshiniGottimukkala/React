import './Footer.css'
import { Link } from 'react-router-dom'

import facebook from '../../assets/facebook.png'
import insta from '../../assets/instagram.jpeg'
import twitter from '../../assets/twitter.png'

const footer = () => {
    const images = [facebook, insta, twitter];

    return (
        <footer>
            <h1>GLX TRVL</h1>
            <div className="links">
                <h1>Use Links</h1>
                <div className="link">
                    <Link to="/">Home</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/training">Training</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="image">
                {images.map((image) => {
                    return (
                        <>
                            <img src={image} alt="" />
                        </>
                    )
                })}
            </div>

        </footer>
    )
}

export default footer