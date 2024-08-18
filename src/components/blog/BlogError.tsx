import { NavLink, useRouteError } from "react-router-dom"
import ErrorDuck from "../../assets/error-duck.png"

function BlogError() {
    
    const error:any = useRouteError()

    return (
        <div  className="blog-error">
            <h4 className="blog-error-title">Error</h4>
            <p>{error.message}</p>
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
