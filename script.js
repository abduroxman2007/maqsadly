// FAQ scroll functionality
function scrollToFAQ() {
  const faqSection = document.querySelector(".faq")
  if (faqSection) {
    faqSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

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
    faq: "FAQ",
    home: "Home",
    about: "About",
    courses: "Courses",
    teachers: "Teachers",
    contact: "Contact",

    // Hero Section
    "hero-title": "Achieve Your Dream SAT Score",
    "hero-subtitle":
      "Join thousands of students who have successfully improved their SAT scores and gained admission to top universities worldwide.",
    "register-now": "Register Now",

    // About Section
    "about-title": "Why Choose Our Learning Center?",
    "about-text":
      "Our proven methodology has helped thousands of students achieve their target SAT scores. We provide personalized learning experiences, expert guidance, and comprehensive admission support to ensure your success in getting into top universities.",
    "about-point1": "✓ Personalized learning approach",
    "about-point2": "✓ Expert instructors with proven track records",
    "about-point3": "✓ Comprehensive university admission guidance",
    "about-point4": "✓ 95% success rate in score improvement",

    // About Section - New
    "about-subtitle": "Discover what makes us the leading SAT preparation center",
    "about-card1-title": "Proven Results",
    "about-card1-text":
      "95% of our students improve their SAT scores by an average of 200+ points with our proven methodology.",
    "about-card2-title": "Expert Instructors",
    "about-card2-text":
      "Learn from certified instructors with years of experience and proven track records in SAT preparation.",
    "about-card3-title": "University Success",
    "about-card3-text": "Our comprehensive admission guidance helps students get into top universities worldwide.",
    "stat-students": "Students Trained",
    "stat-success": "Success Rate",
    "stat-improvement": "Average Score Improvement",
    "stat-universities": "Partner Universities",

    // Teachers Section
    "teachers-title": "Meet Our Expert Teachers",

    // Courses Section
    "courses-title": "Choose Your Perfect Course",
    "course-english": "SAT English Course",
    "course-full": "Full SAT Course",
    "course-ultimate": "Full SAT + Admission Course",
    popular: "Most Popular",
    "best-value": "Best Value",
    "choose-plan": "Choose Plan",

    // Course Features
    "english-feature1": "✓ Reading comprehension",
    "english-feature2": "✓ Writing & Language",
    "english-feature3": "✓ Essay preparation",
    "english-feature4": "✓ 20 practice tests",
    "full-feature1": "✓ Complete SAT preparation",
    "full-feature2": "✓ Math & English sections",
    "full-feature3": "✓ 50+ practice tests",
    "full-feature4": "✓ Personal tutor support",
    "full-feature5": "✓ Score guarantee",
    "ultimate-feature1": "✓ Everything in Full SAT",
    "ultimate-feature2": "✓ University admission guidance",
    "ultimate-feature3": "✓ Essay review & editing",
    "ultimate-feature4": "✓ Interview preparation",
    "ultimate-feature5": "✓ Scholarship assistance",
    "ultimate-feature6": "✓ 1-on-1 counseling",

    // FAQ Section
    "faq-title": "Frequently Asked Questions",
    "faq-q1": "How long does the course take?",
    "faq-a1": "Our courses typically run for 12-16 weeks, with flexible scheduling options to fit your needs.",
    "faq-q2": "What is your success rate?",
    "faq-a2": "95% of our students improve their SAT scores by an average of 200+ points.",
    "faq-q3": "Do you offer online classes?",
    "faq-a3": "Yes, we offer both in-person and online classes with the same quality instruction.",
    "faq-q4": "What materials are included?",
    "faq-a4": "All study materials, practice tests, and digital resources are included in your course fee.",
    "faq-q5": "Can I get a refund?",
    "faq-a5": "We offer a 30-day money-back guarantee if you're not satisfied with our program.",
    "faq-q6": "Do you help with college applications?",
    "faq-a6": "Our premium courses include comprehensive college admission guidance and application support.",

    // Collaborators Section
    "collaborators-title": "Our University Partners",

    // Contact Section
    "contact-title": "Get In Touch",
    email: "Email:",
    phone: "Phone:",
    address: "Address:",
    "send-message": "Send Message",
    "name-placeholder": "Your Name",
    "email-placeholder": "Your Email",
    "message-placeholder": "Your Message",
    "phone-placeholder": "Your Phone Number",

    // Footer
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    support: "Support",
    "footer-description":
      "Empowering students to achieve their dreams through exceptional SAT preparation and university admission guidance.",
    "footer-courses": "Courses",
    "footer-sat-english": "SAT English",
    "footer-sat-math": "SAT Math",
    "footer-full-sat": "Full SAT Prep",
    "footer-admission": "Admission Guidance",
    "footer-company": "Company",
    "footer-about": "About Us",
    "footer-teachers-link": "Our Teachers",
    "footer-success": "Success Stories",
    "footer-blog": "Blog",
    "footer-contact-info": "Contact Info",
    hours: "Hours",
    sitemap: "Sitemap",
  },

  ru: {
    // Navigation
    faq: "Вопросы",
    home: "Главная",
    about: "О нас",
    courses: "Курсы",
    teachers: "Преподаватели",
    contact: "Контакты",

    // Hero Section
    "hero-title": "Достигните своего результата SAT",
    "hero-subtitle":
      "Присоединяйтесь к тысячам студентов, которые успешно улучшили свои результаты SAT и поступили в лучшие университеты мира.",
    "register-now": "Записаться сейчас",

    // About Section
    "about-title": "Почему выбирают наш центр?",
    "about-text":
      "Наша проверенная методология помогла тысячам студентов достичь целевых результатов SAT. Мы предоставляем персонализированный опыт обучения, экспертное руководство и комплексную поддержку при поступлении.",
    "about-point1": "✓ Персонализированный подход к обучению",
    "about-point2": "✓ Опытные преподаватели с доказанными результатами",
    "about-point3": "✓ Комплексное руководство по поступлению в университет",
    "about-point4": "✓ 95% успешности в улучшении результатов",

    // About Section - New
    "about-subtitle": "Узнайте, что делает нас ведущим центром подготовки к SAT",
    "about-card1-title": "Доказанные результаты",
    "about-card1-text":
      "95% наших студентов улучшают свои результаты SAT в среднем на 200+ баллов благодаря нашей проверенной методологии.",
    "about-card2-title": "Опытные инструкторы",
    "about-card2-text":
      "Учитесь у сертифицированных инструкторов с многолетним опытом и подтвержденными успехами в подготовке к SAT.",
    "about-card3-title": "Успех в университете",
    "about-card3-text":
      "Наше комплексное руководство по поступлению помогает студентам поступить в лучшие университеты мира.",
    "stat-students": "Обучено студентов",
    "stat-success": "Процент успеха",
    "stat-improvement": "Среднее улучшение балла",
    "stat-universities": "Университеты-партнеры",

    // Teachers Section
    "teachers-title": "Познакомьтесь с нашими экспертами",

    // Courses Section
    "courses-title": "Выберите идеальный курс",
    "course-english": "Курс английского SAT",
    "course-full": "Полный курс SAT",
    "course-ultimate": "Полный SAT + поступление",
    popular: "Самый популярный",
    "best-value": "Лучшее предложение",
    "choose-plan": "Выбрать план",

    // Course Features
    "english-feature1": "✓ Понимание прочитанного",
    "english-feature2": "✓ Письмо и язык",
    "english-feature3": "✓ Подготовка эссе",
    "english-feature4": "✓ 20 практических тестов",
    "full-feature1": "✓ Полная подготовка к SAT",
    "full-feature2": "✓ Математика и английский",
    "full-feature3": "✓ 50+ практических тестов",
    "full-feature4": "✓ Поддержка личного репетитора",
    "full-feature5": "✓ Гарантия результата",
    "ultimate-feature1": "✓ Все из полного SAT",
    "ultimate-feature2": "✓ Руководство по поступлению",
    "ultimate-feature3": "✓ Проверка и редактирование эссе",
    "ultimate-feature4": "✓ Подготовка к собеседованию",
    "ultimate-feature5": "✓ Помощь со стипендиями",
    "ultimate-feature6": "✓ Индивидуальное консультирование",

    // FAQ Section
    "faq-title": "Часто задаваемые вопросы",
    "faq-q1": "Сколько длится курс?",
    "faq-a1": "Наши курсы обычно длятся 12-16 недель с гибким расписанием под ваши потребности.",
    "faq-q2": "Каков ваш процент успеха?",
    "faq-a2": "95% наших студентов улучшают свои результаты SAT в среднем на 200+ баллов.",
    "faq-q3": "Предлагаете ли вы онлайн-занятия?",
    "faq-a3": "Да, мы предлагаем как очные, так и онлайн-занятия с тем же качеством обучения.",
    "faq-q4": "Какие материалы включены?",
    "faq-a4": "Все учебные материалы, практические тесты и цифровые ресурсы включены в стоимость курса.",
    "faq-q5": "Можно ли получить возврат средств?",
    "faq-a5": "Мы предлагаем 30-дневную гарантию возврата денег, если вы не удовлетворены нашей программой.",
    "faq-q6": "Помогаете ли вы с заявлениями в колледж?",
    "faq-a6": "Наши премиум-курсы включают комплексное руководство по поступлению в колледж и поддержку заявлений.",

    // Collaborators Section
    "collaborators-title": "Наши партнеры-университеты",

    // Contact Section
    "contact-title": "Свяжитесь с нами",
    email: "Электронная почта:",
    phone: "Телефон:",
    address: "Адрес:",
    "send-message": "Отправить сообщение",
    "name-placeholder": "Ваше имя",
    "email-placeholder": "Ваш email",
    "message-placeholder": "Ваше сообщение",
    "phone-placeholder": "Ваш номер телефона",

    // Footer
    rights: "Все права защищены.",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    support: "Поддержка",
    "footer-description":
      "Расширяем возможности студентов для достижения их мечты посредством исключительной подготовки к SAT и руководства по поступлению в университет.",
    "footer-courses": "Курсы",
    "footer-sat-english": "Английский SAT",
    "footer-sat-math": "Математика SAT",
    "footer-full-sat": "Полная подготовка к SAT",
    "footer-admission": "Руководство по поступлению",
    "footer-company": "Компания",
    "footer-about": "О нас",
    "footer-teachers-link": "Наши преподаватели",
    "footer-success": "Истории успеха",
    "footer-blog": "Блог",
    "footer-contact-info": "Контактная информация",
    hours: "Часы работы",
    sitemap: "Карта сайта",
  },

  uz: {
    // Navigation
    faq: "Savollar",
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    courses: "Kurslar",
    teachers: "O'qituvchilar",
    contact: "Aloqa",

    // Hero Section
    "hero-title": "SAT natijangizga erishing",
    "hero-subtitle":
      "SAT natijalarini muvaffaqiyatli yaxshilagan va dunyoning eng yaxshi universitetlariga kirgan minglab talabalar qatoriga qo'shiling.",
    "register-now": "Hozir ro'yxatdan o'ting",

    // About Section
    "about-title": "Nega bizni tanlaysiz?",
    "about-text":
      "Bizning isbotlangan metodologiyamiz minglab talabalarga maqsadli SAT natijalariga erishishda yordam berdi. Biz shaxsiylashtirilgan ta'lim tajribasi, ekspert yo'l-yo'riqlari va universitetga kirish bo'yicha keng qamrovli yordam taqdim etamiz.",
    "about-point1": "✓ Shaxsiylashtirilgan ta'lim yondashuvi",
    "about-point2": "✓ Isbotlangan natijalarga ega ekspert o'qituvchilar",
    "about-point3": "✓ Universitetga kirish bo'yicha keng qamrovli yo'l-yo'riq",
    "about-point4": "✓ Natijalarni yaxshilashda 95% muvaffaqiyat darajasi",

    // About Section - New
    "about-subtitle": "Bizni SATga tayyorlash bo'yicha yetakchi markazga aylantiradigan omillarni bilib oling",
    "about-card1-title": "Isbotlangan natijalar",
    "about-card1-text":
      "Talabalarimizning 95 foizi isbotlangan metodologiyamiz yordamida SAT ballarini o'rtacha 200+ ballga yaxshilaydi.",
    "about-card2-title": "Tajribali o'qituvchilar",
    "about-card2-text":
      "SATga tayyorlash bo'yicha ko'p yillik tajribaga va isbotlangan yutuqlarga ega sertifikatlangan o'qituvchilardan saboq oling.",
    "about-card3-title": "Universitetdagi muvaffaqiyat",
    "about-card3-text":
      "Bizning universitetga kirish bo'yicha keng qamrovli qo'llanmamiz talabalarga dunyoning eng yaxshi universitetlariga kirishga yordam beradi.",
    "stat-students": "O'qitilgan talabalar",
    "stat-success": "Muvaffaqiyat darajasi",
    "stat-improvement": "O'rtacha ball yaxshilanishi",
    "stat-universities": "Hamkor universitetlar",

    // Teachers Section
    "teachers-title": "Bizning ekspert o'qituvchilarimiz bilan tanishing",

    // Courses Section
    "courses-title": "O'zingizga mos kursni tanlang",
    "course-english": "SAT ingliz tili kursi",
    "course-full": "To'liq SAT kursi",
    "course-ultimate": "To'liq SAT + qabul kursi",
    popular: "Eng mashhur",
    "best-value": "Eng yaxshi taklif",
    "choose-plan": "Rejani tanlang",

    // Course Features
    "english-feature1": "✓ O'qish tushunchasi",
    "english-feature2": "✓ Yozish va til",
    "english-feature3": "✓ Insho tayyorlash",
    "english-feature4": "✓ 20 ta amaliy test",
    "full-feature1": "✓ To'liq SAT tayyorlash",
    "full-feature2": "✓ Matematika va ingliz tili bo'limlari",
    "full-feature3": "✓ 50+ amaliy test",
    "full-feature4": "✓ Shaxsiy repetitor yordami",
    "full-feature5": "✓ Natija kafolati",
    "ultimate-feature1": "✓ To'liq SAT dagi hamma narsa",
    "ultimate-feature2": "✓ Universitetga kirish yo'l-yo'riqlari",
    "ultimate-feature3": "✓ Insho ko'rib chiqish va tahrirlash",
    "ultimate-feature4": "✓ Suhbatga tayyorgarlik",
    "ultimate-feature5": "✓ Stipendiya yordami",
    "ultimate-feature6": "✓ 1-ga-1 maslahat",

    // FAQ Section
    "faq-title": "Tez-tez beriladigan savollar",
    "faq-q1": "Kurs qancha davom etadi?",
    "faq-a1":
      "Bizning kurslarimiz odatda 12-16 hafta davom etadi, sizning ehtiyojlaringizga mos moslashuvchan jadval bilan.",
    "faq-q2": "Sizning muvaffaqiyat darajangiz qanday?",
    "faq-a2": "Talabalarimizning 95% SAT natijalarini o'rtacha 200+ ball yaxshilaydi.",
    "faq-q3": "Onlayn darslar taklif qilasizmi?",
    "faq-a3": "Ha, biz bir xil sifatli ta'lim bilan yuzma-yuz va onlayn darslarni taklif qilamiz.",
    "faq-q4": "Qanday materiallar kiritilgan?",
    "faq-a4": "Barcha o'quv materiallari, amaliy testlar va raqamli resurslar kurs narxiga kiritilgan.",
    "faq-q5": "Pulni qaytarib olish mumkinmi?",
    "faq-a5": "Agar dasturimizdan qoniqmasangiz, 30 kunlik pul qaytarish kafolatini taklif qilamiz.",
    "faq-q6": "Kollej arizalari bilan yordam berasizmi?",
    "faq-a6":
      "Bizning premium kurslarimiz kollej qabuli bo'yicha keng qamrovli yo'l-yo'riq va ariza yordamini o'z ichiga oladi.",

    // Collaborators Section
    "collaborators-title": "Bizning universitet hamkorlarimiz",

    // Contact Section
    "contact-title": "Biz bilan bog'laning",
    email: "Elektron pochta:",
    phone: "Telefon:",
    address: "Manzil:",
    "send-message": "Xabar yuborish",
    "name-placeholder": "Ismingiz",
    "email-placeholder": "Elektron pochtangiz",
    "message-placeholder": "Xabaringiz",
    "phone-placeholder": "Telefon raqamingiz",

    // Footer
    rights: "Barcha huquqlar himoyalangan.",
    privacy: "Maxfiylik siyosati",
    terms: "Foydalanish shartlari",
    support: "Yordam",
    "footer-description":
      "Talabalarga ajoyib SATga tayyorgarlik va universitetga kirish bo'yicha ko'rsatmalar orqali o'z orzulariga erishish uchun imkoniyat yaratish.",
    "footer-courses": "Kurslar",
    "footer-sat-english": "SAT ingliz tili",
    "footer-sat-math": "SAT matematika",
    "footer-full-sat": "To'liq SATga tayyorgarlik",
    "footer-admission": "Qabul bo'yicha ko'rsatmalar",
    "footer-company": "Kompaniya",
    "footer-about": "Biz haqimizda",
    "footer-teachers-link": "Bizning o'qituvchilar",
    "footer-success": "Muvaffaqiyat hikoyalari",
    "footer-blog": "Blog",
    "footer-contact-info": "Aloqa ma'lumotlari",
    hours: "Ish vaqti",
    sitemap: "Sayt xaritasi",
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

// FAQ functionality
function toggleFAQ(element) {
  const faqItem = element.parentElement
  const isActive = faqItem.classList.contains("active")

  // Close all FAQ items
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("active")
  })

  // Open clicked item if it wasn't active
  if (!isActive) {
    faqItem.classList.add("active")
  }
}

