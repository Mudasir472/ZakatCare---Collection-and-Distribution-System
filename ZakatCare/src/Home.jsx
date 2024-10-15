
import ComunityStory from "./views/communityStroy/comunityStory";
import MainSlider from "./views/MainSlider";
import Programs from "./views/Zakat/Programs";
import SaveChildren from "./views/Zakat/SaveChildren";
import Transparency from "./views/Zakat/Transparency";

function Home() {
    return (<>
        <MainSlider />
        <Programs />
        <SaveChildren />
        <Transparency />
        <ComunityStory />

    </>);
}

export default Home;