import { useLocation, NavLink } from "react-router-dom"

function Breadcrumbs() {
    const location = useLocation()

    let currentLink:string = ""

    const crumbs = location.pathname.split("/")
        .filter(crumb => crumb !== "")
        .map(crumb => {
            // Check if the crumb is a slug with an id
            const isSlugWithId = crumb.includes("_")
            let displayCrumb

            if (isSlugWithId) {
                // Extract the title part of the crumb
                displayCrumb = crumb.split("_").slice(0, -1).join("_")
            } else {
                displayCrumb = crumb
            }

            currentLink += `/${crumb}`

            return (
                <div className="crumb" key={crumb}>
                    <NavLink to={currentLink}>{displayCrumb}</NavLink>
                </div>
            )
        })

    return (
        <div className="breadcrumbs">
            {crumbs}
        </div>
    )
}

export default Breadcrumbs
