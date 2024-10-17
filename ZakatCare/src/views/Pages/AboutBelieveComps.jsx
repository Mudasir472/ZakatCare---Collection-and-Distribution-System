import report from "../../NewImages/report.png"
import "./about.css"

function AboutBelieveComps({head ,desc,img}) {
    return (<>
        <div className="AboutBelieveComps flex flex-column items-center">
            <div className="AboutBelieveCompsMain flex flex-column items-center justify-evenly">
                <img src={img} alt="" />
                <h4>{head}</h4>
                <p>{desc}</p>
            </div>
        </div>
    </>);
}

export default AboutBelieveComps;