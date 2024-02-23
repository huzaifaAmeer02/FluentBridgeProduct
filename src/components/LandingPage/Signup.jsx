// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import LoadingPage from "../LoadingPage/LoadingPage.jsx";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AxiosInstance from "../../config/axiosInstance.jsx";

export default function Signup() {
    const [loading, setLoading] = useState(true);
    const [fullName, setFullName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulating a 2-second delay for demonstration purposes
    }, []);

    const inputRef = useRef(null);
    const signup = async () => {
        try {
            const response = await AxiosInstance.post('/users/register', {
                fullName, email, password
            });
            console.log(response);

            setEmail('');
            setFullName('');
            setPassword('');

        } catch (e) {
            console.log(e)
        }
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center h-screen"
            style={{
                backgroundImage: `url('https://img.freepik.com/free-photo/diverse-multiethnic-kids-junior-school-students-group-study-together-classroom-generative-ai_1258-166493.jpg?t=st=1708657512~exp=1708661112~hmac=c8a0d4cdb34b79646270515622f94e1fb522c8d20fc28748a113268243ff8400&w=996')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}

        >
            {loading ? (
                <LoadingPage />
            ) : (
                /*==*/
                <div className="container mx-auto max-w-lg p-8 bg-white bg-opacity-90 shadow-lg rounded-lg">
                    <Link
                        to="/activities"
                        className="back-to-activities flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4"
                    >
                        <IoIosArrowBack />
                    </Link>
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                        Happy learning
                    </h1>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="col-span-3">
                                <div className="form-group">
                                    <label htmlFor="name" className="text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        onChange={(e) => { setFullName(e.target.value) }}
                                        className='form-input w-full' placeholder='Full Name here'
                                    />
                                </div>
                            </div>
                            <div className="col-span-3">
                                <div className="form-group">
                                    <label htmlFor="email" className="text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        className='form-input w-full' placeholder='Email here'
                                    />
                                </div>
                            </div>
                            <div className="col-span-3">
                                <div className="form-group">
                                    <label htmlFor="password" className="text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        className='form-input w-full' placeholder='Password here'
                                    />
                                </div>
                            </div>
                            <div className="col-span-3 mt-4">
                                <button
                                    className='bg-blue-500 text-white py-2 px-4 w-full rounded'
                                    onClick={signup}
                                >
                                    Register Now
                                </button>
                            </div>
                            <div className="col-span-3 mt-2">
                                <Link to="/login" className='border border-gray-300 text-gray-700 py-2 px-4 w-full rounded inline-block text-center'>Already have an Account</Link>
                            </div>
                        </div>
                    </div>




                </div>
            )}
        </motion.div>
    );
}
