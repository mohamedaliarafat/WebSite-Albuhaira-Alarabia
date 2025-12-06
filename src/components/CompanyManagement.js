import React, { useState } from 'react';
import '../styles/App.css';

const CompanyManagement = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('ar');
  const [themeColor, setThemeColor] = useState('#1e3a8a');

  const translations = {
    ar: {
      title: "إدارة الشركة",
      subtitle: "فريق القيادة والإدارة",
      toggleDark: "تبديل الوضع",
      search: "بحث عن موظف...",
      filter: "تصفية حسب القسم",
      all: "الجميع",
      executive: "الإدارة العليا",
      hr: "الموارد البشرية",
      sales: "المبيعات",
      marketing: "التسويق",
      it: "التقنية",
      viewProfile: "عرض الملف",
      contact: "الاتصال",
      years: "سنوات خبرة",
      team: "أعضاء الفريق",
      stats: "إحصائيات الشركة"
    },
    en: {
      title: "Company Management",
      subtitle: "Leadership & Management Team",
      toggleDark: "Toggle Mode",
      search: "Search employee...",
      filter: "Filter by Department",
      all: "All",
      executive: "Executive",
      hr: "Human Resources",
      sales: "Sales",
      marketing: "Marketing",
      it: "IT",
      viewProfile: "View Profile",
      contact: "Contact",
      years: "Years Experience",
      team: "Team Members",
      stats: "Company Statistics"
    },
    bn: {
      title: "কোম্পানি ব্যবস্থাপনা",
      subtitle: "নেতৃত্ব ও ব্যবস্থাপনা দল",
      toggleDark: "মোড পরিবর্তন",
      search: "কর্মচারী খুঁজুন...",
      filter: "বিভাগ অনুযায়ী ফিল্টার",
      all: "সব",
      executive: "কার্যনির্বাহী",
      hr: "মানব সম্পদ",
      sales: "বিক্রয়",
      marketing: "বিপণন",
      it: "আইটি",
      viewProfile: "প্রোফাইল দেখুন",
      contact: "যোগাযোগ",
      years: "বছরের অভিজ্ঞতা",
      team: "দলের সদস্য",
      stats: "কোম্পানি পরিসংখ্যান"
    },
    hi: {
      title: "कंपनी प्रबंधन",
      subtitle: "नेतृत्व और प्रबंधन टीम",
      toggleDark: "मोड बदलें",
      search: "कर्मचारी खोजें...",
      filter: "विभाग के अनुसार फ़िल्टर",
      all: "सभी",
      executive: "कार्यकारी",
      hr: "मानव संसाधन",
      sales: "बिक्री",
      marketing: "विपणन",
      it: "आईटी",
      viewProfile: "प्रोफ़ाइल देखें",
      contact: "संपर्क करें",
      years: "वर्षों का अनुभव",
      team: "टीम के सदस्य",
      stats: "कंपनी आंकड़े"
    }
  };

  const employees = [
    {
      id: 1,
      name: {
        ar: "ناصر خالد المطيري",
        en: "Nasser Khaled ",
        bn: "আহমেদ মোহাম্মদ",
        hi: "अहमद मोहम्मद"
      },
      position: {
        ar: "رئيس مجلس الادارة",
        en: "Chairman of the Board",
        bn: "প্রধান নির্বাহী কর্মকর্তা",
        hi: "मुख्य कार्यकारी अधिकारी"
      },
      department: {
        ar: "الإدارة العليا",
        en: "Executive Management",
        bn: "কার্যনির্বাহী ব্যবস্থাপনা",
        hi: "कार्यकारी प्रबंधन"
      },
      email: "nasser@albuhairaalarabia.com",
      phone: "0558764446",
      experience: "15",
      image: "https://b.top4top.io/p_3627gwvv71.png",
      departmentKey: "COTB"
    },
    {
      id: 2,
      name: {
        ar: "حماده الرشيدي",
        en: "Hamada Alrashidy",
        bn: "সারা আলী",
        hi: "सारा अली"
      },
      position: {
        ar: "مدير الحسابات",
        en: "Account Manager",
        bn: "মানব সম্পদ পরিচালক",
        hi: "मानव संसाधन निदेशक"
      },
      email: "hamada@company.com",
      phone: "0537609128",
      experience: "10",
      image: "https://i.top4top.io/p_36276lttd1.png",
      departmentKey: "AM"
    },
    {
      id: 3,
      name: {
        ar: "مراد الحجري",
        en: "Morad Alhagry",
        bn: "খালিদ আহমেদ",
        hi: "खालिद अहमद"
      },
      position: {
        ar: "مسؤول تشفيل محطات",
        en: "Stations operating officer",
        bn: "বিক্রয় ব্যবস্থাপক",
        hi: "बिक्री प्रबंधक"
      },
      email: "morad@company.com",
      phone: "0500800351",
      experience: "12",
      image: "https://h.top4top.io/p_3627koeod1.jpg",
      departmentKey: "sales"
    },
    {
      id: 4,
      name: {
        ar: "محمد نصر",
        en: "Mohamed Nasr",
        bn: "ফাতিমা হাসান",
        hi: "फातिमा हसन"
      },
      position: {
        ar: "محاسب عام",
        en: "General accountant",
        bn: "বিপণন পরিচালক",
        hi: "मार्केटिंग निदेशक"
      },
      email: "M=mohamed@company.com",
      phone: "059553944",
      experience: "8",
      image: "https://e.top4top.io/p_362720cnm1.png",
      departmentKey: "marketing"
    },
    {
      id: 5,
      name: {
        ar: "كامل صديق",
        en: "Kamil Siddig",
        bn: "মোহাম্মদ খালিদ",
        hi: "मोहम्मद खालिद"
      },
      position: {
        ar: "محاسب عام",
        en: "General Accountant",
        bn: "আইটি ব্যবস্থাপক",
        hi: "आईटी प्रबंधक"
      },
      email: "kamilsiddig212@gmail.com",
      phone: "0552127073",
      experience: "11",
      image: "https://k.top4top.io/p_3627p4lm31.jpeg",
      departmentKey: "it"
    },
    {
      id: 6,
      name: {
        ar: "",
        en: "Nora Saeed",
        bn: "নোরা সাইদ",
        hi: "नोरा सईद"
      },
      position: {
        ar: "نائب المدير التنفيذي",
        en: "Deputy CEO",
        bn: "ডেপুটি সিইও",
        hi: "उप मुख्य कार्यकारी अधिकारी"
      },
      email: "nora@company.com",
      phone: "+966500123461",
      experience: "14",
      image: "",
      departmentKey: "executive"
    }
  ];

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = employees.filter(employee => {
    const matchesFilter = filter === 'all' || employee.departmentKey === filter;
    const matchesSearch = 
      employee.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position[language].toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const t = translations[language];

  const companyStats = {
    totalEmployees: employees.length,
    avgExperience: Math.round(employees.reduce((acc, emp) => acc + parseInt(emp.experience), 0) / employees.length),
    departments: ['الإدارة العليا', 'الموارد البشرية', 'المبيعات', 'التسويق', 'التقنية'].length
  };

  return (
    <div className={`company-management ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="company-header" style={{ backgroundColor: themeColor }}>
        <div className="header-content">
    <div className="company-logo">
     
      <span className="logo-text">{t.title}</span>
    </div>
     <img 
        src="https://d.top4top.io/p_36276guat1.png" 
        alt="Company Logo" 
        className="logo-image"
        width="100"
        height="90"
      />
    <p className="logo-subtitle">{t.subtitle}</p>
  </div>
        
        <div className="controls">
          <div className="language-selector">
            <button 
              className={language === 'ar' ? 'active' : ''} 
              onClick={() => setLanguage('ar')}
            >
              🇸🇦 عربي
            </button>
            <button 
              className={language === 'en' ? 'active' : ''} 
              onClick={() => setLanguage('en')}
            >
              🇺🇸 English
            </button>
            <button 
              className={language === 'bn' ? 'active' : ''} 
              onClick={() => setLanguage('bn')}
            >
              🇧🇩 বাংলা
            </button>
            <button 
              className={language === 'hi' ? 'active' : ''} 
              onClick={() => setLanguage('hi')}
            >
              🇮🇳 हिंदी
            </button>
          </div>
          
          <div className="theme-controls">
            <button 
              className="theme-btn"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
              <span>{t.toggleDark}</span>
            </button>
            
            <div className="color-picker">
              <button 
                className="color-btn blue" 
                onClick={() => setThemeColor('#1e3a8a')}
                title="أزرق كحلي"
              ></button>
              <button 
                className="color-btn dark" 
                onClick={() => setThemeColor('#2d3748')}
                title="داكن"
              ></button>
              <button 
                className="color-btn light" 
                onClick={() => setThemeColor('#3182ce')}
                title="فاتح"
              ></button>
            </div>
          </div>
        </div>
      </header>

      <div className="company-content">
        <div className="search-filter-section">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder={t.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="filter-buttons">
            <span>{t.filter}:</span>
            <button 
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              {t.all}
            </button>
            <button 
              className={filter === 'executive' ? 'active' : ''}
              onClick={() => setFilter('executive')}
            >
              {t.executive}
            </button>
            <button 
              className={filter === 'hr' ? 'active' : ''}
              onClick={() => setFilter('hr')}
            >
              {t.hr}
            </button>
            <button 
              className={filter === 'sales' ? 'active' : ''}
              onClick={() => setFilter('sales')}
            >
              {t.sales}
            </button>
            <button 
              className={filter === 'marketing' ? 'active' : ''}
              onClick={() => setFilter('marketing')}
            >
              {t.marketing}
            </button>
            <button 
              className={filter === 'it' ? 'active' : ''}
              onClick={() => setFilter('it')}
            >
              {t.it}
            </button>
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-card">
            <h3>{t.team}</h3>
            <p className="stat-number">{companyStats.totalEmployees}</p>
          </div>
          <div className="stat-card">
            <h3>{t.years}</h3>
            <p className="stat-number">{companyStats.avgExperience}</p>
          </div>
          <div className="stat-card">
            <h3>{t.filter}</h3>
            <p className="stat-number">{companyStats.departments}</p>
          </div>
        </div>

        <div className="employees-grid">
          {filteredEmployees.map(employee => (
            <div key={employee.id} className="employee-card">
              <div className="card-header">
                <img src={employee.image} alt={employee.name[language]} />
                <div className="employee-basic">
                  <h3>{employee.name[language]}</h3>
                  <p className="position">{employee.position[language]}</p>
                </div>
              </div>
              
              <div className="card-body">
                <div className="info-item">
                  <i className="fas fa-briefcase"></i>
                  <span>{employee.department?.[language] || employee.position[language]}</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <span>{employee.email}</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-phone"></i>
                  <span>{employee.phone}</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-calendar-alt"></i>
                  <span>{employee.experience} {t.years}</span>
                </div>
              </div>
              
              <div className="card-footer">
                <button className="profile-btn">
                  <i className="fas fa-user-circle"></i>
                  {t.viewProfile}
                </button>
                <button className="contact-btn">
                  <i className="fas fa-comment"></i>
                  {t.contact}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="company-footer">
        <p>© 2025 Albuhaira Alarabia Co.</p>
        <div className="footer-links">
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </footer>
    </div>
  );
};

export default CompanyManagement;
