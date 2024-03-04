import React from "react";
import { Link } from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";

const ReadingQuestionier = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200 z-50">
            <Link to="/activities"
                  className="back-to-activities flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4"
            >
                <IoIosArrowBack />
            </Link>
            Reading Activities are here 
        </div>
    );
}

export default ReadingQuestionier;