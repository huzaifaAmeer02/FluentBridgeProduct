// eslint-disable-next-line no-unused-vars
import React from "react"
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebaseDB from "./firebase";
import "./App.scss";
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
            toast.error("Please provide value in each input field");
        } else {
            firebaseDB.child("contacts").push(state);
            setState({ name: "", email: "", subject: "", message: "" });
            toast.success("Form Submitted Successfully");
        }
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    return (
        <>
            <section className='hero'>
                <h1>Welcome To Contact Page</h1>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae distinctio laboriosam numquam quisquam. Blanditiis consequuntur illum perspiciatis quos ullam, voluptatem!</div>
            </section>
        </>
    )
}
export default ContactUs