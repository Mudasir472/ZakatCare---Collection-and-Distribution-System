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
            question: "What is Zakat, and why is it important?",
            answer: "Zakat is one of the Five Pillars of Islam and is a form of charity. It is mandatory for all eligible Muslims to donate a portion of their wealth to those in need, fostering economic equality and social welfare in the community."
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
        },
        {
            question: "How does ZakatCare help facilitate Zakat payments?",
            answer: "ZakatCare provides a streamlined platform where donors can select causes, calculate their Zakat, and directly contribute to impactful programs. We ensure transparency and effective distribution to qualified recipients."
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