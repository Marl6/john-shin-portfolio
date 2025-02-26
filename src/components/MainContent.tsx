import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MainContentProps {
    activeSection: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeSection }) => {
    return (
        <main className="main-content">
            <AnimatePresence mode="wait">
                {activeSection === 'home' && (
                    <motion.section
                        key="home"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="content-section"
                    >
                        <h2>Welcome to Our Website</h2>
                        <p>Discover our amazing services and products that will transform your experience.</p>
                        <div className="featured-content">
                            <h3>Featured Items</h3>
                            <div className="featured-grid">
                                {/* Add your featured content here */}
                                <div className="feature-card">Feature 1</div>
                                <div className="feature-card">Feature 2</div>
                                <div className="feature-card">Feature 3</div>
                            </div>
                        </div>
                    </motion.section>
                )}

                {activeSection === 'about' && (
                    <motion.section
                        key="about"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="content-section"
                    >
                        <h2>About Us</h2>
                        <div className="about-content">
                            <div className="about-text">
                                <h3>Our Story</h3>
                                <p>Learn about our journey and what makes us unique in the industry.</p>
                            </div>
                            <div className="team-section">
                                <h3>Our Team</h3>
                                <div className="team-grid">
                                    {/* Add team members here */}
                                    <div className="team-member">Team Member 1</div>
                                    <div className="team-member">Team Member 2</div>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                )}

                {activeSection === 'services' && (
                    <motion.section
                        key="services"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="content-section"
                    >
                        <h2>Our Services</h2>
                        <div className="services-grid">
                            {/* Add your services here */}
                            <motion.div
                                className="service-card"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <h3>Service 1</h3>
                                <p>Description of service 1</p>
                            </motion.div>
                            <motion.div
                                className="service-card"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <h3>Service 2</h3>
                                <p>Description of service 2</p>
                            </motion.div>
                            <motion.div
                                className="service-card"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <h3>Service 3</h3>
                                <p>Description of service 3</p>
                            </motion.div>
                        </div>
                    </motion.section>
                )}

                {activeSection === 'contact' && (
                    <motion.section
                        key="contact"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="content-section"
                    >
                        <h2>Contact Us</h2>
                        <div className="contact-content">
                            <form className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" name="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" name="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message:</label>
                                    <textarea id="message" name="message" rows={5}></textarea>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="submit-button"
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </main>
    );
};

export default MainContent; 