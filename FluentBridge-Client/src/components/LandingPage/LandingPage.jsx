import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import bglanding from '../../assets/bg-landing.jpg';
import logo from '../../assets/logofluent.png'; // Import your logo image

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
        <div className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center" style={{backgroundImage: `url(${bglanding})`}}>
            <header className="text-center text-white mt-2">
                <div className="flex items-center justify-center mb-8">
                    <img src={logo} alt="Fluent Bridge Logo" className="h-20 w-20 mr-4" />
                    <h1 className="text-4xl font-bold bg-gray-700 bg-opacity-50 p-6 rounded-2xl animate-bounce">FluentBridge Sri Lanka</h1>
                </div>
            </header>
            <main className="text-center text-white">
                <section className="mb-8 bg-gray-900 bg-opacity-50 rounded-lg p-4 transition duration-300 hover:bg-gray-800 hover:bg-opacity-75">
                    <h2 className="text-2xl font-semibold animate-pulse">Get Started</h2>
                    <p className="text-lg animate-pulse">Sign up or log in to access the full features of Fluent Bridge.</p>
                    <div className='mt-4'>
                        <Link to="/login"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">Login</button></Link>
                        <Link to="/register"><button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">Register</button></Link>
                    </div>
                    <p className="text-sm mt-2">{currentDateTime}</p>
                    <section className="bg-white text-black bg-opacity-50 rounded-lg p-4 mt-4 transition duration-300 hover:bg-gray-800 hover:bg-opacity-75 hover:text-white">
                        <h2 className="text-2xl font-semibold animate-pulse">Contact Us</h2>
                        <p className="text-lg animate-pulse">If you have any questions or feedback, feel free to contact us.</p>
                    </section>
                </section>
            </main>
            <footer className="mt-8 text-center bg-black p-4 text-white">
                <p className="text-sm">&copy; 2024 Fluent Bridge. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
