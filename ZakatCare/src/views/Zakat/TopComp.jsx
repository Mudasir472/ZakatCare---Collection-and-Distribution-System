import topimg from "../../NewImages/topImg.png"
import rectangle from "../../NewImages/Rectangle56.png"
import "./zakat.css"
function TopComp() {
    return (<>
        <div className="top-comp">
            <div className="top-main">
                <div className="top-head flex flex-column items-center justify-center">
                    <h2>Make an impact to the world.</h2>
                    <p>We’re offer complete solution to launch your social movements.</p>
                </div>
                <div className="Images">
                    <div className="img1 flex items-center justify-center">
                        <img src={topimg} alt="" />
                    </div>
                    <div className="img2">
                        <img src={rectangle} alt="" />
                    </div>
                </div>

            </div>
        </div>
    </>);
}

export default TopComp;