import React, { useState, useEffect } from "react";
import LoadingPage from "../LoadingPage/LoadingPage"; // Import the LoadingPage component
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Lottie from "lottie-react";
import fourplanets from "../../assets/fourplanets.json";

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

    if (loading) {
        return <LoadingPage />; // Render the LoadingPage component while loading
    }

    return (
        <div className="relative" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem', position: 'relative' }}>
            {/* Gradient background */}
            <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'radial-gradient(circle, #220233, #000000)', zIndex: 0 }}></div>

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
                    zIndex: 1, // Set z-index between gradient background and links
                }}
            />

            {/* Links */}
            <Link
                to="/activities"
                className="back-to-activities flex items-center text-purple-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4"
                style={{ zIndex: 2 }} // Set higher z-index for the links
            >
                <IoIosArrowBack />
            </Link>

            <div className="flex flex-col mx-3 mb-8 justify-center items-center" style={{ zIndex: 2, marginTop: '50px' }}>
                <Link
                    to="/dictionary"
                    className="button1 flex justify-center text-white text-2xl font-bold py-4 px-6 rounded-full bg-purple-500 hover:bg-purple-800 transition duration-300 ease-in-out mb-4 w-full top-30%"
                >
                    Use Dictionary
                </Link>
                <Link
                    to="/vocabulary-activity"
                    className="button1 flex justify-center text-white text-2xl font-bold py-4 px-6 rounded-full bg-purple-500 hover:bg-purple-800 transition duration-300 ease-in-out mb-4 w-full"
                >
                    Vocabulary Activity
                </Link>
            </div>
        </div>
    );
};

export default VocabPanel;
