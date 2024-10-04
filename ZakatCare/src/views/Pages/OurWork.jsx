import "./contact.css"

import help from "../../Images/help.png"
function OurWork({ img, head, desc }) {
    return (<>
        <div className="ourWork mb-6">
            <div className="workMain flex flex-column items-center justify-evenly">

                <img src={img} alt="" />

                <div className="flex items-center justify-evenly h-32 flex-column">
                    <h5 >{head}</h5>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    </>);
}

export default OurWork;