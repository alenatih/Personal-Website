import { NavLink } from "react-router-dom"

function Home() {

    return (
        <div className="home">
            <h2 className="home-title">Alena Tikhomirova, a Frontend developer</h2>

            <div className="home-links">
                <NavLink className="view-work-link" to="/portfolio">View my work</NavLink>
            </div>
        </div>
    )
}

export default Home

