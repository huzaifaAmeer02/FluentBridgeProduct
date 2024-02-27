// eslint-disable-next-line no-unused-vars
import React, {useEffect} from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ResultsTables from "./ResultsTables.jsx";
import {useDispatch, useSelector} from "react-redux";
import {attempts_Number} from "../../Helper/helper.js";
import {earnPoints_Number} from "../../Helper/helper.js";
import {flagResult} from "../../Helper/helper.js";

import {resetAllAction} from "../../Redux/Question_Reducer.js";
import {resetResultAction} from "../../Redux/Result_Reducer.js";

export default function Results() {
    const dispatch = useDispatch()
    const {questions: {queue, answers}, result : {result, userId}} = useSelector(state =>state)

    useEffect(()=>{
        console.log(result)
    })
    const totalPoints = queue.length * 10
    const attemts = attempts_Number(result)
    const earnPoints = earnPoints_Number(result , answers ,10)
    const flag = flagResult(totalPoints, earnPoints)

    function onRestart() {
        console.log("On Restart");
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

    return (
        <div className="container mx-auto px-4 py-8 flex flex-col items-center bg-gray-400 min-h-screen">

            <h1 className="border-2 rounded-3xl text-3xl font-bold text-center mb-8 p-4 text-white m-4 bg-[#4FA4A5]">Grading Assessment Results</h1>
            <motion.div className="bg-white p-8 rounded-lg shadow-md"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>

                <div className="text-gray-800 flex-wrap">
                    <div className="flex justify-between mb-4">
                        <span className="font-bold">Username : </span>
                        <span className="text-blue-500">{userId}</span>
                    </div>
                </div>
                <div className="text-gray-800 flex-wrap">
                    <div className="flex justify-between mb-4">
                        <span className="font-bold">Total Quiz Points :</span>
                        <span>{totalPoints || 0}</span>
                    </div>
                </div>
                <div className="text-gray-800 flex-wrap">
                    <div className="flex justify-between mb-4">
                        <span className="font-bold">Total Questions : </span>
                        <span>{queue.length || 0}</span>
                    </div>
                </div>
                <div className="text-gray-800 flex-wrap">
                    <div className="flex justify-between mb-4">
                        <span className="font-bold">Answered Questions : </span>
                        <span>{attemts || 0}</span>
                    </div>
                </div>
                <div className="text-gray-800 flex-wrap">
                    <div className="flex justify-between mb-4">
                        <span className="font-bold">Total Earned Points :</span>
                        <span className="ml-8">{earnPoints || 1}</span>
                    </div>
                </div>
                <div className="text-gray-800 flex-wrap">
                    <div className="flex justify-between mb-4">
                        <span className="font-bold">Quiz Results :</span>
                        <span className={flag ? "text-green-500 ml-4 bg-green-200 p-1" : "text-red-500 ml-4 bg-red-200 rounded p-1"}>{flag ? "Passed" : "Failed"}</span>

                    </div>
                </div>

            </motion.div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center">
                <Link to="/gradingquiz" onClick={onRestart} className="bg-[#023C41] hover:bg-[#001415] text-white font-bold py-2 px-4 rounded mb-2 sm:mr-2 sm:mb-0">
                    Restart Quiz
                </Link>
                <Link to="/activities" onClick={onRestart} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                    Checkout Quiz
                </Link>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-center">
                <ResultsTables/>
            </div>
        </div>
    );
}
