import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FiMic } from 'react-icons/fi';
import LoadingPage from "../LoadingPage/LoadingPage";
import Lottie from 'lottie-react';
import pronunce from '../../assets/pronunce.json';


function Speaking() {
    const [loading, setLoading] = useState(true); // State for loading
    const [rate, setRate] = useState(1);
    const [pitch, setPitch] = useState(1);
    const [synth, setSynth] = useState(null);
    const [voices, setVoices] = useState([]);
    const [selectedVoice, setSelectedVoice] = useState('');

    useEffect(() => {
        const synth = window.speechSynthesis;
        setSynth(synth);
        updateVoices();
        if (synth.onvoiceschanged !== undefined) {
            synth.onvoiceschanged = updateVoices;
        }
    }, []);

    const updateVoices = () => {
        const synth = window.speechSynthesis;
        const voices = synth.getVoices();
        setVoices(voices);
        setSelectedVoice(voices[0] ? voices[0].name : '');
    };

    const handleRateChange = (e) => {
        const newRate = parseFloat(e.target.value);
        setRate(newRate);
    };

    const handlePitchChange = (e) => {
        const newPitch = parseFloat(e.target.value);
        setPitch(newPitch);
    };

    const handleVoiceChange = (e) => {
        setSelectedVoice(e.target.value);
    };

    const speak = () => {
        if (!synth) return;
        if (synth.speaking) {
            console.error('Already speaking...');
            return;
        }
        const speakText = new SpeechSynthesisUtterance(document.getElementById('text-input').value);
        speakText.onend = () => {
            console.log('Done speaking...');
        };
        speakText.onerror = () => {
            console.error('Something went wrong');
        };
        const selectedVoiceObj = voices.find(voice => voice.name === selectedVoice);
        if (selectedVoiceObj) {
            speakText.voice = selectedVoiceObj;
        }
        speakText.rate = rate;
        speakText.pitch = pitch;
        synth.speak(speakText);
    };



    useEffect(() => {
        // Simulate loading time
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds for demonstration purposes

        // Clear timeout on component unmount
        return () => clearTimeout(timeout);
    }, []);

    if (loading) {
        return <LoadingPage />; // Render loading page while loading
    }

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen" style={{ background: 'radial-gradient(circle, #220233, #000000)'}}>
            <div className="absolute left-4 top-4">
                <Link
                    to="/speakingmainpanel"
                    className="flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white"
                >
                    <IoIosArrowBack />
                </Link>
            </div>
            
            {/* Lottie animation */}
            <Lottie
                animationData={pronunce}
                loop
                autoplay
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '10%',
                    height: '10%',
                    zIndex: 1, // Set z-index between gradient background and links
                }}
            />

            <div className="container mx-auto flex flex-col items-center justify-center">
                
                <div className="w-full md:w-1/2 bg-purple-200  rounded-lg shadow-lg p-8 mt-24">
                    <textarea
                        id="text-input"
                        className="form-input mb-4 bg-white opacity-90 border border-purple-900 focus:border-blue-500 focus:outline-none p-4 w-full rounded-lg text-lg text-purple-900 placeholder-gray-500"
                        placeholder="Type anything..."
                    ></textarea>
                    <div className="mb-4">
                        <label htmlFor="rate" className="block text-purple-900">
                            Speed : {rate.toFixed(1)}
                        </label>
                        <input
                            type="range"
                            id="rate"
                            className="custom-range mt-2 w-full"
                            min="0.5"
                            max="2"
                            value={rate}
                            step="0.1"
                            onChange={handleRateChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="pitch" className="block text-purple-900">
                            Pitch : {pitch.toFixed(1)}
                        </label>
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
                    <div className="mb-4">
                        <select
                            id="voice-select"
                            className="form-select bg-gray-100 border border-gray-300 text-gray-600 p-2 rounded w-full"
                            onChange={handleVoiceChange}
                            value={selectedVoice}
                        >
                            {voices.map((voice, index) => (
                                <option key={index} value={voice.name}>
                                    {voice.name} ({voice.lang})
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className="flex items-center justify-center bg-gray-800 px-6 py-4 rounded-2xl text-white btn-lg btn-block mx-auto mb-6" onClick={speak}>
                        <FiMic className="mr-2" />
                        Pronounce It
                    </button>
                </div>
                <p className="text-purple-900 text-sm mt-4 mb-4 bg-purple-300 px-6 py-4 rounded-3xl">
                    FluentBridge online pronunciation trainer
                </p>
            </div>
        </div>
    );
}

export default Speaking;

