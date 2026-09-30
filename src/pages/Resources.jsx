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
            <section id="certifications">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col">
                            <div className="d-flex flex-column">
                                <h1>Certifications</h1>
                                <p>QuartzKraft is an ISO 9001 certified factory, with a strong focus on process, documentation and clear communication cross our multi-disciplinary teams. In addition, our products are CE and NSF certified for both the Europe, and US markets.</p>
                                <div className="d-flex">
                                    {images.slice(0,3).map(value => {
                                        return <img src={value.image} height="125px" width="125px" />
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <img src={images[3]?.image} height="297px" width="580px" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="specs">
                <div className="container h-100">
                    <div className="d-flex h-100 justify-content-center align-items-center flex-column gap-3">
                        <h1>Technical & Product Specifications</h1>
                        <p className="text-center w-75">Our factory produces jumbo size slabs, measuring 126 x 63 inches with options of 1.5 cm, 2cm and 3cm thickness. Our slab finishes include polished, honed, leather and satin. Samples are custom-made per customer specifications.</p>
                    </div>
                </div>
            </section>
            <section id="supply">
                <div className="container h-100">
                    <div className="d-flex flex-column h-100 align-items-center justify-content-center gap-3">
                        <h1>Supply Chain Management</h1>
                        <div className="d-flex gap-3" id="promise">
                            <div>
                                <p>With three decades of leadership experience in US and Europe markets, our team understands the operational realities in managing efficient global distribution.</p>
                            </div>
                            <div>
                                <p>We support our partners with inventory forecasting, demand planning and efficient logistics coordination to ensure on-time product deliveries.</p>
                            </div>
                            <div>
                                <p>We ship from Krishnapatnam, Chennai, and Nhava Sheva ports, working with leading forwarders to secure competitive freight rates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Resources;