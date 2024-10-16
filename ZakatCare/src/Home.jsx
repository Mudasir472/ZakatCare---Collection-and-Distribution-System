
import ComunityStory from "./views/communityStroy/comunityStory";
import MainSlider from "./views/MainSlider";
import Campaign from "./views/Zakat/Compaign";
import GetStarted from "./views/Zakat/GetStarted";
import Programs from "./views/Zakat/Programs";
import SaveChildren from "./views/Zakat/SaveChildren";
import TopComp from "./views/Zakat/TopComp";
import Transparency from "./views/Zakat/Transparency";
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
        {/* <MainSlider/> */}
        {/* <Programs/>
        <SaveChildren/>
        <Transparency/>
        <ComunityStory/> */}

    </>);
}

export default Home;