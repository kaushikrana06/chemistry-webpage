import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import AboutPage from './AboutPage';
import MissionPage from './MissionPage';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/mission" element={<MissionPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
