import "./default.css"
import { Link } from "react-router-dom"

let Footer = () => {
    
    let discover = ["home", "about us", "offerings", "resources", "collections", "partner with us", "get in touch"]

    let collections = ["Foundation", "Persephone", "Midnight", "Diffusion"]

    return (
        <>
            <footer className="text-white p-5">
                <div className="container h-100 p-4 my-5">
                    <div className="row">
                        <div className="col d-flex flex-column gap-3">
                            <Link to="/" id="qk" className="text-decoration-none"><span>Quartz</span>Kraft</Link>
                            <p>QuartzKraft creates premium engineered <br /> quartz surfaces, combining <br /> craftsmanship, innovation, and global <br /> expertise for lasting quality.</p>
                            <div id="socials">
                                <a href="">LIn</a>
                                <a href="">Ins</a>
                            </div>
                        </div>
                        <div className="col">
                            <h4>Discover</h4>
                            <hr className="w-75" />
                            <ul className="list-unstyled text-capitalize">
                                {discover.map(value => {
                                    let path = ""
                                    if (value === "home") {
                                        path = "/"
                                    }
                                    else {
                                        path = "/" + value.split(" ").join("-")
                                    }
                                    return <li><Link to={path} className="text-decoration-none text-white">{value}</Link></li>
                                })}
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Collections</h4>
                            <hr className="w-75" />
                            <ul className="list-unstyled">
                                {collections.map(value => {
                                    return <li><Link to={value} className="text-decoration-none text-white">{value}</Link></li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <footer id="rights" className="text-white">
                <div className="container">
                    <div className="row">
                        <div className="col my-3">© All rights reserved</div>
                        <div className="col my-3 text-end">Made by QuartzKraft</div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;