import { useRef } from "react";

export default function Start({ onStart }) {
    return (
        <div className="start">
            <button className="bg-purple-500 px-10 py-4 rounded-2xl hover:bg-purple-950" onClick={onStart}>
                Start
            </button>
        </div>
    );
}