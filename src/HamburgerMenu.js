import React, { useState, useEffect } from 'react';
import './cssFiles/HamburgerMenu.css'; // Ensure to create this CSS file
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showButton, setShowButton] = useState(window.innerWidth < 500);

    useEffect(() => {
        const handleResize = () => {
            setShowButton(window.innerWidth < 500);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {showButton && (
                <button onClick={toggleMenu} className="hamburger-button">
                    ☰
                </button>
            )}
            {isOpen && (
                <div className="menu-grid">
                    {/* Your menu items in a grid layout */}
                    <li><Link to="/">Home</Link></li>
        <li><Link to="/Necklace">Necklace</Link></li>
        <li><Link to="/Earring">Earring</Link></li>
        <li><Link to="/Ring">Ring</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/MyProfile">Profile</Link></li>

                    {/* Add more links as needed */}
                </div>
            )}
        </>
    );
};

export default HamburgerMenu;
