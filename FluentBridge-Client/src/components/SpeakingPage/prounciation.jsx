import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { FiMic } from 'react-icons/fi'; // Import the microphone icon from react-icons

import speechIcon from '../../assets/vocab.jpg';

const Pronunciation = () => {
    const [rate, setRate] = useState(1);
    const [pitch, setPitch] = useState(1);


    const handleRateChange = (e) => {
        const newRate = parseFloat(e.target.value);
        setRate(newRate);
        document.getElementById('rate-value').innerText = newRate.toFixed(1);
    };

    const handlePitchChange = (e) => {
        const newPitch = parseFloat(e.target.value);
        setPitch(newPitch);
        document.getElementById('pitch-value').innerText = newPitch.toFixed(1);
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <div className="container mx-auto  ">
                <div className="text-center">
                    <img src={speechIcon} alt="Speech Icon" className="mx-auto mb-4 h-40  mt-28 object-cover" />
                    <div className="md:w-1/2 mx-auto">
                        <form className="mb-5">
                            <div className="mb-6">
                                <textarea
                                    id="text-input"
                                    className="form-input bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none p-4 w-full rounded-md text-lg placeholder-gray-500"
                                    placeholder="Type anything..."
                                ></textarea>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="rate" className="block text-left text-gray-500">
                                    Rate
                                </label>
                                <div id="rate-value" className="font-bold text-blue-500 text-lg">
                                    {rate.toFixed(1)}
                                </div>
                                <input
                                    type="range"
                                    id="rate"
                                    className="custom-range mt-2 w-full"
                                    min="0"
                                    max="2"
                                    value={rate}
                                    step="0.1"
                                    onChange={handleRateChange}
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="pitch" className="block text-left text-gray-500">
                                    Pitch
                                </label>
                                <div id="pitch-value" className="font-bold text-blue-500 text-lg">
                                    {pitch.toFixed(1)}
                                </div>
                                <input
                                    type="range"
                                    id="pitch"
                                    className="custom-range mt-2 w-full"
                                    min="0"
                                    max="2"
                                    value={pitch}
                                    step="0.1"
                                    onChange={handlePitchChange}
                                />
                            </div>
                            <div className="mb-6">
                                <select
                                    id="voice-select"
                                    className="form-select bg-gray-700 border border-gray-600 text-white text-lg p-2 rounded w-full"
                                >
                                    <option value="" disabled selected>
                                        Select a voice...
                                    </option>
                                    {/* Add more options here if needed */}
                                </select>
                            </div>
                            <button className="flex items-center justify-center btn btn-primary btn-lg btn-block mx-auto mb-20">
                                <FiMic className="mr-2" />
                                Pronounce It
                            </button>

                        </form>

                        <p className="text-secondary text-sm">
                            FluentMe online pronunciation trainer
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pronunciation;
