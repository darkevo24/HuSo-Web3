import { useState } from "react";

const teamMembers = [
    {
        name: "Huso",
        role: "MD",
        image: "/assets/huseyin.jpeg",
        description:
            "Huso is the visionary behind our company with over 5 years working within different positions in banks and within the blockchain ecosystem.",
    },
    {
        name: "Vish",
        role: "Advisor",
        image: "/assets/vish.jpeg",
        description:
            "Vishaal is a seasoned professional with a diverse background in entrepreneurship and corporate roles, including Consulting at Accenture and PwC, and leadership positions such as COO, CMO, and CPO. He has experience in Esports, AI, Blockchain, and Marketing.",
    },
    {
        name: "Tim",
        role: "Blockchain Developer",
        image: "/assets/timotius.png",
        description:
            "Tim is our Blockchain developer with a passion for innovation and cutting-edge technology. He has more than 4 years experience in blockchain development and has worked on multiple projects in the blockchain space.",
    },
    {
        name: "Stan",
        role: "CMO",
        image: `/assets/CMO.png`,
        description:
            "I'm Stan, a seasoned expert in marketing and branding with over 6 years of experience in e-commerce. I inject a wide range of marketing strategies to help businesses grow and succeed.",
    },

    // Add more team members as needed
];

export default function MeetTheTeam() {
    return (
        <section className="relative w-full min-h-[400px] row items-start justify-around gap-4 py-10">
            <div className="bg-gradient-to-bl from-sky-700 via-purple-700 to-blue-800 rounded-3xl p-6 w-full shadow-lg">
                <h2 className="font-redzone text-6xl text-center text-white mb-8">
                    Meet the Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="col items-center bg-white p-4 rounded-lg shadow-md"
                        >
                            <img
                                className="h-32 rounded-full object-contain"
                                src={member.image}
                                alt={`${member.name}`}
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-bold text-black">
                                    {member.name}
                                </h3>
                                <h4 className="text-gray-500">{member.role}</h4>
                                <p className="text-gray-700 mt-2">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
