// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { FiMessageSquare, FiMic, FiHeadphones, FiEdit, FiBook } from "react-icons/fi";
import Footer from "../Footer/Footer.jsx";
import ResultsTables from "../GradingAssesment/ResultsTables.jsx";

// eslint-disable-next-line react/prop-types, no-unused-vars
const ActivityButton = ({ to, color, icon, text }) => {
    return (
        <Link
            to={to}
            className={`flex items-center justify-center flex-col p-4 md:p-8 bg-white hover:bg-gray-100 border-2 transition duration-300 rounded-full shadow-md hover:border-[#FFFFFF] border-gray-200`}
        >
            {icon}
            <p className="mt-2 text-sm font-medium">{text}</p>
        </Link>
    );
};

const ActivityPanel = () => {
    const slideIn = useSpring({
        transform: "translateX(0)",
        from: { transform: "translateX(-100%)" },
        config: { duration: 800 },
    });

    const activities = [
        { to: "/speakingmainpanel", color: "bg-blue-400", icon: <FiMic className="mx-auto mb-2 text-4xl text-blue-500" />, text: "Speaking" },
        { to: "/listening", color: "bg-green-400", icon: <FiHeadphones className="mx-auto mb-2 text-4xl text-green-500" />, text: "Listening" },
        { to: "/writingactivity", color: "bg-yellow-400", icon: <FiEdit className="mx-auto mb-2 text-4xl text-yellow-500" />, text: "Writing" },
        { to: "/vocabpanel", color: "bg-red-400", icon: <FiBook className="mx-auto mb-2 text-4xl text-red-500" />, text: "Vocabulary" },
        { to: "/gradingquiz", color: "bg-purple-400", icon: <FiEdit className="mx-auto mb-2 text-4xl text-purple-500" />, text: "Grading Quiz" },
        { to: "/Controller", color: "bg-indigo-400", icon: <FiMessageSquare className="mx-auto mb-2 text-4xl text-indigo-500" />, text: "Chat Bot" }
    ];
    return (
        <div className="relative flex flex-col min-h-screen">
            <animated.div
                style={{ ...slideIn}}
                className="flex-1 md:flex md:items-center md:justify-center"
            >
                <div className="md:w-2/3 pb-32 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-28 px-10 rounded-4xl text-purple-950 font-bold text-2xl">
                        {activities.map((activity, index) => (
                            <animated.div key={index}>
                                <ActivityButton to={activity.to} color={activity.color} icon={activity.icon} text={activity.text} />
                            </animated.div>
                        ))}
                    </div>
                </div>
            </animated.div>
            <div className="mt-2 flex flex-col sm:flex-row justify-center mx-10">
                <ResultsTables />
            </div>
            <Footer />
            
        </div>
    );
};

export default ActivityPanel;