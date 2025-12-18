import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AppDemo = () => {
  const [activeScreen, setActiveScreen] = useState('home');
  const [activeDevice, setActiveDevice] = useState('iphone');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen(prev => prev === 'home' ? 'order' : 'home');
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const Iphone = ({ screen }) => {
    return (
      <div className="iphone-17-pro-max">
        {/* Dynamic Island */}
        <div className="dynamic-island">
          <div className="sensor"></div>
          <div className="camera"></div>
          <div className="sensor"></div>
        </div>
        
        {/* Status Bar */}
        <div className="iphone-status">
          <div className="iphone-time">9:41</div>
          <div className="iphone-battery">
            <span>84%</span>
            <div className="iphone-battery-icon"></div>
          </div>
        </div>
        
        {/* Screen Content */}
        <div className="iphone-screen">
          <div className="iphone-content">
            <div className="iphone-app-header">
              <h3>Albuhaira Alarabia</h3>
              <div className="iphone-time-small">الآن</div>
            </div>
            
            <div className="app-content">
              {activeScreen === 'home' ? (
                <>
                  <div className="welcome-section">
                    <p className="welcome-text">مرحباً بك في تطبيق البحيرة العربية</p>
                    <div className="user-avatar">
                      <div className="avatar-circle">👤</div>
                      <span className="user-name">مستخدم</span>
                    </div>
                  </div>
                  
                  <div className="fuel-info-card">
                    <div className="info-row">
                      <span className="info-label">الوقود المتاح:</span>
                      <span className="info-value">بنزين 95</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">السعر الحالي:</span>
                      <span className="info-value">2.35 ريال/لتر</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">أقرب محطة:</span>
                      <span className="info-value">3.2 كم</span>
                    </div>
                  </div>
                  
                  <div className="quick-actions">
                    <div className="action-button">
                      <span className="action-text">طلب سريع</span>
                    </div>
                    <div className="action-button">
                      <span className="action-text">تحديد موقع</span>
                    </div>
                    <div className="action-button">
                      <span className="action-text">طلباتي</span>
                    </div>
                  </div>
                  
                  <button className="order-button iphone-order-btn">
                    اطلب وقود الآن
                  </button>
                </>
              ) : (
                <>
                  <div className="order-header">
                    <h4>طلب جديد</h4>
                    <p>اختر نوع الوقود والكمية</p>
                  </div>
                  
                  <div className="order-form-iphone">
                    <div className="form-group-iphone">
                      <label>نوع الوقود</label>
                      <div className="fuel-type-selector">
                        <button className="fuel-option active">بنزين 95</button>
                        <button className="fuel-option">بنزين 91</button>
                        <button className="fuel-option">ديزل</button>
                        <button className="fuel-option">كيروسين</button>
                      </div>
                    </div>
                    
                    <div className="form-group-iphone">
                      <label>الكمية المطلوبة</label>
                      <div className="quantity-selector">
                        <button className="quantity-btn">-</button>
                        <div className="quantity-display">23000 لتر</div>
                        <button className="quantity-btn">+</button>
                      </div>
                      <div className="quantity-slider">
                        <input type="range" min="5" max="100" defaultValue="20" />
                        <div className="slider-labels">
                          <span>23000 لتر</span>
                          <span>30000 لتر</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="form-group-iphone">
                      <label>طريقة الدفع</label>
                      <div className="payment-options">
                        <div className="payment-option active">
                          <span>بطاقة ائتمان</span>
                        </div>
                        <div className="payment-option">
                          <span>Apple Pay</span>
                        </div>
                        <div className="payment-option">
                          <span>نقداً</span>
                        </div>
                        <div className="payment-option">
                          <span>تحويل بنكي</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="confirm-button iphone-confirm-btn">
                      تأكيد الطلب - 45000 ريال
                    </button>
                  </div>
                </>
              )}
            </div>
            
            {/* Home Indicator */}
            <div className="iphone-home-indicator"></div>
          </div>
        </div>
      </div>
    );
  };
  
  const Android= ({ screen }) => {
    return (
      <div className="samsung-ultra-25">
        {/* S-Pen Slot */}
        <div className="s-pen-slot"></div>
        
        {/* Front Camera */}
        <div className="samsung-front-camera">
          <div className="camera-dot"></div>
          <div className="camera-dot small"></div>
        </div>
        
        {/* Status Bar */}
        <div className="samsung-status">
          <div className="samsung-signal">
            <span className="signal-icon">📶</span>
            <span>5G</span>
          </div>
          <div className="samsung-time">9:41</div>
          <div className="samsung-battery">
            <div className="samsung-battery-icon"></div>
            <span>84%</span>
          </div>
        </div>
        
        {/* Screen Content */}
        <div className="samsung-screen">
          <div className="samsung-content">
            <div className="samsung-app-header">
              <h3>FuelExpress</h3>
            </div>
            
            <div className="app-content">
              {activeScreen === 'home' ? (
                <>
                  <div className="samsung-welcome">
                    <div className="samsung-greeting">
                      <h4>أهلاً بك!</h4>
                      <p>وقودك يوصلك أينما كنت</p>
                    </div>
                    <div className="samsung-weather">
                      <span>28°C</span>
                    </div>
                  </div>
                  
                  <div className="fuel-info-card samsung-card">
                    <div className="info-header">
                      <span className="info-title">معلومات الوقود</span>
                    </div>
                    <div className="info-grid">
                      <div className="info-item">
                        <span className="item-label">بنزين 95</span>
                        <span className="item-value">2.35 ريال</span>
                      </div>
                      <div className="info-item">
                        <span className="item-label">بنزين 91</span>
                        <span className="item-value">2.15 ريال</span>
                      </div>
                      <div className="info-item">
                        <span className="item-label">ديزل</span>
                        <span className="item-value">1.95 ريال</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="samsung-features">
                    <div className="feature-card">
                      <div className="feature-text">
                        <div className="feature-title">توصيل سريع</div>
                      </div>
                    </div>
                    <div className="feature-card">
                      <div className="feature-text">
                        <div className="feature-title">عروض حصرية</div>
                        <div className="feature-desc">خصم 0%</div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="order-button samsung-order-btn">
                    ابدأ طلبك الآن
                  </button>
                </>
              ) : (
                <>
                  <div className="samsung-order-header">
                    <h4>إنشاء طلب جديد</h4>
                    <div className="order-steps">
                      <div className="step active">1</div>
                      <div className="step-line"></div>
                      <div className="step">2</div>
                      <div className="step-line"></div>
                      <div className="step">3</div>
                    </div>
                  </div>
                  
                  <div className="order-form-samsung">
                    <div className="form-group-samsung">
                      <label className="samsung-label">اختر نوع الوقود</label>
                      <div className="samsung-radio-group">
                        <label className="radio-option">
                          <input type="radio" name="fuel" defaultChecked />
                          <div className="radio-content">
                            <span className="radio-title">بنزين 95</span>
                            <span className="radio-price">0 ريال/لتر</span>
                          </div>
                        </label>
                        <label className="radio-option">
                          <input type="radio" name="fuel" />
                          <div className="radio-content">
                            <span className="radio-title">بنزين 91</span>
                            <span className="radio-price">0 ريال/لتر</span>
                          </div>
                        </label>
                        <label className="radio-option">
                          <input type="radio" name="fuel" />
                          <div className="radio-content">
                            <span className="radio-title">ديزل</span>
                            <span className="radio-price">00 ريال/لتر</span>
                          </div>
                        </label>
                        <label className="radio-option">
                          <input type="radio" name="fuel" />
                          <div className="radio-content">
                            <span className="radio-title">كيروسين</span>
                            <span className="radio-price">00 ريال/لتر</span>
                          </div>
                        </label>
                      </div>
                    </div>
                    
                    <div className="form-group-samsung">
                      <label className="samsung-label">حدد الكمية</label>
                      <div className="quantity-input-samsung">
                        <input type="number" defaultValue="20" min="5" max="100" />
                        <span className="unit">لتر</span>
                      </div>
                      <div className="quantity-presets">
                        
                        <button className="preset-btn">30000 لتر</button>
                        <button className="preset-btn">23000 لتر</button>
                      </div>
                    </div>
                    
                    <div className="form-group-samsung">
                      <label className="samsung-label">المبلغ الإجمالي</label>
                      <div className="total-amount">
                        <span className="amount">45000.00</span>
                        <span className="currency">ريال سعودي</span>
                      </div>
                    </div>
                    
                    <button className="confirm-button samsung-confirm-btn">
                      التالي
                    </button>
                  </div>
                </>
              )}
            </div>
            
            {/* Navigation Buttons */}
            <div className="samsung-navigation">
              <div className="nav-icon">◀</div>
              <div className="nav-icon">◯</div>
              <div className="nav-icon">☰</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="app" className="app-demo">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>تطبيقنا المميز</h2>
          <p>حمل تطبيق Albuhaira Alarabia لتجربة أسهل وأسرع لطلب الوقود</p>
        </motion.div>
        
        <div className="device-selector">
          <button 
            className={`device-tab ${activeDevice === 'iphone' ? 'active' : ''}`}
            onClick={() => setActiveDevice('iphone')}
          >
            <span className="apple-icon"></span> iPhone 17 Pro Max
          </button>
          <button 
            className={`device-tab ${activeDevice === 'samsung' ? 'active' : ''}`}
            onClick={() => setActiveDevice('samsung')}
          >
            <span className="android-icon">▢</span> Samsung Ultra 25
          </button>
        </div>
        
        <div className="demo-container">
          <motion.div 
            className="demo-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="platform-features">
              <h3>مميزات التطبيق:</h3>
              <ul className="features-list">
                <li>
                  <span>طلب سريع في أقل من دقيقة</span>
                </li>
                <li>
                  <span>تتبع حي لموقع سيارة الوقود</span>
                </li>
                <li>
                  <span>دفع آمن عبر التطبيق</span>
                </li>
                <li>
                  <span>عروض حصرية للمستخدمين</span>
                </li>
                <li>
                  <span>دعم جميع أنواع الوقود</span>
                </li>
                <li>
                  <span>خدمة 24/7 على مدار الساعة</span>
                </li>
              </ul>
            </div>
            
            <div className="download-section">
              <h3>حمّل التطبيق الآن</h3>
              <p>متوفر على جميع المنصات</p>
              
              <div className="download-buttons">
                <motion.a 
                  href="https://play.google.com/store/apps/details?id=albuhaira.a1999.com&pcampaignid=web_share" 
                  className="download-btn android-download"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="google-play-icon">
                    <svg viewBox="0 0 24 24" width="28" height="28">
                      <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  </span>
                  <div className="btn-text">
                    <div className="btn-subtitle">حمله من</div>
                    <div className="btn-title">Google Play</div>
                  </div>
                </motion.a>
                
                <motion.a 
                  href="#ios-download" 
                  className="download-btn ios-download"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="app-store-icon">
                    <svg viewBox="0 0 24 24" width="28" height="28">
                      <path fill="currentColor" d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                  </span>
                  <div className="btn-text">
                    <div className="btn-subtitle">حمله من</div>
                    <div className="btn-title">App Store</div>
                  </div>
                </motion.a>
              </div>
            </div>
            
            <div className="app-stats">
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">تحميل</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.8</div>
                <div className="stat-label">تقييم</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">دعم فني</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">متوسط التوصيل</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="phone-mockup-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="phone-display">
              {activeDevice === 'iphone' ? (
                <Iphone screen={activeScreen} />
              ) : (
                <Android screen={activeScreen} />
              )}
              
              {/* Screen Transition Info */}
              <motion.div 
                className="screen-info"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="transition-indicator">
           
                </div>
              </motion.div>
            </div>
            
            <div className="device-features">
              <div className="feature-tag iphone-tag">
              
                <span>Dynamic Island</span>
              </div>
              <div className="feature-tag samsung-tag">
                
                <span>S-Pen متوافق</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Additional App Info */}
        <motion.div 
          className="app-extra-info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="info-card">
            <div className="info-icon"></div>
            <div className="info-content">
              <h4>آمن تماماً</h4>
              <p>جميع عمليات الدفع مشفرة وآمنة 100%</p>
            </div>
          </div>
          <div className="info-card">
    
            <div className="info-content">
              <h4>توصيل سريع</h4>
            </div>
          </div>
          <div className="info-card">
            <div className="info-content">
              <h4>تقييم مرتفع</h4>
              <p>4.8/5 من آلاف المستخدمين</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDemo;
