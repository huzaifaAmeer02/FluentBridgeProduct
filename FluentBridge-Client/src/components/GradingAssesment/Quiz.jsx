// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Questions from "./Questions.jsx";
import { MoveNextQuestion, MovePreviousQuestion } from "../../Hooks/FetchQuestion.js";
import { pushAnswer } from "../../Hooks/setResults.js";

/* Importing the redux store */
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Quiz() {
    const [check, setChecked] = useState(undefined);
    const result = useSelector(state => state.result.result);
    const { queue, trace } = useSelector(state => state.questions);
    const dispatch = useDispatch();

    /* Next button event handler */
    function onNext() {
        if (trace < queue.length) {
            /* Updating the trace's value */
            dispatch(MoveNextQuestion());

            if (result.length <= trace) {
                dispatch(pushAnswer(check));
            }
        }
        setChecked(undefined);
    }

    /* Previous button event handler */
    function onPrevious() {
        if (trace > 0) {
            /* Updating the trace's value */
            dispatch(MovePreviousQuestion());
        }
    }

    function onChecked(check) {
        setChecked(check);
    }

    /* Finish the assessment after the last question */
    if (result.length && result.length >= queue.length) {
        return <Navigate to="/results" replace={true}></Navigate>;
    }

    return (
        <div className="container mx-auto px-4 py-8" style={{ background: "linear-gradient(135deg, #5C2E91, #8C61FF)" }}>
            <h1 className="border-2 rounded-3xl text-3xl font-bold text-center mb-8 p-4 text-white m-4">Grading Assessment</h1>

            <Questions onChecked={onChecked} />{/* Questions */}
            {/* Grid for buttons */}
            <div className="flex justify-between">
                {/* Previous button */}
                {trace > 0 ? <button onClick={onPrevious} className="rounded-2xl bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-3 sm:px-4 shadow-md transition duration-300 ease-in-out w-1/3 sm:w-auto">Previous</button> : <div></div>}
                {/* Next button */}
                <button onClick={onNext} className="rounded-2xl bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-3 sm:px-4 shadow-md transition duration-300 ease-in-out w-1/3 sm:w-auto">Next</button>
            </div>
        </div>
    );
}
