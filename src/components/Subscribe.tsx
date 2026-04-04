// import { Form, redirect, useActionData } from "react-router-dom"
import { Form, useActionData, ActionFunctionArgs } from "react-router-dom"
import { database } from "../appwriteConfig.ts"
import { ID } from "appwrite"

// Define types for the action data
interface SubscribeActionData {
    error?: string;
    success?: boolean;
}

interface SubmissionData {
    name: string;
    email: string;
}

function Subscribe() {
    const data = useActionData() as SubscribeActionData

    return (
        <section className="pt-12 pb-36 px-4 sm:px-6 md:px-12 w-full max-w-5xl mx-auto">
            <div className="max-w-7xl mx-auto">

                {/* Section heading */}
                <div className="flex flex-col items-center text-center mb-12 md:mb-16 gap-4">
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-amber-50 tracking-wide">
                        Subscribe
                    </h2>
                    <div className="h-px w-16 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent dark:from-amber-500 dark:via-amber-400"></div>
                    <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-2xl leading-relaxed">
                        Subscribe to my newsletter
                    </p>
                </div>

                {/* Subscribe form card */}
                <div
                    className="flex flex-col max-w-lg mx-auto border-t-2 border-t-amber-300 dark:border-t-amber-600 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-md p-6 pb-12"
                >

                    <Form className="flex flex-col gap-4" method="post" action="/subscribe">

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium leading-none" htmlFor="subscribe-name">
                                Your name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="subscribe-name"
                                type="text"
                                name="name"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium leading-none" htmlFor="subscribe-email">
                                Your email
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="subscribe-email"
                                type="email"
                                name="email"
                                required
                            />
                        </div>

                        <button className="self-start text-gray-800 dark:text-amber-950 bg-amber-200 dark:bg-amber-300 hover:bg-amber-300 dark:hover:bg-amber-200 py-2 px-8 text-lg font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-2">
                            Submit
                        </button>

                        {data && data.error && (
                            <p className="text-sm text-red-600 dark:text-red-400">{data.error}</p>
                        )}
                    </Form>

                    <p className="text-xs text-muted-foreground mt-4">
                        By submitting, you agree to receive emails from me.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Subscribe

export const subscribeAction = async ({request}: ActionFunctionArgs) => {
    const data = await request.formData()

    const submission: SubmissionData = {
        name: data.get("name") as string,
        email: data.get("email") as string,
    }

    // console.log(submission)

    // Send a post request
    try {
        // Save the submission to Appwrite
        const response = await database.createDocument(
            "66a2de2e00117b4ed64f",       // My database ID
            "subscribers",                // Collection ID
            ID.unique(),                  // Generates a unique ID for the document
            submission                    // The data to be stored
        )

        // console.log("Document created with ID:", response.$id)

        // Redirect a user after successful submission
        // return redirect("/")

        alert(`Thank you, ${submission.name}, for subscribing to my newsletter ❤️`)

        return response

    } catch (error) {
        console.error("Failed to create a document:", error)
        return { error: "There was a problem subscribing. Please try again later." }
    }
}