// Carousel functionality
let currentSlideIndex = 0
const slides = document.querySelectorAll(".teacher-card")
const dots = document.querySelectorAll(".dot")

function currentSlide(n) {
  showSlide((currentSlideIndex = n - 1))
}

function showSlide(n) {
  if (n >= slides.length) currentSlideIndex = 0
  if (n < 0) currentSlideIndex = slides.length - 1

  // Update dots
  dots.forEach((dot) => dot.classList.remove("active"))
  if (dots[currentSlideIndex]) {
    dots[currentSlideIndex].classList.add("active")
  }
}

// Auto-advance carousel
function autoSlide() {
  currentSlideIndex++
  if (currentSlideIndex >= slides.length) currentSlideIndex = 0
  showSlide(currentSlideIndex)
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
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
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]')
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
      }
    })
  })
}

// Form submission
function handleFormSubmission() {
  const form = document.querySelector(".contact-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(form)
    const name = form.querySelector('input[type="text"]').value
    const email = form.querySelector('input[type="email"]').value
    const message = form.querySelector("textarea").value

    // Simple validation
    if (name && email && message) {
      alert("Thank you for your message! We will get back to you soon.")
      form.reset()
    } else {
      alert("Please fill in all fields.")
    }
  })
}

// Staggered animation for course cards
function staggerAnimations() {
  const courseCards = document.querySelectorAll(".course-card")
  const faqItems = document.querySelectorAll(".faq-item")

  courseCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`
  })

  faqItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`
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

  // Update language display for mobile
  const currentLangBtnMobile = document.getElementById("current-lang-mobile")
  const langMap = {
    en: "🇺🇸 EN",
    ru: "🇷🇺 RU",
    uz: "🇺🇿 UZ",
  }
  if (currentLangBtnMobile) currentLangBtnMobile.textContent = langMap[savedLanguage]

  // Initialize animations
  const animatedElements = document.querySelectorAll(".animate-left, .animate-right, .animate-up")
  animatedElements.forEach((el) => observer.observe(el))

  // Initialize other functionality
  smoothScroll()
  handleFormSubmission()
  staggerAnimations()

  // Start carousel auto-advance
  setInterval(autoSlide, 4000)

  // Trigger initial animations for hero section
  setTimeout(() => {
    document.querySelector(".animate-left").classList.add("visible")
    document.querySelector(".animate-right").classList.add("visible")
  }, 500)
})

// Navbar scroll effect
// window.addEventListener("scroll", () => {
//   const navbar = document.querySelector(".navbar")
//   if (window.scrollY > 100) {
//     navbar.style.background = "rgba(255, 255, 255, 0.98)"
//     navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
//   } else {
//     navbar.style.background = "rgba(255, 255, 255, 0.95)"
//     navbar.style.boxShadow = "none"
//   }
// })

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.5s ease-in-out"

  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)
})
