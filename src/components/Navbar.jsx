import "./default.css"
import { Link } from "react-router-dom"

let Navbar = () => {

  let navigation = ["about us", "offerings", "resources", "collections", "partner with us"]

  return (
    <nav className="navbar navbar-expand-lg shadow-sm py-3 sticky-top">
      <div className="container">
        <Link className="navbar-brand fs-1 fw-light" to="/">
          <span className="text-dark">Quartz</span><span className="text-secondary">Kraft</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
          aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav mx-auto gap-lg-2">
            {navigation.map(value => {
              let path = "/" + value.split(" ").join("-")
              return(
                <>
                <li className="nav-item">
                  <Link to={path} className="nav-link text-dark text-uppercase">{value}</Link>
                </li>
                </>
              )
            })}
          </ul>
          <Link to='/get-in-touch' className="btn rounded-0 px-4 py-2 text-white">
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;