import './HeroImgProjectStyle.css';
import React from 'react'
import IntroImage from "../assets/Img8.jpg";

const HeroImgProject = () => {
  return (
    <div className='hero-project'>
        <div className='mask-project'>
            <img className='intro-image' src={IntroImage} alt="IntroImage"/>
        </div>

        <div className='content-project'>
            <h1>Project | Certificates</h1>
            <p>Some of my recent works</p>
        </div>
    </div>
  )
}

export default HeroImgProject