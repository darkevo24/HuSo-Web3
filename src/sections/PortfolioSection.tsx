import React from "react";

export default function PortfolioSection() {
    return (
        <div className="flex items-center justify-center lg:space-x-4 lg;space-y-0 space-y-4 flex-col lg:flex-row">
            <img
                className="lg:w-3/12 w-10/12 w-full rounded-lg"
                src="/assets/photo3.jpg"
                alt="photo3"
            />
            <img
                className="lg:w-3/12 w-10/12 w-full rounded-lg"
                src="/assets/photo4.jpg"
                alt="photo4"
            />
        </div>
    );
}
