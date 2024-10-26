import "./zakat.css"
import img from "../../assets/images/zakatpart1.svg"
function ZakatPart1() {
    return (<>
        <div className="zakatPart1 flex items-center justify-center">
            <div className="container zakat-part1-left flex flex-column items-center justify-center">
                <h4 className="mb-5">The answers for your question</h4>
                <p className="mb-5">Here is a collection of frequently asked questions from users</p>
                <div style={{ width: '60%' }} className="items-start flex">
                    <button>Ask a question</button>
                </div>
            </div>
            <div className="zakat-part1-right flex items-center justify-center">
                <img src={img} alt="" />
            </div>
        </div>
    </>);
}
export default ZakatPart1;