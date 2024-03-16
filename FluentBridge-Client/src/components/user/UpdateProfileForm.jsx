import React, { useState } from 'react';
import axios from 'axios';

const UpdateProfileForm = ({ userData }) => {
    const [fullName, setFullName] = useState(userData.fullName);
    const [email, setEmail] = useState(userData.email);
    const [image, setImage] = useState(null);

    const handleUpdate = () => {
        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('email', email);
        if (image) {
            formData.append('image', image);
        }

        axios.put('/api/v1/users/update', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log('Profile updated successfully');
            })
            .catch(error => {
                console.error('Error updating profile:', error);
            });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Update Profile</h3>
            <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} className="block w-full rounded-md border-gray-300 mb-2 px-3 py-2 focus:outline-none focus:border-indigo-500" />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="block w-full rounded-md border-gray-300 mb-4 px-3 py-2 focus:outline-none focus:border-indigo-500" />
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Profile Image</label>
                <input type="file" accept="image/*" onChange={handleImageChange} className="border rounded-md py-2 px-3" />
            </div>
            <button onClick={handleUpdate} className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Update</button>
        </div>
    );
};

export default UpdateProfileForm;
