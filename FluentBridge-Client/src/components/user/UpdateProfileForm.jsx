import React, { useState } from 'react';
import axios from 'axios';

const UpdateProfileForm = ({ userData }) => {
    const [fullName, setFullName] = useState(userData.fullName);
    const [email, setEmail] = useState(userData.email);

    const handleUpdate = () => {
        axios.put('/api/v1/users/update', { fullName, email })
            .then(response => {
                console.log('Profile updated successfully');
            })
            .catch(error => {
                console.error('Error updating profile:', error);
            });
    };

    return (
        <div>
            <h3>Update Profile</h3>
            <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default UpdateProfileForm;
