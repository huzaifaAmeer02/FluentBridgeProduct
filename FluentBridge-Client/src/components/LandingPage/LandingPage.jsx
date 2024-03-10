// eslint-disable-next-line no-unused-vars
import {React,useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logofluent.png';
import { BiPencil, BiHeadphone, BiMicrophone, BiBookOpen, BiAbacus } from 'react-icons/bi';

function LandingPage() {
    const [currentDateTime, setCurrentDateTime] = useState('');

    // Function to update current date and time
    const updateDateTime = () => {
        const now = new Date();
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const currentDate = now.toLocaleDateString(undefined, dateOptions);
        const currentTime = now.toLocaleTimeString(undefined, timeOptions);
        setCurrentDateTime(`${currentDate} ${currentTime}`);
    };


    // Update date and time on component mount
    useEffect(() => {
        updateDateTime();
        // Update date and time every second
        const interval = setInterval(() => {
            updateDateTime();
        }, 1000);
        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gradient-to-b from-[#01282B] to-[#B3D9D9] min-h-screen flex flex-col justify-center items-center text-gray-800">
            <header className="text-center mt-10">
                <h1 className="flex items-center justify-center text-4xl font-bold bg-white bg-opacity-80 p-6 rounded-2xl shadow-lg">
                    <img src={logo} alt="FluentBridge Logo" className="h-10 mr-2" />
                    FluentBridge Sri Lanka
                </h1>
            </header>
            <main className="text-center text-gray-800 mt-8 mx-6">
                <section className="mb-8 bg-white bg-opacity-80 rounded-lg p-8 shadow-lg">
                    <h2 className="text-2xl font-semibold">Welcome to Fluent Bridge</h2>
                    <p className="text-lg mt-4">Fluent Bridge is an English learning platform designed for skilled migrant workers. Our system offers writing, listening, speaking, vocabulary exercises, and user-friendly chatbot assistance.</p>
                    <div className='mt-8 flex justify-center'>
                        <Link to="/login"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Login</button></Link>
                        <Link to="/signup"><button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Register</button></Link>
                    </div>
                    <p className="text-sm mt-8">{currentDateTime}</p>
                </section>
                <section className="bg-gray-800 rounded-lg p-8 mt-8 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6">Activities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Activity Box 1 */}
                        <div className="bg-white bg-opacity-80 p-6 rounded-lg flex flex-col items-center shadow-lg">
                            <BiPencil className="text-5xl text-gray-300" />
                            <h3 className="text-lg font-semibold mb-2">Writing</h3>
                            <p className="text-sm">Practice your writing skills with various exercises.</p>
                        </div>
                        {/* Activity Box 2 */}
                        <div className="bg-white bg-opacity-80 p-6 rounded-lg flex flex-col items-center shadow-lg">
                            <BiHeadphone className="text-5xl text-gray-300" />
                            <h3 className="text-lg font-semibold mb-2">Listening</h3>
                            <p className="text-sm">Improve your listening skills with audio exercises.</p>
                        </div>
                        {/* Activity Box 3 */}
                        <div className="bg-white bg-opacity-80 p-6 rounded-lg flex flex-col items-center shadow-lg">
                            <BiMicrophone className="text-5xl text-gray-300" />
                            <h3 className="text-lg font-semibold mb-2">Speaking</h3>
                            <p className="text-sm">Enhance your speaking skills through conversation practice.</p>
                        </div>
                        {/* Activity Box 4 */}
                        <div className="bg-white bg-opacity-80 p-6 rounded-lg flex flex-col items-center shadow-lg">
                            <BiBookOpen className="text-5xl text-gray-300" />
                            <h3 className="text-lg font-semibold mb-2">Vocabulary</h3>
                            <p className="text-sm">Expand your vocabulary with interactive exercises.</p>
                        </div>
                        {/* Activity Box 5 */}
                        <div className="bg-white bg-opacity-80 p-6 rounded-lg flex flex-col items-center shadow-lg">
                            <BiAbacus className="text-5xl text-gray-300" />
                            <h3 className="text-lg font-semibold mb-2">Chatbot Assistance</h3>
                            <p className="text-sm">Get assistance and practice with our user-friendly chatbot.</p>
                        </div>
                        {/* Activity Box 6 */}
                        <div className="bg-white bg-opacity-80 p-6 rounded-lg flex flex-col items-center shadow-lg">
                            <BiAbacus className="text-5xl text-gray-300" />
                            <h3 className="text-lg font-semibold mb-2">Grading Quiz</h3>
                            <p className="text-sm">Test your knowledge with our grading quiz.</p>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="mt-8 text-center bg-white bg-opacity-80 p-4 text-gray-800 shadow-lg rounded-2xl">
                <p className="text-sm">&copy; 2024 Fluent Bridge. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
