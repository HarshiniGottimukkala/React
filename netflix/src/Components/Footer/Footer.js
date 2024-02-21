import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <p>Questions? Call 000-800-919-1694</p>
                
                <div className="divisions">
                    <div className="division">
                        <p>FAQ</p>
                        <p>Investor Relations</p>
                        <p>Privacy</p>
                        <p>Speed Test</p>
                    </div>
                    <div className="division">
                        <p>Help Centre</p>
                        <p>Jobs</p>
                        <p>Cookie Preferences</p>
                        <p>Legal Notices</p>
                    </div>
                    <div className="division">
                        <p>Account</p>
                        <p>Ways to Watch</p>
                        <p>Corporate Information</p>
                        <p>Only on Netflix</p>
                    </div>
                    <div className="division">
                        <p>Media Centre</p>
                        <p>Terms of Use</p>
                        <p>Corporate Information</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                
                <div className="netflix">
                    <button>English</button>
                    <p>Netflix</p>
                </div>

            </footer>
        </>
    )
}

export default Footer