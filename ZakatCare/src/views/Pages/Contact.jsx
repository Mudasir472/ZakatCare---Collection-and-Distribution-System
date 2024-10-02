import "./contact.css";
export default function Contact() {
    return (
        <>
            <div className="top_wrapper">
                <div
                    className="header_page centered without_shadow no_parallax with_subtitle"
                    style={{ height: "650px" }}
                >
                    {/* <div
                        className="overlay"
                        style={{ backgroundColor: "rgba(245, 245, 245, 0.75" }}
                    >
                    </div> */}
                    <div className="container">
                        <div className="titles" style={{ paddingTop: "199.333px" }}>
                            <h1>Contact Us</h1>
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
                    <div className="container">
                        <div className="section_clear flex">
                            <div className="vc_col-sm-6 wbp_column column_container">
                                <div className="wpb_wrapper">
                                    <div className="wpb_content_element block_title column_title inner-simple ">
                                        <h2 className="h1">Drop us a line</h2>
                                    </div>
                                    <div
                                        className="codeless_separator"
                                        style={{
                                            height: "4px",
                                            marginTop: "0px",
                                            marginBottom: "30px",
                                        }}
                                    >
                                        <span
                                            className="separator"
                                            style={{
                                                background: "#000000",
                                                left: "0",
                                                height: "100%",
                                                position: "absolute",
                                            }}
                                        ></span>
                                    </div>
                                    <div
                                        role="form"
                                        className="wpcf7"
                                        id="wpcf7-f5-p167-o1"
                                        lang="en-US"
                                        dir="ltr"
                                    >
                                        <div className="screen-reader-response"></div>
                                        <form
                                            className="wpcf7-form"
                                            novalidate="novalidate"
                                        >

                                        </form>
                                        <div Style={{ display: 'none' }}>
                                            <input type="hidden" name="_wpcf7" value="5" />
                                            <input
                                                type="hidden"
                                                name="_wpcf7_version"
                                                value="5.1.3"
                                            />
                                            <input type="hidden" name="_wpcf7_locale" value="en_US" />
                                            <input
                                                type="hidden"
                                                name="_wpcf7_unit_tag"
                                                value="wpcf7-f5-p167-o1"
                                            />
                                            <input
                                                type="hidden"
                                                name="_wpcf7_container_post"
                                                value="167"
                                            />
                                        </div>
                                        <p>
                                            <label>
                                                Your Name (required)
                                                <br />
                                                <span className=" your-name">
                                                    <input
                                                        type="text"
                                                        name="your-name"
                                                        value=""
                                                        size="50"
                                                    />
                                                </span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                Your Email (required)
                                                <br />
                                                <span className=" your-email">
                                                    <input
                                                        type="email"
                                                        name="your-email"
                                                        value=""
                                                        size="50"
                                                    />
                                                </span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                Subject
                                                <br />
                                                <span className="your-subject">
                                                    <input
                                                        type="text"
                                                        name="your-subject"
                                                        value=""
                                                        size="50"
                                                    />
                                                </span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                Your Message
                                                <br />
                                                <span className="wpcf7-form-control-wrap your-message">
                                                    <textarea
                                                        name="your-message"
                                                        cols="50"
                                                        rows="10"
                                                    ></textarea>
                                                </span>
                                            </label>
                                        </p>
                                        <p>
                                            <button className="btnn ">Submit</button>
                                        </p>
                                    </div>
                                    <form />
                                </div>
                            </div>
                            <div className="vc_col-sm-6">
                                <div className="wpb_wrapper">
                                    <div className="vc_empty_space" style={{ height: "115px" }}>
                                        <span className="vc_empty_space_inner"></span>
                                    </div>
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
            </div >
        </>
    );
}
