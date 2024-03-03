import React from "react";
import { Link } from "react-router-dom";
import vocabActivity1 from "../../assets/vocabActivity1.jpg";

import { IoIosArrowBack } from 'react-icons/io';

const VocabularyActivityPage = () => {
    return (
        <div className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center" style={{ backgroundImage: `url(${vocabActivity1})` }}>
            <Link to="/vocabpanel" className="back-to-vocabpanel absolute left-4 top-4 text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white">
                <IoIosArrowBack />
            </Link>
            <main className="text-justify">
                <section className="bg-gray-900 bg-opacity-80 rounded-lg p-8 my-8 mx-auto max-w-xl transition duration-300 hover:bg-gray-900 hover:bg-opacity-75">
                    <h2 className="text-4xl text-white font-semibold mb-4">Master Vocabulary</h2>
                    <p className="text-lg text-white mb-8">Unlock the power of words and master your vocabulary with our immersive learning experience.</p>
                    <div className="text-white mb-8">
                        <hr className="border-b border-white my-4" />
                        <h3 className="text-3xl mb-4">Instructions</h3>
                        <p className="mb-2">At the start of the game, a random five-letter word is selected as the hidden word.</p>
                        <p className="mb-2">The player enters their guess for the hidden word using the input field provided.</p>
                        <p className="mb-2">After each guess, the player receives feedback in the form of colored circles:</p>
                        <p className="mb-2 flex justify-center items-center"> <span className="h-4 w-4 rounded-full mr-2 bg-green-500"></span> Green circle: Indicates that a letter is correct and in the right position.</p>
                        <p className="mb-2 flex justify-center items-center"> <span className="h-4 w-4 rounded-full mr-2 bg-yellow-500"></span> Yellow circle: Indicates that a letter is correct but in the wrong position.</p>
                        <p className="mb-2 flex justify-center items-center"> <span className="h-4 w-4 rounded-full mr-2 bg-gray-500"></span> Gray circle: Indicates that a letter is not in the word.</p>
                        <p>Based on the feedback received, the player adjusts their guess and continues guessing until they either correctly guess the word or exhaust their allowed attempts.</p>
                    </div>
                    <div className="flex justify-center">
                        <Link
                            to="/wordleGame" // Link to the Wordle game page
                            className="text-white font-bold py-3 px-6 rounded-lg bg-blue-900 hover:bg-blue-700 transition duration-300 ease-in-out mx-2"
                        >
                            Start the Wordle
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default VocabularyActivityPage;
