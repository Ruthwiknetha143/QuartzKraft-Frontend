import "./default.css"
import { Link } from "react-router-dom"

let Footer = () => {

    const discover = ["home", "about us", "offerings", "resources", "collections", "partner with us", "get in touch"]

    const collections = ["Foundation", "Persephone", "Midnight", "Diffusion"]

    return (
        <footer>
            <div className="container py-5">
                <div className="row py-3 text-white">
                    <div className="col-md-4">
                        <Link className="fs-1 fw-light text-decoration-none" to="/">
                            <span className="text-white">Quartz</span><span className="text-secondary">Kraft</span>
                        </Link>
                        <p className="w-75">QuartzKraft creates premium engineered quartz surfaces, combining craftsmanship, innovation, and global expertise for lasting quality.</p>
                    </div>
                    <div className="col-md-4">
                        <h2>Discover</h2>
                        <hr className="w-75 py-1" />
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
                    <div className="col-md-4">
                        <h2>Collections</h2>
                        <hr className="w-75 py-1" />
                        <ul className="list-unstyled">
                            {collections.map(value => {
                                return <li><Link to={value} className="text-decoration-none text-white">{value}</Link></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="rights">
                <div className="container py-1 text-white">
                    <div className="row pt-2">
                        <div className="col-6">
                            <p>© All rights reserved</p>
                        </div>
                        <div className="col-6">
                            <p className="text-end">Made by QuartzKraft</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;