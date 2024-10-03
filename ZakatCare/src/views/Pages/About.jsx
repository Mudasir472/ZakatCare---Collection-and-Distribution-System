import programBG from "../../Images/ourProgramBG.webp"
import OurWork from "./OurWork"
export default function About() {
    return (<>
        <div className="about">
            <div className="aboutUs">
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
                        <h4 style={{ color: "#002866" }} className="font-bold text-5xl">Our Programs</h4>
                    </div>
                </div>
                <div style={{ backgroundColor:'#f9f9f9'}} className="aboutdesc ">
                    <h3>Zakatcare - Collection and Distribution System</h3>
                    ZakatCare is a platform dedicated to connecting donors with impactful causes. We focus on key programs like education scholarships, feeding the poor, relief and rehabilitation, and marriage assistance. Our mission is to ensure every Zakat donation makes a meaningful difference, helping communities thrive through trusted and transparent distribution.
                </div>
                <div className="container aboutUsWork flex flex-wrap items-center justify-between">
                    <OurWork/>
                    <OurWork/>
                    <OurWork/>
                    <OurWork/>
                </div>
            </div>
        </div>
    </>)
}