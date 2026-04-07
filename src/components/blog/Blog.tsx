import { NavLink, useLoaderData } from "react-router-dom"
import { database } from "../../appwriteConfig.ts"
import slugify from "slugify"

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

function NewBlog() {
    const blogPosts = useLoaderData() as BlogPost[] // Type the loader data as an array of BlogPost objects

    // console.log(blogPosts)

    if (!blogPosts) {
        return (
            <div className="px-4 sm:px-6 md:px-12 py-24 max-w-7xl mx-auto w-full">
                <p className="text-gray-600 dark:text-gray-400">Loading...</p>
            </div>
        )
    }

    return (
        <section className="pt-12 pb-36 px-4 sm:px-6 md:px-12 w-full max-w-4xl mx-auto">
            <div className="max-w-7xl mx-auto">

                {/* Section heading */}
                <div className="flex flex-col items-center text-center mb-16 gap-4">
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-amber-50 tracking-wide">
                        Blog
                    </h2>
                    <div className="h-px w-16 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent dark:from-amber-500 dark:via-amber-400"></div>
                </div>

                {/* Blog post cards */}
                <div className="flex flex-col gap-8">
                    {blogPosts.slice().reverse().map((blogPost: BlogPost) => {
                        const slug = slugify(blogPost.Title, { lower: true, replacement: "_" })
                        return (
                            <NavLink
                                to={`${slug}-${blogPost.$id}`}
                                key={blogPost.$id}
                                className="group border-t-2 border-t-amber-300 dark:border-t-amber-600 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-all duration-500 p-6 pb-12 no-underline"
                            >
                                <h3 className="text-lg font-semibold tracking-tight group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                                    {blogPost.Title}
                                </h3>
                            </NavLink>
                        )
                    })}

                    {/* <NavLink
                        to="blog-post-one-year"
                        className="group border-t-2 border-t-amber-300 dark:border-t-amber-600 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-all duration-500 p-6 no-underline"
                    >
                        <h3 className="text-lg font-semibold tracking-tight group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                            Blog post 0
                        </h3>
                    </NavLink> */}
                </div>

            </div>
        </section>
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
        return response.documents as BlogPost[] // Type the response as an array of BlogPost objects
    } catch (error) {
        throw Error("Could not fetch the list of blog posts.")
    }
}

export default NewBlog
