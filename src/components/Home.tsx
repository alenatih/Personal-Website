import { NavLink } from "react-router-dom"
import Sunset from "../assets/sunset.png"

function Home() {

    return (
        <div className="home">
            <h2 className="home-title">Alena Tikhomirova, a Frontend developer</h2>

            <div className="home-container">
                <div className="home-image-container">
                    <img
                        className="home-image"
                        src={Sunset}
                        alt="Alena smiles with sunset in the background">
                    </img>
                </div>

                <div className="home-text-container">
                        <NavLink className="view-work-link" to="/portfolio">View my work</NavLink>

                    <p className="home-text">
                        My goal is to be not just a Frontend developer, 
                        but a software engineer who can work with any technology 
                        and solves business problems.
                    </p>

                    <p className="home-text">
                        You can read a little bit more 
                        <NavLink to="/aboutme"> about me</NavLink>,
                        and check out my <NavLink to="/blog">blog.</NavLink>
                    </p>

                    <p className="home-text open-text">
                        I'm open for Frontend Developer roles in a company or startup.
                    </p>

                    <p className="home-text">
                        You can contact me at <span className="home-email">alyonatihomirova9@gmail.com.</span>
                    </p>
                    <p className="home-text">
                        or see my <NavLink to="/contact">social links.</NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
