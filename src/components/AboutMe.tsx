import { useState } from "react"
import { Navigate } from "react-router-dom"

function AboutMe() {
    const [user, setUser] = useState("userName")

    function handleClick() {
        setUser("")
    }

    if (!user) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <div className="about-me">
            About me

            <button onClick={handleClick}>Sign out</button>
        </div>
    )
}

export default AboutMe
