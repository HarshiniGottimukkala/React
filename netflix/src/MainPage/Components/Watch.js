import React from 'react'
import tv from '../../assets/tvpng.png'
import video from '../../assets/tv.mp4'


const Watch = () => {
  return (
    <>
      <div className="watch">
        <div className="content">
          <h2>Enjoy on your TV</h2>
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>

        <div className="video" >
          <img src={tv} alt="" />
          <video src={video} autoPlay loop muted ></video>
        </div>

      </div>
      <hr className="horizontal" />
    </>
  )
}

export default Watch