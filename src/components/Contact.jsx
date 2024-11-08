import React from 'react';
import { CONTACT } from '../constants/index';

const Contact = () => {
    return (
        <div className="flex flex-col items-center py-20 h-screen text-white">
            <h2 className="text-4xl mb-6">Get In Touch</h2>

            {/* Email with mailto link */}
            <a
                href={`mailto:${CONTACT.email}`}
                className="text-lg mb-4 hover:underline"
            >
                {CONTACT.email}
            </a>

            {/* LinkedIn link */}
            <a
                href="https://www.linkedin.com/in/anujtiwari02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg mb-4 hover:underline"
            >
                LinkedIn
            </a>

            {/* Twitter link */}
            <a
                href="https://github.com/anujtiwari04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg mb-4 hover:underline"
            >
                GitHub
            </a>
        </div>
    );
};

export default Contact;
