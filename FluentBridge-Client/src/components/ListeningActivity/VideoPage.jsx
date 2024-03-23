import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

// eslint-disable-next-line react/prop-types
const VideoPage = ({ onClose }) => {
    // State to store the fetched videos
    const [videos, setVideos] = useState([]);

    // useEffect hook to fetch the videos when the component mounts
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                // Array to store fetched video URLs
                const fetchedVideos = [];

                // Loop to fetch each video individually
                for (let i = 1; i <= 10; i++) { // Assuming 10 videos with IDs from 1 to 10
                    const response = await fetch(`YOUR_VIDEO_API_ENDPOINT/${i}`); // Replace "YOUR_VIDEO_API_ENDPOINT" with your actual API endpoint
                    if (!response.ok) {
                        throw new Error(`Failed to fetch video ${i}`);
                    }
                    const data = await response.json();
                    fetchedVideos.push(data.videoUrl);
                }

                // Update the state with fetched videos
                setVideos(fetchedVideos);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        fetchVideos(); // Call the fetchVideos function when the component mounts
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-purple-200 p-8 rounded-lg relative">
                <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Render ReactPlayer for each fetched video */}
                {videos.map((videoUrl, index) => (
                    <div key={index} className="mb-8">
                        <ReactPlayer
                            url={videoUrl}
                            controls
                            playing
                            width="100%"
                            height="auto"
                            className="w-full max-w-screen-lg max-h-screen-3/4 mx-auto"
                        />
                        <Link to={`/listeningquiz/${index + 1}`} className="block text-center mt-4 bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-950 transition duration-300">Take Quiz</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoPage;
