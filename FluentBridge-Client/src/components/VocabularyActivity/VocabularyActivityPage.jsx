import React from "react";
import { Link } from "react-router-dom";
import vocabActivity from "../../assets/vocabActivity.jpg";

import { IoIosArrowBack, IoIosClose } from 'react-icons/io';

const VocabularyActivityPage = () => {
    return (
        <div className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center" style={{ backgroundImage: `url(${vocabActivity})` }}>
            <Link to="/vocabpanel" className="back-to-vocabpanel flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4">
                 <IoIosArrowBack />
            </Link>
            <main className="text-center ">
                <section className="mb-8 bg-gray-900 bg-opacity-90 rounded-lg p-4 transition duration-300 hover:bg-gray-800 hover:bg-opacity-75">
                    <h2 className="text-4xl text-white font-semibold ">Master Vocabulary</h2>
                    <p className="text-lg mb-8 text-white">Unlock the power of words and master your vocabulary with our immersive learning experience.</p>
                    <div className="my-8 text-white">
                        <p >====================================</p>
                        <p className="text-3xl">Instructions</p>
                        <p className=" flex justify-center"># At the start of the game, a random five-letter word is selected as the hidden word. <br/>
                            # The player enters their guess for the hidden word using the input field provided.<br/>
                            #After each guess, the player receives feedback in the form of colored circles:</p>
                            <p className=" flex justify-center pt-2" style={{ color: 'green' }}>  Green circle : Indicates that a letter is correct and in the right position.</p>
                            <p className="flex justify-center" style={{ color: 'yellow' }}>  Yellow circle : Indicates that a letter is correct but in the wrong position.</p>
                            <p className="flex justify-center pb-2" style={{ color: 'gray' }}> Gray circle :Indicates that a letter is not in the word.</p>
                            <p className="flex justify-center"> # Based on the feedback received, the player adjusts their guess and continues guessing until they either correctly guess the word or exhaust their allowed attempts.</p>
                    </div>
                    <div className="flex justify-center mt-8">
                        <Link
                            to="/wordleGame" // Link to the Wordle game page
                            className="flex items-center justify-center text-white font-bold py-2 px-4 rounded-lg bg-blue-900 hover:bg-green-900 transition duration-300 ease-in-out mx-2"
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
