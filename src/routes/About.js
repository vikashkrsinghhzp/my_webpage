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
        <img src = {Owner_Pic} alt = "Profile_pic" style={{"width":"250px", "height": "250px", "border-radius":"50%"}}/>
        <p style={{margin:'50px', justifyContent:'center'}}>Hi, <br/> I'm Vikash Kumar Singh, born and raised in a small village of Bihar and I have Completed my bachelor's in Computer Science and Engineering (Cyber Security) from Lovely Professional University, Punjab and Currently working in ITC Infotech as a IT Engineer.
          <br/>
          I have keen Interest in Python, Java, Machine Learning, Full Stack, Cyber Security and Artificial Intelligence.
          Apart from this, I have also done Research Paper named "Review on Analysis of consumer mind and behavior in purchasing and decision making." which is Published on ICCS Journel.
        </p>
      </div> 
      <Footer/>
    </div>
  )
}

export default About