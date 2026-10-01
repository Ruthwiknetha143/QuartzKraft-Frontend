import { useEffect, useState } from 'react'
import { useAPI } from '../context/ApiContext'
import './overall.css'
import { Link } from 'react-router-dom'

let Offerings = () => {
    const API_URL = useAPI()
    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`${API_URL}/offeringsImages`)
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
        <section id="offerings">
            <section className='low'>
                <div className="container py-5">
                    <div className="row py-5 g-5 align-items-center">
                        <div className="col-md-6">
                            <img className='img-fluid' src={images[0]?.image} alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex flex-column justify-content-center gap-3">
                                <h1>Low & Zero Silica Surfaces</h1>
                                <p>As part of our material innovation efforts, QuartzKraft currently manufactures both low-silica and zero-silica engineered surfaces.</p>
                                <p>Our low-silica formulations contain less than 30% quartz, while our zero silica surfaces eliminate crystalline silica entirely through alternative material compositions.</p>
                                <p>These surfaces are currently being produced and supplied to customers in North America and Europe. By offering both traditional quartz and alternative formulations, QuartzKraft provides customers with flexibility to select the materials that best align with their product strategies, regulatory environments, and fabrication practices.</p>
                                <h4>Our Quartz Surface Offerings</h4>
                                <div>
                                    <div className="d-flex gap-3 align-items-center">
                                        <h1>1</h1>
                                        <p>Premium Traditional Engineered Quartz Surfaces.</p>
                                    </div>
                                    <div className="d-flex gap-3 align-items-center">
                                        <h1>2</h1>
                                        <p>Low Silica Quartz Surfaces – less than 30% crystalline silica.</p>
                                    </div>
                                    <div className="d-flex gap-3 align-items-center">
                                        <h1>3</h1>
                                        <p>Zero Silica Surfaces – zero crystalline silica.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container py-5">
                    <div className="row py-5 g-5 align-items-center">
                        <div className="col-md-6">
                            <h1>Handcrafted Quartz Surfaces.<br />
                                Built with Intention, for Inspired Spaces</h1>
                            <p className='py-4'>Engineered with premium materials and crafted with intricate veining, QuartzKraft surfaces combine the beauty of natural stone with the reliability of disciplined manufacturing.</p>
                            <Link to="/collections" className='fs-5 text-dark'>Our Collections</Link>
                        </div>
                        <div className="col-md-6">
                            <img className='img-fluid' src={images[1]?.image} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='qu360'>
                <div className="container py-5">
                    <div className="row py-5 g-3">
                        <h1 className='text-center py-3'>QuartzKraft 360</h1>
                        <div className="col-md-6">
                            <div className='py-4'>
                                <p>QuartzKraft has cut-to-size fabrication capabilities to support projects with customized Quartz surface countertops.</p>
                                <p>Our fabrication facility combines advanced CNC technology with skilled craftsmanship to produce precisely finished quartz components tailored to specific architectural and design requirements.</p>
                                <p>We offer a range of edge finishing options depending on the application and design preference. Common profiles include straight, eased edge, pencil round, small bevel, demi-bullnose and full bullnose.</p>
                            </div>
                            <div className="row g-3">
                                {images.slice(2, 4).map(value => {
                                    return (
                                        <div className="col-md-6">
                                            <img className='img-fluid' src={value.image} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className='img-fluid' src={images[4]?.image} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='ravileela'>
                <div className="container py-5">
                    <div className="text-center py-5">
                        <h1 className='text-white'>Explore Granite</h1>
                        <Link to="https://www.ravileelagranites.com/" className='fs-5 text-white'>Ravileela Granites</Link>
                    </div>
                </div>
            </section>
        </section >
    )
}

export default Offerings;