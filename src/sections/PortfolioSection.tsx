import React from "react";

export default function PortfolioSection() {
    return (
        <div className="flex items-center justify-center space-y-8 flex-col">
            <img
                className="lg:w-3/12 w-full rounded-lg"
                src="/assets/photo3.jpg"
                alt="photo3"
            />
            <img
                className="lg:w-3/12 w-full rounded-lg"
                src="/assets/photo4.jpg"
                alt="photo4"
            />
        </div>
    );
}
