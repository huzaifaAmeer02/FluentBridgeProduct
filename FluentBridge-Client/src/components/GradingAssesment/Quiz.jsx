import React from "react";
import Questions from "./Questions.jsx";

export default function Quiz() {
    /*next button event handler*/
    function onNext(){
        console.log("Next question")
    }
    /*prev button event handler*/
    function onPrevious(){
        console.log("Previous Question")
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8 border-2 p-4 text-white">Grading Assessment</h1>

            <Questions/>

            {/* Grid for buttons */}
            <div className="flex justify-between">
                {/* Previous button */}
                <button onClick={onPrevious} className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-3 sm:px-4 shadow-md transition duration-300 ease-in-out w-1/3 sm:w-auto">
                    Previous
                </button>

                {/* Next button */}
                <button onClick={onNext} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-3 sm:px-4 shadow-md transition duration-300 ease-in-out w-1/3 sm:w-auto">
                    Next
                </button>
            </div>
        </div>
    );
}
