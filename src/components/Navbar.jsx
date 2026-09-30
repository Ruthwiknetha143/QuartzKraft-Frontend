import "./default.css"
import { Link } from "react-router-dom"

let Navbar = () => {

    let navigation = ["about us", "offerings", "resources", "collections", "partner with us"]
    
    return (
        <nav className="shadow-sm">
            <div className="container h-100">
                <div className="h-100 row align-items-center">
                    <div className="col">
                        <Link to="/" id="qk" className="text-decoration-none"><span>Quartz</span>Kraft</Link>
                    </div>

                    <div className="col">
                        <ul className="d-flex justify-content-center gap-3 list-unstyled text-uppercase mt-3">
                            {navigation.map(value => {
                                let path = "/" + value.split(" ").join("-")
                                return <li><Link to={path} className="text-decoration-none fw-bold">{value}</Link></li>
                            })}
                        </ul>
                    </div>

                    <div className="col text-center">
                        <Link to="/get-in-touch"><button className="p-1 px-3 text-capitalize text-white">get in touch</button></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;