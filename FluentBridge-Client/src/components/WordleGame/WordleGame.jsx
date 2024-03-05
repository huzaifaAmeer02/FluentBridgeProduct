import React, { useState, useEffect } from "react";
import fiveLetterWords from "./fiveletterwords.json";
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Confetti from "./Confetti.jsx";


const WordleGame = () => {
    const wordList = ["clean",  "grape", "melon", "plain",  "ready",  "lemon", "print", "peach", "berry", "mango"]; // New array list for random words

    const [word, setWord] = useState("");
    const [guess, setGuess] = useState("");
    const [feedback, setFeedback] = useState([]);
    const [attempts, setAttempts] = useState([]);
    const maxAttempts = 6;
    const [gameOver, setGameOver] = useState(false);
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const initialKeyColors = alphabet.reduce((acc, curr) => ({ ...acc, [curr]: 'bg-blue-500' }), {});
    const [keyColors, setKeyColors] = useState(initialKeyColors);
    const [congratulationsMessage, setCongratulationsMessage] = useState("");
    const [showConfetti, setShowConfetti] = useState(false); 

    useEffect(() => {
        chooseRandomWord();
    }, []);

    const chooseRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * wordList.length);
        setWord(wordList[randomIndex]);
        setShowConfetti(true);
    };

    const displayCongratulations = () => {
        const message = "Congratulations! You guessed the word!";
        setCongratulationsMessage(message); // Update state variable with congratulations message
        setShowConfetti(true);
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
        if (guess === word) {
            displayCongratulations(); // Call function to display congratulations message
            return;
        }
        if (attempts.length + 1 >= maxAttempts) {
            // Maximum attempts reached, game over
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
        setKeyColors(initialKeyColors);
        setCongratulationsMessage("");
    };

    return (
        <>
        <div className="min-h-screen bg-cover bg-center bg-no-repeat p-0 my-[-50px]" style={{ backgroundImage: 'url("/src/assets/wordlebg1.jpg")'}}>
            <Link to="/vocabulary-activity" className="back-to-vocabulary-activity flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4">
                <IoIosArrowBack />
            </Link>
        <div style={{ margin: '50px', padding:'80px'}}>
        <div className="container px-10  mx-auto flex flex-col items-center bg-black-900 bg-opacity-80 rounded-lg p-4 transition duration-300 hover:bg-opacity-90 text-center max-w-3xl">
            <h2 className="text-5xl text-white font-bold pt-10 pb-4 mb-4">Wordle Game</h2>
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
                    placeholder="Enter your guess"
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

            {congratulationsMessage && (<>
                <div className="congratulations-message text-white">
                    {congratulationsMessage}
                </div>
                <Confetti numberOfPieces={200} />
                </>
            )}

            {gameOver && (
                <div className="text-xl text-white font-semibold mb-4">
                    {console.log("Guess:", guess, "Word:", word)}
                    {guess.trim().toLowerCase() === word.trim().toLowerCase()
                        ? "Congratulations! You guessed the word!"
                        : `Game over! The word was ${word}`}
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
            <div className="text-xl text-white font-semibold mb-4">
                Remaining attempts: {maxAttempts - attempts.length}
            </div>
            {congratulationsMessage && (
                <button
                    onClick={resetGame}
                    className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded"
                >
                    Play Again
                </button>
            )}
            {gameOver && (
                <button
                    onClick={resetGame}
                    className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded"
                >
                    Play Again
                </button>
            )}
        </div>
        </div>
        </div>
        </>
        
    );
};

export default WordleGame;
