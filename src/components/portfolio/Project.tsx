import { useLoaderData, useParams } from "react-router-dom"

function Project() {
    const { id } = useParams()
    const projectInfo:any = useLoaderData()

    return (
        <div className="project">
            <h4>{projectInfo.title}</h4>
            <p>{projectInfo.description}</p>
        </div>
    )
}

export default Project

// Loader function
export const projectInfoLoader = async ({params}:any) => {
    const { id } = params

    // const response = await fetch("https://jsonplaceholder.typicode.com/posts" + id)
    const response = await fetch("http://localhost:4000/projects/" + id)

    if (!response.ok) {
        throw Error("Could not find this project.")
    }

    return response.json()
}
