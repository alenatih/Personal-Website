import { NavLink, useLoaderData } from "react-router-dom"
import { database } from "../../appwriteConfig.ts"

function Portfolio() {
    const projects:any = useLoaderData()

    console.log(projects)

    return (
        <div className="portfolio">
            {projects.map((project:any) => (
                // <NavLink to={project.id.toString()} key={project.id}>
                <NavLink to={project.$id} key={project.$id}>
                    {/* <h4>{project.title}</h4>
                    <p>{project.description}</p> */}
                    <h4>{project.Title}</h4>
                </NavLink>
            ))}
        </div>
    )
}

// Data loader
export const projectsLoader = async () => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    // const response = await fetch("http://localhost:4000/projects")

    // Command to wrap json file with an endpoint:
    //  json-server -p 4000 -w ./src/data/projects.json

    // if (!response.ok) {
    //     throw Error("Could not fetch the list of projects.")
    // }

    // return response.json()

    try {
        const response = await database.listDocuments("66a2de2e00117b4ed64f", "66a2e03d000e648b1b08")
        return response.documents
    } catch (error) {
        throw Error("Could not fetch the list of projects.")
    }
}

export default Portfolio
