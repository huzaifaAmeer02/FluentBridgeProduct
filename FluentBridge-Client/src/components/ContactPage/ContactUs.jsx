import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebaseDB from "./firebase";
import '@fortawesome/fontawesome-free/css/all.css';
import HeroImage from '../ContactPage/assets/contact_us.jpg';

const HeroSection = () => {
    return (
        <section className="hero-section relative h-screen">
            <img src={HeroImage} alt="Hero Image" className="rounded-lg shadow-xl w-full h-full object-cover" />
        </section>
    );
};

const ContactUs = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const { name, email, subject, message } = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !message) {
            toast.error("Please provide a value in each input field");
        } else {
            firebaseDB.child("contacts").push(state);
            setState({ name: "", email: "", subject: "", message: "" });
            toast.success("Form submitted successfully");
        }
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    return (
        <>
            <HeroSection />
            <section className="py-20 contact-section" style={{ background: 'linear-gradient(180deg, #4B0082 0%, #000000 100%)' }}>
                <div className="container mx-auto wrapper shadow-md">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="bg-white rounded-lg p-6 mb-4 contact-wrap bg-gradient-to-r from-black-600 to-purple-900 shadow-lg  h-full">
                                <h3 className="text-2xl mb-6 font-semibold text-white">Send us a message</h3>
                                <form id="contactForm" className="contactForm" onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            className="w-full border p-2 rounded-md form-control"
                                            name="name"
                                            placeholder="Name"
                                            onChange={handleInputChange}
                                            value={name}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="email"
                                            className="w-full border p-2 rounded-md form-control"
                                            name="email"
                                            placeholder="Email"
                                            onChange={handleInputChange}
                                            value={email}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            className="w-full border p-2 rounded-md form-control"
                                            name="subject"
                                            placeholder="Subject"
                                            onChange={handleInputChange}
                                            value={subject}
                                        />
                                    </div>
                                    <div className="mb-4">
                                    <textarea
                                        className="w-full border p-2 rounded-md form-control"
                                        name="message"
                                        placeholder="Message"
                                        cols="30"
                                        rows="6"
                                        onChange={handleInputChange}
                                        value={message}
                                    ></textarea>
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="submit"
                                            value="Send Message"
                                            className="w-full bg-d62196 text-white py-2 rounded-md transition duration-300 hover:bg-blue-600 cursor-pointer btn btn-primary"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="bg-white rounded-lg p-6 mb-4 contact-wrap bg-gradient-to-r from-black-600 to-purple-900 shadow-lg flex flex-col justify-between h-full">
                                <h3 className="text-2xl mb-6 font-semibold text-white">Contact us</h3>
                                <p className="mb-4 text-white">
                                    We're open for any suggestion or just to have a chat
                                </p>
                                <div className="mb-4">
                                    <div className="flex items-center">
                                        <div className="bg-d62196 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                                            <i className="fas fa-map-marker-alt text-white"></i>
                                        </div>
                                        <p>
                                            <span className="text-d62196">Address:</span> Colombo , Srilanka.
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="flex items-center">
                                        <div className="bg-d62196 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                                            <i className="fas fa-phone-alt text-white"></i>
                                        </div>
                                        <p>
                                            <span className="text-d62196">Phone:</span> <a href="tel://123456789" className="text-d62196">+94 760688707</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="flex items-center">
                                        <div className="bg-d62196 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                                            <i className="fas fa-envelope text-white"></i>
                                        </div>
                                        <p>
                                            <span className="text-d62196">Email:</span> <a href="mailto:info@yoursite.com" className="text-d62196">fluentbridge@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="flex items-center">
                                        <div className="bg-d62196 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                                            <i className="fas fa-globe text-white"></i>
                                        </div>
                                        <p>
                                            <span className="text-d62196">Website:</span> <a href="#" className="text-d62196">FluentBridge.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
