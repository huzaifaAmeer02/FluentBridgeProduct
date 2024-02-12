import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const VideoPage = ({ onClose, videoUrl }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg relative">
                <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <video controls className="w-full" src={videoUrl} />
                <Link to="/quiz" className="block text-center mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Take Quiz</Link>
            </div>
        </div>
    );
};

export default VideoPage;
