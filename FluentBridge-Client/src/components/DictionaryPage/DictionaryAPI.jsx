import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import myListIcon from '../../assets/myListIcon.png';
import dictionarybg from '../../assets/dictionarybg.jpg';


const DictionaryAPI = () => {
  const [word, setWord] = useState("FluentBridge Dictionary");
  const [meanings, setMeanings] = useState([]);
  const [audio, setAudio] = useState();
  const [savedWords, setSavedWords] = useState([]);
  const [showListPanel, setShowListPanel] = useState(false);

  const getMeaning = async () => {
    let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    let response = await res.json();

    if (response.length > 0) {
      let textMeanings = response[0].meanings.map((meaning) => {
        return {
          partOfSpeech: meaning.partOfSpeech,
          definition: meaning.definitions[0].definition,
          example: meaning.definitions[0].example,
        };
      });

      setAudio(response[0].phonetics[0]?.audio);
      setMeanings(textMeanings);
    } else {
      setAudio(null);
      setMeanings([{ partOfSpeech: "N/A", definition: "Word not found", example: "" }]);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "word") {
      setWord(e.target.value);
    }
  };

  const addToMyList = () => {
    setSavedWords([...savedWords, word]);
    // Optionally, you can store this list in localStorage or a backend server
  };

  useEffect(() => {
    setAudio(null); // Reset audio when word changes
  }, [word]);

  return (
    <>
    
    <div style={{ backgroundImage: `url(${dictionarybg})`, backgroundSize: 'cover' }}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col items-center">
          <Link to='/dictionary'>
            <button className="mb-4 lg:mb-0 lg:mr-4 inline-flex text-white bg-teal-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
              Back To Main
            </button>
          </Link>
         <section className="mb-8 bg-teal-900 bg-opacity-80 rounded-lg p-4 transition duration-300  hover:bg-opacity-100">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white mt-8">
                {word}
              </h1>

              <div className="relative flex-grow py-1 mb-5">
                <label htmlFor="name" className="leading-7 text-sm text-white"><b>Type the Word</b></label>
                <div className="relative">
                  <input
                    onChange={handleChange}
                    type="text"
                    id="name"
                    name="word"
                    className="w-full bg-white bg-opacity-50 rounded border border-gray-400 focus:border-gray-800 focus:bg-green-100 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-5"
                  />
                  <button
                    onClick={getMeaning}
                    className="absolute top-2 right-0 mt-5 mr-2 text-white bg-gray-900 border-0 px-4 focus:outline-none hover:bg-gray-500 rounded text-lg"
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
                  <img
                    src={myListIcon}
                    alt="My List"
                    className="cursor-pointer"
                    style={{ width: '50px', height: '50px', marginRight: '10px' }}
                    onClick={() => setShowListPanel(!showListPanel)}
                  />
                  <button
                    onClick={addToMyList}
                    className="text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gray-500 rounded text-lg"
                  >
                    Add to My List
                  </button>
                </div>
              </div>

              <div>
                {meanings.length > 0 ? (
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
                ) : (
                  <p className="text-lg text-white italic mt-2">
                    No meanings found for the word.
                  </p>
                )}
              </div>
              </section>
            </div>
        </section>

      {showListPanel && (
        <div className="fixed right-0 top-0 h-full bg-gray-200 w-1/4 p-4">
          <h2 className="text-xl font-medium mb-2">My List:</h2>
          <ul>
            {savedWords.map((savedWord, index) => (
              <li key={index}>{savedWord}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  );
};

export default DictionaryAPI;
