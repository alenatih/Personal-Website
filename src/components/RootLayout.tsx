import { NavLink, Outlet } from "react-router-dom"

function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav className="nav">
                    <NavLink to="/aboutMe">About Me</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/skills">Skills</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
