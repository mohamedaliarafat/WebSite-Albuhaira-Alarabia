import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>شركة البحيرة العربية</h3>
            <p>نوفر حلول وقود مبتكرة وسريعة لتلبية احتياجاتك أينما كنت. جودة، أمان، وسرعة في التوصيل.</p>
            <div className="social-links">
              <a href="#facebook" className="social-icon">f</a>
              <a href="#twitter" className="social-icon">t</a>
              <a href="#instagram" className="social-icon">ig</a>
              <a href="#linkedin" className="social-icon">in</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="footer-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>روابط سريعة</h3>
            <ul className="footer-links">
              <li><a href="#home">الرئيسية</a></li>
              <li><a href="#services">خدماتنا</a></li>
              <li><a href="#app">التطبيق</a></li>
              <li><a href="#pricing">الأسعار</a></li>
              <li><a href="#about">من نحن</a></li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="footer-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>خدماتنا</h3>
            <ul className="footer-links">
              <li><a href="#service3">توصيل وقود المحطات</a></li>
              <li><a href="#service3">خدمات النقل من أرامكو</a></li>
              <li><a href="#service4">خدمات الطوارئ</a></li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="footer-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>اتصل بنا</h3>
            <ul className="footer-links">
              <li> العنوان: حائل المنطقة الصناعية المملكة العربية السعودية </li>
              <li> الهاتف: +966512345678  </li>
              <li> البريد: nasser@albuhairaalarabia.com</li>
              <li> أوقات العمل: 24/7</li>
            </ul>
          </motion.div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()  }   جميع الحقوق محفوظة. لدى شركة البحيرة العربية للنقليات .</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;