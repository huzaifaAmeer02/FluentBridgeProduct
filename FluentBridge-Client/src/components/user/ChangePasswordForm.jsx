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
        <div>
            <h3>Change Password</h3>
            <input type="password" placeholder="Old Password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
            <input type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            <button onClick={handleChangePassword}>Change Password</button>
        </div>
    );
};

export default ChangePasswordForm;
