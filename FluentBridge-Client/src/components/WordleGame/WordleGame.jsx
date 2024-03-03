import React, { useState, useEffect } from "react";
import fiveLetterWords from "./fiveletterwords.json";

const WordleGame = () => {
    const wordList = ["clean",  "grape", "melon", "plain",  "ready", "clean", "lemon", "print", "peach", "berry", "mango"]; // New array list for random words

    const [word, setWord] = useState("");
    const [guess, setGuess] = useState("");
    const [feedback, setFeedback] = useState([]);
    const [attempts, setAttempts] = useState([]);
    const maxAttempts = 6;
    const [gameOver, setGameOver] = useState(false);
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const initialKeyColors = alphabet.reduce((acc, curr) => ({ ...acc, [curr]: 'bg-blue-500' }), {});
    const [keyColors, setKeyColors] = useState(initialKeyColors);

    useEffect(() => {
        chooseRandomWord();
    }, []);

    const chooseRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * wordList.length);
        setWord(wordList[randomIndex]);
    };

    const checkGuess = () => {
        if (!guess.match(/^[a-z]{5}$/)) {
            alert("Please enter a five-letter word.");
            return;
        }

        if (!fiveLetterWords.includes(guess)) {
            alert(`No word like "${guess}".`);
            return;
        }

        const feedbackArray = Array(5).fill("grey");
        for (let i = 0; i < 5; i++) {
            if (guess[i] === word[i]) {
                feedbackArray[i] = "green";
            } else if (word.includes(guess[i]) && word.indexOf(guess[i]) !== i) {
                feedbackArray[i] = "yellow";
            }
        }
        setFeedback((prevFeedback) => [...prevFeedback, feedbackArray]);
        setAttempts((prevAttempts) => [...prevAttempts, guess]);
        setGuess("");
        if (guess === word || attempts.length +1 >= maxAttempts) {
            setGameOver(true);
        }
    };

    const handleInputChange = (e) => {
        setGuess(e.target.value.toLowerCase().slice(0, 5));
    };

    const updateKeyColors = () => {
        const newKeyColors = { ...initialKeyColors }; // Reset key colors to initial state
    
        for (let attemptIndex = 0; attemptIndex < attempts.length; attemptIndex++) {
            const currentGuess = attempts[attemptIndex];
            const currentFeedback = feedback[attemptIndex];
    
            for (let i = 0; i < 5; i++) {
                const guessedLetter = currentGuess[i];
                if (currentFeedback[i] === 'green' && newKeyColors[guessedLetter] !== 'bg-green-500') {
                    newKeyColors[guessedLetter] = 'bg-green-500'; // Change to green if not already green
                } else if (currentFeedback[i] === 'yellow' && newKeyColors[guessedLetter] !== 'bg-green-500') {
                    newKeyColors[guessedLetter] = 'bg-yellow-500'; // Change to yellow if not green
                } else if (!word.includes(guessedLetter)) {
                    newKeyColors[guessedLetter] = 'bg-gray-500'; // Set incorrect guesses to gray
                }
            }
        }
    
        setKeyColors(newKeyColors);
    };
    
    
    

    useEffect(() => {
        updateKeyColors();
    }, [feedback]); 

    const resetGame = () => {
        setGuess("");
        setFeedback([]);
        setAttempts([]);
        setGameOver(false);
        chooseRandomWord();
        setKeyColors(initialKeyColors); // Reset key colors to initial state
    };

    return (
        <div className="text-center">
            <h2 className="text-5xl text-white font-bold mt-40 mb-4">Wordle Game</h2>
            {feedback.map((feedbackArray, attemptIndex) => (
                <div key={attemptIndex} className="flex justify-center mb-4">
                    {feedbackArray.map((color, letterIndex) => (
                        <div key={letterIndex} className={`h-12 w-12 rounded-full flex items-center justify-center mx-1 ${color === 'green' ? 'bg-green-500' : color === 'yellow' ? 'bg-yellow-500' : 'bg-gray-500'}`}>
                            {attempts[attemptIndex][letterIndex]}
                        </div>
                    ))}
                </div>
            ))}

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
            <div className="flex flex-wrap justify-center my-4 gap-y-4">
                    {alphabet.map((letter) => (
                        <button
                            key={letter}
                            onClick={() => setGuess(guess + letter)}
                            disabled={guess.length === 5 || guess.includes(letter) || gameOver}
                            className={`py-2 px-4 font-semibold rounded mx-1 ${keyColors[letter]}`}
                        >
                            {letter}
                        </button>
                    ))}
                </div>
            <div className="text-xl font-semibold mb-4">
                Remaining attempts: {maxAttempts - attempts.length}
            </div>
            {gameOver && (
                <button
                    onClick={resetGame}
                    className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded"
                >
                    Play Again
                </button>
            )}
            <div className="my-8">
                <p className="text-white">========================================================</p>
                <p className="text-white text-3xl">Instructions</p>
                <p>A green circle indicates that a letter is correct and in the right position. <br />
                    A yellow circle indicates that a letter is correct but in the wrong position. <br/>
                    A gray circle indicates that a letter is not in the word.</p>
            </div>
        </div>
    );
};

export default WordleGame;
