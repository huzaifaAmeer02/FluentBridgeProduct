// eslint-disable-next-line no-unused-vars
import React from 'react';
//import { Typed } from 'react-typed';
import backgroundImage from '../assets/pic01.jpg';


const Hero = () => {
    return (
        <div className='text-white mt-16' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h1 className='md:text-7xl text-white sm:text-6xl text-4xl font-bold md:py-6 bg-black-500 opacity-80 rounded-3xl'>
                    Welcome to our English Learning Platform
                </h1>
                <p className='md:text-2xl text-xl font-bold text-white'>We help you improve your English skills in speaking, writing, listening, and vocabulary.</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
            </div>
        </div>
    );
};


export default Hero;