import React,{useState} from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiTwitter } from 'react-icons/fi';

export const TeamPage = () => {
    const [isSinhala, setIsSinhala] = useState(false); // State to track language toggle

    // Static content in English
    const englishContent = {
        heading: "FluentBridge - Sri Lanka Crew",
        intro: "Our team consists of second-year undergraduate students, each bringing unique perspectives and skills to the table. Despite being early in our academic journey, we're passionate, driven, and committed to learning and contributing to meaningful projects."
    };

    // Static content in Sinhala
    const sinhalaContent = {
        heading: "FluentBridge - Sri Lanka කණ්ඩායම",
        intro: "අපගේ කණ්ඩායම දෙවන වසරේ උපාධි අපේක්ෂකයින්ගෙන් සමන්විත වන අතර, ඒ සෑම එකක්ම අද්විතීය ඉදිරිදර්ශන සහ කුසලතා මේසයට ගෙන එයි. අපගේ අධ්‍යයන ගමනේ මුල් අවධියේ වුවද, අපි උද්‍යෝගිමත්, පෙළඹවීමක් සහ අර්ථවත් ව්‍යාපෘති ඉගෙනීමට සහ දායක වීමට කැපවී සිටිමු."
    };

    // Function to toggle between English and Sinhala
    const toggleLanguage = () => {
        setIsSinhala(!isSinhala);
    };

    // Use the selected language content
    const content = isSinhala ? sinhalaContent : englishContent;
    const teamMembers = [
        {
            name: "Muhammedhu Ishrath",
            role: "Team Leader",
            imageUrl: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Amet I love liquorice jujubes pudding croissant I love pudding.",
            email: "ishrath@example.com",
            github: "https://github.com/ishrath",
            twitter: "https://twitter.com/ishrath"
        },
        {
            name: "Asani Amarasinghe",
            role: "Developer",
            imageUrl: "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.",
            email: "asani@example.com",
            github: "https://github.com/asani",
            twitter: "https://twitter.com/asani"
        },
        {
            name: "Nuwaf Azley",
            role: "Developer",
            imageUrl: "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.",
            email: "nuwaf@example.com",
            github: "https://github.com/nuwaf",
            twitter: "https://twitter.com/nuwaf"
        },
        {
            name: "Faslan Rizni",
            role: "Developer",
            imageUrl: "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.",
            email: "faslan@example.com",
            github: "https://github.com/faslan",
            twitter: "https://twitter.com/faslan"
        },
        {
            name: "Mohamed Huzaifa Ameer",
            role: "Developer",
            imageUrl: "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.",
            email: "huzaifa@example.com",
            github: "https://github.com/huzaifa",
            twitter: "https://twitter.com/huzaifa"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="px-4 py-16 mx-auto sm:py-24 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28"
        >
            <div className="bg-gray-600 mx-auto mb-10 lg:max-w-xl sm:text-center p-10 rounded-2xl">
                <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-gray-100 uppercase rounded-full bg-teal-accent-400">
                    {content.heading}
                </p>
                <p className="text-base text-gray-100 md:text-lg px-4 md:px-0">
                    {content.intro}
                </p>
                <button onClick={toggleLanguage} className="mt-4 bg-gray-800 text-gray-100 px-4 py-2 rounded-md hover:bg-teal-accent-500">
                    {isSinhala ? "Switch to English" : "සිංහලට මාරු වෙන්න"}
                </button>
            </div>
            <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="grid sm:grid-cols-3 bg-gray-200 p-10 m-6 rounded-3xl"
                    >
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
                                    href={`mailto:${member.email}`}
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:bg-gray-100 rounded-full p-2"
                                >
                                    <FiMail className="h-5" />
                                </a>
                                <a
                                    href={member.github}
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:bg-gray-100 rounded-full p-2"
                                >
                                    <FiGithub className="h-5" />
                                </a>
                                <a
                                    href={member.twitter}
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:bg-gray-100 rounded-full p-2"
                                >
                                    <FiTwitter className="h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
