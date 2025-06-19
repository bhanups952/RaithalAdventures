import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import TreksPage from './pages/TreksPage';
import TrekPage from './pages/TrekPage';
import HomestayPage from './pages/HomestayPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SustainabilityPage from './pages/SustainabilityPage';
import GalleryPage from './pages/GalleryPage';
import WhatsAppButton from './components/UI/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/treks" element={<TreksPage />} />
            <Route path="/trek/:trekId" element={<TrekPage />} />
            <Route path="/homestay" element={<HomestayPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;