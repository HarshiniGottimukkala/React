import React, { useState } from 'react'
import Modal from './Modal';

const CallToAction = () => {
    const [modal, setModal] = useState(false);

    const handleClick =()=>{
        setModal(!modal);
    }
  return (
    <>
    <div className='calltoaction'>
        <h1>Hurry Up...Book Your Tickets Now! </h1>
        <button onClick={handleClick}>Know More!</button>
        
    </div>
    {
        modal && <Modal handleClick={handleClick}/>
    }
    </>
  )
}

export default CallToAction