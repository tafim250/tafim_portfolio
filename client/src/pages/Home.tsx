import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Facebook,
  FileText,
  Globe2,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { portfolioCopy, type Language } from "@/lib/portfolioContent";

const PORTRAIT = "/manus-storage/1725459965764_203594ed.webp";
const CV = "/manus-storage/MdTafimAhammed_CV_098c3b2c.pdf";
const CERTIFICATE = "/manus-storage/WeixinImage_20261110141032_92_112_f3ed83ff.webp";
const STUDY_PHOTO = "/manus-storage/IMG_20240517_214604_a95dd76e.webp";
const EMAIL = "mdtafim77889@gmail.com";
const PHONE = "+8628383070356";
const FACEBOOK = "https://www.facebook.com/tafim025";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("tafim-language");
    return saved === "zh" || saved === "bn" ? saved : "en";
  });
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const languagePickerRef = useRef<HTMLDivElement>(null);
  const copy = portfolioCopy[language];

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : language;
    localStorage.setItem("tafim-language", language);
  }, [language]);

  useEffect(() => {
    if (!languageMenuOpen) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!languagePickerRef.current?.contains(event.target as Node)) setLanguageMenuOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [languageMenuOpen]);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const navLinks = [
    { href: "#about", label: copy.nav.about },
    { href: "#experience", label: copy.nav.experience },
    { href: "#education", label: copy.nav.education },
    { href: "#contact", label: copy.nav.contact },
  ];

  return (
    <main className="portfolio-shell">
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Md Tafim Ahammed — home" onClick={closeMenu}>
          <span className="brand-seal"><span>TA</span><i>译</i></span>
          <span className="brand-name">Md Tafim Ahammed<span className="brand-dot">.</span></span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label={language === "zh" ? "主导航" : language === "bn" ? "প্রধান নেভিগেশন" : "Main navigation"}>
          {navLinks.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>{copy.nav.hire}<ArrowUpRight size={15} /></a>
        </nav>
        <div className="header-tools">
          <div className="language-picker" ref={languagePickerRef}>
            <button
              className="language-toggle"
              type="button"
              aria-label={`${copy.language}: ${copy.languageNames[language]}`}
              aria-expanded={languageMenuOpen}
              aria-controls="language-menu"
              title={copy.language}
              onClick={() => setLanguageMenuOpen((open) => !open)}
              onKeyDown={(event) => { if (event.key === "Escape") setLanguageMenuOpen(false); }}
            >
              <Globe2 size={19} aria-hidden="true" />
              <span className="language-indicator" aria-hidden="true" />
            </button>
            <div className="language-menu" id="language-menu" role="group" aria-label={copy.language} hidden={!languageMenuOpen}>
                {(["en", "zh", "bn"] as Language[]).map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={language === item}
                    onClick={() => { setLanguage(item); setLanguageMenuOpen(false); }}
                  >
                    <span>{copy.languageNames[item]}</span>
                    {language === item && <span className="language-check" aria-hidden="true">✓</span>}
                  </button>
                ))}
            </div>
          </div>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? (language === "zh" ? "关闭菜单" : language === "bn" ? "মেনু বন্ধ করুন" : "Close menu") : (language === "zh" ? "打开菜单" : language === "bn" ? "মেনু খুলুন" : "Open menu")} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <Reveal>
            <div className="eyebrow"><span className="eyebrow-line" />{copy.eyebrow}</div>
            <p className="hero-role"><span className="status-dot" />{copy.role}</p>
            <h1>{copy.heroTitle}<br /><span>{copy.heroAccent}</span></h1>
            <p className="hero-description">{copy.heroText}</p>
            <div className="hero-actions">
              <a className="button button-dark" href={CV} target="_blank" rel="noreferrer">{copy.viewCv}<ArrowUpRight size={17} /></a>
              <a className="text-link" href="#contact">{copy.contactMe}<ArrowDownRight size={17} /></a>
            </div>
            <div className="hero-meta"><MapPin size={15} strokeWidth={1.7} /><span>{copy.location}</span></div>
          </Reveal>
        </div>
        <Reveal className="hero-visual" delay={0.12}>
          <div className="portrait-frame">
            <img src={PORTRAIT} alt="Portrait of Md Tafim Ahammed wearing a headset" fetchPriority="high" />
            <div className="portrait-overlay" />
            <div className="portrait-caption"><span className="caption-number">01 /</span><span>{copy.profileLabel}</span></div>
          </div>
          <div className="portrait-stamp" aria-hidden="true"><span>LANGUAGE</span><b>译</b><span>CONNECTS</span></div>
        </Reveal>
        <a className="scroll-cue" href="#about"><span>{copy.scroll}</span><ArrowDown size={15} /></a>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="section-index"><span>01</span><span className="index-rule" /></div>
        <div className="about-layout">
          <Reveal className="about-heading">
            <p className="section-kicker">{copy.profileLabel}</p>
            <h2>{copy.aboutTitle}</h2>
          </Reveal>
          <Reveal className="about-body" delay={0.1}>
            <p>{copy.aboutText}</p>
            <div className="about-quote"><span>“</span><p>{copy.aboutQuote}</p></div>
            <figure className="about-photo">
              <img src={STUDY_PHOTO} alt={language === "zh" ? "Md Tafim Ahammed 在桌前阅读和书写" : language === "bn" ? "Md Tafim Ahammed ডেস্কে বসে পড়ছেন ও লিখছেন" : "Md Tafim Ahammed reading and writing at a desk"} loading="lazy" />
              <figcaption>{language === "zh" ? "认真阅读每一页" : language === "bn" ? "প্রতিটি লেখা মনোযোগ দিয়ে পড়ি" : "Reading with care"}</figcaption>
            </figure>
            <a className="inline-link" href={CV} target="_blank" rel="noreferrer">{copy.cvAction}<ArrowUpRight size={15} /></a>
          </Reveal>
        </div>
        <div className="qualification-strip">
          <div><Languages /><strong>HSK 4</strong><span>{language === "zh" ? "普通话" : language === "bn" ? "ম্যান্ডারিন" : "Mandarin"}</span></div>
          <div><BookOpen /><strong>{language === "zh" ? "6个月" : language === "bn" ? "৬ মাস" : "6 months"}</strong><span>{language === "zh" ? "在线教学" : language === "bn" ? "অনলাইন teaching" : "Online teaching"}</span></div>
          <div><GraduationCap /><strong>2024–2027</strong><span>{language === "zh" ? "专科课程" : language === "bn" ? "ডিপ্লোমা পড়াশোনা" : "Diploma studies"}</span></div>
        </div>
      </section>

      <section className="experience-section section-pad" id="experience">
        <div className="section-index"><span>02</span><span className="index-rule" /></div>
        <div className="section-heading-row">
          <Reveal><p className="section-kicker">{copy.experienceLabel}</p><h2>{copy.experienceTitle}</h2></Reveal>
          <span className="section-side-note">{language === "zh" ? "实践 · 成长 · 沟通" : language === "bn" ? "অভিজ্ঞতা · শেখা · যোগাযোগ" : "Practice · learning · communication"}</span>
        </div>
        <div className="experience-list">
          {[
            { title: copy.teaching, text: copy.teachingText, icon: Languages, tag: language === "zh" ? "6个月" : language === "bn" ? "৬ মাস" : "6 months" },
            { title: copy.translator, text: copy.translatorText, icon: FileText, tag: language === "zh" ? "自由职业" : language === "bn" ? "ফ্রিল্যান্স" : "Freelance" },
            { title: copy.analyst, text: copy.analystText, icon: BriefcaseBusiness, tag: language === "zh" ? "自由职业" : language === "bn" ? "ফ্রিল্যান্স" : "Freelance" },
          ].map((item, index) => {
            const Icon = item.icon;
            return <Reveal key={item.title} className="experience-row" delay={index * 0.08}>
              <div className="experience-icon"><Icon size={19} strokeWidth={1.6} /></div>
              <div className="experience-content"><div className="experience-title-line"><h3>{item.title}</h3><span className="experience-tag">{item.tag}</span></div><p>{item.text}</p></div>
              <span className="experience-index">0{index + 1}</span>
            </Reveal>;
          })}
        </div>
      </section>

      <section className="education-section section-pad" id="education">
        <div className="section-index"><span>03</span><span className="index-rule" /></div>
        <div className="education-layout">
          <Reveal className="education-intro"><p className="section-kicker">{copy.educationLabel}</p><h2>{copy.educationTitle}</h2><p className="education-note">{language === "zh" ? "持续学习 · 稳步前行" : language === "bn" ? "শেখা চলুক · এগিয়ে যাই" : "Learning continuously, moving forward."}</p></Reveal>
          <div className="education-content">
            <Reveal className="education-card"><span className="education-icon"><GraduationCap size={20} /></span><div><p className="card-overline">{language === "zh" ? "专科文凭" : language === "bn" ? "ডিপ্লোমা" : "Diploma"}</p><h3>{copy.diploma}</h3><p>{copy.diplomaDetail}</p></div><span className="education-date">{language === "zh" ? "2027年6月" : language === "bn" ? "জুন ২০২৭" : "Jun 2027"}</span></Reveal>
            <Reveal className="education-card education-card-secondary" delay={0.1}><span className="education-icon"><BookOpen size={19} /></span><div><p className="card-overline">{language === "zh" ? "中等教育" : language === "bn" ? "মাধ্যমিক শিক্ষা" : "School education"}</p><h3>{copy.school}</h3><p>{copy.schoolDetail}</p></div></Reveal>
          </div>
        </div>
        <div className="credentials-skills">
          <Reveal className="credentials-block"><p className="section-kicker">{copy.credentialsLabel}</p><h3>{copy.credentialsTitle}</h3><ul>{copy.credentials.map((item) => <li key={item}><span className="checkmark">✓</span>{item}</li>)}</ul>
            <a className="training-proof" href={CERTIFICATE} target="_blank" rel="noreferrer">
              <img src={CERTIFICATE} alt="Chinese-language certificate for the October–November 2026 short-term training" loading="lazy" />
              <span className="training-proof-copy">
                <small>{language === "zh" ? "培训证明" : language === "bn" ? "প্রশিক্ষণের সনদ" : "Training certificate"}</small>
                <strong>{language === "zh" ? "数据采集、分析与可视化" : language === "bn" ? "Data acquisition, analysis ও visualization" : "Data acquisition, analysis & visualization"}</strong>
                <span>{language === "zh" ? "2026年10月8日—11月8日 · 考核合格" : language === "bn" ? "৮ অক্টোবর–৮ নভেম্বর ২০২৬ · মূল্যায়নে উত্তীর্ণ" : "8 Oct–8 Nov 2026 · Assessment passed"}</span>
              </span>
              <ArrowUpRight className="training-proof-arrow" size={16} />
            </a>
          </Reveal>
          <Reveal className="skills-block" delay={0.08}><p className="section-kicker">{copy.skillsLabel}</p><h3>{copy.skillsTitle}</h3><div className="skill-pills">{copy.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></Reveal>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="section-index section-index-light"><span>04</span><span className="index-rule" /></div>
        <div className="contact-layout">
          <Reveal className="contact-intro"><p className="section-kicker">{copy.contactEyebrow}</p><h2>{copy.contactTitle}</h2><p>{copy.contactText}</p><a className="button button-light" href={`mailto:${EMAIL}`}>{copy.email}<ArrowRight size={17} /></a></Reveal>
          <Reveal className="contact-links" delay={0.1}>
            <a href={`mailto:${EMAIL}`}><span className="contact-icon"><Mail size={18} /></span><span><small>{copy.email}</small><strong>{EMAIL}</strong></span><ArrowUpRight className="contact-arrow" size={17} /></a>
            <a href={`tel:${PHONE}`}><span className="contact-icon"><Phone size={18} /></span><span><small>{copy.phone}</small><strong>{PHONE}</strong></span><ArrowUpRight className="contact-arrow" size={17} /></a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer"><span className="contact-icon"><Facebook size={18} /></span><span><small>{copy.facebook}</small><strong>tafim025</strong></span><ArrowUpRight className="contact-arrow" size={17} /></a>
            <a className="cv-contact-link" href={CV} target="_blank" rel="noreferrer"><span className="contact-icon"><FileText size={18} /></span><span><small>{copy.cvAction}</small><strong>MdTafimAhammed_CV.pdf</strong></span><ArrowUpRight className="contact-arrow" size={17} /></a>
          </Reveal>
        </div>
      </section>

      <footer className="site-footer"><a className="brand footer-brand" href="#top"><span className="brand-seal"><span>TA</span><i>译</i></span><span className="brand-name">Md Tafim Ahammed<span className="brand-dot">.</span></span></a><p>{copy.footer}</p><a className="back-top" href="#top">{language === "zh" ? "回到顶部" : language === "bn" ? "উপরে ফিরুন" : "Back to top"}<ArrowUpRight size={14} /></a></footer>
    </main>
  );
}
