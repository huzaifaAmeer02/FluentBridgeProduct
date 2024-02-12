import React from "react";
import { Link } from "react-router-dom";

const VideoPage = ({ selectedOption }) => {
    // Sample data for job details
    const jobs = [
        {
            title: "Labour",
            videourl: "https://youtu.be/-X2dsCQMLcs"
        },
        {
            title: "Engineer",
            videourl: ""
        },
        {
            title: "Teacher",
            videourl: ""
        },
        {
            title: "Artists",
            videourl: ""
        },
        {
            title: "Driver",
            videourl: ""
        },
        {
            title: "Nurse",
            videourl: ""
        },
        {
            title: "Care Taker",
            videourl: ""
        },
        {
            title: "IT Consultant",
            videourl: ""
        },
        {
            title: "Pharmacist",
            videourl: ""
        },
        {
            title: "Store Keeper",
            videourl: ""
        }
    ];

    // Find the selected job
    const selectedJob = jobs.find(job => job.title.toLowerCase() === selectedOption.toLowerCase());

    return (
        <section className="flex flex-col items-center justify-center h-screen">
            {selectedJob && selectedJob.videourl ? (
                <div className="max-w-2xl w-full">
                    <h2 className="text-2xl font-bold mb-4">{selectedJob.title}</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src={selectedJob.videourl}
                            title={selectedJob.title}
                            className="w-full h-full"
                            allowFullScreen
                        />
                    </div>
                    <Link to="/quiz" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Take Quiz</Link>
                </div>
            ) : (
                <p className="text-xl">Video not available for {selectedOption}</p>
            )}
        </section>
    );
};

export default VideoPage;
