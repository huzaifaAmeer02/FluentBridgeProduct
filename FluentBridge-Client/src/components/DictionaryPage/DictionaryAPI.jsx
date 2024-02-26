import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosClose } from 'react-icons/io'; // Import IoIosClose
import myListIcon from '../../assets/myListIcon.png';
import dictionarybg from '../../assets/dictionarybg4.jpg';

const DictionaryAPI = () => {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [audio, setAudio] = useState();
  const [savedWords, setSavedWords] = useState([]);
  const [showListPanel, setShowListPanel] = useState(false);
  const [duplicateWordError, setDuplicateWordError] = useState(false);
  const [wordFound, setWordFound] = useState(false);
  const [sortedSavedWords, setSortedSavedWords] = useState([]); // Add a state to store sorted saved words

  const getMeaning = async () => {
    if (!word.trim()) {
      return;
    }
  
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
        setWordFound(true); // Set wordFound to true when word is found
      } else {
        setAudio(null);
        setMeanings([{ partOfSpeech: "", definition: <span style={{ color: 'red' }}>Word not found</span>, example: "" }]);
        setWordFound(false); // Set wordFound to false when word is not found
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const handleChange = (e) => {
    if (e.target.name === "word") {
      setWord(e.target.value);
      setMeanings([]);
      setAudio(null);
      setDuplicateWordError(false); // Reset the error state
      setWordFound(false); // Reset wordFound when a new word is entered
    }
  };
  

  const addToMyList = () => {
    const lowercaseWord = word.toLowerCase();
    const lowercaseSavedWords = savedWords.map(savedWord => savedWord.toLowerCase());
  
    if (meanings.length > 0 && !lowercaseSavedWords.includes(lowercaseWord)) {
      setSavedWords([...savedWords, lowercaseWord]);
      setWord("");
      setDuplicateWordError(false);
    } else {
      setDuplicateWordError(true);
    }
  };

  const handleWordClick = (selectedWord) => {
    setWord(selectedWord); // Set the selected word
    setShowListPanel(false); // Close the list panel
    getMeaningForSelectedWord(selectedWord);
    
  };
  

  const removeFromList = (wordToRemove) => {
    const updatedList = savedWords.filter(savedWord => savedWord !== wordToRemove);
    setSavedWords(updatedList);
  };

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

  useEffect(() => {
    setAudio(null);
  }, [word]);

  // Use useEffect to update sortedSavedWords whenever savedWords changes
  useEffect(() => {
    const sortedWords = [...savedWords].sort((a, b) => a.localeCompare(b));
    setSortedSavedWords(sortedWords);
  }, [savedWords]);

  return (
    <>
      <div style={{ backgroundImage: `url(${dictionarybg})`, backgroundSize: 'cover' }}>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex flex-col items-center">
            <Link to="/dictionary" className="back-to-activities flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4">
              <IoIosArrowBack />
            </Link>
            <h1 className="sm:text-3xl text-xl font-small title-font mb-4 text-white mt-4 ">
              ------- Fluent Bridge Dictionary ------
            </h1>
            <section className="mb-8 bg-teal-700 bg-opacity-50 rounded-lg p-4 transition duration-300 hover:bg-opacity-100" style={{ minHeight: '200px', width: '650px' }} >
              <section className="text-gray-600 body-font flex items-center">
                <img
                  src={myListIcon}
                  alt="My List"
                  className="cursor-pointer mx-4 my-4"
                  style={{ width: '50px', height: '50px' }}
                  onClick={() => setShowListPanel(!showListPanel)}
                />
                <div className="overflow-hidden"> {/* Adjust the width as needed */}
                  <h2 className="sm:text-3xl text-xl font-small title-font mb-4 text-white mt-4 ">
                    {word}
                  </h2>
                </div>
              </section>
               <div className="relative flex-grow py-1 mb-5" style={{ height: 'auto' }}>
                <div className="relative my-">
                <input
                    onChange={handleChange}
                    type="text"
                    id="name"
                    name="word"
                    className="w-full bg-white bg-opacity-50 rounded border border-gray-700 focus:border-gray-800 focus:bg-green-100 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-5 placeholder-gray-600"
                    placeholder="Enter a word" // Placeholder text
                    value={word}
                    style={{ width: '600px', margin: '0 10px'}} // Adjust height and padding
                  />

                  <button
                    onClick={getMeaning}
                    className="absolute top-0 right-0 mt-2 mr-4 text-white bg-gray-900 border-0 px-4 focus:outline-none hover:bg-gray-500 rounded text-lg"
                  >
                    Find
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {audio && (
                    <div className="audio-control"> 
                      <audio key={audio} controls className="mb-4">
                        <source src={audio} type="audio/ogg" />
                        Your browser does not support the audio tag.
                      </audio>
                    </div>
                  )}
                  {wordFound && !duplicateWordError && ( // Render button only if word is found and not a duplicate
                      <button
                        onClick={addToMyList}
                        className="text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gray-500 rounded text-lg mx-10"
                      >
                        Add to My List
                      </button>
                    )}
                </div>
              </div>
              {duplicateWordError && (
                <p className="text-red-500 text-sm">Word already exists in the list.</p>
              )}
              <div>
                {meanings.length > 0 && (
                  <table className="min-w-full p-4 rounded-lg border-2">
                    <thead className='text-center border-b-2'>
                      <tr className='bg-green-200'>
                        <th className="border px-4 py-2 sm:w-1/4">Part of Speech</th>
                        <th className="border px-4 py-2 sm:w-1/2">Definition</th>
                        <th className="border px-4 py-2 sm:w-1/4">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2 bg-gray-100 text-center" colSpan="3">{word}</td>
                      </tr>
                      {meanings.map((meaning, index) => (
                        <tr key={index} className='text-justify border-2'>
                          <td className="border px-4 py-2 bg-gray-100">{meaning.partOfSpeech}</td>
                          <td className="border px-4 py-2 bg-white">{meaning.definition}</td>
                          <td className="border px-4 py-2 bg-white">{meaning.example}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>

            </section>
          </div>
        </section>
        {showListPanel && (
          <div className="absolute right-10 top-10 bg-teal-700 bg-opacity-90 text-white w-21 p-4 m-9" style={{ maxHeight: '600px', overflowY: 'auto' }}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium mb-2">My List:</h2>
              <button className="text-blue-500 hover:text-gray-700 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-3 bg-white left-30 top-3" onClick={() => setShowListPanel(false)}>
                <IoIosClose />
              </button>
            </div>
            <ul className="list-disc pl-4 space-y-1" style={{ maxHeight: '600px',}}>
              {sortedSavedWords.map((savedWord, index) => (
                <li key={index} className="py-2 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span
                      className="cursor-pointer text-white hover:text-blue-500"
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
    </>
  );
};

export default DictionaryAPI;
