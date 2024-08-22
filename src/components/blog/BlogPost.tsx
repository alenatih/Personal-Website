import { LoaderFunctionArgs, useLoaderData, useParams } from "react-router-dom"
import { database } from "../../appwriteConfig.ts"

interface BlogPost {
    $id: string;
    $collectionId: string;
    $createdAt: string;
    $databaseId: string;
    $permissions: string[];
    $tenant: string;
    $updatedAt: string;
    Title: string;
    Text: string;
    [key: string]: any; // Index signature to allow for additional properties
}

// interface Params {
//     slugId: string;
//     [key: string]: any; // Index signature to allow for additional properties
// }

function BlogPost() {
    // const { slugId } = useParams<Params>() // Type the useParams hook
    const { slugId } = useParams()
    // const blogPostInfo:any = useLoaderData()
    const blogPostInfo = useLoaderData() as BlogPost

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
// export const blogPostInfoLoader = async ({params}: { params: Params }) => {
    export const blogPostInfoLoader = async ({params}: LoaderFunctionArgs) => {
    const { slugId } = params

    const blogPostId = slugId?.split("-").pop()

    if (!blogPostId) {
        throw new Error("Blog post ID not found")
    }

    try {
        const response = await database.getDocument("66a2de2e00117b4ed64f", "66c135400034ed3eff4a", blogPostId)
        // ("databaseId", "collectionId")
        // A non-null assertion (blogPostId!) guarantees that blogPostId is not null or undefined when used
        return response as BlogPost
    } catch (error) {
        throw Error("Could not find this blog post.")
    }
}
