import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import ChatBotModal from "../ChatBotModal/ChatBotModal.jsx";
import { FiMessageSquare, FiMic, FiHeadphones, FiEdit, FiBook } from "react-icons/fi"; // Importing the necessary icons
import rightBack from "../../assets/right-background.jpg";

const ActivityPanel = () => {
    const [showChatBot, setShowChatBot] = useState(false);

    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 800 },
    });
// added a comment to checkout git features
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
        <div className="relative">
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
                style={{ ...slideIn, background: "rgba(255, 255, 255, 0.8)" }}
                className="md:w-2/3 flex-shrink-0 w-full p-4 overflow-y-auto"
            >
                <section className="hero">
                    <div className="flex flex-col md:flex-row p-4">
                        <div className="md:w-40% mb-4 md:mb-0 md:pr-4">
                            <h2 className="text-2xl font-bold mb-2 md:mb-4 text-center mt-2">Select Your Activity</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Adjust grid-cols to display 3 activities in a row on larger screens */}
                                <animated.div style={bounceIn} className="w-full h-50vh">
                                    <Link
                                        to="#"
                                        className="block bg-blue-500 hover:bg-blue-700 text-white p-6 text-center transition h-full rounded-md"
                                    >
                                        <FiMic className="mx-auto mb-2 text-4xl" /> {/* Icon for Speaking */}
                                        Speaking
                                    </Link>
                                </animated.div>
                                <animated.div style={bounceIn} className="w-full h-50vh">
                                    <Link
                                        to="/listening"
                                        className="block bg-green-500 hover:bg-green-700 text-white p-6 text-center transition h-full rounded-md"
                                    >
                                        <FiHeadphones className="mx-auto mb-2 text-4xl" /> {/* Icon for Listening */}
                                        Listening
                                    </Link>
                                </animated.div>
                                <animated.div style={bounceIn} className="w-full h-50vh">
                                    <Link
                                        to="#"
                                        className="block bg-yellow-500 hover:bg-yellow-700 text-white p-6 text-center transition h-full rounded-md"
                                    >
                                        <FiEdit className="mx-auto mb-2 text-4xl" /> {/* Icon for Writing */}
                                        Writing
                                    </Link>
                                </animated.div>
                                <animated.div style={bounceIn} className="w-full h-50vh">
                                    <Link
                                        to="/vocabpanel"
                                        className="block bg-red-500 hover:bg-brown-700 text-white p-6 text-center transition h-full rounded-md"
                                    >
                                        <FiBook className="mx-auto mb-2 text-4xl" /> {/* Icon for Vocabulary */}
                                        Vocabulary
                                    </Link>
                                </animated.div>
                                <animated.div style={bounceIn} className="w-full h-50vh">
                                    <Link
                                        to="/gradingquiz"
                                        className="w-full block bg-purple-500 hover:bg-purple-700 text-white p-6 text-center transition h-full rounded-md"
                                    >
                                        <FiEdit className="mx-auto mb-2 text-4xl" /> {/* Icon for Grading Quiz */}
                                        Grading Quiz
                                    </Link>
                                </animated.div>
                                <animated.div style={bounceIn} className="w-full h-50vh">
                                    <Link
                                        to="/chatbotactivity"
                                        className="block bg-indigo-500 hover:bg-indigo-700 text-white p-6 text-center transition h-full rounded-md"
                                    >
                                        <FiMessageSquare className="mx-auto mb-2 text-4xl" /> {/* Icon for Chatbot Activity */}
                                        Chatbot Activity
                                    </Link>
                                </animated.div>
                            </div>
                        </div>
                        <animated.div style={fadeIn} className="flex-grow">
                            {/* Content in the middle of the panel */}
                        </animated.div>
                    </div>
                </section>
            </animated.div>
            {/* Empty area with animated background */}
            <animated.div
                className="w-full h-full bg-cover bg-center"
                style={useSpring({
                    display: "none", // Initially hide background image
                    "@media (min-width: 768px)": {
                        display: "block", // Display background image for screens larger than 768px
                    },
                })}
            />

            {/* ChatBot Modal */}
            {showChatBot && <ChatBotModal onClose={toggleChatBot} />}
        </div>
    );
};

export default ActivityPanel;
