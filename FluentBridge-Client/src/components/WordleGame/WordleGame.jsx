import React, { useState, useEffect } from "react";

const WordleGame = ({ word }) => {
    const [guess, setGuess] = useState("");
    const [feedback, setFeedback] = useState(Array(5).fill(""));
    const [attempts, setAttempts] = useState(0);
    const maxAttempts = 6;
    const [gameOver, setGameOver] = useState(false);
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    useEffect(() => {
        if (guess.length === 5) checkGuess();
    }, [guess]);

    const checkGuess = () => {
        const feedbackArray = Array(5).fill("");
        for (let i = 0; i < 5; i++) {
            if (guess[i] === word[i]) {
                feedbackArray[i] = "green";
            } else if (word.includes(guess[i])) {
                feedbackArray[i] = "yellow";
            } else {
                feedbackArray[i] = "grey";
            }
        }
        setFeedback(feedbackArray);
        setAttempts(attempts + 1);
        if (guess === word || attempts >= maxAttempts) {
            setGameOver(true);
        }
    };

    const handleInputChange = (e) => {
        setGuess(e.target.value.toLowerCase().slice(0, 5));
    };

    const resetGame = () => {
        setGuess("");
        setFeedback(Array(5).fill(""));
        setAttempts(0);
        setGameOver(false);
    };

    const renderTile = (index, color) => {
        return (
            <div
                key={index}
                className={`h-12 w-12 rounded-full flex items-center justify-center mx-1 ${
                    color === "green"
                        ? "bg-green-500"
                        : color === "yellow"
                        ? "bg-yellow-500"
                        : "bg-gray-400"
                }`}
            >
                {color !== "grey" && guess[index]}
            </div>
        );
    };

    return (
        <div className="text-center ">
            <h2 className="text-3xl font-bold mt-40 mb-4">Wordle Game</h2>
            <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }, (_, i) =>
                    renderTile(i, feedback[i])
                )}
            </div>
            <div className="flex justify-center mb-4">
                <input
                    type="text"
                    value={guess}
                    onChange={handleInputChange}
                    maxLength={5}
                    className="p-2 mr-2 text-center border border-gray-400"
                />
                <button
                    onClick={checkGuess}
                    disabled={guess.length !== 5 || gameOver}
                    className="py-2 px-4 bg-blue-500 text-white font-semibold rounded"
                >
                    Guess
                </button>
            </div>
            {gameOver && (
                <div className="text-xl font-semibold mb-4">
                    {guess === word
                        ? "Congratulations! You guessed the word!"
                        : "Game over! The word was " + word}
                </div>
            )}
            <div className="flex justify-center mb-4">
                {alphabet.map((letter) => (
                    <button
                        key={letter}
                        onClick={() => setGuess(guess + letter)}
                        disabled={guess.length === 5 || guess.includes(letter) || gameOver}
                        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded mx-1"
                    >
                        {letter}
                    </button>
                ))}
            </div>
            {gameOver && (
                <button
                    onClick={resetGame}
                    className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded"
                >
                    Play Again
                </button>
            )}
        </div>
    );
};

export default WordleGame;
