import { Link } from "react-router-dom"
import { ROUTE } from "../constants"

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
// Content data — transcribed from the source material only. No tactics,
// metrics, or links are added beyond what was documented.
// ---------------------------------------------------------------------------

const languages = [
    { name: "English", level: "Fluent (C1/C2)" },
    { name: "Russian", level: "Native" },
    { name: "German", level: "Intermediate (B1)" },
    { name: "French", level: "Beginner (A1)" },
]

const heroTags = [
    "Content Strategy",
    "Social Media Marketing",
    "Copywriting",
    "Audience Growth",
    "Content Research",
    "Digital Products",
]

const results = [
    {
        value: "40K+ → 60K+",
        label: "Instagram audience growth",
        meta: "Yandex / Edadeal · ~3 months · 2× engagement",
    },
    {
        value: "0 → 8K+",
        label: "Telegram community growth",
        meta: "Yandex / Edadeal · ~2 months",
    },
    {
        value: "0 → 800+",
        label: "Instagram audience growth",
        meta: "US travel gift cards project · ~2 months · brand awareness + leads",
    },
]

interface FeaturedCase {
    number: string
    project: string
    title: string
    role: string
    focus: string[]
    challenge: string
    work: string
    metrics: { value: string; label: string; note: string }[]
    extra?: { intro: string; items: string[] }
    why: string
}

const featuredCases: FeaturedCase[] = [
    {
        number: "01",
        project: "Yandex / Edadeal",
        title: "Growing an established Instagram audience",
        role: "Social Media Manager",
        focus: ["Social media strategy", "Content", "Audience growth", "Engagement"],
        challenge:
            "The Instagram account already had an established audience. The goal was to continue growing the community while increasing engagement and strengthening brand awareness.",
        work:
            "I developed and executed the social media strategy and content plan, created social media content, collaborated with designers on visual assets, analyzed performance metrics, and implemented optimizations based on the results.",
        metrics: [
            {
                value: "40K+ → 60K+",
                label: "followers",
                note: "The Instagram audience grew by 20K+ followers in approximately 3 months.",
            },
            {
                value: "2×",
                label: "engagement",
                note: "Engagement doubled during the period.",
            },
        ],
        why:
            "This case demonstrates my ability to work not only with a new account, but also with an already established audience, where growth requires maintaining relevance while improving content performance.",
    },
    {
        number: "02",
        project: "Yandex / Edadeal",
        title: "Building a Telegram community from zero",
        role: "Social Media Manager",
        focus: ["Community growth", "Content strategy", "Audience development"],
        challenge:
            "Build a Telegram community from scratch and establish an audience around the project.",
        work:
            "I developed and implemented social media and content activities, created content, monitored audience response, and analyzed performance to refine the approach.",
        metrics: [
            {
                value: "0 → 8K+",
                label: "subscribers",
                note: "The Telegram community reached 8K+ subscribers in approximately 2 months.",
            },
        ],
        why:
            "Unlike the Instagram case, this project started with no existing Telegram audience. It demonstrates my experience with building an audience from the ground up rather than only managing an established community.",
    },
    {
        number: "03",
        project: "Travel Gift Cards Project",
        title: "Growing a new Instagram account from zero",
        role: "Content Marketing & Social Media Manager / Content Creator",
        focus: ["Content strategy", "Instagram", "Audience growth", "Lead generation"],
        challenge:
            "Develop an Instagram presence for a travel gift cards project starting from zero.",
        work:
            "I developed the account and created content designed to build awareness around the project and attract an initial audience. I also worked on social media growth and audience engagement.",
        metrics: [
            {
                value: "0 → 800+",
                label: "followers",
                note: "The Instagram audience grew to 800+ followers in approximately 2 months.",
            },
        ],
        extra: {
            intro: "The work contributed to:",
            items: ["Increased brand awareness", "Audience growth", "Lead generation"],
        },
        why:
            "This project demonstrates my experience with launching a social media presence from scratch and building an initial audience around a product.",
    },
]

