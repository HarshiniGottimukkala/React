import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Api = () => {
    const [posts, setPosts] = useState([])

    const url = "https://jsonplaceholder.typicode.com/albums";

    const postDataValue = {
        
        userId : 11,
        id : 101,
        title : "quidem molestiae enim"
    
   };

    const getPosts = async () => {
        try {
            const response = await axios.get(url);
            setPosts(response.data);
        }
        catch (err) {
            console.log(err)
        }

    }


    const postPosts =  async () => {
        try{
            const response = await axios.post(url, postDataValue);
            setPosts(prevPosts => [...prevPosts, response.data]);
        }
        catch(err){
            console.log(err);
        }
    };

    useEffect(() => {
        getPosts();
    }, [])

    console.log(posts)

    return (
        <div>
            <h1>List Items</h1>
            <ul>                   
                   {posts.length > 0 && posts.map((item, index) => (
                        <li key={index}>{ item.title }</li>
                        
                    ))} 
            </ul>
            <button onClick={postPosts}>Post</button>

        </div>
    )
}

export default Api