import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import VideoPage from "./VideoPage.jsx";
import { IoIosArrowBack } from "react-icons/io";
import LoadingPage from "../LoadingPage/LoadingPage.jsx";

const ListeningActivity = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sample data for job details
    const jobs = [
        {
            title: "Labour",
            image: "https://img.freepik.com/free-vector/kids-overalls-helmets-building-house-happy-male-female-constructors-laying-bricks-using-construction-tools-flat-vector-illustration_74855-18390.jpg?t=st=1710088864~exp=1710092464~hmac=b06b72e32bae7899de2b18c94676a02cf6e4af4459f85d7d7de214c6a0757b78&w=900",
            link: "/Labour",
            videoUrl: "https://youtu.be/dImiR3Sr8Wo",
        },
        // Add more job details as needed
    ];

    // Simulating loading state
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

    return (
        <>
            {loading ? (
                <LoadingPage />
            ) : (
                <section className="py-8 relative bg-purple-100">
                    <Link
                        to="/activities"
                        className="back-to-activities flex items-center text-purple-500 font-bold hover:text-purple-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4"
                    >
                        <IoIosArrowBack />
                    </Link>
                    <h2 className="text-3xl font-bold text-center mb-8 text-purple-950">
                        Listening Activity
                    </h2>

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
