import "./zakat.css"
import ProgComponents from "./progComponents"; // Ensure the component is capitalized
import poor from "../../Images/poor.png"
import education from "../../Images/education.png"
import marry from "../../Images/marry.png"
import others from "../../Images/others.png"
import care from "../../Images/care.png"
const causes = [

    {
        id: 2,
        title: "Feeding the Poor",
        description: "Through our 'Feeding the Poor' initiative, we work to alleviate hunger and provide nutritious meals to those in need. We believe that everyone deserves access to food, and this program aims to ensure that no individual or family goes to bed hungry, promoting health and well-being within the community.",
        img: poor
    },
    {
        id: 3,
        title: "Relief and Rehabilitation",
        description: "Our relief and rehabilitation program is dedicated to assisting those affected by natural disasters, conflicts, or other crises. We provide essential supplies, medical assistance, and emotional support to help individuals and families rebuild their lives after traumatic events.",
        img: care
    },
    {
        id: 1,
        title: "Scholarship/Education",
        description: "Our scholarship program aims to provide financial assistance to underprivileged students who aspire to achieve their educational goals. By removing financial barriers, we enable deserving individuals to pursue their studies, gain knowledge, and build a brighter future for themselves and their communities.",
        img: others
    },
    // Add more causes as needed
];



function Programs() {
    return (
        <>
            <div style={{ backgroundColor: "#FEF7EC" }} className="program">
                <div className="programMain container flex justify-evenly items-center flex-column">
                    <div className="ourprogram flex justify-evenly items-center flex-column">
                        <h2>Our Programs</h2>
                        <p style={{ width:"69%",textAlign:"center"}}>Together, we are helping children unlock their potential by focusing our efforts on four causes</p>
                        <span className="separators"

                        ></span>
                    </div>

                    <div className="actualPrograms">
                        <div className="programs flex justify-center items-center ">
                            <ProgComponents title="Scholarship/Education" description="Our scholarship program aims to provide financial assistance to underprivileged students who aspire to achieve their educational goals. By removing financial barriers, we enable deserving individuals to pursue their studies, gain knowledge, and build a brighter future for themselves and their communities." img={education} />
                            <ProgComponents title="Marriage Assistance" description="We recognize the importance of marriage in building families and communities. Our marriage assistance program aims to provide financial support and resources to individuals seeking to get married, especially those facing economic hardships. This program fosters social stability and encourages community bonds." img={marry} />
                        </div>
                        <div className="programs flex justify-center items-center ">
                            {causes.map(cause => (
                                <ProgComponents
                                    key={cause.id}
                                    title={cause.title}
                                    description={cause.description}
                                    img={cause.img}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Programs;
