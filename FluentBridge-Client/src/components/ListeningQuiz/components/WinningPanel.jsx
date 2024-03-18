import React from "react";
import { IoMdTrophy } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const WinningPanel = ({ earned }) => {
  let message, textColor, bgColor;

  // Determine message and styling based on earned amount
  if (earned=="" || earned == " 100" || earned == " 200" || earned == " 300" || earned == " 500") {
    message = "Better luck next time! Try again!";
    textColor = "text-red-800";
    bgColor = "bg-red-100";
  } else if (earned == " 1 000" || earned == " 2 000" || earned == " 4 000" || earned == " 8 000" || earned == " 16 000" || earned == " 32 000" || earned == " 64 000") {
    message = "Well done! You're getting there!";
    textColor = "text-yellow-800";
    bgColor = "bg-yellow-100";
  } else if (earned == " 125 000" || earned == " 250 000" || earned == " 500 000" || earned == " 1 000 000") {
    message = "Congratulations! You're a listening champion!";
    textColor = "text-green-800";
    bgColor = "bg-green-100";
  }else{
    message = "Time's up !!! Sorry please try again !";
    textColor = "text-red-900";
    bgColor = "bg-red-400"
  }

  return (
    <motion.div
      className={`winning-panel p-6 rounded-lg shadow-lg ${bgColor}`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="icon-container flex justify-center items-center mb-4">
        <IoMdTrophy className="trophy-icon text-4xl text-yellow-500" />
      </div>
      <h1 className={`endText text-2xl font-bold ${textColor}`}>
        {message}
      </h1>
      <div className="big-amount text-3xl text-purple-950 font-bold">{earned} Points</div>
      <p className={`additional-text mt-4 ${textColor}`}>
        Keep up the good work!
      </p>
      <Link
        to="/listening"
        className="mt-8 inline-block bg-purple-900 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-purple-700"
      >
        Return to Listening
      </Link>
    </motion.div>
  );
};

export default WinningPanel;
