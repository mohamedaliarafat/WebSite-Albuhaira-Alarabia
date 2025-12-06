// App.js
import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AppDemo from './components/AppDemo';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CompanyManagement from './components/CompanyManagement';
import './styles/App.css';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <div className="App">
            {/* Routes لتحديد أي صفحة تظهر */}
            <Routes>
              {/* الصفحة الرئيسية */}
              <Route path="/" element={
                <>
                  <Header />
                  <Hero />
                  <Services />
                  <AppDemo />
                  <CTA />
                  <Footer />
                </>
              } />
              
              {/* صفحة إدارة الشركة */}
              <Route path="/company-management" element={<CompanyManagement />} />
              <Route path="/portfolio" element={<CompanyManagement />} />
              <Route path="/management" element={<CompanyManagement />} />
            </Routes>
            
            {/* عناصر الخلفية المتحركة تظهر في جميع الصفحات */}
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
    </Router>
  );
}

export default App;