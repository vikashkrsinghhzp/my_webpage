import './HeroImgAboutStyle.css';
import React from 'react'
import IntroImage from "../assets/Img8.jpg";

const HeroImgAbout = () => {
  return (
    <div className='hero-about'>
        <div className='mask-about'>
            <img className='intro-image' src={IntroImage} alt="IntroImage"/>
        </div>

        <div className='content-about'>
            <h1>About Me</h1>
        </div>
    </div>
  )
}

export default HeroImgAbout