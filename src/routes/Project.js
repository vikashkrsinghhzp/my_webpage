import React from 'react'
import './ProjectStyle.css';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgProject from '../components/HeroImgProject';
import Certficate_1 from "../assets/HRC.jpg";
import Certficate_2 from "../assets/BIG_Data.jpg";
import Certficate_3 from "../assets/Web_Hacking.jpg";
import Certficate_4 from "../assets/git.jpg";
import Certficate_5 from "../assets/Police.jpg";
import Certficate_6 from "../assets/ICCS.jpg";

import Project_1 from "../assets/Proj_1.jpeg";
import Project_2 from "../assets/City_Conf.png";


const project = () => {
  return (
    <div>
      <Navbar/>

      <HeroImgProject/>

      <div className='proj-content'>
          <img src={Certficate_6} alt="Certificate 6"/>
          <img src={Certficate_4} alt="Certificate 4"/>
          <img src={Certficate_1} alt="Certificate 1"/>
          <img src={Certficate_5} alt="Certificate 5"/>
          <img src={Certficate_2} alt="Certificate 2"/>
          <img src={Certficate_3} alt="Certificate 3"/>
          
          <img src={Project_1} alt="Project 1"/>
          <img src={Project_2} alt="Project 2"/>
      </div>
      
      <Footer/>
    </div>
  )
}

export default project