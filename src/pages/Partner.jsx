import "./overall.css"
import { Link } from "react-router-dom"

let Partner = () => {
    return (
        <section id="partner">
            <section className="partner">
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-md-6 us bg-opacity-75 p-5">
                            <h1>Partner With Us.</h1>
                            <h4 className="py-3">We Value Our Partners.</h4>
                            <p>At QuartzKraft, we believe that great surfaces are created through a balance of craftsmanship, discipline, and collaboration with our key partners.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="built">
                <div className="container py-5">
                    <div className="row g-5 py-5 align-items-center">
                        <div className="col-md-6">
                            <h1>Built on Craftsmanship. Driven by Partnership.</h1>
                            <p>Our philosophy is rooted in a simple idea: success is built through long-term relationships. We work closely with our partners to understand their markets, their challenges, and their opportunities, creating surfaces that help them grow and succeed.</p>
                            <p>If you are interested in exploring a partnership with QuartzKraft, we welcome the opportunity to learn more about your business and your market.</p>
                            <p>Our team would be happy to discuss your product needs, design direction, and supply strategy.</p>
                            <Link to="/get-in-touch" className="fs-5 text-dark">Get in Touch</Link>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid" src="https://quartzkraft.com/wp-content/uploads/2026/04/Built-on-Craftsmanship.-Driven-by-Partnership-1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="design">
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-md-6"></div>
                        <div className="col-md-6 us bg-opacity-75 p-5">
                            <h1 className="pb-3">Design-Driven Surfaces Inspired by Nature.</h1>
                            <Link to="/collections" className="fs-5 text-dark">Explore Our Collections</Link>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Partner;