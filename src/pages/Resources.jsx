import { useEffect, useState } from 'react'
import { useAPI } from '../context/ApiContext'
import './overall.css'

let Resources = () => {

    const API_URL = useAPI()
    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`${API_URL}/resourcesImages`)
                const data = await response.json()
                setImages(data)
            }
            catch (err) {
                console.log("Error: ", err)
            }
        }
        fetchImages()
    }, [API_URL])

    return (
        <section id="resources">
            <section>
                <div className="container py-5">
                    <div className="row py-5 g-5">
                        <div className="col-md-6">
                            <h1>Certifications</h1>
                            <p className='py-3'>QuartzKraft is an ISO 9001 certified factory, with a strong focus on process, documentation and clear communication cross our multi-disciplinary teams. In addition, our products are CE and NSF certified for both the Europe, and US markets.</p>
                            <div className="row">
                                {images.slice(0, 3).map(value => {
                                    return (
                                        <div className="col-md-3">
                                            <img className='img-fluid' src={value.image} alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className='img-fluid' src={images[3]?.image} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='technical py-5'>
                <div className="container py-5 px-5 text-center">
                    <h1>Technical & Product Specifications</h1>
                    <p>Our factory produces jumbo size slabs, measuring 126 x 63 inches with options of 1.5 cm, 2cm and 3cm thickness. Our slab finishes include polished, honed, leather and satin. Samples are custom-made per customer specifications.</p>
                </div>
            </section>
            <section>
                <div className="container py-5">
                    <h1 className='text-center'>Supply Chain Management</h1>
                    <div className="row py-3 g-3">
                        <div className="col-md-4">
                            <div className="supply-card p-5">
                                <p>With three decades of leadership experience in US and Europe markets, our team understands the operational realities in managing efficient global distribution.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="supply-card p-5">
                                <p>We support our partners with inventory forecasting, demand planning and efficient logistics coordination to ensure on-time product deliveries.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="supply-card p-5">
                                <p>We ship from Krishnapatnam, Chennai, and Nhava Sheva ports, working with leading forwarders to secure competitive and rising freight rates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Resources;