interface OtherCase {
    number: string
    project: string
    title: string
    role: string
    industry?: string
    platform?: string
    description: string
    focus: string[]
}

const otherCases: OtherCase[] = [
    {
        number: "04",
        project: "Architecture & Design Studio",
        title: "Social media management",
        role: "Social Media Manager",
        description:
            "I managed social media for an architecture and design studio — maintaining the studio's social media presence and developing content appropriate for a visually driven industry.",
        focus: ["Social media management", "Content creation", "Visual communication", "Audience engagement"],
    },
    {
        number: "05",
        project: "Stroitelny Prospect",
        title: "Social media design & content creation",
        role: "Social Media / Content",
        industry: "Interior design · Construction · Renovation",
        platform: "VK",
        description:
            "I created social media content and visual materials for Stroitelny Prospect, a company working in interior design, construction, and renovation.",
        focus: ["Social media design", "Content creation", "Visual communication", "VK content"],
    },
]

const whatIDo = [
    {
        title: "Content Strategy",
        description: "I develop content approaches based on the brand, audience, product, and business objectives.",
        items: ["Content strategy", "Content planning", "Content calendars", "Content pillars", "Topic research", "Audience-oriented content"],
    },
    {
        title: "Social Media Marketing",
        description: "I manage social media as a communication and growth channel rather than simply producing individual posts.",
        items: ["Social media strategy", "Account management", "Audience growth", "Community development", "Engagement optimization", "Cross-promotion", "Influencer collaborations", "Performance analysis"],
    },
    {
        title: "Content Creation",
        description: "I create clear, useful, and engaging content for different digital channels.",
        items: ["Social media posts", "Blog content", "Website copy", "Marketing copy", "Research-based content", "Content adaptation", "Visual content coordination"],
    },
    {
        title: "Copywriting & Research",
        description: "My background in linguistics, journalism, commercial writing, and translation gives me a strong foundation for working with language and information.",
        items: ["Research unfamiliar topics", "Find and evaluate relevant sources", "Structure complex information", "Adapt communication to an audience", "Write clear marketing content", "Work in English and Russian"],
    },
]

const techStack = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
    "Supabase", "REST APIs", "Git", "GitHub", "Figma", "Canva", "AI tools",
]

const productSide = ["How it works", "What problem it solves", "How users interact with it", "What makes it different"]
const communicationSide = ["How to explain it", "Who needs it", "What message matters", "Which content can attract and engage the audience"]

const relevantTo = ["SaaS", "Startups", "AI products", "Web applications", "Digital services", "Technology companies", "Developer-oriented products"]

const approachSteps = [
    { n: "1", title: "Understand", description: "I start with the product, audience, market, and business objective." },
    { n: "2", title: "Research", description: "I research the topic, audience needs, competitors, and relevant sources." },
    { n: "3", title: "Strategize", description: "I turn research into content themes, formats, and a practical content plan." },
    { n: "4", title: "Create", description: "I write and develop content while maintaining consistency in messaging and visual communication." },
    { n: "5", title: "Distribute", description: "I think about how content reaches the audience — through social platforms, communities, collaborations, and other relevant channels." },
    { n: "6", title: "Analyze", description: "I look at performance metrics to understand what works." },
    { n: "7", title: "Optimize", description: "I use the results to refine future content rather than treating the content plan as static." },
]

const experience = [
    {
        role: "Content Marketing & Social Media Manager",
        org: "Individual Contractor",
        dates: "2018–Present",
        description: "Content marketing, social media management, content creation, copywriting, audience growth, collaborations, research, analytics, and English–Russian communication.",
    },
    {
        role: "Social Media Manager",
        org: "Yandex",
        dates: "2021–2022",
        description: "Social media strategy, content planning, content creation, audience growth, community development, designer collaboration, analytics, and optimization.",
    },
    {
        role: "Quality Control Coordinator / Project Coordinator",
        org: "TransPerfect",
        dates: "2020–2021",
        description: "Translation quality control, project coordination, client requirements, documentation, and international communication.",
    },
    {
        role: "Translator",
        org: "GTMK LLC / TED Open Translation Project",
        dates: "",
        description: "Professional translation and localization of written and audiovisual content.",
    },
]

