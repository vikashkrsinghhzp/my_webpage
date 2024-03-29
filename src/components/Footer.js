import './FooterStyle.css';
import React from 'react'
import { FaFacebook, FaHome , FaInstagram, FaMailBulk, FaPhone, FaTwitter, FaLinkedinIn, FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>

                <div className='location'>
                    <FaHome size={20} style={{color: "white", marginRight: '2rem'}}/>
                    <p>Hazipur, Bihar - 844101.</p>
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
                <p>I have a B.Tech in CS/IT. and am well-versed in IT Infrastructure, full stack development, machine learning, and cyber security. In search of a job in the information technology industry where I can use my skills to advance both my professional and personal development and have a positive impact on the success of the business.</p>

                <div className='social'>
         
                    <div>
                        <a href="https://www.linkedin.com/in/vikashkrsingh-lpu/">
                            <FaLinkedinIn size={30} style={{color: "white", marginRight: '1rem'}}/>
                        </a>
                    </div>

                    <div>
                        <a href="https://github.com/vikashkrsinghhzp/">
                            <FaGithub size={30} style={{color: "white", marginRight: '1rem'}}/>
                        </a>
                    </div>

                    <div>
                        <a href="https://www.facebook.com/vikash88044">
                            <FaFacebook size={30} style={{color: "white", marginRight: '1rem'}}/>
                        </a>
                    </div>

                    <div>
                        <a href="https://www.instagram.com/vikash_hzp/">
                            <FaInstagram size={30} style={{color: "white", marginRight: '1rem'}}/>
                        </a>
                    </div>

                    <div>
                        <a href="https://twitter.com/vikash_hzp">
                            <FaTwitter size={30} style={{color: "white", marginRight: '1rem'}}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer