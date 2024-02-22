import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import About from "./components/AboutUsPage/Aboutus";
import Home from "./components/HomePage/Homepage";
import Contact from "./components/ContactPage/ContactUs";
import Activity from "./components/ActivityPage/ActivityPanel";
import Dictionary from "./components/DictionaryPage/DictionaryPage";
import DictionaryAPI from "./components/DictionaryPage/DictionaryAPI.jsx";
import ListeningActivity from "./components/ListeningActivity/ListeningActivity.jsx";
import VideoPage from "./components/ListeningActivity/VideoPage.jsx";
import GamePage from "./components/DictionGame/gamePage.jsx";
import VocabPanel from "./components/VocabPanel/vocabPanel.jsx";
import LandingPage from "./components/LandingPage/LandingPage";


function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/activities' element={<Activity />} />
                    <Route path='/dictionary' element={<Dictionary />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/dictionaryapi' element={<DictionaryAPI/>}/>
                    <Route path='/gamePage' element={<GamePage/>}/>
                    <Route path='/listening' element={<ListeningActivity/>}/>
                    <Route path='/vocabpanel' element={<VocabPanel/>}/>
                    <Route path='/videopage' element={<VideoPage/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
