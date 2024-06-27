// To write a function component just type "rafce"

import React from 'react'
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import FooterAllRightsReserved from '../components/FooterAllRightsReserved';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Footer />
      <FooterAllRightsReserved/>
    </div>
  )
}

export default Home