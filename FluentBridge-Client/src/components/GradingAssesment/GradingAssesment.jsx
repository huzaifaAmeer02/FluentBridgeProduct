// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import LoadingPage from "../LoadingPage/LoadingPage.jsx";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function GradingAssesment() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulating a 2-second delay for demonstration purposes
    }, []);

    const inputRef = useRef(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center h-screen"
            style={{
                backgroundImage: `url('https://img.freepik.com/free-photo/diverse-multiethnic-kids-junior-school-students-group-study-together-classroom-generative-ai_1258-166493.jpg?t=st=1708657512~exp=1708661112~hmac=c8a0d4cdb34b79646270515622f94e1fb522c8d20fc28748a113268243ff8400&w=996')`, // Replace the URL with your desired background image
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {loading ? (
                <LoadingPage />
            ) : (
                <div className="container mx-auto max-w-lg p-8 bg-white bg-opacity-90 shadow-lg rounded-lg">
                    <Link
                        to="/activities"
                        className="back-to-activities flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4"
                    >
                        <IoIosArrowBack />
                    </Link>
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                        Welcome to the Grading Assessment
                    </h1>

                    <ol className="text-gray-600 mb-6">
                        <li>1. You will be asked 10 questions one after another.</li>
                        <li>2. 10 points will be awarded for the correct answer.</li>
                        <li>3. Each question has three options. You can choose only one option.</li>
                        <li>4. You can review and change answers before the quiz finishes.</li>
                        <li>5. The result will be declared at the end of the quiz.</li>
                    </ol>
                    <form id="form" className="mb-6">
                        <input ref={inputRef} type="text" placeholder="Enter your username for this attempt" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" />
                    </form>
                    <div className="start text-center">
                        <Link to="/quiz" className="btn py-2 px-6 border border-transparent text-base font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
                            Start the Assessment
                        </Link>
                    </div>
                </div>
            )}
        </motion.div>
    );
}
