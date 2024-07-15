import { Form, redirect, useActionData } from "react-router-dom"

function Contact() {
    const data = useActionData()

    return (
        <div className="contact">
            <h4>Contact me</h4>

            <Form className="contact-form" method="post" action="/contact">
                <label>
                    Your name
                    <input className="input-name" type="text" name="name" required />
                </label>

                <label>
                    Your email
                    <input className="input-email" type="email" name="email" required />
                </label>

                <label>
                    Your message
                    <textarea className="input-message" name="message" required ></textarea>
                </label>

                <button className="form-submit-button">Submit</button>

                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
    )
}

export default Contact

export const contactAction = async ({request}:any) => {
    const data = await request.formData()

    const submission = {
        name: data.get("name"),
        email: data.get("email"),
        message: data.get("message")
    }

    console.log(submission)

    // Send a post request

    if (submission.message.length < 10) {
        return {error: "Please write a message longer than 10 characters."}
    }

    // Redirect a user
    return redirect("/")
}
