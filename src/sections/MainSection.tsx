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
                    Only by uploading the layers, get ready to sell your collection.
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
            <div className="relative md:w-1/2 col gap-4 center">
                <img
                    src="/assets/etherum.png"
                    alt="etherum_logo"
                    className="w-[86%] h-[70%] object-contain"
                />
            </div>
        </section>
    );
}
