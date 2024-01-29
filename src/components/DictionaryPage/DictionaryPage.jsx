import React from "react"
import dictionary from "../../assets/dictionary.jpg"
import {Link} from "react-router-dom";

const DictionaryPage = () => {
    return (
        <>
            <section className="text-gray-600 body-font top-10">
                <div className="container mx-auto flex flex-col items-center lg:flex-row px-5 py-12 lg:py-24">
                    <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                        <img
                            className="object-cover object-center rounded-3xl w-full h-64 lg:h-auto"
                            alt="hero"
                            src={dictionary}
                        />
                    </div>

                    <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-white py-10">
                            FluentBridge Dictionary
                        </h1>

                        <p className="mb-8 leading-relaxed text-white">
                            Start your journey into the world of language and expand your vocabulary with our easy-to-use dictionary application.<br/><br/>
                            <i>
                                - Search for words and get detailed definitions.<br/>
                                - Listen to the pronunciation of words.<br/>
                                - Save your favorite words for quick reference.<br/>
                                - Explore a rich database of words and their meanings.<br/>
                            </i>
                        </p>
                        <div
                            className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start">
                            <Link to='/dictionaryapi'>
                                <button
                                    className="mb-4 lg:mb-0 lg:mr-4 inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
                                        Start Using
                                </button>
                            </Link>
                            <Link to='/gamePage'>
                                <button
                                    className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                    Play Game
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default DictionaryPage