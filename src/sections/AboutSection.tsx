import Heading from "../components/Heading";
import { SectionProps } from "../types";

const tags = [
    "Wide range of platforms",
    "World class artists",
    "Any type of assets",
    "Fast payments",
];

export default function AboutSection() {
    return (
        <section className="w-full flex flex-col-reverse md:flex-row-reverse items-center">
            <div className="text md:w-1/2 flex flex-col gap-4 my-2">
                <Heading
                    className="max-w-[90%]"
                    heading="About Us"
                    subHeading="Discover more about Web3 and blockchain technology through personalized mentorship"
                />
                <span className="text-app_gray/80 leading-8 text-xl">
                    Welcome to our exclusive 1-on-1 Web3 Mentorship Program, where we
                    connect you with seasoned experts to accelerate your journey in the
                    rapidly evolving world of blockchain and decentralized technologies.
                </span>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <button
                            key={i}
                            className="rounded-full px-4 py-3 bg-white/20 hover:bg-white/30"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
            <div className="md:w-1/2 my-2 h-full">
                <img
                    src="/assets/robo.png"
                    alt="robo"
                    className="object-contain max-w-[80%] max-h-[90%] mx-auto"
                />
            </div>
        </section>
    );
}
