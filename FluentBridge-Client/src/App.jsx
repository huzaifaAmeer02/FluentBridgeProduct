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
import VocabPanel from "./components/VocabPanel/vocabPanel.jsx";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/LandingPage/Login";
import Signup from "./components/LandingPage/Signup.jsx";
// import Signup from "./components/LandingPage/Signup";
import GradingAssesment from "./components/GradingAssesment/GradingAssesment.jsx";
import Quiz from "./components/GradingAssesment/Quiz.jsx";
import Results from "./components/GradingAssesment/Results.jsx";

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
                    <Route path='/listening' element={<ListeningActivity/>}/>
                    <Route path='/vocabpanel' element={<VocabPanel/>}/>
                    <Route path='/videopage' element={<VideoPage/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/gradingquiz' element={<GradingAssesment/>}/>
                    <Route path='/quiz' element={<Quiz/>}/>
                    <Route path='/results' element={<Results/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
