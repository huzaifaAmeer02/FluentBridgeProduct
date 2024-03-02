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

            <div className="absolute top-18 left-20 mt-4 ml-10">
                <div className="flex flex-col">
                    <Link
                        to="/dictionary"
                        className="button1 flex justify-center text-white text-4xl font-bold py-4 px-6 rounded-lg bg-teal-500 hover:bg-teal-700 transition duration-300 ease-in-out mx-2 my-8"
                    >
                        Use Dictionary
                    </Link>
                </div>
                <div className="flex flex-col">
                    <Link
                        to="/vocabulary-activity"
                        className="button1 flex justify-center text-white text-4xl font-bold py-4 px-6 rounded-lg bg-red-500 hover:bg-red-700 transition duration-300 ease-in-out mx-2"
                    >
                        Vocabulary Activity
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default VocabPanel;
