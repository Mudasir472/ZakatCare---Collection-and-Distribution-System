import { useState } from "react";
import "./zakat.css"
import angleup from "../../assets/images/angleUp.svg"
import angledown from "../../assets/images/angleDown.svg"
function ZakatPart4() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const faqData = [
        {
            question: "How does ZakatCare ensure transparency in fund allocation?",
            answer: "ZakatCare partners with verified organizations and provides regular updates on fund utilization. Donors can track their contributions and see impact reports to know how their funds are being used."
        },
        {
            question: "Can I choose where my Zakat goes?",
            answer: "Yes, ZakatCare allows donors to select specific categories such as education, feeding programs, or relief funds. Your contributions will be directed to your chosen category."
        },
        {
            question: "What percentage of donations goes directly to the causes?",
            answer: " A high percentage of donations is allocated directly to the selected causes. ZakatCare strives to minimize administrative costs and maximizes the amount reaching beneficiaries."
        },

    ];
    return (<>
        <div className="zakatPart-2 flex flex-column items-center justify-center">
            <div className="zakatPart2Head flex justify-center items-center">
                <h3 className="mb-5">Allocation of Zakat Funds</h3>
            </div>
            {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question mb-2" onClick={() => toggleAccordion(index)}>
                        {activeIndex === index ? <img src={angleup} alt="" /> : <img src={angledown} alt="" />}{item.question}
                    </div>
                    <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                        {item.answer}
                    </div>
                </div>
            ))}
        </div>
    </>);
}

export default ZakatPart4;