export type Language = "en" | "zh" | "bn";

type Copy = {
  nav: { about: string; experience: string; education: string; contact: string; hire: string };
  language: string;
  eyebrow: string;
  heroTitle: string;
  heroAccent: string;
  heroText: string;
  viewCv: string;
  contactMe: string;
  scroll: string;
  location: string;
  profileLabel: string;
  aboutTitle: string;
  aboutText: string;
  aboutQuote: string;
  experienceLabel: string;
  experienceTitle: string;
  teaching: string;
  teachingText: string;
  translator: string;
  translatorText: string;
  analyst: string;
  analystText: string;
  educationLabel: string;
  educationTitle: string;
  diploma: string;
  diplomaDetail: string;
  school: string;
  schoolDetail: string;
  credentialsLabel: string;
  credentialsTitle: string;
  credentials: string[];
  skillsLabel: string;
  skillsTitle: string;
  skills: string[];
  contactEyebrow: string;
  contactTitle: string;
  contactText: string;
  email: string;
  phone: string;
  facebook: string;
  footer: string;
  cvAction: string;
  role: string;
  languageNames: Record<Language, string>;
};

export const portfolioCopy: Record<Language, Copy> = {
  en: {
    nav: { about: "About", experience: "Experience", education: "Education", contact: "Contact", hire: "Let's talk" },
    language: "Language",
    eyebrow: "Mandarin · Translation · Communication",
    heroTitle: "Words that connect.",
    heroAccent: "Ideas that travel.",
    heroText: "I’m Md Tafim Ahammed — a student and Mandarin translator building a career around thoughtful, cross-language communication.",
    viewCv: "View my CV",
    contactMe: "Get in touch",
    scroll: "Scroll to explore",
    location: "Luzhou, Sichuan, China",
    profileLabel: "A little about me",
    aboutTitle: "Curious about language. Careful with meaning.",
    aboutText: "I’m studying Big Data Science at Luzhou Vocational and Technical College and have completed HSK 4 in Mandarin. Alongside my studies, I’ve taught Mandarin online and worked on Chinese-to-English translation and bilingual content review.",
    aboutQuote: "Clear language makes room for better understanding.",
    experienceLabel: "What I’ve done",
    experienceTitle: "Experience with words and learning.",
    teaching: "Online Mandarin Tutor",
    teachingText: "Delivered online Mandarin lessons focused on HSK preparation and everyday conversation. Six months of teaching experience.",
    translator: "Freelance Translator & Content Reviewer",
    translatorText: "Translated Chinese documents, PDFs and voice-over scripts into English; reviewed and proofread bilingual content for context and grammar.",
    analyst: "Freelance Data Analyst",
    analystText: "Processed and interpreted small-to-medium datasets, identifying patterns to support project insights.",
    educationLabel: "Learning journey",
    educationTitle: "Building a strong foundation.",
    diploma: "Diploma in Big Data Science",
    diplomaDetail: "Luzhou Vocational and Technical College · China · 2024–2027 · expected graduation June 2027",
    school: "Secondary School Certificate (SSC)",
    schoolDetail: "Anwar Technical School and Science Technology College · Dhaka",
    credentialsLabel: "Credentials",
    credentialsTitle: "Language, learning & recognition.",
    credentials: ["HSK 4 and HSK 3 · Mandarin", "Chinese Reading Competition Award · 2025", "High School Academic Excellence recognition", "Short-term training · 8 Oct–8 Nov 2026 · passed assessment"],
    skillsLabel: "Skills",
    skillsTitle: "A practical mix of skills.",
    skills: ["Mandarin translation", "Document translation", "Bilingual content review", "Proofreading", "Bilingual communication", "Data management"],
    contactEyebrow: "Open to opportunities",
    contactTitle: "Let’s make understanding easier.",
    contactText: "For Mandarin interpreting, translation, or related opportunities, I’d be glad to hear from you.",
    email: "Email",
    phone: "Phone",
    facebook: "Facebook",
    footer: "A language portfolio by Md Tafim Ahammed.",
    cvAction: "Open CV (PDF)",
    role: "Student · Mandarin Translator",
    languageNames: { en: "English", zh: "中文", bn: "বাংলা" },
  },
  zh: {
    nav: { about: "关于", experience: "经历", education: "教育", contact: "联系", hire: "联系我" },
    language: "语言",
    eyebrow: "普通话 · 翻译 · 沟通",
    heroTitle: "让语言连接彼此，",
    heroAccent: "让思想自由传达。",
    heroText: "我是 Md Tafim Ahammed，一名学生和普通话译者，致力于跨语言沟通与表达。",
    viewCv: "查看简历",
    contactMe: "联系我",
    scroll: "向下探索",
    location: "中国四川省泸州市",
    profileLabel: "关于我",
    aboutTitle: "保持好奇，认真传达每一层含义。",
    aboutText: "我目前在泸州职业技术学院学习大数据技术，已通过汉语 HSK 四级。在学习之余，我曾在线教授普通话，并从事中译英翻译和双语内容审校。",
    aboutQuote: "清晰的语言，让彼此更好地理解。",
    experienceLabel: "实践经历",
    experienceTitle: "在语言与学习中积累经验。",
    teaching: "在线普通话教师",
    teachingText: "在线教授普通话，课程侧重 HSK 备考与日常会话，拥有六个月教学经验。",
    translator: "自由译者与内容审校",
    translatorText: "将中文文件、PDF 和配音稿翻译成英文；审阅并校对双语内容的语境与语法。",
    analyst: "自由数据分析师",
    analystText: "处理并解读小型至中型数据集，发现有助于项目洞察的规律。",
    educationLabel: "学习经历",
    educationTitle: "稳步夯实专业基础。",
    diploma: "大数据技术专科文凭",
    diplomaDetail: "泸州职业技术学院 · 中国 · 2024–2027 · 预计2027年6月毕业",
    school: "中等教育证书（SSC）",
    schoolDetail: "Anwar Technical School and Science Technology College · 达卡",
    credentialsLabel: "证书与荣誉",
    credentialsTitle: "语言能力、学习与认可。",
    credentials: ["汉语 HSK 四级及三级", "中文阅读比赛奖 · 2025", "高中学业优秀表彰", "短期培训 · 2026年10月8日–11月8日 · 考核合格"],
    skillsLabel: "技能",
    skillsTitle: "兼具语言与实务能力。",
    skills: ["普通话翻译", "文件翻译", "双语内容审校", "校对", "双语沟通", "数据管理"],
    contactEyebrow: "欢迎合作机会",
    contactTitle: "让沟通更清晰。",
    contactText: "如有普通话口译、翻译或相关工作机会，欢迎与我联系。",
    email: "电子邮件",
    phone: "电话",
    facebook: "Facebook",
    footer: "Md Tafim Ahammed 的语言作品集。",
    cvAction: "打开简历 (PDF)",
    role: "学生 · 普通话译者",
    languageNames: { en: "English", zh: "中文", bn: "বাংলা" },
  },
  bn: {
    nav: { about: "পরিচিতি", experience: "অভিজ্ঞতা", education: "শিক্ষা", contact: "যোগাযোগ", hire: "কথা বলুন" },
    language: "ভাষা",
    eyebrow: "ম্যান্ডারিন · অনুবাদ · যোগাযোগ",
    heroTitle: "ভাষায় তৈরি হোক সংযোগ।",
    heroAccent: "ভাবনা পৌঁছাক বহুদূর।",
    heroText: "আমি Md Tafim Ahammed—একজন শিক্ষার্থী ও ম্যান্ডারিন অনুবাদক। আন্তভাষিক যোগাযোগকে পেশা হিসেবে গড়ে তুলছি।",
    viewCv: "CV দেখুন",
    contactMe: "যোগাযোগ করুন",
    scroll: "আরও দেখতে স্ক্রল করুন",
    location: "লুঝৌ, সিচুয়ান, চীন",
    profileLabel: "আমার পরিচয়",
    aboutTitle: "ভাষার প্রতি কৌতূহল, অর্থ প্রকাশে যত্ন।",
    aboutText: "আমি Luzhou Vocational and Technical College-এ Big Data Science-এ পড়ছি এবং Mandarin-এ HSK 4 সম্পন্ন করেছি। পড়াশোনার পাশাপাশি অনলাইনে Mandarin শেখানো এবং Chinese-to-English অনুবাদ ও দ্বিভাষিক কনটেন্ট রিভিউয়ের কাজ করেছি।",
    aboutQuote: "স্পষ্ট ভাষা তৈরি করে পারস্পরিক বোঝাপড়ার সুযোগ।",
    experienceLabel: "কাজের অভিজ্ঞতা",
    experienceTitle: "ভাষা ও শেখানোর বাস্তব অভিজ্ঞতা।",
    teaching: "অনলাইন Mandarin Tutor",
    teachingText: "HSK প্রস্তুতি ও দৈনন্দিন কথোপকথনকেন্দ্রিক Mandarin ক্লাস নিয়েছি। অনলাইন teaching অভিজ্ঞতা ৬ মাস।",
    translator: "ফ্রিল্যান্স অনুবাদক ও কনটেন্ট রিভিউয়ার",
    translatorText: "Chinese নথি, PDF ও voice-over script ইংরেজিতে অনুবাদ করেছি; দ্বিভাষিক কনটেন্টের প্রেক্ষাপট ও ব্যাকরণ যাচাই করেছি।",
    analyst: "ফ্রিল্যান্স Data Analyst",
    analystText: "ছোট ও মাঝারি আকারের dataset প্রক্রিয়াকরণ ও বিশ্লেষণ করে প্রকল্পের জন্য প্রাসঙ্গিক ধারা শনাক্ত করেছি।",
    educationLabel: "শিক্ষাযাত্রা",
    educationTitle: "দক্ষতার ভিত্তি গড়ে তুলছি।",
    diploma: "Diploma in Big Data Science",
    diplomaDetail: "Luzhou Vocational and Technical College · China · 2024–2027 · প্রত্যাশিত সমাপ্তি জুন ২০২৭",
    school: "Secondary School Certificate (SSC)",
    schoolDetail: "Anwar Technical School and Science Technology College · Dhaka",
    credentialsLabel: "সনদ ও স্বীকৃতি",
    credentialsTitle: "ভাষা, শেখা ও অর্জন।",
    credentials: ["Mandarin HSK 4 ও HSK 3", "Chinese Reading Competition Award · 2025", "High School Academic Excellence স্বীকৃতি", "স্বল্পমেয়াদি প্রশিক্ষণ · ৮ অক্টোবর–৮ নভেম্বর ২০২৬ · মূল্যায়নে উত্তীর্ণ"],
    skillsLabel: "দক্ষতা",
    skillsTitle: "ভাষা ও ব্যবহারিক দক্ষতার মিশেল।",
    skills: ["Mandarin অনুবাদ", "নথি অনুবাদ", "দ্বিভাষিক কনটেন্ট রিভিউ", "প্রুফরিডিং", "দ্বিভাষিক যোগাযোগ", "Data management"],
    contactEyebrow: "কাজের সুযোগের জন্য উন্মুক্ত",
    contactTitle: "যোগাযোগকে আরও সহজ করি।",
    contactText: "Mandarin interpreting, translation বা এ-সম্পর্কিত কাজের সুযোগ থাকলে যোগাযোগ করতে পারেন।",
    email: "ইমেইল",
    phone: "ফোন",
    facebook: "Facebook",
    footer: "Md Tafim Ahammed-এর ভাষাভিত্তিক portfolio।",
    cvAction: "CV খুলুন (PDF)",
    role: "শিক্ষার্থী · Mandarin Translator",
    languageNames: { en: "English", zh: "中文", bn: "বাংলা" },
  },
};
