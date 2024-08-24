import { NavLink, useRouteError } from "react-router-dom"
import ErrorDuck from "../../assets/error-duck.png"

// A type that covers different possible error cases
type RouteError = {
    message?: string; // Handles standard error messages
    statusText?: string; // For errors from responses with a statusText (from failed HTTP responses)
    data?: any; // For custom errors that include data
  } | null // Handles the case where there's no error

function BlogError() {
    
    const error = useRouteError() as RouteError

    return (
        <div  className="blog-error">
            <h4 className="blog-error-title">Error</h4>
            <p>{error?.message || error?.statusText || error?.data }</p>
            <NavLink to="/">Come back to the Homepage</NavLink>

            <img
                className="error-image"
                src={ErrorDuck}
                alt="A duck with an error message">
            </img>
        </div>
    )
}

export default BlogError
