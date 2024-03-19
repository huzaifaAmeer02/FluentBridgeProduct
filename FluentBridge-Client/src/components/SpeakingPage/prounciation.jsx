import React, { useState,useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import speechIcon from '../../assets/logofluent.png';
import LoadingPage from "../LoadingPage/LoadingPage";

const Pronunciation = () => {
    const [isTranslated, setIsTranslated] = useState(false);
    const [loading, setLoading] = useState(true); // State for loading

    const toggleTranslation = () => {
        setIsTranslated(!isTranslated);
        // Add your translation logic here
    };
    useEffect(() => {
        // Simulate loading time
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds for demonstration purposes

        // Clear timeout on component unmount
        return () => clearTimeout(timeout);
    }, []);
    if (loading) {
        return <LoadingPage />; // Render loading page while loading
    }

    return (
        <div className="bg-gray-400 min-h-screen flex flex-col justify-center items-center">
            <Link
                to="/speakingmainpanel"
                className="absolute left-4 top-4 p-2 rounded-lg bg-white text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out"
            >
                <IoIosArrowBack />
            </Link>

            <div>
                <img src={speechIcon} alt="Speech Icon" className="h-32 my-10 object-cover" />
            </div>
            <div className="mt-4 text-center mx-auto max-w-lg">
                <h1 className="text-3xl font-bold mb-6 text-white">{isTranslated ? 'FluentBridge චතුර මට්ටමේ අනාවැකිකරු වෙත සාදරයෙන් පිළිගනිමු' : 'Welcome to FluentBridge Fluency Level Predictor'}</h1>
                <p className="mb-6 text-lg text-gray-700">{isTranslated ? 'FluentBridge චතුර මට්ටමේ පුරෝකථනය භාවිතා කිරීම සඳහා:' : 'To use the FluentBridge fluency level predictor:'}</p>
                <ol className="text-left mb-6 bg-gray-600 p-8 rounded-2xl mx-4">
                    <li className="mb-2"><strong>{isTranslated ? 'ක්ලික් කරන්න' : 'Click'}</strong> {isTranslated ? '- මෙම "Predict My Fluency Level" වෙත ක්ලික් කරන්න.' : 'on the "Predict My Fluency Level" button below.'}</li>
                    <li className="mb-2"><strong>{isTranslated ? 'කතා කරන්න' : 'Speak'}</strong> {isTranslated ? '- මෙම බොත්තම ක්ලික් කර පසුබිමට කතා කරන්න.' : 'into the microphone after clicking the button.'}</li>
                    <li className="mb-2"><strong>{isTranslated ? 'රැඳී සිටින්න' : 'Wait'}</strong> {isTranslated ? '- විශ්ලේෂණ ප්රතිඵල පෙනී සිටීම සඳහා.' : 'for the analysis results to appear.'}</li>
                    <li className="mb-2">{isTranslated ? 'ඔබේ චතුර මට්ටම ඉහළ නම්, ඔබ හොඳ චතුර මට්ටමක සිටී. එය අඩු නම්, කරුණාකර අපගේ උච්චාරණ පුහුණුකරු වෙත යොමු වන්න.' : 'If your fluency level is HIGH, you\'re at a good fluency level. If it\'s LOW, please refer to our pronunciation trainer.'}</li>
                </ol>
                <div>
                    <button
                        onClick={() => window.location.href = "https://your-url.com"}
                        className="mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md shadow-md transition duration-300 ease-in-out"
                    >
                        {isTranslated ? 'මගේ චතුර මට්ටම පුරෝකථනය කරන්න' : 'Predict My Fluency Level'}
                    </button>
                </div>
                <div>
                    <button
                        onClick={toggleTranslation}
                        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md shadow-md transition duration-300 ease-in-out"
                    >
                        {isTranslated ? 'Translate to English' : 'සිංහල භාෂාවට පරිවර්තනය කරන්න'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pronunciation;
