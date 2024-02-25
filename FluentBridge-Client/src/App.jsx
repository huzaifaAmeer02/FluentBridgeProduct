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
import GradingAssesment from "./components/GradingAssesment/GradingAssesment.jsx";
import Quiz from "./components/GradingAssesment/Quiz.jsx";
import Results from "./components/GradingAssesment/Results.jsx";
import VocabularyActivity from "./components/VocabularyActivity/VocabularyActivityPage.jsx";
import VActivities from "./components/VocabularyActivity/VActivities.jsx";

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
                    <Route path='/gradingquiz' element={<GradingAssesment/>}/>
                    <Route path='/quiz' element={<Quiz/>}/>
                    <Route path='/results' element={<Results/>}/>
                    <Route path='/vocabulary-activity' element={<VocabularyActivity/>} />
                    <Route path='/vactivities' element={<VActivities/>}/>
                    


                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;