import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div>
            <header>
                <h1>Welcome to Fluent Bridge</h1>
            </header>
            <main>
                <section>
                    <h2>About Us</h2>
                    <p>Small description </p>
                </section>
                <section>
                    <h2>Get Started</h2>
                    <p>Sign up or log in to access the full features of Fluent Bridge.</p>
                    <div>
                        <Login/>
                    </div>
                </section>
                <section>
                    <h2>Contact Us</h2>
                    <p>If you have any questions or feedback, feel free to contact us.</p>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Fluent Bridge. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
