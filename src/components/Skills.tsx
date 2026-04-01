const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
    "RESTful APIs", "Git", "GitHub", "React Router", "Vite", "Vercel",
    "Appwrite", "PostgreSQL", "Supabase", "Firebase",
    "React Testing Library", "Vitest", "Playwright", "WebdriverIO",
    "Tailwind CSS", "Figma",
]

function Skills() {
    return (
        <section className="py-24 pb-36 px-4 sm:px-6 md:px-12 w-full">
            <div className="max-w-7xl mx-auto">

                {/* Section heading */}
                <div className="flex flex-col items-center text-center mb-16 gap-4">
                    <h2 className="text-4xl md:text-5xl font-serif text-blue-900 dark:text-blue-200 tracking-wide">
                        My skills
                    </h2>
                    <div className="h-px w-16 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent"></div>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="border-t-2 border-t-amber-300
                                       bg-white/80 backdrop-blur-sm
                                       rounded-lg shadow-md
                                       px-4 py-2
                                       text-sm font-medium text-gray-700
                                       transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Skills
