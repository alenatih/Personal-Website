import { NavLink, useLoaderData } from "react-router-dom"
import { database } from "../../appwriteConfig.ts"
import slugify from "slugify"

function NewBlog() {
    const blogPosts:any = useLoaderData()

    // console.log(blogPosts)

    if (!blogPosts) {
        return (
            <div>
                <h4>Loading...</h4>
            </div>
        )
    }

    return (
        <div className="blog">
            {blogPosts.toReversed().map((blogPost:any) => {
                // <NavLink to={blogPost.id.toString()} key={blogPost.id}>
                const slug = slugify(blogPost.Title, { lower: true, replacement: "_" })
                return (
                    <NavLink to={`${slug}-${blogPost.$id}`} key={blogPost.$id}>
                        <h4 className="blog-post-title">{blogPost.Title}</h4>
                    </NavLink>
                )
})}
        </div>
    )
}

// Data loader
export const blogPostsLoader = async () => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    // const response = await fetch("http://localhost:4000/projects")

    // Command to wrap json file with an endpoint:
    //  json-server -p 4000 -w ./src/data/projects.json

    // if (!response.ok) {
    //     throw Error("Could not fetch the list of projects.")
    // }

    // return response.json()

    try {
        const response = await database.listDocuments("66a2de2e00117b4ed64f", "66c135400034ed3eff4a")
        // ("databaseId", "collectionId")
        return response.documents
    } catch (error) {
        throw Error("Could not fetch the list of blog posts.")
    }
}

export default NewBlog
