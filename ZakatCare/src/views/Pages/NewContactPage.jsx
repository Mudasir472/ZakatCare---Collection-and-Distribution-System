import React from 'react'
import Addlogo from "/Addimg.png";
import Emaillogo from "/Emailimg.png";
import ContactLogo from "/contactImg.png";
import img from "/rightSectionImg.png";
import "./NewContactPage.css";
import Contactform from './Contactform';

const NewContactPage = () => {
    return (
        <>
            <div className='herosection_contact  d-flex justify-evenly items-center'>
                <div className="left_hero_section container">
                    <div className="hero_intro">
                        <h1>Hola,Whats Up?</h1>
                        <p>Conikal build the Powerful Platform base on WordPress with latest technology. We offers the fastest way for Webmaster start their Platforms.</p>
                    </div>
                    <br /><br /><br />
                    <div className="getTouch flex flex-column items-start justify-evenly">
                        <div className="addresses d-flex items-center justify-center">
                            <div className="add_img">
                                <img src={Addlogo} alt="Address" />
                            </div>
                            <div className="get_info">
                                <h2>Address</h2>
                                <p>17224 S. Figueroa Street, Gardena, CA 90248, USA</p>
                            </div>
                        </div>
                        <div className="email d-flex items-center justify-center">
                            <div className="email_img">
                                <img src={Emaillogo} alt="Email" />
                            </div>
                            <div className="get_info">
                                <h2>Email</h2>
                                <p>abc@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact d-flex items-center justify-center">
                            <div className="contact_img">
                                <img src={ContactLogo} alt="Contact" />
                            </div>
                            <div className="get_info">
                                <h2>Contact Us</h2>
                                <p>+1 415 800-3128</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right_hero_section flex items-center justify-center px-6 ">
                    <div className="rightImg">
                        <img src={img} alt="Image" />
                    </div> 
                </div>
            </div>
            <Contactform />
        </>
    )
}

export default NewContactPage