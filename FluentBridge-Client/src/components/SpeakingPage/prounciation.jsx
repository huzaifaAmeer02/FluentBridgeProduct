import React from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

const Pronunciation = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <div className="container text-center">
                <img src="src/assets/." alt="img" className="mb-5" />
                <div className="md:w-1/2 mx-auto">
                    <form className="mb-5">
                        <div className="mb-4">
              <textarea
                  id="text-input"
                  className="form-input bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none p-4 w-full"
                  placeholder="Type anything..."
              ></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="rate" className="block">
                                Rate
                            </label>
                            <div id="rate-value" className="badge badge-primary float-right">
                                1
                            </div>
                            <input
                                type="range"
                                id="rate"
                                className="custom-range"
                                min="0.5"
                                max="2"
                                value="1"
                                step="0.1"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="pitch" className="block">
                                Pitch
                            </label>
                            <div id="pitch-value" className="badge badge-primary float-right">
                                1
                            </div>
                            <input
                                type="range"
                                id="pitch"
                                className="custom-range"
                                min="0"
                                max="2"
                                value="1"
                                step="0.1"
                            />
                        </div>
                        <div className="mb-4">
                            <select
                                id="voice-select"
                                className="form-select form-select-lg"
                            ></select>
                        </div>
                        <button className="btn btn-light btn-lg btn-block">Speak It</button>
                    </form>

                    <p className="text-secondary">
                        Note: This app uses the Web Speech API which is experimental and may not fully work in some versions of certain browsers
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Pronunciation;
