import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 py-8 text-center text-zinc-500 text-sm mt-auto">
            <div className="container mx-auto px-4">
                <p>© {new Date().getFullYear()} Maa Enterprises. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
