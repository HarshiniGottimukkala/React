import React from 'react'

const SetCard = ({heading, line1, line2, line3}) => {
 
  return (
    <>
    <div className='card'>
                <h2>{heading}</h2>
                <div className='plan'>
                    <p>{line1}</p>
                    <p>{line2}</p>
                    <p>{line3}</p>
                </div>
              </div>
    </>
  )
}

export default SetCard