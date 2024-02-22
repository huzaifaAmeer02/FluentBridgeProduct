import React, { useState, useEffect } from "react";

const WORDS = {
    beginner: [
        "React", "HTML", "CSS", "JSX", "Function",
        "Component", "State", "Props", "Event", "DOM",
    ],
    intermediate: [
        "Redux", "Router", "API", "Lifecycle", "Middleware",
        "Hook", "Context", "Promise", "Async", "Callback",
    ],
    advanced: [
        "Webpack", "Babel", "TypeScript", "Node.js", "Express",
        "GraphQL", "REST", "Authentication", "WebSocket", "Docker",
    ],
};

const GamePage = () => {
    const [isPlayOn, setIsPlayOn] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [correctWord, setCorrectWord] = useState("");
    const [scrambledWord, setScrambledWord] = useState("");
    const [message, setMessage] = useState("");
    const [level, setLevel] = useState("");
    const [score, setScore] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value.toUpperCase());
    };

    const handleButtonClick = () => {
        if (inputValue !== "") {
            if (correctWord === inputValue) {
                setScore(score + 1);

                if (currentWordIndex < 9) {
                    moveNextWord();
                } else {
                    setTimeout(handleGameCompletion, 1000);
                }
            } else {
                handleWrongAnswer();
            }
        }
    };

    const moveNextWord = () => {
        setCurrentWordIndex(currentWordIndex + 1);
        const nextCorrectWord = selectWord(level);
        setCorrectWord(nextCorrectWord);
        setScrambledWord(constructScrambledWord(nextCorrectWord));
        setInputValue("");
        setMessage("");
    };

    const handleWrongAnswer = () => {
        setMessage("Wrong Answer");
        setInputValue("");
    };

    const handleGameCompletion = () => {
        setShowPopup(true);
        setIsPlayOn(false);
    };

    const selectWord = (selectedLevel) => {
        const words = WORDS[selectedLevel];
        return words[currentWordIndex];
    };

    const constructScrambledWord = (word) => {
        const shuffledArray = word.split("").sort(() => Math.random() - 0.5);
        return shuffledArray.join("");
    };

    useEffect(() => {
        let clearMessage;
        if (message === "Wrong Answer") {
            clearMessage = setTimeout(() => setMessage(""), 800);
        }

        return () => {
            if (clearMessage) {
                clearTimeout(clearMessage);
            }
        };
    }, [message]);

    const renderPopup = () => {
        return (
            <div className="popup-card bg-white p-6 rounded-md shadow-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                <h2 className="text-xl font-semibold mb-4">Game Over!</h2>
                <p className="text-lg mb-2">Your Score: {score}/10</p>
                <p className="text-lg mb-4">Success Percentage: {(score / 10) * 100}%</p>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => {
                        setShowPopup(false);
                        setScore(0);
                        setCurrentWordIndex(0);
                    }}
                >
                    Home
                </button>
            </div>
        );
    };

    const handleStartGame = (selectedLevel) => {
        setLevel(selectedLevel);
        setIsPlayOn(true);
        setScore(0);
        setCurrentWordIndex(0);

        setCorrectWord((prevCorrectWord) => {
            const newCorrectWord = selectWord(selectedLevel);
            setScrambledWord(constructScrambledWord(newCorrectWord));
            return newCorrectWord;
        });
    };

    return (
        <div className="word_scramble bg-blue-500 text-white w-full">
            {showPopup && renderPopup()}

            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6">
                Word Scramble
            </h1>
            <div className="content flex flex-col items-center justify-center bg-gray-200 p-8 md:p-12 w-full relative">
                {isPlayOn ? (
                    <>
                        <div className="board flex gap-2 items-center justify-center mb-4">
                            {correctWord.split("").map((el, i) => (
                                <span
                                    key={`${el}_${i}`}
                                    className="square_bg bg-gray-300 w-10 h-14 text-2xl md:text-3xl flex items-center justify-center uppercase font-semibold"
                                >
                                    {inputValue[i]}
                                </span>
                            ))}
                        </div>
                        <p className="scrambled_word text-lg md:text-xl font-semibold text-black">
                            {scrambledWord}
                        </p>
                        <div className="field flex flex-col md:flex-row items-center justify-center w-full md:w-2/3 mx-auto mt-4">
                            <input
                                type="text"
                                onChange={handleInputChange}
                                value={inputValue}
                                placeholder="Enter your answer"
                                className="w-full md:w-2/3 p-2 md:p-3 border border-gray-400 rounded"
                            />
                            <button
                                type="button"
                                onClick={handleButtonClick}
                                className="w-full md:w-1/3 p-2 md:p-3 bg-blue-500 text-white rounded mt-4 md:mt-0 md:ml-4"
                            >
                                Enter
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <p className="text-lg md:text-xl font-semibold mb-4">
                            Select Your Level:
                        </p>
                        <div className="level-buttons flex justify-center items-center">
                            <button
                                className="level-button bg-green-500 text-white px-4 py-2 rounded mr-4"
                                onClick={() => handleStartGame("beginner")}
                            >
                                Beginner
                            </button>
                            <button
                                className="level-button bg-yellow-500 text-white px-4 py-2 rounded mr-4"
                                onClick={() => handleStartGame("intermediate")}
                            >
                                Intermediate
                            </button>
                            <button
                                className="level-button bg-red-500 text-white px-4 py-2 rounded"
                                onClick={() => handleStartGame("advanced")}
                            >
                                Advanced
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default GamePage;
