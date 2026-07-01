/* ============================================================
   AREFAK CONFERENCE - main.js
   جامعة الرفاق - مؤتمر العمارة والإعمار في ليبيا
   ============================================================ */

'use strict';

/* ===== TRANSLATIONS ===== */
const translations = {
  ar: {
    // Navbar
    navHome: 'الرئيسية',
    navAbout: 'عن المؤتمر',
    navThemes: 'المحاور',
    navGuidelines: 'شروط المشاركة',
    navDates: 'المواعيد',
    navContact: 'التواصل',
    langBtn: 'English',

    // Hero
    heroTitle: 'العمارة والإعمار في ليبيا',
    heroSubtitle: 'الواقع والتحديات وآفاق المستقبل',
    heroDesc: 'منصة علمية ومهنية رائدة تجمع نخبة من الأكاديميين والخبراء والمعماريين لمناقشة قضايا العمارة والإعمار',
    btnThemes: 'اطلع على المحاور',
    btnContact: 'شارك معنا',

    // Countdown
    countdownTitle: 'الوقت المتبقي حتى انتهاء استقبال الأبحاث',
    cdDaysLabel: 'يوم',
    cdHoursLabel: 'ساعة',
    cdMinutesLabel: 'دقيقة',
    cdSecondsLabel: 'ثانية',
    countdownExpired: 'انتهى موعد استقبال الأبحاث',

    // About
    aboutTitle: 'عن المؤتمر',
    aboutIntro: 'تُعلن جامعة الرفاق للعلوم التطبيقية والإنسانية عن إقامة مؤتمر علمي متخصص بعنوان "العمارة والإعمار في ليبيا - الواقع والتحديات وآفاق المستقبل"',
    aboutBody: 'يأتي مؤتمر "العمارة والإعمار في ليبيا: الواقع والتحديات وآفاق المستقبل" في إطار الحاجة الملحّة لإعادة التفكير في واقع البيئة العمرانية في ليبيا، ويهدف إلى توفير منصة علمية ومهنية تجمع نخبة من الأكاديميين والخبراء والمهندسين والمعماريين وصنّاع القرار، لمناقشة قضايا العمارة والإعمار من مختلف جوانبها.',
    visionTitle: 'الرؤية',
    visionText: 'منصة علمية ومهنية رائدة محلياً وإقليمياً، تستشرف مستقبل العمارة والإعمار في ليبيا، وتلهم الأجيال مفاهيم مبتكرة ومستدامة تدعم بناء المدن الليبية بما يراعي الهوية المحلية.',
    missionTitle: 'الرسالة',
    missionText: 'جمع الخبراء والباحثين والمهندسين والمعماريين وصنّاع القرار محلياً ودولياً، لقراءة واقع الإعمار في ليبيا وتحليل تحدياته، وتبادل الخبرات، وتقديم حلول عملية تسهم في جودة البيئة العمرانية وتدعم مسيرة الاستدامة والتنمية الشاملة.',
    pubNoteText: 'علماً بأنه سيتم نشر الورقات المقبولة بالمؤتمر بمجلة الرفاق للمعرفة، المصنّفة ضمن المجلات العلمية المعترف بها بوزارة التعليم العالي والبحث العلمي مجاناً.',
    statMahwar: 'محاور علمية',
    statYear: 'عام المؤتمر',
    statLocation: 'مكان الانعقاد',

    // Goals
    goalsTitle: 'أهداف المؤتمر',
    goal1Title: 'تبادل المعرفة',
    goal1Desc: 'استقطاب الباحثين والأكاديميين والمختصين لتبادل الخبرات والمعرفة في مجال العمارة والإعمار',
    goal2Title: 'رصد الواقع',
    goal2Desc: 'رصد وتحليل الواقع الراهن لقطاع العمارة والإعمار في ليبيا وتشخيص التحديات التي يواجهها',
    goal3Title: 'الحلول العلمية',
    goal3Desc: 'تقديم الحلول العلمية والعملية للتحديات التي تواجه قطاع العمارة والإعمار في ليبيا',
    goal4Title: 'بناء الشراكات',
    goal4Desc: 'تعزيز التعاون بين الجامعات ومراكز البحث والمؤسسات الحكومية والقطاع الخاص',
    goal5Title: 'التوثيق العلمي',
    goal5Desc: 'نشر الأبحاث والدراسات العلمية المقدمة في المؤتمر في مجلات علمية محكمة',
    goal6Title: 'صون التراث',
    goal6Desc: 'الحفاظ على الهوية المعمارية والتراث العمراني الليبي وتوظيفه في مشاريع الإعمار الحديثة',

    // Themes
    themesTitle: 'محاور المؤتمر',
    themesDesc: 'يتناول المؤتمر ستة محاور علمية رئيسية تغطي جوانب العمارة والإعمار في ليبيا',
    theme1: 'واقع التخطيط العمراني في ليبيا والتشريعات المنظمة له',
    theme2: 'تحديات إعادة الإعمار في المدن والمناطق المتضررة',
    theme3: 'العمارة المستدامة والتقنيات الحديثة في البناء',
    theme4: 'الحفاظ على الهوية المعمارية والتراث العمراني',
    theme5: 'دور الجامعات ومراكز البحث في دعم مشاريع الإعمار',
    theme6: 'تطوير المناطق العشوائية في ليبيا بين قصور التخطيط وفرص إعادة الهيكلة العمرانية',

    // Audience
    audienceTitle: 'الجهات المدعوة للمؤتمر',
    aud1: 'الأكاديميون والباحثون من ذوي التخصص',
    aud2: 'الجامعات والمعاهد العليا والكليات التقنية والمراكز البحثية',
    aud3: 'طلبة الدراسات العليا',
    aud4: 'السلطات التشريعية والتنفيذية',
    aud5: 'القطاع الخاص والشركاء المعنيون بالابتكار ونقل المعرفة',

    // Guidelines
    guidelinesTitle: 'شروط قبول الورقات',
    guide1: 'تُقبل الأوراق البحثية باللغتين العربية والإنجليزية',
    guide2: 'تُكتب باستخدام Microsoft Word فقط بصيغة (DOC/DOCX)',
    guide3: 'يتراوح حجم البحث بين 8-15 صفحة شاملةً المراجع والجداول',
    guide4: 'يتضمن البحث: عنوان، ملخص (لا يزيد عن 200 كلمة)، كلمات مفتاحية، مقدمة، منهجية، نتائج، خاتمة، مراجع',
    guide5: 'الالتزام بأسلوب إدراج المراجع العلمي المعتمد (APA)',
    guide6: 'يُشترط أن يكون البحث أصيلاً وغير منشور سابقاً',
    guide7: 'تُرسل الأوراق عبر البريد الإلكتروني للمؤتمر مع تحديد محور المشاركة في عنوان الرسالة',
    guide8: 'تخضع جميع المشاركات للتحكيم العلمي',
    formatTitle: 'تنسيق الورقة البحثية',
    fLabel1: 'الخط العربي',
    fLabel2: 'الخط الإنجليزي',
    fLabel3: 'تباعد الأسطر',
    fLabel4: 'حجم الصفحة',
    fLabel5: 'الهوامش',
    fLabel6: 'الصيغة',

    // Dates
    datesTitle: 'المواعيد المهمة',
    date1: '1 مايو - 14 مايو 2026',
    event1: 'بداية استلام المشاركات (المستخلصات)',
    date2: '14 مايو 2026',
    event2: 'آخر موعد لاستلام المستخلصات',
    date3: '16 - 17 مايو 2026',
    event3: 'إعلان نتائج القبول',
    date4: '15 يونيو 2026',
    event4: 'آخر موعد لاستلام الأوراق كاملة',
    date5: '15 - 25 يونيو 2026',
    event5: 'تقييم الأوراق البحثية',
    date6: '30 يونيو 2026',
    event6: 'آخر موعد لاستلام التعديلات المطلوبة من اللجنة العلمية',
    date7: '13 يوليو 2026',
    event7: 'إرسال العرض التقديمي',
    date8: '27 يوليو 2026',
    event8: 'موعد انعقاد المؤتمر - طرابلس، ليبيا',

    // Contact
    contactTitle: 'التواصل',
    contactUnivName: 'جامعة الرفاق للعلوم التطبيقية والإنسانية',
    contactTagline: 'التميز والنزاهة والشفافية',
    contactPhoneLabel: 'هاتف التواصل',
    contactEmailLabel: 'البريد الإلكتروني',
    contactAddrLabel: 'العنوان',
    contactAddr: 'طرابلس - شارع الجمهورية',
    socialTitle: 'تابعونا على منصات التواصل الاجتماعي',
    socialWebsite: 'الموقع الرسمي',

    // Footer
    footerUniv: 'جامعة الرفاق للعلوم التطبيقية والإنسانية',
    footerTagline: 'التميز والنزاهة والشفافية',
    footerNavTitle: 'روابط سريعة',
    footerContactTitle: 'معلومات التواصل',
    footerPhone: 'الهاتف:',
    footerEmail: 'البريد:',
    footerAddr: 'العنوان:',
    footerAddrVal: 'طرابلس - شارع الجمهورية',
    footerCopyright: '© 2026 جامعة الرفاق للعلوم التطبيقية والإنسانية - جميع الحقوق محفوظة',
    fAbout: 'عن المؤتمر',
    fThemes: 'المحاور',
    fGuide: 'شروط المشاركة',
    fDates: 'المواعيد المهمة',
    fContact: 'التواصل',
    // Pages section
    pagesTitle: 'صفحات المؤتمر',
    pagesSubtitle: 'تصفح الوثائق والسياسات الرسمية للمؤتمر',
    pageCommitteeTitle: 'الجهة المنظمة',
    pageCommitteeDesc: 'تعرف على اللجان العلمية والتحضيرية وأعضاء التحكيم',
    pageReviewTitle: 'سياسة التحكيم',
    pageReviewDesc: 'معايير وإجراءات تحكيم الأوراق البحثية وضمان الجودة العلمية',
    pagePublishTitle: 'سياسة النشر',
    pagePublishDesc: 'شروط نشر الأبحاث في مجلة الرفاق للمعرفة والضوابط الأكاديمية',
  },

  en: {
    // Navbar
    navHome: 'Home',
    navAbout: 'About',
    navThemes: 'Themes',
    navGuidelines: 'Guidelines',
    navDates: 'Dates',
    navContact: 'Contact',
    langBtn: 'عربي',

    // Hero
    heroTitle: 'Architecture & Reconstruction in Libya',
    heroSubtitle: 'Reality, Challenges & Future Horizons',
    heroDesc: 'A leading scientific and professional platform bringing together academics, experts, and architects to discuss architecture and reconstruction in Libya',
    btnThemes: 'Explore Themes',
    btnContact: 'Participate',

    // Countdown
    countdownTitle: 'Time Remaining Until Abstract Submission Deadline',
    cdDaysLabel: 'Days',
    cdHoursLabel: 'Hours',
    cdMinutesLabel: 'Minutes',
    cdSecondsLabel: 'Seconds',
    countdownExpired: 'Submission deadline has passed',

    // About
    aboutTitle: 'About the Conference',
    aboutIntro: 'Al-Refak University of Applied and Human Sciences announces a specialized scientific conference titled "Architecture & Reconstruction in Libya - Reality, Challenges & Future Horizons"',
    aboutBody: 'The conference "Architecture & Reconstruction in Libya: Reality, Challenges & Future Horizons" comes in response to the urgent need to rethink the state of the built environment in Libya. It aims to provide a scientific and professional platform bringing together academics, experts, engineers, architects, and decision-makers to discuss all aspects of architecture and reconstruction.',
    visionTitle: 'Vision',
    visionText: 'A leading scientific and professional platform locally and regionally, envisioning the future of architecture and reconstruction in Libya, and inspiring generations with innovative and sustainable concepts that support building Libyan cities while preserving local identity.',
    missionTitle: 'Mission',
    missionText: 'Bringing together experts, researchers, engineers, architects, and decision-makers locally and internationally to analyze the reality of reconstruction in Libya, exchange expertise, and provide practical solutions that contribute to the quality of the urban environment and support sustainability and comprehensive development.',
    pubNoteText: 'Accepted papers will be published in Al-Refak Journal of Knowledge, classified among the scientific journals recognized by the Ministry of Higher Education and Scientific Research, free of charge.',
    statMahwar: 'Scientific Themes',
    statYear: 'Conference Year',
    statLocation: 'Venue',

    // Goals
    goalsTitle: 'Conference Objectives',
    goal1Title: 'Knowledge Exchange',
    goal1Desc: 'Bringing together researchers, academics, and specialists to exchange expertise and knowledge in architecture and reconstruction',
    goal2Title: 'Reality Assessment',
    goal2Desc: 'Monitoring and analyzing the current state of the architecture and reconstruction sector in Libya and diagnosing its challenges',
    goal3Title: 'Scientific Solutions',
    goal3Desc: 'Providing scientific and practical solutions to the challenges facing the architecture and reconstruction sector in Libya',
    goal4Title: 'Building Partnerships',
    goal4Desc: 'Strengthening cooperation between universities, research centers, government institutions, and the private sector',
    goal5Title: 'Scientific Documentation',
    goal5Desc: 'Publishing research papers presented at the conference in peer-reviewed scientific journals',
    goal6Title: 'Heritage Preservation',
    goal6Desc: 'Preserving Libyan architectural identity and urban heritage and utilizing it in modern reconstruction projects',

    // Themes
    themesTitle: 'Conference Themes',
    themesDesc: 'The conference addresses six main scientific themes covering aspects of architecture and reconstruction in Libya',
    theme1: 'Urban Planning Reality in Libya and its Regulatory Legislation',
    theme2: 'Challenges of Reconstruction in Damaged Cities and Areas',
    theme3: 'Sustainable Architecture and Modern Construction Technologies',
    theme4: 'Preserving Architectural Identity and Urban Heritage',
    theme5: 'Role of Universities and Research Centers in Supporting Reconstruction Projects',
    theme6: 'Development of Informal Settlements in Libya: Planning Deficiencies and Urban Restructuring Opportunities',

    // Audience
    audienceTitle: 'Invited Parties',
    aud1: 'Academics and researchers in relevant specializations',
    aud2: 'Universities, higher institutes, technical colleges, and research centers',
    aud3: 'Graduate students',
    aud4: 'Legislative and executive authorities',
    aud5: 'Private sector and partners concerned with innovation and knowledge transfer',

    // Guidelines
    guidelinesTitle: 'Paper Acceptance Conditions',
    guide1: 'Papers are accepted in both Arabic and English',
    guide2: 'Must be written using Microsoft Word only in DOC/DOCX format',
    guide3: 'Paper length: 8-15 pages including references and tables',
    guide4: 'Must include: title, abstract (max 200 words), keywords, introduction, methodology, results, conclusion, references',
    guide5: 'Must follow the approved APA citation style',
    guide6: 'Paper must be original and previously unpublished',
    guide7: 'Papers must be sent via email to the conference with the participation theme specified in the subject line',
    guide8: 'All submissions are subject to peer review',
    formatTitle: 'Paper Format',
    fLabel1: 'Arabic Font',
    fLabel2: 'English Font',
    fLabel3: 'Line Spacing',
    fLabel4: 'Page Size',
    fLabel5: 'Margins',
    fLabel6: 'Format',

    // Dates
    datesTitle: 'Important Dates',
    date1: 'May 1 - May 14, 2026',
    event1: 'Abstract Submission Opens',
    date2: 'May 14, 2026',
    event2: 'Abstract Submission Deadline',
    date3: 'May 16 - 17, 2026',
    event3: 'Acceptance Results Announcement',
    date4: 'June 15, 2026',
    event4: 'Full Paper Submission Deadline',
    date5: 'June 15 - 25, 2026',
    event5: 'Paper Review & Evaluation',
    date6: 'June 30, 2026',
    event6: 'Deadline for Revisions Requested by Scientific Committee',
    date7: 'July 13, 2026',
    event7: 'Presentation Submission Deadline',
    date8: 'July 27, 2026',
    event8: 'Conference Date - Tripoli, Libya',

    // Contact
    contactTitle: 'Contact Us',
    contactUnivName: 'Al-Refak University of Applied and Human Sciences',
    contactTagline: 'Excellence, Integrity & Transparency',
    contactPhoneLabel: 'Phone',
    contactEmailLabel: 'Email',
    contactAddrLabel: 'Address',
    contactAddr: 'Tripoli - Al-Jumhuriya Street',
    socialTitle: 'Follow Us on Social Media',
    socialWebsite: 'Official Website',

    // Footer
    footerUniv: 'Al-Refak University of Applied and Human Sciences',
    footerTagline: 'Excellence, Integrity & Transparency',
    footerNavTitle: 'Quick Links',
    footerContactTitle: 'Contact Information',
    footerPhone: 'Phone:',
    footerEmail: 'Email:',
    footerAddr: 'Address:',
    footerAddrVal: 'Tripoli - Al-Jumhuriya Street',
    footerCopyright: '© 2026 Al-Refak University of Applied and Human Sciences - All Rights Reserved',
    fAbout: 'About',
    fThemes: 'Themes',
    fGuide: 'Guidelines',
    fDates: 'Important Dates',
    fContact: 'Contact',
    // Pages section
    pagesTitle: 'Conference Pages',
    pagesSubtitle: 'Browse official documents and policies of the conference',
    pageCommitteeTitle: 'Organizing Committee',
    pageCommitteeDesc: 'Meet the scientific, preparatory committees and reviewers',
    pageReviewTitle: 'Review Policy',
    pageReviewDesc: 'Standards and procedures for peer review and scientific quality assurance',
    pagePublishTitle: 'Publication Policy',
    pagePublishDesc: 'Requirements for publishing research in Al-Refak Journal of Knowledge',
  }
};

