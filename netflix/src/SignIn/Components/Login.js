import React from 'react'
import hero from '../../assets/hero section.jpg'

const Login = () => {
  return (
    <>
      <div className="backgroundimg">
        <img src={hero} alt="" />

        <div className="hero" >
          <div className="details">

            <h2>Sign In</h2>

            <input className="input" type="text" placeholder='Email or phone number' />

            <input className="input" type="text" placeholder='Password' />

            <button className='signin'>Sign In</button>

            <p className='fgpassword'>OR</p>

            <button className='code'>Use a sign-in code</button>

            <p className='fgpassword'>Forgot password?</p>

            <div class="checkbox">
              <input type="checkbox" id="remember-me-checkbox" />
              <label for="remember-me-checkbox">Remember me</label>
            </div>

            <p className='new'>New to Netflix? <span className='signupnow'>Sign up now.</span></p>

            <p className='smalltext'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='learnmore'>Learn more.</span></p>

          </div>

        </div>
      </div>
    </>
  )
}

export default Login