import React from 'react'
import "./NewContactPage.css";

const Contactform = () => {
    return (
        <>
            <div className="contactForm container">
                <div className="contactHead">
                    <h2>
                        Feel free to contact us.
                        We’ll glad to hear from you.
                    </h2>
                </div>
                <br /><br /><br /><br />
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
                </div>
            </div>
        </>
    )
}

export default Contactform