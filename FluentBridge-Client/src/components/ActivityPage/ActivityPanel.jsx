import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { FiMessageSquare, FiMic, FiHeadphones, FiEdit, FiBook } from "react-icons/fi";
import Footer from "../Footer/Footer.jsx";
import ResultsTables from "../GradingAssesment/ResultsTables.jsx";
import Lottie from "lottie-react";
import booksAnimation from "../../assets/books.json";
import animationData from "../../assets/activitypanel.json"; // Assuming this is the animation you want to cover the full page

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

const booksAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: booksAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
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
        { to: "https://fluent-bridge-speaking.vercel.app/", color: "bg-indigo-400", icon: <FiMessageSquare className="mx-auto mb-2 text-4xl text-indigo-500" />, text: "Chat Bot" }
    ];

    return (
        <div  >
        <div className="relative flex flex-col min-h-screen">
    {/* Lottie animation covering the full page */}
    <div className="fixed inset-0 z-0">
        <Lottie animationData={animationData} />
        <div className="absolute inset-0 bottom-0" style={{ background: 'linear-gradient(to top, #000000, #240249, transparent)' }} />

    </div>

    {/* Activity panel */}
    <animated.div
        style={{ ...slideIn }}
        className="z-10 flex-1 flex flex-col justify-center items-center"
    >
        <div className="w-full md:w-2/3 pb-10 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 p-4 md:p-10 rounded-4xl text-purple-950 font-bold text-2xl">
                {activities.map((activity, index) => (
                    <animated.div key={index}>
                        <ActivityButton to={activity.to} color={activity.color} icon={activity.icon} text={activity.text} />
                    </animated.div>
                ))}
            </div>
        </div>
    </animated.div>

    {/* Results table component */}
    <animated.div style={{ zIndex: 2 }} className="z-10 mt-8 flex flex-col sm:flex-row justify-center mx-4 sm:mx-10">
        <ResultsTables />
    </animated.div>

    {/* Footer component */}
    <animated.div style={{ zIndex: 2 }} className="z-10 mt-8">
        <Footer />
    </animated.div>
</div>

        </div>
    );
};

export default ActivityPanel;
