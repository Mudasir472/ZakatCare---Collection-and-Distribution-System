import victory from "../../NewImages/victory.png"
import viral from "../../NewImages/viral.png"
import launch from "../../NewImages/launch.png"
import startFrame from "../../NewImages/startFrame.png"

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
                        <p>People and organizations can launch a campaign for free.</p>
                    </div>
                    <div className="startComp1">
                        <img src={viral} alt="" />
                        <h3>Viral</h3>
                        <p>Sharing with friends, family and supporters builds momentum.</p>
                    </div>
                    <div className="startComp1">
                        <img src={victory} alt="" />
                        <h3>Victory</h3>
                        <p>Decision make have the opportunity to respond your petition.</p>
                    </div>
                </div>
                <div className="startToday flex  items-center justify-evenly">
                    <div className="todayLeft flex flex-column items-start justify-between">
                        <div className="todaysHead">
                            <h2 className="mb-4">Start one today!</h2>
                            <p>People everywhere are empowered to start campaigns, mobilize supporters, and work with Decision Makers to drive solutions.</p>

                        </div>
                        <button className="btn btn-sky">Start a campaign</button>
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