import { useLoaderData, useParams } from "react-router-dom"
import { database } from "../../appwriteConfig.ts"

function Project() {
    const { slugId } = useParams()
    const projectInfo:any = useLoaderData()

    const projectId = slugId?.split("-").pop()

    return (
        <div className="project" id={projectId}>
            <a className="project-title-link" href={projectInfo.Link} target="_blank">
                {projectInfo.Title}
            </a>
            <p className="project-description">{projectInfo.Description}</p>
            <div className="project-links-container">
                <a className="project-live-link" href={projectInfo.Link} target="_blank">
                    It's live here
                </a>
                <a className="project-github-link" href={projectInfo.GitHubLink} target="_blank">
                    GitHub
                </a>
            </div>
        </div>
    )
}

export default Project

// Loader function
export const projectInfoLoader = async ({params}:any) => {
    const { slugId } = params

    const projectId = slugId?.split("-").pop()

    // const response = await fetch("https://jsonplaceholder.typicode.com/posts" + id)
    // const response = await fetch("http://localhost:4000/projects/" + id)

    // if (!response.ok) {
    //     throw Error("Could not find this project.")
    // }

    // return response.json()

    try {
        const response = await database.getDocument("66a2de2e00117b4ed64f", "66a2e03d000e648b1b08", projectId)
        // ("databaseId", "collectionId")
        return response
    } catch (error) {
        throw Error("Could not find this project.")
    }
}
