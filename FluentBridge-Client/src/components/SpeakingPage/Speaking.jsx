import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdMic } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import speakingBg from "../../assets/speaking-bg.jpg";

function Speaking() {
    const startRecording = () => {
        // Add your logic to start recording here
        console.log("Recording started...");
    };

    return (
        <div
            className="h-screen bg-cover bg-center flex flex-col justify-center"
            style={{ backgroundImage: `url(${speakingBg})` }}
        >
            <div className="absolute left-4 top-4">
                <Link
                    to="/activities"
                    className="flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white"
                >
                    <IoIosArrowBack />
                </Link>
            </div>

            <div className="mx-8 px-14 py-16 bg-white bg-opacity-60 rounded-2xl my-8 flex flex-col items-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Measure your fluency Level with Us</h1>

                {/* Voice Recording Button */}
                <div className="flex justify-between">
                    <button
                        onClick={startRecording}
                        className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg mb-4 flex items-center mr-10"
                    >
                        <MdMic className="mr-2" />
                        Start Recording
                    </button>

                    {/* Button for Practice Pronunciation */}
                    <Link
                        to="/practice-pronunciation"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mb-4 flex items-center"
                    >
                        Practice Pronunciation <RiArrowRightSLine className="ml-2" />
                    </Link>
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
                    />
                </div>
            </div>
        </div>
    );
}

export default Speaking;
