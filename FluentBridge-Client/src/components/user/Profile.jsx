import React, { useState, useEffect } from 'react';
import UpdateProfileForm from './UpdateProfileForm';
import ChangePasswordForm from './ChangePasswordForm';
import axios from 'axios';

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
                </div>
            )}
        </div>
    );
};

export default Profile;
