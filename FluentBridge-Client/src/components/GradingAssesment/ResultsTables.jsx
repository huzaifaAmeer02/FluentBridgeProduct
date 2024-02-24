import React from "react";
import { motion } from "framer-motion";

export default function ResultsTables() {
    return (
        <div className="container mx-auto px-0 py-8 overflow-x-hidden"> {/* Added overflow-x-hidden */}
            <motion.div
                className="bg-white p-4 rounded-lg shadow-md"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-xl font-semibold mb-4">Be Your Own Competitor</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50 sticky top-0">
                        <tr>
                            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Username
                            </th>
                            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Attempts
                            </th>
                            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Earned Points
                            </th>
                            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Result
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-4 py-3 whitespace-nowrap sm:px-1 sm:py-2 md:px-3 md:py-3">Ishrath</td>
                            <td className="px-4 py-3 whitespace-nowrap sm:px-1 sm:py-2 md:px-3 md:py-3">2</td>
                            <td className="px-4 py-3 whitespace-nowrap sm:px-1 sm:py-2 md:px-3 md:py-3">39</td>
                            <td className="px-4 py-3 whitespace-nowrap sm:px-1 sm:py-2 md:px-3 md:py-3">Passed</td>
                        </tr>
                        {/* Add more table rows as needed */}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
}
