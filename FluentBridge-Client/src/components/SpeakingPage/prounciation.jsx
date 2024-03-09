import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { FiMic } from 'react-icons/fi'; // Import the microphone icon from react-icons

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
            <div className="container mx-auto p-4">
                <div className="text-center">
                    <img src="/img/speech.png" alt="Speech Icon" className="mx-auto mb-5 h-16" />
                    <div className="md:w-1/2 mx-auto">
                        <form className="mb-5">
                            <div className="mb-4">
                <textarea
                    id="text-input"
                    className="form-input bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none p-4 w-full rounded"
                    placeholder="Type anything..."
                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="rate" className="block text-left text-gray-500">
                                    Rate
                                </label>
                                <div id="rate-value" className="badge badge-primary float-right text-blue-500">
                                    {rate.toFixed(1)}
                                </div>
                                <input
                                    type="range"
                                    id="rate"
                                    className="custom-range"
                                    min="0.5"
                                    max="2"
                                    value={rate}
                                    step="0.1"
                                    onChange={handleRateChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="pitch" className="block text-left text-gray-500">
                                    Pitch
                                </label>
                                <div id="pitch-value" className="badge badge-primary float-right text-blue-500">
                                    {pitch.toFixed(1)}
                                </div>
                                <input
                                    type="range"
                                    id="pitch"
                                    className="custom-range"
                                    min="0"
                                    max="2"
                                    value={pitch}
                                    step="0.1"
                                    onChange={handlePitchChange}
                                />
                            </div>
                            <div className="mb-4">
                                <select
                                    id="voice-select"
                                    className="form-select form-select-lg bg-gray-700 border border-gray-600 text-white"
                                ></select>
                            </div>
                            <button className="flex items-center justify-center btn btn-primary btn-lg btn-block">
                                <FiMic className="mr-2" />
                                Speak It
                            </button>
                        </form>

                        <p className="text-secondary text-sm">
                            Note: This app uses the Web Speech API which is experimental and may not fully work in some versions of certain browsers
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pronunciation;
