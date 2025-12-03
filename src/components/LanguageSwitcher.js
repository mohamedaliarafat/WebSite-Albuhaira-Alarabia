import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { currentLanguage, languages, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <motion.button
        className="language-trigger"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={false}
      >
        {/* أيقونة الترجمة الجميلة */}
        <div className="language-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" 
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <span className="language-code">{currentLang.code.toUpperCase()}</span>
        
        {/* أيقونة السهم المتحركة */}
        <motion.div
          className="dropdown-arrow"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="language-dropdown"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="dropdown-header">
              <div className="language-icon small">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                        stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" 
                        stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className="dropdown-title">Select Language</span>
            </div>
            
            <div className="language-list">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  className={`language-item ${currentLanguage === lang.code ? 'active' : ''}`}
                  onClick={() => handleLanguageChange(lang.code)}
                  whileHover={{ x: 5, backgroundColor: "rgba(249, 115, 22, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: languages.indexOf(lang) * 0.05 }}
                >
                  <div className="language-item-content">
                    <span className="language-flag">{getFlagIcon(lang.code)}</span>
                    <div className="language-details">
                      <span className="language-name">{lang.name}</span>
                      <span className="language-name-native">{getNativeName(lang.code)}</span>
                    </div>
                  </div>
                  
                  {currentLanguage === lang.code && (
                    <motion.div
                      className="selected-indicator"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
            
            <div className="dropdown-footer">
              <div className="current-language-info">
                <span className="current-label">Current:</span>
                <div className="current-language">
                  <span className="current-flag">{getFlagIcon(currentLanguage)}</span>
                  <span className="current-name">{currentLang.name}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// دالة مساعدة لإرجاع أيقونة العلم
const getFlagIcon = (langCode) => {
  const flags = {
    ar: '🇸🇦',
    en: '🇺🇸',
    bn: '🇧🇩',
    hi: '🇮🇳',
    ne: '🇳🇵',
    fil: '🇵🇭'
  };
  return flags[langCode] || '🌐';
};

// دالة مساعدة للحصول على الاسم الأصلي للغة
const getNativeName = (langCode) => {
  const nativeNames = {
    ar: 'العربية',
    en: 'English',
    bn: 'বাংলা',
    hi: 'हिन्दी',
    ne: 'नेपाली',
    fil: 'Filipino'
  };
  return nativeNames[langCode] || '';
};

export default LanguageSwitcher;