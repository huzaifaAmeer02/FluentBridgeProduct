import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import VocabPanel from "../VocabPanel/vocabPanel.jsx";
import imageBG from "../../assets/buttonBG.jpg";
import ChatBotModal from "../ChatBotModal/ChatBotModal.jsx";
import { FiMessageSquare } from "react-icons/fi"; // Importing the Message Square icon from react-icons

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

    const chatBotButtonStyle = {
        backgroundColor: "#023C41",
    };

    const panelStyle = {
        backgroundImage: `url(${imageBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const toggleChatBot = () => {
        setShowChatBot(!showChatBot);
    };

    return (
        <div className="relative">
            {/* ChatBot Button */}
            <animated.div
                className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-700 text-white p-3 text-center transition rounded-full z-10"
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
                            <h2 className="text-lg font-bold mb-2 md:mb-4 text-center mt-4">Learner Activity Panel</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <animated.div style={bounceIn} className="w-full h-50vh">
                                    <Link
                                        to="#"
                                        className="block bg-blue-500 hover:bg-blue-700 text-white p-6 text-center transition h-full rounded-md"
                                    >
                                        Speaking
                                    </Link>
                                </animated.div>
                                <animated.div style={bounceIn} className="w-full h-50vh">
                                    <Link
                                        to="/listening"
                                        className="block bg-green-500 hover:bg-green-700 text-white p-6 text-center transition h-full rounded-md"
                                    >
                                        Listening
                                    </Link>
                                </animated.div>
                                <animated.div style={bounceIn} className="w-full h-50vh">
                                    <Link
                                        to="#"
                                        className="block bg-yellow-500 hover:bg-yellow-700 text-white p-6 text-center transition h-full rounded-md"
                                    >
                                        Writing
                                    </Link>
                                </animated.div>
                                <animated.div style={bounceIn} className="w-full h-50vh">
                                    <Link
                                        to="#"
                                        className="block bg-red-500 hover:bg-red-700 text-white p-6 text-center transition h-full rounded-md"
                                    >
                                        Reading
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

            {/* Vocab Panel */}
            <VocabPanel className="md:flex-grow overflow-y-auto" />

            {/* ChatBot Modal */}
            {showChatBot && <ChatBotModal onClose={toggleChatBot} />}
        </div>
    );
};

export default ActivityPanel;
