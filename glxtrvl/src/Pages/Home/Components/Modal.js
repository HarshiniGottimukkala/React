import React from 'react'
import { FaTimes } from 'react-icons/fa';


const Modal = ({ handleClick }) => {
    return (
        <div className="overlay">
            <div className="modal">

                <div className="cross" onClick={handleClick}>
                    <FaTimes style={{ color: "white" }} size={25} />
                </div>

                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, molestiae.</h2>


            </div>
        </div>
    )
}

export default Modal