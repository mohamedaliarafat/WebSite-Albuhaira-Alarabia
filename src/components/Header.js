import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <motion.a 
            href="/" 
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            
            <span>Albuhaira Alarabia</span>

            <motion.img
              src="https://c.top4top.io/p_3624gdf351.png"
              alt="Logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ width: '90px', height: '80px', objectFit: 'contain' }}
            />
          </motion.a>
          
          <nav>
            <ul className="nav-links">
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <a href="#home">{t('header.home')}</a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a href="#services">{t('header.services')}</a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a href="#app">{t('header.app')}</a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a href="#contact">{t('header.contact')}</a>
              </motion.li>
            </ul>
          </nav>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {/* Theme Switcher Button - تم إضافته هنا */}
            <ThemeSwitcher />
            
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Order Button */}
    <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link 
            to="/company-management" 
            className="cta-button"
          >
            <i className="fas fa-users"></i> فريق الإدارة
          </Link>
        </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;