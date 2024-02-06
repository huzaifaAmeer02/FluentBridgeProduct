import React from 'react';
import { FiMail, FiGithub, FiTwitter } from 'react-icons/fi';

export const TeamPage = () => {
    // Array containing data for each team member
    const teamMembers = [
        {
            name: "Oliver Aguilerra",
            role: "Product Manager",
            imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            description: "Vincent Van Gogh’s most popular painting, The Starry Night."
        },
        {
            name: "Marta Clermont",
            role: "Design Team Lead",
            imageUrl: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Amet I love liquorice jujubes pudding croissant I love pudding."
        },
        {
            name: "Alice Melbourne",
            role: "Human Resources",
            imageUrl: "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit."
        },
        {
            name: "John Doe",
            role: "Good guy",
            imageUrl: "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank."
        },
        {
            name: "John Doe",
            role: "Good guy",
            imageUrl: "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank."
        },
        {
            name: "John Doe",
            role: "Good guy",
            imageUrl: "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank."
        }
    ];

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-gray-100 uppercase rounded-full bg-teal-accent-400">
                    Know Our Team
                </p>
                <p className="text-base text-white md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium.
                </p>
            </div>
            <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
                {teamMembers.map((member, index) => (
                    <div key={index} className="grid sm:grid-cols-3 bg-gray-300 p-10 m-6 rounded-3xl">
                        <div className="relative w-full h-40 max-h-full rounded shadow sm:h-auto">
                            <img
                                className="absolute object-cover w-full h-full rounded"
                                src={member.imageUrl}
                                alt="Person"
                            />
                        </div>
                        <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                            <p className="text-lg text-gray-500 font-bold">{member.name}</p>
                            <p className="mb-4 text-xs text-gray-600">{member.role}</p>
                            <p className="mb-4 text-sm tracking-wide text-gray-800">{member.description}</p>
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
