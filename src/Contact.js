import React, { useState } from 'react';
import './cssFiles/contact.css'
import Header from './Homepage/Header';
import Footer from './Homepage/Footer';
const Contact = ()=>{         
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: '',
        });
    
        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        };
    
        const handleSubmit = (event) => {
            event.preventDefault();
            // Handle form submission, e.g., send the data to an API or email service.
            console.log(formData);
            setFormData({
                name: '',
                email: '',
                message: '',
            });
            alert('Thank you for reaching out!');
            

        };
    return (
        <>
        <Header/>
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Please fill out the form below and we'll be in touch.</p>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Message</label>
                    <textarea
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        <Footer/>
        </>
    );
}
            


export default Contact