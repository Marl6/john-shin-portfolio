import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
    onNavigate: (section: string) => void;
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
    return (
        <header className="site-header">
            <nav className="main-nav">
                <div className="logo">
                    <motion.h1
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Your Logo
                    </motion.h1>
                </div>
                <ul className="nav-links">
                    {['home', 'about', 'services', 'contact'].map((section) => (
                        <motion.li
                            key={section}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <a
                                href={`#${section}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onNavigate(section);
                                }}
                                className={activeSection === section ? 'active' : ''}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header; 