import { useLoaderData, useParams } from "react-router-dom"

function Project() {
    const { id } = useParams()
    const projectInfo = useLoaderData()

    return (
        <div className="project">
            <h4>Project {id}</h4>
            <p>{projectInfo.title}</p>
            <p>{projectInfo.description}</p>
        </div>
    )
}

export default Project

// Loader function
export const projectInfoLoader = async ({params}:any) => {
    const { id } = params

    const response = await fetch("https://jsonplaceholder.typicode.com/posts" + id)
}
