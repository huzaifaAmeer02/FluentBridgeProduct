import React, { useState } from 'react';
import axios from 'axios';

const ChangePasswordForm = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleChangePassword = () => {
        axios.put('/api/v1/users/change-password', { oldPassword, newPassword })
            .then(response => {
                console.log('Password changed successfully');
            })
            .catch(error => {
                console.error('Error changing password:', error);
            });
    };

    return (
        <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Change Password</h3>
            <input type="password" placeholder="Old Password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} className="w-full rounded-md border-gray-300 mb-2 px-3 py-2 focus:outline-none focus:border-indigo-500" />
            <input type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="w-full rounded-md border-gray-300 mb-4 px-3 py-2 focus:outline-none focus:border-indigo-500" />
            <button onClick={handleChangePassword} className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Change Password</button>
        </div>
    );
};

export default ChangePasswordForm;
