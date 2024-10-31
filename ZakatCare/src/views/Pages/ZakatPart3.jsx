import img from "../../assets/images/zakatPart3.svg"
import { useState } from "react";
import angleup from "../../assets/images/angleUp.svg"
import angledown from "../../assets/images/angleDown.svg"
function ZakatPart3() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const faqData = [
        {
            question: "How can I make a donation through ZakatCare?",
            answer: "Donations can be made by selecting a cause on the ZakatCare platform, filling out the donation form, and completing payment. You’ll receive a confirmation email along with your donation details."
        },
        {
            question: "Can I donate anonymously?",
            answer: "Yes, ZakatCare allows donors the option to remain anonymous if they prefer. During the donation process, simply select the anonymous donation option."
        },
        {
            question: "Is there a minimum amount required for donations?",
            answer: "There is no minimum amount for general donations. However, for Zakat contributions, it’s advised to calculate the amount based on your assets, which ZakatCare’s calculator can help with."
        }]
    return (<>
        <div className="zakatPart-3 flex items-center justify-center">
            <div className="zakat-3-left flex items-center justify-center">
                <img src={img} alt="" />
            </div>
            <div className="zakat-3-right">
                <div className="zakatPart-2 flex flex-column items-start justify-center">
                    <div className="zakatPart3Head flex justify-center items-start">
                        <h3 className="mb-4">Donation Process</h3>
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
            </div>
        </div>
    </>);
}

export default ZakatPart3;