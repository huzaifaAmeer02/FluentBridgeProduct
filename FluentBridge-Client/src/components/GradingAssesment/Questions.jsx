import React, { useState } from "react";
import bgImage from "../../assets/questionaier-bg.jpg";

export default function Questions() {
    const [checked, setChecked] = useState(undefined);

    function onSelect() {
        setChecked(true);
        console.log("radio button change");
    }

    return (
        <div className="container mx-auto py-8 m-4" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="max-w-md mx-auto bg-white bg-opacity-75 p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Simple Question 1</h2>

                <ul>
                    <li className="flex items-center mb-4">
                        <input
                            type="radio"
                            value={checked}
                            name={"options"}
                            id="q1-option"
                            onChange={onSelect}
                            className="mr-2"
                        />
                        <label className="text-gray-700" htmlFor="q1-option">Option 1</label>
                    </li>
                </ul>
            </div>
        </div>
    );
}
