

// import { useHistory } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import signPic from "../../assets/signing.jpg"


import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AxiosInstance from "../../config/axiosInstance";

export default function Signup() {

    const [fullName, setFullName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');




    const signup = async () => {
        try {
            const response = await AxiosInstance.post('/users/signup', {
                fullName, email, password
            });
            console.log(response);

            setEmail('');
            setFullName('');
            setPassword('');

            // Display success message
            setSuccessMessage('Signup successful!');

            // Clear any previous error message
            setErrorMessage('');

            // Navigate to the home page after a short delay
            setTimeout(() => {
                navigate('/home');
            }, 2000);


        } catch (error) {
            setErrorMessage('Invalid-password or email is already exists. Please try again.');
            console.log(error);
            // Handle error or display an error message if needed
        }
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center h-screen"
            style={{
                backgroundImage: `url(${signPic})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}

        >

            (

                <div className="container mx-auto max-w-lg p-8 bg-purple-400 bg-opacity-90 shadow-lg rounded-3xl">
                    <Link
                        to="/activities"
                        className="back-to-activities flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4"
                    >
                        <IoIosArrowBack />
                    </Link>
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                        Signup
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
                                {errorMessage && (
                                    <p className="text-red-500 mt-2">{errorMessage}</p>
                                )}
                            </div>
                            <div className="col-span-3 mt-2">
                                <Link to="/login" className='border border-gray-300 text-gray-700 py-2 px-4 w-full rounded inline-block text-center'>Already have an Account</Link>
                            </div>
                        </div>
                    </div>




                </div>
            )
        </motion.div>
    );
}
