import React, { useState, useEffect,useRef } from "react";
//import fiveLetterWords from "./fiveletterwords.json";
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Confetti from "./Confetti.jsx";
import axios from 'axios';
import Lottie from "lottie-react";
import animationData from "../../assets/wordle.json";



const WordleGame = () => {
    const verbList = ["clean", "print","dance","drink","write","plant", "study", "teach","fetch","sleep"];
    const nounList = ["grape", "melon", "lemon", "peach", "berry", "mango","chair", "house", "table", "clock", "shoes", "shirt","glove","phone","piano","beach"]; // List of fruits
    const adjectiveList = ["happy","silly","brave","proud","sharp","clean","small"];
    const adverbList = ["quick","sunny","clear","early","lucky","plain","ready"];
    

    const [word, setWord] = useState("");
    const [category, setCategory] = useState("");
    const [guess, setGuess] = useState("");
    const [feedback, setFeedback] = useState([]);
    const [attempts, setAttempts] = useState([]);
    const maxAttempts = 6;
    const [gameOver, setGameOver] = useState(false);
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const initialKeyColors = alphabet.reduce((acc, curr) => ({ ...acc, [curr]: 'bg-purple-400' }), {});
    const [keyColors, setKeyColors] = useState(initialKeyColors);
    const [congratulationsMessage, setCongratulationsMessage] = useState("");
    const [showConfetti, setShowConfetti] = useState(false); 
    const [showNotification, setShowNotification] = useState(false);
    

    useEffect(() => {
        chooseRandomWord();
    }, []);

    

    const chooseRandomWord = () => {
        setFeedback([]); // Reset feedback array
        setAttempts([]); // Reset attempts array
    
        const categories = ["verb", "noun", "adjective", "adverb"];
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        let randomWord = "";
        let wordList = [];
    
        switch (randomCategory) {
            case "verb":
                wordList = shuffleArray(verbList);
                setCategory("Verb");
                break;
            case "noun":
                wordList = shuffleArray(nounList);
                setCategory("noun");
                break;
            case "adjective":
                wordList = shuffleArray(adjectiveList);
                setCategory("adjective");
                break;
            case "adverb":
                wordList = shuffleArray(adverbList);
                setCategory("adverb");
                break;
        }
    
        randomWord = wordList[0]; // Select the first word after shuffling
        setWord(randomWord);
        setShowConfetti(true);
    };
    
    const shuffleArray = (array) => {
        // Fisher-Yates shuffle algorithm
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    

    const displayCongratulations = () => {
        const message = "Congratulations! You guessed the word!";
        setCongratulationsMessage(message); // Update state variable with congratulations message
        setShowConfetti(true);
    };
    

    const checkGuess = async () => {
        if (congratulationsMessage ) {
            return; // If the game is already over, do nothing
        }
    
        if (guess.length !== 5) {
            setShowNotification(true); // Display notification
            setTimeout(() => {
                setShowNotification(false); // Hide notification after 3 seconds
            }, 3000);
            return;
        }
    
        try {
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${guess}`);
            
            if (response.data && response.data.length > 0) {
                // Guessed word is valid
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
            } else {
                // Guessed word is not valid
                alert(`No word like "${guess}".`);
            }
        } catch (error) {
            // Handle errors
            alert(`No word like "${guess}".`);
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
        setShowNotification(false);
        chooseRandomWord();
        setKeyColors(initialKeyColors);
        setCongratulationsMessage("");
        updateKeyColors();
    };

    return (
        <div style={{ display: 'flex',   justifyContent: 'center', alignItems: 'center', zIndex: -1 }}>
        <div  style={{ display: 'flex', position: 'fixed', zIndex: -1, padding:2}}>
            <Lottie animationData={animationData} style={{ width:1800, height:900}} />
        </div>
        
            {/* Your existing JSX code */}
            <Link to="/vocabulary-activity" className="back-to-vocabulary-activity flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-10 top-10">
                <IoIosArrowBack />
            </Link>
            
        <div >
        {congratulationsMessage && (<>
                            <div className="congratulations-message text-white text-center display-fixed " style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 , fontSize: '1rem'}}>
                                {congratulationsMessage}
                            </div>
                            <Confetti numberOfPieces={200} />
                        </>
                        )}
            {/* Game content */}
            <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="container mx-auto flex flex-col items-center bg-black-900 bg-opacity-60 rounded-lg p-4 transition duration-300 hover:bg-opacity-80 text-center max-w-3xl">
                    <h2 className="text-4xl text-white font-bold pt-5 pb-2 mb-2">Wordle Game</h2>
                    
                        <div className="text-white mb-2">The clue is that this word is a 5-letter : {category}</div>
                        {feedback.map((feedbackArray, attemptIndex) => (
                            <div key={attemptIndex} className="flex justify-center mb-2">
                          {feedbackArray.map((color, letterIndex) => (
                                    <div key={letterIndex} className={`h-8 w-8 rounded-full flex items-center justify-center mx-0.5 ${color === 'green' ? 'bg-green-500' : color === 'yellow' ? 'bg-yellow-500' : 'bg-gray-500'}`}>
                                        {attempts[attemptIndex][letterIndex]}
                                    </div>
                                ))}
                            </div>
                        ))}

                        <div className="flex justify-center mb-2">
                            <input
                                type="text"
                                value={guess}
                                onChange={handleInputChange}
                                maxLength={5}
                                placeholder="Guess the word"
                                className="p-1 mr-1 text-center border border-gray-400"
                                style={{
                                    fontSize: '1rem', // Default font size
                                }}
                            />
                            <button
                                onClick={checkGuess}
                                disabled={ gameOver}
                                className="py-1 px-2 bg-purple-900 text-white font-semibold rounded"
                            >
                                Guess
                            </button>
                        </div>

                        {showNotification && (
                            <div className="text-red-500 text-sm mb-2">
                                Please enter a five-letter word.
                            </div>
                        )}

                        

                        {gameOver && (
                            <div className="text-sm text-white font-semibold mb-2">
                                {guess.trim().toLowerCase() === word.trim().toLowerCase()
                                    ? "Congratulations! You guessed the word!"
                                    : `Game over! The word was ${word}`}
                            </div>
                        )}

                            <div className="flex flex-wrap justify-center my-2 gap-y-2">
                                {alphabet.map((letter) => (
                                    <button
                                        key={letter}
                                        onClick={() => setGuess(guess + letter)}
                                        disabled={guess.length === 5 || guess.includes(letter) || gameOver}
                                        className={`py-1 px-2 font-semibold rounded mx-0.5 ${keyColors[letter]}`}
                                        style={{ width: "50px" }} // Adjust the width as needed
                                    >
                                        {letter}
                                    </button>
                                ))}
                            </div>

                        <div className="text-sm text-white font-semibold mb-2">
                            Remaining attempts: {maxAttempts - attempts.length}
                        </div>
                        {(congratulationsMessage || gameOver) && (
                            <button
                                onClick={resetGame}
                                className="mt-2 py-1 px-2 bg-purple-900 text-white font-semibold rounded"
                            >
                                Play Again
                            </button>
                        )}
                    </div>
                </div>
                </div>
            
                </div>
        
    );
};

export default WordleGame;