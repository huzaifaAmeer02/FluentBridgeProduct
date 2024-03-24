import { useState, useRef } from 'react';

function Profile() {
    const [userProfile, setUserProfile] = useState(null);
    const profileImage = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openChooseImage = () => {
        profileImage.current.click();
    };

    const changeProfileImage = event => {
        const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];
        const selected = event.target.files[0];

        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader();
            reader.onloadend = () => setUserProfile(reader.result);
            reader.readAsDataURL(selected);
        } else {
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <img
                src={userProfile ? userProfile : '/img/tim-cook.jpg'}
                alt="Profile"
                style={{ width: '150px', height: '150px', borderRadius: '50%', cursor: 'pointer' }}
                onClick={openChooseImage}
            />
            <input
                hidden
                type="file"
                ref={profileImage}
                onChange={changeProfileImage}
            />
            {isModalOpen && (
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', zIndex: '9999' }}>
                    <h2>Something went wrong</h2>
                    <p>File not supported!</p>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <span style={{ color: '#6C757D', fontSize: '14px' }}>Supported types:</span>
                        <span style={{ marginLeft: '5px', marginRight: '5px', backgroundColor: '#198754', color: '#fff', padding: '3px 6px', borderRadius: '4px' }}>PNG</span>
                        <span style={{ marginLeft: '5px', marginRight: '5px', backgroundColor: '#198754', color: '#fff', padding: '3px 6px', borderRadius: '4px' }}>JPG</span>
                        <span style={{ marginLeft: '5px', marginRight: '5px', backgroundColor: '#198754', color: '#fff', padding: '3px 6px', borderRadius: '4px' }}>JPEG</span>
                    </div>
                    <button style={{ marginTop: '10px' }} onClick={closeModal}>Close</button>
                </div>
            )}
            <div style={{ marginTop: '10px' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#333' }}>Tim Cook</h3>
                <p style={{ fontSize: '0.875rem', color: '#6C757D' }}>CEO of Apple</p>
            </div>
        </div>
    );
}

export default Profile;
