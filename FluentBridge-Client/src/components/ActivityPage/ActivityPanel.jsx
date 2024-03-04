import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import ChatBotModal from "../ChatBotModal/ChatBotModal.jsx";
import { FiMessageSquare, FiMic, FiHeadphones, FiEdit, FiBook, FiBookOpen } from "react-icons/fi"; // Importing the necessary icons
import rightBack from "../../assets/activity-bg.jpg";

const ActivityPanel = () => {
    const [showChatBot, setShowChatBot] = useState(false);

    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 800 },
    });

    const slideIn = useSpring({
        transform: "translateX(0)",
        from: { transform: "translateX(-100%)" },
        config: { duration: 800 },
    });

    const bounceIn = useSpring({
        opacity: 1,
        transform: "translateY(0)",
        from: { opacity: 0, transform: "translateY(-100%)" },
        config: { duration: 800, delay: 300, tension: 300, friction: 10 },
    });

    const toggleChatBot = () => {
        setShowChatBot(!showChatBot);
    };

    return (
        <div className="relative flex flex-col min-h-screen mt-16">
            {/* ChatBot Button */}
            <animated.div
                className="fixed bottom-20 right-8 bg-blue-500 hover:bg-blue-700 text-white p-3 text-center transition rounded-full z-10"
                style={fadeIn}
                onClick={toggleChatBot}
            >
                <FiMessageSquare />
            </animated.div>

            {/* Activity Panel */}
            <animated.div
                style={{ ...slideIn, background: `url(${rightBack})`, backgroundSize: "cover" }}
                className="flex-1 md:flex md:items-center md:justify-center"
            >
                <div className="md:w-2/3 p-4 overflow-y-auto pb-10">
                    <h2 className="text-2xl font-bold  text-gray-800 rounded-2xl bg-gray-100 p-4 mb-4 text-center mt-2">Select Your Activity</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <animated.div style={bounceIn}>
                            <Link
                                to="#"
                                className="block bg-blue-500 hover:bg-blue-700 text-white p-6 text-center transition rounded-md"
                            >
                                <FiMic className="mx-auto mb-2 text-4xl" />
                                Speaking
                            </Link>
                        </animated.div>
                        <animated.div style={bounceIn}>
                            <Link
                                to="/listening"
                                className="block bg-green-500 hover:bg-green-700 text-white p-6 text-center transition rounded-md"
                            >
                                <FiHeadphones className="mx-auto mb-2 text-4xl" />
                                Listening
                            </Link>
                        </animated.div>
                        <animated.div style={bounceIn}>
                            <Link
                                to="#"
                                className="block bg-yellow-500 hover:bg-yellow-700 text-white p-6 text-center transition rounded-md"
                            >
                                <FiEdit className="mx-auto mb-2 text-4xl" />
                                Writing
                            </Link>
                        </animated.div>
                        <animated.div style={bounceIn}>
                            <Link
                                to="/vocabpanel"
                                className="block bg-red-500 hover:bg-red-700 text-white p-6 text-center transition rounded-md"
                            >
                                <FiBook className="mx-auto mb-2 text-4xl" />
                                Vocabulary
                            </Link>
                        </animated.div>
                        <animated.div style={bounceIn}>
                            <Link
                                to="/gradingquiz"
                                className="w-full block bg-purple-500 hover:bg-purple-700 text-white p-6 text-center transition rounded-md"
                            >
                                <FiEdit className="mx-auto mb-2 text-4xl" />
                                Grading Quiz
                            </Link>
                        </animated.div>
                        <animated.div style={bounceIn}>
                            <Link
                                to="/chatBotPage"
                                className="block bg-indigo-500 hover:bg-indigo-700 text-white p-6 text-center transition rounded-md"
                            >
                                <FiMessageSquare className="mx-auto mb-2 text-4xl" />
                                Chat Bot
                            </Link>
                        </animated.div>
                    </div>
                </div>
            </animated.div>

            {/* ChatBot Modal */}
            {showChatBot && <ChatBotModal onClose={toggleChatBot} />}

        </div>
    );
};

export default ActivityPanel;
