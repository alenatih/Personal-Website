import { NavLink, useLoaderData } from "react-router-dom"

function Portfolio() {
    const projects = useLoaderData()

    return (
        <div className="portfolio">
            {projects.map(project => (
                <NavLink to={project.id.toString()} key={project.id}>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                </NavLink>
            ))}
        </div>
    )
}

// Data loader
export const projectsLoader = async () => {
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts")

    return response.json()
}

export default Portfolio
