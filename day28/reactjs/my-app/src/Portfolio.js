import React from 'react'
import './App.css';
let name=' Vignesh';
let imgUrl='https://creapills.com/wp-content/uploads/2022/10/dall-e-gratuit-intelligence-artificielle-6-1160x1160.jpg';
let description='Malla Reddy University, Hyderabad (As per Telangana State Private Universities  Act  No. 13  of  2020,  Higher  Education  (UE)  Department dt. 15.6.2020) was established in the year 2020 through the State Legislature Council of Telangana, Govt. of Telangana. It is offering industry-focused specialised Undergraduate and Postgraduate courses with the aim of providing Quality Higher Education on par with International standards. It persistently seeks and adopts innovative methods to improve the quality of higher education on a consistent basis';
const Home=()=>{
    return(
        <div>this is nested component info</div>
    )
}
const About=()=>{
    return(
        <div>this is about component info</div>
    )
}
export const Portfolio = () => {
  return (
    <div className='portfolio'>
         <h1>Portfolio</h1>
    <div className='img'>
         <img src={imgUrl} alt='car' className='circ-img'/>
         </div>
        <h2>My name is: {name}</h2>
        <p>{description}</p>
        <Home /> 
        <About />
   </div>
    
  )
}
