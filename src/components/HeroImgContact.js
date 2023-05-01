import './HeroImgContactStyle.css';
import React from 'react'
import IntroImage from "../assets/Img8.jpg";

const HeroImgContact = () => {
  return (
    <div className='hero-contact'>
        <div className='mask-contact'>
            <img className='intro-image' src={IntroImage} alt="IntroImage"/>
        </div>

        <div className='content-contact'>
            <h1>Contact</h1>
        </div>
    </div>
  )
}

export default HeroImgContact