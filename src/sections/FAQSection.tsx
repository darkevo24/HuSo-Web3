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
        question: "What is Metamask?",
        answer: "Metamask is a cryptocurrency wallet that allows users to interact with the Ethereum blockchain. It can be used to store and manage account keys, broadcast transactions, send and receive Ethereum-based cryptocurrencies and tokens, and securely connect to decentralized applications through a web browser.",
    },
    {
        question: "How can I buy, sell, and mint NFTs?",
        answer: "To buy, sell, and mint NFTs, you need a cryptocurrency wallet like Metamask. After setting up your wallet, you can use platforms like OpenSea, Rarible, or Mintable to create, list, and trade your NFTs. Our mentorship program also provides guidance on navigating these platforms effectively.",
    },
    {
        question: "What's the best-selling NFT at the moment?",
        answer: "The best-selling NFT varies frequently due to the dynamic nature of the market. Popular categories include digital art, collectibles, virtual real estate, and gaming assets. For current trends and top-selling NFTs, we recommend checking platforms like OpenSea or CryptoSlam.",
    },
    {
        question: "What is the service fee?",
        answer: "The service fee for our mentorship program varies based on the duration and intensity of the sessions. Please contact us for detailed pricing and package options.",
    },
    {
        question: "How should I start?",
        answer: "To get started with the Huso Web3 Mentorship Program, simply reach out to us via our contact form or email. We'll schedule an initial consultation to understand your goals and match you with a mentor who best fits your needs.",
    },
    {
        question: "What is the NFT-X Space?",
        answer: "NFT-X Space is a newer way of connecting things that seamlessly integrates with the network.",
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
