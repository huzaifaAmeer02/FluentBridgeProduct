import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import { IoIosArrowBack } from "react-icons/io";
import LoadingPage from '../LoadingPage/LoadingPage';
import Lottie from 'lottie-react';
import fourplanets from "../../assets/fourplanets.json";

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
        <div className="flex flex-col md:flex-row justify-center items-center min-h-screen">
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
                
                <div className="grid   gap-4 mt-16 md:mt-0 max-w-screen-xl">
                {/* Lottie animation */}
            <Lottie
                animationData={fourplanets}
                loop
                autoplay
                style={{
                    position: 'absolute',
                    top: '25%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    zIndex: -1, // Set z-index between gradient background and links
                }}
            />
            <div className='p-10'></div>
            {/* Type and Pronounce Button */}
                <Link to="/speaking" className="flex justify-center">
                    <button className="w-full rounded-full bg-purple-600 hover:bg-purple-900 text-white py-4 px-20 md:py-6 text-center font-bold text-lg md:text-xl shadow-lg  transition duration-300 ease-in-out">
                        Type and Listen with Us
                    </button>
                </Link>
                {/* Check Your Pronunciation Level Button */}
                <Link to="/pronunciation" className="flex justify-center">
                    <button className="w-full rounded-full bg-purple-600 hover:bg-purple-900 text-white py-4 px-20 md:py-6 text-center font-bold text-lg md:text-xl shadow-lg  transition duration-300 ease-in-out">
                        Check Pronunciation Level
                    </button>
                </Link>
                {/* Practice With FluentBridge Button */}
                <Link to="#" className="flex justify-center">
                    <button className="w-full rounded-full bg-purple-600 hover:bg-purple-900 text-white py-4 px-20 md:py-6 text-center font-bold text-lg md:text-xl shadow-lg  transition duration-300 ease-in-out">
                        Practice With FluentBridge
                    </button>
                </Link>
            </div>
            
            )}
        </div>
    );
};

export default SpeakMain;
