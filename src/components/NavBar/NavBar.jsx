import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "/src/assets/logofluent.png";
import "./navbar.css";

const Navbar = () => {
    const [Mobile, setMobile] = useState(false);
    const location = useLocation();

    // Condition to check if the navbar should be hidden based on the current URL
    const hideNavbar = location.pathname === "/listening" || location.pathname === "/vocabpanel" ||location.pathname==="/";

    // Function to toggle mobile menu
    const toggleMobileMenu = () => {
        setMobile(!Mobile);
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
                        <Link to="/dictionary">
                            <li>Dictionary</li>
                        </Link>
                        <Link to="/about">
                            <li>About Us</li>
                        </Link>
                        <Link to="/contact" className="bg-gray-200 rounded-2xl hover:bg-gray-400">
                            <li>Contact Us</li>
                        </Link>
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
