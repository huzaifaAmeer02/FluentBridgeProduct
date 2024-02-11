import React from "react";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import About from "./components/AboutUsPage/Aboutus";
import Home from "./components/HomePage/Homepage";
import Contact from "./components/ContactPage/ContactUs";
import Activity from "./components/ActivityPage/ActivityPanel";
import Dictionary from "./components/DictionaryPage/DictionaryPage";
import DictionaryAPI from "./components/DictionaryPage/DictionaryAPI.jsx";
import ListeningActivity from "./components/ListeningActivity/ListeningActivity.jsx";
import GamePage from "./components/DictionGame/gamePage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/activities' element={<Activity />} />
                    <Route path='/dictionary' element={<Dictionary />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/dictionaryapi' element={<DictionaryAPI/>}/>
                    <Route path='/gamePage' element={<GamePage/>}/>
                    <Route path='/listening' element={<ListeningActivity/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
