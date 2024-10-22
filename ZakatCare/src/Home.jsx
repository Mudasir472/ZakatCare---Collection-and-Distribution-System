
import ComunityStory from "./views/communityStroy/ComunityStory";
import Campaign from "./views/Zakat/Compaign";
import GetStarted from "./views/Zakat/GetStarted";
import TopComp from "./views/Zakat/TopComp";
import Trusted from "./views/Zakat/Trusted";
import ZakatCompaign from "./views/Zakat/ZakatCompaign";

function Home() {
    return (<>
        <div className="Home">
            <TopComp />
            <ZakatCompaign />
            <ComunityStory />
            <Campaign />
            <Trusted />
            <GetStarted />
        </div>
        {/* <Programs/>
        <SaveChildren/>
        <Transparency/>
         */}

    </>);
}

export default Home;