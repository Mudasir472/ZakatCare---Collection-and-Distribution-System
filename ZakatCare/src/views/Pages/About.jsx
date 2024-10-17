import img from "../../NewImages/platform-img.png"
import activist from "../../NewImages/activist.png"
import decision from "../../NewImages/decision.png"
import groups from "../../NewImages/groups.png"
import report from "../../NewImages/report.png"
import "./about.css"
import AboutBelieveComps from "./AboutBelieveComps"
function About() {
    return (<>
        <div className="about-us">
            <div className="aboutMain ">
                <div className="platform  flex flex-column items-center justify-evenly">
                    <div className="platform-head flex flex-column items-center justify-evenly">
                        <h3>World’s Petition Platform</h3>
                        <p>We started in 2016 with the radical idea that anyone, anywhere, should be able to easily and securely to start their own petition. Today, we offer a trusted and easy-to-use platform for social movement accross the world.</p>
                    </div>
                    <div className="platform-img">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="believe container flex items-center justify-between">
                    <div className="believe-left-bdy">
                        <div className="believe-left">
                            <p className="mb-4">Who use platfrom?</p>
                            <h3>We believe that when everyone speaks out the problem of society and action together, the world will become a better place.</h3>
                        </div>
                    </div>
                    <div className="believe-Rights flex items-center">
                        <div className="believe-right flex flex-wrap items-center justify-center" >
                            <AboutBelieveComps head="Activists" desc="Social activists can start a social movements and connect supporters in their communities." img={activist}/>
                            <AboutBelieveComps head="Legislators" desc="Decision makers at the highest levels of government are engaging with their constituents." img={ decision} />
                            <AboutBelieveComps head="Organizations" desc="Leading organizations are advancing their causes and mobilizing new supporters." img={groups } />
                            <AboutBelieveComps head="Reporters" desc="Journalists are sourcing powerful stories and covering campaigns hundreds of times a day." img={report } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default About;