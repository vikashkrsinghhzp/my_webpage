import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgAbout from '../components/HeroImgAbout';

import Owner_Pic from "../assets/my_pic.png";

const About= () => {
  return (
    <div>
      <Navbar/>
      <HeroImgAbout/>
      <div style={{display:"flex", "flex-direction":"row", padding:"3rem"}}>
        <img src = {Owner_Pic} alt = "Profile_pic" style={{"width":"250px", "border-radius":"50%"}}/>
        <p style={{margin:'50px'}}>Hi, <br/> I'm Vikash Kumar Singh, born and raised in a small village of Bihar and I have Completed my bachelor's in Computer Science and Engineering (Cyber Security) and Currently working in ITC Infotech as a IT Engineer. <br/> I have keen Interest in Python, Java, Machine Learning, Full Stack, Cyber Security and Artificial Intelligence and also I have done Projects on these Skills only.</p>
      </div> 
      <Footer/>
    </div>
  )
}

export default About