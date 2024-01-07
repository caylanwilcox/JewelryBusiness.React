import React from 'react';
import Header from './Homepage/Header';
import Footer from './Homepage/Footer';
import './cssFiles/about.css';

function About() {
    return (
        <>
            <Header />
            <div className="about-content">
                <section className="about-section">
                    <h1>About Us</h1>
                    <p className='lightgrey'>Mangata Jewelry stands at the intersection of classic elegance and modern craftsmanship. Our commitment to excellence is evident in every piece we create, designed to bring you unmatched sophistication and style.</p>
                    <p className='lightgrey'>We hold a firm belief that jewelry is more than an accessory; it is a narrative of individuality and grace. Our skilled artisans infuse their expertise and passion into each piece, crafting not just jewelry, but timeless works of art that connect with your personal narrative.</p>
                </section>
                <section className="mission-section">
                    <h2>Our Mission</h2>
                    <p className='lightgrey'>Our mission is rooted in crafting jewelry that celebrates life's significant moments. From commemorating love to marking achievements, Mangata Jewelry is at the heart of your most cherished celebrations, offering timeless pieces that endure as symbols of life's milestones.</p>
                </section>
                <section className="craftsmanship-section">
                    <h2>Exquisite Craftsmanship</h2>
                    <p className='lightgrey'>Each Mangata creation is a testament to unparalleled craftsmanship. We meticulously source the finest materials, collaborating with renowned artisans who embody our vision of quality and durability. This relentless pursuit of perfection results in jewelry that is not only aesthetically stunning but also enduring.</p>
                </section>
                <section className="sustainability-section">
                    <h2>Commitment to Sustainability</h2>
                    <p className='lightgrey'>Sustainability lies at the core of our operations. Mangata Jewelry is committed to ethical sourcing and eco-friendly practices, ensuring that our luxury pieces are produced with minimal environmental impact. In choosing us, you support a future that values sustainability as much as style and elegance.</p>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default About;
