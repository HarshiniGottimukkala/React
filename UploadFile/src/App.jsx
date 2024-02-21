import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  
  const handleUpload = (e) => {
    e.preventDefault();
    console.log("Uploaded"); 
  }

  return (
    <>
      <form onSubmit={handleUpload}>
        <div>
          <label>Upload File</label>
          <input type="file" />
        </div>
        <button>Upload</button>
      </form>
      
    </>
  )
}

export default App
