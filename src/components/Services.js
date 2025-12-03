import React from 'react';
import { motion } from 'framer-motion';
import { useServicesData } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const servicesData = useServicesData();
  const { t } = useLanguage();

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>{t('services.title')}</h2>
          <p>{t('services.subtitle')}</p>
        </motion.div>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;