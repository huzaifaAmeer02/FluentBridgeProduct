

// import { useHistory } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import signPic from "../../assets/signup.jpg"


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

            // Navigate to the activity page after a short delay
            setTimeout(() => {
                navigate('/activities');
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
                // backgroundImage: `url(${signPic})`,
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
                    {/* Add the image container */}
                    <div className="text-center mb-4">
                        <img src={signPic} alt="Signup Image" className="mx-auto" style={{ maxHeight: '200px' }} />
                    </div>
                    {/* End of image container */}
                    <h1 className="text-2xl font-bold text-center text-purple-950 mb-4">
                        Signup to FluentBridge
                    </h1>
                    {/*<div className="container mx-auto">*/}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <div className="form-group">
                                    <label htmlFor="name" className="text-gray-700 m-2">Full Name</label>
                                    <input
                                        type="text"
                                        onChange={(e) => { setFullName(e.target.value) }}
                                        className='form-input w-full p-2 mt-2' placeholder='Full Name here'
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="form-group">
                                    <label htmlFor="email" className="text-gray-700 m-2">Email</label>
                                    <input
                                        type="email"
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        className='form-input w-full p-2 mt-2' placeholder='Email here'
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="form-group">
                                    <label htmlFor="password" className="text-gray-700 m-2">Password</label>
                                    <input
                                        type="password"
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        className='form-input w-full p-2 mt-2' placeholder='Password here'
                                    />
                                </div>
                            </div>
                            <div className="col-span-3 mt-4">
                                <button
                                    className='bg-purple-950 text-white py-2 px-4 w-full rounded'
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
                    {/*</div>*/}




                </div>
            )
        </motion.div>
    );
}
