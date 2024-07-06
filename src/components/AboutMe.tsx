// import React from "react"
import {useRef} from "react"
import {ROUTE} from "./constants.ts"

function AboutMe() {
    const sectionRef = useRef<HTMLElement>(null)

    return (
        <div className="about-me"
            ref={sectionRef}
            nextTo={ROUTE.portfolio}>
            About me
        </div>
    )
}

export default AboutMe
