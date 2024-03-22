import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResultsTables from "../GradingAssesment/ResultsTables"
import UpdateProfileForm from './UpdateProfileForm';
import ChangePasswordForm from './ChangePasswordForm';
import CoverImage from './CoverImage'; // Import the CoverImage component
import newProfiel from './NewProfile'; // Import the CoverImage component

const Profile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch user data from backend upon component mount
        axios.get('/api/v1/users/profile')
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    return (
        <>
            <newProfiel />
            <CoverImage /> {/* Add the CoverImage component */}
            <div className="max-w-2xl mx-auto p-6  rounded-md shadow-md mt-4 bg-purple-200 text-purple-950 mb-4">

    {userData && (
        <div>

            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            <div className="mb-4">
                <p className="font-semibold">Name:</p>
                <p className="text-purple-300">{userData.fullName}</p>
            </div>
            <div className="mb-4">
                <p className="font-semibold">Email:</p>
                <p className="text-purple-300">{userData.email}</p>
            </div>
            <UpdateProfileForm userData={userData} />
            <ChangePasswordForm />
        </div>
    )}
</div>

        </>

    );
};

export default Profile;
