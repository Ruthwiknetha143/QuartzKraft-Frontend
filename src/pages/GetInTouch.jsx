import "./overall.css"

let GetInTouch = () => {
    return (
        <section id="getintouch">
            <div className="container my-5">
                <h1 className="text-center">Contact Us</h1>
                <div className="row my-3">
                    <div className="col">
                        <div className="d-flex flex-column gap-4">
                            <div>
                                <h4>Factory</h4>
                                <p className="my-3">
                                    Plot Number 34A & 34B APIIC BPSEZ<br />
                                    Annangi Village, Maddipadu Mandal<br />
                                    Prakasam District<br />
                                    Andhra Pradesh - 523211
                                </p>
                            </div>
                            <div>
                                <h4>Corporate Office</h4>
                                <p className="my-3">
                                    9-1-77, Sharath Complex<br />
                                    2nd Floor, Sarojini Devi Road<br />
                                    Secunderabad<br />
                                    Telangana - 500003
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column align-items-center">
                            <h4>We would love to hear from you!</h4>
                            <p>Please reach out to us using the below form.</p>
                            <form action="" className="d-flex justify-content-center gap-4 flex-wrap">
                                <input type="text" placeholder="Your Name"/>
                                <input type="email" placeholder="Your Email"/>
                                <input type="tel" placeholder="Phone Number"/>
                                <select>
                                    <option value="none">Select</option>
                                    <option value="wholesaler">Wholesaler</option>
                                    <option value="fabricator">Fabricator</option>
                                    <option value="builder">Builder</option>
                                    <option value="homeowner">Homeowner</option>
                                    <option value="designer">Designer</option>
                                </select>
                                <textarea placeholder="Your Message"/>
                                <button>Send your message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetInTouch;