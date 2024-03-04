import { useRef } from "react";

export default function Start({ onStart }) {
    return (
        <div className="start">
            <button className="startButton" onClick={onStart}>
                Start
            </button>
        </div>
    );
}