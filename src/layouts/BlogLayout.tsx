import { Outlet } from "react-router-dom"

function Blog() {
    return (
        <div className="w-full mb-24">
            <Outlet />
        </div>
    )
}

export default Blog
