import React from "react";

// eslint-disable-next-line react/prop-types
const ChatBotModal = ({ onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8">
                <h2 className="text-lg font-semibold mb-4">ChatBot</h2>
                {/* Your chatbot UI components */}
                <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    Close
                </button>
            </div>
        </div>
    );
};
export default ChatBotModal;
