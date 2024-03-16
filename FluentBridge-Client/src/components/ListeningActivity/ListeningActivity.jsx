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
            image: "https://img.freepik.com/free-photo/construction-workers-sunset_53876-138180.jpg?w=900&t=st=1707675337~exp=1707675937~hmac=88653ffa23aecd19c4753b729f43b7e73dc70638b03813eab70d37a3fa4433a4",
            link: "/Labour",
            videoUrl: "https://youtu.be/dImiR3Sr8Wo",
        },
        {
            title: "Engineer",
            image: "https://img.freepik.com/free-photo/protective-equipment-ensures-safety-work_60438-3943.jpg?t=st=1707676389~exp=1707679989~hmac=92ddeb27a72085020e8b5572aa232b5a1613a22ee5fc640edf8105058ce5f9cf&w=1380",
            link: "/Engineer",
            videoUrl: "https://youtu.be/dImiR3Sr8Wo",
        },
        {
            title: "Teacher",
            image: "https://img.freepik.com/free-photo/portrait-senior-male-professor-education-day_23-2150980102.jpg?t=st=1707676550~exp=1707680150~hmac=8d938dd34004f2bc26aadc8a07b8b272d9c545de48fe9ecb59d38652d32c4987&w=826",
            link: "/Teacher",
            videoUrl: "https://www.youtube.com/watch?v=toCn9-9hXoY",
        },
        {
            title: "Artists",
            image: "https://img.freepik.com/free-photo/expert-carpenter-creates-art-using-old-wood-generated-by-ai_188544-27902.jpg?t=st=1707676810~exp=1707680410~hmac=214c00fb77b97dc5faa07eca7822df2c144270539bc98b3df003ffca4013797d&w=996",
            link: "/Artists",
            videoUrl: "https://www.youtube.com/watch?v=_Fwf45pIAtM",
        },
        {
            title: "Driver",
            image: "https://img.freepik.com/premium-photo/indian-male-driver-delivery-van-uniform-looking-camera-with-smile_466689-96393.jpg?w=826",
            link: "/Driver",
            videoUrl: "https://www.youtube.com/watch?v=zpsVpnvFfZQ",
        },
        {
            title: "Nurse",
            image: "https://img.freepik.com/free-photo/medium-shot-female-nurse-hospital_23-2150796710.jpg?t=st=1707677272~exp=1707680872~hmac=a712895918ac7a4e7d5853669d6df944b85ddef469c41796d1ad30ba6b00ab40&w=740",
            link: "/Nurse",
            videoUrl: "https://youtu.be/Y6_HBR2Ue2k"
        },
        {
            title: "Care Taker",
            image: "https://img.freepik.com/free-photo/senior-adults-embracing-smiling-sunlight-outdoors-generated-by-ai_188544-28058.jpg?t=st=1707677329~exp=1707680929~hmac=ba14133970261e201d41fce7dab6edcb28f2c6e9aa5bb7dd0dff6358d921659e&w=996",
            link: "/Taker",
            videoUrl: "https://youtu.be/dImiR3Sr8Wo",
        },
        {
            title: "IT Consultant",
            image: "https://img.freepik.com/premium-photo/young-programmer-computer-boss-chief-talking-office-colleagues-discussing-new-hardware-software-coding-programming-process_839035-190750.jpg?w=826",
            link: "/Consultant",
            videoUrl: "https://youtu.be/dImiR3Sr8Wo",
        },
        {
            title: "Pharmacist",
            image: "https://img.freepik.com/free-photo/group-pharmacists-pharmacy-flat-design-cartoon-illustration_123827-28136.jpg?t=st=1707677491~exp=1707681091~hmac=246f3dfe3455d85752696558bd8902975e5cd3af2c501833e56ec99e7fab00f4&w=826",
            link: "/Pharmacist",
            videoUrl: "https://youtu.be/R5C-RJTqD5w",
        },
        {
            title: "Store Keeper",
            image: "https://img.freepik.com/premium-photo/smiling-woman-worker-hardware-warehouse-standing-checking-supplies-her-tablet-look-camera_73899-14238.jpg?w=1060",
            link: "/Keeper",
            videoUrl: "https://www.youtube.com/watch?v=qKVW_wJs91Q",
        }
        // Add more job details as needed
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
                note: "සටහන"
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
                <section className="bg-purple-200 py-8 relative">
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
                        <div className="bg-white p-4 rounded shadow-lg mb-4 mx-4">
                            <h3 className="text-xl font-bold mb-2 text-purple-950">Instructions:</h3>
                            <p className="text-purple-800 bg-purple-200 p-10 text-justify">
                                <ol className="list-decimal ml-6">
                                    <li><strong>{translatedInstructions ? translatedInstructions.objective : "Objective"} :</strong>
                                        <ul className="list-disc ml-6">
                                            <li>{translatedInstructions ? "The objective of this listening activity is to watch a video and identify the main and important points discussed in it." : "The objective of this listening activity is to watch a video and identify the main and important points discussed in it."}</li>
                                        </ul>
                                    </li>

                                    <li><strong>{translatedInstructions ? translatedInstructions.procedure : "Procedure"} :</strong>
                                        <ul className="list-disc ml-6">
                                            <li>{translatedInstructions ? "Click on the 'Play Video' button to start watching the video." : "Click on the 'Play Video' button to start watching the video."}</li>
                                            <li>{translatedInstructions ? "While watching the video, pay close attention to the content being presented." : "While watching the video, pay close attention to the content being presented."}</li>
                                            <li>{translatedInstructions ? "Identify the main topics, key ideas, and any important information mentioned in the video." : "Identify the main topics, key ideas, and any important information mentioned in the video."}</li>
                                            <li>{translatedInstructions ? "You may take notes on a piece of paper if you wish, but remember that each question will have a time limit of 30 seconds, so manage your time effectively." : "You may take notes on a piece of paper if you wish, but remember that each question will have a time limit of 30 seconds, so manage your time effectively."}</li>
                                        </ul>
                                    </li>

                                    <li><strong>{translatedInstructions ? translatedInstructions.answeringQuestions : "Answering Questions"} :</strong>
                                        <ul className="list-disc ml-6">
                                            <li>{translatedInstructions ? "After watching the video, you will be presented with a series of questions related to the content." : "After watching the video, you will be presented with a series of questions related to the content."}</li>
                                            <li>{translatedInstructions ? "Each question will have a time limit of 30 seconds." : "Each question will have a time limit of 30 seconds."}</li>
                                            <li>{translatedInstructions ? "Select your answer for each question carefully, as there will be no opportunity to change your answer once selected." : "Select your answer for each question carefully, as there will be no opportunity to change your answer once selected."}</li>
                                        </ul>
                                    </li>

                                    <li><strong>{translatedInstructions ? translatedInstructions.completingActivity : "Completing the Activity"} :</strong>
                                        <ul className="list-disc ml-6">
                                            <li>{translatedInstructions ? "Once you have answered all the questions, the activity will be complete." : "Once you have answered all the questions, the activity will be complete."}</li>
                                            <li>{translatedInstructions ? "Your performance will be evaluated based on the accuracy of your answers and your ability to identify the main points from the video." : "Your performance will be evaluated based on the accuracy of your answers and your ability to identify the main points from the video."}</li>
                                        </ul>
                                    </li>

                                    <li className="text-red-900 bg-red-100 p-4 mt-4"><strong>{translatedInstructions ? translatedInstructions.note : "Note"} :</strong>
                                        <ul className="list-disc ml-6">
                                            <li>{translatedInstructions ? "Ensure that you have a quiet environment to watch the video and concentrate on the content." : "Ensure that you have a quiet environment to watch the video and concentrate on the content."}</li>
                                            <li>{translatedInstructions ? "Avoid distractions and focus on understanding the information presented in the video." : "Avoid distractions and focus on understanding the information presented in the video."}</li>
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
