import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-blue-500 text-white py-4">
                <h1 className="text-3xl font-bold text-center">Welcome to Fluent Bridge</h1>
            </header>
            <main className="container mx-auto py-8">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">About Us</h2>
                    <p>Small description </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Get Started</h2>
                    <p>Sign up or log in to access the full features of Fluent Bridge.</p>
                    <div>
                        {/* Assuming Login is a component */}
                        {/* Replace Login with your actual login component */}
                        <div className="mt-4">
                            <Login/>
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p>If you have any questions or feedback, feel free to contact us.</p>
                </section>
            </main>
            <footer className="bg-gray-800 text-white py-4">
                <p className="text-center">&copy; 2024 Fluent Bridge. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
