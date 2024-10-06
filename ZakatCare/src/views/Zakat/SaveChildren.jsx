import saveChild from "../../Images/saveChildren.jpg"
import Volunteer from "./Volunteer";
import people from "../../Images/people.png"
import happyface from "../../Images/happyface.png"
import accessibility from "../../Images/accessibility.png"
import heart from "../../Images/heart.png"

import "./zakat.css"

function saveChildren() {
    return (<>
        <div className="childrens">

            <div className="saveChilds h-full">
                <div className="bgImage relative">
                    <div
                        style={{
                            backgroundImage: `url(${saveChild})`,  /* Use parentheses around saveChild */
                            backgroundSize: 'cover',  /* Ensures the image covers the entire div */
                            backgroundPosition: 'center top',  /* Centers the image */
                            backgroundRepeat: 'no-repeat',  /* Prevents the image from repeating */
                            padding: '20px',  /* Add some padding if needed */
                            borderRadius: '15px',  /* Optional: round corners */
                            backgroundAttachment: 'fixed', 
                        }}
                        className="bgImage flex items-center justify-center relative"
                    >

                        
                        {/* Semi-transparent overlay */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.4)',  // Dark overlay with 40% opacity
                                borderRadius: '15px',  // Match the rounded corners
                                zIndex: 1  // Ensure it's between the background and content
                            }}
                        ></div>

                        {/* Content on top of the background and overlay */}
                        <div  className="container childDesc flex flex-column items-start justify-center relative z-10">
                            <h4  className=" text-5xl">Save a child by contributing monthly</h4>
                            <p className="w-1/2 font-semibold text-lg ">
                                Giving a monthly donation is the best way to help vulnerable children all over the world. A monthly donation helps us save children's lives. It helps us protect them.
                            </p>
                            <button style={{ height:'44px'}} className="btn btn-danger donateBtn">Donate Now < span className="flex items-center justify-center "><i class="bi bi-arrow-right-short"></i></span></button>
                        </div>
                    </div>
                </div>

            </div>
            <div style={{ backgroundColor: "rgb(245, 245, 245)" }} className="next">
                <div  className="volunteers container flex items-center justify-evenly">
                    <Volunteer title="102" desc="Volunteers" img={people} />
                    <Volunteer title="11" desc="Donations in Million $" img={heart} />
                    <Volunteer title="21" desc="Contributors" img={happyface} />
                    <Volunteer title="1" desc="Years Activity" img={accessibility} />
                </div>
            </div>
        </div>
    </>);
}

export default saveChildren;