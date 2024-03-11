import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
            imageUrl: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
            name: "Asani Amarasinghe",
            imageUrl: "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
            name: "Mohamed Nuwaf Azley",
            imageUrl: "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
            name: "Mohamed Faslan Rizni",
            imageUrl: "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
            name: "Mohamed Huzaifa Ameer",
            imageUrl: "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="px-4 py-16 mx-auto sm:py-24 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
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
            <div className="flex items-center justify-center space-x-4">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-center"
                    >
                        <img
                            className="w-32 h-32 rounded-full object-cover"
                            src={member.imageUrl}
                            alt="Person"
                        />
                        <p className="text-lg text-gray-800 font-bold mt-2">{member.name}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
