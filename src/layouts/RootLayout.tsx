import { useState, useEffect, useRef } from "react"
import { NavLink, Outlet } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs.tsx"
import ToggleButton from "../components/ToggleButton.tsx"

function RootLayout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(() => {
        return window.innerWidth < 600 ? true : false
    })

    // Ref for the mobile menu to detect clicks outside of it
    const menuRef = useRef<HTMLDivElement | null>(null)

    const checkScreenSize = () => {
        setIsMobile(() => {
            return window.innerWidth < 600 ? true : false
        })
    }

    useEffect(() => {
        window.addEventListener("resize", checkScreenSize)

        // Check screen size on initial load
        checkScreenSize()

        // Clean up an event listener on component unmount
        return () => {
        window.removeEventListener("resize", checkScreenSize)
        }
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prevIsMobileMenuOpen: boolean) => !prevIsMobileMenuOpen)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (
                menuRef.current &&
                event.target instanceof Node &&
                !menuRef.current.contains(event.target)
            ) {
                setIsMobileMenuOpen(false)
            }
        }

        // Add event listener when the menu is open
        if (isMobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside)
            document.addEventListener("touchstart", handleClickOutside )
        }

        // Clean up event listeners on unmount of the component or when the menu closes
        // to prevent memory leaks or unwanted behavior
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("touchstart", handleClickOutside )
        }
    }, [isMobileMenuOpen, menuRef])


    return (
        <div className="root-layout">
            <header className="header">
                <div className="nav-container">
                    {isMobile ? (
                        <div className="header-mobile-menu">
                            <i
                                className="fa-solid fa-bars burger-icon"
                                onClick={toggleMobileMenu}>
                            </i>
                            <nav
                                ref={menuRef}
                                className={`mobile-menu-opened ${isMobileMenuOpen ? "slide-in" : ""}`}
                            >
                            <div className="menu-header">
                                <h3>Menu</h3>
                                <i 
                                    className="fa-solid fa-times close-icon" 
                                    onClick={() => setIsMobileMenuOpen(false)}>
                                </i>
                            </div>
                                <NavLink to="/" onClick={toggleMobileMenu}>Home</NavLink>
                                <NavLink to="/aboutme" onClick={toggleMobileMenu}>About me</NavLink>
                                <NavLink to="/portfolio" onClick={toggleMobileMenu}>Portfolio</NavLink>
                                <NavLink to="/skills" onClick={toggleMobileMenu}>Skills</NavLink>
                                <NavLink to="/blog" onClick={toggleMobileMenu}>Blog</NavLink>
                                <NavLink to="/resources" onClick={toggleMobileMenu}>Resources</NavLink>
                                <NavLink to="/contact" onClick={toggleMobileMenu}>Contact</NavLink>
                            </nav>
                            <NavLink to="/">Home</NavLink>
                            <ToggleButton />
                        </div>
                    ) :
                        (<nav className="nav">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/aboutme">About me</NavLink>
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
