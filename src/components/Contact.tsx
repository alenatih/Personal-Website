import { Form, redirect, useActionData } from "react-router-dom"

function Contact() {
    const data:any = useActionData()

    return (
        <div className="contact">
            <h4 className="contact-title">Contact me</h4>

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

            <h4 className="social-links-title">My links</h4>

            <div className="social-links-container">
                <a href="https://x.com/Alennushkaa" target="_blank">
                    <i className="fa-brands fa-square-x-twitter"></i>
                </a>
                <a href="https://www.youtube.com/@alenaatikh" target="_blank">
                    <i className="fa-brands fa-square-youtube"></i>
                </a>
                <a href="https://www.instagram.com/allennushkaa/" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://github.com/AlenaTih" target="_blank">
                    <i className="fa-brands fa-square-github"></i>
                </a>
            </div>
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
        alert("Please write a message longer than 10 characters.")
        return {error: "Please write a message longer than 10 characters."}
    }

    // Redirect a user
    return redirect("/")
}
