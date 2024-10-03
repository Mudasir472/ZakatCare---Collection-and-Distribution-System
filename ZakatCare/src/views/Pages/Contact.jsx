import "./contact.css";
export default function Contact() {
    return (
        <>
            <div className="top_wrapper">
                <div
                    className="header_page centered without_shadow no_parallax with_subtitle hero-title "
                >

                    <div className="main">
                        <div className="titles" style={{ paddingTop: "199.333px", opacity: "0.6" }}>
                            <h1>CONTACT US</h1>
                            <span className="divider"></span>
                            <h3>We are created to help people around the world</h3>
                        </div>
                    </div>
                </div>
                <section id="content" className="composer_content " />
                <div
                    className="vc_row wpb_row vc_row-fluid  row-dynamic-el standard_section"
                >
                    <div style={{ position: "absolute", top: "0" }}></div>
                    <div className="container flex justify-between">
                        <div className="section_clear">
                            <div className="vc_col-sm-6 wbp_column column_container">
                                <form className="container" action="">
                                    <div className="wpb_wrapper inputFormContact flex flex-column">
                                        <div className="wpb_content_element block_title column_title inner-simple sub-title ">
                                            <h2 className="h1">Drop us a line</h2>
                                        </div>
                                        <br />
                                        <p className="flex flex-column">
                                            <label>
                                                Your Name (required) :
                                                <br />
                                            </label>
                                            <span className=" your-name">
                                                <input
                                                    type="text"
                                                    name="your-name"
                                                    value=""
                                                    size="50"
                                                />
                                            </span>
                                        </p>
                                        <p className="flex flex-column">
                                            <label>
                                                Your Email (required) :
                                                <br />
                                            </label>
                                            <span className=" your-email">
                                                <input
                                                    type="email"
                                                    name="your-email"
                                                    value=""
                                                    size="50"
                                                />
                                            </span>
                                        </p>
                                        <p className="flex flex-column">
                                            <label>
                                                Subject :
                                                <br />
                                            </label>
                                            <span className="your-subject">
                                                <input
                                                    type="text"
                                                    name="your-subject"
                                                    value=""
                                                    size="50"
                                                />
                                            </span>
                                        </p>
                                        <p className="flex flex-column">
                                            <label>
                                                Your Message
                                                <br />
                                            </label>
                                            <span className="wpcf7-form-control-wrap your-message">
                                                <textarea
                                                    name="your-message"
                                                    cols="50"
                                                    rows="10"
                                                ></textarea>
                                            </span>
                                        </p>
                                        <p>
                                            <button className="btnn ">Submit</button>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="vc_col-sm-6 address ">
                            <div className="wpb_wrapper w-full">
                                <p>&nbsp;</p>
                                <br /><br />
                                <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                        <h3>New York Head Quater</h3>
                                        <p>
                                            <strong>Address: </strong> New York HeadQuater, Street
                                            3246 West 1154
                                        </p>
                                        <p>
                                            <strong>Phone Number:</strong> +125566576
                                        </p>
                                        <p>
                                            <strong>Email :</strong> info@charitymy.info
                                        </p>
                                        <p>&nbsp;</p>
                                        <h3>London Head Quater</h3>
                                        <p>
                                            <strong>Address: </strong> London Office, Street 225
                                            West 1154
                                        </p>
                                        <p>
                                            <strong>Phone Number:</strong> +125566576
                                        </p>
                                        <p>
                                            <strong>Email :</strong> info@charitymy.info
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section />
            <a href="#" className="scrollup">
                <i className="bi bi-caret-up-square-fill">
                </i>
            </a>

        </>
    );
}
