import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center py-6  text-white">
            <p className="mb-2">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>

            <div className="flex space-x-4">
                {/* LinkedIn Link */}
                <a
                    href="https://www.linkedin.com/in/anujtiwari02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center space-x-1"
                >
                    <FaLinkedin size={20} />
                    <span>LinkedIn</span>
                </a>

                {/* github Link */}
                <a
                    href="https://github.com/anujtiwari04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center space-x-1"
                >
                    <FaGithub size={20} />
                    <span>GitHub</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
