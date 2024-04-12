import React from 'react';
import './BackToTopButton.css';

const BackToTopButton = () => {

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Add smooth scrolling behavior
        });
    };

    return (
        <button className='totop'
            onClick={scrollToTop}
        >
            Back to top
        </button>
    );
};

export default BackToTopButton;