import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
// import Footer from "./components/Footer/Footer"
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
import ListeningQuiz from "./components/ListeningQuiz/App.jsx";
import WordleGame from "./components/WordleGame/WordleGame.jsx";
import Confetti from "./components/WordleGame/Confetti.jsx";
import ReadingQuestionier from "./components/ReadingActivity/ReadingQuestionier.jsx";
import Controller from "./components/ChatBotModal/Controller";
import Login from "./components/LandingPage/Login";
import Signup from "./components/LandingPage/Signup.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Speaking from "./components/SpeakingPage/Speaking.jsx";
import Pronunciation from "./components/SpeakingPage/prounciation.jsx";
import WritingActivity from "./components/WritingActivity/WritingActivity.jsx";
// import PurpleThemedLandingPage from "./components/PurpleThemedLandingPage/App.jsx";




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
                    <Route path='/wordleGame' element={<WordleGame/>} />
                    <Route path='/confetti' element={<Confetti/>}/>
                    <Route path='/listeningquiz' element={<ListeningQuiz/>}/>
                    <Route path='/readingquestionaier' element={<ReadingQuestionier/>}/>
                    <Route path='/Controller' element={<Controller/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/speaking' element={<Speaking/>}/>
                    <Route path='/pronunciation' element={<Pronunciation/>}/>
                    <Route path='/writingactivity' element={<WritingActivity/>}/>
{/*                     <Route path='/PurpleThemedLandingPage' element={<PurpleThemedLandingPage/>}/> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;