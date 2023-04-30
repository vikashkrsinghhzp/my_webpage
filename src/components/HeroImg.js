import './HeroImgStyle.css';
import React from 'react';
import IntroImage from "../assets/img1.jpeg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-image' src={IntroImage} alt="IntroImage"/>
        </div>

        <div className='content'>
            <p>Hi, I'm a React Developer.</p>
            <h1>Software Engineer</h1>

            <div>
                <Link to= "/Project" className='btn'>Projects</Link>

                <Link to= "/Contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
