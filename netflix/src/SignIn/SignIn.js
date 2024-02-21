import React from 'react'
import './SignInStyles.css'

import Navbar from '../Components/Navbar/Navbar'
import Login from './Components/Login'
import FooterSignIn from './Components/FooterSignIn'

const SignIn = () => {
  return (
    <>
      <Navbar to='/' pagename="Home"/>      
      <Login/>
      <FooterSignIn/>
    </>
  )
}

export default SignIn