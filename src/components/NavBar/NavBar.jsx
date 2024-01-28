import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import logo from "/src/assets/logofluent.png"

const Navbar = () => {
    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <nav className='navbar'>
                <img src={logo} className='logo' alt="" width={80} height={80} />
                {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
                <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                    <Link to='/' className='home'>
                        <li>Home</li>
                    </Link>
                    <Link to='/activities'>
                        <li>Activities</li>
                    </Link>
                    <Link to='/dictionary'>
                        <li>Dictionary</li>
                    </Link>
                    <Link to='/about'>
                        <li>About Us</li>
                    </Link>
                    <Link to='/contact' className='bg-gray-200 rounded-2xl hover:bg-gray-400'>
                        <li>Contact Us</li>
                    </Link>
                </ul>
                {/*
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile
        */}
                <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <ImCross /> : <FaBars />}
                </button>
            </nav>
        </>
    )
}
export default Navbar