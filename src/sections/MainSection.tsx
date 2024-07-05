import Button from "../components/Button";

export default function MainSection() {
    return (
        <section className="w-full flex flex-col md:flex-row center gap-8">
            <div className="text md:w-1/2 col gap-8">
                <h1 className="md:text-5xl text-3xl font-redzone">
                    Discover absolutely everything in the cryptocurrency and blockchain
                    ecosystem
                </h1>
                <span className="text-app_gray leading-8 text-xl">
                    We give you all the knowledge you need in the cryptocurrency space,
                    knowledge = financial gain.
                </span>
                <div className="row gap-4">
                    <Button
                        onClick={() => {
                            window.location.assign("https://t.me/HusoFdkr");
                        }}
                    >
                        Get Started
                    </Button>
                    <Button
                        onClick={() => {
                            window.location.assign("https://t.me/HusoFdkr");
                        }}
                        outline={true}
                    >
                        Join Telegram
                    </Button>
                </div>
            </div>
            <div className="relative md:w-1/2 col gap-4 center text-center text-sm">
                <img
                    src="/assets/photo1.jpg"
                    alt="photo_1"
                    className="w-[86%] h-[70%] object-contain rounded-lg"
                />
                <div className=" hidden lg:inline-block whitespace-nowrap overflow-hidden border-r-2 border-white animate-typing">
                    <p className="text-white">
                        Numbers don’t lie. We walk the talk not talk the talk.
                    </p>
                </div>
                <div className="hidden lg:inline-block whitespace-nowrap overflow-hidden border-r-2 border-white animate-typing">
                    <p className="text-white">
                        What separates HUSO is we share loses but of course our Wins
                        outpace the loses.
                    </p>
                </div>
                <div className="hidden lg:inline-block whitespace-nowrap overflow-hidden border-r-2 border-white animate-typing">
                    <p className="text-white">
                        In the market others got to eat also. Player vs Player.
                    </p>
                </div>
                <p className="lg:hidden ">
                    Number don’t lie. We walk the talk, not talk the talk. What separates
                    HUSO is we share loses but of course our Wins outpace the loses. In
                    the market others got to eat also. Player vs Player.
                </p>
                <img
                    src="/assets/photo2.jpg"
                    alt="photo_2"
                    className="w-[86%] h-[70%] object-contain rounded-lg"
                />
            </div>
        </section>
    );
}
