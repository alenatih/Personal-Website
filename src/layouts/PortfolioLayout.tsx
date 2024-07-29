// import { NavLink, Outlet } from "react-router-dom"
import { Outlet } from "react-router-dom"

function PortfolioLayout() {

    return (
        <div className="portfolio-layout">
            <h2 className="portfolio-title">Portfolio</h2>

            {/* <nav>
                <NavLink to="projectone">Project 1</NavLink>
                <NavLink to="projecttwo">Project 2</NavLink>
            </nav> */}

            <Outlet />
        </div>
    )
}

export default PortfolioLayout
