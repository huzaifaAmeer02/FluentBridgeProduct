// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";

export default function ResultsTables() {
    return (
        <div className="container mx-auto px-4 py-8">
            <motion.div
                className="bg-white p-4 rounded-lg shadow-md"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-xl font-semibold mb-4">Be Your Own Competitor</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Username
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Attempts
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Earned Points
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Result
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Ishrath</td>
                            <td className="px-6 py-4 whitespace-nowrap">2</td>
                            <td className="px-6 py-4 whitespace-nowrap">39</td>
                            <td className="px-6 py-4 whitespace-nowrap">Passed</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
}
