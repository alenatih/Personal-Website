import { useState } from "react"
import { Navigate, useSearchParams } from "react-router-dom"

function AboutMe() {
    const [user, setUser] = useState("userName")
    const [searchParams] = useSearchParams()

    const name = searchParams.get("name")

    function handleClick() {
        setUser("")
    }

    if (!user) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <div className="about-me">
            {name && <p>Hi, {name}!</p>}

            About me

            <button className="about-me-log-button" onClick={handleClick}>Sign out</button>
        </div>
    )
}

export default AboutMe
