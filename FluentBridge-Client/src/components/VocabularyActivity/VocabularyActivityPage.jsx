import React, { useState } from "react";
import { Link } from "react-router-dom";
import vocabActivity from "../../assets/vocabActivity.png";
import crown from "../../assets/logofluent.png";
import { IoIosArrowBack } from 'react-icons/io';
import { FiGlobe } from 'react-icons/fi';

const VocabularyActivityPage = () => {
    const [language, setLanguage] = useState("en");

    const translations = {
        en: {
            vocabularyGame: "FluentBridge Vocabulary Game",
            unlockPower: "Unlock the power of words and master your vocabulary with our immersive learning experience.",
            instructions: "Instructions",
            startOfGame: "At the start of the game, a random five-letter word is selected as the hidden word.",
            playerGuess: "The player enters their guess for the hidden word using the input field provided.",
            afterGuess: "After each guess, the player receives feedback in the form of colored circles:",
            greenCircle: "Green circle: The letter is correct and in the right position.",
            yellowCircle: "Yellow circle: The letter is correct but in the wrong position.",
            grayCircle: "Gray circle: Indicates that a letter is not in the word.",
            feedback: "Based on the feedback received, the player adjusts their guess and continues guessing until they either correctly guess the word or exhaust their allowed attempts.",
            startWordle: "Start the Wordle",
            allRightsReserved: "© 2024 Fluent Bridge. All rights reserved."
        },
        si: {
            vocabularyGame: "FluentBridge වචන මාලා ක්‍රීඩාව",
            unlockPower: "අපගේ ගිලී ගිය ඉගෙනීමේ අත්දැකීම සමඟ වචනවල බලය අගුළු ඇර ඔබේ වචන මාලාව ප්‍රගුණ කරන්න.",
            instructions: "උපදෙස්",
            startOfGame: "ක්‍රීඩාව ආරම්භයේදී, සැඟවුණු වචනය ලෙස අහඹු ලෙස අකුරු පහක වචනයක් තෝරා ගනු ලැබේ.",
            playerGuess: "සපයා ඇති ආදාන ක්ෂේත්‍රය භාවිතා කරමින් ක්‍රීඩකයා සැඟවුණු වචනය සඳහා ඔවුන්ගේ අනුමානය ඇතුළත් කරයි.",
            afterGuess: "එක් එක් අනුමානයෙන් පසුව, ක්‍රීඩකයාට වර්ණ කව ආකාරයෙන් ප්‍රතිපෝෂණ ලැබේ:",
            greenCircle: "හරිත කවය: ලිපිය නිවැරදි සහ නිවැරදි ස්ථානයේ ඇත.",
            yellowCircle: "කහ කවය: අකුර නිවැරදි නමුත් වැරදි ස්ථානයේ ඇත.",
            grayCircle: "අළු කවය: අකුරක් වචනයේ නොමැති බව පෙන්නුම් කරයි.",
            feedback: "ලැබුණු ප්‍රතිපෝෂණ මත පදනම්ව, ක්‍රීඩකයා ඔවුන්ගේ අනුමානය සකස් කර ඔවුන් වචනය නිවැරදිව අනුමාන කරන තෙක් හෝ ඔවුන්ගේ අවසර ලබා ගත් උත්සාහයන් අවසන් වන තෙක් අනුමාන කිරීම දිගටම කරගෙන යයි.",
            startWordle: "ආරම්භ කරන්න",
            allRightsReserved: "© 2024 Fluent Bridge. All rights reserved."
        }
    };

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "si" : "en");
    };

    return (
        <div className="bg-cover bg-center min-h-screen flex flex-col" style={{ backgroundImage: `url(${vocabActivity})` }}>
            <Link to="/vocabpanel" className="absolute left-4 top-4 text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white">
                <IoIosArrowBack />
            </Link>
            <main className="flex-grow flex justify-center items-center">
                <section className="bg-gray-900 bg-opacity-80 rounded-lg w-full max-w-xl mx-4 p-8">
                    <img src={crown} alt="crown clip art" className="mx-auto w-40 mb-6" />
                    <h2 className="text-4xl text-white font-semibold text-center mb-4">{translations[language].vocabularyGame}</h2>
                    <p className="text-lg text-white mb-8">{translations[language].unlockPower}</p>
                    <hr className="border-b border-white mb-8" />
                    <h3 className="text-3xl text-white text-center mb-4">{translations[language].instructions}</h3>
                    <ul className="text-white mb-8 bg-black-600 p-10 rounded-2xl opacity-80">
                        <li className="mb-2">{translations[language].startOfGame}</li>
                        <li className="mb-2">{translations[language].playerGuess}</li>
                        <li className="mb-2">{translations[language].afterGuess}</li>
                        <li className="mb-2">
                            <span className="h-4 w-4 rounded-full mr-2 bg-green-500 inline-block"></span>
                            {translations[language].greenCircle}
                        </li>
                        <li className="mb-2">
                            <span className="h-4 w-4 rounded-full mr-2 bg-yellow-500 inline-block"></span>
                            {translations[language].yellowCircle}
                        </li>
                        <li className="mb-2">
                            <span className="h-4 w-4 rounded-full mr-2 bg-gray-500 inline-block"></span>
                            {translations[language].grayCircle}
                        </li>
                        <li>{translations[language].feedback}</li>
                    </ul>
                    <div className="flex justify-center">
                        <Link
                            to="/wordleGame" // Link to the Wordle game page
                            className="text-white font-bold py-3 px-6 rounded-lg border-2 bg-gray-900 hover:bg-gray-700 transition duration-300 ease-in-out"
                        >
                            {translations[language].startWordle}
                        </Link>
                    </div>
                    <FiGlobe onClick={toggleLanguage} className="text-white">{language === "en" ? "සිංහල" : "English"}</FiGlobe>
                </section>
            </main>
            
            <footer className="text-center bg-black p-4 text-white">
                <p className="text-sm">{translations[language].allRightsReserved}</p>
            </footer>
        </div>
    );
};

export default VocabularyActivityPage;
