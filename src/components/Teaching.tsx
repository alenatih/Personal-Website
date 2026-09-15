import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ROUTE } from "../constants"
import OceanLittle from "../assets/Ocean-little.png"

// ---------------------------------------------------------------------------
// Shared style tokens — "The Gilded Modern" system used across the site
// (see STYLE_GUIDE.md): amber accents, serif section headings, amber-top
// cards, gray body text.
// ---------------------------------------------------------------------------

const card =
    "group border-t-2 border-t-amber-300 dark:border-t-amber-600 " +
    "bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm " +
    "rounded-lg shadow-md hover:shadow-xl transition-all duration-500"

const chip =
    "inline-flex items-center rounded-full bg-amber-50 dark:bg-amber-900/20 " +
    "border border-amber-200 dark:border-amber-800/40 px-3 py-1 " +
    "text-xs font-medium text-amber-800 dark:text-amber-300"

const label =
    "text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400"

const sectionHeading =
    "text-4xl md:text-5xl font-serif text-gray-900 dark:text-amber-50 tracking-wide"

const divider =
    "h-px w-16 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent dark:from-amber-500 dark:via-amber-400"

// ---------------------------------------------------------------------------
// Bilingual content — transcribed and translated from the source material
// only. No credentials, tactics, or claims are added beyond what was given.
// ---------------------------------------------------------------------------

type Lang = "en" | "ru"

const content = {
    en: {
        eyebrow: "Private English Tutoring",
        name: "Alena Tikhomirova",
        subtitle: "English Teacher & Tutor",
        intro:
            "I help people learn English with confidence — combining a linguistics background, real teaching experience, and years of communicating and working in English every day.",
        ctaPrimary: "Get in touch",
        ctaSecondary: "Why learn with me →",
        quickFactsLabel: "Quick facts",
        quickFacts: [
            "Bachelor's degree in Linguistics",
            "Methods of English Language Teaching (CELTA/TKT)",
            "Translator & interpreter experience",
            "Tutoring experience",
        ],
        whyHeading: "Why Learn With Me",
        whyCards: [
            {
                title: "Real, everyday English",
                description:
                    "I've worked in international companies and startups where every conversation happened in English, and I communicate with native English speakers regularly — in life and online. I teach the English people actually use.",
            },
            {
                title: "A linguist's foundation",
                description:
                    "I hold a Bachelor's degree in Linguistics and successfully completed a course in Methods of English Language Teaching (CELTA/TKT), so lessons are built on real teaching methodology, not just conversation practice.",
            },
            {
                title: "A translator's precision",
                description:
                    "I've worked as a translator and interpreter, which trained me to move carefully between languages — helping me explain grammar, nuance, and meaning clearly, in both English and Russian.",
            },
            {
                title: "English for tech",
                description:
                    "More than 3 years ago I started learning to code, and I'm still learning and building products in tech. So if you work in tech, we can talk about tech in English too.",
            },
        ],
        storyHeading: "Why I Teach",
        storyParagraphs: [
            "I started learning English when I was 5–6 years old, and by the time I was 9 I already knew I wanted to connect my life with languages. That love never left — I'm also learning German and French myself today, which keeps me close to what it actually feels like to be a student.",
            "Along the way I've been a freelance social media manager, translator, interpreter, copywriter, and tutor — which has meant a lot of communication and a lot of problem-solving. I also create content and write a blog in English, so I stay immersed in the language every day, not only when I'm teaching.",
            "I love languages, and I love people. I want to help them — I believe in humanity and want to contribute to its prosperity. I also have several interests outside of teaching, which I find keeps lessons more genuine and human.",
        ],
        languagesHeading: "Languages I Speak",
        contactHeading: "Let's Start Learning Together",
        contactText:
            "If you want to build real confidence in English — for life, work, or tech — I'd love to help.",
    },
    ru: {
        eyebrow: "Частные уроки английского",
        name: "Alena Tikhomirova",
        subtitle: "Преподаватель и репетитор английского языка",
        intro:
            "Я помогаю людям уверенно заговорить на английском — сочетая лингвистическое образование, реальный опыт преподавания и годы общения и работы на английском языке каждый день.",
        ctaPrimary: "Связаться со мной",
        ctaSecondary: "Почему стоит заниматься со мной →",
        quickFactsLabel: "Коротко обо мне",
        quickFacts: [
            "Диплом бакалавра по лингвистике",
            "Курс «Методика преподавания английского языка» (CELTA/TKT)",
            "Опыт письменного и устного перевода",
            "Опыт репетиторства",
        ],
        whyHeading: "Почему стоит заниматься со мной",
        whyCards: [
            {
                title: "Живой, настоящий английский",
                description:
                    "Я работала в международных компаниях и стартапах, где всё общение велось на английском, и до сих пор много общаюсь с носителями языка — в жизни и онлайн. Я учу тому английскому, которым действительно пользуются.",
            },
            {
                title: "Лингвистическая база",
                description:
                    "У меня диплом бакалавра по лингвистике, и я успешно прошла курс «Методика преподавания английского языка» (CELTA/TKT), поэтому занятия строятся на реальной методике, а не только на разговорной практике.",
            },
            {
                title: "Точность переводчика",
                description:
                    "Я работала письменным и устным переводчиком — это научило меня внимательно работать с языком и помогает ясно объяснять грамматику, нюансы и смысл и на английском, и на русском.",
            },
            {
                title: "Английский для IT",
                description:
                    "Больше 3 лет назад я начала учиться программировать и до сих пор учусь и создаю IT-продукты. Поэтому если вы работаете в технологической сфере, мы сможем говорить об этом по-английски.",
            },
        ],
        storyHeading: "Почему я преподаю",
        storyParagraphs: [
            "Я начала учить английский в 5–6 лет, а к 9 годам уже знала, что хочу связать свою жизнь с языками. Эта любовь никуда не делась — сейчас я сама учу немецкий и французский, поэтому хорошо помню, каково это — быть учеником.",
            "За это время я успела поработать фрилансером: SMM-менеджером, письменным и устным переводчиком, копирайтером и репетитором — а это много общения и решения самых разных задач. Я также создаю контент и веду блог на английском, поэтому нахожусь в языковой среде каждый день, а не только на занятиях.",
            "Я люблю языки и люблю людей. Я хочу им помогать — я верю в человечество и хочу вносить вклад в его процветание. У меня есть и другие интересы в жизни, и мне кажется, это делает занятия более живыми и человечными.",
        ],
        languagesHeading: "Мои языки",
        contactHeading: "Начнём заниматься вместе",
        contactText:
            "Если вы хотите обрести настоящую уверенность в английском — для жизни, работы или сферы IT — я буду рада помочь.",
    },
}

