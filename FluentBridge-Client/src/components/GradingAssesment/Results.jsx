import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ResultsTables from "./ResultsTables.jsx";

export default function Results() {
    function onRestart() {
        console.log("On Restart");
    }

    return (
        <div className="container mx-auto px-4 py-8 flex flex-col items-center bg-gray-400 min-h-screen">

            <h1 className="border-2 rounded-3xl text-3xl font-bold text-center mb-8 p-4 text-white m-4 bg-blue-500">Grading Assessment</h1>

            <motion.div className="bg-white p-8 rounded-lg shadow-md"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>

                <div className="text-gray-800 flex-wrap">
                    <div className="flex justify-between mb-4">
                        <span className="font-bold">Username : </span>
                        <span className="text-blue-500">Ishrath</span>
                    </div>
                </div>
                <div className="text-gray-800 flex-wrap">
                    <div className="flex justify-between mb-4">
                        <span className="font-bold">Total Quiz Points :</span>
                        <span>50</span>
                    </div>
                </div>
                <div className="text-gray-800 flex-wrap">
                    <div className="flex justify-between mb-4">
                        <span className="font-bold">Total Questions : </span>
                        <span>10</span>
                    </div>
                </div>
                <div className="text-gray-800 flex-wrap">
                    <div className="flex justify-between mb-4">
                        <span className="font-bold">Total Attempts : </span>
                        <span>3</span>
                    </div>
                </div>
                <div className="text-gray-800 flex-wrap">
                    <div className="flex justify-between mb-4">
                        <span className="font-bold">Total Earned Points :</span>
                        <span className="ml-8">30</span>
                    </div>
                </div>
                <div className="text-gray-800 flex-wrap">
                    <div className="flex justify-between mb-4">
                        <span className="font-bold">Quiz Results :</span>
                        <span className="text-green-500 ml-4">Passed</span>
                    </div>
                </div>

            </motion.div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center">
                <Link to="/gradingquiz" onClick={onRestart} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-2 sm:mr-2 sm:mb-0">
                    Restart Quiz
                </Link>
                <Link to="/activities" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                    Checkout Quiz
                </Link>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-center">
                <ResultsTables/>
            </div>

        </div>
    );
}
