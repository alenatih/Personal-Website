import { NavLink } from "react-router-dom"
import Sunset from "../assets/sunset.png"

function Home() {

    return (
        <div className="home relative py-16 px-4 sm:px-6 md:px-12 max-w-7xl">

            {/* Background tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-blue-300/20 dark:from-blue-900/20 dark:via-transparent dark:to-blue-950/20 -z-10 pointer-events-none"></div>

            {/* Title + ornamental rule */}
            <div className="flex flex-col items-center text-center mb-10 gap-4">
                <h2 className="text-4xl md:text-5xl font-serif tracking-wide text-gray-900 dark:text-amber-50">
                    Alena{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-600">
                        Tikhomirova
                    </span>
                    , a Frontend engineer
                </h2>
                <div className="h-px w-16 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent dark:from-amber-500 dark:via-amber-400 w-12 md:w-40"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start w-full">

                <div className="flex items-center justify-center md:w-64 lg:w-72 flex-shrink-0 w-full">
                    <img
                        className="w-full rounded-full shadow-lg shadow-blue-200/60 dark:shadow-blue-900/40"
                        src={Sunset}
                        alt="Alena smiles with sunset in the background"
                    />
                </div>

                <div className="flex flex-col items-center md:items-start gap-4 max-w-2xl w-full mt-8 md:mt-0">

                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400 text-center md:text-left">
                        Frontend Engineer. Building things.
                        On my journey to becoming a solo entrepreneur. Doing what I love.
                    </p>

                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400 text-center md:text-left">
                        My goal is to be not just a Frontend developer,
                        but a software engineer who can work with any technology
                        and solves business problems.
                    </p>

                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400 text-center md:text-left">
                        You can read a little bit more
                        <NavLink
                            to="/aboutme"
                            className="text-blue-500 dark:text-blue-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors no-underline mx-1">
                            about me
                        </NavLink>,
                        and check out my{" "}
                        <NavLink
                            to="/blog"
                            className="text-blue-500 dark:text-blue-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors no-underline">
                            blog.
                        </NavLink>
                    </p>

                    <p className="text-base leading-relaxed text-amber-700 dark:text-amber-400 font-medium text-center md:text-left mt-8">
                        I'm open for Frontend engineer roles in a company or startup.
                    </p>

                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400 text-center md:text-left">
                        You can contact me at{" "}
                        <span className="text-amber-700 dark:text-amber-400">alyonatihomirova9@gmail.com</span>
                    </p>

                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400 text-center md:text-left -mt-2">
                        or see my{" "}
                        <NavLink
                            to="/contact"
                            className="text-blue-500 dark:text-blue-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors no-underline">
                            social links.
                        </NavLink>
                    </p>

                    <NavLink
                        className="bg-amber-200 dark:bg-amber-300 text-gray-800 dark:text-amber-950 hover:bg-amber-300 dark:hover:bg-amber-200 py-2 px-8 text-lg font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-8 mb-2"
                        to="/portfolio">
                        View my work
                    </NavLink>

                </div>
            </div>
        </div>
    )
}

export default Home
