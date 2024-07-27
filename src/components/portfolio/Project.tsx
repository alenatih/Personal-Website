import { useLoaderData, useParams } from "react-router-dom"
import { database } from "../../appwriteConfig.ts"
import Coffeshop from "../../assets/coffeshop.jpg"
import CoffeshopLight from "../../assets/coffeshop-light.jpg"

function Project() {
    const { id } = useParams()
    const projectInfo:any = useLoaderData()

    const projectImages = [
        {
            id: "66a42cf30017d026c701",
            image: Coffeshop,
        },
        {
            id: "66a42f5e003e71e6b4e6",
            image: CoffeshopLight,
        }
    ]

    let imageUrl = ""

    function image() {
        const projectImageObject = projectImages.find(projectImage => {
            return projectImage.id === id
        })

        if (projectImageObject) {
            // console.log("It works")
            imageUrl = projectImageObject.image
            return projectImageObject.image
        }
    }

    image()

    return (
        <div className="project" id={id}>
            <img className="project-image" src={imageUrl} alt="Project image"></img>
            <h4>{projectInfo.Title}</h4>
            <p>{projectInfo.Description}</p>
        </div>
    )
}

export default Project

// Loader function
export const projectInfoLoader = async ({params}:any) => {
    const { id } = params

    // const response = await fetch("https://jsonplaceholder.typicode.com/posts" + id)
    // const response = await fetch("http://localhost:4000/projects/" + id)

    // if (!response.ok) {
    //     throw Error("Could not find this project.")
    // }

    // return response.json()

    try {
        const response = await database.getDocument("66a2de2e00117b4ed64f", "66a2e03d000e648b1b08", id)
        // ("databaseId", "collectionId")
        return response
    } catch (error) {
        throw Error("Could not find this project.")
    }
}
