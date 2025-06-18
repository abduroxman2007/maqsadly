
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
    courses: "Courses",
    teachers: "Teachers",
    contact: "Contact",
    faq: "FAQ",

    // Hero Section
    "hero-title":
      "<span class='hero-accent'>Achieve</span> Your Dream SAT Score & Get Into <span class='hero-accent'>Top</span> Universities",
    "hero-subtitle":
      "Join thousands of students who have successfully improved their SAT scores and gained admission to top universities worldwide with our proven methodology.",
    "start-now": "Start Now",
    "watch-how": "Watch How It Works",
    "trust-badge": "5,000+ students trained • 95% success rate",

    // Mission Section
    "mission-title": "Our Mission",
    "mission-description":
      "SAT and university admissions are undergoing a revolution in Uzbekistan. As top universities make SAT scores mandatory, our mission is to empower every ambitious student with the tools, guidance, and confidence to succeed. We believe that access to world-class education should be open to all, and we are here to help you unlock your potential and achieve your dreams.",

    // Why We Are Different Section
    "why-different-title": "Why We Are Different",
    "why-card1-title": "Personalized SAT Coaching",
    "why-card1-desc": "Every student gets a tailored study plan and 1-on-1 support to maximize their score.",
    "why-card2-title": "Proven Results",
    "why-card2-desc": "95% of our students improve their SAT scores and gain admission to top universities.",
    "why-card3-title": "Global University Network",
    "why-card3-desc": "We connect you with leading universities and scholarship opportunities worldwide.",
    "why-card4-title": "Cutting-Edge Resources",
    "why-card4-desc": "Access the latest SAT materials, practice tests, and expert strategies for exam success.",

    // Problems We Solve Section
    "problems-title": "What Problems Do We Solve?",
    "problems-subtitle": "We address the key challenges students face in their journey to top universities",
    "student-problem": "Student Problem",
    "our-solution": "Our Solution",
    "problem1-question": "I don't know how to prepare for SAT effectively",
    "problem1-answer":
      "We provide structured, personalized SAT preparation with proven methodologies and expert guidance.",
    "problem2-question": "I'm confused about university selection and application process",
    "problem2-answer":
      "Our comprehensive admission guidance helps you choose the right universities and navigate the application process.",
    "problem3-question": "I need help with scholarship applications",
    "problem3-answer":
      "We assist with scholarship applications and help maximize your chances of receiving financial aid.",
    "problem4-question": "My extracurriculars feel weak for top US universities.",
    "problem4-answer":
      "We offer holistic profile building, guiding you on impactful extracurricular activities and leadership roles.",

    // Process Section
    "process-title": "Our Step-by-Step Process to University Admissions",
    "process-subtitle": "Our Proven Path to Your Success",

    // What You Will Learn Section
    "learn-title": "What will you learn after completing this course?",
    "learn-subtitle": "Here's what you'll master after completing our comprehensive course:",
    learn1: "How to choose the right university for your future",
    learn2: "How to prepare independently for IELTS and SAT",
    learn3: "How to calculate GPA - School grades correctly",
    learn4: "How to start building your portfolio",
    learn5: "How to work with top data platforms",
    learn6: "How to write essays and recommendations that admissions committees want to read",
    learn7: "How to successfully pass interviews",
    learn8: "How to properly apply to American universities",
    learn9: "How to create a proper CSS profile",

    // To Whom These Courses Are Section
    "about-title": "To Whom These Courses Are",
    "about-subtitle": "Discover if our courses are right for you",
    "about-description":
      "Maqsadly is dedicated to helping students achieve their academic goals through comprehensive SAT preparation. Our proven methodology combines expert instruction, personalized attention, and cutting-edge resources to ensure your success.",
    "who-for-title": "Who is this course for?",
    "for-item1": "High school students preparing for college admissions",
    "for-item2": "Students aiming for top universities",
    "for-item3": "Those seeking to improve their SAT scores",
    "for-item4": "International students applying to US universities",
    "get-started": "Get Started Today",
    "name-placeholder": "Your Name",
    "phone-placeholder": "Phone Number",
    "start-journey": "Start Your Journey",

    // Teachers Section
    "teachers-title": "Meet Our Expert Teachers",
    "teacher1-name": "Dr. Sarah Johnson",
    "teacher1-title": "SAT Math Expert",
    "teacher1-description":
      "With over 15 years of experience in SAT preparation, Dr. Johnson has helped thousands of students achieve their target math scores. She holds a PhD in Mathematics from MIT and specializes in making complex concepts simple and understandable.",
    "teacher1-achievement1": "✓ 15+ Years Experience",
    "teacher1-achievement2": "✓ PhD Mathematics MIT",
    "teacher1-achievement3": "✓ 3000+ Students Taught",

    "teacher2-name": "Prof. Michael Chen",
    "teacher2-title": "English & Writing Specialist",
    "teacher2-description":
      "Professor Chen brings a wealth of knowledge in English literature and writing. His innovative teaching methods have consistently helped students improve their reading comprehension and essay writing skills for the SAT.",
    "teacher2-achievement1": "✓ Harvard Graduate",
    "teacher2-achievement2": "✓ Published Author",
    "teacher2-achievement3": "✓ 12+ Years Teaching",

    "teacher3-name": "Dr. Emily Rodriguez",
    "teacher3-title": "College Admission Counselor",
    "teacher3-description":
      "Dr. Rodriguez specializes in college admissions and has guided hundreds of students through the complex process of university applications. Her expertise extends to scholarship applications and interview preparation.",
    "teacher3-achievement1": "✓ Former Admissions Officer",
    "teacher3-achievement2": "✓ 500+ Successful Applications",
    "teacher3-achievement3": "✓ Scholarship Expert",

    "teacher4-name": "James Wilson",
    "teacher4-title": "SAT Strategy Coach",
    "teacher4-description":
      "James focuses on test-taking strategies and time management techniques. His systematic approach to SAT preparation has helped students maximize their potential and achieve significant score improvements.",
    "teacher4-achievement1": "✓ Perfect SAT Scorer",
    "teacher4-achievement2": "✓ Strategy Specialist",
    "teacher4-achievement3": "✓ 8+ Years Coaching",

    // Courses Section
    "courses-title": "Choose Your Perfect Course",
    "course-english": "SAT English Course",
    "course-full": "Full SAT Course",
    "course-ultimate": "Full SAT + Admission Course",
    popular: "Most Popular",
    "best-value": "Best Value",
    "english-feature1": "✓ Reading comprehension",
    "english-feature2": "✓ Writing & Language",
    "english-feature3": "✓ Essay preparation",
    "english-feature4": "✓ 20 practice tests",
    "full-feature1": "✓ Complete SAT preparation",
    "full-feature2": "✓ Math & English sections",
    "full-feature3": "✓ 50+ practice tests",
    "full-feature4": "✓ Personal tutor support",
    "full-feature5": "✓ Score guarantee",
    "choose-plan": "Choose Plan",

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

    // Contact Section
    "contact-title": "Get In Touch",
    email: "Email:",
    phone: "Phone:",
    "send-message": "Send Message",

    // Footer
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
    hours: "Hours:",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    support: "Support",
    sitemap: "Sitemap",

    // Timeline Section
    "timeline1-title": "Initial Assessment & Planning",
    "timeline1-desc":
      "We begin with a comprehensive assessment of your current academic standing, goals, and timeline. Our expert counselors will create a personalized roadmap for your university admission journey, taking into account your target universities and desired programs.",
    "timeline2-title": "SAT Preparation & Skill Development",
    "timeline2-desc":
      "Our experienced instructors will guide you through comprehensive SAT preparation, focusing on both content mastery and test-taking strategies. You'll receive personalized attention and regular progress assessments to ensure continuous improvement.",
    "timeline3-title": "Application Strategy & Documentation",
    "timeline3-desc":
      "We'll help you craft compelling application materials, including essays, recommendation letters, and activity lists. Our team will ensure your application stands out and effectively communicates your unique strengths and achievements.",
    "timeline4-title": "Interview Preparation & Final Steps",
    "timeline4-desc":
      "As you approach the final stages, we'll prepare you for university interviews and help you navigate the decision-making process. Our support continues until you receive your acceptance letters and make your final university choice.",

    // Collaborators Section
    "collaborators-title": "Our University Partners",
  },

  ru: {
    // Navigation
    home: "Главная",
    about: "О нас",
    courses: "Курсы",
    teachers: "Преподаватели",
    contact: "Контакты",
    faq: "FAQ",

    // Hero Section
    "hero-title":
      "<span class='hero-accent'>Достигните</span> своей мечты по SAT и поступи в <span class='hero-accent'>лучшие</span> университеты",
    "hero-subtitle":
      "Присоединяйтесь к тысячам студентов, которые успешно улучшили свои результаты SAT и поступили в ведущие университеты мира благодаря нашей проверенной методологии.",
    "start-now": "Начать сейчас",
    "watch-how": "Посмотреть как это работает",
    "trust-badge": "5000+ обученных студентов • 95% успешных результатов",

    // Mission Section
    "mission-title": "Наша Миссия",
    "mission-description":
      "В Узбекистане происходит революция в области SAT и поступления в университеты. Поскольку ведущие университеты делают результаты SAT обязательными, наша миссия - дать каждому амбициозному студенту инструменты, руководство и уверенность для успеха. Мы верим, что доступ к образованию мирового класса должен быть открыт для всех, и мы здесь, чтобы помочь вам раскрыть свой потенциал и достичь своих целей.",

    // Why We Are Different Section
    "why-different-title": "Почему Мы Другие",
    "why-card1-title": "Персонализированная подготовка к SAT",
    "why-card1-desc":
      "Каждый студент получает индивидуальный план обучения и поддержку один на один для максимального результата.",
    "why-card2-title": "Доказанные Результаты",
    "why-card2-desc": "95% наших студентов улучшают свои результаты SAT и поступают в ведущие университеты.",
    "why-card3-title": "Глобальная Сеть Университетов",
    "why-card3-desc": "Мы связываем вас с ведущими университетами и возможностями получения стипендий по всему миру.",
    "why-card4-title": "Современные Ресурсы",
    "why-card4-desc":
      "Доступ к последним материалам SAT, практическим тестам и экспертным стратегиям для успешной сдачи экзамена.",

    // Problems We Solve Section
    "problems-title": "Какие Проблемы Мы Решаем?",
    "problems-subtitle":
      "Мы решаем ключевые проблемы, с которыми сталкиваются студенты на пути к ведущим университетам",
    "student-problem": "Проблема Студента",
    "our-solution": "Наше Решение",
    "problem1-question": "Я не знаю, как эффективно подготовиться к SAT",
    "problem1-answer":
      "Мы предоставляем структурированную, персонализированную подготовку к SAT с проверенными методиками и экспертным руководством.",
    "problem2-question": "Я запутался в выборе университета и процессе подачи заявки",
    "problem2-answer":
      "Наше комплексное руководство по поступлению помогает выбрать правильные университеты и ориентироваться в процессе подачи заявки.",
    "problem3-question": "Мне нужна помощь с заявками на стипендии",
    "problem3-answer": "Мы помогаем с заявками на стипендии и максимизируем ваши шансы на получение финансовой помощи.",
    "problem4-question": "Мои внеклассные занятия кажутся слабыми для лучших университетов США.",
    "problem4-answer":
      "Мы предлагаем целостное формирование профиля, направляя вас по значимым внеклассным мероприятиям и лидерским ролям.",

    // Process Section
    "process-title": "Наш Пошаговый Процесс Поступления в Университет",
    "process-subtitle": "Наш Проверенный Путь к Вашему Успеху",

    // What You Will Learn Section
    "learn-title": "Чему вы научитесь после прохождения этого курса?",
    "learn-subtitle": "Вот что вы освоите после прохождения нашего комплексного курса:",
    learn1: "Как выбрать правильный университет для вашего будущего",
    learn2: "Как самостоятельно подготовиться к IELTS и SAT",
    learn3: "Как правильно рассчитать GPA - школьные оценки",
    learn4: "Как начать создавать свое портфолио",
    learn5: "Как работать с ведущими платформами данных",
    learn6: "Как писать эссе и рекомендации, которые хотят читать приемные комиссии",
    learn7: "Как успешно пройти собеседования",
    learn8: "Как правильно подать заявку в американские университеты",
    learn9: "Как создать правильный CSS профиль",

    // To Whom These Courses Are Section
    "about-title": "Для кого эти курсы",
    "about-subtitle": "Узнайте, подходят ли наши курсы вам",
    "about-description":
      "Maqsadly посвящен помощи студентам в достижении их академических целей через комплексную подготовку к SAT. Наша проверенная методология сочетает экспертное обучение, индивидуальное внимание и современные ресурсы для обеспечения вашего успеха.",
    "who-for-title": "Для Кого Эти Курсы?",
    "for-item1": "Старшеклассники, готовящиеся к поступлению в колледж",
    "for-item2": "Студенты, стремящиеся в ведущие университеты",
    "for-item3": "Те, кто хочет улучшить свои результаты SAT",
    "for-item4": "Международные студенты, подающие заявки в американские университеты",
    "get-started": "Начните Сегодня",
    "name-placeholder": "Ваше Имя",
    "phone-placeholder": "Номер Телефона",
    "start-journey": "Начните Свой Путь",

    // Teachers Section
    "teachers-title": "Познакомьтесь с нашими экспертами",
    "teacher1-name": "Доктор Сара Джонсон",
    "teacher1-title": "Эксперт по математике SAT",
    "teacher1-description":
      "Имея более 15 лет опыта в подготовке к SAT, доктор Джонсон помогла тысячам студентов достичь целевых баллов по математике. Она имеет докторскую степень по математике в MIT и специализируется на том, чтобы сделать сложные концепции простыми и понятными.",
    "teacher1-achievement1": "✓ 15+ лет опыта",
    "teacher1-achievement2": "✓ Доктор математики MIT",
    "teacher1-achievement3": "✓ Более 3000 обученных студентов",

    "teacher2-name": "Профессор Майкл Чен",
    "teacher2-title": "Специалист по английскому языку и письму",
    "teacher2-description":
      "Профессор Чен обладает обширными знаниями в области английской литературы и письма. Его инновационные методы преподавания постоянно помогают студентам улучшать навыки понимания прочитанного и написания эссе для SAT.",
    "teacher2-achievement1": "✓ Выпускник Гарварда",
    "teacher2-achievement2": "✓ Опубликованный автор",
    "teacher2-achievement3": "✓ 12+ лет преподавания",

    "teacher3-name": "Доктор Эмили Родригес",
    "teacher3-title": "Консультант по поступлению в колледж",
    "teacher3-description":
      "Доктор Родригес специализируется на поступлении в колледжи и помогла сотням студентов пройти сложный процесс подачи заявок в университеты. Ее опыт распространяется на заявки на стипендии и подготовку к собеседованиям.",
    "teacher3-achievement1": "✓ Бывший сотрудник приемной комиссии",
    "teacher3-achievement2": "✓ 500+ успешных заявок",
    "teacher3-achievement3": "✓ Эксперт по стипендиям",

    "teacher4-name": "Джеймс Уилсон",
    "teacher4-title": "Тренер по стратегии SAT",
    "teacher4-description":
      "Джеймс фокусируется на стратегиях сдачи тестов и методах управления временем. Его систематический подход к подготовке к SAT помог студентам максимально раскрыть свой потенциал и достичь значительного улучшения результатов.",
    "teacher4-achievement1": "✓ Идеальный балл SAT",
    "teacher4-achievement2": "✓ Специалист по стратегиям",
    "teacher4-achievement3": "✓ 8+ лет коучинга",

    // Courses Section
    "courses-title": "Выберите свой идеальный курс",
    "course-english": "Курс английского языка SAT",
    "course-full": "Полный курс SAT",
    "course-ultimate": "Полный курс SAT + Поступление",
    popular: "Самый популярный",
    "best-value": "Лучшая ценность",
    "english-feature1": "✓ Понимание прочитанного",
    "english-feature2": "✓ Письмо и язык",
    "english-feature3": "✓ Подготовка к эссе",
    "english-feature4": "✓ 20 практических тестов",
    "full-feature1": "✓ Полная подготовка к SAT",
    "full-feature2": "✓ Разделы математики и английского",
    "full-feature3": "✓ 50+ практических тестов",
    "full-feature4": "✓ Поддержка личного преподавателя",
    "full-feature5": "✓ Гарантия результата",
    "choose-plan": "Выбрать План",

    // FAQ Section
    "faq-title": "Часто Задаваемые Вопросы",
    "faq-q1": "Сколько длится курс?",
    "faq-a1":
      "Наши курсы обычно длятся 12-16 недель, с гибкими вариантами расписания, которые подходят вашим потребностям.",
    "faq-q2": "Какой у вас процент успеха?",
    "faq-a2": "95% наших студентов улучшают свои результаты SAT в среднем на 200+ баллов.",
    "faq-q3": "Вы предлагаете онлайн-занятия?",
    "faq-a3": "Да, мы предлагаем как очные, так и онлайн-занятия с одинаковым качеством обучения.",
    "faq-q4": "Какие материалы включены?",
    "faq-a4": "Все учебные материалы, практические тесты и цифровые ресурсы включены в стоимость курса.",
    "faq-q5": "Могу ли я получить возврат средств?",
    "faq-a5": "Мы предлагаем 30-дневную гарантию возврата денег, если вы не удовлетворены нашей программой.",
    "faq-q6": "Вы помогаете с поступлением в колледж?",
    "faq-a6":
      "Наши премиум-курсы включают комплексное руководство по поступлению в колледж и поддержку при подаче заявок.",

    // Contact Section
    "contact-title": "Свяжитесь с нами",
    email: "Email:",
    phone: "Телефон:",
    "send-message": "Отправить сообщение",

    // Footer
    "footer-description":
      "Расширяем возможности студентов для достижения их мечты посредством исключительной подготовки к SAT и руководства по поступлению в университет.",
    "footer-courses": "Курсы",
    "footer-sat-english": "SAT ingliz tili",
    "footer-sat-math": "SAT matematika",
    "footer-full-sat": "Полная подготовка к SAT",
    "footer-admission": "Qabul yo'l-yo'riq",
    "footer-company": "Компания",
    "footer-about": "О нас",
    "footer-teachers-link": "Наши преподаватели",
    "footer-success": "Истории успеха",
    "footer-blog": "Блог",
    "footer-contact-info": "Контактная информация",
    hours: "Часы работы:",
    rights: "Все права защищены.",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    support: "Поддержка",
    sitemap: "Карта сайта",

    // Timeline Section
    "timeline1-title": "Начальная Оценка и Планирование",
    "timeline1-desc":
      "Мы начинаем с комплексной оценки вашего текущего академического уровня, целей и временных рамок. Наши эксперты-консультанты создадут индивидуальный план для вашего пути поступления в университет, учитывая целевые университеты и желаемые программы.",
    "timeline2-title": "Подготовка к SAT и Развитие Навыков",
    "timeline2-desc":
      "Наши опытные преподаватели проведут вас через комплексную подготовку к SAT, фокусируясь как на освоении материала, так и на стратегиях сдачи теста. Вы получите индивидуальное внимание и регулярную оценку прогресса для обеспечения постоянного улучшения.",
    "timeline3-title": "Стратегия Подачи Заявки и Документация",
    "timeline3-desc":
      "Мы поможем вам создать убедительные материалы заявки, включая эссе, рекомендательные письма и списки активностей. Наша команда обеспечит, чтобы ваша заявка выделялась и эффективно демонстрировала ваши уникальные сильные стороны и достижения.",
    "timeline4-title": "Подготовка к Собеседованиям и Финальные Шаги",
    "timeline4-desc":
      "По мере приближения к финальным этапам, мы подготовим вас к университетским собеседованиям и поможем ориентироваться в процессе принятия решений. Наша поддержка продолжается до получения писем о зачислении и выбора окончательного университета.",

    // Collaborators Section
    "collaborators-title": "Наши Университетские Партнеры",
  },

  uz: {
    // Navigation
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    courses: "Kurslar",
    teachers: "O'qituvchilar",
    contact: "Aloqa",
    faq: "FAQ",

    // Hero Section
    "hero-title":
      "<span class='hero-accent'>Orzuingizdagi</span> SAT balliga erishing va eng <span  class='hero-accent'>zor</span> universitetlarga kiring",
    "hero-subtitle":
      "Bizning isbotlangan metodologiyamiz orqali SAT ballarini muvaffaqiyatli oshirgan va dunyoning yetakchi universitetlariga qabul qilingan minglab talabalarga qo'shiling.",
    "start-now": "Hozir boshlang",
    "watch-how": "Qanday ishlashini ko'ring",
    "trust-badge": "5000+ o'qitilgan talaba • 95% muvaffaqiyat darajasi",

    // Mission Section
    "mission-title": "Bizning Maqsadimiz",
    "mission-description":
      "O'zbekistonda SAT va universitetga qabul jarayoni inqilobiy o'zgarishlarni boshdan kechirmoqda. Yetakchi universitetlar SAT ballarini majburiy qilgani sari, bizning maqsadimiz har bir ambitsiyali talabaga muvaffaqiyatga erishish uchun kerakli vositalar, yo'naltirish va ishonchni ta'minlashdir. Biz dunyo darajasidagi ta'limga kirish imkoniyati hamma uchun ochiq bo'lishi kerakligiga ishonamiz va biz sizning potensialingizni ochish va orzularingizga erishishda yordam berish uchun mavjudmiz.",

    // Why We Are Different Section
    "why-different-title": "Nima Uchun Biz Boshqacha",
    "why-card1-title": "Shaxsiy SAT tayyorgarligi",
    "why-card1-desc":
      "Har bir talaba maksimal natijaga erishish uchun individual o'qish rejasi va shaxsiy yordam oladi.",
    "why-card2-title": "Isbotlangan Natijalar",
    "why-card2-desc":
      "Bizning talabalarimizning 95% SAT ballarini oshiradi va yetakchi universitetlarga qabul qilinadi.",
    "why-card3-title": "Global Universitet Tarmog'i",
    "why-card3-desc": "Biz sizni dunyo bo'ylab yetakchi universitetlar va stipendiya imkoniyatlari bilan bog'laymiz.",
    "why-card4-title": "Zamonaviy Resurslar",
    "why-card4-desc":
      "Eng so'nggi SAT materiallari, amaliy testlar va imtihon muvaffaqiyati uchun ekspert strategiyalariga kirish.",

    // Problems We Solve Section
    "problems-title": "Qanday Muammolarni Hal Qilamiz?",
    "problems-subtitle":
      "Biz talabalar yetakchi universitetlarga yo'lida duch keladigan asosiy muammolarni hal qilamiz",
    "student-problem": "Talaba Muammosi",
    "our-solution": "Bizning Yechimimiz",
    "problem1-question": "Men SAT ga qanday samarali tayyorlanishni bilmayman",
    "problem1-answer":
      "Biz isbotlangan metodologiyalar va ekspert yo'naltirishi bilan tuzilgan, shaxsiy SAT tayyorgarligini taqdim etamiz",
    "problem2-question": "Men universitet tanlash va ariza berish jarayonida adashib qoldim",
    "problem2-answer":
      "Bizning keng qamrovli qabul yo'naltirishi to'g'ri universitetlarni tanlashda va ariza berish jarayonida yordam beradi",
    "problem3-question": "Menga stipendiya arizalari bo'yicha yordam kerak",
    "problem3-answer":
      "Biz stipendiya arizalari bo'yicha yordam beramiz va moliyaviy yordam olish imkoniyatingizni maksimal darajaga oshiramiz",
    "problem4-question":
      "Mening darsdan tashqari mashg'ulotlarim AQShning eng yaxshi universitetlari uchun zaifdek tuyuladi.",
    "problem4-answer":
      "Biz sizga ta'sirchan darsdan tashqari mashg'ulotlar va yetakchilik rollari bo'yicha yo'l-yo'riq ko'rsatib, yaxlit profil yaratishni taklif qilamiz.",

    // Process Section
    "process-title": "Muvaffaqiyatga Erishishning Bizning Isbotlangan Yo'limiz",
    "process-subtitle": "Muvaffaqiyatga Erishishning Bizning Isbotlangan Yo'limiz",

    // What You Will Learn Section
    "learn-title": "Bu kursni tamomlaganingizdan keyin nimalarni o'rganasiz?",
    "learn-subtitle": "Bizning keng qamrovli kursimizni tamomlaganingizdan keyin o'zlashtirasiz:",
    learn1: "Kelajagingiz uchun mos bo'lgan universitet tanlashni",
    learn2: "IELTS hamda SAT'ga mustaqil ravishda tayyorlanishni",
    learn3: "GPA - Maktabdagi baholarni to'g'ri hisoblash",
    learn4: "Portfolio qurishda o'zi nimadan boshlash kerakligini",
    learn5: "Ma'lumotlar qora bozori - top platformalar bilan ishlashni",
    learn6: "Komissiya a'zolari o'qishni xohlaydigan insho va tavsiyanomalar yozishni",
    learn7: "Intervyulardan muvaffaqiyatli o'tish",
    learn8: "Amerika universitetlariga to'g'ri hujjat",
    learn9: "Qanday qilib to'g'ri CSS profile",

    // To Whom These Courses Are Section
    "about-title": "Bu kurslar kim uchun",
    "about-subtitle": "Bizning kurslarimiz sizga mos kelishini bilib oling",
    "about-description":
      "Maqsadly keng qamrovli SAT tayyorgarligi orqali talabalarga akademik maqsadlariga erishishda yordam berishga bag'ishlangan. Bizning isbotlangan metodologiyamiz ekspert o'qitish, shaxsiy e'tibor va zamonaviy resurslarni birlashtiradi.",
    "who-for-title": "Bu Kurslar Kimlar Uchun?",
    "for-item1": "Kollejga qabul uchun tayyorlanayotgan o'rta maktab o'quvchilari",
    "for-item2": "Yetakchi universitetlarga intilayotgan talabalar",
    "for-item3": "SAT ballarini oshirishni xohlovchilar",
    "for-item4": "Amerika universitetlariga ariza berayotgan xalqaro talabalar",
    "get-started": "Bugundan Boshlang",
    "name-placeholder": "Ismingiz",
    "phone-placeholder": "Telefon Raqamingiz",
    "start-journey": "Safaringizni Boshlang",

    // Teachers Section
    "teachers-title": "Bizning ekspert o'qituvchilarimiz bilan tanishing",
    "teacher1-name": "Doktor Sara Jonson",
    "teacher1-title": "SAT Matematika Mutaxassisi",
    "teacher1-description":
      "SAT tayyorgarligida 15 yildan ortiq tajribaga ega bo'lgan doktor Jonson minglab o'quvchilarga matematika bo'yicha maqsadli ballarga erishishda yordam berdi. U MIT da matematika bo'yicha PhD darajasiga ega va murakkab tushunchalarni oddiy va tushunarli qilishda ixtisoslashgan.",
    "teacher1-achievement1": "✓ 15+ yillik tajriba",
    "teacher1-achievement2": "✓ MIT Matematika PhD",
    "teacher1-achievement3": "✓ 3000+ o'quvchi",

    "teacher2-name": "Professor Maykl Chen",
    "teacher2-title": "Ingliz tili va yozish mutaxassisi",
    "teacher2-description":
      "Professor Chen ingliz adabiyoti va yozish sohasida boy bilimga ega. Uning innovatsion o'qitish usullari o'quvchilarga SAT uchun o'qishni tushunish va insho yozish ko'nikmalarini yaxshilashda doimiy yordam beradi.",
    "teacher2-achievement1": "✓ Garvard bitiruvchisi",
    "teacher2-achievement2": "✓ Nashr etilgan muallif",
    "teacher2-achievement3": "✓ 12+ yillik o'qituvchilik",

    "teacher3-name": "Doktor Emili Rodriges",
    "teacher3-title": "Kollejga qabul bo'yicha maslahatchi",
    "teacher3-description":
      "Doktor Rodriges kollejga qabul bo'yicha ixtisoslashgan va yuzlab o'quvchilarga universitetlarga arizalar berishning murakkab jarayonida yo'l-yo'riq berdi. Uning tajribasi stipendiyalar uchun arizalar va suhbatlarga tayyorgarlikni o'z ichiga oladi.",
    "teacher3-achievement1": "✓ Sobiq qabul komissiyasi xodimi",
    "teacher3-achievement2": "✓ 500+ muvaffaqiyatli ariza",
    "teacher3-achievement3": "✓ Stipendiyalar bo'yicha mutaxassis",

    "teacher4-name": "Jeyms Uilson",
    "teacher4-title": "SAT strategiyasi murabbiyi",
    "teacher4-description":
      "Jeyms test topshirish strategiyalari va vaqtni boshqarish usullariga e'tibor qaratadi. Uning SAT tayyorgarligiga tizimli yondashuvi o'quvchilarga o'z potensialini maksimal darajada ochish va natijalarni sezilarli darajada yaxshilashga yordam berdi.",
    "teacher4-achievement1": "✓ Mukammal SAT balli",
    "teacher4-achievement2": "✓ Strategiya mutaxassisi",
    "teacher4-achievement3": "✓ 8+ yillik murabbiylik",

    // Courses Section
    "courses-title": "O'zingizga mos kursni tanlang",
    "course-english": "SAT ingliz tili kursi",
    "course-full": "To'liq SAT kursi",
    "course-ultimate": "To'liq SAT + Qabul kursi",
    popular: "Eng mashhur",
    "best-value": "Eng yaxshi qiymat",
    "english-feature1": "✓ O'qish tushunchasi",
    "english-feature2": "✓ Yozish va til",
    "english-feature3": "✓ Insho tayyorgarligi",
    "english-feature4": "✓ 20 amaliy test",
    "full-feature1": "✓ To'liq SAT tayyorgarligi",
    "full-feature2": "✓ Matematika va ingliz tili bo'limlari",
    "full-feature3": "✓ 50+ amaliy test",
    "full-feature4": "✓ Shaxsiy o'qituvchi yordami",
    "full-feature5": "✓ Natija kafolati",
    "choose-plan": "Rejani tanlang",

    // FAQ Section
    "faq-title": "Ko'p so'raladigan savollar",
    "faq-q1": "Kurs qancha vaqt davom etadi?",
    "faq-a1":
      "Bizning kurslarimiz odatda 12-16 hafta davom etadi, sizning ehtiyojlaringizga mos keladigan moslashuvchan jadval variantlari bilan.",
    "faq-q2": "Sizning muvaffaqiyat darajangiz qanday?",
    "faq-a2": "Bizning talabalarimizning 95% SAT natijalarini o'rtacha 200+ ballga yaxshilaydi.",
    "faq-q3": "Siz onlayn darslarni taklif qilasizmi?",
    "faq-a3": "Ha, biz bir xil sifatli o'qitish bilan ham shaxsiy, ham onlayn darslarni taklif qilamiz.",
    "faq-q4": "Qanday materiallar kiritilgan?",
    "faq-a4": "Barcha o'quv materiallari, amaliy testlar va raqamli resurslar kurs narxiga kiritilgan.",
    "faq-q5": "Pulni qaytarib olishim mumkinmi?",
    "faq-a5":
      "Agar siz bizning dasturimizdan qoniqmagan bo'lsangiz, 30 kunlik pulni qaytarish kafolatini taklif qilamiz.",
    "faq-q6": "Siz kollejga qabulda yordam berasizmi?",
    "faq-a6":
      "Bizning premium kurslarimiz keng qamrovli kollej qabul yo'l-yo'riq va ariza berish yordamini o'z ichiga oladi.",

    // Contact Section
    "contact-title": "Bog'laning",
    email: "Email:",
    phone: "Telefon:",
    "send-message": "Xabar yuborish",

    // Footer
    "footer-description":
      "Talabalarga ajoyib SAT tayyorlash va universitetga kirish bo'yicha ko'rsatmalar orqali o'z orzulariga erishish uchun imkoniyat yaratish.",
    "footer-courses": "Kurslar",
    "footer-sat-english": "SAT ingliz tili",
    "footer-sat-math": "SAT matematika",
    "footer-full-sat": "To'liq SAT tayyorgarligi",
    "footer-admission": "Qabul yo'l-yo'riq",
    "footer-company": "Kompaniya",
    "footer-about": "Biz haqimizda",
    "footer-teachers-link": "Bizning o'qituvchilar",
    "footer-success": "Muvaffaqiyat hikoyalari",
    "footer-blog": "Blog",
    "footer-contact-info": "Aloqa ma'lumotlari",
    hours: "Ish vaqti:",
    rights: "Barcha huquqlar himoyalangan.",
    privacy: "Maxfiylik siyosati",
    terms: "Foydalanish shartlari",
    support: "Yordam",
    sitemap: "Sayt xaritasi",

    // Timeline Section
    "timeline1-title": "Dastlabki Baholash va Rejalashtirish",
    "timeline1-desc":
      "Biz sizning hozirgi akademik darajangiz, maqsadlaringiz va vaqt chegaralaringizni keng qamrovli baholashdan boshlaymiz. Bizning ekspert maslahatchilarimiz sizning maqsadli universitetlaringiz va istalgan dasturlaringizni hisobga olgan holda, universitetga qabul yo'lingiz uchun shaxsiy yo'l xaritasini yaratadilar.",
    "timeline2-title": "SAT Tayyorgarligi va Ko'nikmalarni Rivojlantirish",
    "timeline2-desc":
      "Bizning tajribali o'qituvchilarimiz sizni mazmunni o'zlashtirish va test topshirish strategiyalariga e'tibor qaratgan holda keng qamrovli SAT tayyorgarligidan o'tkazadilar. Siz doimiy yaxshilanishni ta'minlash uchun shaxsiy e'tibor va muntazam progress baholashini olasiz.",
    "timeline3-title": "Ariza Strategiyasi va Hujjatlar",
    "timeline3-desc":
      "Biz sizga esselar, tavsiyanomalar va faoliyat ro'yxatlarini o'z ichiga olgan muvaffaqiyatli ariza materiallarini yaratishda yordam beramiz. Bizning jamoa sizning arizangiz ajralib turadigan va sizning noyob kuchli tomonlaringiz va yutuqlaringizni samarali ifodalaydigan qilishni ta'minlaydi.",
    "timeline4-title": "Suhbatga Tayyorgarlik va Yakuniy Qadamlar",
    "timeline4-desc":
      "Yakuniy bosqichlarga yaqinlashganda, biz sizni universitet suhbatlariga tayyorlaymiz va qaror qabul qilish jarayonida yordam beramiz. Bizning qo'llab-quvvatlashimiz qabul xatlaringizni olishguncha va yakuniy universitet tanlovingizgacha davom etadi.",

    // Collaborators Section
    "collaborators-title": "Bizning Universitet Hamkorlarimiz",
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
      const value = translations[currentLanguage][key]
      if (value.includes("<span") || value.includes("<br") || value.includes("<strong") || value.includes("<em")) {
        element.innerHTML = value
      } else {
        element.textContent = value
      }
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

// Timeline animations
function setupTimelineAnimations() {
  const timeline = document.querySelector(".timeline")
  const timelineItems = document.querySelectorAll(".timeline-item")
  const timelineLine = document.querySelector(".timeline::after")

  // Create intersection observer for timeline items
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")

          // Calculate and set the line height
          const timelineRect = timeline.getBoundingClientRect()
          const itemRect = entry.target.getBoundingClientRect()
          const progress = (itemRect.top - timelineRect.top) / timelineRect.height
          const lineHeight = Math.max(0, Math.min(100, progress * 100))

          timeline.style.setProperty("--line-height", `${lineHeight}%`)
        }
      })
    },
    {
      threshold: 0.5,
      rootMargin: "-50px",
    },
  )

  // Observe each timeline item
  timelineItems.forEach((item) => {
    observer.observe(item)
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

  // Initialize other functionality
  smoothScroll()
  handleFormSubmission()
  setupTeacherAnimations()
  setupTimelineAnimations()

  // Initialize additional animations
  initializeAdditionalAnimations()
})

