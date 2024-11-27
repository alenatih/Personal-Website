function Resources() {
    return (
        <div className="resources">
            <h2 className="resources-title">Resources I recommend</h2>

            <div className="resource">
                <a
                    className="resources-link"
                    href="https://v2.scrimba.com/"
                    target="_blank">
                    Scrimba
                </a>
                <p className="resource-text">
                    — an awesome platform to learn 
                    and practice Frontend development.
                </p>
            </div>

            <div className="resource">
                <a
                    className="resources-link"
                    href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf"
                    target="_blank">
                    React Router course by Net Ninja
                </a>
                <p className="resource-text">
                    — an awesome course to learn React Router.
                </p>
            </div>

            <div className="resource">
                <a
                    className="resources-link"
                    href="https://appwrite.io/"
                    target="_blank">
                    Appwrite
                </a>
                <p className="resource-text">
                    — an awesome open-source platfrom to build apps with a lot of features
                    including authentication, databases, functions, storage, and messaging.
                </p>
                <p className="resource-text">
                    I use Appwrite in this project to store information about my projects.
                </p>
            </div>
        </div> 
    )
}

export default Resources
