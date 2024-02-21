import React from 'react'


import device from '../../assets/device.png'
import devices from '../../assets/devices.mp4'

const Stream = () => {
  return (
    <>
      <div className="stream">
        <div className="content">
          <h2>Watch everywhere</h2>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>

        <div className="backgroundvideo" >
          <img src={device} alt="" />
          <video src={devices} autoPlay loop muted ></video>
        </div>

      </div>
      <hr className="horizontal" />
    </>
  )
}

export default Stream