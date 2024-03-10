// eslint-disable-next-line no-unused-vars
import {React,useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logofluent.png';
import { BiPencil, BiHeadphone, BiMicrophone, BiBookOpen, BiAbacus } from 'react-icons/bi';

function LandingPage() {
    const [currentDateTime, setCurrentDateTime] = useState('');
    const [email, setEmail] = useState('');

    // Function to update current date and time
    const updateDateTime = () => {
        const now = new Date();
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const currentDate = now.toLocaleDateString(undefined, dateOptions);
        const currentTime = now.toLocaleTimeString(undefined, timeOptions);
        setCurrentDateTime(`${currentDate} ${currentTime}`);
    };
    // Function to handle email input change
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add logic to handle the email submission, like sending it to your backend server
        console.log('Email submitted:', email);
        // Clear the email input after submission
        setEmail('');
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
                <h1 className="flex items-center justify-center text-4xl text-white font-bold p-6 rounded-2xl">
                    <img src={logo} alt="FluentBridge Logo" className="h-24 mr-2" />
                    FluentBridge Sri Lanka
                </h1>
            </header>
            <main className="text-center text-gray-800 mt-8 mx-16">
                <section className="bg-white bg-opacity-80 rounded-2xl p-3 mx-20 mb-24 shadow-lg">
                    <p className="text-lg text-justify justify-normal mt-2 p-4">Fluent Bridge is an English learning platform designed for skilled migrant workers. Our system offers writing, listening, speaking, vocabulary exercises, and user-friendly chatbot assistance. The system is built by a team from IIT Sri Lanka affiliated with the University of Westminster, under the group name " Tangent Techies ".</p>
                    <div className='mt-8 flex justify-center'>
                        <Link to="/login"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Login</button></Link>
                        <Link to="/signup"><button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Register</button></Link>
                    </div>
                    <p className="text-sm mt-6">{currentDateTime}</p>
                </section>
                <section className=" rounded-lg p-8 mt-8 mx-10">
                    <h2 className="text-2xl text-white font-semibold mb-6">Activities in FluentBridge</h2>
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
                <section className="bg-gray-600 rounded-2xl p-8 mt-14 mx-10 flex flex-col md:flex-row md:justify-between">
                    <div className="flex flex-col justify-between md:w-2/5 md:mr-6">
                        <h2 className="text-2xl text-white font-semibold mb-6">Contact FluentBridge</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col items-center mb-6">
                            <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" className="bg-gray-200 rounded-lg p-2 mb-4" required />
                            <button type="submit" className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Send Email</button>
                        </form>
                    </div>
                    <div className="text-white text-lg md:w-3/5 text-justify mt-6">
                        <p>Email: info@fluentbridge.com</p>
                        <p>Phone: +94 77 1234567</p>
                        <p>Address: Colombo, Sri Lanka</p>
                    </div>
                </section>


            </main>
            <footer className="m-8 text-center bg-white bg-opacity-80 p-4 text-gray-800 shadow-lg rounded-2xl">
                <p className="text-sm">&copy; 2024 Fluent Bridge. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
