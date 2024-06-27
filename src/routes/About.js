import React from 'react'
import './AboutStyle.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgAbout from '../components/HeroImgAbout';
import FooterAllRightsReserved from '../components/FooterAllRightsReserved';
import Resume from "../assets/resume.jpg";

const About= () => {
  return (
    <div>
      <Navbar/>
      <HeroImgAbout/>
      <div className='about-resume'>
        <img src={Resume} alt="Vikash_Resume"/>
      </div>
      <Footer/>
      <FooterAllRightsReserved/>
    </div>
  )
}

export default About