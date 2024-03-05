import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "/src/assets/logofluent.png";
import "./navbar.css";

const Navbar = () => {
    const [Mobile, setMobile] = useState(false);
    const location = useLocation();

    // Condition to check if the navbar should be hidden based on the current URL
    /*const hideNavbar = location.pathname === "/listening" || location.pathname === "/vocabpanel" || location.pathname === "/login" || location.pathname === "/signup"|| location.pathname === "/";*/
    const hideNavbar = location.pathname === "/listening" || location.pathname === "/vocabpanel" || location.pathname === "/" || location.pathname ==="/dictionaryapi" || location.pathname ==="/dictionary" || location.pathname ==="/Controller" || location.pathname==="/gradingquiz" || location.pathname==="/quiz" || location.pathname==="/results" || location.pathname==="/listeningquiz" || location.pathname==="/readingquestionaier"

    // Function to toggle mobile menu
    const toggleMobileMenu = () => {
        setMobile(!Mobile);
    };

    // Function to handle logout
    const handleLogout = () => {
        const isConfirmed = window.confirm("Are you sure you want to logout ?");
        if (isConfirmed) {
            // For now, let's just redirect to the home page
            window.location.href = "/";
        }
    };

    return (
        <>
            {!hideNavbar && (
                <nav className="navbar">
                    <img src={logo} className="logo" alt="" width={80} height={80} />
                    <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                        <Link to="/home" className="home">
                            <li>Home</li>
                        </Link>
                        <Link to="/activities">
                            <li>Activities</li>
                        </Link>
                        <Link to="/about">
                            <li>About Us</li>
                        </Link>
                        <Link to="/contact" className="bg-gray-200 rounded-2xl hover:bg-gray-400">
                            <li>Contact Us</li>
                        </Link>
                        <li className="logout-icon special-1" onClick={handleLogout}>
                            <FaSignOutAlt />
                        </li>
                    </ul>
                    <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
                        {Mobile ? <ImCross /> : <FaBars />}
                    </button>
                </nav>
            )}
        </>
    );
};

export default Navbar;
