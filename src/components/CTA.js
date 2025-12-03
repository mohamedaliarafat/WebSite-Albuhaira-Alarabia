import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>جاهز لطلب وقودك؟</h2>
          <p>انضم إلى آلاف العملاء الذين يثقون بنا لتوصيل الوقود بسرعة وأمان.</p>
          
          <motion.div
            style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.a 
              href="#order" 
              className="cta-button"
              style={{ backgroundColor: 'white', color: '#f97316' }}
              whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              ابدأ الطلب الآن
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="cta-button"
              style={{ backgroundColor: 'transparent', border: '2px solid white' }}
              whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              اتصل بنا للاستفسار
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;