import { NavLink, Outlet } from "react-router-dom"

function PortfolioLayout() {

    return (
        <div className="portfolio">
            Portfolio

            <nav>
                <NavLink to="project-one">Project 1</NavLink>
                <NavLink to="project-two">Project 2</NavLink>
            </nav>

            <Outlet />
        </div>
    )
}

export default PortfolioLayout
