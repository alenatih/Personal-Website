import { Outlet } from "react-router-dom"

function Blog() {
    return (
        <div className="blog">
            {/* <h2 className="blog-title">Blog
                <span className="blog-title-span"> will be here</span>
            </h2>

            <h4 className="blog-quote-title">
                <span className="blog-quote-title-span">But until then, here's </span>
                My favourite quote
            </h4>
            <p className="blog-quote-text">"If you want momentum, you’ll have to create it yourself, 
                right now, by getting up and getting started."
            </p>
            <p className="blog-quote-author">- Ryan Holiday</p> */}

            <Outlet />
        </div>
    )
}

export default Blog
