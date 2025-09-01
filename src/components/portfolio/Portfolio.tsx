import { NavLink, useLoaderData } from "react-router-dom"
import { database } from "../../appwriteConfig.ts"
// import { database, storage } from "../../appwriteConfig.ts"
import slugify from "slugify"

interface Project {
    $id: string;
    $collectionId: string;
    $createdAt: string;
    $databaseId: string;
    $permissions: string[];
    $tenant: string;
    $updatedAt: string;
    Title: string;
    Description: string;
    GitHubLink: string;
    Link: string;
    imageId: string;
    [key: string]: any; // Index signature to allow for additional properties
}

function Portfolio() {
    const projects = useLoaderData() as Project[] // Type the loader data as an array of Project objects

    // console.log(projects)

    if (!projects) {
        return (
            <div>
                <h4>Loading...</h4>
            </div>
        )
    }

    return (
        <div className="portfolio">
            {/* Use slice to create a copy of the array, then reverse it */}
            {projects.slice().reverse().map((project: Project) => {
                {/* // <NavLink to={project.id.toString()} key={project.id}> */}
                const slug = slugify(project.Title, { lower: true, replacement: "_" })

                // const projectImageUrl = project.imageId
                //         ? storage.getFileView("66a43339001923925f0e", project.imageId)
                //         // ("bucketId", "fileId")
                //         : null
                
                return (
                    <NavLink to={`${slug}-${project.$id}`} key={project.$id}>
                        <h4 className="project-title">{project.Title}</h4>
                        {/* {projectImageUrl && (
                        <img
                            className="project-image"
                            src={projectImageUrl.href}
                            alt={project.Title}
                        />
                        )} */}
                    </NavLink>
                )
})}
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
        // ("databaseId", "collectionId")
        return response.documents as Project[] // Type the response as an array of Project objects
    } catch (error) {
        throw Error("Could not fetch the list of projects.")
    }
}

export default Portfolio