const languages = {
    en: [
        { name: "English", level: "Fluent (C1/C2)" },
        { name: "Russian", level: "Native" },
        { name: "German", level: "Intermediate (B1)" },
        { name: "French", level: "Beginner (A1)" },
    ],
    ru: [
        { name: "Английский", level: "Свободно (C1/C2)" },
        { name: "Русский", level: "Родной" },
        { name: "Немецкий", level: "Средний (B1)" },
        { name: "Французский", level: "Начальный (A1)" },
    ],
}

// ---------------------------------------------------------------------------

function Teaching() {
    const [lang, setLang] = useState<Lang>(() => {
        const saved = sessionStorage.getItem("teachingLang")
        return saved === "ru" ? "ru" : "en"
    })

    useEffect(() => {
        sessionStorage.setItem("teachingLang", lang)
    }, [lang])

    const t = content[lang]
    const langList = languages[lang]

    return (
        <div className="w-full">

            {/* Hero */}
            <section className="relative px-4 sm:px-6 md:px-12 pt-4 pb-24 md:pb-36 w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-blue-300/20 dark:from-blue-900/20 dark:via-transparent dark:to-blue-950/20 -z-10 pointer-events-none"></div>

                <div className="max-w-6xl mx-auto">

                    {/* Language switch */}
                    <div className="flex justify-center md:justify-end mb-8">
                        <div className="inline-flex rounded-full border border-amber-200 dark:border-amber-800/40 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm shadow-sm p-1">
                            <button
                                onClick={() => setLang("en")}
                                aria-pressed={lang === "en"}
                                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                                    lang === "en"
                                        ? "bg-amber-200 dark:bg-amber-300 text-gray-800 dark:text-amber-950"
                                        : "text-gray-600 dark:text-gray-400 hover:text-amber-700 dark:hover:text-amber-400"
                                }`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLang("ru")}
                                aria-pressed={lang === "ru"}
                                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                                    lang === "ru"
                                        ? "bg-amber-200 dark:bg-amber-300 text-gray-800 dark:text-amber-950"
                                        : "text-gray-600 dark:text-gray-400 hover:text-amber-700 dark:hover:text-amber-400"
                                }`}
                            >
                                RU
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                        <div className="flex-shrink-0 flex justify-center">
                            <div className="flex flex-col items-center justify-center relative">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 blur-2xl opacity-20"></div>
                                <img
                                    src={OceanLittle}
                                    alt="Alena Tikhomirova"
                                    className="relative h-56 w-56 md:h-72 md:w-72 object-cover rounded-full shadow-xl shadow-blue-200/60 dark:shadow-blue-900/40"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5 max-w-2xl">
                            <span className={label}>{t.eyebrow}</span>

                            <h1 className="text-4xl md:text-6xl font-serif tracking-wide text-gray-900 dark:text-amber-50">
                                <span className="bg-clip-text text-transparent bg-gradient-to-br from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-600">
                                    {t.name}
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl font-light text-gray-700 dark:text-gray-300 leading-relaxed">
                                {t.subtitle}
                            </p>

                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                {t.intro}
                            </p>

                            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mt-2">
                                <Link
                                    to={ROUTE.contact}
                                    className="bg-amber-200 dark:bg-amber-300 text-gray-800 dark:text-amber-950
                                               hover:bg-amber-300 dark:hover:bg-amber-200
                                               py-2 px-8 text-lg font-medium rounded-md
                                               shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                >
                                    {t.ctaPrimary}
                                </Link>
                                <a
                                    href="#why"
                                    className="text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200
                                               rounded-md hover:scale-105 transition-all duration-300 text-lg font-medium"
                                >
                                    {t.ctaSecondary}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick facts */}
                    <div className="flex flex-col items-center mt-14 gap-4">
                        <span className={label}>{t.quickFactsLabel}</span>
                        <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
                            {t.quickFacts.map((fact) => (
                                <span key={fact} className={chip}>{fact}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Learn With Me */}
            <section id="why" className="px-4 sm:px-6 md:px-12 pb-24 md:pb-36 w-full">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-16 gap-4">
                        <h2 className={sectionHeading}>{t.whyHeading}</h2>
                        <div className={divider}></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {t.whyCards.map((c) => (
                            <div key={c.title} className={`${card} p-6`}>
                                <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                                    {c.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {c.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* My Story */}
            <section className="px-4 sm:px-6 md:px-12 pb-24 md:pb-36 w-full bg-gradient-to-br from-blue-400/20 to-blue-900/20 dark:from-blue-900/20 dark:to-blue-950/20 pt-24">
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-12 gap-4">
                        <h2 className={sectionHeading}>{t.storyHeading}</h2>
                        <div className={divider}></div>
                    </div>

                    <div className="flex flex-col gap-5">
                        {t.storyParagraphs.map((p, i) => (
                            <p key={i} className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                {p}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Languages */}
            <section className="px-4 sm:px-6 md:px-12 pt-20 pb-24 md:pb-36 w-full">
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-12 gap-4">
                        <h2 className={sectionHeading}>{t.languagesHeading}</h2>
                        <div className={divider}></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {langList.map((l) => (
                            <div key={l.name} className={`${card} px-5 py-3`}>
                                <span className="font-semibold text-gray-900 dark:text-gray-100">{l.name}</span>
                                <span className="text-gray-500 dark:text-gray-400"> — {l.level}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="relative px-4 sm:px-6 md:px-12 pb-24 md:pb-36 w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-transparent to-blue-300/20 dark:from-amber-600/20 dark:via-transparent dark:to-blue-500/20 -z-10 pointer-events-none"></div>

                <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6 pt-16">
                    <h2 className={sectionHeading}>{t.contactHeading}</h2>
                    <div className={divider}></div>
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 max-w-xl">
                        {t.contactText}
                    </p>

                    <div className="text-sm text-gray-700 dark:text-gray-300">
                        <a
                            href="mailto:alyonatihomirova9@gmail.com"
                            className="flex items-center gap-2 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                        >
                            <i className="fa-solid fa-envelope"></i> alyonatihomirova9@gmail.com
                        </a>
                    </div>

                    <Link
                        to={ROUTE.contact}
                        className="bg-amber-200 dark:bg-amber-300 text-gray-800 dark:text-amber-950
                                   hover:bg-amber-300 dark:hover:bg-amber-200
                                   py-2 px-8 text-lg font-medium rounded-md
                                   shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-2"
                    >
                        {t.ctaPrimary}
                    </Link>
                </div>
            </section>

        </div>
    )
}

export default Teaching
