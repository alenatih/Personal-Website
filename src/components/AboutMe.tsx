// import { useState } from "react"
// import { Navigate, useSearchParams } from "react-router-dom"

function AboutMe() {
    // const [user, setUser] = useState("userName")
    // const [searchParams] = useSearchParams()

    // const name = searchParams.get("name")

    // function handleClick() {
    //     setUser("")
    // }

    // if (!user) {
    //     return <Navigate to="/" replace={true} />
    // }

    return (
        <div className="about-me">
            {/* {name && <p>Hi, {name}!</p>} */}

            <h2 className="about-me-title">About me</h2>

            <p className="about-me-text">I’m currently taking the Frontend Developer Career Path course on Scrimba 
                and working towards becoming a Frontend Developer.
            </p>
            <p className="about-me-text">My main skills include HTML, CSS, JavaScript, RESTful APIs, Git, GitHub, 
                React Router, Vite, Vercel, Firebase, and Figma. Learning React, TypeScript, and Tailwind CSS.
            </p>
            <p className="about-me-text">I love design, UX/UI, books, languages, and AI. 
                I enjoy building web apps, learning and using new technologies.
            </p>
            <p className="about-me-text">I also enjoy doing aerial gymnastics on silks and lyra.</p>

            {/* <div className="about-me-log-button-container">
                <button className="about-me-log-button" onClick={handleClick}>Sign out</button>
            </div> */}
        </div>
    )
}

export default AboutMe
