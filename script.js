// Mobile menu functionality
function toggleMobileMenu() {
  const hamburger = document.querySelector(".hamburger")
  const mobileMenu = document.querySelector(".mobile-menu")

  hamburger.classList.toggle("active")
  mobileMenu.classList.toggle("active")

  // Prevent body scroll when menu is open
  if (mobileMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = ""
  }
}

function closeMobileMenu() {
  const hamburger = document.querySelector(".hamburger")
  const mobileMenu = document.querySelector(".mobile-menu")

  hamburger.classList.remove("active")
  mobileMenu.classList.remove("active")
  document.body.style.overflow = ""
}

// Language translations
const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    teachers: "Teachers",
    contact: "Contact",

    // Hero Section
    "hero-title": "Achieve Your Dream SAT Score & Get Into Top Universities",
    "hero-subtitle": "Master the SAT with our proven methodology and expert guidance. Join thousands of successful students who achieved their target scores.",
    "start-now": "Start Now",
    "watch-how": "Watch How It Works",
    "trust-badge": "5,000+ students trained • 95% success rate",

    // About Section
    "about-title": "What is SAT Center?",
    "about-description": "SAT Center is a premier test preparation institute dedicated to helping students achieve their highest potential on the SAT exam. Our comprehensive programs combine proven strategies, personalized instruction, and cutting-edge resources to ensure your success.",
    "who-for-title": "Who is this course for?",
    "for-item1": "High school students preparing for college admissions",
    "for-item2": "Students aiming for top-tier universities",
    "for-item3": "Anyone looking to improve their SAT scores significantly",
    "for-item4": "Students who want personalized, expert guidance",
    "get-started": "Get Started Today",
    "name-placeholder": "Your Name",
    "phone-placeholder": "Phone Number",
    "submit": "Submit",

    // Teachers Section
    "teachers-title": "Meet Our Expert Teachers",
    "teacher1-title": "SAT Math Expert",
    "teacher1-desc": "With over 15 years of experience in SAT preparation, Dr. Johnson has helped thousands of students achieve their target math scores. She holds a PhD in Mathematics from MIT and specializes in making complex concepts simple and understandable.",
    "teacher1-exp": "✓ 15+ Years Experience",
    "teacher1-edu": "✓ PhD Mathematics MIT",
    "teacher1-students": "✓ 3000+ Students Taught",
    
    "teacher2-title": "English & Writing Specialist",
    "teacher2-desc": "Professor Chen brings a wealth of knowledge in English literature and writing. His innovative teaching methods have consistently helped students improve their reading comprehension and essay writing skills for the SAT.",
    "teacher2-edu": "✓ Harvard Graduate",
    "teacher2-author": "✓ Published Author",
    "teacher2-exp": "✓ 12+ Years Teaching",
    
    "teacher3-title": "College Admission Counselor",
    "teacher3-desc": "Dr. Rodriguez specializes in college admissions and has guided hundreds of students through the complex process of university applications. Her expertise extends to scholarship applications and interview preparation.",
    "teacher3-officer": "✓ Former Admissions Officer",
    "teacher3-apps": "✓ 500+ Successful Applications",
    "teacher3-scholar": "✓ Scholarship Expert",
    
    "teacher4-title": "SAT Strategy Coach",
    "teacher4-desc": "James focuses on test-taking strategies and time management techniques. His systematic approach to SAT preparation has helped students maximize their potential and achieve significant score improvements.",
    "teacher4-perfect": "✓ Perfect SAT Scorer",
    "teacher4-strategy": "✓ Strategy Specialist",
    "teacher4-exp": "✓ 8+ Years Coaching",

    // Footer
    "footer-description": "Empowering students to achieve their dreams through exceptional SAT preparation and university admission guidance.",
    "footer-company": "Company",
    "footer-about": "About Us",
    "footer-teachers-link": "Our Teachers",
    "footer-success": "Success Stories",
    "footer-blog": "Blog",
    "footer-contact-info": "Contact Info",
    "email": "Email:",
    "phone": "Phone:",
    "address": "Address:",
    "hours": "Hours:",
    "rights": "All rights reserved.",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service",
    "support": "Support",
  },

  ru: {
    // Navigation
    home: "Главная",
    about: "О нас",
    teachers: "Преподаватели",
    contact: "Контакты",

    // Hero Section
    "hero-title": "Достигните своего результата SAT и поступите в лучшие университеты",
    "hero-subtitle": "Освойте SAT с нашей проверенной методологией и экспертным руководством. Присоединяйтесь к тысячам успешных студентов, которые достигли своих целевых результатов.",
    "start-now": "Начать сейчас",
    "watch-how": "Посмотреть как это работает",
    "trust-badge": "5,000+ обученных студентов • 95% успешности",

    // About Section
    "about-title": "Что такое SAT Center?",
    "about-description": "SAT Center - это ведущий институт подготовки к тестам, посвященный помощи студентам в достижении их наивысшего потенциала на экзамене SAT. Наши комплексные программы сочетают проверенные стратегии, персонализированное обучение и передовые ресурсы для обеспечения вашего успеха.",
    "who-for-title": "Для кого этот курс?",
    "for-item1": "Старшеклассники, готовящиеся к поступлению в колледж",
    "for-item2": "Студенты, нацеленные на университеты высшего уровня",
    "for-item3": "Все, кто хочет значительно улучшить свои результаты SAT",
    "for-item4": "Студенты, которые хотят персонализированного экспертного руководства",
    "get-started": "Начните сегодня",
    "name-placeholder": "Ваше имя",
    "phone-placeholder": "Номер телефона",
    "submit": "Отправить",

    // Teachers Section
    "teachers-title": "Познакомьтесь с нашими экспертами",
    "teacher1-title": "Эксперт по математике SAT",
    "teacher1-desc": "Имея более 15 лет опыта в подготовке к SAT, доктор Джонсон помогла тысячам студентов достичь целевых результатов по математике. Она имеет докторскую степень по математике из MIT и специализируется на упрощении сложных концепций.",
    "teacher1-exp": "✓ 15+ лет опыта",
    "teacher1-edu": "✓ Доктор математических наук MIT",
    "teacher1-students": "✓ 3000+ обученных студентов",
    
    "teacher2-title": "Специалист по английскому языку и письму",
    "teacher2-desc": "Профессор Чен обладает богатыми знаниями в области английской литературы и письма. Его инновационные методы обучения постоянно помогают студентам улучшать понимание прочитанного и навыки написания эссе для SAT.",
    "teacher2-edu": "✓ Выпускник Гарварда",
    "teacher2-author": "✓ Опубликованный автор",
    "teacher2-exp": "✓ 12+ лет преподавания",
    
    "teacher3-title": "Консультант по поступлению в колледж",
    "teacher3-desc": "Доктор Родригес специализируется на поступлении в колледжи и провела сотни студентов через сложный процесс подачи заявлений в университеты. Ее экспертиза распространяется на заявления на стипендии и подготовку к собеседованиям.",
    "teacher3-officer": "✓ Бывший сотрудник приемной комиссии",
    "teacher3-apps": "✓ 500+ успешных заявлений",
    "teacher3-scholar": "✓ Эксперт по стипендиям",
    
    "teacher4-title": "Тренер по стратегии SAT",
    "teacher4-desc": "Джеймс фокусируется на стратегиях сдачи тестов и методах управления временем. Его систематический подход к подготовке к SAT помог студентам максимизировать свой потенциал и достичь значительных улучшений результатов.",
    "teacher4-perfect": "✓ Идеальный результат SAT",
    "teacher4-strategy": "✓ Специалист по стратегии",
    "teacher4-exp": "✓ 8+ лет тренерства",

    // Footer
    "footer-description": "Расширяем возможности студентов для достижения их мечты посредством исключительной подготовки к SAT и руководства по поступлению в университет.",
    "footer-company": "Компания",
    "footer-about": "О нас",
    "footer-teachers-link": "Наши преподаватели",
    "footer-success": "Истории успеха",
    "footer-blog": "Блог",
    "footer-contact-info": "Контактная информация",
    "email": "Электронная почта:",
    "phone": "Телефон:",
    "address": "Адрес:",
    "hours": "Часы работы:",
    "rights": "Все права защищены.",
    "privacy": "Политика конфиденциальности",
    "terms": "Условия использования",
    "support": "Поддержка",
  },

  uz: {
    // Navigation
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    teachers: "O'qituvchilar",
    contact: "Aloqa",

    // Hero Section
    "hero-title": "SAT natijangizga erishing va eng yaxshi universitetlarga kiring",
    "hero-subtitle": "Bizning isbotlangan metodologiya va ekspert yo'l-yo'riqlari bilan SATni o'zlashtirib oling. Maqsadli natijalariga erishgan minglab muvaffaqiyatli talabalar qatoriga qo'shiling.",
    "start-now": "Hozir boshlang",
    "watch-how": "Qanday ishlashini ko'ring",
    "trust-badge": "5,000+ o'qitilgan talabalar • 95% muvaffaqiyat darajasi",

    // About Section
    "about-title": "SAT Center nima?",
    "about-description": "SAT Center - bu talabalarga SAT imtihonida eng yuqori salohiyatlariga erishishda yordam berishga bag'ishlangan yetakchi test tayyorlash instituti. Bizning keng qamrovli dasturlarimiz isbotlangan strategiyalar, shaxsiylashtirilgan ta'lim va ilg'or resurslarni birlashtiradi.",
    "who-for-title": "Bu kurs kim uchun?",
    "for-item1": "Kollej qabuliga tayyorlanayotgan o'rta maktab o'quvchilari",
    "for-item2": "Yuqori darajadagi universitetlarni maqsad qilgan talabalar",
    "for-item3": "SAT natijalarini sezilarli darajada yaxshilamoqchi bo'lganlar",
    "for-item4": "Shaxsiylashtirilgan ekspert yo'l-yo'riqni istaydigan talabalar",
    "get-started": "Bugun boshlang",
    "name-placeholder": "Ismingiz",
    "phone-placeholder": "Telefon raqami",
    "submit": "Yuborish",

    // Teachers Section
    "teachers-title": "Bizning ekspert o'qituvchilarimiz bilan tanishing",
    "teacher1-title": "SAT matematika eksprti",
    "teacher1-desc": "SAT tayyorlashda 15 yildan ortiq tajribaga ega doktor Jonson minglab talabalarga maqsadli matematika natijalariga erishishda yordam berdi. U MIT dan matematika fanlari doktori darajasiga ega va murakkab tushunchalarni sodda va tushunarli qilishga ixtisoslashgan.",
    "teacher1-exp": "✓ 15+ yil tajriba",
    "teacher1-edu": "✓ MIT matematika fanlari doktori",
    "teacher1-students": "✓ 3000+ o'qitilgan talabalar",
    
    "teacher2-title": "Ingliz tili va yozish mutaxassisi",
    "teacher2-desc": "Professor Chen ingliz adabiyoti va yozish sohasida boy bilimga ega. Uning innovatsion o'qitish usullari talabalarga SAT uchun o'qish tushunchasi va insho yozish ko'nikmalarini yaxshilashda doimiy yordam beradi.",
    "teacher2-edu": "✓ Garvard bitiruvchisi",
    "teacher2-author": "✓ Nashr etilgan muallif",
    "teacher2-exp": "✓ 12+ yil o'qitish",
    
    "teacher3-title": "Kollej qabul maslahatchisi",
    "teacher3-desc": "Doktor Rodriges kollej qabuliga ixtisoslashgan va yuzlab talabalarni universitetlarga ariza berish murakkab jarayonida yo'l-yo'riq qilgan. Uning tajribasi stipendiya arizalari va suhbatga tayyorgarlikka ham taalluqlidir.",
    "teacher3-officer": "✓ Sobiq qabul komissiyasi xodimi",
    "teacher3-apps": "✓ 500+ muvaffaqiyatli arizalar",
    "teacher3-scholar": "✓ Stipendiya eksprti",
    
    "teacher4-title": "SAT strategiya murabbiysi",
    "teacher4-desc": "Jeyms test topshirish strategiyalari va vaqtni boshqarish usullariga e'tibor qaratadi. Uning SAT tayyorlashga tizimli yondashuvi talabalarga o'z salohiyatlarini maksimal darajada oshirishga va sezilarli natija yaxshilanishlariga erishishga yordam berdi.",
    "teacher4-perfect": "✓ Mukammal SAT natijasi",
    "teacher4-strategy": "✓ Strategiya mutaxassisi",
    "teacher4-exp": "✓ 8+ yil murabbiylik",

    // Footer
    "footer-description": "Talabalarga ajoyib SAT tayyorlash va universitetga kirish bo'yicha ko'rsatmalar orqali o'z orzulariga erishish uchun imkoniyat yaratish.",
    "footer-company": "Kompaniya",
    "footer-about": "Biz haqimizda",
    "footer-teachers-link": "Bizning o'qituvchilar",
    "footer-success": "Muvaffaqiyat hikoyalari",
    "footer-blog": "Blog",
    "footer-contact-info": "Aloqa ma'lumotlari",
    "email": "Elektron pochta:",
    "phone": "Telefon:",
    "address": "Manzil:",
    "hours": "Ish vaqti:",
    "rights": "Barcha huquqlar himoyalangan.",
    "privacy": "Maxfiylik siyosati",
    "terms": "Foydalanish shartlari",
    "support": "Yordam",
  },
}

