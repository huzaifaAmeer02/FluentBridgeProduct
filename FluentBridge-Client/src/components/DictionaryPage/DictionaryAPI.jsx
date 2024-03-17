import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosClose } from 'react-icons/io';
import Lottie from "lottie-react";
import listicon from "../../assets/listicon.json";
import purpleglobe from "../../assets/purpleglobe.json";
import searching from "../../assets/searching.json";

const DictionaryAPI = () => {
  // State variables
  const [word, setWord] = useState(""); // Stores the input word
  const [meanings, setMeanings] = useState([]); // Stores the meanings of the word
  const [audio, setAudio] = useState(); // Stores the audio pronunciation of the word
  const [savedWords, setSavedWords] = useState([]); // Stores the list of saved words
  const [showListPanel, setShowListPanel] = useState(false); // Controls the visibility of the saved words list panel
  const [duplicateWordError, setDuplicateWordError] = useState(false); // Indicates if a duplicate word is being added
  const [wordFound, setWordFound] = useState(false); // Indicates if the word is found in the dictionary
  const [sortedSavedWords, setSortedSavedWords] = useState([]); // Stores the saved words in sorted order
  const [loading, setLoading] = useState(false); // Indicates if data is being loaded
  
  // Fetches the meanings of the word from the dictionary API
  const getMeaning = async () => {
    if (!word.trim()) {
      return;
    }

    setLoading(true); // Display loading animation
    
    setTimeout(() => {
      setLoading(false); // Hide loading animation after 3 seconds
    }, 3000);

    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const response = await res.json();
  
      if (response.length > 0) {
        const textMeanings = response[0].meanings.map((meaning) => ({
          partOfSpeech: meaning.partOfSpeech,
          definition: meaning.definitions[0].definition,
          example: meaning.definitions[0].example,
        }));
  
        setAudio(response[0].phonetics[0]?.audio);
        setMeanings(textMeanings);
        setWordFound(true);
      } else {
        setAudio(null);
        setMeanings([{ partOfSpeech: "", definition: <span style={{ color: 'red' }}>Word not found</span>, example: "" }]);
        setWordFound(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  
  // Handles the change event of the input field
  const handleChange = (e) => {
    if (e.target.name === "word") {
      setWord(e.target.value);
      setMeanings([]);
      setAudio(null);
      setDuplicateWordError(false);
      setWordFound(false);
    }
  };
  
  // Adds the word to the saved words list
  const addToMyList = () => {
    const lowercaseWord = word.toLowerCase();
    const lowercaseSavedWords = savedWords.map(savedWord => savedWord.toLowerCase());

    if (meanings.length > 0 && !lowercaseSavedWords.includes(lowercaseWord)) {
      const updatedWordList = [...savedWords, lowercaseWord];
      setSavedWords(updatedWordList);
      setWord("");
      setDuplicateWordError(false);
      //saveWordListToBackend(updatedWordList); // Save the updated word list to the backend
      localStorage.setItem('savedWords', JSON.stringify(updatedWordList));
    } else {
      setDuplicateWordError(true);
    }
  };

  // Handles the click event of a saved word
  const handleWordClick = (selectedWord) => {
    setWord(selectedWord);
    setShowListPanel(false);
    getMeaningForSelectedWord(selectedWord);
  };

  // Removes a word from the saved words list
  const removeFromList = (wordToRemove) => {
    const updatedList = savedWords.filter(savedWord => savedWord !== wordToRemove);
    setSavedWords(updatedList);
    localStorage.setItem('savedWords', JSON.stringify(updatedList)); // Update local storage
};


  // Fetches the meanings of a selected word from the dictionary API
  const getMeaningForSelectedWord = async (selectedWord) => {
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`);
      const response = await res.json();
  
      if (response.length > 0) {
        const textMeanings = response[0].meanings.map((meaning) => ({
          partOfSpeech: meaning.partOfSpeech,
          definition: meaning.definitions[0].definition,
          example: meaning.definitions[0].example,
        }));
  
        setAudio(response[0].phonetics[0]?.audio);
        setMeanings(textMeanings);
      } else {
        setAudio(null);
        setMeanings([{ partOfSpeech: "", definition: <span style={{ color: 'red' }}>Word not found</span>, example: "" }]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const saveWordListToBackend = async (wordList) => {
    try {
      const response = await fetch('/api/saveWordList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ wordList }),
      });
      if (response.ok) {
        console.log('Word list saved successfully');
      } else {
        console.error('Failed to save word list');
      }
    } catch (error) {
      console.error('Error saving word list:', error);
    }
  };

  // Function to delay setting the loading state
  const setLoadingWithDelay = (value, delay) => {
    setTimeout(() => setLoading(value), delay);
  }; 

  // Resets the audio state when the word changes
  useEffect(() => {
    setAudio(null);
  }, [word]);

  // Sorts the saved words list when it changes
  useEffect(() => {
    const sortedWords = [...savedWords].sort((a, b) => a.localeCompare(b));
    setSortedSavedWords(sortedWords);
  }, [savedWords]);

  useEffect(() => {
    const savedWordList = localStorage.getItem('savedWords');
    if (savedWordList) {
        setSavedWords(JSON.parse(savedWordList));
    }
}, []);


  return (
    
    <div className="min-h-screen bg-cover bg-center " style={{ background: 'radial-gradient(circle, #220233, #000000)' }}>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <Lottie animationData={purpleglobe} loop autoplay />
        </div>
      )}
      <div className="container mx-auto px-4 py-8">
        <Link to="/dictionary" className="absolute bg-white top-4 left-4 flex items-center text-purple-500 font-bold hover:text-purple-700 rounded-lg p-2 bg-black">
          <IoIosArrowBack />
        </Link>
        <div className="mb-8 mt-10 bg-gray-800 bg-opacity-0 rounded-lg p-2 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto transition duration-300 ">
          <div className="flex flex-col md:flex-row items-center justify-between  ">
            <div className="flex items-center">
            <div
                className="cursor-pointer mx-2 my-2"
                style={{ width: '100px', height: '90px' }}
                onClick={() => setShowListPanel(!showListPanel)}
              >
                <Lottie
                  animationData={listicon}
                  loop
                  autoplay
                  height={80}
                  width={100}
                />
              </div>
            </div>
            <div className="flex-grow px-10 py-1 md:mb-5 md:mt-0">
            <div className="relative flex">
                <input
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="word"
                  className="w-full bg-white bg-opacity-80 rounded-1 border border-gray-700 focus:border-gray-800 focus:bg-purple-100 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-5 placeholder-gray-600 rounded-lg"
                  placeholder="Enter a word"
                  value={word}
                />
                <button
                  onClick={getMeaning}
                  className="absolute top-1 bottom-1 right-0 mt-5 mr-1 bg-purple-900 border border-gray-800 border-l-0 px-4 py-1 focus:outline-none hover:bg-purple-600 text-white text-lg rounded-lg"
                >
                  Find
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            {audio && (
              <div className="audio-control"> 
                <audio key={audio} controls className="my-4">
                  <source src={audio} type="audio/ogg" />
                  Your browser does not support the audio tag.
                </audio>
              </div>
            )}
            {wordFound && !duplicateWordError && (
              <button
                onClick={addToMyList}
                className="text-white bg-purple-400 rounded-full py-2 px-8 my-3 focus:outline-none hover:bg-purple-00 text-lg md:mx-10"
              >
                Add to My List
              </button>
            )}
          </div>
          {duplicateWordError && (
            <p className="text-red-500 text-sm">Word already exists in the list.</p>
          )}
          {meanings.length > 0 && (
            <div className="p-1 rounded-lg">
            <table className="w-full rounded-lg border-2 ">
              <thead className="text-center border-b-2 bg-purple-700">
                <tr>
                  <th className="border px-2 py-2 sm:w-1/4">Part of Speech</th>
                  <th className="border px-2 py-2 sm:w-1/2">Definition</th>
                  <th className="border px-2 py-2 sm:w-1/4">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-2 bg-purple-500 text-center" style={{ width: '25%' }}>{word}</td>
                  <td className="border px-2 py-2 bg-white text-purple-950" style={{ width: '50%' }}></td>
                  <td className="border px-2 py-2 bg-white text-purple-950" style={{ width: '25%' }}></td>
                </tr>
                {meanings.map((meaning, index) => (
                  <tr key={index} className="text-justify border-2">
                    <td className="border px-2 py-2 bg-gray-100 text-purple-950" style={{ width: '25%' }}>{meaning.partOfSpeech}</td>
                    <td className="border px-2 py-2 bg-white text-purple-950" style={{ width: '50%' }}>{meaning.definition}</td>
                    <td className="border px-2 py-2 bg-white text-purple-950" style={{ width: '25%' }}>{meaning.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          )}
        </div>
        {showListPanel && (
          <div className="absolute right-10 top-10 bg-purple-100 bg-opacity-80 text-purple-900 w-21 p-4 m-9 rounded-lg transition duration-300 hover:bg-opacity-100" style={{ maxHeight: '600px', overflowY: 'auto' }}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl text-purple font-medium my-2 ml-2 px-5">My List:</h2>
              <button className="text-blue-500 hover:text-gray-700 font-bold hover:text-blue-700 rounded-lg p-3 bg-white left-30 top-3" onClick={() => setShowListPanel(false)}>
                <IoIosClose />
              </button>
            </div>
            <ul className="list-disc pl-4 space-y-1" style={{ maxHeight: '600px'}}>
              {sortedSavedWords.map((savedWord, index) => (
                <li key={index} className="py-2 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span
                      className="cursor-pointer text-purple hover:text-blue-500"
                      onClick={() => handleWordClick(savedWord)}
                    >
                      {savedWord}
                    </span>
                  </div>
                  <div>
                    <button className="text-red-500 hover:text-red-700 px-5" onClick={() => removeFromList(savedWord)}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DictionaryAPI;