import { useState, useEffect } from "react"
import { NavLink, Outlet } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs.tsx"
import ToggleButton from "../components/ToggleButton.tsx"

function RootLayout() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(() => {
        return window.innerWidth < 600 ? true : false
    })

    const checkScreenSize = () => {
        setIsMobile(() => {
            return window.innerWidth < 600 ? true : false
        })
    }

    useEffect(() => {
        // Set up an event listener
        window.addEventListener("resize", checkScreenSize)

        // Check screen size on initial load
        checkScreenSize()

        // Clean up an event listener on component unmount
        return () => {
        window.removeEventListener("resize", checkScreenSize)
        }
    }, [])

    const toggleDropdown = () => {
        setIsDropdownOpen((prevIsDropdownOpen: boolean) => !prevIsDropdownOpen)
    }


    return (
        <div className="root-layout">
            <header className="header">
                <div className="nav-container">
                    {isMobile ? (
                        <div className="header-mobile-menu">
                            <i
                                className="fa-solid fa-bars burger-icon"
                                onClick={toggleDropdown}>
                            </i>
                            {isDropdownOpen && (
                            <nav className="mobile-menu-opened">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/aboutme">About Me</NavLink>
                                <NavLink to="/portfolio">Portfolio</NavLink>
                                <NavLink to="/skills">Skills</NavLink>
                                <NavLink to="/blog">Blog</NavLink>
                                <NavLink to="/resources">Resources</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                            </nav>
                            )}
                            <NavLink to="/">Home</NavLink>
                            <ToggleButton />
                        </div>
                    ) :
                        (<nav className="nav">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/aboutme">About Me</NavLink>
                            <NavLink to="/portfolio">Portfolio</NavLink>
                            <NavLink to="/skills">Skills</NavLink>
                            <NavLink to="/blog">Blog</NavLink>
                            <NavLink to="/resources">Resources</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                            <ToggleButton />
                        </nav>
                        )}
                </div>
            </header>

            <main className="main">
                <Breadcrumbs/>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
