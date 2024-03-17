import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Title from "./Title";
import axios from "axios";
import RecordMessage from "./RecordMessage";
import LoadingPage from "../LoadingPage/LoadingPage";

const Controller = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulating a 2-second delay for demonstration purposes
    }, []);

    function createBlobURL(data) {
        const blob = new Blob([data], { type: "audio/mpeg" });
        const url = window.URL.createObjectURL(blob);
        return url;
    }

    const handleStop = async (blobUrl) => {
        setIsLoading(true);

        // Append recorded message to messages
        const myMessage = { sender: "me", blobUrl };
        const messagesArr = [...messages, myMessage];

        // convert blob url to blob object
        fetch(blobUrl)
            .then((res) => res.blob())
            .then(async (blob) => {
                // Construct audio to send file
                const formData = new FormData();
                formData.append("file", blob, "myFile.wav");

                // send form data to api endpoint
                await axios
                    .post("http://localhost:8000/post-audio", formData, {
                        headers: {
                            "Content-Type": "audio/mpeg",
                        },
                        responseType: "arraybuffer", // Set the response type to handle binary data
                    })
                    .then((res) => {
                        const blob = res.data;
                        const audio = new Audio();
                        audio.src = createBlobURL(blob);

                        // Append to audio
                        const rachelMessage = { sender: "rachel", blobUrl: audio.src };
                        messagesArr.push(rachelMessage);
                        setMessages(messagesArr);

                        // Play audio
                        setIsLoading(false);
                        audio.play();
                    })
                    .catch((err) => {
                        console.error(err);
                        setIsLoading(false);
                    });
            });
    };

    return (
        <>
        {
            loading ? (<LoadingPage/>)
            :
                (<div className="h-screen overflow-y-hidden">
                <Link
                    to="/activities"
                    className="back-to-activities flex items-center text-purple-500 font-bold hover:text-purple-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4"
                >
                    <IoIosArrowBack />
                </Link>
                {/* Title */}
                <Title setMessages={setMessages} />

                <div className="flex flex-col justify-between h-full overflow-y-scroll pb-96">
                    {/* Conversation */}
                    <div className="mt-5 px-5">
                        {messages?.map((audio, index) => {
                            return (
                                <div
                                    key={index + audio.sender}
                                    className={
                                        "flex flex-col " +
                                        (audio.sender === "rachel" && "flex items-end")
                                    }
                                >
                                    {/* Sender */}
                                    <div className="mt-4 ">
                                        <p
                                            className={
                                                audio.sender === "rachel"
                                                    ? "text-right mr-2 italic text-purple-950"
                                                    : "ml-2 italic text-purple-500"
                                            }
                                        >
                                            {audio.sender}
                                        </p>

                                        {/* Message */}
                                        <audio
                                            src={audio.blobUrl}
                                            className="appearance-none"
                                            controls
                                        />
                                    </div>
                                </div>
                            );
                        })}

                        {messages.length === 0 && !isLoading && (
                            <div className="text-center font-light italic mt-10">
                                Send FluentBridge a message...
                            </div>
                        )}

                        {isLoading && (
                            <div className="text-center font-light italic mt-10 animate-pulse">
                                Gimme a few seconds...
                            </div>
                        )}
                    </div>

                    {/* Recorder */}
                    <div className="fixed bottom-0 w-full py-6 border-t text-center bg-gradient-to-r from-[#140A20] to-[#5C2E91]">
                        <div className="flex justify-center items-center w-full">
                            <div>
                                <RecordMessage handleStop={handleStop} />
                            </div>
                        </div>
                    </div>
                </div>
                </div>)
        }
            
        </>
            
    );
};

export default Controller;