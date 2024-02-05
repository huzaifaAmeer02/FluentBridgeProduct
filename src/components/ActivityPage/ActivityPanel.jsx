import React from "react"

const ActivityPanel = () => {
    return (
        <>
            <section className='hero'>
                <h1>Welcome To Activities</h1>
            </section>
            <section>
                <div className="flex p-4">
                    <div className="w-40%"></div> {/* Placeholder for the left side content */}
                    <div className="w-2/3 flex justify-end">
                        <div className="w-2/3 p-4 bg-gray-200">
                            <h2 className="text-lg font-bold mb-4 p-3">Activity Panel</h2>
                            <div className="grid grid-cols-2 gap-4 p-2">
                                {/* Activity 1 */}
                                <a href="#" className="block bg-blue-500 text-white p-2 text-center">Speaking</a>
                                {/* Activity 2 */}
                                <a href="#" className="block bg-green-500 text-white p-2 text-center">Listening</a>
                                {/* Activity 3 */}
                                <a href="#" className="block bg-yellow-500 text-white p-2 text-center">Writing</a>
                                {/* Activity 4 */}
                                <a href="#" className="block bg-red-500 text-white p-2 text-center">Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ActivityPanel