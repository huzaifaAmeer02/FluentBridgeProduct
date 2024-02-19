import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <header>
                <h1 className="text-4xl font-bold mb-8">Welcome to Fluent Bridge</h1>
            </header>
            <main>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">About Us</h2>
                    <p className="text-lg">Small description </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">Get Started</h2>
                    <p className="text-lg">Sign up or log in to access the full features of Fluent Bridge.</p>
                    <div>
                        <Link to="/login"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Login</button></Link>
                        <Link to="/register"><button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Register</button></Link>
                    </div>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold">Contact Us</h2>
                    <p className="text-lg">If you have any questions or feedback, feel free to contact us.</p>
                </section>
            </main>
            <footer className="mt-8">
                <p className="text-sm">&copy; 2024 Fluent Bridge. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
