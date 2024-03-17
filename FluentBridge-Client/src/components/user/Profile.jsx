import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResultsTables from "../GradingAssesment/ResultsTables"
import UpdateProfileForm from './UpdateProfileForm';
import ChangePasswordForm from './ChangePasswordForm';

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
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-10">
            {userData && (
                <div>
                    <h2 className="text-2xl font-bold mb-4">User Profile</h2>
                    <div className="mb-4">
                        <p className="font-semibold">Name:</p>
                        <p>{userData.fullName}</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">Email:</p>
                        <p>{userData.email}</p>
                    </div>
                    <UpdateProfileForm userData={userData} />
                    <ChangePasswordForm />
                </div>
            )}
        </div>
    );
};

export default Profile;
