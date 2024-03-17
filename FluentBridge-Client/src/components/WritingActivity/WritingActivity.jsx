import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';

const WritingActivity = () => {
    const [isTranslated, setIsTranslated] = useState(false);

    const toggleTranslation = () => {
        setIsTranslated(!isTranslated);
        // Add your translation logic here
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#271133] z-50">
            <Link to="/activities" className="absolute left-4 top-4 text-purple-500 font-bold hover:text-purple-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white">
                <IoIosArrowBack />
            </Link>

            <div className="max-w-md p-6 bg-purple-500 rounded-lg shadow-lg text-center mx-4">
                <h2 className="text-purple-950 text-xl font-bold mb-4">{isTranslated ? 'FluentBridge ලිවීමේ නිවැරදි කිරීමේ ක්‍රියාකාරකම්' : 'FluentBridge Writing Corrector Activity'}</h2>
                <p className="text-purple-900 mb-4">{isTranslated ? 'ඔබේ ලිවීම නිවැරදි කිරීම සඳහා ඉදිරිපත් කිරීමට පහත උපදෙස් අනුගමනය කරන්න:' : 'Follow the instructions below to submit your writing for correction:'}</p>
                <ol className="text-left mb-4">
                    <li className="mb-2">{isTranslated ? 'ඔබේ රචනය හෝ ඡේදය ඔබ කැමති පාඨ සංස්කාරකයක ලියන්න.' : 'Write your essay or paragraph in a text editor of your choice.'}</li>
                    <li className="mb-2">{isTranslated ? 'පහත පරිදි ආදාන බොහෝ ආකාරවලින් ලබා දිය හැක.' : 'The inputs can be given in many ways as below.'}</li>
                    <li className="mb-2">{isTranslated ? 'ඔබේ ලිවීම පෙළ ගොනුවක් හෝ රූපයක් ලෙස උඩුගත කරන්න හෝ පෙළ ටයිප් කරන්න (උදා., .txt,.jpg..).' : 'Upload your writing as a text file or image or type the text (e.g., .txt,.jpg..).'}</li>
                    <li className="mb-2">{isTranslated ? 'ලිවීම නිවැරදි කිරීමේ අතුරු මුහුණතට ප්‍රවේශ වීමට පහත බොත්තම ක්ලික් කරන්න.' : 'Click on the button below to access the writing corrector interface.'}</li>
                    <li className="mb-2">{isTranslated ? 'සපයන ලද නිවැරදි කිරීම් සහ යෝජනා සමාලෝචනය කරන්න.' : 'Review the corrections and suggestions provided.'}</li>
                </ol>
                <a
                    href="https://your-writing-corrector-url.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 mb-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-md shadow-md transition duration-300 ease-in-out"
                >
                    {isTranslated ? 'Writing Corrector වෙත යන්න' : 'Go to Writing Corrector'}
                </a><br />
                <button
                    onClick={toggleTranslation}
                    className="mt-6 mb-4 bg-purple-800 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-md shadow-md transition duration-300 ease-in-out"
                >
                    {isTranslated ? 'Translate to English' : 'සිංහලට පරිවර්තනය කරන්න'}
                </button>
            </div>
        </div>
    );
};

export default WritingActivity;
