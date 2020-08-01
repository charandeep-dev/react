import React from 'react';

const Footer = () => {
    const Year = new Date().getFullYear();
    return (
        <>
        <footer className="w-100 bg-dark text-white text-center" style={{position: 'absolute', bottom: '0', zIndex: '999'}}>
            <span>&copy; {Year} React. All Rights Reserved.</span>
        </footer>
        </>
    )
}

export default Footer;
