import React from 'react'
import "./NewContactPage.css";
import Support from './Support';
import WorkLoc from './WorkLoc';
import img1 from '../../../public/support.png'
import img2 from '../../../public/media.png'
import img3 from '../../../public/payment.png'
import img4 from '../../../public/workImg.png'
import Helpdesk from './Helpdesk';
import helpDescImg from '../../../public/docs.png'
import icon from '../../../public/suportIcon.png'

const Contactform = () => {
    return (
        <>
            <div className="contactForm ">
                <div className="contactHead flex justify-center items-center">
                    <h2>
                        Feel free to contact us.  <br />
                        We’ll glad to hear from you.
                    </h2>
                </div>
                <br /><br />
                <div className="form container">
                    <form >
                        <label >
                            Your Name
                            <br />
                        </label>
                        <input type="text" placeholder="Enter your name" />
                        <label >
                            Your email
                            <br />
                        </label>
                        <input type="email" placeholder="Enter your email" />
                        <label >
                            Subject
                            <br />
                        </label>
                        <input type="text" />
                        <label>
                            Your Message
                            <br />
                        </label>
                        <textarea
                            name="your-message"
                            cols="5"
                            rows="10"
                        ></textarea>
                    </form>
                    <div class="d-grid gap-2 mt-4">
                        <button class="btn btn-primary" type="button">Submit</button>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="question">
                <div className="question_hero mb-12">
                    <h2>Got question?</h2>
                    <p>Contact one of department to solve your problem.
                    </p>
                </div>
                <div className="ques_support  container d-flex justify-between mt-4 text-center ">
                    <Support img={img1} head="Support" desc="We’re here to you any question about product" />
                    <Support img={img2} head="Media" desc="Get our news, company info and media resources" />
                    <Support img={img3} head="Payment" desc="We’re love to talk about how we can work together" />
                </div>
            </div>
            <br /><br />
            <div className="about_work container d-flex justify-evenly">
                <div className="rightSideImg d-flex justify-center items-center">
                    <img src={img4} alt="" />
                </div>
                <div className="leftSide">
                    <div className="left_head">
                        <h2>We work <br />worldwide.
                        </h2>
                    </div>
                    <WorkLoc head="Bali" desc="508 Bridle Avenue
                    Newnan, GA
                    30263" />
                    <WorkLoc head="London" desc="508 Bridle Avenue
                    Newnan, GA
                    30263" />
                    <WorkLoc head="Moscow" desc="508 Bridle Avenue
                    Newnan, GA
                    30263" />
                    <WorkLoc head="Paris" desc="508 Bridle Avenue
                    Newnan, GA
                    30263" />
                </div>
            </div>
            <br /><br />
            <div className="help container">
                <Helpdesk img={helpDescImg} head="Documentation" desc="Find documents related to products and your account." />
                <div>
                    <button class="btn btn-primary" type="button">Find a tutorial</button>
                </div>
                <Helpdesk img={icon} head="Support Desk" desc="Contact our technical experts for customer support." />
                <div>
                    <button class="btn btn-primary" type="button">Create a tikcet</button>
                </div>
            </div>
        </>
    )
}

export default Contactform