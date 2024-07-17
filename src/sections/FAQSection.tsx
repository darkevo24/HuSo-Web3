import Heading from "../components/Heading";
import QAComponent, { QAProps } from "../components/Q&A";

const questions: QAProps[] = [
    {
        question: "What is the Huso Web3 Mentorship Program?",
        answer: "The Huso Web3 Mentorship Program connects you with seasoned experts to accelerate your journey in the world of blockchain and decentralized technologies. It provides personalized guidance, tailored learning paths, and hands-on experience.",
    },
    {
        question: "Where are your company branches located?",
        answer: "We are a remote-first company with team members located across the globe. Our mentors are available to connect with you online, regardless of your location.",
    },
    {
        question: "What is the difference between CEX and DEX?",
        answer: "CEX is a centralised company like a bank. Where you can on and off ramp your fiat which is cash efficiently once kyc checks are done. DEX is a decentralised platform where no one is in control, you are in control. However you are liable to keep your passcodes and seed phrases if this is lost you will lose your funds. We teach all of this on our 1-1 course.",
    },
    {
        question: "How should I start?",
        answer: 'To get started with the Huso Web3 Mentorship Program, simply reach out to us via our <a href="https://t.me/HusoFdkr" style="color: lightblue; text-decoration: underline;" target="_blank" rel="noopener noreferrer">Telegram</a>. We\'ll schedule an initial consultation to understand your goals and match you with a mentor who best fits your needs.',
    },
    {
        question: "What is the duration of the mentorship program?",
        answer: "The duration of the mentorship program is typically 1 hour per session. However, the total duration of the program can vary depending on your specific needs and goals. Our mentors will work with you to create a customized plan that fits your schedule and objectives.",
    },
    {
        question: "What is the cost of the mentorship program?",
        answer: "The cost of the mentorship program is $1100 per session (1 hr per session).",
    },
    {
        question: "What is the refund policy?",
        answer: "We offer a 100% money-back guarantee if you are not satisfied with the mentorship program. Simply reach out to us within 30 days of your initial session, and we will issue a full refund.",
    },
    {
        question: "What is the payment method?",
        answer: "We accept payment via credit card and cryptocurrency. You can choose the payment method that is most convenient for you.",
    },
    {
        question: "What is the schedule for the mentorship program?",
        answer: "The schedule for the mentorship program is flexible and can be customized to fit your needs. Our mentors are available to connect with you at a time that works best for you, whether that's during the day, in the evening, or on weekends.",
    },
    {
        question: "Escape the financial matrix",
        answer: "The financial matrix is a system that keeps people trapped in debt and financial insecurity. By learning about blockchain and decentralized technologies, you can gain the knowledge and skills to escape the financial matrix and take control of your financial future.",
    },
];

export default function FAQSection() {
    return (
        <section className="w-full col gap-4">
            <Heading
                className="text-center"
                heading="FAQs"
                subHeading="Frequently Asked Questions"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 place-items-start mt-6">
                {questions.map((prop, i) => (
                    <QAComponent key={i} {...prop} />
                ))}
            </div>

            {/* <div className="flex flex-row flex-wrap mt-6">
                {questions.map((prop, i) => (
                    <div key={i} className="flex-[100%] md:flex-[50%]">
                        <QAComponent {...prop} />
                    </div>
                ))}
            </div> */}
        </section>
    );
}
