// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';


const WritingActivity = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200 z-50">
            <Link to="/activities" className="absolute left-4 top-4 text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white">
                <IoIosArrowBack />
            </Link>
        </div>
    );
};

export default WritingActivity;
