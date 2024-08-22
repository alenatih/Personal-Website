import { useLoaderData, useParams } from "react-router-dom"
import { database } from "../../appwriteConfig.ts"

function BlogPost() {
    const { slugId } = useParams()
    const blogPostInfo:any = useLoaderData()

    const blogPostId = slugId?.split("-").pop()

    return (
        <div className="blog-post" id={blogPostId}>
            <h4 className="blog-post-page-title">
                {blogPostInfo.Title}
            </h4>
            <p className="blog-post-text">{blogPostInfo.Text}</p>
        </div>
    )
}

export default BlogPost

// Loader function
export const blogPostInfoLoader = async ({params}:any) => {
    const { slugId } = params

    const blogPostId = slugId?.split("-").pop()

    try {
        const response = await database.getDocument("66a2de2e00117b4ed64f", "66c135400034ed3eff4a", blogPostId)
        // ("databaseId", "collectionId")
        return response
    } catch (error) {
        throw Error("Could not find this blog post.")
    }
}
