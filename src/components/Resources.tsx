function Resources() {
    return (
        <div className="resources">
            <h2 className="resources-title">Resources I recommend</h2>

            <div className="resource">
                <a className="resources-link" href="https://v2.scrimba.com/">Scrimba</a>
                <p className="resource-text">
                    — an awesome platform to learn 
                    and practice Frontend development.
                </p>
            </div>

            <div className="resource">
                <a className="resources-link" href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf">
                    React Router course by Net Ninja
                </a>
                <p className="resource-text">
                    — an awesome course to learn React Router.
                </p>
            </div>

            <div className="resource">
                <a className="resources-link" href="https://appwrite.io/">Appwrite</a>
                <p className="resource-text">
                    — an awesome open-source platfrom to build apps with a lot of features
                    including Authentication, Databases, Functions, Storage, and Messaging.
                </p>
                <p className="resource-text">
                    I use Appwrite in this project to store information about my projects.
                </p>
            </div>

            <div className="resource">
                <a className="resources-link" href="https://healthcheck.eddiehubcommunity.org/">
                    HealthCheck
                </a>
                <p className="resource-text">
                    — an awesome open-source project to use, learn from, and contribute to.
                </p>

                <a href="https://github.com/EddieHubCommunity/HealthCheck">GitHub</a>

                <p className="resource-text community-text">
                    Also a great community about open source:
                </p>
                <a href="https://github.com/EddieHubCommunity">EddieHub</a>
            </div>

        </div>
    )
}

export default Resources
