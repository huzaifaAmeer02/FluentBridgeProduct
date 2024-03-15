import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

import logo from "/src/assets/logofluent.png";
import defaultUserImage from "../../assets/user-progile.jpg"; // Import a default user image
import "./NavBar.css";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const location = useLocation();

    // Condition to check if the navbar should be hidden based on the current URL
    const hidePaths = [
        "/listening",
        "/vocabpanel",
        "/",
        "/dictionaryapi",
        "/dictionary",
        "/gradingquiz",
        "/quiz",
        "/results",
        "/listeningquiz",
        "/wordleGame",
        "/vocabulary-activity",
        "/readingquestionaier",
        "/speaking",
        "/pronunciation",
        "/writingactivity",
        "/login",
        "/signup"
    ];
    
    const hideNavbar = hidePaths.includes(location.pathname);

    // Function to toggle mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
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
                <nav className="navbar flex items-center justify-between">
                    <Link to="/">
                        <img src={logo} className="m-2 logo ml-2 top-2" alt="Logo" width={70} height={70} />
                    </Link>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <div className="profile-button" onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
                                {/* Rounded profile picture */}
                                <img src={defaultUserImage} alt="User" className="mr-4 w-12 user-image rounded-full" />
                            </div>
                            {/* Dropdown menu for user profile */}
                            {profileMenuOpen && (
                                <ul className="profile-dropdown absolute top-12 right-0 bg-white shadow-md rounded-lg py-2">
                                    <li className="profile-item px-4 py-2 flex items-center">
                                        {/* User name and email address */}
                                        <div>
                                            <p className="font-semibold">Username</p>
                                            <p className="text-gray-500">email@example.com</p>
                                        </div>
                                    </li>
                                    {/* Dropdown options */}
                                    <li className="profile-item px-4 py-2 hover:bg-gray-100">
                                        <Link to="/contact">Contact Us</Link>
                                    </li>
                                    <li className="profile-item px-4 py-2 hover:bg-gray-100">
                                        <Link to="/about">About Us</Link>
                                    </li>
                                    <li className="profile-item px-4 py-2 hover:bg-gray-100" onClick={handleLogout}>
                                        <FaSignOutAlt className="mr-2" />
                                        Logout
                                    </li>
                                </ul>
                            )}
                        </div>
                        
                    </div>
                </nav>
            )}
        </>
    );
};

export default Navbar;
