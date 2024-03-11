import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import speechIcon from '../../assets/logofluent.png';

const Pronunciation = () => {
    return (
        <div className="bg-gray-400 min-h-screen flex flex-col justify-center items-center">
            <Link
                to="/speaking"
                className="absolute left-4 top-4 p-2 rounded-lg bg-white text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out"
            >
                <IoIosArrowBack />
            </Link>

            <div>
                <img src={speechIcon} alt="Speech Icon" className="h-32 my-10 object-cover" />
            </div>
            <div className="mt-4 text-center mx-auto max-w-lg">
                <h1 className="text-3xl font-bold mb-6 text-white">Welcome to FluentBridge Fluency Level Predictor</h1>
                <p className="mb-6 text-lg text-gray-700">To use the FluentBridge fluency level predictor:</p>
                <ol className="text-left mb-6 bg-gray-600 p-8 rounded-2xl mx-4">
                    <li className="mb-2"><strong>Click</strong> on the "Predict My Fluency Level" button below.</li>
                    <li className="mb-2"><strong>Speak</strong> into the microphone after clicking the button.</li>
                    <li className="mb-2"><strong>Wait</strong> for the analysis results to appear.</li>
                    <li className="mb-2">If your fluency level is <strong>HIGH</strong>, you're at a good fluency level. If it's <strong>LOW</strong>, please refer to our pronunciation trainer.</li>
                </ol>
                <div>
                    <button
                        onClick={() => window.location.href = "https://your-url.com"}
                        className="mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md shadow-md transition duration-300 ease-in-out"
                    >
                        Predict My Fluency Level
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pronunciation;
