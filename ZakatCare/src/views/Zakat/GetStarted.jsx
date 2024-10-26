import victory from "../../NewImages/victory.png"
import viral from "../../NewImages/viral.png"
import launch from "../../NewImages/launch.png"
import startFrame from "../../assets/images/startFrame.svg"
import { Link } from "react-router-dom"

function GetStarted() {
    return (<>
        <div className="getstarted">
            <div className="getstartedMain container flex flex-column items-center justify-evenly">
                <div className="startHead">
                    <h3>Get started in a few minutes</h3>
                    <p>Campoal supports a variety of the most popular category.</p>
                </div>
                <div className="startComps flex  items-center justify-evenly">
                    <div className="startComp1">
                        <img src={launch} alt="" />
                        <h3>Launch</h3>
                        <p>PIndividuals and organizations can easily start their Zakat campaigns without any fees</p>
                    </div>
                    <div className="startComp1">
                        <img src={viral} alt="" />
                        <h3>Viral</h3>
                        <p>Sharing your campaign with friends, family, and supporters creates momentum for your cause</p>
                    </div>
                    <div className="startComp1">
                        <img src={victory} alt="" />
                        <h3>Victory</h3>
                        <p>Decision-makers have the opportunity to respond to your Zakat petition, amplifying your voice</p>
                    </div>
                </div>
                <div className="startToday flex  items-center justify-evenly">
                    <div className="todayLeft flex flex-column items-start justify-between">
                        <div className="todaysHead">
                            <h2 className="mb-4">Start one today!</h2>
                            <p>People everywhere are empowered to start campaigns, mobilize supporters, and work with Decision Makers to drive solutions.</p>

                        </div>
                        <Link to="/zakatcare/donate">
                            <button className="btn btn-sky">Start a campaign</button>
                        </Link>
                    </div>
                    <div className="todayRight">
                        <img src={startFrame} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default GetStarted;