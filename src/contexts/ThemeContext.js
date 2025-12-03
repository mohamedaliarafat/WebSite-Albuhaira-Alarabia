import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // جلب الثيم المحفوظ أو استخدام الوضع الافتراضي (الداكن)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('fuelAppTheme');
    return savedTheme || 'default'; // default = الوضع الكحلي المدرج للأزرق
  });

  // دالة لتغيير الثيم
  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('fuelAppTheme', newTheme);
  };

  // تطبيق الثيم على عنصر html
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // جلب الثيم المفضل من النظام
  useEffect(() => {
    if (!localStorage.getItem('fuelAppTheme')) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        setTheme('dark');
      }
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};