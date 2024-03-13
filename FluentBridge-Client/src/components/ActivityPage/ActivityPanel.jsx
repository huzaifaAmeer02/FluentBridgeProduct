import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { FiMessageSquare, FiMic, FiHeadphones, FiEdit, FiBook } from "react-icons/fi";
import Footer from "../Footer/Footer.jsx";

const ActivityButton = ({ to, color, icon, text }) => {
    return (
        <Link
            to={to}
            className={`flex items-center justify-center flex-col p-4 md:p-8 bg-white hover:bg-gray-100 transition duration-300 rounded-full shadow-md border border-gray-200`}
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

    return (
        <div className="relative flex flex-col min-h-screen">
            <animated.div
                style={{ ...slideIn, background: "linear-gradient(to bottom, #FFFFFF, #163032)" }}
                className="flex-1 md:flex md:items-center md:justify-center"
            >
                <div className="md:w-2/3 pb-40 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-28 p-10 rounded-3xl">
                        <animated.div>
                            <ActivityButton to="/speaking" color="bg-blue-400" icon={<FiMic className="mx-auto mb-2 text-4xl text-blue-500" />} text="Speaking" />
                        </animated.div>
                        <animated.div>
                            <ActivityButton to="/listening" color="bg-green-400" icon={<FiHeadphones className="mx-auto mb-2 text-4xl text-green-500" />} text="Listening" />
                        </animated.div>
                        <animated.div>
                            <ActivityButton to="/writingactivity" color="bg-yellow-400" icon={<FiEdit className="mx-auto mb-2 text-4xl text-yellow-500" />} text="Writing" />
                        </animated.div>
                        <animated.div>
                            <ActivityButton to="/vocabpanel" color="bg-red-400" icon={<FiBook className="mx-auto mb-2 text-4xl text-red-500" />} text="Vocabulary" />
                        </animated.div>
                        <animated.div>
                            <ActivityButton to="/gradingquiz" color="bg-purple-400" icon={<FiEdit className="mx-auto mb-2 text-4xl text-purple-500" />} text="Grading Quiz" />
                        </animated.div>
                        <animated.div>
                            <ActivityButton to="/Controller" color="bg-indigo-400" icon={<FiMessageSquare className="mx-auto mb-2 text-4xl text-indigo-500" />} text="Chat Bot" />
                        </animated.div>
                    </div>
                </div>
            </animated.div>
            <Footer />
        </div>
    );
};

export default ActivityPanel;
