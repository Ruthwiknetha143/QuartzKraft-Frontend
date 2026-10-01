import { useEffect, useState } from 'react'
import { useAPI } from '../context/ApiContext'
import './overall.css'
import { Link } from 'react-router-dom'

const Home = () => {
    const API_URL = useAPI()
    const [images, setImages] = useState([])
    const collection = ['Foundation', 'Persephone', 'Midnight', 'Diffusion']
    const difference = [
        {
            "title": "Engineered Quartz Surfaces",
            "desc": "Quartz surfaces that are dependable and durable."
        },
        {
            "title": "Cut-to-Size Fabrication",
            "desc": "Fabrication for custom projects."
        },
        {
            "title": "Low & Zero Silica Surfaces",
            "desc": "Proven capabilities to support the future of safe engineered surfaces."
        },
        {
            "title": "Natural Stone (Granite)",
            "desc": "Learn more about Ravileela Granites."
        }
    ]

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`${API_URL}/homeImages`)
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
        <section id="home">
            <section className="build">
                <div className="container text-center">
                    <h1>Built on Craftsmanship.</h1>
                    <h3>Driven by Partnership.</h3>
                    <Link to="/collections" className='btn btn-primary explore-btn'>Explore Our Collections</Link>
                </div>
            </section>
            <section>
                <div className="container py-5">
                    <div className="row py-5 g-5 align-items-center">
                        <div className="col-md-6">
                            <h1>Engineered Surfaces. Crafted with Purpose.</h1>
                            <p>QuartzKraft creates engineered surfaces that bring together craftsmanship, precision, and global expertise. Rooted in deep industry expertise, we blend manufacturing with a strong sense of craftsmanship to deliver surfaces that elevate spaces across the world.</p>
                            <p>Inspired by the depth and movement of natural stone, our surfaces are thoughtfully developed using carefully selected materials, skilled handcrafting, and modern production techniques. Our collections span a versatile range of designs and finishes—crafted to meet the evolving needs of residential and commercial spaces while maintaining exceptional quality standards and dependable supply.</p>
                            <h5>Partner Success</h5>
                            <p>At QuartzKraft, we go beyond manufacturing to support our partners’ success. Through collaborative product development, disciplined supply chain management, and dedicated sample and design support, we help our customers build differentiated offerings in their markets. Every slab reflects our commitment to precision, innovation, and the belief that strong partnerships create lasting impact.</p>
                            <Link to='/about-us' className='fs-4 text-dark'>Our Story</Link>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-4">
                                {images.slice(0, 4).map(value => {
                                    return <div className='col-md-6'><img className='img-fluid' src={value.image} alt="" /></div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='trusted'>
                <div className="container py-5">
                    <div className="row py-5 g-5 align-items-center">
                        <div className="col-md-6">
                            <img className="img-fluid" src={images[4]?.image} alt="" />
                        </div>
                        <div className="col-md-6 text-white">
                            <h1>Trusted by Global Partners</h1>
                            <p className='py-3'>QuartzKraft works closely with distributors, wholesalers, and designers worldwide. Our commitment to quality, reliability, and long-term partnerships has helped us build trusted relationships across North America, Europe, and India.</p>
                            <Link to='/about-us' className='fs-4 text-white'>The QuartzKraft Difference</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='trending'>
                <div className="container py-5">
                    <div className="row py-5">
                        <h1 className='text-center py-3'>Trending Quartz Surfaces</h1>
                        <div className="col-md-4">
                            <img className='img-fluid' src={images[5]?.image} alt="" />
                            <p>Sahara</p>
                        </div>
                        <div className="col-md-4">
                            <img className='img-fluid' src={images[6]?.image} alt="" />
                            <p>Sitka</p>
                        </div>
                        <div className="col-md-4">
                            <img className='img-fluid' src={images[7]?.image} alt="" />
                            <p>Ocean Mist</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-5'>
                <div className="container py-5 text-center w-75">
                    <h1>The Voice of Our Customers</h1>
                    <p className='py-3'>Throughout our long-standing relationship, QuartzKraft has been a trusted partner in providing a wide range of quartz colors that meet both the aesthetic and performance standards our brand is known for. Their materials have been integral to the success of our Quartz line, and we deeply value the consistency and quality they bring to our production. More than half our palette of 80 colors comes from them.</p>
                    <span>
                        <h4>National Distributor</h4>
                        <p>USA</p>
                    </span>
                </div>
            </section>
            <section className='explore py-5'>
                <div className="container py-5">
                    <h1>Explore Our Collections</h1>
                    <p className='py-3'>Explore our designs, which range from our foundation collection suitable for commercial and builder projects, to our luxury collections which focus on quartzite inspired patterns with warm hues, depth and movement.</p>
                    <div className="row">
                        {images.slice(8, 12).map((value, index) => (
                            <div className='col-md-3'>
                                <Link to={`${collection[index]}`}>
                                    <img
                                        className='img-fluid'
                                        src={value.image}
                                        alt=""
                                    /></Link>
                                <p>{collection[index]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='q360'>
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-md-6 bg-black bg-opacity-75 text-white p-5">
                            <h4>QuartzKraft 360</h4>
                            <div className='py-4'>
                                <h2>Crafted to specification.</h2>
                                <h2>Delivered with confidence.</h2>
                            </div>
                            <Link to="/offerings" className='fs-4 text-white'>Explore Cut to Size</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='difference'>
                <div className="container py-5">
                    <div className="row py-5 g-5 align-items-center">
                        <div className="col-md-6">
                            <div className="d-flex flex-column">
                                <h1 className="py-4">The QuartzKraft Difference</h1>
                                <div className="d-flex gap-5">
                                    <h1>01</h1>
                                    <div>
                                        <p className="m-0">Premium Raw Materials</p>
                                        <p>Quartz grit, resin and raw materials sourced from trusted partners.</p>
                                    </div>
                                </div>
                                <hr className="mt-1" />
                                <div className="d-flex gap-5">
                                    <h1>02</h1>
                                    <div>
                                        <p className="m-0">Handcrafted Techniques</p>
                                        <p>Hand crafted premium colors, with an emphasis on quality and consistency.</p>
                                    </div>
                                </div>
                                <hr className="mt-1" />
                                <div className="d-flex gap-5">
                                    <h1>03</h1>
                                    <div>
                                        <p className="m-0">Low & Zero Silica Innovation</p>
                                        <p>Proven low and zero silica capability for durable slabs.</p>
                                    </div>
                                </div>
                                <hr className="mt-1" />
                                <div className="d-flex gap-5">
                                    <h1>04</h1>
                                    <div>
                                        <p className="m-0">Customer Centricity</p>
                                        <p>Disciplined production, consistent deliveries, sample support, product strategy, and more.</p>
                                    </div>
                                </div>
                                <hr className="mt-1" />
                                <div className="d-flex gap-5">
                                    <h1>05</h1>
                                    <div>
                                        <p className="m-0">Transparency & Honesty</p>
                                        <p>Promises that are delivered upon, with a team that is easy and professional to work with.</p>
                                    </div>
                                </div>
                                <hr className="mt-1" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-3">
                                {images.slice(14, 18).map((value, index) => {
                                    return (
                                        <>
                                            <div className="col-md-6">
                                                <img className='img-fluid' src={value.image} />
                                                <div className='mt-2'>
                                                    <h5>{difference[index].title}</h5>
                                                    <p>{difference[index].desc}</p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                                <Link to="https://www.ravileelagranites.com/" className='fs-4 text-dark'>Explore Granite</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container py-5">
                    <div className="row g-5 py-5">
                        <div className="col-md-6">
                            <h1>Our Quartz Offerings</h1>
                            <p className='py-4'>Behind every QuartzKraft surface is a team of skilled crafters, engineers, and production specialists working together to create quartz slabs of exceptional quality. Our in-house technology lab continuously works to develop new, niche techniques and patterns to share with our customers.</p>
                            <img className='img-fluid' src={images[18]?.image} alt="" />
                        </div>
                        <div className="col-md-6">
                            <img className='img-fluid' src={images[19]?.image} alt="" />
                            <div className="d-flex flex-column py-3">
                                <div>
                                    <div className="d-flex gap-3 align-items-center">
                                        <h1>01</h1>
                                        <p className='pt-2'>Traditional Engineered Quartz Surfaces</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="d-flex gap-3 align-items-center">
                                        <h1>02</h1>
                                        <p className='pt-2'>Low Silica Quartz Surfaces (less than 30% crystalline silica)</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="d-flex gap-3 align-items-center">
                                        <h1>03</h1>
                                        <p className='pt-2'>Zero Silica Quartz Surfaces (zero crystalline silica)</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="d-flex gap-3 align-items-center">
                                        <h1>04</h1>
                                        <p className='pt-2'>Cut to Size Fabrication</p>
                                    </div>
                                    <hr className="m-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home
