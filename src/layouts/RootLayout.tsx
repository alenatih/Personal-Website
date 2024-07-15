import { NavLink, Outlet } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs.tsx"

function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav className="nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/aboutme">About Me</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/skills">Skills</NavLink>
                </nav>

                <Breadcrumbs />
            </header>
            <main className="main">
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
