import React from "react";
import { Link } from "react-router-dom";
import vocabActivity from "../../assets/vocabActivity.jpg";

const VocabularyActivityPage = () => {
    return (
        <div className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center" style={{ backgroundImage: `url(${vocabActivity})` }}>
            <main className="text-center text-white">
                <section className="mb-8 bg-gray-900 bg-opacity-90 rounded-lg p-4 transition duration-300 hover:bg-gray-800 hover:bg-opacity-75">
                    <h2 className="text-4xl font-semibold ">Master Vocabulary</h2>
                    <p className="text-lg mb-8">Unlock the power of words and master your vocabulary with our immersive learning experience.</p>
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
