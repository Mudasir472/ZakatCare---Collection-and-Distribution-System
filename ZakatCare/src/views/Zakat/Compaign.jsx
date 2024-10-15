import logo1 from "../../NewImages/compaign-logo1.png"
import logo2 from "../../NewImages/compaign-logo2.png"
import "./zakat.css"
function Campaign() {
    return (<>
        <div className="compaign">
            <div className="StartcompaignMain flex items-center justify-center container">
                <div className="compaign-l ">
                    <div className="compaign-bdy  flex flex-column items-center justify-center">
                        <img className="mb-3" src={logo1} alt="" />
                        <h4>Activists</h4>
                        <p className="mb-4">We help you easy start your campaign, collect donations, signatures. You can manage your campaign updates and your supporters on dashboard.</p>
                        <button  className="btn btn-light">Start a campaign</button>
                    </div>
                </div>
                <div className="compaign-right">
                    <div className="compaign-bdy flex flex-column items-center justify-center">
                        <img className="mb-3" src={logo2} alt="" />
                        <h4>Supporters</h4>
                        <p className="mb-4">Help the campaigns achieve their goals. Make the world better by signing, sharing and donating to spread good values to the community.</p>
                        <button className="btn btn-sky">Sign the petition</button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Campaign;