import React from 'react';
import { motion } from 'framer-motion';
import './styles.css';

const App = () => {
    return (
        
        




        
        <div className="page-wrapper sticky-on-page banner-on-page">
            <div className="navbar-new_component w-nav">
                <div className="navbar-new_container">
                    <a href="/" className="navbar-new_logo-link w-nav-brand">
                        <img src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/658a0bd1a643c0b4588a80af_relume%20logo%20no%20symbol.png" alt="Logo" className="navbar-new_logo" />
                    </a>
                    <nav className="navbar-new_menu w-nav-menu">
                        <a href="/pricing" className="navbar_link w-nav-link">Pricing</a>
                        <a href="/resources" className="navbar_link w-nav-link">Learn</a>
                        <a href="/contact-sales" className="navbar_link w-nav-link">Contact Sales</a>
                    </nav>
                </div>
            </div>
            <main className="main-wrapper">
                <header className="section_new-home_header">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                        <h1 className="new-home_header_heading">Websites designed & built faster with AI</h1>
                        <p className="new-home_header_subheading">Use AI as your design ally, not as a replacement.</p>
                    </motion.div>
                </header>
            </main>
        </div>
    );
};

export default App;
