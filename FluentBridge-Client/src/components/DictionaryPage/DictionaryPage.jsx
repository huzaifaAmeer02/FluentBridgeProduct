import React from "react";
import dictionary2 from "../../assets/dictionary2.png";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { IoIosArrowBack } from "react-icons/io";

const DictionaryPage = () => {
    // Define entrance animations using react-spring
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 800 },
    });

    const slideIn = useSpring({
        transform: "translateY(0)",
        from: { transform: "translateY(100px)" },
        config: { duration: 1000 },
    });

    return (
        <>
            <Link
                to="/vocabpanel"
                className="back-to-activities flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4"
            >
                <IoIosArrowBack />
            </Link>
            <animated.section style={{ ...fadeIn, backgroundImage: `url(${dictionary2})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', paddingTop: '2rem', paddingBottom: '2rem', backgroundColor: '#055B5C' }} className="text-gray-600 body-font flex lg:flex-row-reverse">
                <animated.div style={{ ...slideIn, delay: 200, position: 'absolute', top: '50%', left: '75%', transform: 'translate(-50%, -50%)' }}  className="lg:w-1/3 text-white pt-9">
                    <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium">
                        FluentBridge Dictionary
                    </h1>

                    <p className="mb-8 leading-relaxed">
                        Start your journey into the world of language and expand your
                        vocabulary with our easy-to-use dictionary application.
                        <br />
                        <br />
                        <i>
                            - Search for words and get detailed definitions.
                            <br />
                            - Listen to the pronunciation of words.
                            <br />
                            - Save your favorite words for quick reference.
                            <br />
                            - Explore a rich database of words and their meanings.
                            <br />
                        </i>
                    </p>

                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start">
                        <Link to="/dictionaryapi">
                            <button className="mb-4 lg:mb-0 lg:mr-4 inline-flex text-white bg-brown-700 border-0 py-2 px-6 focus:outline-none hover:bg-brown-900 rounded text-lg">
                                Start Using
                            </button>
                        </Link>
                    </div>
                </animated.div>
            </animated.section>
        </>
    );
};

export default DictionaryPage;
