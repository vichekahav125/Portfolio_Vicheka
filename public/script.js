document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const navLinks = Array.from(document.querySelectorAll(".nav-link"));
    const navbar = document.querySelector(".navbar");
    const langButtons = Array.from(document.querySelectorAll(".lang-btn[data-lang]"));

    const translations = {
        en: {
            navHome: "Home",
            navAbout: "About",
            navSkills: "Skills",
            navExperience: "Experience",
            navContact: "Contact",
            talkBtn: "Let's Talk",
            heroKicker: "WELCOME TO MY WORLD",
            heroTitle: "Hi, I'm <span class=\"hero-name\">VICHEKA</span><br>A Student at PNC",
            heroTagline: "I passionated about Front-End Developer and QA testing.",
            heroProjects: "My Projects",
            heroTalk: "Let's Talk",
            aboutKicker: "MY BIOGRAPHY",
            aboutHeading: "Who is <span class=\"hero-name\">VICHEKA</span>?",
            aboutBody: "She is a student who likes technology and coding. She likes learning new things. She is responsible, curious, and always wants to improve herself by practicing and studying. She can communicate well and works seriously in interviews and team activities.",
            aboutYears: "1+",
            aboutYearsLabel: "Years Experience",
            aboutEduLabel: "Education",
            aboutEduValue: "PNC 2026",
            aboutAvailLabel: "Availability",
            aboutAvailValue: "Frontend developer & QA tester",
            aboutCvBtn: "Download CV",
            skillsTitle: "My Skills",
            softSkills: "Soft Skills",
            hardSkills: "Hard Skills",
            experienceTitle: "Full Experience",
            experienceIntro: "School projects with role-based responsibilities across development, QA, deployment, automation, and UX/UI design.",
            contactTitle: "Get In Touch",
            contactIntro: "Feel free to reach out to me for any opportunities or just to say hello!",
            phoneTitle: "Phone",
            callMe: "Call Me",
            telegramTitle: "Telegram",
            msgTelegram: "Message on Telegram",
            educationTitle: "Education",
            educationRole: "Web Development Student",
            learnMore: "Learn More",
            footerBuilt: "Built with HTML, CSS & JavaScript"
        },
        km: {
            navHome: "ទំព័រដើម",
            navAbout: "អំពីខ្ញុំ",
            navSkills: "ជំនាញ",
            navExperience: "បទពិសោធន៍",
            navContact: "ទំនាក់ទំនង",
            talkBtn: "មកនិយាយគ្នា",
            heroKicker: "ស្វាគមន៍មកកាន់ពិភពលោករបស់ខ្ញុំ",
            heroTitle: "សួស្តី ខ្ញុំឈ្មោះ <span class=\"hero-name\">VICHEKA</span><br>ជានិស្សិតនៅ PNC",
            heroTagline: "ខ្ញុំមានចំណង់ចំណូលចិត្តលើ Front-End Development និង QA Testing។",
            heroProjects: "គម្រោងរបស់ខ្ញុំ",
            heroTalk: "មកនិយាយគ្នា",
            aboutKicker: "ប្រវត្តិរូបរបស់ខ្ញុំ",
            aboutHeading: "តើ <span class=\"hero-name\">VICHEKA</span> ជានរណា?",
            aboutBody: "នាងជានិស្សិតដែលចូលចិត្តបច្ចេកវិទ្យា និងការសរសេរកូដ។ នាងចូលចិត្តរៀនអ្វីថ្មីៗជានិច្ច។ នាងមានការទទួលខុសត្រូវ មានចិត្តចង់ដឹងចង់ឃើញ និងតែងតែចង់អភិវឌ្ឍខ្លួនឯងតាមរយៈការអនុវត្ត និងការសិក្សា។ នាងអាចទំនាក់ទំនងបានល្អ ហើយធ្វើការយ៉ាងម៉ត់ចត់ក្នុងការសម្ភាសន៍ និងសកម្មភាពការងារជាក្រុម។",
            aboutYears: "1+",
            aboutYearsLabel: "ឆ្នាំបទពិសោធន៍",
            aboutEduLabel: "ការអប់រំ",
            aboutEduValue: "PNC 2026",
            aboutAvailLabel: "ស្ថានភាពការងារ",
            aboutAvailValue: "Freelance និង Full-time",
            aboutCvBtn: "ទាញយក CV",
            skillsTitle: "ជំនាញរបស់ខ្ញុំ",
            softSkills: "ជំនាញទន់",
            hardSkills: "ជំនាញបច្ចេកទេស",
            experienceTitle: "បទពិសោធន៍ពេញលេញ",
            experienceIntro: "គម្រោងសាលាដែលមានតួនាទីខុសៗគ្នា រួមមានការអភិវឌ្ឍន៍ QA ការដំឡើងប្រព័ន្ធ ស្វ័យប្រវត្តិកម្ម និង UX/UI Design។",
            contactTitle: "ទាក់ទងមកខ្ញុំ",
            contactIntro: "អាចទាក់ទងមកខ្ញុំបានគ្រប់ពេល សម្រាប់ឱកាសការងារ ឬសួរសុខទុក្ខ។",
            phoneTitle: "ទូរស័ព្ទ",
            callMe: "ហៅខ្ញុំ",
            telegramTitle: "តេឡេក្រាម",
            msgTelegram: "ផ្ញើសារតាម Telegram",
            educationTitle: "ការអប់រំ",
            educationRole: "និស្សិតអភិវឌ្ឍន៍វេបសាយ",
            learnMore: "អានបន្ថែម",
            footerBuilt: "បង្កើតដោយ HTML, CSS និង JavaScript"
        }
    };

    const applyLanguage = (lang) => {
        const selected = translations[lang] ? lang : "en";
        const dict = translations[selected];

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.getAttribute("data-i18n");
            if (key && dict[key]) {
                element.textContent = dict[key];
            }
        });

        document.querySelectorAll("[data-i18n-html]").forEach((element) => {
            const key = element.getAttribute("data-i18n-html");
            if (key && dict[key]) {
                element.innerHTML = dict[key];
            }
        });

        langButtons.forEach((button) => {
            button.classList.toggle("active", button.dataset.lang === selected);
        });

        document.documentElement.lang = selected;
        localStorage.setItem("portfolioLang", selected);
    };

    langButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedLang = button.dataset.lang || "en";
            applyLanguage(selectedLang);
        });
    });

    const initialLanguage = localStorage.getItem("portfolioLang") || "en";
    applyLanguage(initialLanguage);

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            const expanded = hamburger.getAttribute("aria-expanded") === "true";
            hamburger.setAttribute("aria-expanded", String(!expanded));
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.forEach((item) => item.classList.remove("active"));
            link.classList.add("active");

            if (hamburger && navMenu) {
                hamburger.classList.remove("active");
                hamburger.setAttribute("aria-expanded", "false");
                navMenu.classList.remove("active");
            }
        });
    });

    const setActiveByScroll = () => {
        const sections = Array.from(document.querySelectorAll("section[id]"));
        const scrollY = window.scrollY + 140;
        let currentId = "home";

        sections.forEach((section) => {
            if (scrollY >= section.offsetTop) {
                currentId = section.id;
            }
        });

        navLinks.forEach((link) => {
            const href = link.getAttribute("href") || "";
            link.classList.toggle("active", href === `#${currentId}`);
        });

        if (navbar) {
            navbar.classList.toggle("scrolled", window.scrollY > 20);
        }
    };

    window.addEventListener("scroll", setActiveByScroll);
    setActiveByScroll();

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const targetId = anchor.getAttribute("href");
            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);
            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && hamburger && navMenu) {
            hamburger.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
            navMenu.classList.remove("active");
        }
    });
});
