// VocabularyActivityPage.js

import React from "react";
import vocabActivity from "../../assets/vocabActivity.jpg";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { IoIosArrowBack } from "react-icons/io";

const VocabularyActivityPage = () => {
    const containerStyle = {
        backgroundImage: `url(${vocabActivity})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div className="p-8" style={containerStyle}>
            
            <h1>Vocabulary Activity</h1>
            {/* Add your content here */}
        </div>
        
    );
};

export default VocabularyActivityPage;