// Current language
let currentLanguage = "en"

// Theme management
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)

  // Update both toggle switches
  const desktopToggle = document.getElementById("theme-toggle")
  const mobileToggle = document.getElementById("theme-toggle-mobile")

  if (desktopToggle) desktopToggle.checked = newTheme === "dark"
  if (mobileToggle) mobileToggle.checked = newTheme === "dark"
}

// Language dropdown functionality
function toggleLanguageDropdown() {
  const dropdown = document.querySelector(".language-dropdown")
  dropdown.classList.toggle("active")

  // Close dropdown when clicking outside
  document.addEventListener("click", function closeDropdown(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active")
      document.removeEventListener("click", closeDropdown)
    }
  })
}

// Language switching
function switchLanguage(lang) {
  currentLanguage = lang
  localStorage.setItem("language", lang)
  updateLanguage()

  // Update dropdown button text for both desktop and mobile
  const currentLangBtn = document.getElementById("current-lang")
  const currentLangBtnMobile = document.getElementById("current-lang-mobile")
  const langMap = {
    en: "🇺🇸 EN",
    ru: "🇷🇺 RU",
    uz: "🇺🇿 UZ",
  }

  if (currentLangBtn) currentLangBtn.textContent = langMap[lang]
  if (currentLangBtnMobile) currentLangBtnMobile.textContent = langMap[lang]

  // Close dropdown
  document.querySelector(".language-dropdown").classList.remove("active")
}

