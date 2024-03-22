import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import { IoIosArrowBack } from "react-icons/io";
import LoadingPage from '../LoadingPage/LoadingPage';

const SpeakMain = () => {
    const [loading, setLoading] = useState(true); // State for loading

    // Function to simulate loading
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
        <div className="flex flex-col md:flex-row justify-center items-center h-screen">
            {/* Back Button */}
            <div className="absolute left-4 top-4">
                <Link
                    to="/activities"
                    className="flex items-center text-purple-500 font-bold hover:text-purple-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white"
                >
                    <IoIosArrowBack />
                </Link>
            </div>
            {/* Loading Page */}
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-purple-600 bg-opacity-75">
                </div>
            )}
            {/* Buttons Container */}
            {!loading && (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-16 md:mt-0">
                    {/* Type and Pronounce Button */}
                    <Link to="/speaking">
                        <button className="rounded-full bg-purple-600 text-white py-4 px-6 md:py-6 md:px-8 text-center font-bold text-lg md:text-xl shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out">
                            Type and Listen with Us
                        </button>
                    </Link>
                    {/* Check Your Pronunciation Level Button */}
                    <Link to="/pronunciation">
                        <button className="rounded-full bg-purple-600 text-white py-4 px-6 md:py-6 md:px-8 text-center font-bold text-lg md:text-xl shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out">
                            Check Pronunciation Level
                        </button>
                    </Link>
                    {/* Practice With FluentBridge Button */}
                    <Link>
                        <button className="rounded-full bg-purple-600 text-white py-4 px-6 md:py-6 md:px-8 text-center font-bold text-lg md:text-xl shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out">
                            Practice With FluentBridge
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default SpeakMain;