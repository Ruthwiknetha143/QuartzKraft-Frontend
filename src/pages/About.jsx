import { useEffect, useState } from 'react'
import { useAPI } from '../context/ApiContext'
import './overall.css'
import { Link } from 'react-router-dom'

const About = () => {
  const API_URL = useAPI()
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${API_URL}/aboutUsImages`)
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
    <section id="about">
      <section className='story'>
        <div className="container py-5">
          <div className="row py-5 g-5">
            <div className="col-md-6">
              <h1>Our Story</h1>
              <div className='py-3'>
                <h4>Engineered Surfaces. Crafted with Purpose.</h4>
                <p>QuartzKraft is a manufacturer of premium engineered quartz surfaces, built on decades of expertise in the stone industry. Our company combines craftsmanship, advanced manufacturing, and design innovation to create surfaces that deliver both beauty and long-term performance.</p>
                <p>From our headquarters in Hyderabad and manufacturing operations in Ongole, India, we serve customers across international markets with a strong focus on quality, reliability, and partnership.</p>
              </div>
              <Link to="/collections" className='fs-5 text-dark'>Explore Our Collections</Link>
            </div>
            <div className="col-md-6">
              <img className='img-fluid' src={images[0]?.image} alt="" />
            </div>
          </div>
          <div className="row py-5 g-5 align-items-center">
            <div className="col-md-6">
              <div className="row g-5">
                <div className="col-md-6">
                  <div className="bg-white p-5">
                    <h4>Natural Inspired</h4>
                    <p>Timeless design with modern precision.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-white p-5">
                    <h4>Quality & Variety</h4>
                    <p>Reliable global supply with diverse finishes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h4 className='pb-3'>Design-driven surfaces inspired by nature.</h4>
              <p>QuartzKraft develops engineered quartz surfaces that combine the timeless beauty of natural stone with the precision of handcrafting techniques and modern manufacturing. With reliable and on-time global deliveries, we pride ourselves on high quality products with less than a 0.5% complaint rate. Our product portfolio includes a wide palette of colors, finishes, and textures designed for residential and commercial spaces.</p>
            </div>
          </div>
          <div className="row py-5 g-5">
            <div className="col-md-6">
              <h4>Manufacturing with Intention.</h4>
              <div className='py-3'>
                <p>Our manufacturing approach blends traditional craftsmanship with automation and in-house technical development, enabling complex designs while maintaining natural-looking products and high quality standards.</p>
                <p>Our people are at the heart of everything we do, combining deep industry expertise with a strong culture of craftsmanship and precision.</p>
              </div>
            </div>
            <div className="col-md-6">
              <img className='img-fluid' src={images[1]?.image} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <h1 className='py-3'>The QuartzKraft Difference</h1>
          <div className="row py-3 g-5">
            <div className="col-md-6">
              <img className='img-fluid' src={images[2]?.image} alt="" />
            </div>
            <div className="col-md-6">
              <h4>Built on Experience. Focused on Partnership.</h4>
              <div className='py-3'>
                <p>QuartzKraft is a family-led company with over three decades of experience in the global stone industry. Built on craftsmanship, reliability, and long-term relationships, we partner with our customers to deliver surfaces that meet the highest standards of quality and performance.</p>
                <p>Our focus is simple: exceptional materials, dependable supply, and collaborative partnerships that support our customers’ growth.</p>
              </div>
              <Link to="/collections" className='fs-5 text-dark'>Explore Our Collections</Link>
            </div>
          </div>
          <div className="row py-5 g-5">
            <div className="col-md-6">
              <h4>Where Craftsmanship Meets Precision.</h4>
              <p className='py-3'>At QuartzKraft, every surface begins with carefully selected raw materials and production expertise.</p>
              <img className='img-fluid' src={images[3]?.image} alt="" />
            </div>
            <div className="col-md-6">
              <div className="row g-3">
                <div className="col-md-12">
                  <p className='craftsmanship p-5'>Premium quartz grit, resins, and pigments sourced from trusted global partners.</p>
                </div>
                <div className="col-md-6">
                  <p className='craftsmanship p-5'>A curated portfolio ranging from mid-range to premium collections, including backlit designs.</p>
                </div>
                <div className="col-md-6">
                  <p className='craftsmanship p-5'>Proven low-silica and zero-silica capabilities supporting the future of safe engineered surfaces.</p>
                </div>
                <div className="col-md-12">
                  <p className='craftsmanship p-5'>Our veining patterns are carefully handcrafted by skilled artisans, allowing us to create surfaces with depth, movement, and natural variation that closely reflect the beauty of natural stone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='quality'>
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-md-6 bg-black bg-opacity-75 text-white p-5">
              <h4>Quality Without Compromise.</h4>
              <div className='py-4'>
                <p>Quality is never negotiable. From raw material sourcing to final slab inspection, our team is committed to delivering surfaces that meet the highest standards of consistency and performance.</p>
                <p>We take pride in every slab we produce and in the trust our customers place in our products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="row g-5 py-5">
            <div className="col-md-6">
              <img className='img-fluid' src={images[4]?.image} alt="" />
            </div>
            <div className="col-md-6">
              <h4>More Than a Supplier — A Strategic Partner.</h4>
              <div className='py-3'>
                <p>We believe the strongest relationships are built through collaboration. QuartzKraft works closely with wholesalers to understand the market and develop products that succeed.</p>
                <p>Our team works closely with our partners to evaluate their existing product portfolio by conducting a market landscape analysis and identifying opportunities for differentiation and growth. We analyze color palettes, market trends, and competitive offerings to close key palette gaps.</p>
                <p>Because when our partners succeed, so do we.</p>
              </div>
            </div>
          </div>
          <div className="row g-5 py-5">
            <div className="col-md-6">
              <h4>Supply Chain Management.</h4>
              <div className='py-3'>
                <p>With core leadership experience spanning more than three decades in the U.S. and European markets, our team understands the operational realities of global distribution.</p>
                <p>We support our partners with disciplined supply chain management, including inventory forecasting and demand planning, reliable production scheduling, efficient logistics coordination and consistent on-time deliveries.</p>
              </div>
            </div>
            <div className="col-md-6">
              <img className='img-fluid' src={images[5]?.image} alt="" />
            </div>
          </div>
          <div className="row g-5 py-5">
            <div className="col-md-6">
              <img className='img-fluid' src={images[6]?.image} alt="" />
            </div>
            <div className="col-md-6">
              <h4>Samples That Sell.</h4>
              <div className='py-3'>
                <p>We produce exclusive sample slabs that showcase the full beauty and character of our surfaces. Our dedicated sample support ensures sales teams have the tools they need to effectively present and promote our products in the market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='factory'>
        <div className="container py-5">
          <div className="row py-5 g-5">
            <h1>Inside the QuartzKraft Factory</h1>
            <div className="col-md-6">
              <h4>Where Craftsmanship and Technology Come Together.</h4>
              <div className='py-3'>
                <p>Behind every QuartzKraft surface is a team of skilled craftsmen, engineers, and production specialists working together to create quartz slabs of exceptional quality. Our in-house technology lab continuously works to develop new, niche techniques and patterns to share with our customers.</p>
                <p>Our facility combines manufacturing technology with the hands-on expertise of artisans who bring depth, character, and precision to every surface we produce.</p>
                <p>From raw material preparation to final slab inspection, every stage of production reflects our commitment to quality, consistency, and craftsmanship.</p>
              </div>
              <Link to="/collections" className='fs-5 text-dark'>Explore Our Collections</Link>
            </div>
            <div className="col-md-6">
              <img className='img-fluid' src={images[7]?.image} alt="" />
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default About
