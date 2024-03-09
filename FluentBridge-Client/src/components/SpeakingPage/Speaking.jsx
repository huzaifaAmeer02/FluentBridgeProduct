import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdMic } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import speakingBg from "../../assets/speaking-bg.jpg";
import { BsFillMicFill } from "react-icons/bs"; // Added mic icon

function Speaking() {
    const [fluencyLevel, setFluencyLevel] = useState("");
    const [feedback, setFeedback] = useState("");
    const [isRecording, setIsRecording] = useState(false);

    const startRecording = () => {
        // Add your logic to start recording here
        console.log("Recording started...");
        setIsRecording(true);
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen" style={{ backgroundImage: `url(${speakingBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute left-4 top-4">
                <Link
                    to="/activities"
                    className="flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white"
                >
                    <IoIosArrowBack />
                </Link>
            </div>

            <div className="mx-10 px-14 py-16 bg-white bg-opacity-60 rounded-2xl my-8 flex flex-col items-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Measure your fluency Level with Us</h1>

                {/* Voice Recording Button */}
                <div className="flex justify-center">
                    <button
                        onClick={startRecording}
                        disabled={isRecording} // Disable button while recording
                        className={`bg-gray-400 hover:bg-gray-700 text-black-100 font-bold py-2 px-4 rounded-lg mb-4 flex items-center ${
                            isRecording && "opacity-50 cursor-not-allowed"
                        }`}
                    >
                        <MdMic className="mr-2" />
                        Start Recording
                    </button>
                </div>

                {/* Fields for Fluency Level and Feedback */}
                <div className="mb-4 w-full">
                    <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="fluencyLevel">
                        Fluency Level:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fluencyLevel"
                        type="text"
                        placeholder="Fluency Level"
                        value={fluencyLevel}
                        disabled // Disable input field
                    />
                </div>

                <div className="mb-8 w-full">
                    <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="feedback">
                        Feedback:
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="feedback"
                        placeholder="Your feedback..."
                        value={feedback}
                        disabled // Disable textarea
                    />
                </div>
            </div>
            {/* Button for Try Pronounce */}
            
            <div className="absolute bottom-4 right-4 flex items-center"> 
            <h2 className="mr-4 text-white">Practice Here</h2>
                <Link to="/trypronounce">
                    <button className="bg-gray-100 hover:bg-gray-400 text-gray-700 font-bold py-4 px-4 rounded-full flex items-center justify-center">
                        <BsFillMicFill/>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Speaking;
