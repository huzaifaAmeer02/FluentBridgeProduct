// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FiMail, FiGithub, FiTwitter } from 'react-icons/fi';

export const TeamPage = () => {
    const teamMembers = [
        {
            name: "Mentor",
            role: "Mentor",
            imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            description: "Vincent Van Gogh’s most popular painting, The Starry Night."
        },
        {
            name: "Muhammedhu Ishrath",
            role: "Team Leader",
            imageUrl: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Amet I love liquorice jujubes pudding croissant I love pudding."
        },
        {
            name: "Asani Amarasinghe",
            role: "Developer",
            imageUrl: "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit."
        },
        {
            name: "Nuwaf Azley",
            role: "Developer",
            imageUrl: "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank."
        },
        {
            name: "Faslan Rizni",
            role: "Developer",
            imageUrl: "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank."
        },
        {
            name: "Mohamed Huzaifa Ameer",
            role: "Developer",
            imageUrl: "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank."
        }
    ];

    return (
        <div className="px-4 py-16 mx-auto sm:py-24 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
            <div className="mx-auto mb-10 lg:max-w-xl sm:text-center border-2 p-10 rounded-2xl">
                <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-gray-100 uppercase rounded-full bg-teal-accent-400">
                    FluentBridge sri Lanka Team
                </p>
                <p className="text-base text-gray-100 md:text-lg px-4 md:px-0">
                    Our team consists of second-year undergraduate students, each bringing unique perspectives
                    and skills to the table. Despite being early in our academic journey, we're passionate, driven,
                    and committed to learning and contributing to meaningful projects.
                </p>
            </div>
            <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
                {teamMembers.map((member, index) => (
                    <div key={index} className="grid sm:grid-cols-3 bg-gray-200 p-10 m-6 rounded-3xl">
                        <div className="relative w-full h-40 max-h-full rounded shadow sm:h-auto">
                            <img
                                className="absolute object-cover w-full h-full rounded"
                                src={member.imageUrl}
                                alt="Person"
                            />
                        </div>
                        <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                            <p className="text-lg text-gray-800 font-bold">{member.name}</p>
                            <p className="mb-4 text-xs text-gray-600">{member.role}</p>
                            <p className="mb-4 text-sm tracking-wide text-gray-700">{member.description}</p>
                            <div className="flex items-center justify-center space-x-3 py-3">
                                <a
                                    href="mailto:youremail@example.com"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:bg-gray-100 rounded-full p-2"
                                >
                                    <FiMail className="h-5" />
                                </a>
                                <a
                                    href="https://github.com/yourusername"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:bg-gray-100 rounded-full p-2"
                                >
                                    <FiGithub className="h-5" />
                                </a>
                                <a
                                    href="https://twitter.com/yourusername"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:bg-gray-100 rounded-full p-2"
                                >
                                    <FiTwitter className="h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamPage;
