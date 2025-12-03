import React, { createContext, useState, useContext, useEffect } from 'react';

// استيراد ملفات الترجمة
import ar from '../locales/ar.json';
import en from '../locales/en.json';
import bn from '../locales/bn.json';
import hi from '../locales/hi.json';
import ne from '../locales/ne.json';
import fil from '../locales/fil.json';

// إنشاء خريطة اللغات
const translations = {
  ar: { code: 'ar', name: 'العربية', dir: 'rtl', data: ar },
  en: { code: 'en', name: 'English', dir: 'ltr', data: en },
  bn: { code: 'bn', name: 'বাংলা', dir: 'ltr', data: bn },
  hi: { code: 'hi', name: 'हिन्दी', dir: 'ltr', data: hi },
  ne: { code: 'ne', name: 'नेपाली', dir: 'ltr', data: ne },
  fil: { code: 'fil', name: 'Filipino', dir: 'ltr', data: fil }
};

// إنشاء Context
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // الحصول على اللغة المحفوظة أو استخدام اللغة العربية كافتراضي
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('fuelAppLanguage');
    return savedLanguage && translations[savedLanguage] ? savedLanguage : 'ar';
  });

  // دالة لتغيير اللغة
  const changeLanguage = (langCode) => {
    if (translations[langCode]) {
      setCurrentLanguage(langCode);
      localStorage.setItem('fuelAppLanguage', langCode);
    }
  };

  // دالة لترجمة النصوص
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLanguage].data;
    
    for (const k of keys) {
      value = value[k];
      if (value === undefined) {
        console.warn(`Translation key "${key}" not found in ${currentLanguage}`);
        return key;
      }
    }
    
    return value;
  };

  // تأثير لتغيير اتجاه الصفحة عند تغيير اللغة
  useEffect(() => {
    document.documentElement.dir = translations[currentLanguage].dir;
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      languages: Object.values(translations),
      changeLanguage,
      t,
      direction: translations[currentLanguage].dir
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook مخصص لاستخدام السياق
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};