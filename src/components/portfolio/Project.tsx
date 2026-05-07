import { LoaderFunctionArgs, useLoaderData, useParams } from "react-router-dom"
import { database, storage } from "../../appwriteConfig.ts"

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

// interface Params {
//     slugId: string;
//     [key: string]: any; // Index signature to allow for additional properties
// }

function Project() {
    // const { slugId } = useParams<Params>() // Type the useParams hook
    const { slugId } = useParams()
    const projectInfo = useLoaderData() as Project

    const projectId = slugId?.split("-").pop()

    // const projectImageIdPromise = storage.getFile("66a43339001923925f0e", projectInfo.imageId)
    // // ("bucketId", "fileId")
    // const projectImageFile = await projectImageIdPromise

    const projectImageUrl = projectInfo.imageId
        ? storage.getFileView("66a43339001923925f0e", projectInfo.imageId)
        // ("bucketId", "fileId")
        : null

    // console.log("Image ID:", projectInfo.imageId)
    // console.log("Image URL:", projectImageUrl)

    return (
        <div className="flex flex-col gap-6 max-w-2xl mx-auto" id={projectId}>

            <div
                className="border-t-2 border-t-amber-300 dark:border-t-amber-600 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-md pt-8 pb-12 px-8 flex flex-col items-center gap-4"
            >

                <a
                    className="text-2xl tracking-tight text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200 transition-colors"
                    href={projectInfo.Link}
                    target="_blank"
                    rel="noopener noreferrer">
                    {projectInfo.Title}
                </a>

                <p className="text-base text-gray-700 dark:text-gray-400 leading-relaxed">
                    {projectInfo.Description}
                </p>

                <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
                    <a
                        className="text-gray-800 dark:text-amber-950 bg-amber-200 dark:bg-amber-300 hover:bg-amber-300 dark:hover:bg-amber-200 py-2 px-6 text-sm font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        href={projectInfo.Link}
                        target="_blank"
                        rel="noopener noreferrer">
                        It's live here
                    </a>
                    {projectInfo.GitHubLink && (
                        <a
                            className="text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200 py-2 px-6 text-sm font-medium rounded-md hover:scale-105 transition-all duration-300"
                            href={projectInfo.GitHubLink}
                            target="_blank"
                            rel="noopener noreferrer">
                            GitHub
                        </a>
                    )}
                </div>

            </div>

            {projectImageUrl && (
                <img
                    className="w-full rounded-lg shadow-md"
                    src={projectImageUrl.href}
                    alt={projectInfo.Title}
                />
            )}

        </div>
    )
}

export default Project

// Loader function
// export const projectInfoLoader = async ({params}: { params: Params }) => {
export const projectInfoLoader = async ({params}: LoaderFunctionArgs) => {
    const { slugId } = params

    const projectId = slugId?.split("-").pop()

    // const response = await fetch("https://jsonplaceholder.typicode.com/posts" + id)
    // const response = await fetch("http://localhost:4000/projects/" + id)

    // if (!response.ok) {
    //     throw Error("Could not find this project.")
    // }

    // return response.json()

    if (!projectId) {
        throw new Error("Project ID not found")
    }

    try {
        const response = await database.getDocument("66a2de2e00117b4ed64f", "66a2e03d000e648b1b08", projectId)
        // ("databaseId", "collectionId")

        return response as Project
    } catch (error) {
        throw Error("Could not find this project.")
    }
}
