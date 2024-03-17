import React, { useState, useEffect } from 'react';
import UpdateProfileForm from '../user/UpdateProfileForm';
import ChangePasswordForm from '../user/ChangePasswordForm';
import axios from 'axios';
import ResultsTables from "../GradingAssesment/ResultsTables"

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
        <div>
            {userData && (
                <div>
                    <h2>User Profile</h2>
                    <p>Name: {userData.fullName}</p>
                    <p>Email: {userData.email}</p>
                    <UpdateProfileForm userData={userData} />
                    <ChangePasswordForm />
                    <div className="mt-8 flex flex-col sm:flex-row justify-center mx-10">
                        <ResultsTables />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
