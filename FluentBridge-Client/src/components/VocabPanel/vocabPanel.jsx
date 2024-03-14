import React, { useState, useEffect } from "react";
import LoadingPage from "../LoadingPage/LoadingPage"; // Import the LoadingPage component
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import vocabback from "../../assets/vocabback1.jpg";

const VocabPanel = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Clear timeout on component unmount
        return () => clearTimeout(timeout);
    }, []);

    const containerStyle = {
        backgroundImage: `url(${vocabback})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
    };

    if (loading) {
        return <LoadingPage />; // Render the LoadingPage component while loading
    }

    return (
        <div className="relative" style={containerStyle}>
            <Link
                to="/activities"
                className="back-to-activities flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4"
            >
                <IoIosArrowBack />
            </Link>

            <div className="flex flex-col mb-8 justify-center items-center">
                <Link
                    to="/dictionary"
                    className="button1 flex justify-center text-white text-4xl font-bold py-4 px-6 rounded-lg bg-teal-500 hover:bg-teal-700 transition duration-300 ease-in-out mb-4"
                >
                    Use Dictionary
                </Link>
                <Link
                    to="/vocabulary-activity"
                    className="button1 flex justify-center text-white text-4xl font-bold py-4 px-6 rounded-lg bg-yellow-500 hover:bg-yellow-700 transition duration-300 ease-in-out mb-4"
                >
                    Vocabulary Activity
                </Link>
            </div>
        </div>
    );
};

export default VocabPanel;
