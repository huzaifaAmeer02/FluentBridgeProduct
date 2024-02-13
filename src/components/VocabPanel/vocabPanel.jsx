import React, { useState, useEffect } from "react";
import axios from 'axios'; // Import axios for making HTTP requests

const VocabPanel = () => {
    const [word, setWord] = useState("");
    const [addedWords, setAddedWords] = useState([]);
    const [selectedWord, setSelectedWord] = useState(null);
    const [wordMeaning, setWordMeaning] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from the JSON file
                const response = await axios.get('./en2sn.json');
                setAddedWords(response.data); // Assuming the JSON file is an array of words
            } catch (error) {
                console.error('Error in fetching data:', error);
            }
        };

        fetchData(); // Call the async function
    }, []);

    const addWord = () => {
        const newWords = [...addedWords, word];
        setAddedWords(newWords);
        setWord("");
        // localStorage.setItem("addedWords", JSON.stringify(newWords)); // Optionally save to localStorage
    };

    const handleWordClick = (word) => {
        setSelectedWord(word);
        // Fetch meaning of the word from the en2sn.json file
        const meaning = getMeaningFromJson(word);
        setWordMeaning(meaning);
    };

    const getMeaningFromJson = (word) => {
        try {
            // eslint-disable-next-line no-undef
            const response = require('./en2sn.json');
            return response[word] || "Meaning not available";
        } catch (error) {
            console.error('Error reading en2sn.json:', error);
            return "Error fetching meaning";
        }
    };

    return (
        <div className="right-0 top-0 p-28 bg-gray-100 shadow-md rounded-lg">
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

            {selectedWord && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white shadow-md rounded-lg">
                    <h3 className="text-xl font-semibold">{selectedWord}</h3>
                    <p className="mt-2">
                        {wordMeaning ? wordMeaning : "Meaning not available"}
                    </p>
                    <button
                        className="block w-full mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        onClick={() => {
                            setSelectedWord(null);
                            setWordMeaning(null);
                        }}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

export default VocabPanel;
