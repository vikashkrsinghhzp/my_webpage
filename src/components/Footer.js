import './FooterStyle.css';
import React from 'react'
import { FaFacebook, FaHome , FaInstagram, FaMailBulk, FaPhone, FaTwitter, FaLinkedinIn} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>

                <div className='location'>
                    <FaHome size={20} style={{color: "white", marginRight: '2rem'}}/>
                    <p>House No - 09, Mahua, Bihar.</p>
                </div>


                <div className='phone'>
                    <h4>
                        <FaPhone size={20} style={{color: "white", marginRight: '2rem'}}/>
                        91-88044-64155
                    </h4>
                </div>


                <div className='email'>
                    <h4>
                        <FaMailBulk size={20} style={{color: "white", marginRight: '2rem'}}/>
                        vikashkrsinghhzp@gmail.com
                    </h4>
                </div>
            </div>

            <div className='right'>
                <h4>About Me</h4>
                <p>I'm a B.tech Graduate, Specialised in Cyber Security, having sound Knowledge of Machine Learning and Full Stack Development.</p>

                <div className='social'>
                    <FaFacebook size={30} style={{color: "white", marginRight: '1rem'}}/>
                    <FaTwitter size={30} style={{color: "white", marginRight: '1rem'}}/>
                    <FaInstagram size={30} style={{color: "white", marginRight: '1rem'}}/>
                    <FaLinkedinIn size={30} style={{color: "white", marginRight: '1rem'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer