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
            <div className="px-4 sm:px-6 md:px-12 py-24 max-w-7xl mx-auto w-full">
                <p className="text-gray-600 dark:text-gray-400">Loading...</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-8 max-w-3xl mx-auto w-full">
            {/* Use slice to create a copy of the array, then reverse it */}
            {projects.slice().reverse().map((project: Project) => {
                const slug = slugify(project.Title, { lower: true, replacement: "_" })

                // const projectImageUrl = project.imageId
                //         ? storage.getFileView("66a43339001923925f0e", project.imageId)
                //         // ("bucketId", "fileId")
                //         : null

                return (
                    <NavLink
                        to={`${slug}-${project.$id}`}
                        key={project.$id}
                        className="flex flex-col gap-2 group border-t-2 border-t-amber-300 dark:border-t-amber-600 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-all duration-500 pt-6 pb-12 px-8 no-underline"
                    >
                        <h3 className="text-center text-lg font-semibold tracking-tight text-amber-700 dark:text-amber-400 group-hover:text-amber-800 dark:group-hover:text-amber-200 transition-colors">
                            {project.Title}
                        </h3>
                        {project.Description && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
                                {project.Description}
                            </p>
                        )}
                        {/* {projectImageUrl && (
                            <img
                                className="portfolio-project-image"
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
