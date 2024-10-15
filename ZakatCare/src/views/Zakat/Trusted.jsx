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
                    <TrustedBdy img={trusted1} head="Influence decision makers" desc="We help people reach the business and government leaders whose decisions impact their lives, giving them the power they deserve." />
                    <TrustedBdy img={trusted2} head="Expert campaign advice" desc="Our staff provide advice for mobilizing support, generating media interest and lobbying elected officials." />
                    <TrustedBdy img={trusted3} head="Better activism technology" desc="We have big ideas for the future, but we need your financial support to fuel new technological development." />
                </div>
                
            </div>
            <div className="signatures  flex items-center justify-between">
                <div className="signatureMain container flex items-center justify-between">
                    <div className="sign-1 flex flex-column items-center justify-center">
                        <h3>40,000</h3>
                        <p>Signature every hours</p>
                    </div>
                    <div className="sign-1 flex flex-column items-center justify-center">
                        <h3>40,000</h3>
                        <p>Signature every hours</p>
                    </div>
                    <div className="sign-1 flex flex-column items-center justify-center">
                        <h3>40,000</h3>
                        <p>Signature every hours</p>
                    </div>
                </div>
            </div>
        </div>
    </> );
}

export default Trusted;