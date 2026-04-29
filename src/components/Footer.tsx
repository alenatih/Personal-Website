function Footer() {
    return (
        <footer className="footer">
            <div className="flex flex-col items-center md:items-start gap-4 w-full">
                <p
                    className="footer-text"
                >
                        Built with <i className="fa-solid fa-heart"></i> by Alena
                </p>

                {/* <a
                    className="support-link text-sm text-blue-600 dark:text-blue-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors underline"
                    href="https://boosty.to/alenatih/donate"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    You can support me here if you want.
                </a> */}
            </div>

            <div className="social-links-container">
                <a
                    href="https://github.com/alenatih"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-square-github"></i>
                </a>
                <a
                    href="https://x.com/Alennushkaa"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-square-x-twitter"></i>
                </a>
                {/* <a
                        href="https://www.youtube.com/@alenaatikh"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <i className="fa-brands fa-square-youtube"></i>
                </a> */}
                <a
                    href="https://www.instagram.com/allennushkaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                    rel="me noopener noreferrer"
                    href="https://mastodon.social/@AlenaTih"
                    target="_blank"
                >
                    <i className="fa-brands fa-mastodon"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer
