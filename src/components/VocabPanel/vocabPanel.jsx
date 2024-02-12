import React, { useState, useEffect } from "react";

const VocabPanel = () => {
    const [word, setWord] = useState("");
    const [addedWords, setAddedWords] = useState([]);
    const [selectedWord, setSelectedWord] = useState(null);

    // Load added words from local storage on component mount
    useEffect(() => {
        const storedWords = JSON.parse(localStorage.getItem("addedWords"));
        if (storedWords) {
            setAddedWords(storedWords);
        }
    }, []);

    // Function to handle adding a word
    const addWord = () => {
        // Fetch pronunciation and meaning of the word using an API or library
        // For demonstration purposes, let's just add the word to the list
        const newWords = [...addedWords, word];
        setAddedWords(newWords);
        setWord("");
        // Save words to local storage
        localStorage.setItem("addedWords", JSON.stringify(newWords));
    };

    // Function to handle displaying word details in popup
    const handleWordClick = (word) => {
        // Here you would display the selected word details in a popup
        setSelectedWord(word);
    };

    return (
        <div className="right-0 top-0 p-28 bg-gray-100 shadow-md rounded-lg">
            {/* Input for user's word */}
            <input
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Enter the word"
                value={word}
                onChange={(e) => setWord(e.target.value)}
            />
            <button
                className="block w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                onClick={addWord}
            >
                Add Word
            </button>

            {/* Display added words */}
            <ul className="mt-4">
                {addedWords.map((word, index) => (
                    <li
                        key={index}
                        className="cursor-pointer hover:text-blue-500"
                        onClick={() => handleWordClick(word)}
                    >
                        {word}
                    </li>
                ))}
            </ul>

            {/* Popup for word details */}
            {selectedWord && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white shadow-md rounded-lg">
                    <h3 className="text-xl font-semibold">{selectedWord}</h3>
                    {/* Display pronunciation and meaning */}
                    {/* Example sentence */}
                    <p className="mt-2">Example sentence for {selectedWord}</p>
                    <button
                        className="block w-full mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        onClick={() => setSelectedWord(null)}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

export default VocabPanel;
