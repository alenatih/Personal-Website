import { NavLink, Outlet } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs.tsx"
import ToggleButton from "../components/ToggleButton.tsx"

function RootLayout() {
    return (
        <div className="root-layout">
            <header className="header">
                <nav className="nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/aboutme">About Me</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/skills">Skills</NavLink>
                    <NavLink to="/contact">Contact</NavLink>

                    <ToggleButton />
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
