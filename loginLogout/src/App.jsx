import { useState } from 'react'
import './App.css'


function App() {

  const [user, setUser] = useState({
    username : '',
    password : ''
  })


  

  const handleChange = (event) =>{
    const {name , value} = event.target;
    setUser({...user,[name] : value});
  }
  //console.log(user)
  const isLoggedIn =(e)=>{
    e.preventDefault();
    if(user.username === 'Nani' && user.password === "Abc@123"){
      
      console.log("LoggedIn");  
      setUser({
        username : "",
        password : "",
      });      
      
    }
    else{
      alert("Invalid credentials");
      setUser({
        username : '',
        password : ''
      });
    }    
  }

  const isLoggedOut = (e) => {
    e.preventDefault();
    console.log("Logged out")
    
  }

  return (
    <>
      <form >
        <div>
          <label>Username</label>
          <input type="text" name='username' value={user.username}   onChange={handleChange}/>
        </div><br />
        <div>
          <label>Password</label>
          <input type="text" name='password' value={user.password} onChange={handleChange}/>
        </div><br />
        <button onClick={isLoggedIn}>Login</button>
       <button onClick={isLoggedOut}>Logout</button>
      </form>

      
    </>
  )
}

export default App
