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
                    subHeading="Discover more about cryptocurrency and web3 through our 1-1 mentorship program."
                />
                <span className="text-app_gray/80 leading-8 text-xl">
                    Welcome to our exclusive 1-1 mentorship program all things to do with
                    the cryptocurrency ecosystem. We don’t sell courses. We offer 1-1, 60
                    minute zoom meetings with one of our experts, with unlimited lifetime
                    support. Contact us through the telegram link to get started.
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
                    src="/assets/web3-london.jpg"
                    alt="web3-london"
                    className="object-contain max-w-[80%] max-h-[90%] mx-auto rounded-lg"
                />
            </div>
        </section>
    );
}
