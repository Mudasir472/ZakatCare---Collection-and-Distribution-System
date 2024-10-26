import React from 'react'
import Addlogo from "/Addimg.png";
import Emaillogo from "/Emailimg.png";
import ContactLogo from "/contactImg.png";
import img from "../../assets/images/rightSectionImg.svg";
import "./NewContactPage.css";
import Contactform from './Contactform';

const NewContactPage = () => {
    return (
        <>
            <div className='herosection_contact  d-flex justify-evenly items-center'>
                <div className="left_hero_section container">
                    <div className="hero_intro">
                        <h1>Hello,Whats Up?</h1>
                        <p>We're here to assist you with any questions, concerns, or feedback. Whether you’re a donor, a beneficiary, or simply interested in learning more about our programs, feel free to reach out. Together, we can make a difference.</p>
                    </div>
                    <br /><br /><br />
                    <div className="getTouch flex flex-column items-start justify-evenly">
                        <div className="addresses d-flex items-center justify-center">
                            <div className="add_img">
                                <img src={Addlogo} alt="Address" />
                            </div>
                            <div className="get_info">
                                <h2>Address</h2>
                                <p>MANUU Gachibowli Hyderabad 500032 , INDIA</p>
                            </div>
                        </div>
                        <div className="email d-flex items-center justify-center">
                            <div className="email_img">
                                <img src={Emaillogo} alt="Email" />
                            </div>
                            <div className="get_info">
                                <h2>Email</h2>
                                <p><a href="mailto:zakatcare@gmail.com">zakatcare@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="contact d-flex items-center justify-center">
                            <div className="contact_img">
                                <img src={ContactLogo} alt="Contact" />
                            </div>
                            <div className="get_info">
                                <h2>Contact Us</h2>
                                <p><a href="tel:+916006189840">+91 6006189840</a></p>

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