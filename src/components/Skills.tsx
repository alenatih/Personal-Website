// import React from "react"
import {useRef} from "react"
import {ROUTE} from "./constants.ts"

function Skills() {
    // const sectionRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

    return (
        <div className="skills"
            ref={sectionRef}
            prevTo={ROUTE.portfolio}>
            Skills
        </div>
    )
}

export default Skills
