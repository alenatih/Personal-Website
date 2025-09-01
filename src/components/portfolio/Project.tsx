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

    console.log("Image ID:", projectInfo.imageId)
    console.log("Image URL:", projectImageUrl)

    return (
        <div className="project" id={projectId}>
            <a
                className="project-title-link"
                href={projectInfo.Link}
                target="_blank"
                rel="noopener noreferrer">
                {projectInfo.Title}
            </a>
            <p className="project-description">{projectInfo.Description}</p>
            <div className="project-links-container">
                <a
                    className="project-live-link"
                    href={projectInfo.Link}
                    target="_blank"
                    rel="noopener noreferrer">
                    It's live here
                </a>
                {projectInfo.GitHubLink && (
                    <a
                        className="project-github-link"
                        href={projectInfo.GitHubLink}
                        target="_blank"
                        rel="noopener noreferrer">
                        GitHub
                    </a>
                )}
            </div>
            {projectImageUrl && (
                <img
                    className="project-image"
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
