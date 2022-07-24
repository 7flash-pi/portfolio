import React from 'react';
import alias from '../assets/bg.jpg';

const AboutUs = () => {
  return (
    <div className='aboutUs-Container'>
      <div className='aboutUs-info'>
        <h1>Hi</h1>
        <h1> I am Ashish Raj,</h1>
        <h1> Web Developer</h1>
        <h3>Frontend Developer</h3>
        <h3>(React,AngularJs,Html,Css)</h3>
     </div>
     <div className="img-container">
        <img src={alias} alt="" />
     </div>


    </div>
  )
}

export default AboutUs
