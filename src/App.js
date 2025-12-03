import React from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AppDemo from './components/AppDemo';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <Header />
          <Hero />
          <Services />
          <AppDemo />
          <CTA />
          <Footer />
          
          {/* Floating animation elements for background */}
          <motion.div 
            className="floating-element el-1"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="floating-element el-2"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="floating-element el-3"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;