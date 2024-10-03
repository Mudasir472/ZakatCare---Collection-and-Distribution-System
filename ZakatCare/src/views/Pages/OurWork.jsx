import "./contact.css"

import help from "../../Images/help.png"
function OurWork() {
    return (<>
        <div className="ourWork mb-6">
            <div className="workMain flex flex-column items-center justify-content">

                <img src={help} alt="" />

                <h4>Our Mission</h4>
                <p>Creating Opportunities for a Brighter Future</p>
            </div>
        </div>
    </>);
}

export default OurWork;