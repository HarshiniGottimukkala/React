import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [data, setData] = useState("My data");

    const updatedData =(newData) =>{
        setData(newData);
    }
  return (
    <div>
        <Child data={data} updatedData={updatedData}/>
    </div>
  )
}

export default Parent