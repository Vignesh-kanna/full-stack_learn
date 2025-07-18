import React from 'react'
import {useLocation} from 'react-router-dom'
const Contact = () => {
    const location=useLocation();
    const {name,age,email}=location.state || {};
  return (
    <div>
      <h2>Contact</h2>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Email:{email}</p>
    </div>
  )
}

export default Contact
