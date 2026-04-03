import { Outlet } from "react-router-dom"

function Blog() {
    return (
        <div className="w-full mb-20 md:mb-24">
            <Outlet />
        </div>
    )
}

export default Blog
