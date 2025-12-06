function Resources() {
    return (
        <div className="resources">
            <h2 className="resources-title">The resources I recommend</h2>

            <div className="resources-container">
                <div className="resource">
                    <a
                        className="resources-link"
                        href="https://scrimba.com/?via=u014nen"
                        target="_blank"
                        rel="noopener noreferrer">
                        Scrimba
                    </a>
                    <p className="resource-text">
                        — an awesome platform to learn 
                        and practice software engineering.
                    </p>
                    <p className="resource-text">
                        Use my referral link above for a 20% discount for Scrimba Pro.
                    </p>
                </div>

                <div className="resource">
                    <a
                        className="resources-link"
                        href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf"
                        target="_blank"
                        rel="noopener noreferrer">
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
                        target="_blank"
                        rel="noopener noreferrer">
                        Appwrite
                    </a>
                    <p className="resource-text">
                        — an awesome open-source platform to build apps with a lot of features
                        including authentication, databases, functions, storage, and messaging.
                    </p>
                    <p className="resource-text">
                        I use Appwrite in this project to store information about my projects.
                    </p>
                </div>

                <div className="resource">
                    <a
                        className="resources-link"
                        href="https://go.cap.so/alena"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Cap
                    </a>
                    <p className="resource-text">
                        — the open source screen recording and sharing app 
                        for macOS and Windows.
                    </p>
                    <p className="resource-text">
                        Get a 20% discount for your first 12 months with my referral link above.
                    </p>
                </div>
            </div>
        </div> 
    )
}

export default Resources
