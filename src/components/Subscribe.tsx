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
        <div className="subscribe">

                <h4 className="subscribe-title">Subscribe to my newsletter</h4>

                <Form className="subscribe-form" method="post" action="/subscribe">
                    <label htmlFor="subscribe-name">
                        Your name
                        <input
                            className="input-name"
                            id="subscribe-name"
                            type="text"
                            name="name"
                            required
                        />
                    </label>

                    <label htmlFor="subscribe-email">
                        Your email
                        <input
                            className="input-email"
                            id="subscribe-email"
                            type="email"
                            name="email"
                            required />
                    </label>

                    <button className="form-submit-button">Submit</button>

                    {data && data.error && <p>{data.error}</p>}
                </Form>

                <p className="subscribe-disclaimer">
                    By submitting, you agree to receive emails from me.
                </p>

        </div>
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
