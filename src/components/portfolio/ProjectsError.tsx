import { NavLink, useRouteError } from "react-router-dom"

function ProjectsError() {
    
    const error:any = useRouteError()

    return (
        <div  className="projects-error">
            <h4 className="projects-error-title">Error</h4>
            <p>{error.message}</p>
            <NavLink to="/">Come back to the Homepage</NavLink>
        </div>
    )
}

export default ProjectsError
