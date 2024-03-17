import React, { useState } from 'react';
import axios from 'axios';

const UpdateProfileForm = ({ userData }) => {
    const [fullName, setFullName] = useState(userData.fullName);
    const [email, setEmail] = useState(userData.email);

    const handleUpdate = () => {
        axios.put('/api/v1/users/update-email', {_id: userData._id, email })
            .then(response => {
                console.log('email updated successfully');
            })
            .catch(error => {
                console.error('Error updating email:', error);
            });
    };

    return (
        <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Update Email</h3>
            {/*<input type="text" value={fullName} onChange={e => setFullName(e.target.value)} className="w-full rounded-md border-gray-300 mb-2 px-3 py-2 focus:outline-none focus:border-indigo-500" />*/}
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-md border-gray-300 mb-4 px-3 py-2 focus:outline-none focus:border-indigo-500" />
            <button onClick={handleUpdate} className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Update Email</button>
        </div>
    );
};

export default UpdateProfileForm;
