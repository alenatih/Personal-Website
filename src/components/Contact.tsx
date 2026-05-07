// import { Form, redirect, useActionData } from "react-router-dom"
import { Form, useActionData, ActionFunctionArgs } from "react-router-dom"
import { database } from "../appwriteConfig.ts"
import { ID } from "appwrite"

// Define types for the action data
interface ContactActionData {
    error?: string;
    success?: boolean;
}

interface SubmissionData {
    name: string;
    email: string;
    message: string;
}

function Contact() {
    const data = useActionData() as ContactActionData

    return (
        <section className="pt-12 pb-36 px-0 sm:px-0 md:px-12 w-full max-w-5xl mx-auto">
            <div className="max-w-7xl mx-auto">

                {/* Section heading */}
                <div className="flex flex-col items-center text-center mb-20 gap-4">
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-amber-50 tracking-wide">
                        Contact
                    </h2>
                    <div className="h-px w-16 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent dark:from-amber-500 dark:via-amber-400"></div>
                </div>

                <div className="flex flex-col md:flex-row gap-12">

                    {/* Social links */}
                    <div className="flex flex-col items-center md:items-start gap-6 md:w-64 flex-shrink-0">
                        <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-900 dark:text-gray-100">
                            Nice to meet you!
                        </h3>

                        <div className="flex gap-4 text-3xl">
                            <a
                                href="https://github.com/alenatih"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                            >
                                <i className="fa-brands fa-square-github"></i>
                            </a>
                            <a
                                href="https://x.com/Alennushkaa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                            >
                                <i className="fa-brands fa-square-x-twitter"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/allennushkaa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a
                                rel="me noopener noreferrer"
                                href="https://mastodon.social/@AlenaTih"
                                target="_blank"
                                className="text-gray-600 dark:text-gray-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                            >
                                <i className="fa-brands fa-mastodon"></i>
                            </a>
                        </div>

                        <p className="text-sm text-amber-700 dark:text-amber-400 font-medium">
                            alyonatihomirova9@gmail.com
                        </p>
                    </div>

                    {/* Contact form */}
                    <div
                        className="flex flex-col flex-1 border-t-2 border-t-amber-300 dark:border-t-amber-600 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-md w-full p-6 pt-8 pb-12 mt-4 md:mt-0"
                    >
                        <h3 className="text-center md:text-start text-2xl font-semibold leading-none tracking-tight text-gray-900 dark:text-gray-100 mb-6">
                            Contact me
                        </h3>

                        <Form className="flex flex-col gap-4" method="post" action="/contact">

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium leading-none" htmlFor="input-name">
                                    Your name
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="input-name"
                                    type="text"
                                    name="name"
                                    required />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium leading-none" htmlFor="input-email">
                                    Your email
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="input-email"
                                    type="email"
                                    name="email"
                                    required />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium leading-none" htmlFor="input-message">
                                    Your message
                                </label>
                                <textarea
                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="input-message"
                                    name="message"
                                    required />
                            </div>

                            <button
                                className="self-center md:self-start text-gray-800 dark:text-amber-950 bg-amber-200 dark:bg-amber-300 hover:bg-amber-300 dark:hover:bg-amber-200 py-2 px-8 text-lg font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-2"
                            >
                                Submit
                            </button>

                            {data && data.error && (
                                <p className="text-sm text-red-600 dark:text-red-400">{data.error}</p>
                            )}
                        </Form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact

export const contactAction = async ({request}: ActionFunctionArgs) => {
    const data = await request.formData()

    const submission: SubmissionData = {
        name: data.get("name") as string,
        email: data.get("email") as string,
        message: data.get("message") as string
    }

    // console.log(submission)

    // if (submission.message.length < 10) {
    //     alert("Please write a message longer than 10 characters.")
    //     return {error: "Please write a message longer than 10 characters."}
    // }

    // Send a post request

    try {
        // Save the submission to Appwrite
        const response = await database.createDocument(
            "66a2de2e00117b4ed64f",       // My database ID
            "66c3d0d4003520e61640",       // Collection ID
            ID.unique(),                  // Generates a unique ID for the document
            submission                    // The data to be stored
        )

        // console.log("Document created with ID:", response.$id)

        // Redirect a user after successful submission
        // return redirect("/")

        alert(`Thank you, ${submission.name} ❤️ I will contact you!`)

        return response

    } catch (error) {
        console.error("Failed to create a document:", error)
        return { error: "There was a problem submitting your message. Please try again later." }
    }
}
