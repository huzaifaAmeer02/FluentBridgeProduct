import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function VActivities() {
  return (
    <div>
        <Link
            to="/vocabulary-activity"
                className="back-to-activities flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4" >
                <IoIosArrowBack />
        </Link>
        <p>Asaniiiiiiiiiii</p>
      
    </div>
  )
}

export default VActivities
