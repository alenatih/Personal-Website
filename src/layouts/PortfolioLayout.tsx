import { Outlet } from "react-router-dom"

function PortfolioLayout() {
    return (
        <section className="pt-12 pb-36 px-0 sm:px-0 md:px-12 max-w-4xl w-full mx-auto">
            <div className="max-w-7xl mx-auto">

                {/* Section heading */}
                <div className="flex flex-col items-center text-center mb-16 gap-4">
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-amber-50 tracking-wide">
                        Portfolio
                    </h2>
                    <div className="h-px w-16 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent dark:from-amber-500 dark:via-amber-400"></div>
                </div>

                <Outlet />

            </div>
        </section>
    )
}

export default PortfolioLayout
