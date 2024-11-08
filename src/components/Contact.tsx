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
        <div className="contact">

            <div className="contact-social-container">

                <h4 className="social-links-title">Nice to meet you!</h4>

                <div className="social-links-container">
                    <a href="https://github.com/AlenaTih" target="_blank">
                        <i className="fa-brands fa-square-github"></i>
                    </a>
                    <a href="https://x.com/Alennushkaa" target="_blank">
                        <i className="fa-brands fa-square-x-twitter"></i>
                    </a>
                    {/* <a href="https://www.youtube.com/@alenaatikh" target="_blank">
                        <i className="fa-brands fa-square-youtube"></i>
                    </a> */}
                    <a href="https://www.instagram.com/allennushkaa/" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a rel="me" href="https://mastodon.social/@AlenaTih" target="_blank">
                        <i className="fa-brands fa-mastodon"></i>
                    </a>
                </div>

                <p className="contact-text">alyonatihomirova9@gmail.com</p>

            </div>

            <div className="contact-form-container">

                <h4 className="contact-title">Contact me</h4>

                <Form className="contact-form" method="post" action="/contact">
                    <label htmlFor="input-name">
                        Your name
                        <input
                            className="input-name"
                            id="input-name"
                            type="text"
                            name="name"
                            required />
                    </label>

                    <label htmlFor="input-email">
                        Your email
                        <input
                            className="input-email"
                            id="input-email"
                            type="email"
                            name="email"
                            required />
                    </label>

                    <label htmlFor="input-message">
                        Your message
                        <textarea
                            className="input-message"
                            id="input-message"
                            name="message"
                            required ></textarea>
                    </label>

                    <button className="form-submit-button">Submit</button>

                    {data && data.error && <p>{data.error}</p>}
                </Form>

            </div>

        </div>
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
