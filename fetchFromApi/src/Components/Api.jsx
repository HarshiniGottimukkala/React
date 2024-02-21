import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Api = () => {

    const [data, setData] = useState([]);

    const url = "https://jsonplaceholder.typicode.com/users"

    const getData = async () => {
        try {

            const response = await axios.get(url)
            setData(response.data);
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        getData();
    },[])

    console.log(data);


    return (
        <div>
            <h1>List Items</h1>
            <ul>
                {data.length > 0 && data.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Api