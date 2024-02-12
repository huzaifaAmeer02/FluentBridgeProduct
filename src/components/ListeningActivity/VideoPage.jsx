import React from "react";
import { Link } from "react-router-dom";

const VideoPage = () => {
    // Sample data for job details
    const jobs = [
        {
            title:"Labour",
            videourl:"https://youtu.be/-X2dsCQMLcs"
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
            videourl: "",
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

    return (
        <section className="bg-gray-200 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Listening Activity</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 p-4">
                {jobs.map((job, index) => (
                    <Link to={job.link} key={index}>
                        <div
                            className="relative flex items-center justify-center bg-cover bg-center rounded-xl text-white font-bold text-center transition duration-300 hover:bg-opacity-50 backdrop-filter backdrop-blur-md overflow-hidden"
                            style={{
                                backgroundImage: `url(${job.image})`,
                                paddingTop: "100%", // Maintain aspect ratio
                            }}
                        >
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 rounded-md transition duration-300 hover:bg-opacity-50">
                                <span>{job.title}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default VideoPage;
