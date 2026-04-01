import Sunset from "../assets/sunset.png"

function AboutMe() {
    return (
        <section className="py-24 pb-36 px-4 sm:px-6 md:px-12 w-full">
            <div className="max-w-7xl mx-auto">

                {/* Section heading */}
                <div className="flex flex-col items-center text-center mb-16 gap-4">
                    <h2 className="text-4xl md:text-5xl font-serif text-blue-900 dark:text-blue-200 tracking-wide">
                        About me
                    </h2>
                    <div className="h-px w-16 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent"></div>
                </div>

                {/* Image + text */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center mb-20">

                    <div className="flex-shrink-0 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 blur-2xl opacity-20"></div>
                            <img
                                src={Sunset}
                                alt="Alena smiles"
                                className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-full shadow-xl"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <p className="text-base leading-relaxed">
                            My main skills include HTML, CSS, JavaScript, TypeScript,
                            React, Next.js, RESTful APIs, Git, GitHub, React Router, Vite, Vercel,
                            Appwrite, PostgreSQL, Supabase, Firebase, React Testing Library, Vitest, Playwright, WebdriverIO,
                            Tailwind CSS, and Figma.
                        </p>
                        <p className="text-base leading-relaxed">
                            I love art, design, UX/UI, books, languages, and AI.
                            I enjoy building web apps, learning and using new technologies.
                        </p>
                        <p className="text-base leading-relaxed">
                            I also enjoy doing aerial gymnastics on silks and lyra.
                        </p>
                    </div>

                </div>

                {/* Video */}
                <div className="flex justify-center">
                    <div className="relative w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-md">
                        <iframe
                            src="https://www.youtube.com/embed/SxN3sRH-5WQ?si=GCq6UjP5Ls4Vf8Jc"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutMe
