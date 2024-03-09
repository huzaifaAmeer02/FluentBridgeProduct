import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
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
            <Link
                to="/activities"
                className="back-to-activities flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4"
            >
                <IoIosArrowBack />
            </Link>

            <div className="mx-8 px-14 py-16 bg-white bg-opacity-60 rounded-2xl my-8 ">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Measure your fluency Level with Us</h1>

                {/* Voice Recording Button */}
                <button
                    onClick={startRecording}
                    className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg mb-4"
                >
                    Start Recording
                </button>

                {/* Fields for Fluency Level and Feedback */}
                <div className="mb-4">
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

                <div className="mb-8">
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
