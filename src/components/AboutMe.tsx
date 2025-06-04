// import { useState } from "react"
// import { Navigate, useSearchParams } from "react-router-dom"
import Sunset from "../assets/sunset.png"

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
        <div className="about-me-container">
            <div className="about-me">
                {/* {name && <p>Hi, {name}!</p>} */}

                <h2 className="about-me-title mobile">About me</h2>

                <div className="about-me-image-container">
                    <img className="about-me-image" src={Sunset} alt="Alena smiles"></img>
                </div>

                <div className="about-me-text-container">

                    <h2 className="about-me-title desktop">About me</h2>
                    <p className="about-me-text">
                        My main skills include HTML, CSS, JavaScript, TypeScript, 
                        React, Next.js, RESTful APIs, Git, GitHub, React Router, Vite, Vercel, 
                        Appwrite, PostgreSQL, Supabase, Firebase, React Testing Library, Vitest, WebdriverIO, 
                        Tailwind CSS, and Figma.
                    </p>
                    <p className="about-me-text">
                        I love design, UX/UI, books, languages, and AI. 
                        I enjoy building web apps, learning and using new technologies.
                    </p>
                    <p className="about-me-text">
                        I also enjoy doing aerial gymnastics on silks and lyra.
                    </p>

                </div>

                {/* <div className="about-me-log-button-container">
                    <button className="about-me-log-button" onClick={handleClick}>Sign out</button>
                </div> */}
            </div>

            <div className="about-me-video-container">
                <iframe
                    height="315"
                    width="560"
                    src="https://www.youtube.com/embed/SxN3sRH-5WQ?si=GCq6UjP5Ls4Vf8Jc"
                    title="YouTube video player"
                    // frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default AboutMe
