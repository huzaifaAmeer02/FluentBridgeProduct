// App component
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import WinningPanel from "./components/WinningPanel";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";

function App() {
    const [username, setUsername] = useState(null);
    const [timeOut, setTimeOut] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [earned, setEarned] = useState("$ 0");
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showPyramid, setShowPyramid] = useState(false);

    // App.js
    useEffect(() => {
        axios.get("http://localhost:4000/api/v1/question/get_questions", {
            params: {
                jobTitle: "Store Keeper" // Change the job title dynamically based on your logic
            }
        })
            .then(response => {
                setQuestions(response.data.questions);
                console.log("Fetched questions:", response.data.questions);
                setLoading(false);
            })
            .catch(error => {
                console.log("Error fetching questions:", error);
                setLoading(false);
            });
    }, []);

    const moneyPyramid = useMemo(
        () => [
            { id: 1, amount: " 100" },
            { id: 2, amount: " 200" },
            { id: 3, amount: " 300" },
            { id: 4, amount: " 500" },
            { id: 5, amount: " 1 000" },
            { id: 6, amount: " 2 000" },
            { id: 7, amount: " 4 000" },
            { id: 8, amount: " 8 000" },
            { id: 9, amount: " 16 000" },
            { id: 10, amount: " 32 000" },
            { id: 11, amount: " 64 000" },
            { id: 12, amount: " 125 000" },
            { id: 13, amount: " 250 000" },
            { id: 14, amount: " 500 000" },
            { id: 15, amount: " 1000 000" },
        ].reverse(),
        []
    );
    useEffect(() => {
        if (questionNumber > 1 && questionNumber <= questions.length) {
            const foundItem = moneyPyramid.find((m) => m.id === questionNumber);
            if (foundItem) {
                setEarned(foundItem.amount);
            } else {
                // Handle the case where the item is not found
                console.log("Item not found for question number:", questionNumber);
            }
        }
    }, [questionNumber, moneyPyramid, questions.length]);

    /*useEffect(() => {
        if (questionNumber > questions.length) {
            setQuizCompleted(true);
        }
    }, [questionNumber, questions.length]);  /!*when i put this it not returns the quiz*!/*/

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleStart = () => {
        setUsername("Guest");
    };

    return (
        <div className="app bg-gradient-to-b from-[#230F2E] to-purple-950 min-h-screen flex justify-center items-center text-white relative">
            <Link
                to="/listening"
                className="back-to-activities flex items-center text-yellow-500 font-bold hover:text-red-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4"
            >
                <IoIosArrowBack />
            </Link>
            {!username ? (
                <Start onStart={handleStart} />
            ) : (
                <>
                    <div className="main flex flex-col items-center">
                        {timeOut || quizCompleted ? (
                            <WinningPanel earned={earned} />
                        ) : (
                            <>
                                <div className={`top w-auto max-w-2xl mt-10 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full shadow-lg p-6 mb-8 sm:mr-0 ${showPyramid ? 'sm:mr-80' : ''}`}>
                                    <Timer setTimeOut={setTimeOut} questionNumber={questionNumber} />
                                </div>
                                <div className={`trivia-container flex flex-col items-center justify-center mb-10 sm:mr-0 ${showPyramid ? 'sm:mr-80' : ''}`}>
                                    <h2 className="text-white font-bold mb-4">Select the Correct Option</h2>
                                    <div className="trivia bg-purple-600 rounded-lg p-6">
                                        <Trivia
                                            data={questions}
                                            questionNumber={questionNumber}
                                            setQuestionNumber={setQuestionNumber}
                                            setTimeOut={setTimeOut}
                                            onQuizComplete={() => setQuizCompleted(true)}
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    {showPyramid && (
                        <div className="pyramid-container absolute right-4 top-0 h-full sm:h-80vh w-full sm:w-80 flex flex-col items-center justify-center mb-10">
                            <div className="pyramid bg-purple-600 p-4 h-full w-full sm:w-auto flex flex-col items-center justify-center">
                                <h2 className="text-white font-bold mb-1">Level Up</h2>
                                <ul className="moneyList" style={{ margin: 0, padding: 0 }}>
                                    {moneyPyramid.map((m) => (
                                        <li
                                            className={
                                                questionNumber === m._id
                                                    ? "moneyListItem text-yellow-500 font-bold p-4 bg-purple-950 rounded-3xl mb-2 sm:mb-3 lg:mb-4"
                                                    : "moneyListItem text-white p-4 mb-2 sm:mb-3 lg:mb-4"
                                            }
                                            key={m._id}
                                            style={{ margin: 0, padding: 4 }}
                                        >
                                            <span className="moneyListItemNumber">[ {m._id} ]</span>
                                            <span className="moneyListItemAmount">{m.amount} Points</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                    <button
                        className="pyramid-toggle-btn absolute left-4 top-4 text-white py-2 px-4 rounded-lg bg-gradient-to-r from-purple-900 to-purple-700 hover:from-purple-800 hover:to-purple-600 hover:text-black transition duration-300 ease-in-out"
                        onClick={() => setShowPyramid(!showPyramid)}
                    >
                        {showPyramid ? "Hide" : "Your Progress"}
                    </button>
                </>
            )}
        </div>
    );
}

export default App;