/* ===== STATE ===== */
let currentLang = localStorage.getItem('arefak_lang') || 'ar';
let isDark = localStorage.getItem('arefak_dark') === 'true';

/* ===== DOM READY ===== */
document.addEventListener('DOMContentLoaded', () => {
  const pageName = (document.body && document.body.dataset.page) ? document.body.dataset.page : 'home';

  // The home page uses the general translation, theme, countdown and section tracking logic.
  // Sub pages have their own translation blocks later in this file.
  if (pageName === 'home') {
    applyTheme(isDark);
    applyLanguage(currentLang);
    initCountdown();
    initActiveNavLinks();
  }

  initNavbar();
  initScrollAnimations();
  initBackToTop();
});

/* ===== THEME TOGGLE ===== */
function applyTheme(dark) {
  const body = document.getElementById('body');
  if (dark) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  }
}

const _mainThemeToggle = document.getElementById('themeToggle');
if (_mainThemeToggle && !(document.body && document.body.dataset.page)) {
  _mainThemeToggle.addEventListener('click', () => {
    isDark = !isDark;
    localStorage.setItem('arefak_dark', isDark);
    applyTheme(isDark);
  });
}

/* ===== LANGUAGE TOGGLE ===== */
function applyLanguage(lang) {
  const html = document.documentElement;
  const t = translations[lang];

  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update all translatable elements
  const keys = Object.keys(t);
  keys.forEach(key => {
    const el = document.getElementById(key);
    if (el) el.textContent = t[key];
  });

  // Update nav links text
  const navLinksMap = {
    'nav-link-home': t.navHome,
    'nav-link-about': t.navAbout,
    'nav-link-themes': t.navThemes,
    'nav-link-guidelines': t.navGuidelines,
    'nav-link-dates': t.navDates,
    'nav-link-contact': t.navContact,
  };

  // Update lang button
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.textContent = t.langBtn;

  // Update countdown labels
  const labelsMap = {
    cdDaysLabel: t.cdDaysLabel,
    cdHoursLabel: t.cdHoursLabel,
    cdMinutesLabel: t.cdMinutesLabel,
    cdSecondsLabel: t.cdSecondsLabel,
  };
  Object.entries(labelsMap).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
}

const _mainLangToggle = document.getElementById('langToggle');
if (_mainLangToggle && !(document.body && document.body.dataset.page)) {
  _mainLangToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('arefak_lang', currentLang);
    applyLanguage(currentLang);
  });
}

/* ===== NAVBAR ===== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (!navbar || !hamburger || !navLinks) return;
  if (hamburger.dataset.navbarReady === 'true') return;
  hamburger.dataset.navbarReady = 'true';

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close menu on link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      // If it's a dropdown toggle, handle separately
      if (link.classList.contains('nav-dropdown-toggle')) {
        e.preventDefault();
        const dropdown = link.closest('.nav-dropdown');
        dropdown.classList.toggle('open');
        return;
      }
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      // Close all dropdowns
      navLinks.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
    });
  });

  // Desktop dropdown: close when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      navLinks.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
    }
  });
}

/* ===== ACTIVE NAV LINKS ===== */
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(section => observer.observe(section));
}

