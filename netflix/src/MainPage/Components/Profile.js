import React from 'react'
import children from '../../assets/children.png'


const Profile = () => {
  return (
    <>
      <div className="container">
        <div className="picture">
          <img src={children} alt="" />
        </div>
        <div className="context">
          <h2>Create profiles for kids</h2>
          <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>
      </div>
      <hr className="horizontal" />

    </>
  )
}

export default Profile