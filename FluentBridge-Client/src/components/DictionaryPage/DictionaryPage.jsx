import React, { useState } from "react";
import dictionary2 from "../../assets/dictionary2.png";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { IoIosArrowBack } from "react-icons/io";
import { FiGlobe } from "react-icons/fi";

const DictionaryPage = () => {
    const [language, setLanguage] = useState("en");

    // Define entrance animations using react-spring
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 800 },
    });

    const slideIn = useSpring({
        transform: "translateY(0)",
        from: { transform: "translateY(100px)" },
        config: { duration: 1000 },
    });

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "si" : "en");
    };

    // Define content for both English and Sinhala
    const content = {
        en: {
            title: "FluentBridge Dictionary",
            description: (
                <>
                    Start your journey into the world of language and expand your
                    vocabulary with our easy-to-use dictionary application.
                    <br />
                    <br />
                    <i>
                        - Search for words and get detailed definitions.
                        <br />
                        - Listen to the pronunciation of words.
                        <br />
                        - Save your favorite words for quick reference.
                        <br />
                        - Explore a rich database of words and their meanings.
                        <br />
                    </i>
                </>
            ),
            buttonText: "Start Using",
        },
        si: {
            title: "FluentBridge ශබ්දකෝෂය",
            description: (
                <>
                    අපගේ භාවිතයට පහසු ශබ්ද කෝෂ යෙදුම සමඟ භාෂා ලෝකයට ඔබේ ගමන ආරම්භ කර ඔබේ වචන මාලාව පුළුල් කරන්න.
                    <br />
                    <br />
                    <i>
                        - වචන සොයන්න සහ සවිස්තරාත්මක අර්ථ දැක්වීම් ලබා ගන්න.
                        <br />
                        - වචන උච්චාරණයට සවන් දෙන්න.
                        <br />
                        - ඉක්මන් යොමු කිරීම සඳහා ඔබේ ප්‍රියතම වචන සුරකින්න.
                        <br />
                        - වචන සහ ඒවායේ අර්ථයන් පිළිබඳ පොහොසත් දත්ත සමුදායක් ගවේෂණය කරන්න.
                        <br />
                    </i>
                </>
            ),
            buttonText: "භාවිතා කිරීම ආරම්භ කරන්න",
        },
    };

    return (
        <>
            <Link
                to="/vocabpanel"
                className="back-to-activities flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4"
            >
                <IoIosArrowBack />
            </Link>
            <animated.section style={{ ...fadeIn, backgroundImage: `url(${dictionary2})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', paddingTop: '2rem', paddingBottom: '2rem', backgroundColor: '#055B5C' }} className="text-gray-600 body-font flex lg:flex-row-reverse">
                <animated.div style={{ ...slideIn, delay: 200 }}  className="lg:w-2/5 bg-gray-700 text-white pt-9 p-8 h-auto rounded-lg lg:mr-6 mt-8">
                    <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-gray-400">
                        {content[language].title}
                    </h1>

                    <p className="mb-8 leading-relaxed">
                        {content[language].description}
                    </p>

                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start">
                        <Link to="/dictionaryapi">
                            <button className="mb-4 lg:mb-0 lg:mr-4 inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-brown-900 rounded text-lg">
                                {content[language].buttonText}
                            </button>
                        </Link>
                        <button onClick={toggleLanguage} className="flex items-center text-white mt-2">
                            <FiGlobe className="mr-2" />
                            {language === "en" ? "සිංහල" : "English"}
                        </button>
                    </div>
                </animated.div>
            </animated.section>
        </>
    );
};

export default DictionaryPage;
