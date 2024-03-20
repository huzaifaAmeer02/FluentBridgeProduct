// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function ResultsTables() {
    const [attemptData, setAttemptData] = useState([]);

    useEffect(() => {
        // Retrieve attempts from local storage
        const storedAttempts = JSON.parse(localStorage.getItem("quizAttempts")) || [];
        // Sort the attempts by earned points in descending order
        const sortedAttempts = storedAttempts.sort((a, b) => b.earnPoints - a.earnPoints);
        // Update the attempt data state with sorted attempts
        setAttemptData(sortedAttempts);
    }, []);

    return (
        <div className="container mx-auto px-0 py-8 overflow-x-hidden">
            <motion.div
                className="bg-white p-4 rounded-lg shadow-md"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-xl font-semibold mb-4 text-purple-950">Grading Assesment Rankings</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-purple-200">
                        <thead className="bg-gray-50 sticky top-0">
                            <tr>
                                <th className="px-3 py-2 text-left text-xs font-medium text-purple-900 uppercase tracking-wider">
                                    Rank
                                </th>
                                <th className="px-3 py-2 text-left text-xs font-medium text-purple-900 uppercase tracking-wider">
                                    Username
                                </th>
                                <th className="px-3 py-2 text-left text-xs font-medium text-purple-900 uppercase tracking-wider">
                                    Attempts
                                </th>
                                <th className="px-3 py-2 text-left text-xs font-medium text-purple-900 uppercase tracking-wider">
                                    Earned Points
                                </th>
                                <th className="px-3 py-2 text-left text-xs font-medium text-purple-900 uppercase tracking-wider">
                                    Result
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {attemptData.map((attempt, index) => (
                                <tr key={index} className={index === 0 ? 'bg-[#7E22CE]' : 'bg-purple-400'}>
                                    <td className="px-4 py-3 whitespace-nowrap sm:px-1 sm:py-2 md:px-3 md:py-3">{index + 1}</td>
                                    <td className="px-4 py-3 whitespace-nowrap sm:px-1 sm:py-2 md:px-3 md:py-3">{attempt.userId}</td>
                                    <td className="px-4 py-3 whitespace-nowrap sm:px-1 sm:py-2 md:px-3 md:py-3">{attempt.attempts}</td>
                                    <td className="px-4 py-3 whitespace-nowrap sm:px-1 sm:py-2 md:px-3 md:py-3">{attempt.earnPoints}</td>
                                    <td className="px-4 py-3 whitespace-nowrap sm:px-1 sm:py-2 md:px-3 md:py-3">{attempt.flag ? "Passed" : "Failed"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
}
