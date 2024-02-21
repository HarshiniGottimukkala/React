import React from 'react'
import boxshot from '../../assets/boxshot.png'
import progress from '../../assets/progress.gif'
import stranger from '../../assets/image.jpg'


const Download = () => {
  return (
    <>
        <div className="download">
            <div className="image">
                <img  src={stranger} alt="" />
                <div className="smallcontent">
                    <img id="image1" src={boxshot} alt="" />
                    <div className="text">
                        <h4>Stranger Things</h4>
                        <p>Downloading...</p>
                    </div>
                    <img id="image2"src={progress} alt="" />
                    
                </div>
            </div>
            <div className="content">
                <h2>Download your shows to watch offline</h2>
                <p>Save your favourites easily and always have something to watch.</p>
            </div>
        </div> 
        <hr className="horizontal" />   
    </>
  )
}

export default Download