import { NavLink } from "react-router-dom"

function NotFound() {
    return (
        <div className="not-found">
            <h4>Custom 404 page</h4>

            <p>You can come back <NavLink to="/">Home</NavLink>.</p>
        </div>
    )
}

export default NotFound
