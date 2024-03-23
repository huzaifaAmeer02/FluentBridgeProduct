import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import VideoPage from "./VideoPage.jsx";
import {IoIosArrowBack} from "react-icons/io";
import LoadingPage from "../LoadingPage/LoadingPage.jsx";

const ListeningActivity = () => {
    // Sample data for job details
    const jobs = [
        {
            title: "Labour",
            image: "",
            link: "/Keeper",
            videoUrl: ""
        },
        {
            title: "Engineer",
            image: "",
            link: "/Keeper",
            videoUrl: ""
        },
        {
            title: "Teacher",
            image: "",
            link: "/Keeper",
            videoUrl: ""
        },
        {
            title: "Artists",
            image: "",
            link: "/Keeper",
            videoUrl: "",
        },
        {
            title: "Driver",
            image: "",
            link: "/Keeper",
            videoUrl: ""
        },
        {
            title: "Nurse",
            image: "",
            link: "/Keeper",
            videoUrl: ""
        },
        {
            title: "Care Taker",
            image: "",
            link: "/Keeper",
            videoUrl: ""
        },
        {
            title: "IT Consultant",
            image: "",
            link: "/Keeper",
            videoUrl: ""
        },
        {
            title: "Store Keeper",
            image: "",
            link: "/Keeper",
            videoUrl: ""
        },
        {
            title: "Store Keeper",
            image: "",
            link: "/Keeper",
            videoUrl: ""
        }
        // Add more job details as needed
    ];

    const [selectedJob, setSelectedJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showInstructions, setShowInstructions] = useState(false); // State to track instructions panel visibility
    const [translatedInstructions, setTranslatedInstructions] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulating a 2-second delay for demonstration purposes
    }, []);

    const handleJobClick = (job) => {
        setSelectedJob(job);
    };

    const handleClosePopup = () => {
        setSelectedJob(null);
    };
    const toggleInstructions = () => {
        setShowInstructions(!showInstructions);
    };
    const translateInstructions = () => {
        // Placeholder translation logic, replace with your actual translation logic
        // For demonstration purposes, we'll just toggle between English and Sinhala
        if (translatedInstructions === null) {
            setTranslatedInstructions({
                objective: "අරමුණ",
                procedure: "පටිපාටිය",
                answeringQuestions: "ප්‍රශ්න වලට පිළිතුරු දීම",
                completingActivity: "ක්රියාකාරකම් සම්පූර්ණ කිරීම",
                note: "සටහන",
                oli1:""
            });
        } else {
            setTranslatedInstructions(null);
        }
    };


    return (
        <>
            {loading ? (
                <LoadingPage />
            ) : (
                <section className="bg-purple-100 py-8 relative">
                    <Link
                        to="/activities"
                        className="back-to-activities flex items-center text-purple-500 font-bold hover:text-purple-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4"
                    >
                        <IoIosArrowBack />
                    </Link>
                    <h2 className="text-3xl  font-bold text-center mb-8 text-purple-950">
                        Listening Activity
                    </h2>
                    <button
                        className="bg-purple-600 hover:bg-purple-800 text-white py-2 px-4 rounded mb-8 mx-auto block"
                        onClick={toggleInstructions}
                    >
                        {showInstructions ? "Hide Instructions" : "Show Instructions"}
                    </button>
                    {showInstructions && (
                        <div className="bg-white p-4 rounded-3xl shadow-lg mb-4 mx-4">
                            <h3 className="text-xl font-bold mb-2 text-purple-950">Instructions:</h3>
                            <p className="text-purple-800 bg-purple-200 rounded-3xl p-10 text-justify">
                                <ol className="list-decimal ml-6">
                                    <li><strong>{translatedInstructions ? translatedInstructions.objective : "Objective"} :</strong>
                                        <ul className="list-disc ml-6">
                                            <li>{translatedInstructions ? "මෙම සවන්දීමේ කාර්යයේ පරමාර්ථය වන්නේ වීඩියෝවක් නැරඹීම සහ සවන්දීම සහ එහි සාකච්ඡා කෙරෙන ප්‍රධාන සහ වැදගත් කරුණු හඳුනා ගැනීමයි." : "The objective of this listening activity is to watch a video and identify the main and important points discussed in it."}</li>
                                        </ul>
                                    </li>

                                    <li className="mt-4"><strong>{translatedInstructions ? translatedInstructions.procedure : "Procedure"} :</strong>
                                        <ul className="list-disc ml-6">
                                            <li>{translatedInstructions ? "වීඩියෝව නැරඹීම ආරම්භ කිරීමට 'Play Video' බොත්තම ක්ලික් කරන්න." : "Click on the 'Play Video' button to start watching the video."}</li>
                                            <li>{translatedInstructions ? "වීඩියෝව නරඹන අතරතුර, ඉදිරිපත් කරන අන්තර්ගතය කෙරෙහි දැඩි අවධානයක් යොමු කරන්න." : "While watching the video, pay close attention to the content being presented."}</li>
                                            <li>{translatedInstructions ? "වීඩියෝවේ සඳහන් කර ඇති ප්‍රධාන මාතෘකා, ප්‍රධාන අදහස් සහ ඕනෑම වැදගත් තොරතුරු හඳුනා ගන්න." : "Identify the main topics, key ideas, and any important information mentioned in the video."}</li>
                                            <li>{translatedInstructions ? "ඔබට අවශ්‍ය නම් ඔබට කඩදාසි කැබැල්ලක සටහන් ගත හැක, නමුත් සෑම ප්‍රශ්නයකටම තත්පර 30 ක කාල සීමාවක් ඇති බව මතක තබා ගන්න, එබැවින් ඔබේ කාලය ඵලදායී ලෙස කළමනාකරණය කරන්න." : "You may take notes on a piece of paper if you wish, but remember that each question will have a time limit of 30 seconds, so manage your time effectively."}</li>
                                        </ul>
                                    </li>

                                    <li className="mt-4"><strong>{translatedInstructions ? translatedInstructions.answeringQuestions : "Answering Questions"} :</strong>
                                        <ul className="list-disc ml-6">
                                            <li>{translatedInstructions ? "වීඩියෝව නැරඹීමෙන් පසු, අන්තර්ගතයට අදාළ ප්රශ්න මාලාවක් ඔබට ඉදිරිපත් කරනු ඇත." : "After watching the video, you will be presented with a series of questions related to the content."}</li>
                                            <li>{translatedInstructions ? "සෑම ප්‍රශ්නයකටම තත්පර 30 ක කාල සීමාවක් ඇත." : "Each question will have a time limit of 30 seconds."}</li>
                                            <li>{translatedInstructions ? "එක් එක් ප්‍රශ්නය සඳහා ඔබේ පිළිතුර ප්‍රවේශමෙන් තෝරන්න, තෝරාගත් පසු ඔබේ පිළිතුර වෙනස් කිරීමට අවස්ථාවක් නොලැබේ." : "Select your answer for each question carefully, as there will be no opportunity to change your answer once selected."}</li>
                                        </ul>
                                    </li>

                                    <li className="mt-4"><strong>{translatedInstructions ? translatedInstructions.completingActivity : "Completing the Activity"} :</strong>
                                        <ul className="list-disc ml-6">
                                            <li>{translatedInstructions ? "ඔබ සියලු ප්‍රශ්නවලට පිළිතුරු දුන් පසු, ක්‍රියාකාරකම සම්පූර්ණ වනු ඇත." : "Once you have answered all the questions, the activity will be complete."}</li>
                                            <li>{translatedInstructions ? "ඔබේ පිළිතුරුවල නිරවද්‍යතාවය සහ වීඩියෝවෙන් ප්‍රධාන කරුණු හඳුනා ගැනීමට ඔබට ඇති හැකියාව මත පදනම්ව ඔබේ කාර්ය සාධනය ඇගයීමට ලක් කෙරේ." : "Your performance will be evaluated based on the accuracy of your answers and your ability to identify the main points from the video."}</li>
                                        </ul>
                                    </li>

                                    <li className="text-red-900 bg-red-100 p-4 mt-4 rounded-3xl"><strong>{translatedInstructions ? translatedInstructions.note : "Note"} :</strong>
                                        <ul className="list-disc ml-6">
                                            <li>{translatedInstructions ? "වීඩියෝව නැරඹීමට සහ අන්තර්ගතය කෙරෙහි අවධානය යොමු කිරීමට ඔබට නිස්කලංක පරිසරයක් ඇති බවට සහතික වන්න." : "Ensure that you have a quiet environment to watch the video and concentrate on the content."}</li>
                                            <li>{translatedInstructions ? "අවධානය වෙනතකට යොමු කිරීමෙන් වළකින්න සහ වීඩියෝවේ ඉදිරිපත් කර ඇති තොරතුරු තේරුම් ගැනීමට අවධානය යොමු කරන්න." : "Avoid distractions and focus on understanding the information presented in the video."}</li>
                                        </ul>
                                    </li>
                                </ol>
                            </p>
                            <div className="mt-4 text-center">
                                <button className="bg-purple-800 hover:bg-purple-900 text-white py-2 px-4 rounded" onClick={translateInstructions}>
                                    {translatedInstructions ? "English" : "සිංහල"}
                                </button>
                            </div>
                        </div>
                    )}


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4">
                        {jobs.map((job, index) => (
                            <div key={index}>
                                <div
                                    className="bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 cursor-pointer text-purple-950"
                                    onClick={() => handleJobClick(job)}
                                >
                                    <img
                                        src={job.image}
                                        alt={job.title}
                                        className="w-full h-48 object-cover hover:opacity-75 shadow-xl transition duration-300"
                                    />
                                    <div className="p-4 text-center">
                                        <h3 className="text-lg font-bold mb-2">{job.title}</h3>
                                        <p className="text-purple-800 hover:bg-purple-200 p-2 rounded">
                                            Watch Video
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {selectedJob && (
                        <VideoPage onClose={handleClosePopup} videoUrl={selectedJob.videoUrl} />
                    )}
                </section>
            )}
        </>
    );
};

export default ListeningActivity;