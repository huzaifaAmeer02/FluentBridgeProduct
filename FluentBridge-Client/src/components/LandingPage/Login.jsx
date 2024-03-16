import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AxiosInstance from "../../config/axiosInstance";
import signPic from "../../assets/signup.jpg"

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const login = async () => {
        try {
            const response = await AxiosInstance.post('/users/login', { email, password });
            setErrorMessage('');
            // Add your cookie logic here
            navigate('/home');
        } catch (error) {
            setErrorMessage('Invalid email or password. Please try again.');
            console.error(error);
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center h-screen py-22"
            style={{
                backgroundColor: "#271133",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="container mx-auto max-w-lg p-8 bg-purple-400 bg-opacity-90 shadow-lg mb-2">
                <Link to="/activities" className="back-to-activities flex items-center text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out rounded-lg p-2 bg-white absolute left-4 top-4">
                    <IoIosArrowBack />
                </Link>
                <h1 className="text-2xl font-bold text-center text-purple-950 mb-4">Login to FluentBridge</h1>
                {/* Add the image container */}
                <div className="text-center mb-4">
                    <img src={signPic} alt="Signup Image" className="mx-auto" style={{ maxHeight: '100px' }} />
                </div>
                {/* End of image container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <div className="form-group">
                            <label htmlFor="email" className="text-gray-700 m-2">Email</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-input w-full p-2 mt-2" placeholder="Email here" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="form-group">
                            <label htmlFor="password" className="text-gray-700 m-2">Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-input w-full p-2 mt-2" placeholder="Password here" />
                        </div>
                    </div>
                    <div className="col-span-2 mt-4">
                        <button className="bg-purple-950 text-white py-2 px-4 w-full rounded" onClick={login}>Login</button>
                    </div>
                    {errorMessage && (
                        <div className="col-span-2 mt-2 text-red-500 bg-white p-2 rounded-xl">{errorMessage}</div>
                    )}
                    <div className="col-span-2 mt-2">
                        <Link to="/signup" className="border border-purple-950 text-purple-950 py-2 px-4 w-full rounded inline-block text-center">Sign up</Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
