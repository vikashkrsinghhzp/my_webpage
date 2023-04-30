// To write a function component just type "rafce"

import React from 'react'
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Footer />
    </div>
  )
}

export default Home