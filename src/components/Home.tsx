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
                        and solve problems.
                    </p>

                    <p className="home-text">
                        You can read a little bit more 
                        <NavLink to="/aboutme"> about me</NavLink>,
                        and check out my <NavLink to="/blog">blog.</NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home

