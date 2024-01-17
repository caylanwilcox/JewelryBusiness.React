import './cssFiles/MyProfile.css';
import Header from './Homepage/Header';
import React, { useState, useEffect } from 'react';

const MyProfile = () => {
    const [fullName, setFullName] = useState(localStorage.getItem('fullName') || 'Full Name');
    const [email, setEmail] = useState(localStorage.getItem('email') || 'Email');
    const [address, setAddress] = useState(localStorage.getItem('address') || 'Address');
    const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('phoneNumber') || 'Phone Number');
    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };
    
    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('email', email);
        localStorage.setItem('address', address);
        localStorage.setItem('phoneNumber', phoneNumber);
    
        // You might want to give some feedback to the user or redirect
    };
    return (
        <>
            <Header />
            <div className="profile-container">
                <h2 className="profile-title">My Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="profile-detail">
                        <label className="detail-label">Full Name:</label>
                        <input 
                            className="detail-value" 
                            type="text" 
                            value={fullName} 
                            onChange={handleFullNameChange} 
                        />
                    </div>
                    
                    <div className="profile-detail">
                        <label className="detail-label">Email:</label>
                        <input 
                            className="detail-value" 
                            type="email" 
                            value={email} 
                            onChange={handleEmailChange} 
                        />
                    </div>
                    
                    <div className="profile-detail">
                        <label className="detail-label">Address:</label>
                        <input 
                            className="detail-value" 
                            type="text" 
                            value={address} 
                            onChange={handleAddressChange} 
                        />
                    </div>
                    
                    <div className="profile-detail">
                        <label className="detail-label">Phone Number:</label>
                        <input 
                            className="detail-value" 
                            type="tel" 
                            value={phoneNumber} 
                            onChange={handlePhoneNumberChange} 
                        />
                    </div>
    
                    <button type="submit" className="edit-button">Save Profile</button>
                </form>
            </div>
        </>
    );
    
    }
export default MyProfile;