function updateLanguage() {
  const elements = document.querySelectorAll("[data-translate]")
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate")
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key]
    }
  })

  // Update placeholders
  const placeholderElements = document.querySelectorAll("[data-translate-placeholder]")
  placeholderElements.forEach((element) => {
    const key = element.getAttribute("data-translate-placeholder")
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.placeholder = translations[currentLanguage][key]
    }
  })
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Smooth scrolling for navigation links
function smoothScroll() {
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"], .mobile-nav-menu a[href^="#"]')
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href")
      const targetSection = document.querySelector(targetId)
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
        // Close mobile menu if open
        closeMobileMenu()
      }
    })
  })
}

// Form submission
function handleFormSubmission() {
  const form = document.querySelector(".quick-contact-form")
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const name = form.querySelector('input[type="text"]').value
      const phone = form.querySelector('input[type="tel"]').value

      // Simple validation
      if (name && phone) {
        alert("Thank you for your interest! We will contact you soon.")
        form.reset()
      } else {
        alert("Please fill in all fields.")
      }
    })
  }
}

// Staggered animation for teacher blocks
function setupTeacherAnimations() {
  const teacherBlocks = document.querySelectorAll(".teacher-block")
  
  teacherBlocks.forEach((block, index) => {
    const image = block.querySelector(".teacher-image")
    const info = block.querySelector(".teacher-info")
    
    // Add delay based on block index
    if (image) {
      image.style.transitionDelay = `${index * 0.2}s`
    }
    if (info) {
      info.style.transitionDelay = `${index * 0.2 + 0.1}s`
    }
  })
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Load saved preferences
  const savedTheme = localStorage.getItem("theme") || "light"
  const savedLanguage = localStorage.getItem("language") || "en"

  document.documentElement.setAttribute("data-theme", savedTheme)
  currentLanguage = savedLanguage
  updateLanguage()

  // Set initial toggle state
  const desktopToggle = document.getElementById("theme-toggle")
  const mobileToggle = document.getElementById("theme-toggle-mobile")
  if (desktopToggle) desktopToggle.checked = savedTheme === "dark"
  if (mobileToggle) mobileToggle.checked = savedTheme === "dark"

  // Update language display
  const currentLangBtn = document.getElementById("current-lang")
  const currentLangBtnMobile = document.getElementById("current-lang-mobile")
  const langMap = {
    en: "🇺🇸 EN",
    ru: "🇷🇺 RU",
    uz: "🇺🇿 UZ",
  }
  if (currentLangBtn) currentLangBtn.textContent = langMap[savedLanguage]
  if (currentLangBtnMobile) currentLangBtnMobile.textContent = langMap[savedLanguage]

  // Initialize animations
  const animatedElements = document.querySelectorAll(
    ".animate-left, .animate-right, .animate-up, .animate-slide-left, .animate-slide-right"
  )
  animatedElements.forEach((el) => observer.observe(el))

  // Initialize other functionality
  smoothScroll()
  handleFormSubmission()
  setupTeacherAnimations()

  // Trigger initial hero animations
  setTimeout(() => {
    const heroLeft = document.querySelector(".hero .animate-left")
    const heroRight = document.querySelector(".hero .animate-right")
    if (heroLeft) heroLeft.classList.add("visible")
    if (heroRight) heroRight.classList.add("visible")
  }, 300)
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "var(--bg-color)"
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)"
  } else {
    navbar.style.background = "var(--bg-color)"
    navbar.style.boxShadow = "none"
  }
})

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const mobileMenu = document.querySelector(".mobile-menu")
  const hamburger = document.querySelector(".hamburger")
  
  if (mobileMenu.classList.contains("active") && 
      !mobileMenu.contains(e.target) && 
      !hamburger.contains(e.target)) {
    closeMobileMenu()
  }
})

function toggleFAQ(element) {
  const faqItem = element.closest('.faq-item');
  const allFaqs = document.querySelectorAll('.faq-item');
  allFaqs.forEach(item => {
    if (item !== faqItem) item.classList.remove('active');
  });
  faqItem.classList.toggle('active');
}

function toggleLanguageDropdownMobile() {
  const dropdown = document.querySelector('.mobile-controls .language-dropdown');
  dropdown.classList.toggle('active');
  // Close dropdown when clicking outside
  document.addEventListener('click', function closeDropdown(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
      document.removeEventListener('click', closeDropdown);
    }
  });
}