import React, { useState } from "react";
import dictionary from "../../assets/dictionary.jpg";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { IoIosArrowBack } from "react-icons/io";

const DictionaryPage = () => {
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

    const [isSinhala, setIsSinhala] = useState(false);

    const toggleLanguage = () => {
        setIsSinhala(!isSinhala);
    };

    return (
        <>
            <Link
                to="/vocabpanel"
                className="back-to-activities flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4"
            >
                <IoIosArrowBack />
            </Link>
            <animated.section
                style={{ ...fadeIn, backgroundColor: "#055B5C" }}
                className="text-gray-600 body-font top-10"
            >
                <div className="container mx-auto flex flex-col items-center lg:flex-row px-5 py-12 lg:py-24">
                    <animated.div style={slideIn} className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                        <img
                            className="object-cover object-center rounded-3xl w-full h-64 lg:h-auto"
                            alt="hero"
                            src={dictionary}
                        />
                    </animated.div>

                    <animated.div
                        style={{ ...slideIn, delay: 200 }}
                        className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-white py-10">
                            {isSinhala ? "FluentBridge ශබ්දකෝෂය" : "FluentBridge Dictionary"}
                        </h1>

                        <p className="mb-8 leading-relaxed text-white">
                            {isSinhala
                                ? "අපගේ භාවිතයට පහසු ශබ්ද කෝෂ යෙදුම සමඟ භාෂා ලෝකයට ඔබේ ගමන ආරම්භ කර ඔබේ වචන මාලාව පුළුල් කරන්න."
                                : "Start your journey into the world of language and expand your vocabulary with our easy-to-use dictionary application."}
                            <br />
                            <br />
                            <i>
                                {isSinhala
                                    ? "- වචන සොයන්න සහ සවිස්තරාත්මක අර්ථ දැක්වීම් ලබා ගන්න."
                                    : "- Search for words and get detailed definitions."}
                                <br />
                                {isSinhala
                                    ? "- වචන උච්චාරණයට සවන් දෙන්න."
                                    : "- Listen to the pronunciation of words."}
                                <br />
                                {isSinhala
                                    ? "- ඉක්මන් යොමු කිරීම සඳහා ඔබේ ප්රියතම වචන සුරකින්න."
                                    : "- Save your favorite words for quick reference."}
                                <br />
                                {isSinhala
                                    ? "- වචන සහ ඒවායේ අර්ථයන් පිළිබඳ පොහොසත් දත්ත සමුදායක් ගවේෂණය කරන්න."
                                    : "- Explore a rich database of words and their meanings."}
                                <br />
                            </i>
                        </p>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start">
                            <Link to="/dictionaryapi">
                                <button className="mb-4 lg:mb-0 lg:mr-4 inline-flex text-white bg-brown-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg">
                                    {isSinhala ? "ආරම්භ කරන්න" : "Start Using"}
                                </button>
                            </Link>
                            <button onClick={toggleLanguage} className="inline-flex items-center text-black bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded-2xl text-lg">
                                {isSinhala ? "English" : "සිංහල"}
                            </button>
                        </div>
                    </animated.div>
                </div>
            </animated.section>
        </>
    );
};

export default DictionaryPage;
