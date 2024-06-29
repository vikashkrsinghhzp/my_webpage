import './FooterStyle.css';
import React from 'react'
import { FaFacebook, FaHome , FaInstagram, FaMailBulk, FaPhone, FaTwitter, FaLinkedinIn, FaGithub, FaWhatsapp, FaDownload} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                
                <div className='phone'>
                    <h4>
                        <FaPhone size={20} style={{color: "white", marginRight: '2rem'}}/>
                        +91 88044-64155
                    </h4>
                </div>
                
                <div className='location'>
                    <h4>
                        <FaHome size={20} style={{color: "white", marginRight: '2rem'}}/>
                        Hazipur, Bihar - 844101.
                    </h4>
                </div>

                <div className='email'>
                    <h4>
                        <FaMailBulk size={20} style={{color: "white", marginRight: '2rem'}}/>
                        vikashkrsinghhzp@gmail.com
                    </h4>
                </div>

                <div className='download_resume'>
                    <h4>
                        <FaDownload size={20} style={{color: "white", marginRight: '2rem'}}/>
                        <a href="https://drive.google.com/file/d/1v4bi6ebRYLF66RUbaHw6_6UduRmShWP6/view?usp=sharing" download="Resume.pdf">Download Resume</a>
                        {/* <a href="../assets/Resume.pdf" download="Resume.pdf">Download Resume</a> */}

                    </h4>
                </div>

            </div>

            <div className='right'>
                <h4>About Me</h4>
                    <p>I am a software engineer currently working at ITC Infotech as a junior system administrator, where I am involved in an AI chatbot project for a British client. I hold a B.Tech in Computer Science with a specialization in cybersecurity and a minor in cyber law. My academic background and professional experience have equipped me with a strong foundation in both technical and legal aspects of cybersecurity, which I leverage in my current role to deliver innovative solutions.</p>
                <div className='social'>
         
                    <div>
                        <a href="https://www.linkedin.com/in/vikashkrsinghhzp/">
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
                        <a href="https://www.instagram.com/___vikash_singh/">
                            <FaInstagram size={30} style={{color: "white", marginRight: '1rem'}}/>
                        </a>
                    </div>

                    <div>
                        <a href="https://twitter.com/vikash_hzp">
                            <FaTwitter size={30} style={{color: "white", marginRight: '1rem'}}/>
                        </a>
                    </div>

                    <div>
                        <a href="https://wa.me/8804464155">
                            <FaWhatsapp size={30} style={{color: "white", marginRight: '1rem'}}/>
                        </a>
                    </div>

                    <div>
                        <a href="mailto:vikashkrsinghhzp@gmail.com">
                            <FaMailBulk size={30} style={{color: "white", marginRight: '1rem'}}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer