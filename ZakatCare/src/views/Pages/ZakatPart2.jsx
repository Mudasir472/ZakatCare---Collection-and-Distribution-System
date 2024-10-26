import { useState } from "react";
import "./zakat.css"
import angleup from "../../assets/images/angleUp.svg"
import angledown from "../../assets/images/angleDown.svg"
function ZakatPart2() {
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
        }
        // Add more questions and answers as needed
    ];
    return (<>
        <div className="zakatPart-2 flex flex-column items-center justify-center">
            <div className="zakatPart2Head flex justify-center items-center">
                <h3 className="mb-5">General question</h3>
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

export default ZakatPart2;