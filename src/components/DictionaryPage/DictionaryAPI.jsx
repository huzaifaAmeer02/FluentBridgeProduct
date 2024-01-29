import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const DictionaryAPI = () => {
  const [word, setWord] = useState("FluentBridge Dictionary");
  const [meanings, setMeanings] = useState([]);
  const [audio, setAudio] = useState();

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

  useEffect(() => {
    setAudio(null);
  }, [word]);

  return (
      <div className='bg-white'>
        <section className="text-gray-600 body-font bg-gray-200">
          <div className="container px-5 py-24 mx-auto flex flex-col items-center">
            <Link to='/dictionary'>
              <button
                  className="mb-4 lg:mb-0 lg:mr-4 inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
                Back To Main
              </button>
            </Link>

            <div className="flex flex-col text-center w-full mb-5">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 mt-20">
                {word}
              </h1>
              <div className="lg:w-2/3 mx-auto leading-relaxed text-base overflow-x-auto rounded-2xl">
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
                      {meanings.map((meaning, index) => (
                          <tr key={index} className='text-justify border-2'>
                            <td className="border px-4 py-2 bg-gray-100 ">{meaning.partOfSpeech}</td>
                            <td className="border px-4 py-2">{meaning.definition}</td>
                            <td className="border px-4 py-2">{meaning.example}</td>
                          </tr>
                      ))}
                      </tbody>
                    </table>
                ) : (
                    <p className="text-lg text-gray-500 italic mt-2">
                      No meanings found for the word.
                    </p>
                )}
              </div>
            </div>
            <div className="flex w-full max-w-lg space-x-4 items-center">
              <div className="relative flex-grow">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600"><b>Type the Word</b></label>
                <input onChange={handleChange} type="text" id="name" name="word"
                       className="w-full bg-white bg-opacity-50 rounded border border-gray-400 focus:border-gray-800 focus:bg-green-100 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-5" />
                <button
                    onClick={getMeaning}
                    className="mt-5 text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gray-500 rounded text-lg"
                >
                  Find
                </button>

              </div>
            </div>
            {audio && (
                <div className="audio-control mt-5">
                  <audio key={audio} controls>
                    <source src={audio} type="audio/ogg" />
                    Your browser does not support the audio tag.
                  </audio>
                </div>
            )}
          </div>
        </section>
      </div>
  );
};

export default DictionaryAPI;
