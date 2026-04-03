function Resources() {
    return (
        <section className="pt-12 pb-36 px-4 sm:px-6 md:px-12 w-full">
            <div className="max-w-7xl mx-auto">

                {/* Section heading */}
                <div className="flex flex-col items-center text-center mb-16 gap-4">
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-amber-50 tracking-wide">
                        Resources I recommend
                    </h2>
                    <div className="h-px w-16 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent dark:from-amber-500 dark:via-amber-400"></div>
                    <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-2xl leading-relaxed">
                        Tools and courses that helped me grow as a developer.
                    </p>
                </div>

                {/* Resource cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

                    <div className="group border-t-2 border-t-amber-300 dark:border-t-amber-600 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-all duration-500 p-6">
                        <a
                            className="text-lg font-semibold tracking-tight text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200 transition-colors"
                            href="https://scrimba.com/?via=u014nen"
                            target="_blank"
                            rel="noopener noreferrer">
                            Scrimba
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
                            An awesome platform to learn and practice software engineering.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-1">
                            Use my referral link above for a 20% discount for Scrimba Pro.
                        </p>
                    </div>

                    <div className="group border-t-2 border-t-amber-300 dark:border-t-amber-600 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-all duration-500 p-6">
                        <a
                            className="text-lg font-semibold tracking-tight text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200 transition-colors"
                            href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf"
                            target="_blank"
                            rel="noopener noreferrer">
                            React Router course by Net Ninja
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
                            An awesome course to learn React Router.
                        </p>
                    </div>

                    <div className="group border-t-2 border-t-amber-300 dark:border-t-amber-600 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-all duration-500 p-6">
                        <a
                            className="text-lg font-semibold tracking-tight text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200 transition-colors"
                            href="https://appwrite.io/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Appwrite
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
                            An awesome open-source platform to build apps with a lot of features
                            including authentication, databases, functions, storage, and messaging.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-1">
                            I use Appwrite in this project to store information about my projects.
                        </p>
                    </div>

                    <div className="group border-t-2 border-t-amber-300 dark:border-t-amber-600 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-all duration-500 p-6">
                        <a
                            className="text-lg font-semibold tracking-tight text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200 transition-colors"
                            href="https://go.cap.so/alena"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cap
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
                            The open source screen recording and sharing app for macOS and Windows.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-1">
                            Get a 20% discount for your first 12 months with my referral link above.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Resources
