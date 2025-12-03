import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: 'default', name: 'افتراضي', icon: '🌊', description: 'اللون الكحلي المدرج للأزرق' },
    { id: 'dark', name: 'داكن', icon: '🌙', description: 'الوضع الداكن' },
    { id: 'light', name: 'فاتح', icon: '☀️', description: 'الوضع الفاتح' },
  ];

  const currentTheme = themes.find(t => t.id === theme) || themes[0];

  const handleThemeChange = (themeId) => {
    toggleTheme(themeId);
    setIsOpen(false);
  };

  return (
    <div className="theme-switcher">
      <motion.button
        className="theme-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={`تغيير الثيم (${currentTheme.name})`}
      >
        {currentTheme.icon}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="theme-dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: '8px',
              background: 'var(--card-bg)',
              borderRadius: '12px',
              boxShadow: 'var(--shadow-lg)',
              padding: '8px',
              minWidth: '200px',
              zIndex: 1000,
              border: '1px solid var(--primary-color)',
            }}
          >
            {themes.map((themeOption) => (
              <motion.button
                key={themeOption.id}
                className={`theme-option ${theme === themeOption.id ? 'active' : ''}`}
                onClick={() => handleThemeChange(themeOption.id)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  width: '100%',
                  padding: '12px',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  color: 'var(--text-color)',
                  transition: 'all 0.2s',
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{themeOption.icon}</span>
                <div style={{ textAlign: 'right', flex: 1 }}>
                  <div style={{ fontWeight: '600' }}>{themeOption.name}</div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                    {themeOption.description}
                  </div>
                </div>
                {theme === themeOption.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--primary-color)',
                    }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;