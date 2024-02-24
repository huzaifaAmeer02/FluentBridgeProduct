// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import vocabback from "../../assets/vocabback.jpg"

const VocabPanel = () => {
    const containerStyle = {
        backgroundImage: `url(${vocabback})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div className="p-8" style={containerStyle}>
            <Link
                to="/activities"
                className="back-to-activities flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4"
            >
                <IoIosArrowBack />
            </Link>

            <div className="flex justify-center mt-8">
                <Link
                    to="/dictionary"
                    className="button1 flex items-center justify-center text-white font-bold py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out mx-2"
                >
                    Use Dictionary
                </Link>
                <Link
                    to="/vocabulary-activity"
                    className="button2 flex items-center justify-center text-white font-bold py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out mx-2"
                >
                    Vocabulary Activity
                </Link>
            </div>
        </div>
    );
};

export default VocabPanel;
