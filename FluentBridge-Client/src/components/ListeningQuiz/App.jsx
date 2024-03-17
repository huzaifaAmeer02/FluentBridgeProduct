import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import WinningPanel from "./components/WinningPanel";
import { IoIosArrowBack } from "react-icons/io";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");
  const [quizCompleted, setQuizCompleted] = useState(false);

  const data = [
    {
      id: 1,
      question: "How is William feeling today?",
      answers: [
        {
          text: "Great",
          correct: false,
        },
        {
          text: "Okay",
          correct: true,
        },
        {
          text: "Fantastic",
          correct: false,
        },
        {
          text: "Wonderful",
          correct: false,
        },
      ],
    },

    {
      id: 2,
      question: "What is the main reason for William's discomfort?",
      answers: [
        {
          text: "Back pain",
          correct: true,
        },
        {
          text: "Stomachache",
          correct: false,
        },
        {
          text: "Headache",
          correct: false,
        },
        {
          text: "Hip pain",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Why does William have back pain?",
      answers: [
        {
          text: "Unknown cause",
          correct: false,
        },
        {
          text: "Running injury",
          correct: false,
        },
        {
          text: " Car accident",
          correct: false,
        },
        {
          text: "Bike accident",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Where specifically does William feel the pain in his back?",
      answers: [
        {
          text: "Upper back",
          correct: false,
        },
        {
          text: "Middle back",
          correct: false,
        },
        {
          text: "Lower back",
          correct: true,
        },
        {
          text: "Entire back",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Where specifically does William feel the pain in his back?",
      answers: [
        {
          text: "Upper back",
          correct: false,
        },
        {
          text: "Middle bachhk",
          correct: false,
        },
        {
          text: "Lower back",
          correct: true,
        },
        {
          text: "Entire back",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Where specifically does William feel the pain in his back?",
      answers: [
        {
          text: "Upper back",
          correct: false,
        },
        {
          text: "Middle back",
          correct: false,
        },
        {
          text: "Lower back",
          correct: true,
        },
        {
          text: "Entire back",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Where specifically does William feel the pain in his back?",
      answers: [
        {
          text: "Upper back",
          correct: false,
        },
        {
          text: "Middle back",
          correct: false,
        },
        {
          text: "Lower back",
          correct: true,
        },
        {
          text: "Entire back",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Where specifically does William feel the pain in his back?",
      answers: [
        {
          text: "Upper back",
          correct: false,
        },
        {
          text: "Middle back",
          correct: false,
        },
        {
          text: "Lower back",
          correct: true,
        },
        {
          text: "Entire back",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Where specifically does William feel the pain in his back?",
      answers: [
        {
          text: "Upper back",
          correct: false,
        },
        {
          text: "Middle back",
          correct: false,
        },
        {
          text: "Lower back",
          correct: true,
        },
        {
          text: "Entire back",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Where specifically does William feel the pain in his back?",
      answers: [
        {
          text: "Upper back",
          correct: false,
        },
        {
          text: "Middle back",
          correct: false,
        },
        {
          text: "Lower back",
          correct: true,
        },
        {
          text: "Entire back",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Where specifically does William feel the pain in his back?",
      answers: [
        {
          text: "Upper back",
          correct: false,
        },
        {
          text: "Middle back",
          correct: false,
        },
        {
          text: "Lower back",
          correct: true,
        },
        {
          text: "Entire back",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Where specifically does William feel the pain in his back?",
      answers: [
        {
          text: "Upper back",
          correct: false,
        },
        {
          text: "Middle back",
          correct: false,
        },
        {
          text: "Lower back",
          correct: true,
        },
        {
          text: "Entire back",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Where specifically does William feel the pain in his back?",
      answers: [
        {
          text: "Upper back",
          correct: false,
        },
        {
          text: "Middle back",
          correct: false,
        },
        {
          text: "Lower back",
          correct: true,
        },
        {
          text: "Entire back",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Where specifically does William feel the pain in his back?",
      answers: [
        {
          text: "Upper back",
          correct: false,
        },
        {
          text: "Middle back",
          correct: false,
        },
        {
          text: "Lower back",
          correct: true,
        },
        {
          text: "Entire back",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Where specifically does William feel the pain in his back?",
      answers: [
        {
          text: "Upper back",
          correct: false,
        },
        {
          text: "Middle back",
          correct: false,
        },
        {
          text: "Lower back",
          correct: true,
        },
        {
          text: "Entire back",
          correct: false,
        },
      ],
    },

  ];

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
    if (questionNumber > 1 && questionNumber <= data.length) {
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
    }
  }, [questionNumber, moneyPyramid, data.length]);

  // Handle completing all questions
  useEffect(() => {
    if (questionNumber > data.length) {
      setQuizCompleted(true);
    }
  }, [questionNumber, data.length]);

  const handleStart = () => {
    setUsername("Guest");
  };

  return (
      <div className="app bg-gradient-to-b from-purple-800 to-purple-900 min-h-screen flex justify-center items-center text-white">
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
                      <div className="top w-auto max-w-2xl mt-10 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full shadow-lg p-6 mb-8">
                        <Timer setTimeOut={setTimeOut} questionNumber={questionNumber} />
                      </div>
                      <div className="trivia-container flex flex-col items-center justify-center mb-10">
                        <h2 className="text-white font-bold mb-4">Select the Correct Option</h2>
                        <div className="trivia bg-purple-600 rounded-lg p-4">
                          <Trivia
                              data={data}
                              questionNumber={questionNumber}
                              setQuestionNumber={setQuestionNumber}
                              setTimeOut={setTimeOut}
                              onQuizComplete={() => setQuizCompleted(true)}
                          />
                        </div>
                      </div>
                      {!timeOut && !quizCompleted && (
                          <div className="pyramid-container flex flex-col items-center justify-center mb-10">
                            <h2 className="text-white font-bold mb-4">See Your Progress</h2>
                            <div className="pyramid bg-purple-600 rounded-lg p-4 flex">
                              <ul className="moneyList">
                                {moneyPyramid.map((m) => (
                                    <li
                                        className={
                                          questionNumber === m.id
                                              ? "moneyListItem text-yellow-500 font-bold p-4 bg-purple-950 rounded-3xl"
                                              : "moneyListItem text-white p-4"
                                        }
                                        key={m.id}
                                    >
                                      <span className="moneyListItemNumber">[ {m.id} ]</span>
                                      <span className="moneyListItemAmount">{m.amount} Points</span>
                                    </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                      )}
                    </>
                )}
              </div>
            </>
        )}
      </div>
  );
}

export default App;