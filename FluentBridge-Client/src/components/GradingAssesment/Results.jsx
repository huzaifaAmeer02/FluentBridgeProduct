// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Results() {
    return (
        <div className="container mx-auto px-4 py-8 flex flex-col items-center bg-gray-400 min-h-screen">

            <h1 className="border-2 rounded-3xl text-3xl font-bold text-center mb-8 p-4 text-white m-4 bg-blue-500">Grading Assessment</h1>

            <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="grid grid-cols-4 md:grid-cols-2 gap-4 text-gray-800 flex-wrap">
                    <div className="flex justify-between mb-4">
                        <span className="font-bold">Username : </span>
                        <span className="text-blue-500">Daily Tuition</span>
                    </div>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-2 gap-4 text-gray-800 flex-wrap">
                    <div className="flex justify-between mb-4">
                        <span className="font-bold">Total Quiz Points :</span>
                        <span>50</span>
                    </div>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-2 gap-4 text-gray-800 flex-wrap">
                    <div className="flex justify-between mb-4">
                        <span className="font-bold">Total Questions : </span>
                        <span>10</span>
                    </div>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-2 gap-4 text-gray-800 flex-wrap">
                    <div className="flex justify-between mb-4">
                        <span className="font-bold">Total Attempts : </span>
                        <span>3</span>
                    </div>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-2 gap-4 text-gray-800 flex-wrap">
                    <div className="flex justify-between mb-4">
                        <span className="font-bold">Total Earned Points :</span>
                        <span>30</span>
                    </div>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-2 gap-4 text-gray-800 flex-wrap">
                    <div className="flex justify-between">
                        <span className="font-bold">Quiz Results :</span>
                        <span className="text-green-500">Passed</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
