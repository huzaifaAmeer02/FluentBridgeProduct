import React, { useEffect, useRef, useState } from "react";
import LoadingPage from "../LoadingPage/LoadingPage.jsx";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setUserId } from "../../Redux/Result_Reducer.js";
import { FiGlobe } from "react-icons/fi"; // Import the Globe icon

export default function GradingAssesment() {
    const [loading, setLoading] = useState(true);
    const [language, setLanguage] = useState("english");
    const translation = {
        english: {
            welcome: "Welcome to the Grading Assessment",
            instructions: [
                "You will be asked 10 questions one after another.",
                "Points will be awarded equally for the correct answer.",
                "Each question has many options. You can choose only one option.",
                "You can review and change answers before the quiz finishes.",
                "The result will be declared at the end of the quiz."
            ],
            start: "Start",
            placeholder: "Enter your username for this attempt"
        },
        sinhala: {
            welcome: "ශ්‍රේණිගත කිරීමේ ඇගයීමට සාදරයෙන් පිළිගනිමු",
            instructions: [
                "ඔබෙන් එකින් එක ප්‍රශ්න 10ක් අසනු ඇත.",
                "නිවැරදි පිළිතුර සඳහා සමාන ලකුණු ප්‍රදානය කෙරේ.",
                "සෑම ප්‍රශ්නයකටම බොහෝ විකල්ප ඇත. ඔබට තෝරා ගත හැක්කේ එක් විකල්පයක් පමණි.",
                "ප්‍රශ්නාවලිය අවසන් වීමට පෙර ඔබට පිළිතුරු සමාලෝචනය කර වෙනස් කළ හැක.",
                "ප්‍රශ්නාවලිය අවසානයේ ප්‍රතිඵලය ප්‍රකාශ කෙරේ."
            ],
            start: "ආරම්භ කරන්න",
            placeholder: "මෙම උත්සාහය සඳහා ඔබගේ පරිශීලක නාමය ඇතුලත් කරන්න"
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulating a 2-second delay for demonstration purposes
    }, []);

    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");

    function startQuiz() {
        if (username) {
            dispatch(setUserId(username));
        }
    }

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    const toggleLanguage = () => {
        setLanguage(language === "english" ? "sinhala" : "english");
    };

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
                <div className="container mx-auto my-5 max-w-lg p-8 bg-white bg-opacity-90 shadow-lg rounded-lg sm:mt-4">
                    <Link
                        to="/activities"
                        className="back-to-activities flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4"
                    >
                        <IoIosArrowBack />
                    </Link>
                    <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleLanguage}>
                        <FiGlobe className="bg-white p-2 rounded mr-6" size={40} />
                    </div>

                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                        {translation[language].welcome}
                    </h1>
                    <ol className="text-gray-600 mb-6 bg-gray-300 p-2 rounded-xl">
                        {translation[language].instructions.map((instruction, index) => (
                            <li className="text-gray-800" key={index}>{instruction}</li>
                        ))}
                    </ol>
                    <form id="form" className="mb-6">
                        <input
                            ref={inputRef}
                            type="text"
                            value={username}
                            onChange={handleInputChange}
                            placeholder={translation[language].placeholder}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                        />
                    </form>
                    <div className="start text-center">
                        <Link
                            to="/quiz"
                            onClick={startQuiz}
                            className={`btn py-2 px-6 border border-transparent text-base font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 ${!username && "pointer-events-none opacity-50"}`}
                        >
                            {translation[language].start}
                        </Link>
                    </div>
                    
                </div>
            )}
        </motion.div>
    );
}
