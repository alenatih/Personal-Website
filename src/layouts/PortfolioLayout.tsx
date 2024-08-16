import { Outlet } from "react-router-dom"

function PortfolioLayout() {

    return (
        <div className="portfolio-layout">
            <h2 className="portfolio-title">Portfolio</h2>

            <Outlet />
        </div>
    )
}

export default PortfolioLayout
