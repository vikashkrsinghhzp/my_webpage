import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgContact from '../components/HeroImgContact';
import FooterAllRightsReserved from '../components/FooterAllRightsReserved';
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgContact/>
      <Footer/>
      <FooterAllRightsReserved/>
    </div>
  )
}

export default Contact