// Add scroll to FAQ function
function scrollToFAQ() {
  const faqSection = document.querySelector(".faq")
  if (faqSection) {
    faqSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Add this after the existing DOMContentLoaded event listener

// Initialize footer and other missing animations
function initializeAdditionalAnimations() {
  // Footer animation observer
  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  // FAQ items animation observer
  const faqObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    },
    {
      threshold: 0.3,
      rootMargin: "-20px",
    },
  )

  // Observe footer
  const footer = document.querySelector(".footer")
  if (footer) {
    footerObserver.observe(footer)
  }

  // Observe FAQ items
  const faqItems = document.querySelectorAll(".faq-item")
  faqItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`
    faqObserver.observe(item)
  })

  // Add scroll-triggered animations for sections without data-animate
  const sectionsToAnimate = document.querySelectorAll(".collaborators, .mission-section, .process-timeline-section")
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in", "visible")
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: "-50px",
    },
  )

  sectionsToAnimate.forEach((section) => {
    section.classList.add("animate-fade-in")
    sectionObserver.observe(section)
  })
}

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

  if (mobileMenu.classList.contains("active") && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    closeMobileMenu()
  }
})

function toggleFAQ(element) {
  const faqItem = element.closest(".faq-item")
  const allFaqs = document.querySelectorAll(".faq-item")
  allFaqs.forEach((item) => {
    if (item !== faqItem) item.classList.remove("active")
  })
  faqItem.classList.toggle("active")
}

function toggleLanguageDropdownMobile() {
  const dropdown = document.querySelector(".mobile-controls .language-dropdown")
  dropdown.classList.toggle("active")
  // Close dropdown when clicking outside
  document.addEventListener("click", function closeDropdown(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active")
      document.removeEventListener("click", closeDropdown)
    }
  })
}

// === General Animation System for Section Animations ===
// function isElementInViewport(el) {
//   const rect = el.getBoundingClientRect();
//   return (
//     rect.top < window.innerHeight &&
//     rect.bottom > 0 &&
//     rect.left < window.innerWidth &&
//     rect.right > 0
//   );
// }
