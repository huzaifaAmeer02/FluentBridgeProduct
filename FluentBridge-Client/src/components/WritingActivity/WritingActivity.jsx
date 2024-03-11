import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';


const WritingActivity = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200 z-50">
            <Link to="/activities" className="absolute left-4 top-4 text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white">
                <IoIosArrowBack />
            </Link>

            <div className="max-w-md p-6 bg-white rounded-lg shadow-lg text-center mx-4">
                <h2 className="text-xl font-bold mb-4">FluentBridge Writing Corrector Activity</h2>
                <p className="text-gray-700 mb-4">Follow the instructions below to submit your writing for correction:</p>
                <ol className="text-left mb-4">
                    <li className="mb-2">Write your essay or paragraph in a text editor of your choice.</li>
                    <li className="mb-2">The inputs can be given in many ways as below.</li>
                    <li className="mb-2">Save your writing as a text file (e.g., .txt).</li>
                    <li className="mb-2">Click on the button below to access the writing corrector interface.</li>
                    <li className="mb-2">Upload your text file and submit for correction.</li>
                    <li className="mb-2">Review the corrections and suggestions provided.</li>
                </ol>
                <a
                    href="https://your-writing-corrector-url.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md shadow-md transition duration-300 ease-in-out"
                >
                    Go to Writing Corrector
                </a>
            </div>
        </div>
    );
};

export default WritingActivity;
