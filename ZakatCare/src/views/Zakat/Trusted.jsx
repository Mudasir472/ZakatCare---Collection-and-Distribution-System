import TrustedBdy from "./TrustedBdy";
import "./zakat.css"
import trusted1 from "../../NewImages/trusted1.png"
import trusted2 from "../../NewImages/trusted2.png"
import trusted3 from "../../NewImages/trusted3.png"

function Trusted() {
    return ( <>
        <div className="trusted">
            <div className="trustedMain container flex flex-column items-center justify-evenly">
                <div className="trustedHead">
                    <h3>The most trusted petition platform</h3>
                    <p>Here are a few reasons why you should choose Campoal</p>
                </div>
                <div className="trustedBdy flex items-center justify-between">
                    <TrustedBdy img={trusted1} head="Influence decision makers" desc="Empower communities to reach organizations and leaders who can make a difference in their lives, driving real impact" />
                    <TrustedBdy img={trusted2} head="Expert campaign advice" desc="Our team offers guidance on rallying support, raising awareness, and connecting with the right people to maximize your campaign's success" />
                    <TrustedBdy img={trusted3} head="Better activism technology" desc="We’re committed to developing cutting-edge features for better activism, and your support helps us continue to innovate" />
                </div>
                
            </div>
            <div className="signatures  flex items-center justify-between">
                <div className="signatureMain container flex items-center justify-between">
                    <div className="sign-1 flex flex-column items-center justify-center">
                        <h3>40</h3>
                        <p>Signature every hours</p>
                    </div>
                    <div className="sign-1 flex flex-column items-center justify-center">
                        <h3>103</h3>
                        <p>Supporters joining campaigns daily</p>
                    </div>
                    <div className="sign-1 flex flex-column items-center justify-center">
                        <h3>93</h3>
                        <p>Commitments to change recorded every hour</p>
                    </div>
                </div>
            </div>
        </div>
    </> );
}

export default Trusted;