/* ===== COUNTDOWN TIMER ===== */
function initCountdown() {
  const countdownElements = ['countdownTitle', 'cdDays', 'cdHours', 'cdMinutes', 'cdSeconds'];
  if (!countdownElements.every(id => document.getElementById(id))) return;

  // All conference milestones in order
  const milestones = [
    { date: new Date('2026-05-14T23:59:59'), ar: 'آخر موعد لاستلام المستخلصات', en: 'Abstract Submission Deadline' },
    { date: new Date('2026-05-17T23:59:59'), ar: 'إعلان نتائج القبول', en: 'Acceptance Results Announcement' },
    { date: new Date('2026-06-15T23:59:59'), ar: 'آخر موعد لاستلام الأوراق كاملة', en: 'Full Paper Submission Deadline' },
    { date: new Date('2026-06-25T23:59:59'), ar: 'انتهاء تقييم الأوراق البحثية', en: 'End of Paper Review & Evaluation' },
    { date: new Date('2026-06-30T23:59:59'), ar: 'آخر موعد لاستلام التعديلات من اللجنة العلمية', en: 'Revisions Submission Deadline' },
    { date: new Date('2026-07-13T23:59:59'), ar: 'آخر موعد لإرسال العرض التقديمي', en: 'Presentation Submission Deadline' },
    { date: new Date('2026-07-27T23:59:59'), ar: 'موعد انعقاد المؤتمر', en: 'Conference Date' },
  ];

  function getNextMilestone() {
    const now = new Date();
    return milestones.find(m => m.date > now) || null;
  }

  function updateCountdown() {
    const now = new Date();
    const t = translations[currentLang];
    const next = getNextMilestone();

    if (!next) {
      // All milestones passed - conference is over
      document.getElementById('countdownTitle').textContent =
        currentLang === 'ar' ? 'شكراً لمشاركتكم - لقد انتهى المؤتمر بنجاح' : 'Thank you - The Conference has concluded';
      document.getElementById('cdDays').textContent = '00';
      document.getElementById('cdHours').textContent = '00';
      document.getElementById('cdMinutes').textContent = '00';
      document.getElementById('cdSeconds').textContent = '00';
      return;
    }

    // Update title to show next upcoming event
    const prefix = currentLang === 'ar' ? 'الوقت المتبقي حتى: ' : 'Time Remaining Until: ';
    document.getElementById('countdownTitle').textContent = prefix + (currentLang === 'ar' ? next.ar : next.en);

    const diff = next.date - now;
    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('cdDays').textContent    = String(days).padStart(2, '0');
    document.getElementById('cdHours').textContent   = String(hours).padStart(2, '0');
    document.getElementById('cdMinutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('cdSeconds').textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

/* ===== SCROLL ANIMATIONS ===== */
function initScrollAnimations() {
  // Add fade-in class to all animatable elements
  const animatables = document.querySelectorAll(
    '.goal-card, .theme-card, .audience-card, .guideline-card, .timeline-item, .contact-card, .stat-card, .format-item, .social-link'
  );

  animatables.forEach((el, index) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${(index % 6) * 0.07}s`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  animatables.forEach(el => observer.observe(el));

  // Also animate section headers
  document.querySelectorAll('.section-header').forEach(el => {
    el.classList.add('fade-in');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.2 });
    obs.observe(el);
  });
}

/* ===== BACK TO TOP ===== */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ===== SMOOTH SCROLL for anchor links ===== */
function scrollToPageHash(hash, smooth = true) {
  if (!hash || hash === '#') return false;
  const target = document.querySelector(hash);
  if (!target) return false;
  const navbar = document.getElementById('navbar');
  const navHeight = navbar ? navbar.offsetHeight : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 10;
  window.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' });
  return true;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (scrollToPageHash(href, true)) {
      e.preventDefault();
      history.pushState(null, '', href);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  if (location.hash) {
    setTimeout(() => scrollToPageHash(location.hash, false), 80);
  }
});


/* ========================================
   Page: organizing-committee
   ======================================== */
(function() {
  if (document.body.dataset.page !== 'organizing-committee') return;
  document.addEventListener('DOMContentLoaded', function() {

  // ===== Theme Toggle =====
  const body = document.getElementById('body');
  const themeToggle = document.getElementById('themeToggle');
  const savedDark = localStorage.getItem('arefak_dark') === 'true';
  if (savedDark) body.classList.add('dark-mode');
  function updateThemeIcons() {
    const isDark = body.classList.contains('dark-mode');
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    if (sunIcon) sunIcon.style.display = isDark ? 'none' : 'block';
    if (moonIcon) moonIcon.style.display = isDark ? 'block' : 'none';
  }
  updateThemeIcons();
  themeToggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('arefak_dark', isDark);
    updateThemeIcons();
  });

  // ===== Language Toggle =====
  const langToggle = document.getElementById('langToggle');
  let currentLang = localStorage.getItem('arefak_lang') || 'ar';

  const translations = {
    ar: {
      navHome: 'الرئيسية', navAbout: 'عن المؤتمر', navThemes: 'المحاور',
      navGuidelines: 'شروط المشاركة', navDates: 'المواعيد', navContact: 'التواصل',
      navPages: 'صفحات المؤتمر',
      ddOrg: 'الجهة المنظمة', ddReview: 'سياسة التحكيم', ddPub: 'سياسة النشر',
      logoTitle: 'جامعة الرفاق', logoSub: 'المؤتمر العلمي',
      heroBadge: 'الهيئة الرسمية للمؤتمر',
      heroTitle: 'الجهة <span>المنظمة للمؤتمر</span>',
      heroSub: 'جامعة الرفاق للعلوم التطبيقية والإنسانية - طرابلس، ليبيا',
      breadHome: 'الرئيسية', breadCurrent: 'الجهة المنظمة',
      univName: 'جامعة الرفاق',
      univSub: 'للعلوم التطبيقية والإنسانية - طرابلس، ليبيا',
      leadershipTitle: 'قيادة المؤتمر',
      leader1Name: 'أ.د. عبد الحميد عمار منصور', leader1Role: 'رئيس اللجنة العلمية' ,
      leader2Name: 'د. مهيبة محمد فرنكة' , leader2Role: 'رئيس المؤتمر',
      leader3Name: 'د. المهدي امحمد غلاب', leader3Role: 'رئيس اللجنة التحضيرية',
      membersTitle: 'أعضاء اللجان',
      sciCommTitle: 'أعضاء اللجنة العلمية',
      prepCommTitle: 'أعضاء اللجنة التحضيرية',
      reviewCommTitle: 'لجنة التحكيم للمؤتمر',
      footerUniv: 'جامعة الرفاق للعلوم التطبيقية والإنسانية', footerTagline: 'التميز والنزاهة والشفافية',
      footerNavTitle: 'روابط سريعة', fAbout: 'عن المؤتمر', fThemes: 'المحاور', fGuide: 'شروط المشاركة',
      fDates: 'المواعيد المهمة', fContact: 'التواصل',
      footerContactTitle: 'معلومات التواصل', footerPhone: 'الهاتف:', footerEmail: 'البريد:', footerAddr: 'العنوان:',
      footerAddrVal: 'طرابلس - شارع الجمهورية', footerCopyright: '© 2026 جامعة الرفاق للعلوم التطبيقية والإنسانية - جميع الحقوق محفوظة',
    },
    en: {
      navHome: 'Home', navAbout: 'About', navThemes: 'Themes',
      navGuidelines: 'Guidelines', navDates: 'Dates', navContact: 'Contact',
      navPages: 'Conference Pages',
      ddOrg: 'Organizing Committee', ddReview: 'Review Policy', ddPub: 'Publication Policy',
      logoTitle: 'Al-Refak University', logoSub: 'Scientific Conference',
      heroBadge: 'Official Conference Body',
      heroTitle: 'Conference <span>Organizing Committee</span>',
      heroSub: 'Al-Refak University of Applied and Human Sciences - Tripoli, Libya',
      breadHome: 'Home', breadCurrent: 'Organizing Committee',
      univName: 'Al-Refak University',
      univSub: 'of Applied and Human Sciences - Tripoli, Libya',
      leadershipTitle: 'Conference Leadership',
      leader1Name: 'Dr. Muhaybah Muhammad Faranka', leader1Role: 'Conference Chair',
      leader2Name: 'Prof. Abd Al-Hamid Ammar Mansour', leader2Role: 'Scientific Committee Chair',
      leader3Name: 'Dr. Al-Mahdi Amhammad Ghlab', leader3Role: 'Preparatory Committee Chair',
      membersTitle: 'Committee Members',
      sciCommTitle: 'Scientific Committee Members',
      prepCommTitle: 'Preparatory Committee Members',
      reviewCommTitle: 'Conference Peer Review Committee',
      footerUniv: 'Al-Refak University of Applied and Human Sciences', footerTagline: 'Excellence, Integrity & Transparency',
      footerNavTitle: 'Quick Links', fAbout: 'About Conference', fThemes: 'Themes', fGuide: 'Participation Guidelines',
      fDates: 'Important Dates', fContact: 'Contact',
      footerContactTitle: 'Contact Information', footerPhone: 'Phone:', footerEmail: 'Email:', footerAddr: 'Address:',
      footerAddrVal: 'Tripoli - Al-Jumhuriya Street', footerCopyright: '© 2026 Al-Refak University of Applied and Human Sciences - All Rights Reserved',
    }
  };

  const navSelMap = {
    navHome: '.nav-link[href="index.html"]',
    navAbout: '.nav-link[href="index.html#about"]',
    navThemes: '.nav-link[href="index.html#themes"]',
    navGuidelines: '.nav-link[href="index.html#guidelines"]',
    navDates: '.nav-link[href="index.html#dates"]',
    navContact: '.nav-link[href="index.html#contact"]',
  };

  function applyLang(lang) {
    const t = translations[lang];
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    langToggle.textContent = lang === 'ar' ? 'English' : 'عربي';

    // Navbar
    const navPageToggle = document.querySelector('.nav-dropdown-toggle');
    if (navPageToggle) navPageToggle.childNodes[0].textContent = t.navPages + ' ';
    const ddLinks = document.querySelectorAll('.dropdown-menu li a');
    if (ddLinks[0]) ddLinks[0].textContent = t.ddOrg;
    if (ddLinks[1]) ddLinks[1].textContent = t.ddReview;
    if (ddLinks[2]) ddLinks[2].textContent = t.ddPub;
    const logoTitleEl = document.querySelector('.logo-title');
    const logoSubEl = document.querySelector('.logo-sub');
    if (logoTitleEl) logoTitleEl.textContent = t.logoTitle;
    if (logoSubEl) logoSubEl.textContent = t.logoSub;
    for (const [key, sel] of Object.entries(navSelMap)) {
      const el = document.querySelector(sel);
      if (el) el.textContent = t[key];
    }

    // Hero
    const badge = document.querySelector('.hero-badge');
    if (badge) badge.innerHTML = badge.innerHTML.replace(/[\u0600-\u06FF\w\s]+$/, '') + t.heroBadge;
    const heroH1 = document.querySelector('.subpage-hero h1');
    if (heroH1) heroH1.innerHTML = t.heroTitle;
    const heroP = document.querySelector('.subpage-hero p');
    if (heroP) heroP.textContent = t.heroSub;
    const bcLinks = document.querySelectorAll('.breadcrumb a');
    const bcSpans = document.querySelectorAll('.breadcrumb span');
    if (bcLinks[0]) bcLinks[0].textContent = t.breadHome;
    if (bcSpans[1]) bcSpans[1].textContent = t.breadCurrent;

    // University header
    const univH2 = document.querySelector('.univ-header h2');
    const univP = document.querySelector('.univ-header p');
    if (univH2) univH2.textContent = t.univName;
    if (univP) univP.textContent = t.univSub;

    // Leadership
    const leaderH3 = document.querySelector('.leadership-section h3');
    if (leaderH3) leaderH3.textContent = t.leadershipTitle;
    const leaderCards = document.querySelectorAll('.leader-card');
    const leaderData = [
      { name: t.leader1Name, role: t.leader1Role },
      { name: t.leader2Name, role: t.leader2Role },
      { name: t.leader3Name, role: t.leader3Role },
    ];
    leaderCards.forEach((card, i) => {
      const nameEl = card.querySelector('.leader-name');
      const roleEl = card.querySelector('.leader-role');
      if (nameEl && leaderData[i]) nameEl.textContent = leaderData[i].name;
      if (roleEl && leaderData[i]) roleEl.textContent = leaderData[i].role;
    });

    // Committee members section title
    const membersH3 = document.querySelector('.members-section h3');
    if (membersH3) membersH3.textContent = t.membersTitle;
    const colHeaders = document.querySelectorAll('.members-column-header h4');
    if (colHeaders[0]) colHeaders[0].textContent = t.sciCommTitle;
    if (colHeaders[1]) colHeaders[1].textContent = t.prepCommTitle;

    // Reviewers section title
    const reviewH3 = document.querySelector('.reviewers-section h3');
    if (reviewH3) reviewH3.textContent = t.reviewCommTitle;

    // Footer
    const ids = ['footerUniv','footerTagline','footerNavTitle','fAbout','fThemes','fGuide','fDates','fContact','footerContactTitle','footerPhone','footerEmail','footerAddr','footerAddrVal','footerCopyright'];
    ids.forEach(id => { const el = document.getElementById(id); if (el && t[id]) el.textContent = t[id]; });
  }

  applyLang(currentLang);
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('arefak_lang', currentLang);
    applyLang(currentLang);
  });

  // ===== Navbar (identical to main page) =====
  initNavbar();

  });
})();


/* ========================================
   Page: review-policy
   ======================================== */
(function() {
  if (document.body.dataset.page !== 'review-policy') return;
  document.addEventListener('DOMContentLoaded', function() {

  // ===== Theme Toggle =====
  const body = document.getElementById('body');
  const themeToggle = document.getElementById('themeToggle');
  const savedDark = localStorage.getItem('arefak_dark') === 'true';
  if (savedDark) body.classList.add('dark-mode');
  function updateThemeIcons() {
    const isDark = body.classList.contains('dark-mode');
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    if (sunIcon) sunIcon.style.display = isDark ? 'none' : 'block';
    if (moonIcon) moonIcon.style.display = isDark ? 'block' : 'none';
  }
  updateThemeIcons();
  themeToggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('arefak_dark', isDark);
    updateThemeIcons();
  });

  // ===== Language Toggle =====
  const langToggle = document.getElementById('langToggle');
  let currentLang = localStorage.getItem('arefak_lang') || 'ar';

  const translations = {
    ar: {
      // Navbar
      navHome: 'الرئيسية', navAbout: 'عن المؤتمر', navThemes: 'المحاور',
      navGuidelines: 'شروط المشاركة', navDates: 'المواعيد', navContact: 'التواصل',
      navPages: 'صفحات المؤتمر',
      ddOrg: 'الجهة المنظمة', ddReview: 'سياسة التحكيم', ddPub: 'سياسة النشر',
      logoTitle: 'جامعة الرفاق', logoSub: 'المؤتمر العلمي',
      // Hero
      heroBadge: 'وثيقة رسمية معتمدة',
      heroTitle: 'سياسة <span>التحكيم العلمي</span>',
      heroSub: 'مؤتمر العمارة والإعمار في ليبيا: الواقع والتحديات وآفاق المستقبل',
      breadHome: 'الرئيسية', breadCurrent: 'سياسة التحكيم',
      // Intro
      introTitle: 'المقدمة',
      introText: 'تلتزم اللجنة العلمية لمؤتمر العمارة والإعمار في ليبيا: الواقع والتحديات وآفاق المستقبل بتطبيق منظومة تحكيم علمي دقيقة وشفافة، تضمن جودة الأوراق العلمية المقدمة للمؤتمر، وتستند إلى معايير أخلاقية وأكاديمية راسخة، منسجمة مع القوانين والتشريعات الوطنية ذات العلاقة، ومعايير النشر العلمي الدولية المعترف بها.',
      // Section 1
      s1Title: 'أولًا: الأهداف',
      s1i1: 'ضمان جودة وأصالة ومصداقية الأوراق العلمية المقدمة.',
      s1i2: 'تعزيز الشفافية والعدالة في تقييم الأبحاث.',
      s1i3: 'تحقيق التوافق مع متطلبات الاعتماد الأكاديمي وضمان الجودة.',
      s1i4: 'ترسيخ القيم الأخلاقية في ممارسات البحث والتحكيم العلمي.',
      // Section 2
      s2Title: 'ثانيًا: الأساس التشريعي والمعياري',
      s2Intro: 'تعتمد هذه السياسة على:',
      s2i1: 'القانون رقم (18) لسنة 2010 بشأن التعليم العالي في ليبيا.',
      s2i2: 'القرار رقم (264) لسنة 2020 بشأن لائحة شروط وضوابط إصدار المجلات العلمية المحكمة (بما يُستأنس به في إجراءات التحكيم).',
      s2i3: 'اللوائح التنظيمية الصادرة عن وزارة التعليم العالي والبحث العلمي والمؤسسات التابعة لها.',
      s2i4: 'المعايير الدولية الصادرة عن لجنة أخلاقيات النشر (COPE).',
      s2i5: 'أفضل الممارسات المعتمدة في الجامعات الليبية (مثل جامعات طرابلس وسبها).',
      // Section 3
      s3Title: 'ثالثًا: نوعية التحكيم المعتمدة بالمؤتمر',
      s3Text: 'يعتمد المؤتمر نظام <strong>التحكيم المزدوج التعمية (Double-Blind Review)</strong>، بحيث لا يعرف المحكم هوية الباحث، ولا يعرف الباحث هوية المحكم. يضمن هذا النظام الموضوعية الكاملة والحياد في تقييم الأوراق العلمية بعيداً عن أي تحيز شخصي أو مؤسسي.',
      // Section 4
      s4Title: 'رابعًا: مراحل عملية التحكيم',
      s4Intro: 'تمر عملية التحكيم بالمراحل التالية:',
      st1: '<strong>الفحص الأولي (Initial Screening):</strong> مراجعة أولية للتأكد من توافق البحث مع محاور المؤتمر، وسلامة التنسيق واللغة.',
      st2: '<strong>فحص الانتحال العلمي (Plagiarism Check):</strong> باستخدام برامج متخصصة، ويُرفض البحث إذا تجاوزت نسبة الاقتباس غير الموثق (20%).',
      st3: '<strong>اختيار المحكمين:</strong> تعيين محكمين اثنين على الأقل وفق التخصص، والخبرة، والنزاهة، مع مراعاة عدم وجود تضارب مصالح.',
      st4: '<strong>تقديم تقارير التحكيم:</strong> يلتزم كل محكم بتقديم تقرير مفصل خلال مدة لا تتجاوز (3) أسابيع.',
      st5: '<strong>إرسال الملاحظات للباحث:</strong> تُحال تقارير التحكيم إلى الباحث لإجراء التعديلات خلال مدة أقصاها (15) يومًا.',
      st6: '<strong>إعادة التحكيم (عند الحاجة):</strong> في حال التعديلات الجوهرية، يُعاد البحث إلى المحكمين أو إلى محكم ثالث.',
      st7: '<strong>اتخاذ القرار النهائي:</strong> يتم اتخاذ القرار من قبل اللجنة العلمية للمؤتمر بناءً على تقارير المحكمين وردود الباحث.',
      st8: '<strong>الرفض أو السحب:</strong> في حال ثبوت الانتحال أو التكرار أو وجود تضليل علمي.',
      // Section 5
      s5Title: 'خامسًا: توصيات المحكمين وتصنيف القرارات',
      th1: 'القرار', th2: 'المعنى', th3: 'الإجراء',
      d1a: 'قبول بدون تعديل', d1b: 'البحث مستوفٍ لجميع المعايير', d1c: 'يُدرج مباشرة في أعمال المؤتمر',
      d2a: 'قبول مع تعديلات طفيفة', d2b: 'يحتاج إلى تحسينات بسيطة', d2c: 'يُعاد للباحث للتعديل خلال 15 يوماً',
      d3a: 'قبول مع تعديلات جوهرية', d3b: 'يحتاج إلى مراجعة شاملة', d3c: 'يُعاد للتحكيم بعد التعديل',
      d4a: 'رفض', d4b: 'لا يستوفي معايير القبول', d4c: 'يُخطر الباحث بأسباب الرفض',
      // Section 6
      s6Title: 'سادسًا: ضوابط اختيار المحكمين',
      s6i1: 'يتم اختيار المحكمين من قبل اللجنة العلمية للمؤتمر.',
      s6i2: 'لا يقل عدد المحكمين عن اثنين لكل بحث.',
      s6i3: 'أن يكون المحكم بدرجة أستاذ مساعد على الأقل أو ما يعادلها.',
      s6i4: 'يمكن أن يكون المحكم من داخل أو خارج الجامعة المنظمة.',
      s6i5: 'توفر الخبرة والكفاءة العلمية في مجال البحث.',
      s6i6: 'عدم وجود علاقة مباشرة أو تضارب مصالح مع الباحث.',
      s6i7: 'الالتزام بالموضوعية والسرية.',
      s6i8: 'مراعاة التنوع المؤسسي والجغرافي.',
      s6i9: 'تحديث قاعدة بيانات المحكمين بشكل دوري.',
      // Section 7
      s7Title: 'سابعًا: محتوى تقرير التحكيم',
      s7Intro: 'يشمل تقرير المحكم العناصر التالية:',
      s7i1: 'أصالة الموضوع وأهميته العلمية.',
      s7i2: 'وضوح الأهداف وترابطها.',
      s7i3: 'مناسبة المنهجية ودقتها.',
      s7i4: 'تحليل النتائج ومصداقيتها.',
      s7i5: 'سلامة اللغة والأسلوب.',
      s7i6: 'دقة توثيق المراجع.',
      s7i7: 'التوصية النهائية.',
      s7i8: 'ملاحظات تفصيلية لتحسين البحث.',
      // Section 8
      s8Title: 'ثامنًا: الأخلاقيات المهنية',
      e1Title: 'على المحكم', e1i1: 'السرية وعدم استخدام المحتوى', e1i2: 'الموضوعية وتجنب التحيز', e1i3: 'الإفصاح عن تضارب المصالح',
      e2Title: 'على الباحث', e2i1: 'احترام الملاحظات', e2i2: 'الرد بأدب وبلغة علمية', e2i3: 'عدم التواصل مع المحكمين',
      e3Title: 'اللجنة العلمية', e3i1: 'ضمان العدالة في التقييم', e3i2: 'معالجة الشكاوى والانتهاكات', e3i3: 'حماية جميع الأطراف',
      // Section 9
      s9Title: 'تاسعًا: المكافآت',
      s9Text: 'يُمنح المحكمون مكافآت مالية أو شهادات تقدير، وفق اللائحة الداخلية للمؤتمر وبما يتماشى مع أنظمة الجهة المنظمة.',
      // Section 10
      s10Title: 'عاشرًا: توثيق السجلات',
      s10Intro: 'تحتفظ اللجنة العلمية للمؤتمر بما يلي لأغراض التوثيق وضمان الجودة والاعتماد الأكاديمي:',
      s10i1: 'تقارير التحكيم.', s10i2: 'المراسلات.', s10i3: 'تواريخ مراحل التقييم.',
      // Section 11
      s11Title: 'أحد عشر: مراجعة السياسة',
      s11Text: 'تُراجع هذه السياسة بشكل دوري، على الأقل قبل كل دورة من دورات المؤتمر، أو عند الحاجة، لضمان مواكبتها لأفضل الممارسات والمعايير المحلية والدولية.',
      // Approval
      approvalTitle: 'اعتماد', approvalName: 'وكيل الشؤون العلمية والبحث العلمي',
      // Footer
      footerUniv: 'جامعة الرفاق للعلوم التطبيقية والإنسانية',
      footerTagline: 'التميز والنزاهة والشفافية',
      footerNavTitle: 'روابط سريعة',
      fAbout: 'عن المؤتمر', fThemes: 'المحاور', fGuide: 'شروط المشاركة',
      fDates: 'المواعيد المهمة', fContact: 'التواصل',
      footerContactTitle: 'معلومات التواصل',
      footerPhone: 'الهاتف:', footerEmail: 'البريد:', footerAddr: 'العنوان:',
      footerAddrVal: 'طرابلس - شارع الجمهورية',
      footerCopyright: '© 2026 جامعة الرفاق للعلوم التطبيقية والإنسانية - جميع الحقوق محفوظة',
    },
    en: {
      // Navbar
      navHome: 'Home', navAbout: 'About', navThemes: 'Themes',
      navGuidelines: 'Guidelines', navDates: 'Dates', navContact: 'Contact',
      navPages: 'Conference Pages',
      ddOrg: 'Organizing Committee', ddReview: 'Review Policy', ddPub: 'Publication Policy',
      logoTitle: 'Al-Refak University', logoSub: 'Scientific Conference',
      // Hero
      heroBadge: 'Official Approved Document',
      heroTitle: 'Peer <span>Review Policy</span>',
      heroSub: 'Conference on Architecture and Construction in Libya: Reality, Challenges and Future Prospects',
      breadHome: 'Home', breadCurrent: 'Review Policy',
      // Intro
      introTitle: 'Introduction',
      introText: 'The Scientific Committee of the Conference on Architecture and Construction in Libya is committed to implementing a rigorous and transparent peer review system that ensures the quality of submitted papers, grounded in established ethical and academic standards, aligned with relevant national legislation and internationally recognized scientific publication standards.',
      // Section 1
      s1Title: 'I. Objectives',
      s1i1: 'Ensure the quality, originality, and credibility of submitted scientific papers.',
      s1i2: 'Promote transparency and fairness in research evaluation.',
      s1i3: 'Achieve compliance with academic accreditation and quality assurance requirements.',
      s1i4: 'Uphold ethical values in research and peer review practices.',
      // Section 2
      s2Title: 'II. Legislative and Normative Basis',
      s2Intro: 'This policy is based on:',
      s2i1: 'Law No. (18) of 2010 on Higher Education in Libya.',
      s2i2: 'Decision No. (264) of 2020 on the regulations governing the issuance of peer-reviewed scientific journals (as applicable to review procedures).',
      s2i3: 'Regulations issued by the Ministry of Higher Education and Scientific Research and its affiliated institutions.',
      s2i4: 'International standards issued by the Committee on Publication Ethics (COPE).',
      s2i5: 'Best practices adopted by Libyan universities (e.g., University of Tripoli and Sebha University).',
      // Section 3
      s3Title: 'III. Review Type Adopted by the Conference',
      s3Text: 'The conference adopts the <strong>Double-Blind Review</strong> system, whereby the reviewer does not know the identity of the author, and the author does not know the identity of the reviewer. This system ensures complete objectivity and impartiality in evaluating scientific papers, free from any personal or institutional bias.',
      // Section 4
      s4Title: 'IV. Peer Review Process Stages',
      s4Intro: 'The review process proceeds through the following stages:',
      st1: '<strong>Initial Screening:</strong> A preliminary review to ensure the paper aligns with the conference themes and meets formatting and language requirements.',
      st2: '<strong>Plagiarism Check:</strong> Using specialized software; papers are rejected if undocumented quotation exceeds 20%.',
      st3: '<strong>Reviewer Selection:</strong> Assignment of at least two reviewers based on specialization, expertise, and integrity, with no conflict of interest.',
      st4: '<strong>Submission of Review Reports:</strong> Each reviewer is required to submit a detailed report within no more than 3 weeks.',
      st5: '<strong>Sending Feedback to the Author:</strong> Review reports are forwarded to the author for revisions within a maximum of 15 days.',
      st6: '<strong>Re-review (if needed):</strong> For major revisions, the paper is returned to the reviewers or sent to a third reviewer.',
      st7: '<strong>Final Decision:</strong> The decision is made by the conference Scientific Committee based on reviewer reports and author responses.',
      st8: '<strong>Rejection or Withdrawal:</strong> In cases of proven plagiarism, duplication, or scientific misconduct.',
      // Section 5
      s5Title: 'V. Reviewer Recommendations and Decision Classification',
      th1: 'Decision', th2: 'Meaning', th3: 'Action',
      d1a: 'Accept without revision', d1b: 'Paper meets all criteria', d1c: 'Included directly in conference proceedings',
      d2a: 'Accept with minor revisions', d2b: 'Needs minor improvements', d2c: 'Returned to author for revision within 15 days',
      d3a: 'Accept with major revisions', d3b: 'Needs comprehensive review', d3c: 'Returned for re-review after revision',
      d4a: 'Reject', d4b: 'Does not meet acceptance criteria', d4c: 'Author notified of rejection reasons',
      // Section 6
      s6Title: 'VI. Reviewer Selection Criteria',
      s6i1: 'Reviewers are selected by the conference Scientific Committee.',
      s6i2: 'A minimum of two reviewers per paper.',
      s6i3: 'Reviewer must hold at least an Assistant Professor rank or equivalent.',
      s6i4: 'Reviewer may be internal or external to the organizing university.',
      s6i5: 'Must have expertise and scientific competence in the research field.',
      s6i6: 'No direct relationship or conflict of interest with the author.',
      s6i7: 'Commitment to objectivity and confidentiality.',
      s6i8: 'Consideration of institutional and geographic diversity.',
      s6i9: 'Periodic updating of the reviewer database.',
      // Section 7
      s7Title: 'VII. Review Report Content',
      s7Intro: 'The reviewer\'s report shall include the following elements:',
      s7i1: 'Originality and scientific significance of the topic.',
      s7i2: 'Clarity and coherence of objectives.',
      s7i3: 'Appropriateness and rigor of methodology.',
      s7i4: 'Analysis of results and their credibility.',
      s7i5: 'Language and style quality.',
      s7i6: 'Accuracy of reference documentation.',
      s7i7: 'Final recommendation.',
      s7i8: 'Detailed notes for improving the paper.',
      // Section 8
      s8Title: 'VIII. Professional Ethics',
      e1Title: 'Reviewer Obligations', e1i1: 'Confidentiality and non-use of content', e1i2: 'Objectivity and avoidance of bias', e1i3: 'Disclosure of conflicts of interest',
      e2Title: 'Author Obligations', e2i1: 'Respect reviewer comments', e2i2: 'Respond professionally and academically', e2i3: 'No direct contact with reviewers',
      e3Title: 'Scientific Committee', e3i1: 'Ensure fairness in evaluation', e3i2: 'Handle complaints and violations', e3i3: 'Protect all parties',
      // Section 9
      s9Title: 'IX. Reviewer Rewards',
      s9Text: 'Reviewers are granted financial rewards or certificates of appreciation, in accordance with the conference internal regulations and the organizing institution\'s policies.',
      // Section 10
      s10Title: 'X. Records Documentation',
      s10Intro: 'The conference Scientific Committee retains the following for documentation, quality assurance, and academic accreditation purposes:',
      s10i1: 'Review reports.', s10i2: 'Correspondence.', s10i3: 'Evaluation stage dates.',
      // Section 11
      s11Title: 'XI. Policy Review',
      s11Text: 'This policy is reviewed periodically, at least before each conference session, or as needed, to ensure it remains aligned with best practices and local and international standards.',
      // Approval
      approvalTitle: 'Approved by', approvalName: 'Vice President for Academic Affairs and Scientific Research',
      // Footer
      footerUniv: 'Al-Refak University of Applied and Human Sciences',
      footerTagline: 'Excellence, Integrity & Transparency',
      footerNavTitle: 'Quick Links',
      fAbout: 'About Conference', fThemes: 'Themes', fGuide: 'Participation Guidelines',
      fDates: 'Important Dates', fContact: 'Contact',
      footerContactTitle: 'Contact Information',
      footerPhone: 'Phone:', footerEmail: 'Email:', footerAddr: 'Address:',
      footerAddrVal: 'Tripoli - Al-Jumhuriya Street',
      footerCopyright: '© 2026 Al-Refak University of Applied and Human Sciences - All Rights Reserved',
    }
  };

  const idMap = {
    navHome: '.nav-link[href="index.html"]',
    navAbout: '.nav-link[href="index.html#about"]',
    navThemes: '.nav-link[href="index.html#themes"]',
    navGuidelines: '.nav-link[href="index.html#guidelines"]',
    navDates: '.nav-link[href="index.html#dates"]',
    navContact: '.nav-link[href="index.html#contact"]',
  };

  function applyLang(lang) {
    const t = translations[lang];
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    langToggle.textContent = lang === 'ar' ? 'English' : 'عربي';

    // Navbar
    const navPageToggle = document.querySelector('.nav-dropdown-toggle');
    if (navPageToggle) navPageToggle.childNodes[0].textContent = t.navPages + ' ';
    const ddLinks = document.querySelectorAll('.dropdown-menu li a');
    if (ddLinks[0]) ddLinks[0].textContent = t.ddOrg;
    if (ddLinks[1]) ddLinks[1].textContent = t.ddReview;
    if (ddLinks[2]) ddLinks[2].textContent = t.ddPub;
    const logoTitleEl = document.querySelector('.logo-title');
    const logoSubEl = document.querySelector('.logo-sub');
    if (logoTitleEl) logoTitleEl.textContent = t.logoTitle;
    if (logoSubEl) logoSubEl.textContent = t.logoSub;
    for (const [key, sel] of Object.entries(idMap)) {
      const el = document.querySelector(sel);
      if (el) el.textContent = t[key];
    }

    // Hero
    const badge = document.querySelector('.hero-badge');
    if (badge) badge.innerHTML = badge.innerHTML.replace(/[\u0600-\u06FF\w\s]+$/, '') + t.heroBadge;
    const heroH1 = document.querySelector('.subpage-hero h1');
    if (heroH1) heroH1.innerHTML = t.heroTitle;
    const heroP = document.querySelector('.subpage-hero p');
    if (heroP) heroP.textContent = t.heroSub;
    const bcLinks = document.querySelectorAll('.breadcrumb a, .breadcrumb span:last-child');
    if (bcLinks[0]) bcLinks[0].textContent = t.breadHome;
    const bcSpans = document.querySelectorAll('.breadcrumb span');
    if (bcSpans[1]) bcSpans[1].textContent = t.breadCurrent;

    // Intro card
    const introH3 = document.querySelector('.policy-intro-card h3');
    if (introH3) introH3.textContent = t.introTitle;
    const introP = document.querySelector('.policy-intro-card p');
    if (introP) introP.textContent = t.introText;

    // Sections
    const sections = document.querySelectorAll('.policy-section');
    const sData = [
      { title: t.s1Title, items: [t.s1i1, t.s1i2, t.s1i3, t.s1i4] },
      { title: t.s2Title, intro: t.s2Intro, items: [t.s2i1, t.s2i2, t.s2i3, t.s2i4, t.s2i5] },
      { title: t.s3Title, text: t.s3Text },
      { title: t.s4Title, intro: t.s4Intro, stages: [t.st1, t.st2, t.st3, t.st4, t.st5, t.st6, t.st7, t.st8] },
      { title: t.s5Title, table: true },
      { title: t.s6Title, items: [t.s6i1, t.s6i2, t.s6i3, t.s6i4, t.s6i5, t.s6i6, t.s6i7, t.s6i8, t.s6i9] },
      { title: t.s7Title, intro: t.s7Intro, items: [t.s7i1, t.s7i2, t.s7i3, t.s7i4, t.s7i5, t.s7i6, t.s7i7, t.s7i8] },
      { title: t.s8Title, ethics: true },
      { title: t.s9Title, text: t.s9Text },
      { title: t.s10Title, intro: t.s10Intro, items: [t.s10i1, t.s10i2, t.s10i3] },
      { title: t.s11Title, text: t.s11Text },
    ];
    sections.forEach((sec, i) => {
      const d = sData[i]; if (!d) return;
      const h3 = sec.querySelector('h3'); if (h3) h3.textContent = d.title;
      if (d.text !== undefined) {
        const p = sec.querySelector('.policy-section-body p');
        if (p) p.innerHTML = d.text;
      }
      if (d.intro) {
        const p = sec.querySelector('.policy-section-body > p');
        if (p) p.textContent = d.intro;
      }
      if (d.items) {
        const lis = sec.querySelectorAll('.policy-list li');
        lis.forEach((li, j) => { if (d.items[j] !== undefined) li.textContent = d.items[j]; });
      }
      if (d.stages) {
        const stagePs = sec.querySelectorAll('.stage-item p');
        stagePs.forEach((p, j) => { if (d.stages[j] !== undefined) p.innerHTML = d.stages[j]; });
      }
      if (d.table) {
        const ths = sec.querySelectorAll('.decision-table th');
        if (ths[0]) ths[0].textContent = t.th1;
        if (ths[1]) ths[1].textContent = t.th2;
        if (ths[2]) ths[2].textContent = t.th3;
        const rows = sec.querySelectorAll('.decision-table tbody tr');
        const rowData = [[t.d1a, t.d1b, t.d1c],[t.d2a, t.d2b, t.d2c],[t.d3a, t.d3b, t.d3c],[t.d4a, t.d4b, t.d4c]];
        rows.forEach((row, j) => {
          const tds = row.querySelectorAll('td');
          if (tds[0]) tds[0].querySelector('span').textContent = rowData[j][0];
          if (tds[1]) tds[1].textContent = rowData[j][1];
          if (tds[2]) tds[2].textContent = rowData[j][2];
        });
      }
      if (d.ethics) {
        const cards = sec.querySelectorAll('.ethics-card');
        const ethData = [
          { title: t.e1Title, items: [t.e1i1, t.e1i2, t.e1i3] },
          { title: t.e2Title, items: [t.e2i1, t.e2i2, t.e2i3] },
          { title: t.e3Title, items: [t.e3i1, t.e3i2, t.e3i3] },
        ];
        cards.forEach((card, j) => {
          const h5 = card.querySelector('h5'); if (h5) h5.textContent = ethData[j].title;
          const lis = card.querySelectorAll('li');
          lis.forEach((li, k) => { if (ethData[j].items[k]) li.textContent = ethData[j].items[k]; });
        });
      }
    });

    // Approval box
    const approvalH4 = document.querySelector('.approval-box h4');
    const approvalP = document.querySelector('.approval-box p');
    if (approvalH4) approvalH4.textContent = t.approvalTitle;
    if (approvalP) approvalP.textContent = t.approvalName;

    // Footer
    const ids = ['footerUniv','footerTagline','footerNavTitle','fAbout','fThemes','fGuide','fDates','fContact','footerContactTitle','footerPhone','footerEmail','footerAddr','footerAddrVal','footerCopyright'];
    ids.forEach(id => { const el = document.getElementById(id); if (el && t[id]) el.textContent = t[id]; });
  }

  applyLang(currentLang);
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('arefak_lang', currentLang);
    applyLang(currentLang);
  });

  // ===== Navbar (identical to main page) =====
  initNavbar();

  });
})();


/* ========================================
   Page: publication-policy
   ======================================== */
(function() {
  if (document.body.dataset.page !== 'publication-policy') return;
  document.addEventListener('DOMContentLoaded', function() {

  // ===== Theme Toggle =====
  const body = document.getElementById('body');
  const themeToggle = document.getElementById('themeToggle');
  const savedDark = localStorage.getItem('arefak_dark') === 'true';
  if (savedDark) body.classList.add('dark-mode');
  function updateThemeIcons() {
    const isDark = body.classList.contains('dark-mode');
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    if (sunIcon) sunIcon.style.display = isDark ? 'none' : 'block';
    if (moonIcon) moonIcon.style.display = isDark ? 'block' : 'none';
  }
  updateThemeIcons();
  themeToggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('arefak_dark', isDark);
    updateThemeIcons();
  });

  // ===== Language Toggle =====
  const langToggle = document.getElementById('langToggle');
  let currentLang = localStorage.getItem('arefak_lang') || 'ar';

  const translations = {
    ar: {
      navHome: 'الرئيسية', navAbout: 'عن المؤتمر', navThemes: 'المحاور',
      navGuidelines: 'شروط المشاركة', navDates: 'المواعيد', navContact: 'التواصل',
      navPages: 'صفحات المؤتمر',
      ddOrg: 'الجهة المنظمة', ddReview: 'سياسة التحكيم', ddPub: 'سياسة النشر',
      logoTitle: 'جامعة الرفاق', logoSub: 'المؤتمر العلمي',
      heroBadge: 'لائحة تنظيمية رسمية',
      heroTitle: 'سياسة <span>النشر العلمي</span>',
      heroSub: 'اللائحة التنظيمية لسياسات النشر العلمي لمؤتمر العمارة والإعمار في ليبيا',
      breadHome: 'الرئيسية', breadCurrent: 'سياسة النشر',
      art1Title: 'المادة (1): التعريف',
      art1Text: 'تُعرّف هذه اللائحة بسياسة النشر العلمي الخاصة بمؤتمر العمارة والإعمار في ليبيا: الواقع والتحديات وآفاق المستقبل، وتُطبّق على جميع الأوراق العلمية المقدمة للمؤتمر.',
      art2Num: 'المادة 2', art2Title: 'أهداف السياسة',
      art2i1: 'تنظيم عملية استلام وتقييم ونشر الأوراق العلمية.',
      art2i2: 'ضمان جودة وأصالة الأبحاث المقبولة.',
      art2i3: 'تعزيز الشفافية والعدالة في إجراءات التحكيم والنشر.',
      art2i4: 'الالتزام بأخلاقيات البحث العلمي والمعايير الدولية.',
      art3Num: 'المادة 3', art3Title: 'نطاق النشر',
      art3Intro: 'تشمل هذه السياسة:',
      art3i1: 'الأوراق العلمية الأصيلة.', art3i2: 'الدراسات التطبيقية والنظرية.', art3i3: 'أوراق العمل المرتبطة بمحاور المؤتمر.',
      art3Extra: 'تُنشر الأبحاث المقبولة ضمن <strong>كتاب أعمال المؤتمر</strong> أو عبر منصة إلكترونية. كما ستُنشر الأوراق المتميزة فقط في <strong>مجلة الرفاق للمعرفة</strong>.',
      art4Num: 'المادة 4', art4Title: 'شروط قبول الأوراق العلمية',
      art4Intro: 'يشترط لقبول البحث ما يلي:',
      art4i1: 'تقبل الأوراق العلمية باللغتين العربية أو الإنجليزية مع ترجمة المستخلص بعكس لغة الكتابة.',
      art4i2: 'أن يكون أصيلًا وغير منشور سابقًا.', art4i3: 'ألا يكون مقدمًا للنشر في جهة أخرى.',
      art4i4: 'الالتزام بمحاور المؤتمر.', art4i5: 'اتباع دليل إعداد الأوراق العلمية.',
      art4i6: 'الالتزام بالتوثيق العلمي السليم.', art4i7: 'اجتياز التحكيم العلمي بنجاح.',
      art4i8: 'ألا تتجاوز نسبة التشابه (20%).', art4i9: 'تنفيذ التعديلات المطلوبة ضمن المدة المحددة.',
      art5Num: 'المادة 5', art5Title: 'إجراءات التقييم والنشر',
      art5Intro: 'تمر عملية النشر بالمراحل التالية:',
      fs1: 'الاستلام عبر المنصة المعتمدة.', fs2: 'الفحص الأولي من اللجنة العلمية.', fs3: 'فحص الانتحال العلمي.',
      fs4: 'التحكيم العلمي (مزدوج التعمية).', fs5: 'إرسال الملاحظات للباحث.', fs6: 'استلام النسخة المعدلة.',
      fs7: 'اتخاذ القرار النهائي.', fs8: 'إدراج البحث ضمن أعمال المؤتمر.',
      art6Num: 'المادة 6', art6Title: 'التحكيم العلمي',
      art6i1: 'يعتمد المؤتمر نظام التحكيم المزدوج التعمية (Double-Blind Review).', art6i2: 'يتم تعيين محكمين اثنين على الأقل لكل بحث.',
      art6i3: 'يمكن الاستعانة بمحكم ثالث عند الحاجة.', art6i4: 'تُحفظ سرية جميع بيانات التحكيم.',
      art7Num: 'المادة 7', art7Title: 'أخلاقيات النشر',
      art7s1: 'أولًا: اللجنة العلمية', art7s1i1: 'ضمان العدالة والشفافية.', art7s1i2: 'الحفاظ على سرية المعلومات.', art7s1i3: 'معالجة الشكاوى والمخالفات.',
      art7s2: 'ثانيًا: المحكمون', art7s2i1: 'الالتزام بالموضوعية.', art7s2i2: 'الحفاظ على السرية.', art7s2i3: 'الإفصاح عن تضارب المصالح.',
      art7s3: 'ثالثًا: الباحثون', art7s3i1: 'الالتزام بالأمانة العلمية.', art7s3i2: 'توثيق المصادر بدقة.', art7s3i3: 'عدم التقديم المتزامن لأكثر من جهة.', art7s3i4: 'الإفصاح عن أي تضارب مصالح.',
      art8Num: 'المادة 8', art8Title: 'تضارب المصالح',
      art8i1: 'يجب الإفصاح عن أي تضارب مصالح من جميع الأطراف.', art8i2: 'يُستبعد أي محكم أو عضو لجنة لديه تضارب مصالح.', art8i3: 'يحق للمؤتمر رفض أو سحب البحث عند عدم الإفصاح.',
      art9Num: 'المادة 9', art9Title: 'الانتحال وسوء السلوك العلمي',
      art9i1: 'تُفحص جميع الأبحاث باستخدام برامج كشف الانتحال.', art9i2: 'الحد الأقصى للتشابه (20%).', art9i3: 'يُرفض البحث في حال تجاوز النسبة أو ثبوت الانتحال.', art9i4: 'يُسحب البحث إذا اكتُشف الانتحال بعد القبول أو النشر.',
      art10Num: 'المادة 10', art10Title: 'حقوق النشر والملكية الفكرية',
      art10i1: 'يحتفظ الباحث بحقوق الملكية الفكرية لبحثه.', art10i2: 'يمنح الباحث المؤتمر ترخيصًا غير حصري للنشر.', art10i3: 'يجب الإشارة إلى المؤتمر عند إعادة استخدام البحث.',
      art11Num: 'المادة 11', art11Title: 'الوصول المفتوح',
      art11i1: 'تُتاح أعمال المؤتمر مجانًا للباحثين.', art11i2: 'يُسمح بالاستخدام غير التجاري مع الإشارة إلى المصدر.',
      art12Num: 'المادة 12', art12Title: 'رسوم المشاركة والنشر',
      art12Free: 'جميع أعمال التسجيل والمشاركة والنشر مجانية تمامًا',
      art13Num: 'المادة 13', art13Title: 'الأرشفة والنشر الإلكتروني',
      art13i1: 'تُنشر الأبحاث إلكترونيًا ضمن أعمال المؤتمر.', art13i2: 'يجوز إدراجها في قواعد بيانات علمية.', art13i3: 'يُسمح للباحثين بأرشفة أبحاثهم مع الإشارة للمؤتمر.',
      art14Num: 'المادة 14', art14Title: 'سحب الأوراق العلمية',
      art14Intro: 'يحق للجنة العلمية سحب أي بحث في الحالات التالية:',
      art14i1: 'الانتحال العلمي.', art14i2: 'التزوير أو التلاعب بالبيانات.', art14i3: 'مخالفة أخلاقيات النشر.',
      art15Num: 'المادة 15', art15Title: 'الطعون والشكاوى',
      art15i1: 'تُشكَّل لجنة الطعون والشكاوى بقرار من رئيس اللجنة العلمية للمؤتمر، وتكون حسب تخصص ومجال الطاعن أو الشاكي.', art15i2: 'يحق للباحث تقديم طعن خلال المدة المحددة.', art15i3: 'تُحال الطعون إلى لجنة علمية محايدة للبت فيها.',
      art16Num: 'المادة 16', art16Title: 'إخلاء المسؤولية',
      art16Text: 'تُعبر الآراء الواردة في الأبحاث عن وجهة نظر أصحابها، ولا تتحمل الجهة المنظمة أو اللجنة العلمية أي مسؤولية عن محتواها.',
      art17Num: 'المادة 17', art17Title: 'مراجعة اللائحة',
      art17Text: 'تعتبر هذه اللائحة جزءًا لا يتجزأ من دليل عقد المؤتمرات المعتمد من وزارة التعليم العالي والبحث العلمي. وتُراجع هذه اللائحة قبل كل دورة من دورات المؤتمر، أو عند الحاجة، بما يضمن مواكبة المعايير الأكاديمية الحديثة.',
      approvalTitle: 'اعتماد', approvalName: 'وكيل الشؤون العلمية والبحث العلمي',
      footerUniv: 'جامعة الرفاق للعلوم التطبيقية والإنسانية', footerTagline: 'التميز والنزاهة والشفافية',
      footerNavTitle: 'روابط سريعة', fAbout: 'عن المؤتمر', fThemes: 'المحاور', fGuide: 'شروط المشاركة',
      fDates: 'المواعيد المهمة', fContact: 'التواصل',
      footerContactTitle: 'معلومات التواصل', footerPhone: 'الهاتف:', footerEmail: 'البريد:', footerAddr: 'العنوان:',
      footerAddrVal: 'طرابلس - شارع الجمهورية', footerCopyright: '© 2026 جامعة الرفاق للعلوم التطبيقية والإنسانية - جميع الحقوق محفوظة',
    },
    en: {
      navHome: 'Home', navAbout: 'About', navThemes: 'Themes',
      navGuidelines: 'Guidelines', navDates: 'Dates', navContact: 'Contact',
      navPages: 'Conference Pages',
      ddOrg: 'Organizing Committee', ddReview: 'Review Policy', ddPub: 'Publication Policy',
      logoTitle: 'Al-Refak University', logoSub: 'Scientific Conference',
      heroBadge: 'Official Regulatory Document',
      heroTitle: 'Scientific <span>Publication Policy</span>',
      heroSub: 'Regulatory Framework for Scientific Publication at the Conference on Architecture and Construction in Libya',
      breadHome: 'Home', breadCurrent: 'Publication Policy',
      art1Title: 'Article (1): Definition',
      art1Text: 'This regulation defines the scientific publication policy of the Conference on Architecture and Construction in Libya: Reality, Challenges and Future Prospects, and applies to all scientific papers submitted to the conference.',
      art2Num: 'Article 2', art2Title: 'Policy Objectives',
      art2i1: 'Organize the process of receiving, evaluating, and publishing scientific papers.',
      art2i2: 'Ensure the quality and originality of accepted research.',
      art2i3: 'Promote transparency and fairness in peer review and publication procedures.',
      art2i4: 'Adhere to research ethics and international standards.',
      art3Num: 'Article 3', art3Title: 'Publication Scope',
      art3Intro: 'This policy covers:',
      art3i1: 'Original scientific papers.', art3i2: 'Applied and theoretical studies.', art3i3: 'Working papers related to conference themes.',
      art3Extra: 'Accepted papers will be published in the <strong>Conference Proceedings Book</strong> or via an electronic platform. Outstanding papers only will be published in the <strong>Al-Refak Knowledge Journal</strong>.',
      art4Num: 'Article 4', art4Title: 'Paper Acceptance Requirements',
      art4Intro: 'The following conditions must be met for paper acceptance:',
      art4i1: 'Papers are accepted in Arabic or English with an abstract translated into the opposite language.',
      art4i2: 'Must be original and previously unpublished.', art4i3: 'Must not be submitted for publication elsewhere.',
      art4i4: 'Must align with conference themes.', art4i5: 'Must follow the paper preparation guidelines.',
      art4i6: 'Must adhere to proper scientific documentation.', art4i7: 'Must successfully pass peer review.',
      art4i8: 'Similarity ratio must not exceed 20%.', art4i9: 'Required revisions must be completed within the specified timeframe.',
      art5Num: 'Article 5', art5Title: 'Evaluation and Publication Procedures',
      art5Intro: 'The publication process proceeds through the following stages:',
      fs1: 'Submission via the official platform.', fs2: 'Initial screening by the Scientific Committee.', fs3: 'Plagiarism check.',
      fs4: 'Peer review (double-blind).', fs5: 'Sending feedback to the author.', fs6: 'Receiving the revised version.',
      fs7: 'Final decision.', fs8: 'Inclusion in conference proceedings.',
      art6Num: 'Article 6', art6Title: 'Peer Review',
      art6i1: 'The conference adopts the Double-Blind Review system.', art6i2: 'At least two reviewers are assigned per paper.',
      art6i3: 'A third reviewer may be consulted if needed.', art6i4: 'All review data is kept confidential.',
      art7Num: 'Article 7', art7Title: 'Publication Ethics',
      art7s1: 'I. Scientific Committee', art7s1i1: 'Ensure fairness and transparency.', art7s1i2: 'Maintain information confidentiality.', art7s1i3: 'Handle complaints and violations.',
      art7s2: 'II. Reviewers', art7s2i1: 'Commitment to objectivity.', art7s2i2: 'Maintain confidentiality.', art7s2i3: 'Disclose conflicts of interest.',
      art7s3: 'III. Researchers', art7s3i1: 'Commitment to scientific integrity.', art7s3i2: 'Accurate source documentation.', art7s3i3: 'No simultaneous submission to multiple venues.', art7s3i4: 'Disclose any conflicts of interest.',
      art8Num: 'Article 8', art8Title: 'Conflict of Interest',
      art8i1: 'All parties must disclose any conflicts of interest.', art8i2: 'Any reviewer or committee member with a conflict of interest must be excluded.', art8i3: 'The conference may reject or withdraw a paper if disclosure is not made.',
      art9Num: 'Article 9', art9Title: 'Plagiarism and Scientific Misconduct',
      art9i1: 'All papers are checked using plagiarism detection software.', art9i2: 'Maximum similarity threshold: 20%.', art9i3: 'Papers are rejected if the threshold is exceeded or plagiarism is proven.', art9i4: 'Papers are withdrawn if plagiarism is discovered after acceptance or publication.',
      art10Num: 'Article 10', art10Title: 'Copyright and Intellectual Property',
      art10i1: 'The author retains intellectual property rights to their research.', art10i2: 'The author grants the conference a non-exclusive license to publish.', art10i3: 'The conference must be cited when reusing the research.',
      art11Num: 'Article 11', art11Title: 'Open Access',
      art11i1: 'Conference proceedings are freely available to researchers.', art11i2: 'Non-commercial use is permitted with proper source attribution.',
      art12Num: 'Article 12', art12Title: 'Participation and Publication Fees',
      art12Free: 'All registration, participation, and publication activities are completely free of charge',
      art13Num: 'Article 13', art13Title: 'Archiving and Electronic Publication',
      art13i1: 'Papers are published electronically within conference proceedings.', art13i2: 'They may be included in scientific databases.', art13i3: 'Authors are permitted to archive their papers with reference to the conference.',
      art14Num: 'Article 14', art14Title: 'Paper Retraction',
      art14Intro: 'The Scientific Committee has the right to retract any paper in the following cases:',
      art14i1: 'Scientific plagiarism.', art14i2: 'Falsification or manipulation of data.', art14i3: 'Violation of publication ethics.',
      art15Num: 'Article 15', art15Title: 'Appeals and Complaints',
      art15i1: 'An appeals and complaints committee is formed by decision of the conference Scientific Committee Chair, according to the appellant\'s specialization and field.', art15i2: 'Authors have the right to submit an appeal within the specified period.', art15i3: 'Appeals are referred to an independent scientific committee for resolution.',
      art16Num: 'Article 16', art16Title: 'Disclaimer',
      art16Text: 'Opinions expressed in research papers represent the views of their authors only. The organizing body and Scientific Committee bear no responsibility for their content.',
      art17Num: 'Article 17', art17Title: 'Regulation Review',
      art17Text: 'This regulation is an integral part of the conference organization guide approved by the Ministry of Higher Education and Scientific Research. It is reviewed before each conference session, or as needed, to ensure alignment with modern academic standards.',
      approvalTitle: 'Approved by', approvalName: 'Vice President for Academic Affairs and Scientific Research',
      footerUniv: 'Al-Refak University of Applied and Human Sciences', footerTagline: 'Excellence, Integrity & Transparency',
      footerNavTitle: 'Quick Links', fAbout: 'About Conference', fThemes: 'Themes', fGuide: 'Participation Guidelines',
      fDates: 'Important Dates', fContact: 'Contact',
      footerContactTitle: 'Contact Information', footerPhone: 'Phone:', footerEmail: 'Email:', footerAddr: 'Address:',
      footerAddrVal: 'Tripoli - Al-Jumhuriya Street', footerCopyright: '© 2026 Al-Refak University of Applied and Human Sciences - All Rights Reserved',
    }
  };

  const navSelMap = {
    navHome: '.nav-link[href="index.html"]',
    navAbout: '.nav-link[href="index.html#about"]',
    navThemes: '.nav-link[href="index.html#themes"]',
    navGuidelines: '.nav-link[href="index.html#guidelines"]',
    navDates: '.nav-link[href="index.html#dates"]',
    navContact: '.nav-link[href="index.html#contact"]',
  };

  function applyLang(lang) {
    const t = translations[lang];
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    langToggle.textContent = lang === 'ar' ? 'English' : 'عربي';

    // Navbar
    const navPageToggle = document.querySelector('.nav-dropdown-toggle');
    if (navPageToggle) navPageToggle.childNodes[0].textContent = t.navPages + ' ';
    const ddLinks = document.querySelectorAll('.dropdown-menu li a');
    if (ddLinks[0]) ddLinks[0].textContent = t.ddOrg;
    if (ddLinks[1]) ddLinks[1].textContent = t.ddReview;
    if (ddLinks[2]) ddLinks[2].textContent = t.ddPub;
    const logoTitleEl = document.querySelector('.logo-title');
    const logoSubEl = document.querySelector('.logo-sub');
    if (logoTitleEl) logoTitleEl.textContent = t.logoTitle;
    if (logoSubEl) logoSubEl.textContent = t.logoSub;
    for (const [key, sel] of Object.entries(navSelMap)) {
      const el = document.querySelector(sel);
      if (el) el.textContent = t[key];
    }

    // Hero
    const badge = document.querySelector('.hero-badge');
    if (badge) badge.innerHTML = badge.innerHTML.replace(/[\u0600-\u06FF\w\s]+$/, '') + t.heroBadge;
    const heroH1 = document.querySelector('.subpage-hero h1');
    if (heroH1) heroH1.innerHTML = t.heroTitle;
    const heroP = document.querySelector('.subpage-hero p');
    if (heroP) heroP.textContent = t.heroSub;
    const bcSpans = document.querySelectorAll('.breadcrumb span');
    const bcLinks = document.querySelectorAll('.breadcrumb a');
    if (bcLinks[0]) bcLinks[0].textContent = t.breadHome;
    if (bcSpans[1]) bcSpans[1].textContent = t.breadCurrent;

    // Intro card (Article 1)
    const introH3 = document.querySelector('.policy-intro-card h3');
    if (introH3) introH3.textContent = t.art1Title;
    const introP = document.querySelector('.policy-intro-card p');
    if (introP) introP.textContent = t.art1Text;

    // Article sections
    const arts = document.querySelectorAll('.article-section');
    const artData = [
      { num: t.art2Num, title: t.art2Title, items: [t.art2i1, t.art2i2, t.art2i3, t.art2i4] },
      { num: t.art3Num, title: t.art3Title, intro: t.art3Intro, items: [t.art3i1, t.art3i2, t.art3i3], extra: t.art3Extra },
      { num: t.art4Num, title: t.art4Title, intro: t.art4Intro, items: [t.art4i1, t.art4i2, t.art4i3, t.art4i4, t.art4i5, t.art4i6, t.art4i7, t.art4i8, t.art4i9] },
      { num: t.art5Num, title: t.art5Title, intro: t.art5Intro, stages: [t.fs1, t.fs2, t.fs3, t.fs4, t.fs5, t.fs6, t.fs7, t.fs8] },
      { num: t.art6Num, title: t.art6Title, items: [t.art6i1, t.art6i2, t.art6i3, t.art6i4] },
      { num: t.art7Num, title: t.art7Title, ethics7: true },
      { num: t.art8Num, title: t.art8Title, items: [t.art8i1, t.art8i2, t.art8i3] },
      { num: t.art9Num, title: t.art9Title, items: [t.art9i1, t.art9i2, t.art9i3, t.art9i4] },
      { num: t.art10Num, title: t.art10Title, items: [t.art10i1, t.art10i2, t.art10i3] },
      { num: t.art11Num, title: t.art11Title, items: [t.art11i1, t.art11i2] },
      { num: t.art12Num, title: t.art12Title, free: t.art12Free },
      { num: t.art13Num, title: t.art13Title, items: [t.art13i1, t.art13i2, t.art13i3] },
      { num: t.art14Num, title: t.art14Title, intro: t.art14Intro, items: [t.art14i1, t.art14i2, t.art14i3] },
      { num: t.art15Num, title: t.art15Title, items: [t.art15i1, t.art15i2, t.art15i3] },
      { num: t.art16Num, title: t.art16Title, text: t.art16Text },
      { num: t.art17Num, title: t.art17Title, text: t.art17Text },
    ];
    arts.forEach((art, i) => {
      const d = artData[i]; if (!d) return;
      const numEl = art.querySelector('.article-num'); if (numEl) numEl.textContent = d.num;
      const h3 = art.querySelector('h3'); if (h3) h3.textContent = d.title;
      if (d.text !== undefined) {
        const p = art.querySelector('.article-body p');
        if (p) p.textContent = d.text;
      }
      if (d.intro) {
        const p = art.querySelector('.article-body > p');
        if (p) p.textContent = d.intro;
      }
      if (d.extra) {
        const ps = art.querySelectorAll('.article-body p');
        if (ps[1]) ps[1].innerHTML = d.extra;
      }
      if (d.items) {
        const lis = art.querySelectorAll('.policy-list li');
        lis.forEach((li, j) => { if (d.items[j] !== undefined) li.textContent = d.items[j]; });
      }
      if (d.stages) {
        const fps = art.querySelectorAll('.flow-step p');
        fps.forEach((p, j) => { if (d.stages[j] !== undefined) p.textContent = d.stages[j]; });
      }
      if (d.free) {
        const fb = art.querySelector('.free-badge');
        if (fb) fb.childNodes[fb.childNodes.length - 1].textContent = ' ' + d.free;
      }
      if (d.ethics7) {
        const subs = art.querySelectorAll('.subsection-title');
        const lists = art.querySelectorAll('.policy-list');
        if (subs[0]) subs[0].textContent = t.art7s1;
        if (subs[1]) subs[1].textContent = t.art7s2;
        if (subs[2]) subs[2].textContent = t.art7s3;
        const s1items = [t.art7s1i1, t.art7s1i2, t.art7s1i3];
        const s2items = [t.art7s2i1, t.art7s2i2, t.art7s2i3];
        const s3items = [t.art7s3i1, t.art7s3i2, t.art7s3i3, t.art7s3i4];
        [s1items, s2items, s3items].forEach((items, li) => {
          if (lists[li]) lists[li].querySelectorAll('li').forEach((el, k) => { if (items[k]) el.textContent = items[k]; });
        });
      }
    });

    // Approval box
    const approvalH4 = document.querySelector('.approval-box h4');
    const approvalP = document.querySelector('.approval-box p');
    if (approvalH4) approvalH4.textContent = t.approvalTitle;
    if (approvalP) approvalP.textContent = t.approvalName;

    // Footer
    const ids = ['footerUniv','footerTagline','footerNavTitle','fAbout','fThemes','fGuide','fDates','fContact','footerContactTitle','footerPhone','footerEmail','footerAddr','footerAddrVal','footerCopyright'];
    ids.forEach(id => { const el = document.getElementById(id); if (el && t[id]) el.textContent = t[id]; });
  }

  applyLang(currentLang);
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('arefak_lang', currentLang);
    applyLang(currentLang);
  });

  // ===== Navbar (identical to main page) =====
  initNavbar();

  });
})();
