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

function BlogPost() {
    const { slugId } = useParams()
    const blogPostInfo = useLoaderData() as BlogPost

    const blogPostId = slugId?.split("-").pop()

    return (
        <div className="border-t-2 border-t-amber-300 dark:border-t-amber-600 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-md max-w-5xl p-6 mx-auto flex flex-col gap-4" id={blogPostId}>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-amber-50 tracking-wide">
                {blogPostInfo.Title}
            </h2>
            <div className="h-px w-16 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent dark:from-amber-500 dark:via-amber-400"></div>
            <p className="text-base text-gray-700 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                {blogPostInfo.Text}
            </p>
        </div>
    )
}

export default BlogPost

// Loader function
export const blogPostInfoLoader = async ({params}: LoaderFunctionArgs) => {
    const { slugId } = params

    const blogPostId = slugId?.split("-").pop()

    if (!blogPostId) {
        throw new Error("Blog post ID not found")
    }

    try {
        const response = await database.getDocument("66a2de2e00117b4ed64f", "66c135400034ed3eff4a", blogPostId)
        // ("databaseId", "collectionId")
        return response as BlogPost
    } catch (error) {
        throw Error("Could not find this blog post.")
    }
}
