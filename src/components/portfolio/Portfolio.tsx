import { NavLink, useLoaderData } from "react-router-dom"

function Portfolio() {
    const projects:any = useLoaderData()

    return (
        <div className="portfolio">
            {projects.map((project:any) => (
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
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const response = await fetch("http://localhost:4000/projects")

    if (!response.ok) {
        throw Error("Could not fetch the list of projects.")
    }

    return response.json()
}

export default Portfolio
