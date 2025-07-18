import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
const navigate=useNavigate()
const handleClick=()=>{
    const userData={name:"Vignesh",age:"20",email:"shabadvignesh@gmail.com"}
    navigate('/contact',{state:userData})
}
  return (
    <div>
      <h2>About info</h2>
      <button onClick={handleClick}>go to Contact</button>
    </div>
  )
}

export default About
