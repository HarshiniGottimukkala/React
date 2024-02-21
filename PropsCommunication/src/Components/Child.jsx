import React from 'react'

const Child = ({data, updatedData}) => {

const handleClick =() =>{
    updatedData("Updated data");
    
}
     
  
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default Child