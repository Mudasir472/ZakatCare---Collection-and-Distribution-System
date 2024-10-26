import ZakatPart1 from "./ZakatPart1";
import ZakatPart2 from "./ZakatPart2";
import ZakatPart3 from "./ZakatPart3";
import ZakatPart4 from "./ZakatPart4";
import ZakatPart5 from "./ZakatPart5";

export default function Zakat() {
    return (<>
        <div className="zakat-page">
            <div className="zakat-main">
                <ZakatPart1 />
                <ZakatPart2 />
                <ZakatPart3 />
                <ZakatPart4 />
                <ZakatPart5 />
            </div>
        </div>
    </>)
}