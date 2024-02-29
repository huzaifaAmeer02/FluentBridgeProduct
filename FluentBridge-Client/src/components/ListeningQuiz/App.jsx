import "./App.css";
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
      question: "?",
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

  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  const handleStart = () => {
    setUsername("Guest");
  };



  return (
    <div className="app">
      <Link to="/listening" className="back-to-activities flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4">
        <IoIosArrowBack />
      </Link>
      {!username ? (
        <Start onStart={handleStart} />
      ) : (
        <>
          <div className="main">
            {timeOut || quizCompleted ? (
              <>
                <WinningPanel earned={earned} />
              </>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setTimeOut={setTimeOut} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                    onQuizComplete={() => setQuizCompleted(true)} // Pass callback to Trivia component
                  />
                </div>
              </>
            )}
          </div>
          {!timeOut && !quizCompleted && (
            <div className="pyramid">
              <ul className="moneyList">
                {moneyPyramid.map((m) => (
                  <li
                    className={
                      questionNumber === m.id ? "moneyListItem active" : "moneyListItem"
                    }
                    key={m.id}
                  >
                    <span className="moneyListItemNumber">{m.id}</span>
                    <span className="moneyListItemAmount">{m.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;