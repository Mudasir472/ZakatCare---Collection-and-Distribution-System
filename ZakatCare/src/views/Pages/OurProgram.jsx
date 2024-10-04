import programBG from "../../Images/ourProgramBG.webp"
import "./contact.css"
import ProgComponents from "../Zakat/progComponents" // Ensure the component is capitalized
import poor from "../../Images/poor.png"
import education from "../../Images/education.png"
import marry from "../../Images/marry.png"
import others from "../../Images/others.png"
import care from "../../Images/care.png"

export default function OurProgram() {
    const causes2 = [
        {
            id: 1,
            title: "Scholarship/Education",
            description: "Our scholarship program aims to provide financial assistance to underprivileged students who aspire to achieve their educational goals. By removing financial barriers, we enable deserving individuals to pursue their studies, gain knowledge, and build a brighter future for themselves and their communities.",
            img: others
        },
        {
            id: 4,
            title: "Other Schemes & Projects",
            description: "These include the provision of bore wells, healthcare centers, support for young widows, craft centers for training ladies and girls, coaching for civil services exams, and Sadaqa.",
            img: others
        },
    ]

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

        // Add more causes as needed
    ];
    return (<>
        <div className="ourProgram">
            <div className="ourProgramMain">
                <div
                    style={{
                        backgroundImage: `url(${programBG})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center left',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed',
                    }}
                    className="programBG">

                    <div style={{ height: "100%" }} className="container childDesc flex flex-column items-center justify-center relative z-10">
                        <h4 style={{ color: "#F4B03E" }} className="font-bold text-5xl">Our Programs</h4>
                    </div>
                </div>

                <div className="h-80 programHead container flex flex-column items-start justify-evenly">
                    <h3 className="font-extrabold text-4xl	">ZaakatCare - Collection and Distribution System</h3>
                    <p>At Hyderabad Zakat & Charitable Trust (HZCT), we are committed to serving the underprivileged communities and making a positive impact on their lives. Through our various programs, we address critical areas such as education, healthcare, relief, and empowerment.</p>

                    <p className="font-bold">Choose a program that resonates with you and donate today. Your support is invaluable in helping us continue our mission of transforming lives and building a better future for all.</p>
                </div>

                <div className="actualPrograms container">
                    <div className="programs  flex justify-center items-center ">
                        <ProgComponents title="Scholarship/Education" description="Our scholarship program aims to provide financial assistance to underprivileged students who aspire to achieve their educational goals. By removing financial barriers, we enable deserving individuals to pursue their studies, gain knowledge, and build a brighter future for themselves and their communities." img={education} />
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
                    <div className="programs flex justify-center items-center ">
                        {causes2.map(cause => (
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
    </>)
}