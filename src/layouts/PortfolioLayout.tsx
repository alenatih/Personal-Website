import { NavLink, Outlet } from "react-router-dom"

function PortfolioLayout() {

    return (
        <div className="portfolio-layout">
            Portfolio

            <nav>
                <NavLink to="projectone">Project 1</NavLink>
                <NavLink to="projecttwo">Project 2</NavLink>
            </nav>

            <Outlet />
        </div>
    )
}

export default PortfolioLayout
