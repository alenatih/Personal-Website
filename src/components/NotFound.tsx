import { NavLink } from "react-router-dom"
import ErrorDuck from "../assets/error-duck.png"

function NotFound() {
    return (
        <div className="not-found">
            <h4 className="not-found-title">Error</h4>

            <p>You can come back <NavLink to="/">Home</NavLink>.</p>

            <img
                className="error-image"
                src={ErrorDuck}
                alt="A duck with an error message">
            </img>
        </div>
    )
}

export default NotFound
