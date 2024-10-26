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
            question: "What is Zakat?",
            answer: "Zakat is a form of almsgiving in Islam, considered as a religious obligation for Muslims. It involves giving a portion of one's wealth to the needy."
        },
        {
            question: "How much Zakat should I give?",
            answer: "The standard rate for Zakat is 2.5% of an individual's total savings and wealth above the Nisab threshold."
        },
        {
            question: "Who is eligible to receive Zakat?",
            answer: "Zakat is given to individuals in need, such as the poor, the needy, those in debt, and for other charitable causes as specified in Islamic law."
        },
        {
            question: "How can I calculate my Zakat?",
            answer: "You can calculate your Zakat using our Zakat Calculator, which takes into account your savings, investments, and other assets."
        }]
    return (<>
        <div className="zakatPart-3 flex items-center justify-center">
            <div className="zakat-3-left flex items-center justify-center">
                <img src={img} alt="" />
            </div>
            <div className="zakat-3-right">
                <div className="zakatPart-2 flex flex-column items-start justify-center">
                    <div className="zakatPart3Head flex justify-center items-start">
                        <h3 className="mb-4">General question</h3>
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