const education = [
    { degree: "Bachelor's Degree in Linguistics", org: "Novgorod State University" },
    { degree: "Social Media Marketing", org: "IMBA, Ingate" },
    { degree: "Commercial Writing & Copywriting", org: "Sdelaem Content Agency" },
    { degree: "Journalism Course", org: "Novgorod State University" },
    { degree: "Frontend Developer Career Path", org: "Scrimba" },
]

const canHelpWith = ["Content Strategy", "Social Media", "Content Creation", "Copywriting", "Audience Growth", "Content Research", "Digital Product Marketing"]

// ---------------------------------------------------------------------------

function MarketingPortfolio() {
    return (
        <div className="w-full">

            {/* Hero */}
            <section className="relative px-4 sm:px-6 md:px-12 pt-4 pb-24 md:pb-36 w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-blue-300/20 dark:from-blue-900/20 dark:via-transparent dark:to-blue-950/20 -z-10 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
                    <span className={label}>Content Marketing &amp; Social Media Portfolio</span>

                    <h1 className="text-4xl md:text-6xl font-serif tracking-wide text-gray-900 dark:text-amber-50">
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-600">
                            Alena Tikhomirova
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl font-light text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
                        Content Marketer with a Strong Technical Background
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 max-w-2xl mt-2">
                        {heroTags.map((tag) => (
                            <span key={tag} className={chip}>{tag}</span>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4 max-w-2xl mt-2">
                        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                            I help brands and digital products turn ideas into clear, engaging content and build stronger relationships with their audiences.
                        </p>
                        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                            My background combines 4+ years of content marketing and social media experience
                            with hands-on experience in Frontend engineering and product building.
                            This allows me to approach content not only as communication,
                            but as part of the wider product and business experience.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {languages.map((lang) => (
                            <span key={lang.name}>
                                <span className="font-semibold text-gray-900 dark:text-gray-200">{lang.name}</span> — {lang.level}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
                        <Link
                            to={ROUTE.contact}
                            className="bg-amber-200 dark:bg-amber-300 text-gray-800 dark:text-amber-950
                                       hover:bg-amber-300 dark:hover:bg-amber-200
                                       py-2 px-8 text-lg font-medium rounded-md
                                       shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            Get in touch
                        </Link>
                        <a
                            href="#case-studies"
                            className="text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200
                                       rounded-md hover:scale-105 transition-all duration-300 text-lg font-medium"
                        >
                            View case studies →
                        </a>
                    </div>
                </div>
            </section>

            {/* Selected Results */}
            <section className="px-4 sm:px-6 md:px-12 pb-24 md:pb-36 w-full">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {results.map((result) => (
                        <div key={result.label + result.value} className={`${card} p-6 flex flex-col gap-2`}>
                            <p className="text-2xl md:text-3xl font-serif text-gray-900 dark:text-amber-50 tracking-wide">
                                {result.value}
                            </p>
                            <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">
                                {result.label}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                {result.meta}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Case Studies */}
            <section id="case-studies" className="px-4 sm:px-6 md:px-12 pb-24 md:pb-36 w-full">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-16 gap-4">
                        <h2 className={sectionHeading}>Case Studies</h2>
                        <div className={divider}></div>
                    </div>

                    <div className="flex flex-col gap-10">
                        {featuredCases.map((c, i) => (
                            <article key={c.number} className={`${card} p-6 md:p-10`}>
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div>
                                        {i === 0 && (
                                            <span className={`${label} mb-2 inline-block`}>
                                                Featured case
                                            </span>
                                        )}
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                                            {c.number} — {c.project}
                                        </p>
                                        <h3 className="text-2xl font-serif text-gray-900 dark:text-amber-50 tracking-wide group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                                            {c.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 md:text-right flex-shrink-0">
                                        Role: {c.role}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {c.focus.map((f) => (
                                        <span key={f} className={chip}>{f}</span>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <p className={`${label} mb-2`}>The challenge</p>
                                        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                                            {c.challenge}
                                        </p>
                                    </div>
                                    <div>
                                        <p className={`${label} mb-2`}>My work</p>
                                        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                                            {c.work}
                                        </p>
                                    </div>
                                </div>

                                {/* Evidence / Result */}
                                <div className="mb-8">
                                    <p className={`${label} mb-3`}>Result</p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        {c.metrics.map((m) => (
                                            <div
                                                key={m.value + m.label}
                                                className="rounded-lg bg-amber-50 dark:bg-amber-900/20 px-5 py-4 flex-1"
                                            >
                                                <p className="text-xl font-serif text-gray-900 dark:text-amber-50">
                                                    {m.value} <span className="text-sm font-sans font-medium text-gray-600 dark:text-gray-400">{m.label}</span>
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                                                    {m.note}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    {c.extra && (
                                        <div className="mt-4">
                                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{c.extra.intro}</p>
                                            <ul className="flex flex-wrap gap-2">
                                                {c.extra.items.map((item) => (
                                                    <li key={item} className={chip}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                                    <p className={`${label} mb-2`}>Why this case matters</p>
                                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                                        {c.why}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Additional experience — lighter cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                        {otherCases.map((c) => (
                            <article key={c.number} className={`${card} p-6 flex flex-col gap-3`}>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    {c.number} — {c.project}
                                </p>
                                <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                                    {c.title}
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Role: {c.role}
                                    {c.industry && <> · {c.industry}</>}
                                    {c.platform && <> · Platform: {c.platform}</>}
                                </p>
                                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                                    {c.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {c.focus.map((f) => (
                                        <span key={f} className={chip}>{f}</span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* What I Do */}
            <section className="px-4 sm:px-6 md:px-12 pb-24 md:pb-36 w-full bg-gradient-to-br from-blue-400/20 to-blue-900/20 dark:from-blue-900/20 dark:to-blue-950/20 pt-24">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-16 gap-4">
                        <h2 className={sectionHeading}>What I Do</h2>
                        <div className={divider}></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {whatIDo.map((category) => (
                            <div key={category.title} className={`${card} p-6`}>
                                <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                                    {category.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    {category.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((item) => (
                                        <span key={item} className={chip}>{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content + Technology */}
            <section className="px-4 sm:px-6 md:px-12 pt-20 pb-24 md:pb-36 w-full">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-10 gap-4">
                        <h2 className={sectionHeading}>Content + Technology</h2>
                        <div className={divider}></div>
                        <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-xl leading-relaxed">
                            Why a technical background matters in marketing
                        </p>
                    </div>

                    <div className={`${card} p-6 md:p-10`}>
                        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                            My marketing background is complemented by hands-on experience building digital products. I work with:
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {techStack.map((tech) => (
                                <span key={tech} className={chip}>{tech}</span>
                            ))}
                        </div>

                        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
                            This gives me a practical understanding of how digital products work beyond their marketing layer. I can communicate more easily with designers and developers, understand technical products and SaaS concepts, and create content with the actual user experience in mind.
                        </p>

                        <p className={`${label} mb-4`}>I understand both sides</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="rounded-lg bg-amber-50 dark:bg-amber-900/20 p-5">
                                <p className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-3">The product</p>
                                <ul className="flex flex-col gap-2">
                                    {productSide.map((item) => (
                                        <li key={item} className="text-sm text-gray-700 dark:text-gray-300 flex gap-2">
                                            <span className="text-amber-600 dark:text-amber-400">→</span>{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rounded-lg bg-amber-50 dark:bg-amber-900/20 p-5">
                                <p className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-3">The communication</p>
                                <ul className="flex flex-col gap-2">
                                    {communicationSide.map((item) => (
                                        <li key={item} className="text-sm text-gray-700 dark:text-gray-300 flex gap-2">
                                            <span className="text-amber-600 dark:text-amber-400">→</span>{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Digital Product Perspective */}
            <section className="px-4 sm:px-6 md:px-12 pb-24 md:pb-36 w-full">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
                    <h2 className={sectionHeading}>Digital Product Perspective</h2>
                    <div className={divider}></div>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl">
                        My technical background is not only theoretical. I have hands-on experience building and launching web products using modern frontend technologies. This experience helps me approach technology marketing from the perspective of someone who actually understands the process of creating digital products.
                    </p>
                    <p className={`${label} mt-2`}>Particularly relevant to</p>
                    <div className="flex flex-wrap justify-center gap-2 max-w-xl">
                        {relevantTo.map((item) => (
                            <span key={item} className={chip}>{item}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* My Approach */}
            <section className="px-4 sm:px-6 md:px-12 pb-24 md:pb-36 w-full">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-16 gap-4">
                        <h2 className={sectionHeading}>My Approach</h2>
                        <div className={divider}></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {approachSteps.map((step) => (
                            <div key={step.n} className={`${card} p-6`}>
                                <div className="w-10 h-10 rounded-full
                                                border border-amber-300 dark:border-amber-600
                                                bg-amber-50 dark:bg-amber-900/20
                                                flex items-center justify-center mb-4
                                                text-sm font-semibold text-amber-800 dark:text-amber-300">
                                    {step.n}
                                </div>
                                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Professional Background */}
            <section className="px-4 sm:px-6 md:px-12 pb-24 md:pb-36 w-full">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-16 gap-4">
                        <h2 className={sectionHeading}>Professional Background</h2>
                        <div className={divider}></div>
                    </div>

                    <div className="flex flex-col gap-8">
                        {experience.map((job) => (
                            <div key={job.role + job.org} className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-none last:pb-0">
                                <h3 className="font-semibold text-base text-gray-900 dark:text-gray-100">{job.role}</h3>
                                <p className="text-sm text-amber-700 dark:text-amber-400">
                                    {job.org}{job.dates && ` · ${job.dates}`}
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mt-2 max-w-xl">
                                    {job.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="px-4 sm:px-6 md:px-12 pb-24 md:pb-36 w-full">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-16 gap-4">
                        <h2 className={sectionHeading}>Education</h2>
                        <div className={divider}></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {education.map((item) => (
                            <div key={item.degree} className={`${card} p-5`}>
                                <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">{item.degree}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.org}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Let's Work Together */}
            <section className="relative px-4 sm:px-6 md:px-12 pb-24 md:pb-36 w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-transparent to-blue-300/20 dark:from-amber-600/20 dark:via-transparent dark:to-blue-500/20 -z-10 pointer-events-none"></div>

                <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6 pt-16">
                    <h2 className={sectionHeading}>Let's Work Together</h2>
                    <div className={divider}></div>
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 max-w-xl">
                        I'm interested in projects where content, technology, and real business problems intersect.
                    </p>

                    <p className={label}>I can help with</p>
                    <div className="flex flex-wrap justify-center gap-2 max-w-xl">
                        {canHelpWith.map((item) => (
                            <span key={item} className={chip}>{item}</span>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 text-sm text-gray-700 dark:text-gray-300">
                        <a
                            href="mailto:alyonatihomirova9@gmail.com"
                            className="flex items-center gap-2 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                        >
                            <i className="fa-solid fa-envelope"></i> alyonatihomirova9@gmail.com
                        </a>
                        <span className="hidden sm:inline text-gray-300 dark:text-gray-700">|</span>
                        <a
                            href="https://www.linkedin.com/in/alenatikhomirova/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                        >
                            <i className="fa-brands fa-linkedin"></i> LinkedIn
                        </a>
                    </div>

                    <Link
                        to={ROUTE.contact}
                        className="bg-amber-200 dark:bg-amber-300 text-gray-800 dark:text-amber-950
                                   hover:bg-amber-300 dark:hover:bg-amber-200
                                   py-2 px-8 text-lg font-medium rounded-md
                                   shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-2"
                    >
                        Get in touch
                    </Link>
                </div>
            </section>

        </div>
    )
}

export default MarketingPortfolio
