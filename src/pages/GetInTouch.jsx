import "./overall.css"
import { useState } from "react"

let GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        customer: "",
        message: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }


    return (
        <section id="getintouch">
            <section>
                <div className="container py-5">
                    <h1 className="text-center py-3">Contact Us</h1>
                    <div className="row g-5">
                        <div className="col-md-6">
                            <div>
                                <h4>Factory</h4>
                                <p>
                                    Plot Number 34A & 34B APIIC BPSEZ <br />
                                    Annangi Village, Maddipadu Mandal <br />
                                    Prakasam District <br />
                                    Andhra Pradesh - 523211
                                </p>
                            </div>
                            <div className="pt-4">
                                <h4>Corporate Office</h4>
                                <p>
                                    9-1-77, Sharath Complex <br />
                                    2nd Floor, Sarojini Devi Road <br />
                                    Secunderabad <br />
                                    Telangana - 500003
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center">
                                <h4>We would love to hear from you!</h4>
                                <p>Please reach out to us using the below form.</p>
                            </div>
                            <form action="" onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input onChange={handleChange} type="text" placeholder="Your Name" className="form-control border-black" name="name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input onChange={handleChange} type="email" placeholder="Your Email" className="form-control border-black" name="email" />
                                    </div>
                                    <div className="col-md-6">
                                        <input onChange={handleChange} type="tel" placeholder="Phone Number" className="form-control border-black" name="phone" />
                                    </div>
                                    <div className="col-md-6">
                                        <select onChange={handleChange} name="customer" className="form-select border-black">
                                            <option value="">Select</option>
                                            <option value="Wholesaler">Wholesaler</option>
                                            <option value="Fabricator">Fabricator</option>
                                            <option value="Builder">Builder</option>
                                            <option value="Homeowner">Homeowner</option>
                                            <option value="Designer">Designer</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12">
                                        <textarea onChange={handleChange} name="message" rows="4" placeholder="Your Message" className="form-control border-black" />
                                    </div>
                                </div>
                                <div className="py-3">
                                    <button className="btn text-white px-4 rounded-pill">Send your message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default GetInTouch;