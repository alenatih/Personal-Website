import { NavLink, useRouteError } from "react-router-dom"

function ProjectsError() {
    
    const error:any = useRouteError()

    return (
        <div  className="projects-error">
            <h2>Error</h2>
            <p>{error.message}</p>
            <NavLink to="/">Come back to the Homepage</NavLink>
        </div>
    )
}

export default ProjectsError
