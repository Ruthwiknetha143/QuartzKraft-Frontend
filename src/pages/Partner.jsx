import "./overall.css"
import { Link } from "react-router-dom"

let Partner = () => {
    return(
        <section id="partner">
            <section id="withUs">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-5 p-5 d-flex flex-column gap-3">
                            <h1>Partner With Us.</h1>
                            <h4>We Value Our Partners.</h4>
                            <p>At QuartzKraft, we believe that great surfaces are created through a balance of craftsmanship, discipline, and collaboration with our key partners.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="built">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col d-flex flex-column gap-3">
                            <h2>Built on Craftsmanship. Driven by Partnership.</h2>
                            <p>Our philosophy is rooted in a simple idea: success is built through long-term relationships. We work closely with our partners to understand their markets, their challenges, and their opportunities, creating surfaces that help them grow and succeed.</p>
                            <p>If you are interested in exploring a partnership with QuartzKraft, we welcome the opportunity to learn more about your business and your market.</p>
                            <p>Our team would be happy to discuss your product needs, design direction, and supply strategy.</p>
                            <Link to="/get-in-touch">Get in Touch</Link>
                        </div>
                        <div className="col">
                            <img src="https://quartzkraft.com/wp-content/uploads/2026/04/Built-on-Craftsmanship.-Driven-by-Partnership-1.jpg" alt="" height="352px" width="568px"/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="design">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-6"></div>
                        <div className="col-6 p-5 d-flex flex-column gap-3">
                            <h1>Design-Driven Surfaces Inspired by Nature.</h1>
                            <Link to="/collections">Explore Our Collections</Link>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Partner;