// VocabularyActivityPage.js

import React from "react";
import vocabActivity from "../../assets/vocabActivity.jpg";

const VocabularyActivityPage = () => {

    return (
       <div className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center" style={{backgroundImage: `url(${vocabActivity})`}}>
        <main className="text-center text-white">
            <section className="mb-8 bg-gray-900 bg-opacity-90 rounded-lg p-4 transition duration-300 hover:bg-gray-800 hover:bg-opacity-75">
            <h2 className="text-4xl font-semibold animate-pulse">Master Vocabulary</h2> 
            </section>
        </main>
       </div>
      
    );
};

export default VocabularyActivityPage;
