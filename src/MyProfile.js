import React from 'react';
import './cssFiles/MyProfile.css';
import Header from './Homepage/Header';
const MyProfile = () => {
    return (
        <>
        <Header/>
        <div className="profile-container">
            <h2 className="profile-title">My Profile</h2>
            
            <div className="profile-detail">
                <label className="detail-label">Full Name:</label>
                <span className="detail-value">John Doe</span>
            </div>
            
            <div className="profile-detail">
                <label className="detail-label">Email:</label>
                <span className="detail-value">john.doe@example.com</span>
            </div>
            
            <div className="profile-detail">
                <label className="detail-label">Address:</label>
                <span className="detail-value">123 Ecommerce St, Shopville</span>
            </div>
            
            <div className="profile-detail">
                <label className="detail-label">Phone Number:</label>
                <span className="detail-value">+1234567890</span>
            </div>

            <button className="edit-button">Edit Profile</button>
        </div>
        </>
    );
}

export default MyProfile;
