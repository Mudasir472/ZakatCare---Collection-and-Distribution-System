import TransComps from "./TransComps";
import logo1 from "../../Images/logo-1.png"
import logo2 from "../../Images/logo-2.png"
import logo3 from "../../Images/logo-3.png"
import logo4 from "../../Images/logo-4.png"
import logo5 from "../../Images/logo-5.png"
import logo6 from "../../Images/logo-6.png"
import "./zakat.css"
function Transparency() {
    return (<>
        <div className="transparency container">
            <div className="transMain flex flex-column items-center justify-evenly">
                <div className="transHead flex flex-column items-center justify-evenly">
                    <p style={{ fontFamily: "cursive" }} className="font-medium text-2xl	">Transparency, Accountability, Effectiveness.</p>
                    <p style={{ fontFamily: "revert" }} className=" text-xl	">Nonsectarian. Apolitical. Nongovernmental.</p>
                </div>
                <div className="transComps w-full flex items-center justify-evenly">
                    <TransComps head={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>} title="Top Rating" desc="7 Best Charities" />
                    <TransComps head="100%" title="Efficiency Rating" desc="Top Charities" />
                    <TransComps head="Top 10" title="Most Innovative" desc="Non-Profits" />
                    <TransComps head="0%" title="Zakat" desc="Spent on Fundraising" />
                </div>
                <div className="transImages container flex items-center justify-center">
                        <div className="imgs">
                            <img src={logo1} alt="" />
                        </div>
                        <div className="imgs">
                            <img src={logo2} alt="" />
                        </div>
                        <div className="imgs">
                            <img src={logo3} alt="" />
                        </div>
                        <div className="imgs">
                            <img src={logo4} alt="" />
                        </div>
                        <div className="imgs">
                            <img src={logo5} alt="" />
                        </div>
                        <div className="imgs">
                            <img src={logo6} alt="" />
                        </div>
                </div>
            </div>
        </div>
    </>);
}

export default Transparency;