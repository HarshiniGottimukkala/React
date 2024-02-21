import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'

function App() {

  return (
    <>
    <Router>
      <Routes >
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/about' element={<About/>}>About</Route>
        <Route path='/contact' element={<Contact/>}>Contact</Route>
        <Route path='/services' element={<Services/>}>Services</Route>
      </Routes>
    </Router>
     
    </>
  )
}

export default App
