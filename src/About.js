import React from 'react';
import Header from './Homepage/Header';
import Footer from './Homepage/Footer';
import './about.css';
function About() {
    return (
        <>
            <Header />
            <div className="about-content">
                <section className="about-section">
                    <h1>About Us</h1>
                    <p className='lightgrey'>Welcome to Mangata Jewelry, where timeless elegance meets exquisite craftsmanship. We are dedicated to bringing you the finest handcrafted jewelry pieces that embody both sophistication and beauty.</p>
                    <p className='lightgrey'>At Mangata Jewelry, we believe that each piece of jewelry tells a unique story. Our artisans pour their passion and skill into every creation, ensuring that you receive not just a piece of jewelry, but a work of art that resonates with your personal style and emotions.</p>
                </section>
                <section className="mission-section">
                    <h2>Our Mission</h2>
                    <p className='lightgrey'>Our mission is to create jewelry that captures the essence of life's precious moments. Whether it's a celebration of love, a milestone achievement, or a simple expression of self-adornment, Mangata Jewelry is here to help you commemorate and cherish those moments forever.</p>
                </section>
                <section className="craftsmanship-section">
                    <h2>Exquisite Craftsmanship</h2>
                    <p className='lightgrey'>Our jewelry is crafted with the utmost attention to detail and quality. We source the finest materials and collaborate with skilled artisans who share our commitment to excellence. Each piece undergoes a meticulous crafting process, resulting in jewelry that not only looks stunning but stands the test of time.</p>
                </section>
                <section className="sustainability-section">
                    <h2>Commitment to Sustainability</h2>
                    <p className='lightgrey'>At Mangata Jewelry, we are dedicated to sustainable and ethical practices. We strive to minimize our environmental footprint by using responsibly sourced materials and employing eco-friendly production methods. Your choice to adorn our jewelry is also a choice to support a more sustainable future.</p>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default About;
